import React, { useState } from "react";

export default function NavBar() {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="bg-blue-600 p-4">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center h-20">
                <div className="text-white font-bold text-xl">Zirawan Salim</div>
                <button
                    className="block sm:hidden text-white md:hidden mt-2"
                    onClick={() => setIsOpen(!isOpen)}>
                    ☰
                </button>
                <div className={`${isOpen ? "block" : "hidden"} sm:hidden bg-blue-400 mb-2 p-2 rounded-lg w-35 text-center`}>
                    <a href="#about-me" className="text-gray-100 hover:text-gray-300 mx-2 block">About Me</a>
                    <a href="#projects" className="text-white hover:text-gray-300 mx-2 block">Projects</a>
                    <a href="#contact" className="text-white hover:text-gray-300 mx-2 block">Contact</a>
                </div>
                <div className="hidden md:block">
                    <a href="#about-me" className="text-white text-lg hover:text-gray-300  mx-4">About Me</a>
                    <a href="#projects" className="text-white text-lg hover:text-gray-300  mx-4">Projects</a>
                    <a href="#contact" className="text-white text-lg hover:text-gray-300 mx-4">Contact</a>
                </div>

            </div>
        </nav>
    )
}