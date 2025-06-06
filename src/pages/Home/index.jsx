import { useEffect, useState } from "react"; // já está importado useState
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
    gap: 1.2rem; /* diminui o espaçamento */
    padding-top: 3rem;
    padding-bottom: 6rem; /* adiciona mais espaço no fundo */
    text-align: center;
  }

  @media (max-width: 480px) {
    gap: 1rem;
    padding-top: 3.5rem;
    padding-bottom: 6.5rem; /* ainda mais espaço para o indicador */
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
  color: ${({ theme }) => theme.colors.white};
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

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid;
  animation: ${gradientBorder} 18s linear infinite;

  @media (max-width: 768px) {
    width: 180px;
    height: 180px;
  }

  @media (max-width: 480px) {
    display: none;
    width: 150px;
    height: 150px;
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

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 1rem;
  }

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

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 1.2rem; // ↓ ajustado de 2rem para 1.2rem
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;

  .mouse {
    width: 24px;
    height: 40px;
    border: 2px solid #fff;
    border-radius: 12px;
    position: relative;
  }

  .mouse::before {
    content: "";
    position: absolute;
    top: 6px;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 8px;
    background: #fff;
    border-radius: 4px;
    animation: wheel 1.5s infinite;
  }

  @keyframes wheel {
    0% {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateX(-50%) translateY(10px);
    }
  }

  .arrows {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.2rem;
    margin-top: 0.3rem;
  }

  .arrow {
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 6px solid #fff;
    animation: blink 1.5s infinite;
  }

  .arrow:nth-child(2) {
    animation-delay: 0.2s;
  }

  .arrow:nth-child(3) {
    animation-delay: 0.4s;
  }

  @keyframes blink {
    0% {
      opacity: 0.3;
      transform: translateY(0);
    }
    50% {
      opacity: 1;
      transform: translateY(3px);
    }
    100% {
      opacity: 0.3;
      transform: translateY(0);
    }
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
          <ScrollIndicator>
            <div className="mouse" />
            <div className="arrows">
              <div className="arrow" />
              <div className="arrow" />
              <div className="arrow" />
            </div>
          </ScrollIndicator>
        </motion.div>
      )}
    </ContainerHome>
  );
}
