import { Check } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

const plans = [
  {
    name: "Starter — L'essentiel",
    price: "Sur devis",
    description: "Pour démarrer : devis, factures, envoi en 1 clic.",
    features: ["Devis illimités", "Factures", "Envoi email 1 clic", "Support email"],
  },
  {
    name: "Pro — Pour aller plus loin",
    price: "Sur devis",
    description: "Avec planning chantiers et options avancées.",
    features: [
      "Tout Starter",
      "Planning chantiers",
      "Estimation via photo (option)",
      "Support prioritaire",
    ],
    highlighted: true,
  },
];

export function Pricing() {
  return (
    <section className="relative overflow-hidden border-b border-[hsl(var(--border))] py-20 md:py-24">
      <div className="te-bg-animated-light" aria-hidden />
      <div className="absolute right-0 top-1/4 h-64 w-64 rounded-full bg-[hsl(var(--accent))]/6 blur-3xl animate-te-float-slow" aria-hidden style={{ animationDelay: "0.5s" }} />
      <div className="container relative mx-auto px-4">
        <div className="animate-te-fade-up" style={{ animationDelay: "0.05s" }}>
          <span className="te-section-short-title">Offres</span>
          <h2 className="te-section-title-lg mt-4 text-[hsl(var(--te-dark))]">Tarifs</h2>
        </div>
        <p className="mt-3 max-w-2xl animate-te-fade-up text-[hsl(var(--te-body))]" style={{ animationDelay: "0.1s" }}>
          Pas d'engagement. Pas de surprise. Une offre adaptée à votre activité.
        </p>
        <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
          {plans.map((plan, i) => (
            <Card
              key={plan.name}
              className={`animate-te-fade-up transition-all duration-300 hover:shadow-lg ${plan.highlighted ? "border-[hsl(var(--accent))] bg-[#F6FBFF]/80 shadow-lg" : ""}`}
              style={{ animationDelay: `${0.15 + i * 0.08}s` }}
            >
              {plan.highlighted && (
                <div className="rounded-t-lg bg-[hsl(var(--accent))] px-4 py-1.5 text-center text-sm font-medium text-white">
                  Le plus choisi
                </div>
              )}
              <CardHeader>
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p className="text-2xl font-bold text-[hsl(var(--accent))]">{plan.price}</p>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 shrink-0 text-[hsl(var(--accent))]" />
                      {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex flex-col gap-2">
                <Button asChild className="w-full" variant={plan.highlighted ? "default" : "outline"}>
                  <Link href="/contact">Demander une démo</Link>
                </Button>
                <p className="text-center text-xs text-[hsl(var(--muted-foreground))]">
                  Démo personnalisée gratuite — réponse sous 24h
                </p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
