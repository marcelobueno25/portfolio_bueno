// src/pages/Carreira.jsx
import styled from "styled-components";
import Container from "@/components/Container";
import { motion } from "framer-motion";

const Section = styled(Container)`
  padding: 8rem 2rem 4rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
  text-align: center;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 700px;
  width: 100%;
`;

const Job = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  padding: 1.5rem;
  text-align: left;
`;

const JobTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
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

export default function Carreira() {
  return (
    <Section id="carreira">
      <Title
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Minha Carreira
      </Title>
      <Timeline>
        <Job>
          <JobTitle>Analista de Desenvolvimento</JobTitle>
          <Company>Marketdata · Mar 2021 - Atual</Company>
          <Description>
            Desenvolvimento de soluções web robustas utilizando React, Node.js,
            Angular e .NET. Atuação em equipe multidisciplinar focada em
            entregas estratégicas e alto desempenho.
          </Description>
        </Job>
        <Job>
          <JobTitle>Desenvolvedor Front-End</JobTitle>
          <Company>Telefônica Educação Digital · Dez 2019 - Mar 2021</Company>
          <Description>
            Criação de jogos educacionais, landing pages e onboarding de novos
            membros. Uso de HTML5, CSS3, JavaScript.
          </Description>
        </Job>
        <Job>
          <JobTitle>Desenvolvedor Front-End</JobTitle>
          <Company>MJV Technology & Innovation · Out 2018 - Nov 2019</Company>
          <Description>
            Atuação no Bradesco Seguros com foco em landing pages,
            compatibilidade cross-browser e suporte ao SharePoint 2013.
          </Description>
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
