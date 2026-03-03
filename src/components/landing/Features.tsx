"use client";

import {
  FileText,
  Send,
  Calendar,
  Camera,
  Receipt,
  Zap,
} from "lucide-react";
import { SectionWave } from "./SectionWave";

const features = [
  {
    icon: FileText,
    title: "Devis rapides et professionnels",
    description: "Réalisez vos devis en quelques minutes, sans Excel ni modèles compliqués.",
  },
  {
    icon: Zap,
    title: "Devis → Facture en 1 clic",
    description: "Transformez un devis accepté en facture en 1 clic, sans ressaisir les montants.",
  },
  {
    icon: Receipt,
    title: "Factures claires, paiements plus rapides",
    description: "Créez des factures conformes et suivez facilement celles qui restent à encaisser.",
  },
  {
    icon: Send,
    title: "Envoi et relances en 1 clic",
    description: "Envoyez vos devis et factures par email directement depuis l'app. Relancez en un bouton, quand vous le décidez.",
  },
  {
    icon: Calendar,
    title: "Planning clair, zéro papier",
    description: "Visualisez vos chantiers et interventions en un coup d'œil. Fini le planning dans la tête.",
  },
  {
    icon: Camera,
    title: "Estimation rapide via photo (option)",
    description: "Gagnez du temps en estimant certains chantiers à partir d'une photo.",
  },
];

const variants = ["te-feature-card-variant-accent", "te-feature-card-variant-skye", "te-feature-card-variant-orange"] as const;

export function Features() {
  return (
    <section id="fonctionnalites" className="relative scroll-mt-20 overflow-hidden border-b border-[hsl(var(--border))] bg-[#F6FBFF]/50 py-20 md:py-24">
      {/* Forme décorative en coin */}
      <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[hsl(var(--accent))]/8 blur-3xl" aria-hidden />
      <div className="absolute -left-20 bottom-1/4 h-64 w-64 rounded-full bg-[hsl(var(--accent))]/6 blur-3xl" aria-hidden />

      <div className="container relative mx-auto px-4">
        <div className="mb-14 text-center animate-te-fade-up" style={{ animationDelay: "0.05s" }}>
          <span className="te-section-short-title mx-auto">Nos atouts</span>
          <h2 className="te-section-title-lg mt-4 text-[hsl(var(--te-dark))]">
            Fonctionnalités
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-[hsl(var(--te-body))]">
            Tout ce dont vous avez besoin pour gérer votre activité au quotidien.
          </p>
        </div>
        <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }, index) => (
            <div
              key={title}
              className={`te-card-hover animate-te-fade-up group relative rounded-2xl border border-[hsl(var(--border))] bg-white p-8 shadow-[0px_0px_60px_0px_rgba(0,0,0,0.06)] transition-all duration-500 hover:border-transparent hover:shadow-xl ${variants[index % variants.length]}`}
              style={{ animationDelay: `${0.08 + index * 0.06}s` }}
            >
              <div>
                <div className="te-info-card-inner flex flex-col gap-6">
                  <div className="te-content-wrapper flex flex-col items-start text-left">
                    <div className="te-title-wrapper flex flex-col items-start gap-4 pb-3">
                      <span className="te-feature-icon-wrap flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border-2 transition duration-300 group-hover:scale-105">
                        <Icon className="h-7 w-7" />
                      </span>
                      <h3 className="text-xl font-medium text-[hsl(var(--te-dark))]">{title}</h3>
                      <div className="te-feature-divider h-0.5 w-14 rounded" />
                    </div>
                    <div className="content flex flex-col items-start gap-2">
                      <p className="desc m-0 text-[hsl(var(--te-body))] leading-relaxed">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <SectionWave />
    </section>
  );
}
