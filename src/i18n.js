import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  pt: {
    translation: {
      welcome: 'Bem vindo, ao meu',
      portfolio: 'Portfolio',
      home_intro: 'Olá, eu sou {{name}},',
      nav_home: 'Início',
      nav_about: 'Sobre',
      nav_career: 'Carreira',
      nav_projects: 'Projetos',
      nav_contact: 'Contato',
      show_more: 'Ver mais',
      show_less: 'Ver menos',
      about_title: 'Sobre mim',
      career_title: 'Minha Carreira',
      projects_title: 'Projetos',
      contact_title: 'Contato',
      download_cv: 'Download CV',
      name: 'Nome',
      your_name: 'Seu nome',
      your_email: 'Seu e-mail',
      message: 'Mensagem',
      your_message: 'Sua mensagem',
      send_message: 'Enviar mensagem'
    }
  },
  en: {
    translation: {
      welcome: 'Welcome to my',
      portfolio: 'Portfolio',
      home_intro: 'Hello, I am {{name}},',
      nav_home: 'Home',
      nav_about: 'About',
      nav_career: 'Career',
      nav_projects: 'Projects',
      nav_contact: 'Contact',
      show_more: 'Show more',
      show_less: 'Show less',
      about_title: 'About me',
      career_title: 'My Career',
      projects_title: 'Projects',
      contact_title: 'Contact',
      download_cv: 'Download CV',
      name: 'Name',
      your_name: 'Your name',
      your_email: 'Your email',
      message: 'Message',
      your_message: 'Your message',
      send_message: 'Send message'
    }
  },
  es: {
    translation: {
      welcome: 'Bienvenido a mi',
      portfolio: 'Portafolio',
      home_intro: 'Hola, soy {{name}},',
      nav_home: 'Inicio',
      nav_about: 'Sobre',
      nav_career: 'Carrera',
      nav_projects: 'Proyectos',
      nav_contact: 'Contacto',
      show_more: 'Ver más',
      show_less: 'Ver menos',
      about_title: 'Sobre mí',
      career_title: 'Mi Carrera',
      projects_title: 'Proyectos',
      contact_title: 'Contacto',
      download_cv: 'Descargar CV',
      name: 'Nombre',
      your_name: 'Tu nombre',
      your_email: 'Tu correo',
      message: 'Mensaje',
      your_message: 'Tu mensaje',
      send_message: 'Enviar mensaje'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt',
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
