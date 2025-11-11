import React, { useState } from "react";
import { Link } from 'react-router-dom';
export default function NavBar() {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="bg-blue-600 p-4">
            <div className="flex justify-between items-center md:h-12">
                <div className="text-white font-bold text-xl">Zirawan Salim</div>
                <div className="hidden md:flex space-x-6">
                   <Link to="/Home" >
                        <div className="text-white text-lg hover:text-gray-300">
                            Home
                        </div>
                    </Link>
                    <Link to="/projekte" >
                        <div className="text-white text-lg hover:text-gray-300">
                            Projekte
                        </div>
                    </Link>
                    <Link to="/contact" >
                        <div className="text-white text-lg hover:text-gray-300">
                            Contact
                        </div>
                    </Link>
                </div>
                <button
                    className="block md:hidden text-white text-2xl"
                    onClick={() => setIsOpen(!isOpen)}>
                    ☰
                </button>
            </div>
            {isOpen && (
                <div className="md:hidden bg-blue-500 mt-3 rounded-lg text-center p-2" onClick={() => setIsOpen(false)}>
                    <Link to="/Home" >
                        <div className="border-t border-blue-400 my-2">
                            Home
                        </div>
                    </Link>
                    <Link to="/projekte" >
                        <div className="border-t border-blue-400 my-2">
                            Projekte
                        </div>
                    </Link>
                    <Link to="/contact" >
                        <div className="border-t border-blue-400 my-2">
                            Contact
                        </div>
                    </Link>
                </div>
            )}
        </nav >
    )
}