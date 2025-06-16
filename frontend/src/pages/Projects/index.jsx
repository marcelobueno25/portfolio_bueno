// src/pages/Projects.jsx
import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/Container";
import TechTags from "@/components/TechTags";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaUnity,
  FaJava,
  FaAngular,
  FaStream,
  FaProjectDiagram,
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";
import { SiSass, SiArduino } from "react-icons/si";
import { Title } from "@/components/Title";
import ShowMoreButton from "@/components/ShowMoreButton";
import { useTranslation } from "react-i18next";

const Section = styled(Container)`
  display: flex;
  flex-direction: column;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  overflow: hidden;
  width: 100%;
`;

const Card = styled(motion.div)`
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  padding: 1.5rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectTitle = styled.h3`
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
`;

const Metadata = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-top: 0.3rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 6px;
`;

const LinkContainer = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: rgba(20, 20, 20, 0.85); /* mais opaco */
  border-radius: 10px;
  display: flex;
  gap: 0.6rem;
  padding: 0.3rem 0.4rem;
  z-index: 10;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4); /* sombra mais forte */
  backdrop-filter: blur(6px); /* leve desfoque de fundo */
  border: 1px solid rgba(255, 255, 255, 0.1); /* detalhe de borda */
`;

const ExternalLinkIcon = styled.a`
  color: #ffffff;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.45rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  transition: background 0.3s, transform 0.2s, color 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.black};
  }
`;

export default function Projects() {
  const { t } = useTranslation();
  const [showAll, setShowAll] = useState(false);

  const meta = [
    {
      techs: [{ icon: FaReact, label: "React" }],
      image: "projects/rotinize.png",
      link: "",
      github: "",
    },
    {
      techs: [{ icon: FaReact, label: "React" }],
      image: "projects/winlove.png",
      link: "https://liricalis-winlove.netlify.app/",
      github: "",
    },
    {
      techs: [{ icon: FaReact, label: "React" }],
      image: "projects/cinelis.png",
      link: "https://cinelis-plus.netlify.app/",
      github: "",
    },
    {
      techs: [{ icon: FaReact, label: "React" }],
      image: "projects/coffee-delivery.png",
      link: "https://coffee-delivery-rho-two.vercel.app/",
      github: "https://github.com/marcelobueno25/coffee.delivery",
    },
    {
      techs: [{ icon: FaReact, label: "React" }],
      image: "projects/feedhub.png",
      link: "https://feedhub-github.vercel.app/",
      github: "https://github.com/marcelobueno25/feedhub.github",
    },
    {
      techs: [{ icon: FaReact, label: "React" }],
      image: "projects/todo-list.png",
      link: "https://todo-list-nine-taupe-30.vercel.app/",
      github: "https://github.com/marcelobueno25/todo.list",
    },
    {
      techs: [
        { icon: FaHtml5, label: "HTML5" },
        { icon: FaJs, label: "JavaScript" },
      ],
      image: "projects/numero-secreto.png",
      link: "https://marcelobueno25.github.io/game.numero.secreto/",
      github: "https://github.com/marcelobueno25/game.numero.secreto",
    },
    {
      techs: [
        { icon: FaAngular, label: "Angular" },
        { icon: FaStream, label: "RxJS" },
        { icon: FaJs, label: "JavaScript" },
        { icon: SiSass, label: "Sass" },
        { icon: FaHtml5, label: "HTML5" },
      ],
      image: "projects/pokedex.png",
      link: "https://angular-pokedex-green.vercel.app/pokemon",
      github: "https://github.com/marcelobueno25/pokemon.pokedex.angular",
    },
    {
      techs: [{ icon: FaUnity, label: "Unity" }],
      image: "projects/police-and-thief.jpeg",
      link: "",
      github: "",
    },
    {
      techs: [
        { icon: FaHtml5, label: "HTML5" },
        { icon: FaCss3Alt, label: "CSS3" },
        { icon: FaJs, label: "JavaScript" },
      ],
      image: "projects/frontend-mentor.jpg",
      link: "https://marcelobueno25.github.io/baseapparel.github.io/",
      github: "https://github.com/marcelobueno25/baseapparel.github.io",
    },
    {
      techs: [
        { icon: FaHtml5, label: "HTML5" },
        { icon: FaCss3Alt, label: "CSS3" },
        { icon: FaJs, label: "JavaScript" },
      ],
      image: "projects/caminar.png",
      link: "https://marcelobueno25.github.io/caminar.github.io/",
      github: "https://github.com/marcelobueno25/caminar.github.io",
    },
    {
      techs: [
        { icon: FaHtml5, label: "HTML5" },
        { icon: FaCss3Alt, label: "CSS3" },
        { icon: FaJs, label: "JavaScript" },
      ],
      image: "projects/caravan.png",
      link: "https://marcelobueno25.github.io/caravan.github.io/",
      github: "https://github.com/marcelobueno25/caravan.github.io",
    },
    {
      techs: [
        { icon: FaHtml5, label: "HTML5" },
        { icon: FaCss3Alt, label: "CSS3" },
        { icon: FaJs, label: "JavaScript" },
      ],
      image: "projects/construtiva.png",
      link: "https://marcelobueno25.github.io/construtiva.github.io/",
      github: "https://github.com/marcelobueno25/construtiva.github.io",
    },
    {
      techs: [{ icon: SiArduino, label: "Arduino" }],
      image: "projects/sistema-biometrico.jpg",
      link: "",
      github: "",
    },
    {
      techs: [{ icon: FaJava, label: "Java" }],
      image: "projects/android.jpeg",
      link: "",
      github: "",
    },
    {
      techs: [
        { icon: FaHtml5, label: "HTML5" },
        { icon: FaCss3Alt, label: "CSS3" },
        { icon: FaJs, label: "JavaScript" },
      ],
      image: "projects/sabil.png",
      link: "https://marcelobueno25.github.io/sabil.github.io/",
      github: "https://github.com/marcelobueno25/sabil.github.io",
    },
    {
      techs: [{ icon: FaJava, label: "Java" }],
      image: "projects/metodos-de-ordenacao.png",
      link: "",
      github: "",
    },
    {
      techs: [{ icon: FaProjectDiagram, label: "Construct 2" }],
      image: "projects/android.jpeg",
      link: "",
      github: "",
    },
  ];

  const textProjects = t("projects_list", { returnObjects: true });
  const projetos = textProjects.map((p, idx) => ({
    ...p,
    ...meta[idx],
  }));

  const projetosVisiveis = showAll ? projetos : projetos.slice(0, 6);

  return (
    <Section>
      <Header>
        <Title>{t("projects_title")}</Title>
      </Header>

      <Grid>
        <AnimatePresence>
          {projetosVisiveis.map((projeto, index) => (
            <Card
              key={projeto.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {projeto.image && (
                <div style={{ position: "relative" }}>
                  <ProjectImage src={projeto.image} alt={projeto.title} />
                  {(projeto.github || projeto.link) && (
                    <LinkContainer>
                      {projeto.github && (
                        <ExternalLinkIcon
                          href={projeto.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={t("github_label")}
                        >
                          <FaGithub />
                        </ExternalLinkIcon>
                      )}
                      {projeto.link && (
                        <ExternalLinkIcon
                          href={projeto.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={t("site_label")}
                        >
                          <FaExternalLinkAlt />
                        </ExternalLinkIcon>
                      )}
                    </LinkContainer>
                  )}
                </div>
              )}

              <div style={{ flex: 1 }}>
                <ProjectTitle>{projeto.title}</ProjectTitle>
                <Description>{projeto.description}</Description>
                <Metadata>{projeto.date}</Metadata>
                <TechTags items={projeto.techs} />
              </div>
            </Card>
          ))}
        </AnimatePresence>
      </Grid>
      <ShowMoreButton
        isExpanded={showAll}
        onClick={() => setShowAll(!showAll)}
      />
    </Section>
  );
}
