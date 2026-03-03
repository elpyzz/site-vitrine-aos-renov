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

function StepShape() {
  return (
    <div className="absolute -right-2 -top-2 h-20 w-20 opacity-20" aria-hidden>
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-[hsl(var(--accent))]">
        <circle cx="40" cy="40" r="38" stroke="currentColor" strokeWidth="2" />
        <circle cx="40" cy="40" r="30" stroke="currentColor" strokeWidth="1" />
      </svg>
    </div>
  );
}

export function HowItWorks() {
  return (
    <section id="comment-ca-marche" className="relative scroll-mt-20 overflow-hidden border-b border-[hsl(var(--border))] bg-gradient-to-b from-[#f5f7fa] to-[#eef4f9] py-20 md:py-24">
      <div className="absolute left-0 top-1/3 h-64 w-64 rounded-full bg-[hsl(var(--accent))]/5 blur-3xl" aria-hidden />
      <div className="absolute bottom-1/4 right-0 h-48 w-48 rounded-full bg-[hsl(var(--accent))]/5 blur-3xl" aria-hidden />

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
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-16 hidden h-0.5 w-full max-w-[80%] -translate-x-1/2 bg-[hsl(var(--border))] md:block" aria-hidden />
              )}
              <div
                className="te-card-hover animate-te-fade-up relative flex flex-col items-center rounded-2xl border border-[hsl(var(--border))] bg-white p-8 text-center shadow-[0px_0px_40px_0px_rgba(0,0,0,0.06)] transition-all duration-300 hover:border-[hsl(var(--accent))]/20 hover:shadow-xl"
                style={{ animationDelay: `${0.1 + index * 0.08}s` }}
              >
                <div className="relative mb-4 flex items-center justify-center">
                  <StepShape />
                  <span className="te-step-number relative z-10 font-bold tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
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
