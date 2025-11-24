import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

export default function ThemedButton() {
    const theme = useContext(ThemeContext);
    const bgColor = theme === "light" ? "bg-amber-200" : "bg-amber-800";
    const color = theme === "light" ? "white" : "black";

    return (
        <button className={`${bgColor} ${color}`}>Click me</button>
    )
}