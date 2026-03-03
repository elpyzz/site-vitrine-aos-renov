"use client";

import { useState } from "react";
import Image from "next/image";
import { Target, ZoomIn } from "lucide-react";
import { ImageLightbox } from "@/components/ui/image-lightbox";

export function ForWho() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const artisanImage = "/artisan-tablette.png";

  return (
    <section id="pour-qui" className="relative scroll-mt-20 overflow-hidden border-b border-[hsl(var(--border))] py-20 md:py-24">
      <div className="te-bg-animated-light" aria-hidden />
      <div className="absolute -left-32 top-1/4 h-64 w-64 rounded-full bg-[hsl(var(--accent))]/8 blur-3xl animate-te-float-slow" aria-hidden style={{ animationDelay: "1.5s" }} />
      <div className="container relative mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="animate-te-fade-up" style={{ animationDelay: "0.05s" }}>
            <span className="te-section-short-title">Cible</span>
            <h2 className="te-section-title-lg mt-4 text-[hsl(var(--te-dark))]">Pensé pour les artisans indépendants</h2>
            <p className="mt-3 max-w-2xl text-lg text-[hsl(var(--te-body))]">
              Vous travaillez seul ou en petite équipe ? Aos Renov est conçu pour simplifier votre quotidien.
            </p>
            <p className="mt-6 text-sm text-[hsl(var(--te-body))]">
              Idéal pour les artisans qui gèrent eux-mêmes leurs devis, factures et planning.
            </p>
          </div>
          <div className="relative flex justify-center lg:justify-end animate-te-fade-up" style={{ animationDelay: "0.15s" }}>
            <div className="absolute -bottom-4 -right-4 z-0 h-24 w-24 rounded-full bg-[hsl(var(--accent))]/10 blur-xl" aria-hidden />
            <div className="relative z-10 w-full max-w-md">
              <button
                type="button"
                onClick={() => setLightboxOpen(true)}
                className="relative block w-full overflow-hidden rounded-2xl border border-[hsl(var(--border))] shadow-xl transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] focus:ring-offset-2"
              >
                <Image
                  src={artisanImage}
                  alt="Artisan sur chantier utilisant une tablette pour gérer son activité"
                  width={1000}
                  height={667}
                  className="w-full object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={100}
                  unoptimized
                />
                <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/80 bg-white/95 p-4 shadow-xl backdrop-blur sm:right-auto sm:max-w-[220px]">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--accent))]/20 text-[hsl(var(--accent))]">
                      <Target className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-semibold text-[hsl(var(--te-dark))]">Pour les artisans</p>
                      <p className="text-sm text-[hsl(var(--te-body))]">Devis, factures, planning en un seul outil.</p>
                    </div>
                  </div>
                </div>
                <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white" aria-hidden>
                  <ZoomIn className="h-5 w-5" />
                </span>
              </button>
              <p className="mt-2 text-center text-xs text-[hsl(var(--te-body))]">Cliquez pour agrandir</p>
              <ImageLightbox
                open={lightboxOpen}
                onOpenChange={setLightboxOpen}
                src={artisanImage}
                alt="Artisan sur chantier — Aos Renov"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
