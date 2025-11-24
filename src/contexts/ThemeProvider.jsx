
import { useState } from "react";
import  ThemeContext  from "./ThemeContext";

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");

    function toggleTheme() {
        setTheme(prev => prev === "light" ? "dark" : "light");
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
}


