import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, ExternalLink, ArrowRight } from "lucide-react";
import { proyectos, type Proyecto } from "@/data/projects";
import { siteConfig } from "@/lib/site-config";
import { Reveal } from "@/components/ui/reveal";

const Github = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.4 5.4 0 0 0-1.5-3.8 5.4 5.4 0 0 0-.1-3.7s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0c-2.7-1.8-3.9-1.4-3.9-1.4a5.4 5.4 0 0 0-.1 3.7 5.4 5.4 0 0 0-1.5 3.8c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
  </svg>
);

const blurDataUrl =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4IDgnPjxyZWN0IHdpZHRoPSc4JyBoZWlnaHQ9JzgnIGZpbGw9JyUyM0YxRTZFMycvPjwvc3ZnPg==";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return proyectos.map((proyecto) => ({ slug: proyecto.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const proyecto = proyectos.find((p) => p.slug === slug);
  if (!proyecto) return {};
  return {
    title: proyecto.titulo,
    description: proyecto.descripcion,
    alternates: { canonical: `/proyectos/${proyecto.slug}` },
    openGraph: {
      title: `${proyecto.titulo} | ${siteConfig.brand.name}`,
      description: proyecto.descripcion,
      url: `${siteConfig.seo.domain}/proyectos/${proyecto.slug}`,
      images: [
        {
          url: `${siteConfig.seo.domain}${proyecto.imagen}`,
          alt: proyecto.titulo,
        },
      ],
    },
  };
}

export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params;
  const proyecto = proyectos.find((p) => p.slug === slug);
  if (!proyecto) notFound();

  const otros = proyectos.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <main className="pt-32 pb-24">
      <div className="container mx-auto max-w-6xl px-6">
        <Reveal>
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-wider font-medium text-muted-foreground hover:text-accent transition-colors mb-12"
          >
            <ArrowLeft size={16} />
            Todos los proyectos
          </Link>
        </Reveal>

        <Reveal>
          <header className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-end mb-16">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-medium leading-tight">
                {proyecto.titulo}.
              </h1>
              <p className="text-xl text-muted-foreground italic font-light leading-relaxed">
                {proyecto.descripcion}
              </p>
            </div>
            <dl className="grid grid-cols-2 gap-8 md:justify-items-end">
              <div>
                <dt className="text-sm text-muted-foreground uppercase tracking-widest mb-1">Año</dt>
                <dd className="font-display text-2xl">{proyecto.year}</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground uppercase tracking-widest mb-1">Rol</dt>
                <dd className="font-display text-2xl">{proyecto.rol}</dd>
              </div>
            </dl>
          </header>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative h-72 md:h-[520px] w-full overflow-hidden border border-border mb-16">
            <Image
              src={proyecto.imagen}
              alt={proyecto.titulo}
              fill
              priority
              placeholder="blur"
              blurDataURL={blurDataUrl}
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <section className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">Sobre el proyecto.</h2>
            <p className="text-lg text-muted-foreground italic font-light leading-relaxed">
              {proyecto.overview}
            </p>
            <div className="flex flex-wrap gap-2 mt-8">
              {proyecto.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs uppercase tracking-wider text-muted-foreground border border-border px-3 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 mb-16">
          <Reveal delay={0.2}>
            <section>
              <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">Características</h2>
              <ul className="space-y-4">
                {proyecto.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 bg-accent/10 text-accent flex items-center justify-center shrink-0">
                      <Check size={14} />
                    </span>
                    <span className="text-muted-foreground leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>

          <Reveal delay={0.25}>
            <section>
              <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">Lo que aprendí.</h2>
              <ul className="space-y-4">
                {proyecto.aprendizajes.map((aprendizaje) => (
                  <li key={aprendizaje} className="flex items-start gap-3">
                    <span className="mt-1 w-5 h-5 bg-accent/10 text-accent flex items-center justify-center shrink-0">
                      <Check size={14} />
                    </span>
                    <span className="text-muted-foreground leading-relaxed">{aprendizaje}</span>
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-border pt-10 mb-20">
            <div>
              <p className="font-display text-2xl md:text-3xl font-medium mb-1">¿Te gustó este proyecto?</p>
              <p className="text-muted-foreground italic">Contame sobre el tuyo y veamos cómo puedo ayudarte.</p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              {proyecto.web && (
                <a
                  href={proyecto.web}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-accent hover:border-accent hover:text-primary transition-all duration-300 font-medium uppercase tracking-wider text-sm px-6 py-3"
                >
                  Visitar sitio
                  <ExternalLink size={16} />
                </a>
              )}
              {proyecto.github && (
                <a
                  href={proyecto.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-primary transition-colors text-primary uppercase text-sm font-medium tracking-wider"
                >
                  <Github size={16} />
                  Ver código
                </a>
              )}
              <a
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 font-medium uppercase tracking-wider text-sm px-6 py-3"
              >
                Hablemos
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-10">Otros proyectos.</h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {otros.map((otro: Proyecto, index) => (
            <Reveal key={otro.slug} delay={0.1 * index}>
              <Link
                href={`/proyectos/${otro.slug}`}
                className="group block bg-background border border-border overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:border-primary/30"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={otro.imagen}
                    alt={otro.titulo}
                    fill
                    placeholder="blur"
                    blurDataURL={blurDataUrl}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-medium group-hover:text-accent transition-colors">
                    {otro.titulo}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                    {otro.descripcion}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}
