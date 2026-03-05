import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque, DM_Mono } from "next/font/google";
import "./globals.css";
import { UrgencyBanner } from "@/components/layout/UrgencyBanner";
import { Header } from "@/components/layout/Header";
import { TrustBar } from "@/components/layout/TrustBar";
import { Footer } from "@/components/layout/Footer";
import { ScrollRevealProvider } from "@/components/layout/ScrollRevealProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});
const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  weight: "400",
  display: "swap",
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
    <html lang="fr" className={`${inter.variable} ${bricolage.variable} ${dmMono.variable}`}>
      <body className={`min-h-screen flex flex-col font-sans ${inter.className}`}>
        <UrgencyBanner />
        <Header />
        <TrustBar />
        <ScrollRevealProvider>
          <main className="flex-1">{children}</main>
        </ScrollRevealProvider>
        <Footer />
      </body>
    </html>
  );
}
