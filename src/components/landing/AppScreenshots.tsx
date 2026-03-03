"use client";

import { useState } from "react";
import Image from "next/image";
import { ZoomIn } from "lucide-react";
import { ImageLightbox } from "@/components/ui/image-lightbox";

const screenshots = [
  {
    src: "/app-dashboard.png",
    alt: "Tableau de bord Aos Renov — vue d'ensemble, devis, chantiers et facturation",
    title: "Vue d'ensemble",
    description: "Devis, chantiers actifs et facturation en un coup d'œil.",
  },
  {
    src: "/app-planning.png",
    alt: "Planning des chantiers Aos Renov — calendrier des interventions",
    title: "Planning des chantiers",
    description: "Calendrier intégré pour organiser vos interventions.",
  },
  {
    src: "/app-chantiers.png",
    alt: "Mes Chantiers Aos Renov — gérez vos projets en cours et terminés",
    title: "Mes Chantiers",
    description: "Gérez tous vos projets en cours et terminés.",
  },
  {
    src: "/app-devis.png",
    alt: "Générateur de devis Aos Renov — devis professionnels conformes BTP",
    title: "Générateur de devis",
    description: "Créez des devis professionnels conformes BTP.",
  },
  {
    src: "/app-facturation.png",
    alt: "Générateur de facturation Aos Renov — factures conformes",
    title: "Facturation",
    description: "Créez des factures professionnelles conformes BTP.",
  },
  {
    src: "/app-dossiers.png",
    alt: "Dossiers Aos Renov — devis et factures",
    title: "Dossiers",
    description: "Gérez tous vos devis et factures.",
  },
  {
    src: "/app-estimation.png",
    alt: "Estimation automatique des chantiers Aos Renov — import des photos",
    title: "Estimation automatique",
    description: "Import des photos du chantier pour estimer.",
  },
  {
    src: "/app-login.png",
    alt: "Connexion Aos Renov — bienvenue sur votre compte",
    title: "Connexion",
    description: "Accédez à votre compte en toute sécurité.",
  },
];

export function AppScreenshots() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState("");
  const [lightboxTitle, setLightboxTitle] = useState("");

  const openLightbox = (src: string, alt: string, title: string) => {
    setLightboxSrc(src);
    setLightboxAlt(alt);
    setLightboxTitle(title);
  };

  return (
    <section
      id="app-en-images"
      className="relative scroll-mt-20 overflow-hidden border-b border-[hsl(var(--border))] bg-gradient-to-b from-[#f5f7fa] to-[#F6FBFF] py-20 md:py-24"
    >
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[hsl(var(--accent))]/6 blur-3xl" aria-hidden />
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center animate-te-fade-up" style={{ animationDelay: "0.05s" }}>
          <span className="te-section-short-title mx-auto">Découverte</span>
          <h2 className="te-section-title-lg mt-4 text-[hsl(var(--te-dark))]">
            L&apos;app en images
          </h2>
          <p className="mt-3 text-lg text-[hsl(var(--te-body))]">
            Une interface simple pour gérer vos devis, factures et planning. Cliquez sur une image pour l&apos;agrandir.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {screenshots.map(({ src, alt, title, description }, i) => (
            <div
              key={src}
              className="animate-te-fade-up group overflow-hidden rounded-2xl border border-[hsl(var(--border))] bg-white shadow-[0px_0px_40px_0px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-xl"
              style={{ animationDelay: `${0.06 + i * 0.04}s` }}
            >
              <button
                type="button"
                onClick={() => openLightbox(src, alt, title)}
                className="relative block w-full aspect-[3/2] overflow-hidden bg-[hsl(var(--muted))]/20 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] focus:ring-inset"
              >
                <Image
                  src={src}
                  alt={alt}
                  width={1600}
                  height={1067}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  quality={100}
                  unoptimized
                />
                <span className="absolute right-2 top-2 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus:opacity-100" aria-hidden>
                  <ZoomIn className="h-5 w-5" />
                </span>
              </button>
              <div className="border-t border-[hsl(var(--border))] bg-white px-4 py-3">
                <h3 className="font-semibold text-[hsl(var(--te-dark))] text-sm">
                  {title}
                </h3>
                <p className="mt-0.5 text-xs text-[hsl(var(--te-body))] line-clamp-2">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {lightboxSrc && (
        <ImageLightbox
          open={!!lightboxSrc}
          onOpenChange={(open) => !open && setLightboxSrc(null)}
          src={lightboxSrc}
          alt={lightboxAlt}
          title={lightboxTitle}
        />
      )}
    </section>
  );
}
