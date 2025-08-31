// src/@types/i18next.d.ts
import "i18next";
import enCommon from "../locals/en/common.json";

declare module "i18next" {
    interface CustomTypeOptions {
        resources: {
            common: typeof enCommon;
        };
        defaultNS: "common";
    }
}
