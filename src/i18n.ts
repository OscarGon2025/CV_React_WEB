// src/i18n.ts
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enCommon from "./locals/en/common.json";
import frCommon from "./locals/fr/common.json";

const resources = {
    en: { common: enCommon },
    fr: { common: frCommon }
} as const;

i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        fallbackLng: "en",
        supportedLngs: ["en", "fr"],
        ns: ["common"],
        defaultNS: "common",
        interpolation: { escapeValue: false },
        detection: {
            order: ["localStorage", "navigator", "htmlTag", "path", "subdomain"],
            caches: ["localStorage"]
        }
    });

export default i18next;
