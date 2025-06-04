// src/pages/Home.jsx
import styled from "styled-components";
import { motion } from "framer-motion";
import GradientText from "@/components/GradientText";
import Container from "@/components/Container";

const ContainerHome = styled(Container)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 5vw;
  padding-right: 5vw;
`;

const Heading = styled(motion.h1)`
  font-size: 3.5rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  line-height: 1.2;
  max-width: 800px;
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.accent};
`;

export default function Home() {
  return (
    <ContainerHome>
      <Heading
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Olá, eu sou <Highlight>Marcelo Bueno</Highlight>.<br />
        <GradientText>Desenvolvedor Front-End</GradientText>
      </Heading>
    </ContainerHome>
  );
}
