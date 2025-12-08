import { useEffect } from "react";
import ThemeContext from "./ThemeContext";
import { useImmerReducer } from "use-immer";
import themeReducer, { initialThemeState } from "./themeReducer.js";

export default function ThemeProvider({ children }) {
  const [state, dispatch] = useImmerReducer(themeReducer, initialThemeState);

  // Lade Theme einmal aus localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" || savedTheme === "light") {
      dispatch({ type: "setThemeFromStorage", payload: savedTheme });
    }
  }, []);

  // Speichere Theme bei jeder Änderung im localStorage
  useEffect(() => {
    localStorage.setItem("theme", state.theme);
  }, [state.theme]);

  function toggleTheme() {
    dispatch({ type: "toggleTheme" });
  }

  function resetTheme() {
    dispatch({ type: "resetTheme" });
  }

  return (
    <ThemeContext.Provider
      value={{
        theme: state.theme,
        toggleTheme,
        resetTheme,
        history: state.history, // optional abrufbar
      }}
    >
      <div
        className={
          state.theme === "light"
            ? "bg-white text-black min-h-screen"
            : "bg-gray-900 text-white min-h-screen"
        }
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
