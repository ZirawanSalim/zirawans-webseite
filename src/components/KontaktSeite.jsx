
import React, { useState } from "react";

export default function Kontakt() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    nachricht: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Danke, ${formData.name}! Deine Nachricht wurde gesendet.`);
    setFormData({ name: "", email: "", nachricht: "" });
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="bg-gray-900 rounded-2xl shadow-xl p-8 w-full max-w-lg">
        <h2 className="text-3xl font-bold text-blue-400 mb-6 text-center">
          Kontaktiere mich
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-300 font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-700 bg-gray-800 text-white rounded-xl p-2 focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Dein Name"
            />
          </div>

          <div>
            <label className="block text-gray-300 font-medium mb-1">E-Mail</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-700 bg-gray-800 text-white rounded-xl p-2 focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="deine@email.de"
            />
          </div>

          <div>
            <label className="block text-gray-300 font-medium mb-1">Nachricht</label>
            <textarea
              name="nachricht"
              value={formData.nachricht}
              onChange={handleChange}
              required
              rows="4"
              className="w-full border border-gray-700 bg-gray-800 text-white rounded-xl p-2 focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Deine Nachricht..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-xl hover:bg-blue-600 transition"
          >
            Nachricht senden
          </button>
        </form>

        <p className="text-gray-500 text-center text-sm mt-6">
          Du kannst mich auch direkt per E-Mail erreichen:{" "}
          <a href="mailto:Zirawan@hotmail.com" className="text-blue-400 hover:underline">
            Zirawan@hotmail.com
          </a>
        </p>
      </div>
    </div>
  );
}

