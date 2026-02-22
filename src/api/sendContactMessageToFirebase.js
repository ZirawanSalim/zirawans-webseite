import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, isFirebaseConfigured } from "../lib/firebase";

const fallbackReceiverEmail = "Zirawan@hotmail.com";
const receiverEmail = import.meta.env.VITE_CONTACT_RECEIVER_EMAIL || fallbackReceiverEmail;

export async function sendContactMessageToFirebase({ name, email, nachricht }) {
  if (!isFirebaseConfigured || !db) {
    throw new Error(
      "Firebase ist nicht konfiguriert. Bitte VITE_FIREBASE_* Variablen in .env setzen."
    );
  }

  const cleanName = name.trim();
  const cleanEmail = email.trim();
  const cleanMessage = nachricht.trim();

  await addDoc(collection(db, "contactMessages"), {
    name: cleanName,
    email: cleanEmail,
    nachricht: cleanMessage,
    createdAt: serverTimestamp(),
    source: "portfolio-contact-form",
  });

  await addDoc(collection(db, "mail"), {
    to: [receiverEmail],
    replyTo: cleanEmail,
    message: {
      subject: `Neue Portfolio Nachricht von ${cleanName}`,
      text: `Name: ${cleanName}\nE-Mail: ${cleanEmail}\n\nNachricht:\n${cleanMessage}`,
    },
    createdAt: serverTimestamp(),
  });
}
