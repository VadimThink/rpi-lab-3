import { useTranslation } from 'react-i18next';

function useLanguage() {
    const { i18n, t } = useTranslation();

    function getLang() {
        const lang = localStorage.getItem('lang') || 'ru';
        return lang;
    }

    function setLang(lang) {
        localStorage.setItem('lang', lang);
        i18n.changeLanguage(lang);
    }

    return { getLang, setLang, t };
}

export default useLanguage;
