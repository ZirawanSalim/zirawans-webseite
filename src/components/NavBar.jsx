import React, { useState } from "react";

export default function NavBar() {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="bg-blue-600 p-4">
            <div className="flex justify-between items-center md:h-12">
                <div className="text-white font-bold text-xl">Zirawan Salim</div>
                <div className="hidden md:flex space-x-6">
                    <a href="#about-me" className="text-white text-lg hover:text-gray-300"> About Me</a>
                    <a href="#projects" className="text-white text-lg hover:text-gray-300"> Projects</a>
                    <a href="#contact" className="text-white text-lg hover:text-gray-300"> Contact</a>
                </div>
                <button
                    className="block md:hidden text-white text-2xl"
                    onClick={() => setIsOpen(!isOpen)}>
                    ☰
                </button>
            </div>
            {isOpen && (
            <div className="md:hidden bg-blue-500 mt-3 rounded-lg text-center p-2" onClick={() => setIsOpen(false)}>
                <a href="#about-me" className="block text-white py-1 hover:text-gray-300" >About Me</a>
                <a href="#projects" className="block text-white py-1 hover:text-gray-300" > Projects</a>
                <a href="#contact" className="block text-white py-1 hover:text-gray-300">Contact</a>
            </div>
            )}
        </nav >
    )
}