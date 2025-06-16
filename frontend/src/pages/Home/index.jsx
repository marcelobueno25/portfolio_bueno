import { useEffect, useState } from "react"; // já está importado useState
import styled from "styled-components";
import { motion } from "framer-motion";
import GradientText from "@/components/GradientText";
import Container from "@/components/Container";
import MinhaFoto from "@/assets/my-photo.png"; // substitua pelo caminho correto
import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaTiktok,
  FaDownload,
} from "react-icons/fa";
import BackgroundEffect from "@/components/BackgroundEffect";
import ScrollIndicator from "@/components/ScrollIndicator";
import ProfileImage from "@/components/ProfileImage";
import { IconCircle, SocialLinks } from "@/components/SocialLinks";
import SeniorBadge from "@/components/SeniorBadge";
import DownloadButton from "@/components/DownloadButton";
import { useTranslation } from "react-i18next";
import { GrInstagram } from "react-icons/gr";

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

export default function Home() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const { t } = useTranslation();

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
      <ProfileImage src={MinhaFoto} alt={t("alt_photo")} />
      <div>
        <Heading
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t("home_intro", { name: "Marcelo Bueno" })}
          <GradientText>{t("dev_role")}</GradientText>
          <br />
          <SeniorBadge>{t("level_senior")}</SeniorBadge>
        </Heading>
        <SocialLinks>
          <DownloadButton
            href="/cv-marcelo-bueno.pdf"
            download="Marcelo-Bueno-CV.pdf"
          >
            <FaDownload style={{ marginRight: "0.5rem" }} />
            {t("download_cv")}
          </DownloadButton>

          <IconCircle href="https://github.com/marcelobueno25" color="#fff">
            <FaGithub />
          </IconCircle>
          <IconCircle
            href="https://www.linkedin.com/in/marcelo-bueno-developer/"
            color="#fff"
          >
            <FaLinkedinIn />
          </IconCircle>
          <IconCircle
            href="https://www.instagram.com/visao_de_programador/"
            color="#fff"
          >
            <GrInstagram />
          </IconCircle>
          <IconCircle href="https://facebook.com/" color="#fff">
            <FaFacebookF />
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
