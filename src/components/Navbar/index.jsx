import { useEffect, useState, useRef } from "react";
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
    padding: 0 1rem;
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
    padding: 0.3rem 0.8rem;
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
  padding: 0.6rem 0.6rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: auto;
`;

export default function Header({ isDarkMode, toggleTheme }) {
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const lastScrollY = useRef(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateSection();
          updateHeaderVisibility();
          ticking = false;
        });
        ticking = true;
      }
    };

    const updateSection = () => {
      const sections = ["home", "sobre", "carreira", "projetos", "contato"];
      const active = sections.find((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });

      if (active) {
        setActiveSection((prev) => (active !== prev ? active : prev));
      }
    };

    const updateHeaderVisibility = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY.current;
      const shouldShow = !scrollingDown || currentScrollY < 100;

      setIsVisible(shouldShow);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <ThemeToggle onClick={toggleTheme}>
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </ThemeToggle>
    </HeaderWrapper>
  );
}
