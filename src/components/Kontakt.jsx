import { useContext, useReducer, useRef, useState } from "react";
import ThemeContext from "../contexts/ThemeContext";
import contactReducer, { initialState } from "../reducers/contactReducer";
import Snackbar from "./Snackbar";
import { sendContactMessageWithEmailJs } from "../api/sendContactMessageWithEmailJs";


export default function Kontakt() {
  const topRef = useRef(null);
  const { theme } = useContext(ThemeContext);
  const [showSuccess, setShowSuccess] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [state, dispatch] = useReducer(contactReducer, initialState);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validatedState = contactReducer(state, { type: "validate" });
    dispatch({ type: "validate" });

    if (!validatedState.isValid) {
      return;
    }

    setSubmitError("");
    setIsSubmitting(true);

    try {
      await sendContactMessageWithEmailJs({
        name: validatedState.name,
        email: validatedState.email,
        nachricht: validatedState.nachricht,
      });

      setSnackbarMessage(`Danke, ${validatedState.name}! Deine Nachricht wurde gesendet.`);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
      dispatch({ type: "reset" });
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Nachricht konnte nicht gesendet werden. Bitte später erneut versuchen."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Styling
  const cardStyle =
    theme === "light" ? "bg-black text-white" : "bg-white text-black";

  const inputStyle =
    theme === "light"
      ? "border-gray-500 bg-black text-white"
      : "border-gray-300 bg-white text-black";

  const labelStyle =
    theme === "light" ? "text-gray-200" : "text-gray-700";

  return (
    <div
      ref={topRef}
      className="min-h-screen flex items-center justify-center p-6"
    >
      <div className={`rounded-2xl shadow-xl p-8 w-full max-w-lg ${cardStyle}`}>

        <h2 className="text-3xl font-bold text-blue-400 mb-6 text-center">
          Kontaktiere mich
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* NAME */}
          <div>
            <label className={`block font-medium mb-1 ${labelStyle}`}>Name</label>
            <input
              value={state.name}
              onChange={(e) =>
                dispatch({ type: "updateName", payload: e.target.value, field: "name" })
              }

              className={`w-full border rounded-xl p-2 ${inputStyle}`}
              placeholder="Dein Name"
            />
            {state.errors.name && (
              <p className="text-red-500 text-sm">{state.errors.name}</p>
            )}
          </div>

          {/* EMAIL */}
          <div>
            <label className={`block font-medium mb-1 ${labelStyle}`}>E-Mail</label>
            <input
              value={state.email}
              type="email"
              onChange={(e) =>
                dispatch({ type: "updateEmail", payload: e.target.value, field: "email" })
              }

              className={`w-full border rounded-xl p-2 ${inputStyle}`}
              placeholder="deine@email.de"
            />
            {state.errors.email && (
              <p className="text-red-500 text-sm">{state.errors.email}</p>
            )}
          </div>

          {/* Nachricht */}
          <div>
            <label className={`block font-medium mb-1 ${labelStyle}`}>Nachricht</label>
            <textarea
              rows="4"
              value={state.nachricht}
              onChange={(e) =>
                dispatch({ type: "updateNachricht", payload: e.target.value, field: "nachricht" })
              }

              className={`w-full border rounded-xl p-2 ${inputStyle}`}
              placeholder="Deine Nachricht..."
            ></textarea>

            {state.errors.nachricht && (
              <p className="text-red-500 text-sm">{state.errors.nachricht}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full font-semibold py-2 rounded-xl transition 
            ${isSubmitting
                ? "bg-gray-600 cursor-not-allowed"
                : state.isValid
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-gray-600 cursor-not-allowed"
              } text-white`}
          >
            {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
          </button>

          {submitError && (
            <p className="text-red-500 text-sm">{submitError}</p>
          )}
        </form>

        <p className="text-center text-sm mt-6">
          Du kannst mich auch direkt per E-Mail erreichen:{" "}
          <a href="mailto:Zirawan@hotmail.com" className="text-blue-400 hover:underline">
            Zirawan@hotmail.com
          </a>
        </p>
      </div>

      <button
        onClick={() => topRef.current.scrollIntoView({ behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        ↑
      </button>

      {showSuccess && (
  <Snackbar
    message={snackbarMessage}
    onClose={() => setShowSuccess(false)}
  />
)}

    </div>
  );
}
