import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    q: "Je travaille seul ou en petite équipe, est-ce fait pour moi ?",
    a: "Oui. Aos Renov est pensé pour les artisans indépendants et les petites structures. Devis, factures et planning : tout est prévu pour gérer votre activité au quotidien sans usine à gaz.",
  },
  {
    q: "En combien de temps je peux faire mon premier devis ?",
    a: "En moins de 10 minutes vous pouvez avoir un devis prêt et l'envoyer au client en 1 clic. Pas de formation longue : on vous accompagne au lancement si besoin.",
  },
  {
    q: "Est-ce que le logiciel est compliqué à utiliser ?",
    a: "Non. Aos Renov est conçu pour être simple : premier devis en moins de 10 minutes, pas de formation longue. On vous accompagne au lancement si besoin.",
  },
  {
    q: "Mes données et celles de mes clients sont-elles en sécurité ?",
    a: "Oui. Hébergement en France, mesures de sécurité et sauvegardes régulières. Vos informations restent protégées.",
  },
  {
    q: "Comment j'envoie un devis ou une facture à mon client ?",
    a: "Une fois le devis ou la facture créé, un bouton « Envoyer au client » envoie un email avec le PDF en pièce jointe. Votre client reçoit le document directement.",
  },
  {
    q: "Je suis souvent sur le chantier, je peux utiliser l'outil sur mon téléphone ?",
    a: "Oui. Aos Renov est accessible depuis smartphone ou tablette : consulter votre planning, envoyer un devis ou une relance en déplacement, c'est possible.",
  },
  {
    q: "Combien ça me coûtera réellement ?",
    a: "Plusieurs formules existent selon vos besoins. Consultez la section Tarifs ou demandez une démo pour une offre adaptée à votre activité.",
  },
  {
    q: "J'ai besoin d'aide pour démarrer, c'est prévu ?",
    a: "Oui. Un support humain vous accompagne au lancement et reste disponible en cas de question. Pas seulement un chatbot.",
  },
  {
    q: "Puis-je arrêter quand je veux ?",
    a: "Oui. Selon l'offre, vous pouvez résilier selon les conditions prévues. Demandez une démo pour connaître les modalités.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="relative scroll-mt-20 overflow-hidden border-b border-[hsl(var(--border))] py-20 md:py-24">
      <div className="te-bg-animated-white-tint" aria-hidden />
      <div className="absolute left-1/2 top-0 h-px w-full max-w-2xl -translate-x-1/2 bg-gradient-to-r from-transparent via-[hsl(var(--accent))]/30 to-transparent" aria-hidden />
      <div className="container relative mx-auto px-4">
        <div className="text-center animate-te-fade-up" style={{ animationDelay: "0.05s" }}>
          <span className="te-section-short-title mx-auto">Questions</span>
          <h2 className="te-section-title-lg mt-4 text-[hsl(var(--te-dark))]">FAQ</h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-[hsl(var(--te-body))]">
            Réponses aux questions les plus fréquentes.
          </p>
        </div>
        <Accordion type="single" collapsible className="mx-auto mt-10 max-w-3xl animate-te-fade-up" style={{ animationDelay: "0.1s" }}>
          {faqItems.map(({ q, a }) => (
            <AccordionItem key={q} value={q}>
              <AccordionTrigger>{q}</AccordionTrigger>
              <AccordionContent>{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mx-auto mt-10 max-w-3xl animate-te-fade-up rounded-xl border border-[hsl(var(--accent))]/20 bg-white/80 p-6 text-center shadow-sm" style={{ animationDelay: "0.15s" }}>
          <p className="text-[hsl(var(--te-dark))] font-medium">
            Une question spécifique ? Demandez une démo, on vous répond en direct.
          </p>
          <Link href="/contact" className="te-theme-btn mt-4 inline-flex">
            Demander une démo
          </Link>
        </div>
      </div>
    </section>
  );
}
