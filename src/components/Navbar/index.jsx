// src/components/Header.jsx
import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem 5vw;
  background: transparent;
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
  z-index: 1000;
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export default function Header() {
  return (
    <Nav>
      <NavLink href="#home">Início</NavLink>
      <NavLink href="#projetos">Projetos</NavLink>
      <NavLink href="#sobre">Sobre</NavLink>
      <NavLink href="#contato">Contato</NavLink>
    </Nav>
  );
}
