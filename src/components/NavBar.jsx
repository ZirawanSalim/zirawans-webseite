import React, { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import ThemeContext from "../contexts/ThemeContext";


export default function NavBar() {

    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <nav className={theme === "light" ? "bg-blue-600 p-4" : "bg-gray-800 p-4"}>
            <div className="flex justify-between items-center xl:h-12 ml-4 mr-4">
                <Link to="/" aria-label="Zur Startseite">
                    <div className="hover:scale-105 text-white font-bold text-xl">Zirawan Salim</div>
                </Link>

                <div className="hidden xl:flex flex-1 justify-center space-x-6">
                    <Link to="/" >
                        <div className="hover:scale-105 text-white text-lg hover:text-gray-300">Home</div>
                    </Link>

                    <Link to="/projekte" >
                        <div className="hover:scale-105 text-white text-lg hover:text-gray-300 ">Projekte</div>
                    </Link>

                    <Link to="/contact" >
                        <div className="hover:scale-105 text-white text-lg hover:text-gray-300">Contact</div>
                    </Link>
                    <Link to="/zertifikate" className="hover:scale-105 transition text-white text-lg hover:text-gray-300">
                        Zertifikate
                    </Link>

                    <Link to="/github" >
                        <div className="hover:scale-105 text-white text-lg hover:text-gray-300">GitHub</div>
                    </Link>

                </div>
                <div className="hidden xl:block">
                    <button onClick={toggleTheme} className="hover:scale-105 text-white text-2xl ml-4" >
                        {theme === "light" ? "🌙" : "☀️"}
                    </button>

                </div>

                <div className="flex items-center gap-3 xl:hidden">
                    <button
                        onClick={toggleTheme}
                        className="text-white text-2xl hover:scale-105"
                        aria-label="Theme wechseln"
                    >
                        {theme === "light" ? "🌙" : "☀️"}
                    </button>

                    <button
                        className="text-white text-2xl"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Menü öffnen"
                    >
                        ☰
                    </button>
                </div>
            </div>

            {isOpen && (
                <div
                    className="xl:hidden bg-blue-500 mt-3 rounded-lg text-center p-2" onClick={() => setIsOpen(false)} >
                    <Link to="/" >
                        <div className="hover:underline border-t border-blue-400 my-2 text-white">Home</div>
                    </Link>

                    <Link to="/projekte" >
                        <div className="hover:underline border-t border-blue-400 my-2 text-white">Projekte</div>
                    </Link>

                    <Link to="/contact" >
                        <div className="hover:underline border-t border-blue-400 my-2 text-white">Contact</div>
                    </Link>
                    <Link to="/zertifikate" className="hover:underline border-t border-blue-400 my-2 text-white">
                        Zertifikate
                    </Link>
                    <Link to="/github" >
                        <div className="hover:underline border-t border-blue-400 my-2 text-white">GitHub</div>
                    </Link>
                </div>
            )
            }
        </nav >
    );
}
