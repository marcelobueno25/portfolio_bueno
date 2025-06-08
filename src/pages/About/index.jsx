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
        <Title>{t('about_title')}</Title>
        <Paragraph
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Olá! Meu nome é Marcelo Bueno, sou desenvolvedor front-end com foco em
          criar experiências digitais visuais, intuitivas e modernas. Acredito
          que design e código caminham juntos para entregar soluções que
          encantam pessoas e resolvem problemas reais.
          <br />
          <br />
          Tenho experiência com React, styled-components, animações com Framer
          Motion e boas práticas de UI/UX. Estou sempre buscando evoluir como
          profissional e como pessoa — seja criando novos projetos, estudando
          tendências ou trocando ideias com a comunidade.
        </Paragraph>
      </Section>
    </>
  );
}
