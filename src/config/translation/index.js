import i18n from 'i18next';
import { initReactI18next } from 'react-i18next'; 
import en from './en';
import pt from './pt';
import it from './it';

const resources = {
  en: {
    translation: en
  },
  pt: {
    translation: pt
  },
  it: {
    translation: it
  }
};

i18n
  // connect with React
  .use(initReactI18next)
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    debug: true,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });
 
export default i18n;