import { useEffect, useState } from "react"; // já está importado useState
import styled from "styled-components";
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
import ScrollIndicator from "@/components/ScrollIndicator";
import ProfileImage from "@/components/ProfileImage";
import { IconCircle, SocialLinks } from "@/components/SocialLinks";
import SeniorBadge from "@/components/SeniorBadge";
import DownloadButton from "@/components/DownloadButton";

const ContainerHome = styled(Container)`
  transition: background-color 0.3s ease, color 0.3s ease;
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
    gap: 1.2rem; /* diminui o espaçamento */
    padding-top: 3rem;
    padding-bottom: 6rem; /* adiciona mais espaço no fundo */
    text-align: center;
  }

  @media (max-width: 480px) {
    gap: 1rem;
    padding-top: 6rem;
    padding-bottom: 6.5rem; /* ainda mais espaço para o indicador */
    justify-content: start;
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

  @media (max-width: 480px) {
    font-size: 1.7rem;
  }
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: "Playwrite NO", cursive;
  font-optical-sizing: auto;
  font-style: normal;
  font-weight: 200;
  font-size: 2rem;
  display: inline-block;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    display: block;
  }
`;

export default function Home() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollIndicator(window.scrollY < 50); // esconde se rolou mais de 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
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
          Olá, eu sou <Highlight>Marcelo Bueno,</Highlight>
          <GradientText>Desenvolvedor Front-End</GradientText>
          <br />
          <SeniorBadge>Pleno / Sênior</SeniorBadge>
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
      {showScrollIndicator && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={
            showScrollIndicator ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <ScrollIndicator />
        </motion.div>
      )}
    </ContainerHome>
  );
}
