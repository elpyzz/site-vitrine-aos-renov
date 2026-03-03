import Image from "next/image";
import { Target } from "lucide-react";

export function ForWho() {
  return (
    <section id="pour-qui" className="relative scroll-mt-20 overflow-hidden border-b border-[hsl(var(--border))] bg-[#F6FBFF]/40 py-20 md:py-24">
      <div className="absolute -left-32 top-1/4 h-64 w-64 rounded-full bg-[hsl(var(--accent))]/8 blur-3xl" aria-hidden />
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
            {/* Élément décoratif type template */}
            <div className="absolute -bottom-4 -right-4 z-0 h-24 w-24 rounded-full bg-[hsl(var(--accent))]/10 blur-xl" aria-hidden />
            <div className="relative z-10 w-full max-w-md">
              <div className="relative overflow-hidden rounded-2xl border border-[hsl(var(--border))] shadow-xl">
                <Image
                  src="/artisan-tablette.png"
                  alt="Artisan sur chantier utilisant une tablette pour gérer son activité"
                  width={600}
                  height={400}
                  className="w-full object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={90}
                />
                {/* Carte flottante overlay */}
                <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/80 bg-white/95 p-4 shadow-xl backdrop-blur sm:right-auto sm:max-w-[220px] animate-te-fade-up" style={{ animationDelay: "0.2s" }}>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
