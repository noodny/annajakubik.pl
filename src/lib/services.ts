export interface BeforeAfter {
  before: string;
  after: string;
}

export interface ServiceMeta {
  slug: string;
  icon: string;
  beforeAfter?: BeforeAfter;
  sectionCount: number;
}

export const services: ServiceMeta[] = [
  { slug: "zapalenie-dziasel", icon: "01", sectionCount: 3 },
  { slug: "zapalenie-przyzebia", icon: "02", sectionCount: 4 },
  {
    slug: "recesje-dziasel",
    icon: "07",
    beforeAfter: {
      before: "/photos/recesje-przed.jpg",
      after: "/photos/recesje-po.jpg",
    },
    sectionCount: 3,
  },
  { slug: "augmentacja-dziasel", icon: "04", sectionCount: 3 },
  {
    slug: "wydluzenie-koron-klinicznych",
    icon: "08",
    beforeAfter: {
      before: "/photos/korony-przed.jpg",
      after: "/photos/korony-po.jpg",
    },
    sectionCount: 3,
  },
  { slug: "tkanki-wokol-implantow", icon: "06", sectionCount: 3 },
  { slug: "wedzidelka-warg-i-jezyka", icon: "05", sectionCount: 3 },
  { slug: "choroby-blony-sluzowej", icon: "03", sectionCount: 3 },
];

export function getServiceMeta(slug: string): ServiceMeta | undefined {
  return services.find((s) => s.slug === slug);
}

const slugTranslations: Record<string, Record<string, string>> = {
  "zapalenie-dziasel": { en: "gingivitis", es: "gingivitis" },
  "zapalenie-przyzebia": { en: "periodontitis", es: "periodontitis" },
  "recesje-dziasel": { en: "gum-recession", es: "recesion-gingival" },
  "augmentacja-dziasel": { en: "gum-augmentation", es: "aumento-gingival" },
  "wydluzenie-koron-klinicznych": {
    en: "clinical-crown-lengthening",
    es: "alargamiento-de-corona-clinica",
  },
  "tkanki-wokol-implantow": {
    en: "peri-implant-tissues",
    es: "tejidos-periimplantarios",
  },
  "wedzidelka-warg-i-jezyka": {
    en: "lip-and-tongue-frenula",
    es: "frenillos-labiales-y-linguales",
  },
  "choroby-blony-sluzowej": {
    en: "oral-mucosal-diseases",
    es: "enfermedades-de-la-mucosa-oral",
  },
};

export function getLocalizedSlug(internalSlug: string, locale: string): string {
  if (locale === "pl") return internalSlug;
  return slugTranslations[internalSlug]?.[locale] ?? internalSlug;
}

export function getInternalSlug(
  localizedSlug: string,
  locale: string,
): string | undefined {
  if (locale === "pl") {
    return services.find((s) => s.slug === localizedSlug)?.slug;
  }
  for (const [internal, translations] of Object.entries(slugTranslations)) {
    if (translations[locale] === localizedSlug) return internal;
  }
  return undefined;
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}

export function getNextServiceSlug(slug: string): string {
  const index = services.findIndex((s) => s.slug === slug);
  return services[(index + 1) % services.length].slug;
}
