import { useContext, useState } from "react";
import ThemeContext from "../contexts/ThemeContext";
import Zertifikate from "../Pages/Zertifikate";
import modul1 from "../assets/Modulbescheinigung Modul 1_Zirawan_Salim.jpg";
import modul2 from "../assets/Modulbescheinigung Modul 2_Zirawan_Salim_Einführung Software- und Webentwicklung.jpg";
import modul3 from "../assets/Modulbescheinigung Modul 3_Zirawan_Salim_Vertiefung_ Frontend Entwicklung.jpg";
import modul4 from "../assets/Modulbescheinigung M4_Zirawan_Salim_Spezialisierung & Arbeitsmarktvorbereitung.jpg";
import zertifikatZirawan1 from "../assets/Zertifikat_Zirawan Salim 1.jpg";
import zertifikatZirawan2 from "../assets/Zertifikat_Zirawan Salim 2.jpg";
import ihkS1 from "../assets/IHK Zertifikat S1.jpg";
import ihkS2 from "../assets/IHK Zertifikat S2.jpg";
import juniorIhk1 from "../assets/Junior Web Developer IHK 1.jpg";
import juniorIhk2 from "../assets/Junior Web Developer IHK 2.jpg";
import webDevelopmentSpecialistIhk1 from "../assets/WEB DEVELOPMENT SPECIALIST IHK1.jpg";
import webDevelopmentSpecialistIhk2 from "../assets/WEB DEVELOPMENT SPECIALIST IHK2.jpg";
import itFachkraftWebDevelopmentIhk1 from "../assets/Zertifikat IT-FACHKRAFT FÜR WEB DEVELOPMENT IHK1.jpg";
import itFachkraftWebDevelopmentIhk2 from "../assets/Zertifikat IT-FACHKRAFT FÜR WEB DEVELOPMENT IHK2.jpg";
import cvS1 from "../assets/CV-Zirawan Salim S1.jpg";
import cvS2 from "../assets/CV-zirawan Salim S2.jpg";
import zertifikateJson from "../data/AlleZertifikate.json";

export default function MeinZertifikat() {
    const { theme } = useContext(ThemeContext);

    const bildMap = {
        modul1,
        modul2,
        modul3,
        modul4,
        zertifikatZirawan1,
        zertifikatZirawan2,
        ihkS1,
        ihkS2,
        juniorIhk1,
        juniorIhk2,
        webDevelopmentSpecialistIhk1,
        webDevelopmentSpecialistIhk2,
        itFachkraftWebDevelopmentIhk1,
        itFachkraftWebDevelopmentIhk2,
        cvS1,
        cvS2,
    };

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
            <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-4 md:gap-6 mb-8">
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
            {activeTitel && (
                <Zertifikate
                    titel={activeTitel}
                    bilder={zertifikate.find(z => z.titel === activeTitel).bilder}
                />
            )}
        </div>
    );
}
