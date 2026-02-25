import { ClipboardList, Rocket, Headphones } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Vous créez votre compte",
    description: "Renseignez votre activité et vos informations en quelques minutes. Aucune configuration compliquée.",
  },
  {
    icon: Rocket,
    title: "Vous créez votre premier devis",
    description: "Ajoutez un client, vos lignes de prestation et générez votre devis. Envoi en 1 clic.",
  },
  {
    icon: Headphones,
    title: "Vous êtes opérationnel",
    description: "Planning clair, devis suivis, factures prêtes. Vous travaillez plus sereinement dès le premier jour.",
  },
];

export function HowItWorks() {
  return (
    <section id="comment-ca-marche" className="scroll-mt-20 border-b border-[hsl(var(--border))] bg-[#f5f7fa] py-20 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold sm:text-3xl">Démarrez en moins de 10 minutes</h2>
        <p className="mt-2 max-w-2xl text-[hsl(var(--muted-foreground))]">
          Simple, rapide, sans prise de tête.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map(({ icon: Icon, title, description }, index) => (
            <div key={title} className="relative">
              {index < steps.length - 1 && (
                <div className="absolute left-6 top-12 hidden h-0.5 w-[calc(100%-3rem)] bg-[hsl(var(--border))] md:block" aria-hidden />
              )}
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[hsl(var(--accent))] bg-[hsl(var(--background))] text-[hsl(var(--accent))] font-semibold">
                  {index + 1}
                </div>
                <div className="mt-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[hsl(var(--accent))]/10 text-[hsl(var(--accent))]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-3 font-semibold">{title}</h3>
                <p className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
