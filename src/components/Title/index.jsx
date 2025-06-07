import styled from "styled-components";

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 2.5rem;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;
