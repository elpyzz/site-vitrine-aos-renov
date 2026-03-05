"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Check, ArrowRight, ChevronDown, ZoomIn } from "lucide-react";
import { ImageLightbox } from "@/components/ui/image-lightbox";

export function Hero() {
  const [heroLightboxOpen, setHeroLightboxOpen] = useState(false);
  return (
    <section className="relative min-h-[100vh] overflow-hidden border-b border-secondary/50 bg-primary">
      {/* Mesh gradient blobs */}
      <div className="mesh-blob absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-accent-hex" style={{ animationDelay: "0s" }} />
      <div className="mesh-blob absolute -right-40 top-1/2 h-80 w-80 rounded-full bg-secondary" style={{ animationDelay: "2s" }} />
      <div className="mesh-blob absolute bottom-1/4 left-1/3 h-72 w-72 rounded-full bg-violet-600" style={{ animationDelay: "4s" }} />

      <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="relative z-10">
            <div className="reveal animate-te-fade-up inline-flex items-center gap-2 rounded-full border border-accent-hex/50 bg-accent-hex/20 px-4 py-2 text-sm font-medium text-text-primary backdrop-blur">
              🏗️ Déjà utilisé par des artisans en France — 4.9/5
            </div>
            <h1 className="reveal mt-6 font-display text-[clamp(2.5rem,7vw,6rem)] font-extrabold leading-[1.05] tracking-tight text-text-primary" style={{ letterSpacing: "-0.03em" }}>
              Arrêtez de perdre
              <br />
              <span className="text-accent-warm">5h par semaine</span>
              <br />
              sur de la paperasse.
            </h1>
            <p className="reveal mt-6 max-w-xl text-lg text-text-secondary">
              Aos Renov centralise vos devis, factures, relances et planning en un seul endroit. Simple. Rapide. Conçu pour le terrain.
            </p>
            <div className="reveal mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="btn-shimmer btn-primary inline-flex items-center gap-2 rounded-full bg-accent-hex px-10 py-4 text-base font-semibold text-white"
              >
                Voir une démo gratuite <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="#app-en-images"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/60 px-8 py-4 text-base font-semibold text-text-primary transition hover:bg-white/10"
              >
                Voir l&apos;application
              </Link>
            </div>
            <p className="reveal mt-4 flex flex-wrap items-center gap-x-6 gap-y-1 text-sm text-text-secondary">
              <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-success" /> Sans engagement</span>
              <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-success" /> Réponse sous 24h</span>
              <span className="flex items-center gap-1.5"><Check className="h-4 w-4 text-success" /> Support humain</span>
            </p>
            <div className="reveal mt-8 flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <span
                    key={i}
                    className="h-10 w-10 rounded-full border-2 border-primary bg-secondary"
                    aria-hidden
                  />
                ))}
              </div>
              <p className="text-sm font-medium text-text-secondary">
                Rejoignez des artisans qui gagnent du temps chaque semaine
              </p>
            </div>
          </div>

          <div className="relative z-10 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Device frame + image */}
              <div className="relative overflow-hidden rounded-[1.25rem] border-4 border-white/20 bg-white/10 shadow-2xl backdrop-blur">
                <button
                  type="button"
                  onClick={() => setHeroLightboxOpen(true)}
                  className="block aspect-[4/3] w-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-accent-hex"
                >
                  <Image
                    src="/hero-aos-renov.png"
                    alt="Aperçu de l'application Aos Renov"
                    width={1600}
                    height={1200}
                    className="h-full w-full object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={100}
                    priority
                    unoptimized
                  />
                  <span className="absolute right-3 bottom-3 flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1.5 text-xs text-white" aria-hidden>
                    <ZoomIn className="h-3.5 w-3.5" /> Agrandir
                  </span>
                </button>
                <ImageLightbox
                  open={heroLightboxOpen}
                  onOpenChange={setHeroLightboxOpen}
                  src="/hero-aos-renov.png"
                  alt="Aos Renov - Application"
                />
              </div>
              {/* Floating badges — hidden on mobile */}
              <div className="absolute -right-2 top-[15%] hidden animate-te-float-slow rounded-full bg-success px-3 py-2 text-xs font-medium text-white shadow-lg lg:block" style={{ animationDelay: "0s" }}>✓ Devis envoyé — 3 min</div>
              <div className="absolute -left-2 top-[45%] hidden animate-te-float-slow rounded-full bg-accent-hex px-3 py-2 text-xs font-medium text-white shadow-lg lg:block" style={{ animationDelay: "1s" }}>💶 Facture payée</div>
              <div className="absolute -right-4 bottom-[20%] hidden animate-te-float-slow rounded-full bg-accent-warm px-3 py-2 text-xs font-medium text-white shadow-lg lg:block" style={{ animationDelay: "2s" }}>🔔 Relance envoyée</div>
            </div>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden>
          <ChevronDown className="h-8 w-8 text-white/60" />
        </div>
      </div>
    </section>
  );
}
