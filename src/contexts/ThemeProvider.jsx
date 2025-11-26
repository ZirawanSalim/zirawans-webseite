import { useState, useEffect } from "react";
import ThemeContext from "./ThemeContext";

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");

    
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    
    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    function toggleTheme() {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div
                className={
                    theme === "light"
                        ? "bg-white text-black min-h-screen"
                        : "bg-gray-900 text-white min-h-screen"
                }
            >
                {children}
            </div>
        </ThemeContext.Provider>
    );
}
