import { useContext } from "react";
import ThemedButton from "../components/ThemedButton";
import ThemeContext from "../contexts/ThemeContext";
import ThemedParagraph from "../components/ThemedParagraph";

export default function Contexts() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <ThemedButton />
      <ThemedParagraph />

      <button onClick={toggleTheme} className="mt-4 p-2 border rounded">
        Change to {theme === "light" ? "dark" : "light"}
      </button>
    </>
  );
}


