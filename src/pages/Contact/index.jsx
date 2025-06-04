// src/sections/Contact.jsx
import styled from "styled-components";
import { motion } from "framer-motion";
import Container from "@/components/Container";

const Section = styled(Container)`
  padding: 5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const Info = styled(motion.div)`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.1rem;
  line-height: 1.8;
`;

const Link = styled.a`
  display: block;
  color: ${({ theme }) => theme.colors.accent};
  font-weight: bold;
  margin-top: 1rem;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
`;

export default function Contact() {
  return (
    <Section>
      <Title>Contato</Title>
      <Info
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Estou disponível para novas oportunidades, colaborações ou simplesmente
        bater um papo sobre tecnologia e design.
        <br />
        Me mande um e-mail ou me chame nas redes sociais.
        <Link href="mailto:marcelo@email.com">marcelo@email.com</Link>
        <Link
          href="https://www.linkedin.com/in/marcelo-bueno-developer"
          target="_blank"
        >
          LinkedIn
        </Link>
        <Link href="https://github.com/seu-usuario" target="_blank">
          GitHub
        </Link>
      </Info>
    </Section>
  );
}
