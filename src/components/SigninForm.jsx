import { useState } from "react";
export default function SigninForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const signinData = { email, password };
        console.log("Anmeldeinformationen:", signinData);



    }
    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block text-gray-300 font-medium mb-1">E-Mail</label>
            <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border border-gray-700 bg-gray-800 text-white rounded-xl p-2 focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="E-Mail eingeben"
            />
            <label className="block text-gray-300 font-medium mb-1">Passwort</label>
            <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full border border-gray-700 bg-gray-800 text-white rounded-xl p-2 focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="Passwort eingeben" />
            <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-xl transition-colors duration-300"
            >
                Anmelden
            </button>

        </form>
    )
}