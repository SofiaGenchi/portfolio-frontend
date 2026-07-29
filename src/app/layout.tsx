import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, Plaster } from "next/font/google";
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
  title: "Sofia Genchi | Desarrolladora Web Frontend",
  description: "Portafolio profesional de Sofia Genchi, Desarrolladora Web certificada en ReactJS.",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
