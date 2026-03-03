"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Check, Phone, ArrowRight, ZoomIn } from "lucide-react";
import { ImageLightbox } from "@/components/ui/image-lightbox";

const benefits = [
  "Transformez un devis en facture en 1 clic",
  "Devis et factures en quelques clics",
  "Envoi direct au client par email",
  "Planning chantiers centralisé",
];

/* Formes décoratives type template (gauche) */
function HeroLeftShape() {
  return (
    <div className="absolute left-0 top-1/4 hidden w-32 opacity-40 animate-te-float-slow lg:block" aria-hidden style={{ animationDelay: "0s" }}>
      <svg width="168" height="320" viewBox="0 0 168 587" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full">
        <g opacity="0.6">
          <path d="M69.1 152.3C71.3 155.1 73.4 158 75.5 161C125.5 232.9 139.4 348 125.6 435C116.7 491 87.4 542 48.2 586" stroke="#317EFE" strokeWidth="2" strokeMiterlimit="10" />
          <path d="M8.77 11.7C11.6 13.6 14.4 15.5 17.1 17.5C158 121 224 393 106 586" stroke="#317EFE" strokeWidth="2" strokeMiterlimit="10" />
        </g>
      </svg>
    </div>
  );
}

/* Forme décorative droite */
function HeroRightShape() {
  return (
    <div className="absolute right-0 top-1/3 hidden w-24 opacity-40 animate-te-float-slow lg:block" aria-hidden style={{ animationDelay: "2.5s" }}>
      <svg width="138" height="320" viewBox="0 0 138 481" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full">
        <path d="M130.6 471C128.3 469.6 126 468 123.7 466.3C8.27 381.3 -45.5 158 50.7 0" stroke="#317EFE" strokeWidth="2" strokeMiterlimit="10" />
      </svg>
    </div>
  );
}

export function Hero() {
  const [heroLightboxOpen, setHeroLightboxOpen] = useState(false);
  return (
    <section className="relative min-h-[90vh] overflow-hidden border-b border-[hsl(var(--border))]">
      <div className="te-bg-animated-hero" aria-hidden />
      <HeroLeftShape />
      <HeroRightShape />

      <div className="container relative mx-auto px-4 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="relative z-10">
            <span className="te-section-short-title animate-te-fade-in" style={{ animationDelay: "0.1s" }}>Solution pro</span>
            <h1 className="te-section-title-lg mt-4 animate-te-fade-up" style={{ animationDelay: "0.2s" }}>
              Gagnez{" "}
              <span className="text-[hsl(var(--accent))]">5 à 10 heures</span>{" "}
              par semaine sur votre gestion.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-[hsl(var(--te-body))] animate-te-fade-up" style={{ animationDelay: "0.3s" }}>
              Un outil conçu pour les artisans qui veulent rester concentrés sur leur métier, pas sur la paperasse.
            </p>
            <ul className="mt-6 space-y-3">
              {benefits.map((item, i) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-[hsl(var(--te-body))] animate-te-fade-up"
                  style={{ animationDelay: `${0.35 + i * 0.05}s` }}
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--accent))]/20 text-[hsl(var(--accent))]">
                    <Check className="h-3 w-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-4 animate-te-fade-up" style={{ animationDelay: "0.6s" }}>
              <Link href="/contact" className="te-theme-btn animate-te-glow-soft">
                Demander une démo <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+3369430343"
                className="flex items-center gap-4 rounded-full border-4 border-[#E7F914] bg-white p-3 text-[hsl(var(--te-dark))] shadow-lg transition hover:scale-105 hover:shadow-xl animate-te-ripple"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--accent))]/10 text-[hsl(var(--accent))]">
                  <Phone className="h-5 w-5" />
                </span>
                <span className="flex flex-col text-left">
                  <span className="text-xs font-normal text-[hsl(var(--te-body))]">Besoin d&apos;aide ?</span>
                  <span className="text-base font-semibold">07 69 43 03 43</span>
                </span>
              </a>
            </div>
            <p className="mt-6 text-sm text-[hsl(var(--te-body))]/80" style={{ animationDelay: "0.7s" }}>
              Démonstration gratuite • Sans engagement • Réponse sous 24h
            </p>
            <p className="mt-1 text-sm text-[hsl(var(--te-body))]/80">
              Données hébergées en France • Support humain
            </p>
          </div>

          <div className="relative z-10 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Badge flottant type template */}
              <div className="absolute -left-4 top-8 z-20 flex items-center gap-3 rounded-2xl border-2 border-white/80 bg-white/95 px-4 py-3 shadow-xl backdrop-blur animate-te-float lg:-left-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[hsl(var(--accent))]/20 text-[hsl(var(--accent))] font-bold">A</span>
                <span className="text-sm font-semibold text-[hsl(var(--te-dark))]">Construire pour durer</span>
              </div>
              {/* Image dans forme à biseau — clic pour agrandir */}
              <div className="te-hero-shape-blob relative overflow-hidden rounded-2xl bg-white/20 shadow-2xl">
                <button
                  type="button"
                  onClick={() => setHeroLightboxOpen(true)}
                  className="block aspect-[4/3] w-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] focus:ring-offset-2 rounded-2xl"
                >
                  <Image
                    src="/hero-aos-renov.png"
                    alt="Aos Renov - Construire pour durer - Application de gestion chantiers, devis et équipes"
                    width={1600}
                    height={1200}
                    className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={100}
                    priority
                    unoptimized
                  />
                  <span className="absolute right-4 bottom-4 flex items-center gap-2 rounded-full bg-black/50 px-3 py-2 text-sm text-white" aria-hidden>
                    <ZoomIn className="h-4 w-4" /> Agrandir
                  </span>
                </button>
                <ImageLightbox
                  open={heroLightboxOpen}
                  onOpenChange={setHeroLightboxOpen}
                  src="/hero-aos-renov.png"
                  alt="Aos Renov - Construire pour durer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
