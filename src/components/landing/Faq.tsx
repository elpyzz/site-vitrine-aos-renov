import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

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
    <section id="faq" className="scroll-mt-20 border-b border-[hsl(var(--border))] bg-white py-20 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold sm:text-3xl text-center">FAQ</h2>
        <p className="mt-2 max-w-2xl mx-auto text-center text-[hsl(var(--muted-foreground))]">
          Réponses aux questions les plus fréquentes.
        </p>
        <Accordion type="single" collapsible className="mt-10 max-w-3xl mx-auto">
          {faqItems.map(({ q, a }) => (
            <AccordionItem key={q} value={q}>
              <AccordionTrigger>{q}</AccordionTrigger>
              <AccordionContent>{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-10 max-w-3xl mx-auto rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--muted))]/30 p-6 text-center">
          <p className="text-[hsl(var(--foreground))] font-medium">
            Une question spécifique ? Demandez une démo, on vous répond en direct.
          </p>
          <Button asChild className="mt-4">
            <Link href="/contact">Demander une démo</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
