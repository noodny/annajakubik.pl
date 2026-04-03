import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["pl", "en", "es"],
  defaultLocale: "pl",
  localePrefix: "as-needed",
});
