import { Reveal } from "@/components/ui/reveal";
import { ExternalLink } from "lucide-react";

const Github = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.4 5.4 0 0 0-1.5-3.8 5.4 5.4 0 0 0-.1-3.7s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0c-2.7-1.8-3.9-1.4-3.9-1.4a5.4 5.4 0 0 0-.1 3.7 5.4 5.4 0 0 0-1.5 3.8c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
  </svg>
);
import Image from "next/image";

const proyectos = [
  {
    titulo: "Estudio Inmobiliario",
    descripcion: "Aplicación web hecha con React, pensada para un estudio inmobiliario que ayuda a sus clientes con la compra, venta y alquiler de propiedades.",
    imagen: "/img/web-inmobiliaria.png",
    github: "https://github.com/SofiaGenchi/mc-estudio-inmobiliario",
    web: "https://www.mariainesestudioinmobiliario.com.ar/",
  },
  {
    titulo: "Magnifico de la Limpieza",
    descripcion: "Página web creada con HTML, CSS y Bootstrap, diseñada para una empresa argentina especializada en limpieza profesional a domicilio.",
    imagen: "/img/web-limpieza.png",
    github: "#",
    web: "https://magnificodelalimpieza.com.ar",
  },
  {
    titulo: "Adidas - Proyecto Final",
    descripcion: "Tienda online creada con ReactJS, inspirada en la página oficial de Adidas. Proyecto final del curso de ReactJS de CoderHouse.",
    imagen: "/img/web-adidas.png",
    github: "https://github.com/SofiaGenchi/adidas",
    web: "https://adidas-zeta.vercel.app/category/camisetas",
  },
  {
    titulo: "QRCode",
    descripcion: "Aplicación web que permite generar códigos QR personalizados de manera rápida y fácil.",
    imagen: "/img/web-qrcode.png",
    github: "https://github.com/SofiaGenchi/QRcode",
    web: "https://sofiagenchi.github.io/QRcode/",
  },
  {
    titulo: "Gradient Color Generator",
    descripcion: "Herramienta web que permite generar degradados de colores personalizados y copiar el código generado.",
    imagen: "/img/web-color.png",
    github: "https://github.com/SofiaGenchi/Gradient-Color-Generator",
    web: "https://gradient-color-generator-seven.vercel.app/",
  },
  {
    titulo: "AI Image Generator",
    descripcion: "Aplicación web que permite generar imágenes a partir de descripciones de texto, utilizando la API de ChatGPT.",
    imagen: "/img/web-imagenes.png",
    github: "https://github.com/SofiaGenchi/AI-Image-Generation",
    web: "https://ai-image-generation-rho.vercel.app/",
  },
  {
    titulo: "Tip Calculator",
    descripcion: "Aplicación web que permite calcular propinas de manera rápida y práctica, ideal para dividir cuentas.",
    imagen: "/img/web-propinas.png",
    github: "https://github.com/SofiaGenchi/tip-calculator",
    web: "https://sofiagenchi.github.io/tip-calculator/",
  },
  {
    titulo: "BioVida",
    descripcion: "Página web desarrollada con HTML y SASS para que una dietética pueda mostrar los servicios que ofrece.",
    imagen: "/img/web-biovida.png",
    github: "https://github.com/SofiaGenchi/BioVida-Genchi",
    web: "https://sofiagenchi.github.io/BioVida-Genchi",
  }
];

export function Projects() {
  return (
    <section id="proyectos" className="py-24">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center mb-16">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-display font-medium text-center mb-6">Mis Proyectos.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-muted-foreground italic max-w-2xl text-center">
              Aca podras recorrer los diferentes proyectos en los que he trabajado, consultar su repositorio y visitar cada uno.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proyectos.map((proyecto, index) => (
            <Reveal key={proyecto.titulo} delay={0.1 * (index % 3)}>
              <div className="group bg-card border border-border overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:border-primary/30">
                <div className="relative h-60 w-full overflow-hidden bg-muted">
                  <Image 
                    src={proyecto.imagen} 
                    alt={proyecto.titulo} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-2xl font-display font-medium mb-3 group-hover:text-accent transition-colors">
                    {proyecto.titulo}
                  </h3>
                  <p className="text-muted-foreground text-sm flex-1 leading-relaxed mb-6">
                    {proyecto.descripcion}
                  </p>
                  
                  <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                    {proyecto.github !== "#" && (
                      <a 
                        href={proyecto.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm uppercase tracking-wider font-medium text-foreground hover:text-accent transition-colors"
                      >
                        <Github size={16} />
                        Repo
                      </a>
                    )}
                    <a 
                      href={proyecto.web}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm uppercase tracking-wider font-medium text-foreground hover:text-accent transition-colors"
                    >
                      <ExternalLink size={16} />
                      Visitar
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
