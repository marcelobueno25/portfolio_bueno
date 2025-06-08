import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Contact from "@/pages/Contact";
import Career from "@/pages/Career";
import Chat from "@/pages/Chat";
import styled from "styled-components";
import { ScrollingBanner } from "./components/ScrollingBanner";

const RoutesContainer = styled.div`
  display: flex;
  flex-direction: column;

  section {
    padding: 2rem 0;
  }
`;

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <RoutesContainer>
              <section id="home">
                <Home />
              </section>
              <section id="sobre">
                <About />
              </section>
              <section>
                <ScrollingBanner />
              </section>
              <section id="carreira">
                <Career />
              </section>
              <section id="projetos">
                <Projects />
              </section>
              <section id="contato">
                <Contact />
              </section>
            </RoutesContainer>
          }
        />
        <Route path="/sobre" element={<About />} />
        <Route path="/projetos" element={<Projects />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}
