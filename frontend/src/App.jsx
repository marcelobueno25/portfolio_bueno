import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Intro from "@/pages/Intro";
import AppRoutes from "./routes";
import ChatWidget from "@/components/ChatWidget";

function App({ toggleTheme, isDarkMode }) {
  return (
    <>
      <Intro />
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <AppRoutes />
      <Footer />
      <ChatWidget />
    </>
  );
}

export default App;
