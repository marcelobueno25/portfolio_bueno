import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider, useDispatch, useSelector } from "react-redux";
import { GlobalStyle } from "./styles/GlobalStyle.js";
import { darkTheme, lightTheme } from "./styles/theme.js";
import { ThemeProvider } from "styled-components";
import App from "./App.jsx";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n.js";
import { store } from "./store";
import { toggleTheme } from "./store/settingsSlice";

function ThemedApp() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.settings.theme);
  const isDarkMode = theme === "dark";

  const handleToggleTheme = () => dispatch(toggleTheme());

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <App toggleTheme={handleToggleTheme} isDarkMode={isDarkMode} />
    </ThemeProvider>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <ThemedApp />
      </Provider>
    </I18nextProvider>
  </StrictMode>
);
