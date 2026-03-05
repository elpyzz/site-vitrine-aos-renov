"use client";

import { useState } from "react";

const painPoints = [
  "Passer leurs soirées à faire des devis sur Word",
  "Oublier de relancer un client et perdre 500€",
  "Chercher une facture de 3 mois dans leurs mails",
  "Expliquer par téléphone où en est un chantier",
];

export function Testimonials() {
  const [active, setActive] = useState(0);
  return (
    <section id="avis" className="relative overflow-hidden border-b border-primary/10 bg-primary py-20 md:py-24">
      <div className="container relative mx-auto px-4">
        <h2 className="reveal text-center font-display text-3xl font-extrabold text-text-primary md:text-4xl">
          Ce que nos artisans ne veulent plus jamais faire
        </h2>
        <div className="mx-auto mt-12 max-w-3xl">
          <div className="reveal rounded-2xl border border-white/20 bg-secondary/50 p-8 md:p-12 backdrop-blur">
            <p className="text-center text-xl font-medium italic text-text-primary md:text-2xl">
              « {painPoints[active]} »
            </p>
            <div className="mt-8 flex justify-center gap-2">
              {painPoints.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === active ? "w-8 bg-accent-warm" : "w-2 bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`Douleur ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        <p className="reveal mt-8 text-center text-text-secondary">
          Avec Aos Renov, tout est centralisé. Demandez une démo pour voir la différence.
        </p>
      </div>
    </section>
  );
}
