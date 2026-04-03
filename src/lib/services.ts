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

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}

export function getNextServiceSlug(slug: string): string {
  const index = services.findIndex((s) => s.slug === slug);
  return services[(index + 1) % services.length].slug;
}
