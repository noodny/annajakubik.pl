import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["pl", "en", "es"],
  defaultLocale: "pl",
  localePrefix: "as-needed",
  pathnames: {
    "/": "/",
    "/leczenie/[slug]": {
      pl: "/leczenie/[slug]",
      en: "/treatments/[slug]",
      es: "/tratamientos/[slug]",
    },
  },
});
