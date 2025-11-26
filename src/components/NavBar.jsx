import React, { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import ThemeContext from "../contexts/ThemeContext";


export default function NavBar() {

    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <nav className={theme === "light" ? "bg-blue-600 p-4" : "bg-gray-800 p-4"}>
            <div className="flex justify-between items-center md:h-12 ml-4 mr-4">
                <div className="text-white font-bold text-xl">Zirawan Salim</div>

                <div className="hidden md:flex flex-1 justify-center space-x-6">
                    <Link to="/" >
                        <div className="text-white text-lg hover:text-gray-300">Home</div>
                    </Link>

                    <Link to="/projekte" >
                        <div className="text-white text-lg hover:text-gray-300">Projekte</div>
                    </Link>

                    <Link to="/contact" >
                        <div className="text-white text-lg hover:text-gray-300">Contact</div>
                    </Link>
                </div>
                <div className="hidden md:block">
                    <button onClick={toggleTheme} className="text-white text-2xl ml-4" >
                        {theme === "light" ? "🌙" : "☀️"}
                    </button>
                </div>

                <button
                    className="block md:hidden text-white text-2xl"
                    onClick={() => setIsOpen(!isOpen)}>
                    ☰
                </button>
            </div>

            {isOpen && (
                <div
                    className="md:hidden bg-blue-500 mt-3 rounded-lg text-center p-2" onClick={() => setIsOpen(false)} >
                    <Link to="/" >
                        <div className="border-t border-blue-400 my-2">Home</div>
                    </Link>

                    <Link to="/projekte" >
                        <div className="border-t border-blue-400 my-2">Projekte</div>
                    </Link>

                    <Link to="/contact" >
                        <div className="border-t border-blue-400 my-2">Contact</div>
                    </Link>
                     <Link to="/github" >
                        <div className="border-t border-blue-400 my-2">GitHub</div>
                    </Link>


                    <button
                        onClick={() => { toggleTheme(); setIsOpen(false); }}
                        className="border-t border-blue-400 my-2 w-full text-center">
                        {theme === "light" ? "🌙 " : "☀️ "}
                    </button>
                </div>
            )
            }
        </nav >
    );
}

