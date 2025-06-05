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
  FaDownload,
} from "react-icons/fa";
import BackgroundEffect from "@/components/BackgroundEffect";

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
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  line-height: 1.2;
  max-width: 800px;
  font-family: "Asta Sans", sans-serif;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.accent};
  font-family: "Playwrite NO", cursive;
  font-optical-sizing: auto;
  font-style: normal;
  font-weight: 200;
  font-size: 2rem; /* tamanho base para desktop */
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
  flex-wrap: wrap;
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

const SeniorBadge = styled.span`
  background: linear-gradient(135deg, #00ffe0, #00ffe0);
  color: #000;
  font-weight: bold;
  font-size: 0.9rem;
  padding: 0.3rem 2rem;
  border-radius: 12px;
  animation: pulse 2s infinite;

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(0, 255, 224, 0.4);
    }
    70% {
      box-shadow: 0 0 0 8px rgba(0, 255, 224, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(0, 255, 224, 0);
    }
  }
`;

const DownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
  border: 2px solid #fff;
  background: transparent;
  border-radius: 25px;
  text-decoration: none;
  transition: background 0.3s, color 0.3s;

  @media (max-width: 480px) {
    width: 100%;
    margin-bottom: 1rem;
  }

  &:hover {
    background: #fff;
    color: #0a0a0a;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export default function Home() {
  return (
    <ContainerHome>
      <BackgroundEffect />
      <ProfileImage src={MinhaFoto} alt="Minha foto" />
      <div>
        <Heading
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Olá, eu sou <Highlight>Marcelo Bueno</Highlight>,<br />
          <GradientText>Desenvolvedor Front-End</GradientText>
          <br />
          <SeniorBadge>Pleno \ Sênior</SeniorBadge>
        </Heading>
        <SocialLinks>
          <DownloadButton
            href="/cv-marcelo-bueno.pdf"
            download="Marcelo-Bueno-CV.pdf"
          >
            <FaDownload style={{ marginRight: "0.5rem" }} />
            Download CV
          </DownloadButton>

          <IconCircle href="https://github.com/marcelobueno25" color="#fff">
            <FaGithub />
          </IconCircle>
          <IconCircle
            href="https://www.linkedin.com/in/marcelo-bueno-developer/"
            color="#fff"
          >
            <FaLinkedin />
          </IconCircle>
          <IconCircle
            href="https://www.instagram.com/visao_de_programador/"
            color="#fff"
          >
            <FaInstagram />
          </IconCircle>
          <IconCircle href="https://facebook.com/" color="#fff">
            <FaFacebook />
          </IconCircle>
          <IconCircle href="https://www.tiktok.com/@buenodev_" color="#fff">
            <FaTiktok />
          </IconCircle>
        </SocialLinks>
      </div>
    </ContainerHome>
  );
}
