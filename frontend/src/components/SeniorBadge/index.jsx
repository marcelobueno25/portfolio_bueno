import styled from "styled-components";

const SeniorBadge = styled.span`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.primary}
  );
  color: ${({ theme }) => theme.colors.muted}; /* cor adaptável ao tema */
  font-weight: bold;
  font-size: 0.9rem;
  padding: 0.3rem 2rem;
  border-radius: 12px;
  animation: pulse 2s infinite;

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 ${({ theme }) => theme.colors.primary}66; /* 0.4 opacidade */
    }
    70% {
      box-shadow: 0 0 0 8px ${({ theme }) => theme.colors.primary}00; /* transparente */
    }
    100% {
      box-shadow: 0 0 0 0 ${({ theme }) => theme.colors.primary}00;
    }
  }
`;

export default SeniorBadge;
