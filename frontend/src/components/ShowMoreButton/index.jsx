import styled from "styled-components";
import { useTranslation } from "react-i18next";

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
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.textPrimary};
    text-decoration: underline;
  }
`;

export default function ShowMoreLink({ isExpanded, onClick }) {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Line />
      <LinkText onClick={onClick}>
        {isExpanded ? t("show_less") : t("show_more")}
      </LinkText>
      <Line />
    </Wrapper>
  );
}
