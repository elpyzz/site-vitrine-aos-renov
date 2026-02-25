import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Aos Renov — Devis, factures et planning pour artisans",
  description:
    "Solution SaaS pour artisans du BTP : devis, factures, envoi en 1 clic, planning chantiers. Simple et rapide.",
  keywords: ["artisan", "BTP", "devis", "facture", "planning", "chantier", "SaaS"],
  openGraph: {
    title: "Aos Renov — Devis, factures et planning pour artisans",
    description:
      "Solution SaaS pour artisans du BTP : devis, factures, envoi en 1 clic, planning chantiers.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aos Renov — Devis, factures et planning pour artisans",
    description: "Devis, factures et planning pour artisans — simple et rapide.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className={`min-h-screen flex flex-col font-sans ${inter.className}`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
