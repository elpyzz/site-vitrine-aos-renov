import { Shield, Database, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const trustItems = [
  {
    icon: Shield,
    title: "Sécurité",
    description: "Vos devis et factures sont protégés et hébergés en France. Vos données restent confidentielles.",
  },
  {
    icon: Database,
    title: "Sauvegardes",
    description: "Vos devis, factures et planning sont sauvegardés automatiquement. Vous ne perdez jamais votre travail.",
  },
  {
    icon: MessageCircle,
    title: "Support humain",
    description: "Une vraie équipe vous accompagne. Pas seulement un chatbot.",
  },
];

export function Trust() {
  return (
    <section className="border-b border-[hsl(var(--border))] bg-white py-20 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold sm:text-3xl text-center">Confiance</h2>
        <p className="mt-2 max-w-2xl mx-auto text-center text-[hsl(var(--muted-foreground))]">
          Un outil sérieux pour votre activité.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {trustItems.map(({ icon: Icon, title, description }) => (
            <Card key={title} className="text-center transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(var(--accent))]/10 text-[hsl(var(--accent))]">
                  <Icon className="h-6 w-6" />
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
        <p className="mt-10 text-center text-sm font-medium text-[hsl(var(--foreground))]">
          Aos Renov est conçu pour être simple, fiable et durable.
        </p>
      </div>
    </section>
  );
}
