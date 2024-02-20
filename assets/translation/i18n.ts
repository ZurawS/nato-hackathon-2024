import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./resources/en";

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  lng: "en",
  fallbackLng: "en",
  resources: {
    en: {
      translation: en,
    },
  },
});
export default i18n;
