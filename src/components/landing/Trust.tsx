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
    <section className="relative overflow-hidden border-b border-[hsl(var(--border))] bg-gradient-to-b from-[#F6FBFF]/40 to-white py-20 md:py-24">
      <div className="absolute left-0 bottom-1/4 h-48 w-48 rounded-full bg-[hsl(var(--accent))]/5 blur-3xl" aria-hidden />
      <div className="container relative mx-auto px-4">
        <div className="text-center animate-te-fade-up" style={{ animationDelay: "0.05s" }}>
          <span className="te-section-short-title mx-auto">Confiance</span>
          <h2 className="te-section-title-lg mt-4 text-[hsl(var(--te-dark))]">Confiance</h2>
        </div>
        <p className="mx-auto mt-3 max-w-2xl text-center text-[hsl(var(--te-body))] animate-te-fade-up" style={{ animationDelay: "0.1s" }}>
          Un outil sérieux pour votre activité.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {trustItems.map(({ icon: Icon, title, description }, i) => (
            <Card key={title} className="animate-te-fade-up text-center shadow-sm transition-all duration-300 hover:shadow-lg" style={{ animationDelay: `${0.15 + i * 0.06}s` }}>
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
