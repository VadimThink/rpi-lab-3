import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next)
    .use(Backend)
    .init({
        backend: {
            loadPath: '/locales/{{lng}}/translation.json',
        },
        lng: 'ru',
        fallbackLng: 'ru',
        interpolation: { escapeValue: false },
    });
