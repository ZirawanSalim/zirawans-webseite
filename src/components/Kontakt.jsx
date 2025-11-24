import { useContext, useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import contactSchema from "../schemas/contactSchema.js";
import ThemeContext from "../contexts/ThemeContext";

export default function Kontakt() {
  const topRef = useRef(null);
  const { theme } = useContext(ThemeContext);

  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    mode: "all",
    resolver: yupResolver(contactSchema),
  });

  const onSubmit = (data) => {
    alert(`Danke, ${data.name}! Deine Nachricht wurde gesendet.`);
  };

  // 🎨 Dynamische Styles abhängig vom Theme
  const cardStyle =
    theme === "light"
      ? "bg-black text-white"
      : "bg-white text-black";

  const inputStyle =
    theme === "light"
      ? "border-gray-500 bg-black text-white"
      : "border-gray-300 bg-white text-black";

  const labelStyle =
    theme === "light"
      ? "text-gray-200"
      : "text-gray-700";

  return (
    <div
      ref={topRef}
      className="min-h-screen flex items-center justify-center p-6"
    >
      <div className={`rounded-2xl shadow-xl p-8 w-full max-w-lg ${cardStyle}`}>

        <h2 className="text-3xl font-bold text-blue-400 mb-6 text-center">
          Kontaktiere mich
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          {/* Name */}
          <div>
            <label className={`block font-medium mb-1 ${labelStyle}`}>Name</label>
            <input
              {...register("name")}
              className={`w-full border rounded-xl p-2 focus:ring-2 focus:ring-blue-400 outline-none ${inputStyle}`}
              placeholder="Dein Name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className={`block font-medium mb-1 ${labelStyle}`}>E-Mail</label>
            <input
              {...register("email")}
              className={`w-full border rounded-xl p-2 focus:ring-2 focus:ring-blue-400 outline-none ${inputStyle}`}
              placeholder="deine@email.de"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Nachricht */}
          <div>
            <label className={`block font-medium mb-1 ${labelStyle}`}>Nachricht</label>
            <textarea
              {...register("nachricht")}
              rows="4"
              className={`w-full border rounded-xl p-2 focus:ring-2 focus:ring-blue-400 outline-none ${inputStyle}`}
              placeholder="Deine Nachricht..."
            ></textarea>
            {errors.nachricht && (
              <p className="text-red-500 text-sm">{errors.nachricht.message}</p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={!isValid}
            className={`w-full font-semibold py-2 rounded-xl transition 
              ${isValid ? "bg-blue-500 hover:bg-blue-600 text-white" : "bg-gray-600 text-gray-300 cursor-not-allowed"}`}
          >
            Nachricht senden
          </button>
        </form>

        <p className="text-center text-sm mt-6">
          Du kannst mich auch direkt per E-Mail erreichen:{" "}
          <a
            href="mailto:Zirawan@hotmail.com"
            className="text-blue-400 hover:underline"
          >
            Zirawan@hotmail.com
          </a>
        </p>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={() => topRef.current.scrollIntoView({ behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        ↑
      </button>
    </div>
  );
}





