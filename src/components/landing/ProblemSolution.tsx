"use client";

import Link from "next/link";
import { X, Check, ArrowRight } from "lucide-react";
import { SectionWaveToLight } from "./SectionWave";

const before = [
  "Vous faites vos devis le soir, quand la journée est déjà finie",
  "Des relances oubliées, des paiements qui tardent",
  "Un planning dans votre tête ou sur des feuilles volantes",
  "Vous cherchez des infos pendant qu'un client attend",
];

const after = [
  "Vos devis sont envoyés en 5 minutes",
  "Relances en 1 clic, au bon moment",
  "Devis → facture en 1 clic, sans ressaisir",
  "Votre planning est clair en un coup d'œil",
  "Vous savez exactement où vous en êtes",
];

export function ProblemSolution() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#0A1628] py-20 md:py-24 section-noise">
      <div className="container relative mx-auto px-4">
        <div className="mb-14 text-center reveal">
          <span className="section-label-dark mx-auto inline-block">Avant / Après</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
            Votre quotidien{" "}
            <span className="relative inline-block">
              change
              <span className="title-underline absolute bottom-1 left-0 h-1 w-full origin-left rounded-full bg-[#EF4444]" aria-hidden />
            </span>
          </h2>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-6">
            {/* Card Avant — slide-in gauche */}
            <div className="reveal reveal-slide-left reveal-delay-1 flex flex-col rounded-xl border-2 border-[rgba(239,68,68,0.3)] border-l-4 border-l-[#EF4444] bg-[#1A0A0A] p-6 shadow-[0_25px_50px_rgba(239,68,68,0.15)] transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(239,68,68,0.5)] hover:shadow-[0_28px_56px_rgba(239,68,68,0.2)] md:max-w-md md:justify-self-end md:rotate-[-1.5deg] md:origin-bottom">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[rgba(239,68,68,0.1)] text-[#EF4444]">
                <X className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-semibold text-[#EF4444]">Avant</h3>
            </div>
            <ul className="mt-5 space-y-3 text-sm text-[rgba(255,255,255,0.75)]">
              {before.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 shrink-0 text-[#EF4444]" aria-hidden>
                    <X className="h-4 w-4" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            </div>

            <div className="hidden items-center justify-center py-4 md:flex" aria-hidden>
              <span className="animate-pulse text-4xl text-[#EF4444] md:text-5xl">→</span>
            </div>

            {/* Card Après — slide-in droite */}
            <div className="reveal reveal-slide-right reveal-delay-2 flex flex-col rounded-xl border-2 border-[rgba(16,185,129,0.3)] border-l-4 border-l-[#10B981] bg-[#0A1A0F] p-6 shadow-[0_25px_50px_rgba(16,185,129,0.15)] transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(16,185,129,0.5)] hover:shadow-[0_28px_56px_rgba(16,185,129,0.2)] md:max-w-md md:justify-self-start md:rotate-[1deg] md:origin-bottom">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[rgba(16,185,129,0.1)] text-[#10B981]">
                <Check className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-semibold text-[#10B981]">Après</h3>
            </div>
            <ul className="mt-5 space-y-3 text-sm text-[rgba(255,255,255,0.85)]">
              {after.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 shrink-0 text-[#10B981]" aria-hidden>
                    <Check className="h-4 w-4" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            </div>
          </div>
        </div>

        <p className="reveal reveal-delay-3 mx-auto mt-12 max-w-2xl rounded-full border border-white/20 bg-white/10 px-8 py-5 text-center text-xl font-bold text-white backdrop-blur-sm">
          Moins d&apos;administratif. Plus de chantier. Plus de sérénité.
        </p>
        <div className="mt-8 flex justify-center reveal reveal-delay-3">
          <Link
            href="#comment-ca-marche"
            className="inline-flex items-center gap-2 rounded-full border-2 border-white bg-transparent px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#0A1628]"
          >
            Voir comment ça fonctionne <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
      <SectionWaveToLight />
    </section>
  );
}
