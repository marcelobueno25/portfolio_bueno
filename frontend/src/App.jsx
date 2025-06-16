import React, { Suspense, lazy } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Intro from "@/pages/Intro";
import AppRoutes from "./routes";

const ChatWidget = lazy(() => import("@/components/ChatWidget"));

function App({ toggleTheme, isDarkMode }) {
  return (
    <>
      <Intro />
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <AppRoutes />
      <Footer />
      <Suspense fallback={null}>
        <ChatWidget />
      </Suspense>
    </>
  );
}

export default App;
