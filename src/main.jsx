import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { GlobalStyle } from "./styles/GlobalStyle.js";
import { darkTheme, lightTheme } from "./styles/theme.js";
import { ThemeProvider } from "styled-components";
import App from "./App.jsx";

function ThemedApp() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <App toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
    </ThemeProvider>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemedApp />
  </StrictMode>
);
