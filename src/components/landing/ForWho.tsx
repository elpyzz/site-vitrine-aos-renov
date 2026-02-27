import Image from "next/image";
import { Wrench } from "lucide-react";

const trades = [
  "Plombier / Chauffagiste",
  "Électricien",
  "Peintre",
  "Carreleur",
  "Menuisier",
  "Couvreur",
  "Maçon",
  "Serriste / Serrurier",
  "Paysagiste",
  "Autres métiers du BTP",
];

export function ForWho() {
  return (
    <section id="pour-qui" className="scroll-mt-20 border-b border-[hsl(var(--border))] bg-white py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Pensé pour les artisans indépendants</h2>
            <p className="mt-2 max-w-2xl text-[hsl(var(--muted-foreground))]">
              Vous travaillez seul ou en petite équipe ? Aos Renov est conçu pour simplifier votre quotidien.
            </p>
            <p className="mt-6 text-sm font-medium text-[hsl(var(--foreground))]">
              Que vous soyez :
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              {trades.map((trade) => (
                <span
                  key={trade}
                  className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--card))] px-4 py-2 text-sm shadow-sm"
                >
                  <Wrench className="h-4 w-4 text-[hsl(var(--accent))]" />
                  {trade}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm text-[hsl(var(--muted-foreground))]">
              Idéal pour les artisans qui gèrent eux-mêmes leurs devis, factures et planning.
            </p>
          </div>
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-[hsl(var(--border))] shadow-lg">
              <Image
                src="/artisan-tablette.png"
                alt="Artisan sur chantier utilisant une tablette pour gérer son activité"
                width={600}
                height={400}
                className="w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={90}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
