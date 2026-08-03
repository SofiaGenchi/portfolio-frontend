import { Reveal } from "@/components/ui/reveal";
import { ExternalLink, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { proyectos } from "@/data/projects";

const Github = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.4 5.4 0 0 0-1.5-3.8 5.4 5.4 0 0 0-.1-3.7s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0c-2.7-1.8-3.9-1.4-3.9-1.4a5.4 5.4 0 0 0-.1 3.7 5.4 5.4 0 0 0-1.5 3.8c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
  </svg>
);

const blurDataUrl =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4IDgnPjxyZWN0IHdpZHRoPSc4JyBoZWlnaHQ9JzgnIGZpbGw9JyUyM0YxRTZFMycvPjwvc3ZnPg==";

export function Projects() {
  const featured = proyectos.find((p) => p.destacado);
  const rest = proyectos.filter((p) => !p.destacado);

  return (
    <section id="proyectos" className="py-24 bg-card">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center mb-16">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-display font-medium text-center mb-6">Mis Proyectos.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-muted-foreground italic max-w-2xl text-center">
              Acá podrás recorrer los diferentes proyectos en los que he trabajado, consultar su repositorio y visitar cada uno.
            </p>
          </Reveal>
        </div>

        {featured && (
          <Reveal>
            <article className="group grid md:grid-cols-2 gap-10 lg:gap-16 items-center mb-20 bg-background border border-border p-6 md:p-12">
              <div className="relative h-72 md:h-[480px] w-full overflow-hidden">
                <Image
                  src={featured.imagen}
                  alt={featured.titulo}
                  fill
                  placeholder="blur"
                  blurDataURL={blurDataUrl}
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="space-y-6">
                <p className="font-medium text-accent tracking-widest uppercase text-sm">
                  Proyecto seleccionado
                </p>
                <Link href={`/proyectos/${featured.slug}`}>
                  <h3 className="text-4xl md:text-6xl font-display font-medium leading-tight group-hover:text-accent transition-colors">
                    {featured.titulo}.
                  </h3>
                </Link>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {featured.descripcion}
                </p>
                <div className="flex flex-wrap gap-2">
                  {featured.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs uppercase tracking-wider text-muted-foreground border border-border px-3 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-6 pt-2">
                  <a
                    href={featured.web}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-accent hover:border-accent hover:text-primary transition-all duration-300 font-medium uppercase tracking-wider text-sm px-6 py-3"
                  >
                    Visitar sitio
                    <ArrowRight size={18} />
                  </a>
                  {featured.github && (
                    <a
                      href={featured.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm uppercase tracking-wider font-medium text-foreground hover:text-accent transition-colors"
                    >
                      <Github size={18} />
                      Ver código
                    </a>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((proyecto, index) => (
            <Reveal key={proyecto.slug} delay={0.1 * (index % 3)}>
              <div className="group bg-background border border-border overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:border-primary/30">
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={proyecto.imagen}
                    alt={proyecto.titulo}
                    fill
                    placeholder="blur"
                    blurDataURL={blurDataUrl}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <Link href={`/proyectos/${proyecto.slug}`}>
                    <h3 className="text-2xl font-display font-medium mb-3 group-hover:text-accent transition-colors">
                      {proyecto.titulo}
                    </h3>
                  </Link>
                  <p className="text-muted-foreground text-sm flex-1 leading-relaxed mb-6">
                    {proyecto.descripcion}
                  </p>

                  <div className="flex items-center justify-between gap-4 pt-4 border-t border-border/50">
                    <div className="flex items-center gap-3">
                      {proyecto.github && (
                        <a
                          href={proyecto.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm uppercase tracking-wider font-medium text-foreground hover:text-accent transition-colors"
                          aria-label={`Repositorio de ${proyecto.titulo}`}
                        >
                          <Github size={16} />
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
                    <span className="flex flex-wrap gap-1 justify-end">
                      {proyecto.stack.slice(0, 2).map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] uppercase tracking-wider text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </span>
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
