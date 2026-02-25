import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Transformez un devis en facture en 1 clic",
  "Devis et factures en quelques clics",
  "Envoi direct au client par email",
  "Planning chantiers centralisé",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[hsl(var(--border))] bg-white">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Gagnez{" "}
              <span className="text-[hsl(var(--accent))]">5 à 10 heures</span>{" "}
              par semaine sur votre gestion.
            </h1>
            <p className="mt-4 text-lg text-[hsl(var(--muted-foreground))] max-w-xl">
              Un outil conçu pour les artisans qui veulent rester concentrés sur leur métier, pas sur la paperasse.
            </p>
            <ul className="mt-6 space-y-3">
              {benefits.map((item) => (
                <li key={item} className="flex items-center gap-2 text-[hsl(var(--foreground))]">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[hsl(var(--accent))]/10 text-[hsl(var(--accent))]">
                    <Check className="h-3 w-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <Link href="/contact">Demander une démo</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact#demo">Voir une démo</Link>
              </Button>
            </div>
            <p className="mt-4 text-sm text-[hsl(var(--muted-foreground))]">
              Démonstration gratuite • Sans engagement • Réponse sous 24h
            </p>
            <p className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">
              Données hébergées en France • Support humain
            </p>
          </div>
          <div className="relative flex justify-center lg:justify-end">
            <div className="rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--muted))]/30 aspect-video w-full max-w-md flex items-center justify-center">
              <span className="text-sm text-[hsl(var(--muted-foreground))]">Visuel à venir</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
