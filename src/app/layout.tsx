import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, Plaster } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/ui/BackToTop";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display-google",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-body-google",
  subsets: ["latin"],
});

const plaster = Plaster({
  weight: "400",
  variable: "--font-plaster-google",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.domain),
  title: {
    default: `${siteConfig.brand.name} | ${siteConfig.brand.tagline}`,
    template: `%s | ${siteConfig.brand.name}`,
  },
  description: siteConfig.brand.description,
  applicationName: siteConfig.brand.name,
  authors: [{ name: siteConfig.brand.legal }],
  creator: siteConfig.brand.legal,
  keywords: [...siteConfig.seo.keywords],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.seo.locale,
    url: siteConfig.seo.domain,
    siteName: siteConfig.brand.name,
    title: `${siteConfig.brand.name} | ${siteConfig.brand.tagline}`,
    description: siteConfig.brand.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.brand.name} | ${siteConfig.brand.tagline}`,
    description: siteConfig.brand.description,
    ...(siteConfig.seo.twitterHandle
      ? { creator: siteConfig.seo.twitterHandle }
      : {}),
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteConfig.seo.domain}/#person`,
      name: siteConfig.brand.legal,
      jobTitle: siteConfig.brand.tagline,
      description: siteConfig.brand.description,
      url: siteConfig.seo.domain,
      email: `mailto:${siteConfig.contact.email}`,
      sameAs: Object.values(siteConfig.social).filter(Boolean),
      knowsAbout: siteConfig.seo.keywords,
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.seo.domain}/#website`,
      name: siteConfig.brand.name,
      url: siteConfig.seo.domain,
      inLanguage: "es-AR",
      publisher: { "@id": `${siteConfig.seo.domain}/#person` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${dmSans.variable} ${plaster.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
        <BackToTop />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
