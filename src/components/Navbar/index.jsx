import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  FaHome,
  FaProjectDiagram,
  FaUser,
  FaEnvelope,
  FaBriefcase,
  FaMoon,
  FaSun,
  FaTerminal,
} from "react-icons/fa";

const HeaderWrapper = styled.header`
  position: fixed;
  top: 2rem;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 2rem;
  pointer-events: none;
  z-index: 1000;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;
  transform: ${({ isVisible }) => (isVisible ? "" : "translateY(-20px)")};

  @media (max-width: 480px) {
    justify-content: space-between;
  }
`;

const Nav = styled.nav`
  position: relative;
  padding: 0.5rem;
  background: rgba(17, 21, 29, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 12px;
  display: flex;
  gap: 0.5rem;
  pointer-events: ${({ isVisible }) => (isVisible ? "auto" : "none")};
`;

const NavLink = styled.a`
  color: ${({ active }) => (active ? "#000" : "rgba(255, 255, 255, 0.6)")};
  font-weight: 500;
  text-decoration: none;
  font-size: 0.95rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0.3rem 1.2rem;
  border-radius: 9px;
  background: ${({ active }) => (active ? "#00FFE0" : "transparent")};
  transition: all 0.3s ease;
  gap: 0.4rem;

  &:hover {
    background: ${({ active }) =>
      active ? "rgba(0, 255, 224, 0.8)" : "rgba(255,255,255,0.1)"};
    color: ${({ active }) => (active ? "#000" : "#fff")};
  }

  span {
    @media (max-width: 768px) {
      display: none;
    }
  }

  svg {
    display: none;
    @media (max-width: 768px) {
      display: inline;
    }
  }

  @media (max-width: 480px) {
    padding: 0.3rem 1rem;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(17, 21, 29, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  padding: 0.5rem 1rem;
  border-radius: 12px;
  font-weight: bold;
  color: #fff;
  pointer-events: auto;

  @media (max-width: 768px) {
    display: none;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

const ThemeToggle = styled.button`
  background: rgba(17, 21, 29, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  border-radius: 999px;
  padding: 0.6rem 0.8rem;
  cursor: pointer;
  color: #00bfff;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: auto;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "sobre", "carreira", "projetos", "contato"];
      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(id);
            break;
          }
        }
      }

      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY;
      setIsVisible(!scrollingDown || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <HeaderWrapper isVisible={isVisible}>
      <Logo>
        <FaTerminal />
        Marcelo
      </Logo>
      <Nav isVisible={isVisible}>
        <NavLink href="#home" active={activeSection === "home"}>
          <FaHome />
          <span>Início</span>
        </NavLink>
        <NavLink href="#sobre" active={activeSection === "sobre"}>
          <FaUser />
          <span>Sobre</span>
        </NavLink>
        <NavLink href="#carreira" active={activeSection === "carreira"}>
          <FaBriefcase />
          <span>Carreira</span>
        </NavLink>
        <NavLink href="#projetos" active={activeSection === "projetos"}>
          <FaProjectDiagram />
          <span>Projetos</span>
        </NavLink>
        <NavLink href="#contato" active={activeSection === "contato"}>
          <FaEnvelope />
          <span>Contato</span>
        </NavLink>
      </Nav>
      <ThemeToggle onClick={toggleTheme} aria-label="Toggle Theme">
        {darkMode ? <FaMoon /> : <FaSun />}
      </ThemeToggle>
    </HeaderWrapper>
  );
}
