import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
`;

const Line = styled.div`
  flex: 1;
  height: 1px;
  background: ${({ theme }) => theme.colors.textSecondary};
  opacity: 0.3;
`;

const LinkText = styled.span`
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.accent};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: underline;
  }
`;

export default function ShowMoreLink({ isExpanded, onClick }) {
  return (
    <Wrapper>
      <Line />
      <LinkText onClick={onClick}>
        {isExpanded ? "Ver menos" : "Ver mais"}
      </LinkText>
      <Line />
    </Wrapper>
  );
}
