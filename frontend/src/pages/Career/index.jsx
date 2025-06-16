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
import { useTranslation } from "react-i18next";
import ShowMoreButton from "@/components/ShowMoreButton";

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
    background-color: ${({ theme }) => theme.colors.primary};
    border: 2px solid ${({ theme }) => theme.colors.background};
  }
`;

const JobTitle = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.primary};
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

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export default function Carreira() {
  const { t } = useTranslation();
  const [showAll, setShowAll] = useState(false);

  const techLists = [
    [
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
    [
      { icon: FaGitlab, label: "GitLab" },
      { icon: FaHtml5, label: "HTML5" },
      { icon: FaCss3Alt, label: "CSS3" },
      { icon: FaJs, label: "JavaScript" },
      { icon: FaUnity, label: "Unity" },
    ],
    [
      { icon: FaGitlab, label: "GitLab" },
      { icon: FaHtml5, label: "HTML5" },
      { icon: FaCss3Alt, label: "CSS3" },
      { icon: FaJs, label: "JavaScript" },
      { icon: FaVuejs, label: "Vue.js" },
      { icon: FaLess, label: "Less" },
      { icon: FaSass, label: "Sass" },
    ],
  ];

  const textExperiences = t("career_experiences", { returnObjects: true });
  const experiencias = textExperiences.map((exp, idx) => ({
    ...exp,
    techs: techLists[idx],
  }));

  const visiveis = showAll ? experiencias : experiencias.slice(0, 3);

  return (
    <Section id="carreira">
      <Title>
        <Header>
          <Title>{t("career_title")}</Title>
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
      <ShowMoreButton
        isExpanded={showAll}
        onClick={() => setShowAll(!showAll)}
      />
    </Section>
  );
}
