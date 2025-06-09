import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  pt: {
    translation: {
      welcome: "Bem vindo, ao meu",
      portfolio: "Portfolio",
      home_intro: "Olá, eu sou {{name}},",
      nav_home: "Início",
      nav_about: "Sobre",
      nav_career: "Carreira",
      nav_projects: "Projetos",
      nav_contact: "Contato",
      show_more: "Ver mais",
      show_less: "Ver menos",
      about_title: "Sobre mim",
      career_title: "Minha Carreira",
      projects_title: "Projetos",
      contact_title: "Contato",
      download_cv: "Download CV",
      name: "Nome",
      your_name: "Seu nome",
      your_email: "Seu e-mail",
      message: "Mensagem",
      your_message: "Sua mensagem",
      send_message: "Enviar mensagem",
      dev_role: "Desenvolvedor Front-End",
      level_senior: "Pleno / Sênior",
      chat_presentation:
        "Oi! Eu sou o Marcelo Bueno. Pode me perguntar qualquer coisa sobre mim, estou aqui pra te contar tudo!",
      about_text:
        "Sou um desenvolvedor movido por curiosidade, criatividade e vontade de transformar ideias em experiências reais. Desde cedo fui atrás de aprendizado por conta própria, participando de projetos sociais, estudando de forma independente e sempre buscando me reinventar.Valorizo ambientes colaborativos, onde posso aprender, contribuir e crescer com propósito. Sou prático, comprometido, gosto de resolver problemas com clareza tenho facilidade em me adaptar a novos desafios. Acredito que tecnologia só faz sentido quando conecta pessoas e gera impacto positivo.",
      contact_heading: "Entre em contato",
      contact_intro:
        "Me mande um e-mail, mensagem ou me chame nas redes sociais.",
      captcha_required: "Por favor, confirme que você não é um robô.",
      msg_success: "✅ Mensagem enviada com sucesso!",
      msg_error: "❌ Ocorreu um erro. Tente novamente.",
      rights_reserved: "Todos os direitos reservados.",
      site_label: "Site",
      github_label: "GitHub",
      alt_photo: "Minha foto",
      career_experiences: [
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
      ],
      projects_list: [
        {
          title: "Coffe Delivery",
          description:
            "Aplicação de e-commerce fictícia para venda de cafés especiais com carrinho e formulário de entrega.",
          date: "jan de 2023",
        },
        {
          title: "FeedHub",
          description:
            "Rede social fictícia para treinar componentes, props, estado e CSS Modules.",
          date: "jan de 2023",
        },
        {
          title: "ToDo List",
          description:
            "Lista de tarefas para adicionar, concluir e remover atividades.",
          date: "jan de 2023",
        },
        {
          title: "Game - Número Secreto",
          description: "Jogo simples para adivinhar número secreto.",
          date: "jan de 2022",
        },
        {
          title: "Pokédex",
          description:
            "Aplicação com PokéAPI e RxJS para exibir dados dos Pokémon.",
          date: "jan de 2021",
        },
        {
          title: "Police and Thief (Android)",
          description:
            "Jogo retrô baseado em Keystone Kapers. Desenvolvido em Unity com C#.",
          date: "fev de 2019 - jul de 2019",
        },
        {
          title: "Base Apparel",
          description:
            "Landing page 'coming soon' com validação de formulário e layout responsivo.",
          date: "jan de 2019",
        },
        {
          title: "Caminar",
          description:
            "Landing page minimalista ideal para projetos criativos.",
          date: "jan de 2019",
        },
        {
          title: "Caravan",
          description:
            "Página para agências de turismo com layout moderno e seções modulares.",
          date: "jan de 2019",
        },
        {
          title: "Construtiva",
          description:
            "Landing page para construção civil com foco em clareza e apresentação profissional.",
          date: "jan de 2019",
        },
        {
          title: "Sistema biométrico (Arduino)",
          description:
            "Projeto acadêmico de segurança com acesso biométrico e controle de agrotóxicos.",
          date: "jul de 2018 - nov de 2018",
        },
        {
          title: "App de Comunicação (Android)",
          description:
            "App para medição da poluição e comunicação entre trabalhadores.",
          date: "fev de 2018 - jun de 2018",
        },
        {
          title: "Sabil",
          description:
            "Landing page moderna e responsiva para startups e produtos digitais.",
          date: "jan de 2018",
        },
        {
          title: "Métodos de Ordenação",
          description:
            "Software acadêmico para comparar performance de algoritmos de ordenação.",
          date: "ago de 2017 - nov de 2017",
        },
        {
          title: "Jogo sobre Sustentabilidade",
          description:
            "Jogo educativo para separar resíduos recicláveis, feito em Construct 2.",
          date: "2017",
        },
      ],
    },
  },
  en: {
    translation: {
      welcome: "Welcome to my",
      portfolio: "Portfolio",
      home_intro: "Hello, I am {{name}},",
      nav_home: "Home",
      nav_about: "About",
      nav_career: "Career",
      nav_projects: "Projects",
      nav_contact: "Contact",
      show_more: "Show more",
      show_less: "Show less",
      about_title: "About me",
      career_title: "My Career",
      projects_title: "Projects",
      contact_title: "Contact",
      download_cv: "Download CV",
      name: "Name",
      your_name: "Your name",
      your_email: "Your email",
      message: "Message",
      your_message: "Your message",
      send_message: "Send message",
      dev_role: "Front-End Developer",
      level_senior: "Mid/Senior",
      chat_presentation:
        "Hi! I'm Marcelo Bueno. You can ask me anything about myself — I'm here to tell you everything!",
      about_text:
        "I'm a developer driven by curiosity, creativity, and the desire to turn ideas into real experiences. From an early age, I pursued learning on my own, getting involved in social projects, studying independently, and always looking for ways to reinvent myself. I value collaborative environments where I can learn, contribute, and grow with purpose. I'm practical, committed, and enjoy solving problems with clarity. I adapt easily to new challenges and believe that technology only makes sense when it connects people and creates a positive impact.",
      contact_heading: "Get in touch",
      contact_intro:
        "Send me an email, message or reach me on social networks.",
      captcha_required: "Please confirm you are not a robot.",
      msg_success: "✅ Message sent successfully!",
      msg_error: "❌ An error occurred. Try again.",
      rights_reserved: "All rights reserved.",
      site_label: "Site",
      github_label: "GitHub",
      alt_photo: "My photo",
      career_experiences: [
        {
          title: "Development Analyst",
          company: "Marketdata · Mar 2021 - Present",
          description: [
            "✓ Front-end interfaces built with React and Ant Design;",
            "✓ Layout creation aligned with business requirements;",
            "✓ Client communication to gather requirements and refine features;",
            "✓ Back-end integration with APIs and databases;",
            "✓ Code versioning and merge reviews using GitLab;",
            "✓ Task planning with Jira following Scrum;",
            "✓ Workflow diagrams and prototypes in Miro;",
            "✓ Active participation in meetings focused on continuous delivery.",
          ],
        },
        {
          title: "Front-End Developer",
          company: "Telefônica Educação Digital · Dec 2019 - Mar 2021",
          description: [
            "✓ Development of educational games for the web.",
            "✓ Landing page creation with HTML5, CSS3 and JavaScript.",
            "✓ Training of new team members.",
            "✓ Brainstorm sessions and strategic alignment for online resources.",
            "✓ Packaging SCORM 1.2 files.",
          ],
        },
        {
          title: "Front-End Developer",
          company: "MJV Technology & Innovation · Oct 2018 - Nov 2019",
          description: [
            "✓ Assigned to Bradesco Seguros.",
            "✓ Developed landing pages using HTML, Nunjucks, Gulp, CSS, SASS, Bootstrap, JavaScript (ES6), jQuery, with dependency management via NPM/Yarn and Git/Gitlab.",
            "✓ Provided CSS, HTML, JavaScript and design support for Sharepoint 2013.",
            "✓ Image editing with Adobe Photoshop and Gimp.",
            "✓ Ensured cross-browser compatibility and fallback solutions for Internet Explorer.",
          ],
        },
        {
          title: "Technical Support",
          company: "Cappta · Jun 2018 - Oct 2018",
          description: [
            "✓ Error analysis and doubts clarification;",
            "✓ Execution of technical procedures via remote access;",
            "✓ Monitoring of support tickets;",
            "✓ Contribution to backlog handling.",
          ],
        },
        {
          title: "Technical Support Intern",
          company: "CEAGESP · Sep 2017 - May 2018",
          description: [
            "✓ User support with technical solutions.",
            "✓ Installation, configuration and maintenance of hardware and software.",
            "✓ Troubleshooting connectivity issues.",
            "✓ Collaboration with technicians and analysts on IT infrastructure tasks.",
          ],
        },
        {
          title: "Backoffice",
          company: "CSU CardSystem · Mar 2015 - Feb 2017",
          description: [
            "Provided high-quality customer service, handling important issues and offering support for the Natura website.",
          ],
        },
      ],
      projects_list: [
        {
          title: "Coffe Delivery",
          description:
            "Fictional e-commerce app selling special coffees with cart and delivery form.",
          date: "Jan 2023",
        },
        {
          title: "FeedHub",
          description:
            "Fictional social network used to practice components, props, state and CSS Modules.",
          date: "Jan 2023",
        },
        {
          title: "ToDo List",
          description: "Task list to add, complete and remove activities.",
          date: "Jan 2023",
        },
        {
          title: "Secret Number Game",
          description: "Simple game to guess a secret number.",
          date: "Jan 2022",
        },
        {
          title: "Pokédex",
          description:
            "Application using the PokéAPI and RxJS to display Pokémon data.",
          date: "Jan 2021",
        },
        {
          title: "Police and Thief (Android)",
          description:
            "Retro game inspired by Keystone Kapers, built in Unity with C#.",
          date: "Feb 2019 - Jul 2019",
        },
        {
          title: "Base Apparel",
          description:
            "Coming soon landing page with form validation and responsive layout.",
          date: "Jan 2019",
        },
        {
          title: "Caminar",
          description: "Minimalist landing page ideal for creative projects.",
          date: "Jan 2019",
        },
        {
          title: "Caravan",
          description:
            "Tourism agency page with modern layout and modular sections.",
          date: "Jan 2019",
        },
        {
          title: "Construtiva",
          description:
            "Landing page for civil construction with a professional presentation.",
          date: "Jan 2019",
        },
        {
          title: "Biometric System (Arduino)",
          description:
            "Academic project using biometric access for pesticide control.",
          date: "Jul 2018 - Nov 2018",
        },
        {
          title: "Communication App (Android)",
          description:
            "App to measure pollution and provide communication between workers.",
          date: "Feb 2018 - Jun 2018",
        },
        {
          title: "Sabil",
          description:
            "Modern responsive landing page for startups and digital products.",
          date: "Jan 2018",
        },
        {
          title: "Sorting Methods",
          description:
            "Academic software to compare sorting algorithm performance.",
          date: "Aug 2017 - Nov 2017",
        },
        {
          title: "Sustainability Game",
          description:
            "Educational game made in Construct 2 to separate recyclable waste.",
          date: "2017",
        },
      ],
    },
  },
  es: {
    translation: {
      welcome: "Bienvenido a mi",
      portfolio: "Portafolio",
      home_intro: "Hola, soy {{name}},",
      nav_home: "Inicio",
      nav_about: "Sobre",
      nav_career: "Carrera",
      nav_projects: "Proyectos",
      nav_contact: "Contacto",
      show_more: "Ver más",
      show_less: "Ver menos",
      about_title: "Sobre mí",
      career_title: "Mi Carrera",
      projects_title: "Proyectos",
      contact_title: "Contacto",
      download_cv: "Descargar CV",
      name: "Nombre",
      your_name: "Tu nombre",
      your_email: "Tu correo",
      message: "Mensaje",
      your_message: "Tu mensaje",
      send_message: "Enviar mensaje",
      dev_role: "Desarrollador Front-End",
      level_senior: "Pleno / Senior",
      chat_presentation:
        "¡Hola! Soy Marcelo Bueno. ¡Puedes preguntarme lo que quieras sobre mí, estoy aquí para contártelo todo!",
      about_text:
        "Soy un desarrollador impulsado por la curiosidad, la creatividad y las ganas de transformar ideas en experiencias reales. Desde temprana edad busqué aprender por mi cuenta, participando en proyectos sociales, estudiando de forma independiente y siempre buscando reinventarme. Valoro los entornos colaborativos, donde puedo aprender, contribuir y crecer con propósito. Soy práctico, comprometido, y me gusta resolver problemas con claridad. Me adapto fácilmente a nuevos desafíos y creo que la tecnología solo tiene sentido cuando conecta a las personas y genera un impacto positivo.",
      contact_heading: "Ponte en contacto",
      contact_intro:
        "Envíame un correo, mensaje o háblame en las redes sociales.",
      captcha_required: "Por favor, confirma que no eres un robot.",
      msg_success: "✅ ¡Mensaje enviado con éxito!",
      msg_error: "❌ Ocurrió un error. Inténtalo de nuevo.",
      rights_reserved: "Todos los derechos reservados.",
      site_label: "Sitio",
      github_label: "GitHub",
      alt_photo: "Mi foto",
      career_experiences: [
        {
          title: "Analista de Desarrollo",
          company: "Marketdata · Mar 2021 - Actual",
          description: [
            "✓ Desarrollo de interfaces en React con Ant Design;",
            "✓ Creación de layouts alineados con las necesidades del negocio;",
            "✓ Comunicación con el cliente para requisitos y ajustes;",
            "✓ Integración con API y bases de datos;",
            "✓ Versionado de código y revisiones en GitLab;",
            "✓ Planificación de tareas en Jira usando Scrum;",
            "✓ Diagramas y prototipos en Miro;",
            "✓ Participación en reuniones enfocadas en entregas continuas.",
          ],
        },
        {
          title: "Desarrollador Front-End",
          company: "Telefônica Educación Digital · Dic 2019 - Mar 2021",
          description: [
            "✓ Desarrollo de juegos educativos para la web.",
            "✓ Creación de landing pages con HTML5, CSS3 y JavaScript.",
            "✓ Capacitación de nuevos integrantes del equipo.",
            "✓ Sesiones de brainstorming y alineación estratégica.",
            "✓ Empaquetado de archivos SCORM 1.2.",
          ],
        },
        {
          title: "Desarrollador Front-End",
          company: "MJV Technology & Innovation · Oct 2018 - Nov 2019",
          description: [
            "✓ Asignado a Bradesco Seguros.",
            "✓ Desarrollo de landing pages con HTML, Nunjucks, Gulp, CSS, SASS, Bootstrap, JavaScript (ES6) y jQuery, gestionando dependencias con NPM/Yarn y control de versiones con Git/Gitlab.",
            "✓ Soporte en CSS, HTML, JavaScript y diseño para Sharepoint 2013.",
            "✓ Edición de imágenes con Adobe Photoshop y Gimp.",
            "✓ Compatibilidad entre navegadores y soluciones de fallback para Internet Explorer.",
          ],
        },
        {
          title: "Soporte Técnico",
          company: "Cappta · Jun 2018 - Oct 2018",
          description: [
            "✓ Análisis de errores y aclaración de dudas;",
            "✓ Ejecución de procedimientos vía acceso remoto;",
            "✓ Seguimiento de tickets de soporte;",
            "✓ Contribución en el tratamiento del backlog.",
          ],
        },
        {
          title: "Practicante de Soporte Técnico",
          company: "CEAGESP · Sep 2017 - May 2018",
          description: [
            "✓ Soporte al usuario con soluciones técnicas.",
            "✓ Instalación, configuración y mantenimiento de hardware y software.",
            "✓ Resolución de problemas de conectividad.",
            "✓ Colaboración con técnicos y analistas en tareas de infraestructura de TI.",
          ],
        },
        {
          title: "Backoffice",
          company: "CSU CardSystem · Mar 2015 - Feb 2017",
          description: [
            "Responsable de brindar atención de alta calidad, resolviendo problemas importantes y dando soporte al sitio Natura.",
          ],
        },
      ],
      projects_list: [
        {
          title: "Coffe Delivery",
          description:
            "Aplicación ficticia de e-commerce para vender cafés especiales con carrito y formulario de entrega.",
          date: "ene de 2023",
        },
        {
          title: "FeedHub",
          description:
            "Red social ficticia para practicar componentes, props, estado y CSS Modules.",
          date: "ene de 2023",
        },
        {
          title: "ToDo List",
          description:
            "Lista de tareas para agregar, concluir y eliminar actividades.",
          date: "ene de 2023",
        },
        {
          title: "Juego del Número Secreto",
          description: "Juego simple para adivinar un número secreto.",
          date: "ene de 2022",
        },
        {
          title: "Pokédex",
          description:
            "Aplicación con PokéAPI y RxJS para mostrar datos de Pokémon.",
          date: "ene de 2021",
        },
        {
          title: "Police and Thief (Android)",
          description:
            "Juego retro basado en Keystone Kapers. Desarrollado en Unity con C#.",
          date: "feb de 2019 - jul de 2019",
        },
        {
          title: "Base Apparel",
          description:
            "Landing page 'coming soon' con validación de formulario y diseño responsivo.",
          date: "ene de 2019",
        },
        {
          title: "Caminar",
          description:
            "Landing page minimalista ideal para proyectos creativos.",
          date: "ene de 2019",
        },
        {
          title: "Caravan",
          description:
            "Página para agencias de turismo con diseño moderno y secciones modulares.",
          date: "ene de 2019",
        },
        {
          title: "Construtiva",
          description:
            "Landing page para construcción civil con presentación profesional.",
          date: "ene de 2019",
        },
        {
          title: "Sistema biométrico (Arduino)",
          description:
            "Proyecto académico de seguridad con acceso biométrico y control de agroquímicos.",
          date: "jul de 2018 - nov de 2018",
        },
        {
          title: "App de Comunicación (Android)",
          description:
            "Aplicación para medir la polución y comunicar trabajadores.",
          date: "feb de 2018 - jun de 2018",
        },
        {
          title: "Sabil",
          description:
            "Landing page moderna y responsiva para startups y productos digitales.",
          date: "ene de 2018",
        },
        {
          title: "Métodos de Ordenación",
          description:
            "Software académico para comparar el rendimiento de algoritmos de ordenación.",
          date: "ago de 2017 - nov de 2017",
        },
        {
          title: "Juego sobre Sustentabilidad",
          description:
            "Juego educativo en Construct 2 para separar residuos reciclables.",
          date: "2017",
        },
      ],
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pt",
  fallbackLng: "pt",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
