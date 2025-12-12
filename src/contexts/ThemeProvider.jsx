import { useEffect } from "react";
import ThemeContext from "./ThemeContext";
import { useImmerReducer } from "use-immer";
import themeReducer, { initialThemeState } from "./themeReducer.js";

export default function ThemeProvider({ children }) {
  const [state, dispatch] = useImmerReducer(
  themeReducer,
  initialThemeState,
  () => {
    const savedTheme = localStorage.getItem("theme");
    return {
      ...initialThemeState,
      theme: savedTheme === "dark" ? "dark" : "light",
    };
  }
);
 
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
        history: state.history,
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
