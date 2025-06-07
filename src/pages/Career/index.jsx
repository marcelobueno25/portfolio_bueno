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
import { Title } from "@/components/Title";

const Section = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
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
  line-height: 1.5;
`;

const Button = styled.button`
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.muted};
  border: none;
  padding: 0.7rem 1.4rem;
  font-weight: 600;
  font-size: 0.9rem;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s ease;
  min-width: 120px;

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
      description: [
        "✓ Desenvolvimento de interfaces em React, utilizando a biblioteca Ant Design (antd) para construção de componentes reutilizáveis e responsivos;",
        "✓ Criação e manutenção de layouts de telas completas, alinhadas com as demandas de negócio;",
        "✓ Comunicação direta com o cliente para entendimento de requisitos, levantamento de novas funcionalidades e ajustes em features existentes;",
        "✓ Integração com back-end (API e banco de dados), em conjunto com o desenvolvedor responsável pela camada de dados;",
        "✓ Utilização do GitLab para versionamento de código e processos de merge/review;",
        "✓ Planejamento e acompanhamento de tarefas via Jira, seguindo a metodologia ágil Scrum;",
        "✓ Desenho de fluxos e protótipos utilizando o Miro, facilitando a comunicação entre o time e o cliente;",
        "✓ Participação ativa em daily meetings, plannings e reviews com foco em entregas contínuas e melhoria do produto.",
      ],
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
      description: [
        "✓ Desenvolvimento de Jogos Educacionais para a web.",
        "✓ Criação de Landing Pages utilizando HTML5, CSS3 e JavaScript.",
        "✓ Treinamento de novos membros da equipe.",
        "✓ Facilitação de sessões de brainstorming e alinhamento estratégico para aprimorar recursos online.",
        "✓ Fechamento de pacotes SCORM 1.2.",
      ],
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
      description: [
        "✓ Designado para atuar no Bradesco Seguros.",
        "✓ Responsável pelo desenvolvimento de Landing Pages utilizando tecnologias como HTML, Nunjucks, Gulp, CSS, SASS, Bootstrap, JavaScript (ES6), jQuery, além da gestão de dependências com NPM e Yarn, e o uso de sistemas de controle de versão como Git e Gitlab.",
        "✓ Forneci suporte em CSS, HTML, JavaScript e Design para a plataforma Sharepoint 2013.",
        "✓ Realizei tarefas de recorte e edição de imagens utilizando ferramentas como o Adobe Photoshop e Gimp.",
        "✓ Garanti a compatibilidade com diferentes navegadores e implementei soluções de fallback para o Internet Explorer.",
      ],
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
      description: [
        "✓ Realização de análise de erros e esclarecimento de dúvidas;",
        "✓ Execução de procedimentos técnicos via acesso remoto;",
        "✓ Acompanhamento e monitoramento de chamados da área;",
        "✓ Contribuição para o tratamento de backlog.",
      ],
    },
    {
      title: "Estagiário em Suporte Técnico",
      company: "CEAGESP · Set 2017 - Mai 2018",
      description: [
        "✓ Prestação de suporte ao usuário, oferecendo esclarecimentos e soluções para questões técnicas.",
        "✓ Realização de instalações, configurações e manutenções de hardware e software.",
        "✓ Resolução de desafios relacionados à conectividade na rede de computadores da empresa.",
        "✓ Colaboração com técnicos e analistas em tarefas relacionadas à infraestrutura de tecnologia da informação.",
      ],
    },
    {
      title: "Backoffice",
      company: "CSU CardSystem · Mar 2015 - Fev 2017",
      description: [
        "Encarregado de prestar um atendimento de alta qualidade, assegurando que todas as solicitações dos clientes sejam tratadas de maneira adequada. Isso inclui a resolução de problemas e reclamações de alta importância, além de oferecer suporte ao site Natura.",
      ],
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
            <Description>
              {Array.isArray(job.description)
                ? job.description.map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))
                : job.description}
            </Description>{" "}
            {job.techs && <TechTags items={job.techs} />}
          </Job>
        ))}
      </Timeline>
    </Section>
  );
}
