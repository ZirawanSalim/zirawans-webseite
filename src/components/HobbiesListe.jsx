import MeinDaten from '../data/MeinDaten.json' with { type: 'json' }
import { useContext, useState } from 'react'
import ThemeContext from '../contexts/ThemeContext';
import fussballBild from '../assets/fussball.jpg';
import musikBild from '../assets/musik.jpg';


export default function HobbiesListe() {
    const [hobby, setHobby] = useState(null);
    const { theme } = useContext(ThemeContext);
    const getHobbyBild = (selectedHobby) => {
        if (!selectedHobby) return "";
        if (selectedHobby.slug === "fussball") return fussballBild;
        if (selectedHobby.slug === "musik") return musikBild;
        if (selectedHobby.slug === "armband-knuepfen") return "/armband3.jpg";
        return selectedHobby.bild;
    };

    return (
        <div className="m-4 p-4">
            <h2 className="text-3xl font-bold text-blue-400 mb-10">Meine Hobbies</h2>
           <div className="flex flex-col md:flex-row md:items-start gap-6 lg:gap-16">
            <ul className="md:w-1/2 space-y-4">
                {MeinDaten.hobbies.map((hobby, index) => {
                    return <li key={index}>
                        <button
                            onClick={() => setHobby(hobby)}
                            className={`inline-block origin-left transition-transform transition-colors duration-200 hover:scale-110 hover:text-blue-400 hover:underline ${theme === "light" ? "text-gray-800" : "text-white"}`}
                        >
                            {hobby.name}
                        </button>
                    </li>
                })}
            </ul>

            {hobby !== null &&
                (
                    <img
                        src={getHobbyBild(hobby)}
                        alt={hobby.name}
                        className="mt-4 rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-cover"
                    />
                )
            }
            </div>
        </div>
    );

}           
