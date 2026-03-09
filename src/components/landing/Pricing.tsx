import { Check } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

const plans = [
  {
    name: "Starter",
    tagline: "L'essentiel",
    description: "Pour démarrer : devis, factures, envoi en 1 clic.",
    features: ["Devis illimités", "Factures", "Envoi email 1 clic", "Signature électronique clients incluse (SignWell)", "Support email"],
    highlighted: false,
  },
  {
    name: "Pro",
    tagline: "Le plus choisi",
    description: "Avec planning chantiers et options avancées.",
    features: [
      "Tout Starter",
      "Planning chantiers",
      "Signature électronique clients incluse (SignWell)",
      "Estimation via photo (option)",
      "Support prioritaire",
    ],
    highlighted: true,
  },
];

export function Pricing() {
  return (
    <section className="relative overflow-hidden border-b border-primary/10 bg-bg-light py-20 md:py-24">
      <div className="container relative mx-auto px-4">
        <div className="reveal text-center">
          <span className="te-section-short-title mx-auto">Offres</span>
          <h2 className="te-section-title-lg mt-4 text-text-primary-dark">Tarifs</h2>
        </div>
        <p className="reveal mx-auto mt-3 max-w-2xl text-center text-text-secondary">
          Pas d&apos;engagement. Une offre adaptée à votre activité.
        </p>
        <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
          {plans.map((plan, i) => (
            <Card
              key={plan.name}
              className={`reveal overflow-hidden transition-all duration-300 hover:shadow-xl ${
                plan.highlighted
                  ? "border-accent-hex/50 bg-gradient-to-b from-primary to-secondary text-text-primary shadow-xl"
                  : "border-primary/10 bg-white"
              }`}
            >
              {plan.highlighted && (
                <div className="bg-accent-warm px-4 py-2 text-center text-sm font-bold text-primary">
                  Le plus choisi
                </div>
              )}
              <CardHeader>
                <h3 className={`text-xl font-bold ${plan.highlighted ? "text-white" : ""}`}>
                  {plan.name} — {plan.tagline}
                </h3>
                <p className={`text-sm opacity-70 ${plan.highlighted ? "text-white" : ""}`}>
                  {plan.description}
                </p>
              </CardHeader>
              <CardContent className={plan.highlighted ? "text-white" : ""}>
                <ul className="space-y-2">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 shrink-0 text-success" />
                      {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className={`flex flex-col gap-2 ${plan.highlighted ? "text-white" : ""}`}>
                <Button asChild className="w-full" variant={plan.highlighted ? "default" : "outline"}>
                  <Link href="/contact" className={plan.highlighted ? "bg-accent-hex hover:bg-accent-hex/90" : ""}>
                    Commencer maintenant
                  </Link>
                </Button>
                <p className="text-center text-xs opacity-70">
                  🔒 Paiement sécurisé · Pas d&apos;engagement · Remboursé sous 14 jours si non satisfait
                </p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
