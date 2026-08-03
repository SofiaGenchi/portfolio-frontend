export interface Proyecto {
  slug: string;
  titulo: string;
  descripcion: string;
  imagen: string;
  github: string;
  web: string;
  stack: string[];
  destacado?: boolean;
  year: string;
  rol: string;
  overview: string;
  features: string[];
  aprendizajes: string[];
}

export const proyectos: Proyecto[] = [
  {
    slug: "estudio-inmobiliario",
    titulo: "Estudio Inmobiliario",
    descripcion:
      "Aplicación web pensada para un estudio inmobiliario que ayuda a sus clientes con la compra, venta y alquiler de propiedades.",
    imagen: "/img/web-inmobiliaria.png",
    github: "https://github.com/SofiaGenchi/mc-estudio-inmobiliario",
    web: "https://www.mariainesestudioinmobiliario.com.ar/",
    stack: ["React", "JavaScript", "CSS"],
    destacado: true,
    year: "2024",
    rol: "Desarrollo Frontend",
    overview:
      "Aplicación web para un estudio inmobiliario que centraliza la presentación de propiedades en venta y alquiler. Trabajé junto al cliente para entender su flujo real de trabajo y traducirlo en una interfaz clara, donde cada propiedad se muestra con su información completa y formas de contacto directas.",
    features: [
      "Presentación de propiedades con información completa y fotos",
      "Secciones de venta y alquiler claramente diferenciadas",
      "Vías de contacto directas para consultas por propiedad",
      "Diseño responsive, accesible y orientado al usuario final",
    ],
    aprendizajes: [
      "Trabajar con un cliente real: reuniones, requerimientos y entregas",
      "Estructurar una aplicación React con componentes reutilizables",
      "Poner en producción una web con dominio propio",
    ],
  },
  {
    slug: "magnifico-de-la-limpieza",
    titulo: "Magnifico de la Limpieza",
    descripcion:
      "Página web para una empresa argentina especializada en limpieza profesional a domicilio. HTML, CSS y Bootstrap.",
    imagen: "/img/web-limpieza.png",
    github: "",
    web: "https://magnificodelalimpieza.com.ar",
    stack: ["HTML", "CSS", "Bootstrap"],
    year: "2024",
    rol: "Desarrollo Web",
    overview:
      "Sitio web de presentación para una empresa de limpieza profesional a domicilio. El objetivo era transmitir confianza y permitir que los clientes soliciten un presupuesto de forma inmediata, sin fricciones.",
    features: [
      "Presentación de servicios de limpieza a domicilio",
      "Botón de presupuesto directo por WhatsApp",
      "Diseño limpio y optimizado para móviles",
      "Estructura semántica pensada para SEO local",
    ],
    aprendizajes: [
      "Maquetación profesional con Bootstrap",
      "Primer proyecto de producción para una empresa real",
      "Optimizar el sitio para conversión, no solo para estética",
    ],
  },
  {
    slug: "adidas-proyecto-final",
    titulo: "Adidas - Proyecto Final",
    descripcion:
      "Tienda online inspirada en la página oficial de Adidas. Proyecto final del curso de ReactJS de CoderHouse.",
    imagen: "/img/web-adidas.png",
    github: "https://github.com/SofiaGenchi/adidas",
    web: "https://adidas-zeta.vercel.app/category/camisetas",
    stack: ["React", "JavaScript", "Firebase"],
    year: "2024",
    rol: "Estudiante ReactJS",
    overview:
      "Tienda online completa inspirada en Adidas, desarrollada como proyecto final del curso de ReactJS en CoderHouse. Incluye catálogo por categorías, detalle de producto, carrito de compras y checkout, integrando Firebase para la persistencia de pedidos.",
    features: [
      "Catálogo de productos con filtrado por categorías",
      "Detalle de producto y agregado al carrito",
      "Checkout con generación de orden de compra",
      "Persistencia de pedidos en Firebase",
    ],
    aprendizajes: [
      "Hooks de React: estado, contexto y efectos",
      "Ruteo y navegación entre páginas",
      "Integración de servicios externos como Firebase",
    ],
  },
  {
    slug: "ai-image-generator",
    titulo: "AI Image Generator",
    descripcion:
      "Aplicación web que genera imágenes a partir de descripciones de texto, utilizando la API de ChatGPT.",
    imagen: "/img/web-imagenes.png",
    github: "https://github.com/SofiaGenchi/AI-Image-Generation",
    web: "https://ai-image-generation-rho.vercel.app/",
    stack: ["JavaScript", "API"],
    year: "2024",
    rol: "Desarrollo Frontend",
    overview:
      "Aplicación web que convierte descripciones de texto en imágenes generadas por IA, consumiendo la API de OpenAI. El usuario escribe una idea y obtiene el resultado en segundos, con historial de las imágenes generadas.",
    features: [
      "Generación de imágenes a partir de prompts de texto",
      "Interfaz simple con feedback de estado de carga",
      "Historial de imágenes generadas por sesión",
    ],
    aprendizajes: [
      "Consumir APIs externas con manejo de errores y loading states",
      "Diseñar una UX de herramienta: del input al resultado",
      "Publicar y desplegar una app en Vercel",
    ],
  },
  {
    slug: "qrcode",
    titulo: "QRCode",
    descripcion:
      "Aplicación web que permite generar códigos QR personalizados de manera rápida y fácil.",
    imagen: "/img/web-qrcode.png",
    github: "https://github.com/SofiaGenchi/QRcode",
    web: "https://sofiagenchi.github.io/QRcode/",
    stack: ["HTML", "CSS", "JavaScript"],
    year: "2023",
    rol: "Desarrollo Frontend",
    overview:
      "Herramienta web para generar códigos QR personalizados al instante: se ingresa el texto o URL y la aplicación devuelve el código listo para descargar. Una utilidad simple con un flujo directo.",
    features: [
      "Generación de QR a partir de texto o enlaces",
      "Descarga del código generado en un clic",
      "Interfaz minimalista y rápida",
    ],
    aprendizajes: [
      "Trabajar con librerías de terceros en el navegador",
      "Entregar un resultado descargable desde la web",
    ],
  },
  {
    slug: "gradient-color-generator",
    titulo: "Gradient Color Generator",
    descripcion:
      "Herramienta web para generar degradados de colores personalizados y copiar el código generado.",
    imagen: "/img/web-color.png",
    github: "https://github.com/SofiaGenchi/Gradient-Color-Generator",
    web: "https://gradient-color-generator-seven.vercel.app/",
    stack: ["JavaScript", "CSS"],
    year: "2023",
    rol: "Desarrollo Frontend",
    overview:
      "Generador de degradados de colores: elegís los colores, la orientación y la herramienta produce el código CSS listo para copiar. Pensada para desarrolladores que necesitan un degradado en segundos.",
    features: [
      "Selección de colores y ángulo del degradado",
      "Vista previa en tiempo real",
      "Copia del código CSS con un clic",
    ],
    aprendizajes: [
      "Manipulación dinámica de estilos con JavaScript",
      "Diseñar utilidades de desarrollo: simple y al grano",
    ],
  },
  {
    slug: "biovida",
    titulo: "BioVida",
    descripcion:
      "Sitio para una dietética donde muestra los servicios que ofrece. Desarrollado con HTML y SASS.",
    imagen: "/img/web-biovida.png",
    github: "https://github.com/SofiaGenchi/BioVida-Genchi",
    web: "https://sofiagenchi.github.io/BioVida-Genchi",
    stack: ["HTML", "Sass"],
    year: "2023",
    rol: "Desarrollo Web",
    overview:
      "Sitio de presentación para una dietética local. Muestra los servicios y productos del negocio con un diseño cálido, organizado y fácil de actualizar, construido con HTML y SASS.",
    features: [
      "Presentación de servicios de la dietética",
      "Secciones organizadas para productos y servicios",
      "Estilos escalables con SASS",
    ],
    aprendizajes: [
      "Organizar estilos con SASS: variables, mixins y estructura",
      "Maquetar sitios de presentación para negocios locales",
    ],
  },
  {
    slug: "tip-calculator",
    titulo: "Tip Calculator",
    descripcion:
      "Calculadora de propinas rápida y práctica, ideal para dividir cuentas.",
    imagen: "/img/web-propinas.png",
    github: "https://github.com/SofiaGenchi/tip-calculator",
    web: "https://sofiagenchi.github.io/tip-calculator/",
    stack: ["HTML", "CSS", "JavaScript"],
    year: "2023",
    rol: "Desarrollo Frontend",
    overview:
      "Calculadora de propinas que resuelve la cuenta al instante: monto, porcentaje de propina y personas para dividir. Resultado claro en el momento.",
    features: [
      "Cálculo de propina y total por persona",
      "Presets de porcentaje y monto personalizado",
      "Interfaz pensada para uso rápido en el móvil",
    ],
    aprendizajes: [
      "Lógica de cálculo y manejo de entradas del usuario",
      "Interfaces de utilidad con foco en velocidad de uso",
    ],
  },
];
