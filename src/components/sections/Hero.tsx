import { siteConfig } from "@/lib/site-config";
import { Reveal } from "@/components/ui/reveal";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex items-center pt-24 pb-12 px-6">
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-8">
          <Reveal>
            <p className="font-medium text-accent tracking-widest uppercase">
              Frontend Developer
            </p>
          </Reveal>
          
          <Reveal delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hola— soy Sofia,<br />
              <span className="text-muted-foreground font-normal">
                Desarrolladora Web.
              </span>
            </h1>
          </Reveal>
          
          <Reveal delay={0.2}>
            <p className="text-xl md:text-2xl text-muted-foreground italic font-light max-w-2xl leading-relaxed">
              Diseño y desarrollo interfaces limpias y accesibles.<br />
              Me gusta transformar ideas en experiencias digitales simples y útiles.
            </p>
          </Reveal>
          
          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={siteConfig.cta.secondary.href}
                className="inline-flex justify-center items-center gap-2 px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium uppercase tracking-wider text-sm"
              >
                {siteConfig.cta.secondary.label}
              </a>
              <a
                href={siteConfig.cta.primary.href}
                className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-primary border-2 border-primary text-primary-foreground hover:bg-accent hover:border-accent transition-all duration-300 font-medium uppercase tracking-wider text-sm"
              >
                {siteConfig.cta.primary.label}
                <ArrowRight size={18} />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
