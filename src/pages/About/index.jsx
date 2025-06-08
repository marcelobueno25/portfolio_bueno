// src/sections/About.jsx
import styled from "styled-components";
import { motion } from "framer-motion";
import Container from "@/components/Container";
import { Title } from "@/components/Title";
import { useTranslation } from "react-i18next";

const Section = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Paragraph = styled(motion.p)`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.1rem;
  line-height: 1.6;
`;

export default function About() {
  const { t } = useTranslation();
  return (
    <>
      <Section>
        <Title>{t("about_title")}</Title>
        <Paragraph
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t("about_text")}
        </Paragraph>
      </Section>
    </>
  );
}
