import { useContext, useReducer, useRef } from "react";
import ThemeContext from "../contexts/ThemeContext";
import contactReducer, { initialState } from "../reducers/contactReducer";
import Snackbar from "./Snackbar";
import { useState } from "react";


export default function Kontakt() {
  const topRef = useRef(null);
  const { theme } = useContext(ThemeContext);
const [showSuccess, setShowSuccess] = useState(false);
 const [state, dispatch] = useReducer(contactReducer, initialState);
const handleSubmit = (e) => {
  e.preventDefault();
  dispatch({ type: "validate" });

  if (state.isValid) {
    setShowSuccess(true);

    setTimeout(() => setShowSuccess(false), 5000);

    dispatch({ type: "reset" });
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
            className={`w-full font-semibold py-2 rounded-xl transition 
            ${state.isValid
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-gray-600 cursor-not-allowed"
              } text-white`}
          >
            Nachricht senden
          </button>
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
    message={`Danke, ${state.name}! Deine Nachricht wurde gesendet.`}
    onClose={() => setShowSuccess(false)}
  />
)}

    </div>
  );
}
