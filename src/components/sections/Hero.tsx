"use client";

import { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { Reveal } from "@/components/ui/reveal";
import { ArrowRight, ArrowDown } from "lucide-react";

export function Hero() {
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <section id="inicio" className="min-h-screen flex items-center pt-24 pb-12 px-6">
      <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 space-y-8">
          <Reveal>
            <p className="font-medium text-accent tracking-widest uppercase">
              Frontend Developer
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Hola— soy Sofia,<br />
              <span className="text-muted-foreground font-normal">
                Desarrolladora Web.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-xl md:text-2xl text-muted-foreground italic font-light max-w-2xl leading-relaxed">
              Diseño y desarrollo interfaces limpias y accesibles. Me gusta transformar ideas en experiencias digitales simples y útiles.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#proyectos"
                className="inline-flex justify-center items-center gap-2 px-8 py-4 border-2 border-primary text-primary hover:bg-accent hover:border-accent hover:text-primary transition-all duration-300 font-medium uppercase tracking-wider text-sm"
              >
                Ver Proyectos
              </a>
              <a
                href="#contacto"
                className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-primary border-2 border-primary text-primary-foreground hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all duration-300 font-medium uppercase tracking-wider text-sm"
              >
                Contactarme
                <ArrowRight size={18} />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="relative shrink-0">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-accent" aria-hidden="true" />
            <div className="relative w-64 h-80 lg:w-80 lg:h-96 bg-card border border-border overflow-hidden">
              {!photoFailed ? (
                <Image
                  src="/img/perfil.jpg"
                  alt="Foto de perfil de Sofia Genchi"
                  fill
                  priority
                  sizes="(max-width: 768px) 256px, 320px"
                  className="object-cover"
                  onError={() => setPhotoFailed(true)}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center gap-4 bg-card">
                  <span className="font-plaster text-8xl text-primary">
                    {siteConfig.brand.short}
                  </span>
                  <span className="text-sm text-muted-foreground uppercase tracking-widest">
                    Desarrolladora Web
                  </span>
                </div>
              )}
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-primary" aria-hidden="true" />
          </div>
        </Reveal>

        <a
          href="#acerca"
          className="hidden lg:flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
          aria-label="Scroll"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown size={20} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
