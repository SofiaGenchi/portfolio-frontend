"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/site-config";
import { Send, Loader2 } from "lucide-react";
import { submitContact } from "@/app/actions/contact";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    
    const formData = new FormData(e.currentTarget);
    const result = await submitContact(formData);
    
    if (result.success) {
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <section id="contacto" className="py-24 bg-card">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center mb-16 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-display font-medium mb-6">¿Hablamos?</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-muted-foreground italic max-w-2xl leading-relaxed">
              Si querés colaborar, consultar sobre un proyecto o propuesta de trabajo, me encantará recibir tu mensaje.
              Soy desarrolladora web enfocada en frontend y disponible para nuevos desafíos.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-start max-w-4xl mx-auto">
          <Reveal delay={0.2}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-display font-medium mb-2">Contacto Directo</h3>
                <p className="text-muted-foreground mb-6">
                  Puedes enviarme un correo electrónico o un WhatsApp directamente si lo prefieres.
                </p>
              </div>
              
              <div className="space-y-4">
                <a 
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-4 p-4 border border-border hover:border-primary transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/5 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="text-xl">@</span>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-widest mb-1">Email</p>
                    <p className="font-medium">{siteConfig.contact.email}</p>
                  </div>
                </a>
                
                <a 
                  href={siteConfig.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-border hover:border-primary transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/5 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="text-xl">W</span>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-widest mb-1">WhatsApp</p>
                    <p className="font-medium">Enviar mensaje</p>
                  </div>
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-background border border-border p-4 focus:outline-none focus:border-primary transition-colors"
                  placeholder="Tu nombre completo"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-background border border-border p-4 focus:outline-none focus:border-primary transition-colors"
                  placeholder="tu@email.com"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-background border border-border p-4 focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>

              {status === "success" && (
                <div className="p-4 bg-green-50 text-green-800 border border-green-200">
                  ¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.
                </div>
              )}

              {status === "error" && (
                <div className="p-4 bg-red-50 text-red-800 border border-red-200">
                  Hubo un error al enviar el mensaje. Por favor intenta de nuevo o usa mis redes.
                </div>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full inline-flex justify-center items-center gap-2 px-8 py-4 bg-primary text-white hover:bg-accent transition-all duration-300 font-medium uppercase tracking-wider text-sm disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar Mensaje
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
