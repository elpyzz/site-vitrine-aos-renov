import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/content/testimonials";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${count} sur 5 étoiles`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < count
              ? "fill-[hsl(var(--accent))] text-[hsl(var(--accent))]"
              : "fill-[hsl(var(--muted))] text-[hsl(var(--muted))]"
          }`}
          aria-hidden
        />
      ))}
    </div>
  );
}

const whyBullets = [
  "Moins d’administratif",
  "Moins d’erreurs",
  "Plus de visibilité sur les chantiers",
  "Moins de stress",
];

export function Testimonials() {
  return (
    <section id="avis" className="scroll-mt-20 border-b border-[hsl(var(--border))] bg-white py-20 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold sm:text-3xl">Avis d’artisans</h2>
        <p className="mt-3 text-lg font-medium text-[hsl(var(--foreground))]">
          Pourquoi les artisans passent à Aos Renov ?
        </p>
        <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-sm text-[hsl(var(--muted-foreground))] sm:gap-x-8">
          {whyBullets.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--accent))]" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap items-center gap-3 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card))] px-4 py-3 w-fit">
          <Stars count={5} />
          <span className="text-sm font-medium text-[hsl(var(--foreground))]">
            4,9/5 — Version de lancement
          </span>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map(({ id, name, job, city, rating, text }) => (
            <Card key={id} className="transition-shadow hover:shadow-md">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-medium text-[hsl(var(--foreground))]">
                    {name}, {job}, {city}
                  </p>
                  <Stars count={rating} />
                </div>
                <p className="mt-3 text-sm text-[hsl(var(--muted-foreground))] line-clamp-2">
                  {text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-[hsl(var(--muted-foreground))]">
          Témoignages en cours de collecte — demandez une démo pour voir l’outil.
        </p>
      </div>
    </section>
  );
}
