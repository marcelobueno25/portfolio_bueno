import styled from "styled-components";

export const SocialLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const IconCircle = styled.a`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid ${({ color }) => color};
  color: ${({ color }) => color};
  background: transparent;
  transition: 0.3s;

  &:hover {
    background: ${({ color }) => color};
    color: #0a0a0a;
  }
`;
