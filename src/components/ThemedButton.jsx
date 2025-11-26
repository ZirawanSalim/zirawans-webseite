import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

export default function ThemedButton() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const bgColor = theme === "light" ? "bg-amber-200" : "bg-amber-800";
    const color = theme === "light" ? "text-black" : "text-white";

    return (
        <button 
            className={`${bgColor} ${color} p-2 rounded`}
            onClick={toggleTheme}
        >
            Toggle Theme
        </button>
    );
}
