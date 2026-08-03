import { Reveal } from "@/components/ui/reveal";
import { Download } from "lucide-react";
import Image from "next/image";
import { skills } from "@/data/skills";

export function About() {
  return (
    <section id="acerca" className="py-24 bg-card text-card-foreground">
      <div className="container mx-auto max-w-5xl px-6">
        <Reveal>
          <h2 className="text-4xl md:text-6xl font-display font-medium mb-12">Acerca de mi.</h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <Reveal delay={0.1}>
            <div className="space-y-6 text-lg text-muted-foreground italic font-light leading-relaxed text-pretty">
              <p>
                Soy Técnica en Desarrollo de Software recientemente graduada, con un enfoque principal en el ecosistema Frontend, especialmente con ReactJS. Me apasiona estar en constante aprendizaje para seguir mejorando como profesional y adoptar nuevas tecnologías.
              </p>
              <p>
                He realizado proyectos como freelancer para empresas del sector inmobiliario y de servicios, desarrollando interfaces modernas, accesibles y orientadas al usuario final.
              </p>
              <p>
                Tengo un sólido manejo de herramientas como HTML, CSS, JavaScript, SASS, ReactJS, Next.js, y conocimientos de backend como Firebase y MySQL. Me desenvuelvo muy bien en entornos colaborativos y estoy disponible para sumarme a nuevos equipos.
              </p>

              <div className="pt-8">
                <a
                  href="/CV_SofiaGenchi.pdf"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-primary transition-colors text-primary uppercase text-sm font-medium tracking-wider"
                >
                  <Download size={18} />
                  Descargar CV
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="bg-background p-8 md:p-12 shadow-sm border border-border">
              <h3 className="text-2xl font-display mb-8">Mis Skills</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center gap-3 p-4 group">
                    <div className="w-16 h-16 flex items-center justify-center grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                      <Image src={skill.icon} alt={skill.name} width={48} height={48} className="w-12 h-12 object-contain" />
                    </div>
                    <span className="text-sm text-muted-foreground uppercase tracking-wider">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
