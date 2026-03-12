"use client";

import {
  FileText,
  Calendar,
  Camera,
  Zap,
  BookOpen,
} from "lucide-react";
import { SectionWaveToNavy } from "./SectionWave";

const features = [
  {
    icon: FileText,
    title: "Devis rapides et professionnels",
    description: "Réalisez vos devis en quelques minutes, sans Excel ni modèles compliqués.",
    iconBg: "rgba(37,99,235,0.1)",
    iconColor: "#2563EB",
  },
  {
    icon: "✍️",
    title: "Envoi, relances et signature en 1 clic",
    description: "Envoyez devis et factures par email, relancez en un clic. Signature électronique avec SignWell — votre client signe depuis son téléphone.",
    iconBg: "rgba(245,166,35,0.1)",
    iconColor: "#F5A623",
    badge: "NOUVEAU",
    badgeNew: true,
  },
  {
    icon: Calendar,
    title: "Planning clair, zéro papier",
    description: "Visualisez vos chantiers et interventions en un coup d'œil.",
    iconBg: "rgba(139,92,246,0.1)",
    iconColor: "#8B5CF6",
  },
  {
    icon: Zap,
    title: "Devis → Facture en 1 clic",
    description: "Transformez un devis accepté en facture en 1 clic, sans ressaisir les montants.",
    iconBg: "rgba(37,99,235,0.1)",
    iconColor: "#2563EB",
  },
  {
    icon: Camera,
    title: "Estimation via photo",
    description: "Estimez certains chantiers à partir d'une photo et gagnez du temps.",
    iconBg: "rgba(239,68,68,0.1)",
    iconColor: "#EF4444",
    badge: "⭐ Exclusif",
  },
  {
    icon: BookOpen,
    title: "Comptabilité simplifiée",
    description: "CA en temps réel, livre de recettes en un clic, export PDF prêt pour l'URSSAF.",
    iconBg: "rgba(34,197,94,0.1)",
    iconColor: "#22C55E",
  },
];

export function Features() {
  return (
    <section
      id="fonctionnalites"
      className="relative scroll-mt-20 overflow-hidden border-b border-[#E2E8F0] py-20 md:py-24"
      style={{
        backgroundColor: "#FAFAFA",
        backgroundImage: "radial-gradient(circle, #E2E8F0 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }}
    >
      <div className="container relative mx-auto px-4">
        <div className="mb-14 text-center reveal">
          <span className="section-label-light mx-auto inline-block">Fonctionnalités</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-[#0F172A] md:text-4xl lg:text-5xl">
            <span className="block">Tout ce dont vous avez besoin.</span>
            <span className="mt-1 block italic text-[#2563EB]">Rien de superflu.</span>
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description, iconBg, iconColor, badge, badgeNew }, index) => (
            <div
              key={title}
              className="reveal group relative overflow-visible rounded-[20px] border border-[#E2E8F0] bg-white p-8 shadow-none transition-all duration-300 hover:-translate-y-2 hover:border-[#2563EB] hover:shadow-[0_32px_64px_rgba(37,99,235,0.12)]"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {badge && (
                <span
                  className={
                    badgeNew
                      ? "absolute -top-2.5 right-4 rounded-full bg-[var(--accent-warm)] px-2.5 py-1 font-display text-[10px] font-extrabold uppercase tracking-widest text-[#050810]"
                      : "absolute right-4 top-4 rounded-full bg-[#F59E0B] px-2.5 py-1 font-mono text-[11px] font-medium text-[#0F172A]"
                  }
                  style={badgeNew ? { fontFamily: "var(--font-bricolage), sans-serif" } : { fontFamily: "var(--font-dm-mono), monospace" }}
                >
                  {badge}
                </span>
              )}
              <div
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[14px] text-3xl transition-colors duration-300"
                style={{
                  backgroundColor: iconBg,
                  width: 56,
                  height: 56,
                }}
              >
                {typeof Icon === "string" ? (
                  <span aria-hidden>{Icon}</span>
                ) : (
                  <Icon
                    className="h-12 w-12 text-slate-400 transition-colors duration-300 group-hover:text-[#2563EB]"
                  />
                )}
              </div>
              <h3 className="mt-5 text-lg font-bold text-[#0F172A]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[hsl(var(--te-body))]">{description}</p>
            </div>
          ))}
        </div>
      </div>
      <SectionWaveToNavy />
    </section>
  );
}
