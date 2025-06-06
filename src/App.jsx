import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Intro from "@/pages/Intro";
import AppRoutes from "./routes";

function App() {
  return (
    <>
      {/* <Intro /> */}
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
