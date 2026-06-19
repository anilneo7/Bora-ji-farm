import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslations from './locales/en.json';
import hiTranslations from './locales/hi.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      EN: {
        translation: enTranslations
      },
      HI: {
        translation: hiTranslations
      }
    },
    lng: 'EN', // Default language
    fallbackLng: 'EN',
    interpolation: {
      escapeValue: false // React already escapes by default
    }
  });

export default i18n;
