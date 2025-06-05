// src/pages/Carreira.jsx
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
} from "react-icons/fa";

const Section = styled(Container)`
  padding: 8rem 2rem 4rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 3rem;
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

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.8rem;
`;

const Tag = styled.span`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 0.75rem;
  padding: 0.3rem 0.6rem;
  border-radius: 6px;
`;

export default function Carreira() {
  return (
    <Section id="carreira">
      <Title>Minha Carreira</Title>
      <Timeline>
        <Job>
          <JobTitle>Analista de Desenvolvimento</JobTitle>
          <Company>Marketdata · Mar 2021 - Atual</Company>
          <Description>
            Desenvolvimento de soluções web robustas utilizando React, Node.js,
            Angular e .NET. Atuação em equipe multidisciplinar focada em
            entregas estratégicas e alto desempenho.
          </Description>
          <Tags>
            <Tag>
              <FaReact /> React
            </Tag>
            <Tag>
              <FaNodeJs /> Node.js
            </Tag>
            <Tag>
              <FaAngular /> Angular
            </Tag>
            <Tag>
              <FaMicrosoft /> .NET
            </Tag>
          </Tags>
        </Job>
        <Job>
          <JobTitle>Desenvolvedor Front-End</JobTitle>
          <Company>Telefônica Educação Digital · Dez 2019 - Mar 2021</Company>
          <Description>
            Criação de jogos educacionais, landing pages e onboarding de novos
            membros. Uso de HTML5, CSS3, JavaScript.
          </Description>
          <Tags>
            <Tag>
              <FaHtml5 /> HTML5
            </Tag>
            <Tag>
              <FaCss3Alt /> CSS3
            </Tag>
            <Tag>
              <FaJs /> JavaScript
            </Tag>
          </Tags>
        </Job>
        <Job>
          <JobTitle>Desenvolvedor Front-End</JobTitle>
          <Company>MJV Technology & Innovation · Out 2018 - Nov 2019</Company>
          <Description>
            Atuação no Bradesco Seguros com foco em landing pages,
            compatibilidade cross-browser e suporte ao SharePoint 2013.
          </Description>
          <Tags>
            <Tag>
              <FaHtml5 /> HTML5
            </Tag>
            <Tag>
              <FaCss3Alt /> CSS3
            </Tag>
            <Tag>
              <FaJs /> JavaScript
            </Tag>
          </Tags>
        </Job>
        <Job>
          <JobTitle>Suporte Técnico</JobTitle>
          <Company>Cappta · Jun 2018 - Out 2018</Company>
          <Description>
            Atendimento remoto, análise de erros e resolução de chamados
            técnicos.
          </Description>
        </Job>
        <Job>
          <JobTitle>Estagiário em Suporte Técnico</JobTitle>
          <Company>CEAGESP · Set 2017 - Mai 2018</Company>
          <Description>
            Instalação e manutenção de hardware/software, suporte aos usuários e
            redes.
          </Description>
        </Job>
        <Job>
          <JobTitle>Backoffice</JobTitle>
          <Company>CSU CardSystem · Mar 2015 - Fev 2017</Company>
          <Description>
            Atendimento ao cliente e suporte ao site Natura com foco em
            resolução de problemas críticos.
          </Description>
        </Job>
      </Timeline>
    </Section>
  );
}
