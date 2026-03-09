"use client";

import { useEffect, useRef, useState, Fragment } from "react";
import { SectionWaveToNavy } from "./SectionWave";

const steps = [
  {
    title: "Créez votre compte",
    description: "Renseignez votre activité et vos informations en quelques minutes. Aucune configuration compliquée.",
  },
  {
    title: "Premier devis",
    description: "Ajoutez un client, vos lignes de prestation et générez votre devis. Envoyez votre devis par email avec un lien de signature électronique (SignWell) — votre client signe en 30 secondes depuis son téléphone.",
  },
  {
    title: "Vous êtes opérationnel",
    description: "Planning clair, devis suivis, factures prêtes. Vous travaillez plus sereinement dès le premier jour.",
  },
  {
    title: "Vous êtes payé plus vite",
    description: "Relances automatiques, factures claires : vos clients paient sans attendre.",
  },
];

function StepperLine({ filled }: { filled: boolean }) {
  return (
    <div className="relative hidden h-0.5 flex-1 items-center md:flex">
      <div
        className="absolute inset-0 border-t-2 border-dashed border-[#CBD5E1]"
        aria-hidden
      />
      <div
        className="absolute left-0 top-0 h-full border-t-2 border-[#2563EB] transition-all duration-700 ease-out"
        style={{ width: filled ? "100%" : "0%" }}
        aria-hidden
      />
    </div>
  );
}

export function HowItWorks() {
  const [revealedUpTo, setRevealedUpTo] = useState(-1);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = stepRefs.current.indexOf(entry.target as HTMLDivElement);
          if (index >= 0) setRevealedUpTo((prev) => Math.max(prev, index));
        });
      },
      { threshold: 0.3 }
    );
    stepRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="comment-ca-marche"
      className="relative scroll-mt-20 overflow-hidden border-b border-[#E2E8F0] py-20 md:py-24"
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #F0F4FF 100%)",
      }}
    >
      <div className="container relative mx-auto px-4">
        <div className="mb-14 text-center reveal">
          <span className="section-label-light mx-auto inline-block">Processus</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-[#0F172A] md:text-4xl">
            Démarrez en moins de 10 minutes
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-[hsl(var(--te-body))]">
            Simple, rapide, sans prise de tête.
          </p>
        </div>

        <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-0">
          {steps.map((step, index) => (
            <Fragment key={step.title}>
              <div
                ref={(el) => { stepRefs.current[index] = el; }}
                className="reveal flex flex-col items-center text-center md:min-w-[140px]"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#2563EB] font-mono text-lg font-bold text-white"
                  style={{ width: 56, height: 56 }}
                >
                  {index + 1}
                </div>
                <h3 className="mt-4 text-base font-bold text-[#0F172A] md:text-lg">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-[200px] text-sm text-[hsl(var(--te-body))]">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <StepperLine filled={revealedUpTo >= index} />
              )}
            </Fragment>
          ))}
        </div>

        <div className="reveal mt-12 flex justify-center">
          <p className="rounded-full border border-[rgba(37,99,235,0.2)] bg-[rgba(37,99,235,0.1)] px-6 py-3 text-center font-bold text-[#2563EB]">
            ⚡ La plupart de nos artisans envoient leur premier devis le jour même
          </p>
        </div>
      </div>
      <SectionWaveToNavy />
    </section>
  );
}
