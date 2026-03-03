import { ClipboardList, Rocket, Headphones } from "lucide-react";
import { SectionWaveToWhite } from "./SectionWave";

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
    <section id="comment-ca-marche" className="relative scroll-mt-20 overflow-hidden border-b border-[hsl(var(--border))] py-20 md:py-24">
      <div className="te-bg-animated-light-alt" aria-hidden />
      <div className="absolute left-0 top-1/3 h-64 w-64 rounded-full bg-[hsl(var(--accent))]/5 blur-3xl animate-te-float-slow" aria-hidden style={{ animationDelay: "0s" }} />
      <div className="absolute bottom-1/4 right-0 h-48 w-48 rounded-full bg-[hsl(var(--accent))]/5 blur-3xl animate-te-float-slow" aria-hidden style={{ animationDelay: "3s" }} />

      <div className="container relative mx-auto px-4">
        <div className="mb-14 text-center animate-te-fade-up" style={{ animationDelay: "0.05s" }}>
          <span className="te-section-short-title mx-auto">Processus</span>
          <h2 className="te-section-title-lg mt-4 text-[hsl(var(--te-dark))]">
            Démarrez en moins de 10 minutes
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-[hsl(var(--te-body))]">
            Simple, rapide, sans prise de tête.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map(({ icon: Icon, title, description }, index) => (
            <div key={title} className="relative">
              <div
                className="te-card-hover animate-te-fade-up relative flex min-h-[280px] flex-col items-center justify-center rounded-2xl border border-[hsl(var(--border))] bg-white p-8 text-center shadow-[0px_0px_40px_0px_rgba(0,0,0,0.06)] transition-all duration-300 hover:border-[hsl(var(--accent))]/20 hover:shadow-xl"
                style={{ animationDelay: `${0.1 + index * 0.08}s` }}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[hsl(var(--accent))]/10 text-[hsl(var(--accent))]">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-lg font-medium text-[hsl(var(--te-dark))]">{title}</h3>
                <p className="mt-2 text-[hsl(var(--te-body))]">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <SectionWaveToWhite />
    </section>
  );
}
