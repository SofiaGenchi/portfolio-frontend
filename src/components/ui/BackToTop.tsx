"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Volver arriba"
      className={`group fixed bottom-6 right-6 z-40 w-14 h-14 flex items-center justify-center bg-background border border-primary text-primary hover:bg-primary transition-all duration-300 shadow-lg hover:shadow-xl ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-2 pointer-events-none"
      }`}
    >
      <span
        className="absolute -top-1.5 -left-1.5 w-full h-full border border-accent transition-transform duration-300 ease-out group-hover:translate-x-1.5 group-hover:translate-y-1.5"
        aria-hidden="true"
      />
      <ArrowUp
        size={20}
        className="transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:text-accent"
      />
    </button>
  );
}