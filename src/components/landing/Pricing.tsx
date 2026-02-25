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
    <section className="border-b border-[hsl(var(--border))] bg-[#f5f7fa] py-20 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold sm:text-3xl">Tarifs</h2>
        <p className="mt-2 max-w-2xl text-[hsl(var(--muted-foreground))]">
          Pas d'engagement. Pas de surprise. Une offre adaptée à votre activité.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={plan.highlighted ? "border-[hsl(var(--accent))] shadow-md bg-blue-50/60" : ""}
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
