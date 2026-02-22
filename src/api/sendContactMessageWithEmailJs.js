import emailjs from "@emailjs/browser";

const serviceId = (import.meta.env.VITE_EMAILJS_SERVICE_ID || "").trim();
const templateId = (import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "").trim();
const publicKey = (import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "").trim();

function isEmailJsConfigured() {
  return Boolean(serviceId && templateId && publicKey);
}

export async function sendContactMessageWithEmailJs({ name, email, nachricht }) {
  if (!isEmailJsConfigured()) {
    throw new Error(
      "EmailJS ist nicht konfiguriert. Bitte VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID und VITE_EMAILJS_PUBLIC_KEY in .env setzen."
    );
  }

  const cleanName = name.trim();
  const cleanEmail = email.trim();
  const cleanMessage = nachricht.trim();

  const templateParams = {
    name: cleanName,
    from_name: cleanName,
    user_name: cleanName,
    email: cleanEmail,
    from_email: cleanEmail,
    reply_to: cleanEmail,
    nachricht: cleanMessage,
    message: cleanMessage,
  };

  try {
    await emailjs.send(serviceId, templateId, templateParams, publicKey);
  } catch (error) {
    const statusCode = error?.status;
    const detail = error?.text || error?.message || "Unbekannter EmailJS Fehler";

    if (statusCode === 404 && String(detail).toLowerCase().includes("account not found")) {
      throw new Error(
        "EmailJS Fehler: Status 404 - Account not found. Bitte Public Key neu aus EmailJS Account kopieren, sicherstellen dass Service/Template aus demselben Account stammen, danach Dev-Server neu starten."
      );
    }

    if (statusCode === 400 && String(detail).toLowerCase().includes("template id not found")) {
      throw new Error(
        `EmailJS Fehler: Status 400 - Template ID nicht gefunden. Verwendet werden service='${serviceId}', template='${templateId}'. Bitte prüfen, ob diese IDs exakt im selben EmailJS-Account existieren und danach Dev-Server neu starten.`
      );
    }

    const status = statusCode ? `Status ${statusCode}` : "Unbekannter Status";
    throw new Error(`EmailJS Fehler: ${status} - ${detail}`);
  }
}
