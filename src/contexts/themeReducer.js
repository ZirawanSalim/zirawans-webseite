export const initialThemeState = {
  theme: "light",
  history: [], // optional zum Debuggen
};

export default function themeReducer(draft, action) {
  switch (action.type) {
    case "toggleTheme":
      draft.theme = draft.theme === "light" ? "dark" : "light";

      // event loggen
      draft.history.push({
        event: "toggleTheme",
        newTheme: draft.theme,
        timestamp: Date.now(),
      });
      return;

    case "setThemeFromStorage":
      draft.theme = action.payload;
      draft.history.push({
        event: "setThemeFromStorage",
        newTheme: draft.theme,
        timestamp: Date.now(),
      });
      return;

    case "resetTheme":
      draft.theme = "light";
      draft.history.push({
        event: "resetTheme",
        newTheme: draft.theme,
        timestamp: Date.now(),
      });
      return;

    default:
      return draft;
  }
}
