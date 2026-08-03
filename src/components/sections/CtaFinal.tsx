import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/site-config";
import { Mail, MessageCircle } from "lucide-react";

export function CtaFinal() {
  return (
    <section className="py-28 px-6 bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-5xl flex flex-col items-center text-center">
        <Reveal>
          <p className="font-medium text-accent tracking-widest uppercase mb-6">
            Disponible para nuevos proyectos
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-5xl md:text-7xl xl:text-8xl font-display font-medium leading-tight mb-8">
            ¿Trabajamos
            <br />
            juntos?
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-lg md:text-xl text-primary-foreground/80 italic max-w-2xl leading-relaxed mb-12">
            Contame tu idea y te respondo con una propuesta clara. Sin vueltas: hoy mismo puedo estimar tu proyecto.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="inline-flex items-center gap-3 bg-primary-foreground text-primary font-medium uppercase tracking-wider text-sm px-8 py-4 hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              <Mail size={18} />
              {siteConfig.contact.email}
            </a>
            <a
              href={siteConfig.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border-2 border-primary-foreground/60 text-primary-foreground font-medium uppercase tracking-wider text-sm px-8 py-4 hover:bg-accent hover:border-accent hover:text-primary transition-all duration-300"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
