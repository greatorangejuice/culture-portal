import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";
import en from "../src/locales/en";
import ru from "../src/locales/ru";
import by from "../src/locales/by";

const resources = {
  en,
  ru,
  by
};

i18n
  .use(reactI18nextModule)
  .init({
    resources,
    lng:  "ru",

    keySeparator: false,

    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;