// src/components/TechTags.jsx
import styled from "styled-components";

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.8rem;
`;

const Tag = styled.span`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 0.75rem;
  padding: 0.3rem 0.6rem;
  border-radius: 6px;
`;

export default function TechTags({ items = [] }) {
  return (
    <Tags>
      {items.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <Tag key={index}>
            <IconComponent /> {item.label}
          </Tag>
        );
      })}
    </Tags>
  );
}
