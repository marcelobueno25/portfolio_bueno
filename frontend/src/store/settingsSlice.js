import { createSlice } from "@reduxjs/toolkit";

const load = () => {
  try {
    const saved = localStorage.getItem("settings");
    return saved ? JSON.parse(saved) : null;
  } catch {
    return null;
  }
};

const save = (state) => {
  try {
    localStorage.setItem("settings", JSON.stringify(state));
  } catch {}
};

const defaultLanguage =
  typeof navigator !== "undefined" ? navigator.language.slice(0, 2) : "pt";

const persisted = load();

const initialState =
  persisted || {
    theme: "dark",
    language: defaultLanguage,
    introSeen: false,
  };

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === "dark" ? "light" : "dark";
      save(state);
    },
    setLanguage(state, action) {
      state.language = action.payload;
      save(state);
    },
    hideIntro(state) {
      state.introSeen = true;
      save(state);
    },
  },
});

export const { toggleTheme, setLanguage, hideIntro } = settingsSlice.actions;
export default settingsSlice.reducer;
