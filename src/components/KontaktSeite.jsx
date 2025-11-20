
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import contactSchema from "../schemas/contactSchema.js";

export default function Kontakt() {
  const topRef = useRef(null);

  const { register, handleSubmit, formState: { errors }, } = useForm({
    mode: "all",
    resolver: yupResolver(contactSchema),
  });

  const onSubmit = (data) => {
    alert(`Danke, ${data.name}! Deine Nachricht wurde gesendet.`);
  };

  return (
    <div
      ref={topRef}
      className="min-h-screen bg-black flex items-center justify-center p-6"
    >
      <div className="bg-gray-900 rounded-2xl shadow-xl p-8 w-full max-w-lg">
        <h2 className="text-3xl font-bold text-blue-400 mb-6 text-center">
          Kontaktiere mich
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          <div>
            <label className="block text-gray-300 font-medium mb-1">Name</label>
            <input
              {...register("name")}
              className="w-full border border-gray-700 bg-gray-800 text-white rounded-xl p-2 focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Dein Name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-300 font-medium mb-1">E-Mail</label>
            <input
              {...register("email")}
              className="w-full border border-gray-700 bg-gray-800 text-white rounded-xl p-2 focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="deine@email.de"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-300 font-medium mb-1">Nachricht</label>
            <textarea
              {...register("nachricht")}
              rows="4"
              className="w-full border border-gray-700 bg-gray-800 text-white rounded-xl p-2 focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Deine Nachricht..."
            ></textarea>
            {errors.nachricht && (
              <p className="text-red-500 text-sm">{errors.nachricht.message}</p>
            )}
          </div>

          <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 rounded-xl hover:bg-blue-600 transition" >
            Nachricht senden
          </button>
        </form>

        <p className="text-gray-500 text-center text-sm mt-6">
          Du kannst mich auch direkt per E-Mail erreichen:{" "}
          <a
            href="mailto:Zirawan@hotmail.com"
            className="text-blue-400 hover:underline"
          >
            Zirawan@hotmail.com
          </a>
        </p>
      </div>
      <button onClick={() => topRef.current.scrollIntoView({ behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition" >
        ↑
      </button>
    </div>
  );
}




