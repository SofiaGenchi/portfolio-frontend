export interface Service {
  numero: string;
  titulo: string;
  descripcion: string;
  stack: string[];
}

export const services: Service[] = [
  {
    numero: "01",
    titulo: "Sitios Web",
    descripcion:
      "Páginas web para marcas y negocios que presentan tu oferta con claridad, velocidad y estética. Ideal para pymes y profesionales.",
    stack: ["React", "Next.js"],
  },
  {
    numero: "02",
    titulo: "Tiendas Online",
    descripcion:
      "E-commerce con catálogo, carrito y gestión de productos pensado para que tus clientes compren sin fricciones y vos administres sin complicarte.",
    stack: ["React", "Firebase"],
  },
  {
    numero: "03",
    titulo: "Aplicaciones Web",
    descripcion:
      "Herramientas y utilidades a medida: generadores, dashboards, gestores de contenido y todo lo que necesite tu equipo.",
    stack: ["React", "JavaScript"],
  },
  {
    numero: "04",
    titulo: "Rediseño & Mejora",
    descripcion:
      "Modernizo sitios existentes: estética actualizada, mejor performance y accesibilidad sin perder lo que ya funciona.",
    stack: ["HTML", "CSS", "Sass"],
  },
  {
    numero: "05",
    titulo: "Mantenimiento",
    descripcion:
      "Actualización de contenido, corrección de errores y mejoras continuas para que tu web se mantenga al día y segura.",
    stack: ["Next.js", "Git"],
  },
];
