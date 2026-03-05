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

const iconBg = ["bg-accent-hex/20 text-accent-hex", "bg-success/20 text-success", "bg-accent-warm/20 text-accent-warm"];

export function Trust() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-primary py-20 md:py-24">
      <div className="container relative mx-auto px-4">
        <div className="reveal text-center">
          <span className="te-section-short-title mx-auto">Confiance</span>
          <h2 className="te-section-title-lg mt-4 text-text-primary">
            Un outil <span className="text-accent-hex">sérieux</span> pour votre activité
          </h2>
        </div>
        <p className="reveal mx-auto mt-3 max-w-2xl text-center text-lg text-text-secondary">
          Données protégées, hébergement en France, équipe à vos côtés.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {trustItems.map(({ icon: Icon, title, description }, i) => (
            <Card
              key={title}
              className="reveal overflow-hidden border-white/10 bg-secondary/50 text-left backdrop-blur"
            >
              <CardHeader>
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl md:h-[48px] md:w-[48px] ${iconBg[i]}`}>
                  <Icon className="h-7 w-7 md:h-8 md:w-8" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-text-primary">{title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-text-secondary leading-relaxed">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="reveal mt-8 text-center text-sm font-medium text-text-secondary">
          🇫🇷 Hébergé en France · RGPD conforme · SSL inclus
        </p>
        <div className="reveal mt-6 rounded-2xl border border-white/20 bg-white/5 px-6 py-4 text-center backdrop-blur">
          <p className="text-base font-semibold text-text-primary">
            Aos Renov est conçu pour être <span className="text-accent-hex">simple</span>, <span className="text-success">fiable</span> et <span className="text-accent-warm">durable</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
