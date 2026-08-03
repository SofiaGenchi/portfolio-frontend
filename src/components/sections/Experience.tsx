import { Reveal } from "@/components/ui/reveal";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="trayectoria" className="py-24">
      <div className="container mx-auto max-w-5xl px-6">
        <Reveal>
          <h2 className="text-4xl md:text-6xl font-display font-medium mb-4">Mi trayectoria.</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-lg text-muted-foreground italic max-w-2xl mb-16 leading-relaxed">
            Un recorrido de formación constante y proyectos reales con clientes.
          </p>
        </Reveal>

        <div className="border-l-2 border-border pl-8 md:pl-12 space-y-14">
          {experience.map((item, index) => (
            <Reveal key={item.rol} delay={0.1 * index}>
              <div className="relative">
                <span
                  className="absolute -left-[40px] md:-left-[56px] top-2 w-4 h-4 bg-accent border-2 border-background"
                  aria-hidden="true"
                />
                <p className="text-sm text-accent uppercase tracking-widest font-medium mb-2">
                  {item.periodo}
                </p>
                <h3 className="text-2xl md:text-3xl font-display font-medium">
                  {item.rol}
                </h3>
                <p className="text-muted-foreground italic mb-3">
                  {item.lugar}
                </p>
                <p className="text-muted-foreground max-w-3xl leading-relaxed">
                  {item.descripcion}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
