import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
        <p className="font-display text-accent italic text-2xl mb-4">Error 404</p>
        <h1 className="text-5xl md:text-7xl font-display font-medium mb-6">
          Esta página no existe.
        </h1>
        <p className="text-lg text-muted-foreground italic max-w-xl mb-10">
          Algo salió mal: quizás el enlace cambió o la página se mudó. Volvamos a terreno conocido.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 font-medium uppercase tracking-wider text-sm"
        >
          Volver al inicio
        </Link>
      </main>
      <Footer />
    </>
  );
}
