// src/pages/Home.jsx
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import GradientText from "@/components/GradientText";
import Container from "@/components/Container";
import MinhaFoto from "@/assets/minha-foto3.png"; // substitua pelo caminho correto
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTiktok,
} from "react-icons/fa";

const gradientBorder = keyframes`
  0% {
    border-color: #00ffe0;
  }
  50% {
    border-color: #ff00ff;
  }
  100% {
    border-color: #00ffe0;
  }
`;

const ContainerHome = styled(Container)`
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-left: 5vw;
  padding-right: 5vw;
  gap: 4rem;
  text-align: left;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    padding-top: 2rem;
    text-align: center;
  }
`;

const Heading = styled(motion.h1)`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  line-height: 1.2;
  max-width: 800px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.accent};
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid;
  animation: ${gradientBorder} 18s linear infinite;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 480px) {
    width: 160px;
    height: 160px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const IconCircle = styled.a`
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

export default function Home() {
  return (
    <ContainerHome>
      <ProfileImage src={MinhaFoto} alt="Minha foto" />
      <div>
        <Heading
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Olá, eu sou <Highlight>Marcelo Bueno</Highlight>,<br />
          <GradientText>Desenvolvedor Front-End</GradientText>
        </Heading>
        <SocialLinks>
          <IconCircle href="https://github.com/marcelobueno25" color="#fff">
            <FaGithub />
          </IconCircle>
          <IconCircle
            href="https://www.linkedin.com/in/marcelo-bueno-developer/"
            color="#0A66C2"
          >
            <FaLinkedin />
          </IconCircle>
          <IconCircle
            href="https://www.instagram.com/visao_de_programador/"
            color="#E1306C"
          >
            <FaInstagram />
          </IconCircle>
          <IconCircle href="https://facebook.com/" color="#1877F2">
            <FaFacebook />
          </IconCircle>
          <IconCircle href="https://www.tiktok.com/@buenodev_" color="#eee">
            <FaTiktok />
          </IconCircle>
        </SocialLinks>
      </div>
    </ContainerHome>
  );
}
