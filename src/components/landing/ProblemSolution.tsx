import Link from "next/link";
import { X, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
    <section className="border-b border-[hsl(var(--border))] bg-[#f5f7fa] py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Card className="border-red-300 bg-red-50/80 dark:border-red-800 dark:bg-red-950/40">
            <CardContent className="pt-6">
              <div className="flex items-center gap-2">
                <X className="h-5 w-5 shrink-0 text-red-700 dark:text-red-400" />
                <h3 className="text-lg font-semibold text-red-800 dark:text-red-300">
                  Votre quotidien aujourd'hui
                </h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-red-900/90 dark:text-red-200/90">
                {before.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-red-500 dark:text-red-400">•</span> {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="border-green-300 bg-green-50/80 dark:border-green-800 dark:bg-green-950/40">
            <CardContent className="pt-6">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 shrink-0 text-green-700 dark:text-green-400" />
                <h3 className="text-lg font-semibold text-green-800 dark:text-green-300">
                  Votre quotidien avec BTP Pilot
                </h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-green-900/90 dark:text-green-200/90">
                {after.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-green-600 dark:text-green-400">•</span> {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        <p className="mt-8 text-center text-base font-medium text-[hsl(var(--foreground))] sm:text-lg">
          Moins d’administratif. Plus de chantier. Plus de sérénité.
        </p>
        <div className="mt-6 flex justify-center">
          <Button asChild size="lg">
            <Link href="#comment-ca-marche">Voir comment ça fonctionne</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
