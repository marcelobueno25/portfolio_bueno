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
} from "react-icons/fa";
import { SiSass, SiArduino } from "react-icons/si";

const Section = styled(Container)`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 2.5rem;
  margin: 0;
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
  margin-bottom: 0.5rem;
`;

const Metadata = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-top: 0.3rem;
`;

const Button = styled.button`
  padding: 0.6rem 1.4rem;
  font-size: 0.9rem;
  font-weight: 600;
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.muted};
  border: none;
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

const ProjectImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 1rem;
`;

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const projetos = [
    {
      title: "Coffe Delivery",
      description:
        "Aplicação de e-commerce fictícia para venda de cafés especiais com carrinho e formulário de entrega.",
      date: "jan de 2023",
      techs: [{ icon: FaReact, label: "React" }],
      image: "projects/coffee-delivery.png",
      link: "https://coffee-delivery-rho-two.vercel.app/",
    },
    {
      title: "FeedHub",
      description:
        "Rede social fictícia para treinar componentes, props, estado e CSS Modules.",
      date: "jan de 2023",
      techs: [{ icon: FaReact, label: "React" }],
      image: "projects/feedhub.png",
      link: "https://feedhub-github.vercel.app/",
    },
    {
      title: "ToDo List",
      description:
        "Lista de tarefas para adicionar, concluir e remover atividades.",
      date: "jan de 2023",
      techs: [{ icon: FaReact, label: "React" }],
      image: "projects/todo-list.png",
      link: "https://todo-list-nine-taupe-30.vercel.app/",
    },
    {
      title: "Game - Número Secreto",
      description: "Jogo simples para adivinhar número secreto.",
      date: "jan de 2022",
      techs: [
        { icon: FaHtml5, label: "HTML5" },
        { icon: FaJs, label: "JavaScript" },
      ],
      image: "projects/numero-secreto.png",
      link: "https://marcelobueno25.github.io/game.numero.secreto/",
    },
    {
      title: "Pokédex",
      description:
        "Aplicação com PokéAPI e RxJS para exibir dados dos Pokémon.",
      date: "jan de 2021",
      techs: [
        { icon: FaAngular, label: "Angular" },
        { icon: FaStream, label: "RxJS" },
        { icon: FaJs, label: "JavaScript" },
        { icon: SiSass, label: "Sass" },
        { icon: FaHtml5, label: "HTML5" },
      ],
      image: "projects/pokedex.png",
      link: "https://angular-pokedex-green.vercel.app/pokemon",
    },
    {
      title: "Police and Thief (Android)",
      description:
        "Jogo retrô baseado em Keystone Kapers. Desenvolvido em Unity com C#.",
      date: "fev de 2019 - jul de 2019",
      techs: [{ icon: FaUnity, label: "Unity" }],
      image: "projects/police-and-thief.jpeg",
      link: "",
    },
    {
      title: "Base Apparel",
      description:
        "Landing page 'coming soon' com validação de formulário e layout responsivo.",
      date: "jan de 2019",
      techs: [
        { icon: FaHtml5, label: "HTML5" },
        { icon: FaCss3Alt, label: "CSS3" },
        { icon: FaJs, label: "JavaScript" },
      ],
      image: "projects/frontend-mentor.jpg",
      link: "https://marcelobueno25.github.io/baseapparel.github.io/",
    },
    {
      title: "Caminar",
      description: "Landing page minimalista ideal para projetos criativos.",
      date: "jan de 2019",
      techs: [
        { icon: FaHtml5, label: "HTML5" },
        { icon: FaCss3Alt, label: "CSS3" },
        { icon: FaJs, label: "JavaScript" },
      ],
      image: "projects/caminar.png",
      link: "https://marcelobueno25.github.io/caminar.github.io/",
    },
    {
      title: "Caravan",
      description:
        "Página para agências de turismo com layout moderno e seções modulares.",
      date: "jan de 2019",
      techs: [
        { icon: FaHtml5, label: "HTML5" },
        { icon: FaCss3Alt, label: "CSS3" },
        { icon: FaJs, label: "JavaScript" },
      ],
      image: "projects/caravan.png",
      link: "https://marcelobueno25.github.io/caravan.github.io/",
    },
    {
      title: "Construtiva",
      description:
        "Landing page para construção civil com foco em clareza e apresentação profissional.",
      date: "jan de 2019",
      techs: [
        { icon: FaHtml5, label: "HTML5" },
        { icon: FaCss3Alt, label: "CSS3" },
        { icon: FaJs, label: "JavaScript" },
      ],
      image: "projects/construtiva.png",
      link: "https://marcelobueno25.github.io/construtiva.github.io/",
    },
    {
      title: "Sistema biométrico (Arduino)",
      description:
        "Projeto acadêmico de segurança com acesso biométrico e controle de agrotóxicos.",
      date: "jul de 2018 - nov de 2018",
      techs: [{ icon: SiArduino, label: "Arduino" }],
      image: "projects/sistema-biometrico.jpg",
      link: "",
    },
    {
      title: "App de Comunicação (Android)",
      description:
        "App para medição da poluição e comunicação entre trabalhadores.",
      date: "fev de 2018 - jun de 2018",
      techs: [{ icon: FaJava, label: "Java" }],
      image: "projects/android.jpeg",
      link: "",
    },
    {
      title: "Sabil",
      description:
        "Landing page moderna e responsiva para startups e produtos digitais.",
      date: "jan de 2018",
      techs: [
        { icon: FaHtml5, label: "HTML5" },
        { icon: FaCss3Alt, label: "CSS3" },
        { icon: FaJs, label: "JavaScript" },
      ],
      image: "projects/sabil.png",
      link: "https://marcelobueno25.github.io/sabil.github.io/",
    },
    {
      title: "Métodos de Ordenação",
      description:
        "Software acadêmico para comparar performance de algoritmos de ordenação.",
      date: "ago de 2017 - nov de 2017",
      techs: [{ icon: FaJava, label: "Java" }],
      image: "projects/metodos-de-ordenacao.png",
      link: "",
    },
    {
      title: "Jogo sobre Sustentabilidade",
      description:
        "Jogo educativo para separar resíduos recicláveis, feito em Construct 2.",
      date: "2017",
      techs: [{ icon: FaProjectDiagram, label: "Construct 2" }],
      image: "projects/android.jpeg",
      link: "",
    },
  ];

  const projetosVisiveis = showAll ? projetos : projetos.slice(0, 6);

  return (
    <Section>
      <Header>
        <Title>Projetos</Title>
        <Button onClick={() => setShowAll(!showAll)}>
          {showAll ? "Ver menos" : "Ver mais"}
        </Button>
      </Header>
      <Grid>
        <AnimatePresence>
          {projetosVisiveis.map((projeto, index) => (
            <Card
              key={projeto.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {projeto.image && (
                <ProjectImage src={projeto.image} alt={projeto.title} />
              )}
              <ProjectTitle>{projeto.title}</ProjectTitle>
              <Description>{projeto.description}</Description>
              <Metadata>{projeto.date}</Metadata>
              <TechTags items={projeto.techs} />
            </Card>
          ))}
        </AnimatePresence>
      </Grid>
    </Section>
  );
}
