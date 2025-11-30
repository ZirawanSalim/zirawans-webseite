import { useContext, useState } from "react";
import ThemeContext from "../contexts/ThemeContext";
import Zertifikate from "../Pages/Zertifikate";
import modul1 from "../assets/Modulbescheinigung Modul 1_Zirawan_Salim.jpg";
import modul2 from "../assets/Modulbescheinigung Modul 2_Zirawan_Salim_Einführung Software- und Webentwicklung.jpg";
import ihkS1 from "../assets/IHK Zertifikat S1.jpg";
import ihkS2 from "../assets/IHK Zertifikat S2.jpg";
import zertifikateJson from "../data/AlleZertifikate.json";

export default function MeinZertifikat() {
    const { theme } = useContext(ThemeContext);

    const bildMap = { modul1, modul2, ihkS1, ihkS2 };

    const zertifikate = zertifikateJson.map(item => ({
        titel: item.titel,
        bilder: item.bilder.map(name => bildMap[name])
    }));

    const [activeTitel, setActiveTitel] = useState(null);

    return (
        <div className={`m-4 p-4 min-h-screen ${theme === "light" ? "text-black" : "text-white"}`}>
            <h2 className="text-3xl font-bold text-blue-400 mb-10 text-center">
                Meine Zertifikate
            </h2>

            {/* ───────────────────────────────────────────
                TITEL in einer Reihe (Desktop & Tablet)
                Untereinander in Mobile
            ─────────────────────────────────────────── */}
            <div className="flex flex-col md:flex-row justify-center gap-6 mb-8">
                {zertifikate.map((zert, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTitel(zert.titel)}
                        className={`text-xl font-semibold p-2 rounded-lg shadow 
                        ${theme === "light" ? "bg-blue-100 text-black" : "bg-blue-800 text-white"}
                        hover:scale-105 transition`}
                    >
                        {zert.titel}
                    </button>
                ))}
            </div>

            {/* ───────────────────────────────────────────
                AKTIVES Zertifikat anzeigen
            ─────────────────────────────────────────── */}
            {activeTitel && (
                <Zertifikate
                    titel={activeTitel}
                    bilder={zertifikate.find(z => z.titel === activeTitel).bilder}
                />
            )}
        </div>
    );
}
