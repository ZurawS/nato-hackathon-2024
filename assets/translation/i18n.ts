import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./resources/en";
import fr from "./resources/fr";
import pl from "./resources/pl";
import es from "./resources/es";
import hu from "./resources/hu";
import ro from "./resources/ro";
import sv from "./resources/sv";
import us from "./resources/us";
import it from "./resources/it";
import cr from "./resources/cr";
import tr from "./resources/tr";
import lt from "./resources/lt";
import nl from "./resources/nl";
import bg from "./resources/bg";
import no from "./resources/no";
import cz from "./resources/cz";
import et from "./resources/et";
import hv from "./resources/hv";
import pt from "./resources/pt";
import bl from "./resources/bl";
import is from "./resources/is";
import lv from "./resources/lv";

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  lng: "en",
  fallbackLng: "en",
  resources: {
    en: {
      translation: en,
    },
    fr: {
      translation: fr,
    },
    es: {
      translation: es,
    },
    hu: {
      translation: hu,
    },
    it: {
      translation: it,
    },
    pl: {
      translation: pl,
    },
    ro: {
      translation: ro,
    },
    sv: {
      translation: sv,
    },
    us: {
      translation: us,
    },
    cr: {
      translation: cr,
    },
    tr: {
      translation: tr,
    },
    lt: {
      translation: lt,
    },
    nl: {
      translation: nl,
    },
    bg: {
      translation: bg,
    },
    no: {
      translation: no,
    },
    cz: {
      translation: cz,
    },
    et: {
      translation: et,
    },
    hv: {
      translation: hv,
    },
    pt: {
      translation: pt,
    },
    bl: {
      translation: bl,
    },
    is: {
      translation: is,
    },
    lv: {
      translation: lv,
    },
  },
});
export default i18n;
