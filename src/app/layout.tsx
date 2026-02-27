import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// #region agent log
if (typeof fetch !== "undefined") {
  fetch("http://127.0.0.1:7481/ingest/155b9555-22a3-4566-a5b1-dcd194f1aadd", {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "4b9e50" },
    body: JSON.stringify({
      sessionId: "4b9e50",
      runId: "chunk-debug",
      hypothesisId: "B",
      location: "layout.tsx",
      message: "layout server render",
      data: { cwd: process.cwd?.() },
      timestamp: Date.now(),
    }),
  }).catch(() => {});
}
// #endregion

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
