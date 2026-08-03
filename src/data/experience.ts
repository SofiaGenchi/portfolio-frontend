export interface ExperienceItem {
  periodo: string;
  rol: string;
  lugar: string;
  descripcion: string;
}

export const experience: ExperienceItem[] = [
  {
    periodo: "2024 — Actualidad",
    rol: "Desarrolladora Web Freelance",
    lugar: "Sector inmobiliario & servicios",
    descripcion:
      "Desarrollo de interfaces modernas, accesibles y orientadas al usuario para empresas del sector inmobiliario y de servicios, de principio a fin: diseño, desarrollo y puesta en línea.",
  },
  {
    periodo: "2024",
    rol: "Desarrollo Frontend con ReactJS",
    lugar: "CoderHouse",
    descripcion:
      "Formación intensiva en ReactJS. Proyecto final: tienda online funcional con carrito y flujo de compra, inspirada en Adidas.",
  },
  {
    periodo: "2022 — 2025",
    rol: "Técnica en Desarrollo de Software",
    lugar: "Estudios superiores",
    descripcion:
      "Formación integral en desarrollo de software con enfoque en el ecosistema Frontend: HTML, CSS, JavaScript, React y bases de backend con Firebase y MySQL.",
  },
];
