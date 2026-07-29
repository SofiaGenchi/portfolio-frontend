// site-config.ts
// Ubicar en: src/lib/site-config.ts
//
// Single source of truth de la marca. Importar desde cualquier
// componente con: import { siteConfig } from "@/lib/site-config";

export const siteConfig = {
  /** Identidad */
  brand: {
    name: "Sofia Genchi",
    short: "SG",
    legal: "Sofia Genchi",
    tagline: "Desarrolladora Web",
    description: "Diseño y desarrollo interfaces limpias y accesibles.",
  },

  /** Contacto */
  contact: {
    email: "sofiagenchi.dev@gmail.com",
    phone: "",
    whatsapp: "https://wa.me/5491168680803", // +54911-68680803
  },

  /** Ubicación física (opcional, solo si tiene local) */
  location: {
    enabled: false,
    address: "",
    city: "",
    region: "",
    postalCode: "",
    country: "",
    lat: 0,
    lng: 0,
    googleMapsUrl: "",
  },

  /** Horarios (opcional, formato Schema.org openingHours) */
  hours: [] as string[],

  /** Redes sociales */
  social: {
    linkedin: "https://www.linkedin.com/in/sofiagenchi/",
    instagram: "https://www.instagram.com/soflen/",
    twitter: "",
    youtube: "",
    github: "https://github.com/SofiaGenchi",
  },

  /** SEO */
  seo: {
    domain: "https://sofiagenchi.com", // Placeholder
    ogImage: "/og-image.jpg",
    locale: "es_AR",
    twitterHandle: "@sofiagenchi", // Placeholder
    keywords: [
      "Desarrolladora Web",
      "Frontend Developer",
      "ReactJS",
      "Next.js",
      "Portfolio",
    ],
  },

  /** Acción principal */
  cta: {
    primary: { label: "Contactarme", href: "#contacto" },
    secondary: { label: "Ver Proyectos", href: "#proyectos" },
  },

  /** Diseño aplicado */
  design: {
    direction: "Editorial Serif",
    palette: "L2",
    fontPair: "F2",
  },

  /** Vertical de negocio */
  vertical: "Personal brand / Portfolio",

  /** Funcionalidades activas */
  features: {
    blog: false,
    newsletter: false,
    bookings: false,
    payments: false,
    chat: false,
    multiLocale: false,
  },
} as const;

export type SiteConfig = typeof siteConfig;
