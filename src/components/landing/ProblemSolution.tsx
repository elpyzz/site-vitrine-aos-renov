import Link from "next/link";
import { X, CheckCircle, ArrowRight } from "lucide-react";
import { SectionWaveToWhite } from "./SectionWave";

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
    <section className="relative overflow-hidden border-b border-[hsl(var(--border))] py-20 md:py-24">
      <div className="te-bg-animated-light" aria-hidden />
      {/* Forme décorative discrète en arrière-plan */}
      <div className="absolute right-0 top-1/4 h-72 w-72 rounded-full bg-[hsl(var(--accent))]/5 blur-3xl animate-te-float-slow" aria-hidden style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-[hsl(var(--accent))]/5 blur-3xl animate-te-float-slow" aria-hidden style={{ animationDelay: "3.5s" }} />

      <div className="container relative mx-auto px-4">
        <div className="mb-12 text-center animate-te-fade-up" style={{ animationDelay: "0.05s" }}>
          <span className="te-section-short-title mx-auto">Avant / Après</span>
          <h2 className="te-section-title-lg mt-4 text-[hsl(var(--te-dark))]">
            Votre quotidien change
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div
            className="animate-te-fade-up rounded-2xl border border-red-200/80 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="h-1 w-16 rounded-full bg-red-400" aria-hidden />
            <div className="mt-6 flex items-center gap-3">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-600">
                <X className="h-6 w-6" />
              </span>
              <h3 className="text-lg font-semibold text-red-800">
                Votre quotidien aujourd&apos;hui
              </h3>
            </div>
            <ul className="mt-5 space-y-3 text-sm text-red-900/90">
              {before.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="animate-te-fade-up rounded-2xl border border-[hsl(var(--accent))]/20 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="h-1 w-16 rounded-full bg-[hsl(var(--accent))]" aria-hidden />
            <div className="mt-6 flex items-center gap-3">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[hsl(var(--accent))]/10 text-[hsl(var(--accent))]">
                <CheckCircle className="h-6 w-6" />
              </span>
              <h3 className="text-lg font-semibold text-[hsl(var(--te-dark))]">
                Votre quotidien avec Aos Renov
              </h3>
            </div>
            <ul className="mt-5 space-y-3 text-sm text-[hsl(var(--te-body))]">
              {after.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--accent))]" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-12 text-center text-lg font-medium text-[hsl(var(--te-dark))] animate-te-fade-up" style={{ animationDelay: "0.3s" }}>
          Moins d&apos;administratif. Plus de chantier. Plus de sérénité.
        </p>
        <div className="mt-8 flex justify-center animate-te-fade-up" style={{ animationDelay: "0.35s" }}>
          <Link href="#comment-ca-marche" className="te-theme-btn">
            Voir comment ça fonctionne <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
      <SectionWaveToWhite />
    </section>
  );
}
