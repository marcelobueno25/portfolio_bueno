// src/components/Header.jsx
import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  FaHome,
  FaProjectDiagram,
  FaUser,
  FaEnvelope,
  FaBriefcase,
} from "react-icons/fa";

const Nav = styled.nav`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 1rem 2rem;
  background: rgba(17, 21, 29, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 12px;
  display: flex;
  gap: 2rem;
  z-index: 1000;
  transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  pointer-events: ${({ isVisible }) => (isVisible ? "auto" : "none")};
  transform: ${({ isVisible }) =>
    isVisible ? "translateX(-50%)" : "translateX(-50%) translateY(-20px)"};
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 0.95rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.4rem;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }

  span {
    display: inline;

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
`;

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const scrollingDown = currentScrollY > lastScrollY;

          if (Math.abs(currentScrollY - lastScrollY) > 10) {
            setIsVisible(!scrollingDown || currentScrollY < 50);
            setLastScrollY(currentScrollY);
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <Nav isVisible={isVisible}>
      <NavLink href="#home">
        <FaHome />
        <span>Início</span>
      </NavLink>
      <NavLink href="#sobre">
        <FaUser />
        <span>Sobre</span>
      </NavLink>
      <NavLink href="#carreira">
        <FaBriefcase />
        <span>Carreira</span>
      </NavLink>
      <NavLink href="#projetos">
        <FaProjectDiagram />
        <span>Projetos</span>
      </NavLink>
      <NavLink href="#contato">
        <FaEnvelope />
        <span>Contato</span>
      </NavLink>
    </Nav>
  );
}
