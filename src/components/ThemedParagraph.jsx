import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

export default function ThemedParagraph() {
    const theme = useContext(ThemeContext);

    const paragraphStyle = {
        backgroundColor: theme === "light" ? "#ffffff" : "#333333",
        color: theme === "light" ? "#000000" : "#ffffff",
        padding: "10px",
        borderRadius: "5px",
        marginTop: "10px"
    };
    
    return (
        <p style={paragraphStyle}>
            This is a {theme} themed paragraph.
        </p>
    );
}
