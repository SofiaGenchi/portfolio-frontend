import { Reveal } from "@/components/ui/reveal";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";

export function Services() {
  return (
    <section id="servicios" className="py-24">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col mb-16">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-display font-medium mb-6">
              Qué puedo hacer por vos.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-muted-foreground italic max-w-2xl leading-relaxed">
              Soluciones web reales, sin humo: desde una landing hasta una tienda online, con foco en resultados, diseño limpio y accesible.
            </p>
          </Reveal>
        </div>

        <div className="border-t border-border/70">
          {services.map((service, index) => (
            <Reveal key={service.numero} delay={0.05 * index}>
              <a
                href="#contacto"
                className="group grid grid-cols-1 md:grid-cols-[auto_1fr_auto] md:items-center gap-4 md:gap-10 py-8 border-b border-border/70 transition-colors hover:bg-card"
              >
                <span className="font-display text-accent text-xl italic">
                  {service.numero}
                </span>
                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl font-display font-medium group-hover:text-accent transition-colors">
                    {service.titulo}
                  </h3>
                  <p className="text-muted-foreground max-w-2xl leading-relaxed">
                    {service.descripcion}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {service.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs uppercase tracking-wider text-muted-foreground border border-border px-3 py-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="hidden md:flex items-center gap-2 text-sm uppercase tracking-wider font-medium text-primary group-hover:text-accent transition-colors">
                  Consultar
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
