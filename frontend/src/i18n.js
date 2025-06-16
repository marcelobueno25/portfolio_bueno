import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import pt from "./locales/pt.json";
import es from "./locales/es.json";

const resources = {
  en: { translation: en },
  pt: { translation: pt },
  es: { translation: es },
};

const loadLanguage = () => {
  try {
    const saved = localStorage.getItem("settings");
    if (saved) {
      const { language } = JSON.parse(saved);
      if (language) return language;
    }
  } catch {}
  return typeof navigator !== "undefined"
    ? navigator.language.slice(0, 2)
    : "pt";
};

i18n.use(initReactI18next).init({
  resources,
  lng: loadLanguage(),
  fallbackLng: "pt",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
