import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from './en/en.json'
import ru from './ru/ru.json';

i18next.use(initReactI18next).init({
    lng: 'ru',
    fallbackLng: 'ru',
    compatibilityJSON: "v3",
    resources: {
        en: en,
        ru: ru
    },
    react: {
        useSuspense: false
    }
})

export default i18next;
