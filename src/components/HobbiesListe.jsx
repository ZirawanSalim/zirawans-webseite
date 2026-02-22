import MeinDaten from '../data/MeinDaten.json' with { type: 'json' }
import { useContext, useState } from 'react'
import ThemeContext from '../contexts/ThemeContext';


export default function HobbiesListe() {
    const [hobby, setHobby] = useState(null);
    const { theme } = useContext(ThemeContext);
    return (
        <div className=' m-4 p-4 '>
            <h2 className="text-3xl font-bold text-blue-400 mb-10">Meine Hobbies</h2>
           <div className="flex flex-col md:flex-row md:items-start md:gap-60">
            <ul className='md:w-1/2 space-y-4'>
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
                    <img src={hobby.bild} alt={hobby.name} className="mt-4 rounded-lg shadow-lg  w-70 h-70  md:w-100 md:h-100  object-cover" />
                )
            }
            </div>
        </div>
    );

}           
