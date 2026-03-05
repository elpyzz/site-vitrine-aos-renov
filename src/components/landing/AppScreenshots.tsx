"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionWaveToWhite } from "./SectionWave";

const tabs = [
  {
    id: "overview",
    number: "01",
    label: "Vue d'ensemble",
    description: "Tous vos indicateurs en un coup d'œil",
    src: "/app-dashboard.png",
    alt: "Tableau de bord Aos Renov",
  },
  {
    id: "devis",
    number: "02",
    label: "Générateur de devis",
    description: "Devis professionnel en moins de 5 minutes",
    src: "/app-devis.png",
    alt: "Générateur de devis Aos Renov",
  },
  {
    id: "planning",
    number: "03",
    label: "Planning des chantiers",
    description: "Visualisez toute votre semaine",
    src: "/app-planning.png",
    alt: "Planning Aos Renov",
  },
  {
    id: "facturation",
    number: "04",
    label: "Facturation",
    description: "Factures conformes BTP, envoyées en 1 clic",
    src: "/app-facturation.png",
    alt: "Facturation Aos Renov",
  },
  {
    id: "estimation",
    number: "05",
    label: "Estimation par photo",
    description: "IA — uploadez une photo, obtenez une estimation",
    src: "/app-estimation.png",
    alt: "Estimation par photo Aos Renov",
  },
];

export function AppScreenshots() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="app-en-images"
      className="relative scroll-mt-20 overflow-hidden border-b border-white/10 bg-[#0A1628] py-20 md:py-24"
    >
      <div className="container relative mx-auto px-4">
        <div className="mb-12 text-center reveal">
          <span className="section-label-dark mx-auto inline-block">Découverte</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">
            Découvrez l&apos;interface
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-white/60">
            Conçu pour aller vite. Intuitif dès le premier jour.
          </p>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch lg:gap-12">
          {/* Tabs — toujours visibles (pas de reveal pour éviter disparition au clic) */}
          <div className="shrink-0 lg:w-[320px]">
            {/* Mobile: indicateurs d'onglet */}
            <div className="mb-4 flex justify-center gap-2 lg:hidden">
              {tabs.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === activeIndex ? "w-6 bg-[#2563EB]" : "w-2 bg-white/30"
                  }`}
                  aria-label={`Voir ${tabs[i].label}`}
                />
              ))}
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
              {tabs.map((tab, i) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={`flex min-w-[200px] flex-col rounded-lg border-l-2 px-4 py-3 text-left transition-all lg:min-w-0 ${
                    i === activeIndex
                      ? "border-[#2563EB] bg-[rgba(37,99,235,0.08)] text-white"
                      : "border-white/10 text-white/50 hover:text-white/70"
                  }`}
                >
                  <span className="font-mono text-sm text-[#2563EB]">{tab.number}</span>
                  <span className="mt-1 font-semibold">{tab.label}</span>
                  {i === activeIndex && (
                    <span className="mt-1 text-sm text-white/70">{tab.description}</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Device frame + screenshot — toujours visible */}
          <div className="flex-1">
            <div className="relative mx-auto max-w-3xl overflow-hidden rounded-xl bg-[#1e293b] shadow-[0_40px_80px_rgba(0,0,0,0.5)]">
              {/* Browser mockup bar */}
              <div className="flex items-center gap-2 border-b border-white/10 bg-[#0f172a] px-4 py-3">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="ml-4 flex-1 rounded-md bg-white/5 px-3 py-1.5 font-mono text-xs text-white/50">
                  app.aosrenov.fr
                </div>
              </div>
              <div className="relative aspect-video min-h-[200px] overflow-hidden bg-[#0f172a] p-2">
                {tabs.map((tab, i) => (
                  <div
                    key={tab.id}
                    className="absolute inset-2 transition-all duration-300"
                    style={{
                      opacity: i === activeIndex ? 1 : 0,
                      transform: i === activeIndex ? "scale(1)" : "scale(0.95)",
                      pointerEvents: i === activeIndex ? "auto" : "none",
                      zIndex: i === activeIndex ? 10 : 0,
                    }}
                  >
                    <Image
                      src={tab.src}
                      alt={tab.alt}
                      width={1200}
                      height={800}
                      className="h-full w-full rounded-lg object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 800px"
                      unoptimized
                      priority={i === 0}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <SectionWaveToWhite />
    </section>
  );
}
