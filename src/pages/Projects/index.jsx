// src/pages/Projects.jsx
import styled from "styled-components";
import { motion } from "framer-motion";
import Container from "@/components/Container";

const Section = styled(Container)`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  overflow: hidden;
  width: 100%;
`;

const Card = styled(motion.div)`
  background: #111;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  padding: 1.5rem;
  transition: transform 0.3s ease;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textPrimary};

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectTitle = styled.h3`
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.95rem;
`;

export default function Projects() {
  const projetos = [
    {
      title: "Portfólio Pessoal",
      description:
        "Site feito em React e styled-components com foco em animações e identidade visual forte.",
    },
    {
      title: "Landing Page Freelancer",
      description:
        "Landing page responsiva feita para um cliente da área de design.",
    },
    {
      title: "Dashboard Financeiro",
      description:
        "Dashboard com gráficos e painéis interativos utilizando Chart.js e consumo de API.",
    },
  ];

  return (
    <Section>
      <Title>Projetos</Title>
      <Grid>
        {projetos.map((projeto, index) => (
          <Card
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <ProjectTitle>{projeto.title}</ProjectTitle>
            <Description>{projeto.description}</Description>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}
