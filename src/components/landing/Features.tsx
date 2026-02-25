import {
  FileText,
  Send,
  Calendar,
  Camera,
  Receipt,
  Zap,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const features = [
  {
    icon: FileText,
    title: "Devis rapides et professionnels",
    description: "Réalisez vos devis en quelques minutes, sans Excel ni modèles compliqués.",
  },
  {
    icon: Zap,
    title: "Devis → Facture en 1 clic",
    description: "Transformez un devis accepté en facture en 1 clic, sans ressaisir les montants.",
  },
  {
    icon: Receipt,
    title: "Factures claires, paiements plus rapides",
    description: "Créez des factures conformes et suivez facilement celles qui restent à encaisser.",
  },
  {
    icon: Send,
    title: "Envoi et relances en 1 clic",
    description: "Envoyez vos devis et factures par email directement depuis l'app. Relancez en un bouton, quand vous le décidez.",
  },
  {
    icon: Calendar,
    title: "Planning clair, zéro papier",
    description: "Visualisez vos chantiers et interventions en un coup d'œil. Fini le planning dans la tête.",
  },
  {
    icon: Camera,
    title: "Estimation rapide via photo (option)",
    description: "Gagnez du temps en estimant certains chantiers à partir d'une photo.",
  },
];

export function Features() {
  return (
    <section id="fonctionnalites" className="scroll-mt-20 border-b border-[hsl(var(--border))] bg-white py-20 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold sm:text-3xl">Fonctionnalités</h2>
        <p className="mt-2 max-w-2xl text-[hsl(var(--muted-foreground))]">
          Tout ce dont vous avez besoin pour gérer votre activité au quotidien.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <Card key={title} className="transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[hsl(var(--accent))]/10 text-[hsl(var(--accent))]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">
                  {description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
