"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out border-b ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border py-4 shadow-sm"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between max-w-7xl">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-plaster text-4xl text-primary transition-colors group-hover:text-accent">
            {siteConfig.brand.short}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground hover:text-accent font-medium uppercase tracking-wide text-sm transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={siteConfig.cta.primary.href}
            className="px-5 py-2.5 bg-primary text-white hover:bg-accent transition-colors uppercase tracking-wider text-sm font-medium"
          >
            {siteConfig.cta.primary.label}
          </a>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border shadow-md overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-6 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-foreground hover:text-accent font-medium uppercase tracking-wide text-xl py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={siteConfig.cta.primary.href}
                className="mt-4 px-5 py-4 bg-primary text-white text-center hover:bg-accent transition-colors uppercase tracking-wider text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {siteConfig.cta.primary.label}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
