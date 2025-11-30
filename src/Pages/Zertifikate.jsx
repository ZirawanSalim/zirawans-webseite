import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

export default function Zertifikate({ titel, bilder }) {
    const { theme } = useContext(ThemeContext);

    function drucken() {
        window.print();
    }

    return (
        <div className="mb-8 ">
            <h3 className="text-2xl font-bold mb-4 text-center">
                {titel}
            </h3>

            <div className="mt-4 space-y-4 flex flex-col items-center">
                {bilder.map((bild, index) => (
                    <img
                        key={index}
                        src={bild}
                        alt={titel}
                        className="rounded-lg shadow-lg w-full max-w-3xl"
                    />
                ))}

                <button
                    onClick={drucken}
                    className="mt-4 px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-600"
                >
                    Zertifikat drucken
                </button>
            </div>
        </div>
    );
}
