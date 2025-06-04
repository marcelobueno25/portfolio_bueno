import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100%;
  padding: 2rem 5vw;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
  font-size: 0.9rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: 768px) {
    padding: 1.5rem 4vw;
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    padding: 1rem 3vw;
    font-size: 0.8rem;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      &copy; {new Date().getFullYear()} Marcelo Bueno. Todos os direitos
      reservados.
    </FooterContainer>
  );
}
