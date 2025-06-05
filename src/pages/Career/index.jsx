import { useState } from "react";
import styled from "styled-components";
import Container from "@/components/Container";
import {
  FaReact,
  FaNodeJs,
  FaAngular,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaMicrosoft,
  FaFlask,
  FaGitlab,
  FaLess,
  FaSass,
  FaUnity,
  FaVuejs,
} from "react-icons/fa";
import TechTags from "@/components/TechTags";

const Section = styled(Container)`
  padding: 8rem 2rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0;
`;

const Timeline = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 720px;
  width: 100%;
  padding-left: 1.5rem;
  border-left: 2px solid ${({ theme }) => theme.colors.border};
  list-style-type: none;
`;

const Job = styled.li`
  position: relative;
  padding-left: 1.5rem;

  &::before {
    content: "";
    position: absolute;
    top: 0.8rem;
    left: -2.05rem;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.accent};
    border: 2px solid ${({ theme }) => theme.colors.background};
  }
`;

const JobTitle = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.accent};
`;

const Company = styled.p`
  margin: 0.2rem 0;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Description = styled.p`
  margin-top: 0.5rem;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const Button = styled.button`
  background: ${({ theme }) => theme.colors.accent};
  color: #0a0a0a;
  border: none;
  padding: 0.7rem 1.4rem;
  font-weight: 600;
  font-size: 0.9rem;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export default function Carreira() {
  const [showAll, setShowAll] = useState(false);

  const experiencias = [
    {
      title: "Analista de Desenvolvimento",
      company: "Marketdata · Mar 2021 - Atual",
      description:
        "Desenvolvimento de soluções web robustas utilizando React, Node.js, Angular e .NET.",
      techs: [
        { icon: FaGitlab, label: "GitLab" },
        { icon: FaReact, label: "React" },
        { icon: FaNodeJs, label: "Node.js" },
        { icon: FaAngular, label: "Angular" },
        { icon: FaMicrosoft, label: ".NET" },
        { icon: FaHtml5, label: "HTML5" },
        { icon: FaCss3Alt, label: "CSS3" },
        { icon: FaJs, label: "JavaScript" },
        { icon: FaFlask, label: "Jest" },
      ],
    },
    {
      title: "Desenvolvedor Front-End",
      company: "Telefônica Educação Digital · Dez 2019 - Mar 2021",
      description:
        "Criação de jogos educacionais, landing pages e onboarding de novos membros.",
      techs: [
        { icon: FaGitlab, label: "GitLab" },
        { icon: FaHtml5, label: "HTML5" },
        { icon: FaCss3Alt, label: "CSS3" },
        { icon: FaJs, label: "JavaScript" },
        { icon: FaUnity, label: "Unity" },
      ],
    },
    {
      title: "Desenvolvedor Front-End",
      company: "MJV Technology & Innovation · Out 2018 - Nov 2019",
      description:
        "Atuação no Bradesco Seguros com foco em landing pages, compatibilidade cross-browser e suporte ao SharePoint.",
      techs: [
        { icon: FaGitlab, label: "GitLab" },
        { icon: FaHtml5, label: "HTML5" },
        { icon: FaCss3Alt, label: "CSS3" },
        { icon: FaJs, label: "JavaScript" },
        { icon: FaVuejs, label: "Vue.js" },
        { icon: FaLess, label: "Less" },
        { icon: FaSass, label: "Sass" },
      ],
    },
    {
      title: "Suporte Técnico",
      company: "Cappta · Jun 2018 - Out 2018",
      description:
        "Atendimento remoto, análise de erros e resolução de chamados técnicos.",
    },
    {
      title: "Estagiário em Suporte Técnico",
      company: "CEAGESP · Set 2017 - Mai 2018",
      description:
        "Instalação e manutenção de hardware/software, suporte aos usuários e redes.",
    },
    {
      title: "Backoffice",
      company: "CSU CardSystem · Mar 2015 - Fev 2017",
      description:
        "Atendimento ao cliente e suporte ao site Natura com foco em resolução de problemas críticos.",
    },
  ];

  const visiveis = showAll ? experiencias : experiencias.slice(0, 3);

  return (
    <Section id="carreira">
      <Title>
        <Header>
          <Title>Minha Carreira</Title>
          <Button onClick={() => setShowAll(!showAll)}>
            {showAll ? "Ver menos" : "Ver mais"}
          </Button>
        </Header>
      </Title>
      <Timeline>
        {visiveis.map((job, idx) => (
          <Job key={idx}>
            <JobTitle>{job.title}</JobTitle>
            <Company>{job.company}</Company>
            <Description>{job.description}</Description>
            {job.techs && <TechTags items={job.techs} />}
          </Job>
        ))}
      </Timeline>
    </Section>
  );
}
