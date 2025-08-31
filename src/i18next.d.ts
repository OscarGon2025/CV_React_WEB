// src/i18next.d.ts
import "i18next";
import enCommon from "./locales/en/common.json";

declare module "i18next" {
    interface CustomTypeOptions {
        // 👇 Aquí defines qué recursos tiene tu app
        resources: {
            common: typeof enCommon;
        };
        // 👇 Namespace por defecto
        defaultNS: "common";
    }
}
