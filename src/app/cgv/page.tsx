import Link from "next/link";
import { LegalLayout } from "@/components/layout/LegalLayout";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Conditions générales de vente (CGV) — BTP Pilot",
  description:
    "Conditions générales de vente du service BTP Pilot : objet, prix, durée, résiliation, responsabilité, support et droit applicable.",
};

const sommaire = [
  { id: "objet", label: "Objet / champ d'application" },
  { id: "definitions", label: "Définitions" },
  { id: "description-service", label: "Description du service" },
  { id: "acces-compte", label: "Accès au service / création de compte" },
  { id: "essai-demo", label: "Essai / démo" },
  { id: "prix", label: "Prix et conditions tarifaires" },
  { id: "duree-resiliation", label: "Durée / renouvellement / résiliation" },
  { id: "retard-penalites", label: "Retard de paiement / pénalités / suspension" },
  { id: "obligations-client", label: "Obligations du client" },
  { id: "propriete-intellectuelle", label: "Propriété intellectuelle" },
  { id: "donnees-confidentialite", label: "Données / confidentialité / RGPD" },
  { id: "disponibilite-maintenance", label: "Disponibilité / maintenance / responsabilité" },
  { id: "securite-sauvegardes", label: "Sécurité / sauvegardes" },
  { id: "reversibilite-export", label: "Réversibilité / export des données" },
  { id: "support", label: "Support" },
  { id: "sous-traitants", label: "Sous-traitants / prestataires" },
  { id: "force-majeure", label: "Force majeure" },
  { id: "modification-cgv", label: "Modification des CGV" },
  { id: "droit-applicable", label: "Droit applicable / juridiction compétente" },
  { id: "contact", label: "Contact" },
];

export default function CgvPage() {
  return (
    <LegalLayout
      title="Conditions Générales de Vente (CGV)"
      description="Version en vigueur au [date]. Les présentes conditions s'appliquent aux offres et contrats conclus avec [Raison sociale] pour l'utilisation du service BTP Pilot."
    >
      {/* Sommaire */}
      <nav
        id="sommaire"
        className="rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--muted))]/30 p-6"
        aria-label="Sommaire"
      >
        <h2 className="text-lg font-semibold text-[hsl(var(--foreground))] mb-4">
          Sommaire
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          {sommaire.map((item, index) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="text-[hsl(var(--accent))] underline hover:no-underline"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* 1. Objet */}
      <section id="objet" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] border-b border-[hsl(var(--border))] pb-2">
          1. Objet / champ d'application
        </h2>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          Les présentes Conditions Générales de Vente (CGV) ont pour objet de définir les conditions dans lesquelles 
          [Raison sociale], dont le siège est situé au [Adresse], immatriculée au RCS [RCS], SIRET [SIRET], 
          numéro de TVA [TVA] (ci-après « le Prestataire »), propose et fournit le service BTP Pilot aux clients 
          professionnels (ci-après « le Client »). Le Client agit en tant que professionnel dans le cadre de son 
          activité. Les dispositions relatives aux consommateurs (Code de la consommation) ne s'appliquent pas au 
          présent contrat, sauf disposition impérative contraire.
        </p>
      </section>

      {/* 2. Définitions */}
      <section id="definitions" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] border-b border-[hsl(var(--border))] pb-2">
          2. Définitions
        </h2>
        <ul className="list-none space-y-2 text-[hsl(var(--foreground))]">
          <li><strong>Service :</strong> l'application BTP Pilot, accessible notamment à l'adresse [URL du site], et les fonctionnalités associées.</li>
          <li><strong>Compte :</strong> l'espace utilisateur créé par le Client pour accéder au Service.</li>
          <li><strong>Contenu :</strong> les données, devis, factures et informations saisies ou générées par le Client dans le Service.</li>
          <li><strong>Abonnement :</strong> la souscription au Service pour une durée et selon des conditions tarifaires définies.</li>
        </ul>
      </section>

      {/* 3. Description du service */}
      <section id="description-service" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] border-b border-[hsl(var(--border))] pb-2">
          3. Description du service
        </h2>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          BTP Pilot est un outil de gestion destiné aux professionnels du BTP et aux artisans. Il permet notamment 
          d'établir des devis et des factures, de gérer un planning de chantiers, d'envoyer des documents par email 
          aux clients, d'effectuer des relances manuelles (via bouton) et de convertir un devis accepté en facture 
          en un clic sans ressaisie. Selon l'offre souscrite, une fonctionnalité d'estimation via photo peut être 
          proposée. L'ensemble des fonctionnalités est décrit sur le site [URL du site] et peut évoluer ; le 
          Prestataire s'efforce d'en informer le Client dans la limite du raisonnable.
        </p>
      </section>

      {/* 4. Accès au service / création de compte */}
      <section id="acces-compte" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] border-b border-[hsl(var(--border))] pb-2">
          4. Accès au service / création de compte
        </h2>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          L'accès au Service est subordonné à la création d'un Compte et à l'acceptation des présentes CGV. 
          Le Client fournit des informations exactes et à jour. L'accès se fait par identifiants confidentiels ; 
          le Client est responsable de leur conservation et de l'usage qui en est fait. Toute utilisation du Compte 
          est réputée effectuée par le Client sauf preuve contraire.
        </p>
      </section>

      {/* 5. Essai / démo */}
      <section id="essai-demo" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] border-b border-[hsl(var(--border))] pb-2">
          5. Essai / démo
        </h2>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          Aucun essai gratuit en libre accès n'est proposé. La découverte du Service s'effectue sur démo organisée 
          avec le Prestataire (présentation, démonstration, éventuelle période d'évaluation selon l'offre). 
          Les conditions de la démo et d'éventuelle période d'essai sont précisées au cas par cas.
        </p>
      </section>

      {/* 6. Prix et conditions tarifaires */}
      <section id="prix" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] border-b border-[hsl(var(--border))] pb-2">
          6. Prix et conditions tarifaires
        </h2>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          Les prix sont indiqués en euros HT sauf mention contraire. La TVA applicable est celle en vigueur.
        </p>
        <ul className="list-none space-y-2 text-[hsl(var(--foreground))]">
          <li><strong>Frais de mise en service / setup :</strong> [2 500 €] (HT ou TTC selon facturation). Ce forfait comprend le paramétrage du compte, l'accompagnement à la prise en main et, le cas échéant, l'import ou l'initialisation des données selon les modalités convenues.</li>
          <li><strong>Abonnement mensuel :</strong> [200 € / mois] (HT ou TTC selon facturation). L'abonnement comprend l'accès au Service, les mises à jour dans le cadre de la version souscrite, le support selon le niveau d'offre et les sauvegardes réalisées par le Prestataire dans les conditions prévues aux présentes.</li>
        </ul>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          Modalités de paiement : [prélèvement automatique / carte bancaire / virement – à préciser]. Les factures 
          sont adressées par [email / courrier – placeholder]. Tout changement de tarif est soumis aux dispositions 
          de la section « Modification des CGV ».
        </p>
      </section>

      {/* 7. Durée / renouvellement / résiliation */}
      <section id="duree-resiliation" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] border-b border-[hsl(var(--border))] pb-2">
          7. Durée / renouvellement / résiliation
        </h2>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          L'abonnement est conclu pour une durée initiale puis reconduit tacitement par période [mensuelle – placeholder] 
          à échéance, sauf résiliation par l'une des parties. Le Client peut résilier à tout moment en respectant 
          un préavis de [X jours / 1 mois – placeholder] avant la fin de la période en cours. La résiliation 
          prend effet à l'expiration de cette période. Le Prestataire peut résilier dans les conditions prévues 
          aux présentes (impayés, manquement grave, etc.). En cas de résiliation, l'accès au Service cesse à la 
          date d'effet ; l'export des données reste possible dans les conditions de la section « Réversibilité / export ».
        </p>
      </section>

      {/* 8. Retard de paiement / pénalités / suspension */}
      <section id="retard-penalites" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] border-b border-[hsl(var(--border))] pb-2">
          8. Retard de paiement / pénalités / suspension d'accès
        </h2>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          En cas de retard de paiement, des pénalités de retard peuvent être appliquées au taux [légal – placeholder] 
          et une indemnité forfaitaire pour frais de recouvrement peut être réclamée. Le Prestataire se réserve le 
          droit de suspendre l'accès au Service après mise en demeure restée sans effet, sans préjudice des 
          dommages et intérêts éventuels. La suspension n'emporte pas résiliation du contrat ; le Client reste 
          redevable des sommes dues.
        </p>
      </section>

      {/* 9. Obligations du client */}
      <section id="obligations-client" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] border-b border-[hsl(var(--border))] pb-2">
          9. Obligations du client
        </h2>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          Le Client s'engage à fournir des informations exactes et à les maintenir à jour. Il utilise le Service 
          de manière conforme à son objet, aux lois et règlements en vigueur et aux présentes CGV. Il est 
          responsable de la confidentialité de ses identifiants et de toute activité réalisée depuis son Compte. 
          Il procède, dans la mesure de ses besoins, aux sauvegardes ou exports de ses données qu'il juge 
          nécessaires. Toute utilisation illicite ou abusive peut entraîner la suspension ou la résiliation 
          du Service.
        </p>
      </section>

      {/* 10. Propriété intellectuelle */}
      <section id="propriete-intellectuelle" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] border-b border-[hsl(var(--border))] pb-2">
          10. Propriété intellectuelle
        </h2>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          Le Service, le logiciel, la marque BTP Pilot et les contenus fournis par le Prestataire (documentation, 
          interfaces, etc.) restent la propriété exclusive du Prestataire ou de ses ayants droit. Le Client ne 
          dispose que d'un droit d'usage du Service dans le cadre de son Abonnement. Les Contenus créés par le 
          Client lui appartiennent ; il concède au Prestataire les droits nécessaires à l'hébergement, à la 
          sauvegarde et à la fourniture du Service. Aucune cession de droits de propriété intellectuelle 
          n'est opérée au profit du Client au-delà de ce qui est strictement nécessaire à l'utilisation du Service.
        </p>
      </section>

      {/* 11. Données / confidentialité / RGPD */}
      <section id="donnees-confidentialite" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] border-b border-[hsl(var(--border))] pb-2">
          11. Données / confidentialité / RGPD
        </h2>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          Le traitement des données personnelles dans le cadre du Service est décrit dans la{" "}
          <Link href="/confidentialite" className="text-[hsl(var(--accent))] underline hover:no-underline">
            politique de confidentialité
          </Link>
          , qui forme partie intégrante des présentes CGV. Le Client s'engage à respecter le droit applicable 
          en matière de protection des données pour les données qu'il traite via le Service.
        </p>
      </section>

      {/* 12. Disponibilité / maintenance / limitation de responsabilité */}
      <section id="disponibilite-maintenance" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] border-b border-[hsl(var(--border))] pb-2">
          12. Disponibilité / maintenance / limitation de responsabilité
        </h2>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          Le Prestataire s'efforce d'assurer la disponibilité du Service dans la limite d'une obligation de 
          moyens (meilleur effort). Il ne garantit pas une disponibilité ininterrompue ni un résultat 
          spécifique. Des opérations de maintenance peuvent entraîner des indisponibilités temporaires ; 
          le Prestataire en informe le Client lorsque cela est raisonnablement possible. Dans les limites 
          autorisées par la loi, la responsabilité du Prestataire est limitée aux dommages directs et 
          prévisibles ; elle ne pourra excéder le montant des sommes effectivement versées par le Client 
          au titre des [X] derniers mois (ou selon plafond à définir – placeholder).
        </p>
      </section>

      {/* 13. Sécurité / sauvegardes */}
      <section id="securite-sauvegardes" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] border-b border-[hsl(var(--border))] pb-2">
          13. Sécurité / sauvegardes
        </h2>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          Le Prestataire met en œuvre des mesures techniques et organisationnelles adaptées pour assurer la 
          sécurité des données et la confidentialité. Des sauvegardes régulières sont réalisées ; toutefois, 
          aucun engagement de « zéro perte » ou de continuité absolue n'est garanti. Le Client est invité à 
          procéder à des exports ou sauvegardes complémentaires selon ses besoins.
        </p>
      </section>

      {/* 14. Réversibilité / export des données */}
      <section id="reversibilite-export" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] border-b border-[hsl(var(--border))] pb-2">
          14. Réversibilité / export des données
        </h2>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          À la demande du Client, et dans un délai raisonnable, le Prestataire met à disposition les données 
          du Client dans un format [exportable – placeholder, ex. CSV, PDF selon les types de données]. 
          Les modalités précises (format, délai, coût éventuel) sont [définies sur demande / précisées dans 
          l'offre – placeholder]. À l'issue de la relation contractuelle, le Client peut demander la remise 
          de ses données dans les conditions prévues ; au-delà d'un délai de [X jours – placeholder] après 
          la résiliation, le Prestataire peut procéder à l'effacement des données conformément à sa politique 
          de conservation.
        </p>
      </section>

      {/* 15. Support */}
      <section id="support" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] border-b border-[hsl(var(--border))] pb-2">
          15. Support
        </h2>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          Le support est fourni selon l'offre souscrite. Canaux : [email / téléphone / ticket – placeholder]. 
          Horaires : [jours et créneaux – placeholder]. Les niveaux de support (réponse standard, prioritaire, 
          etc.) sont décrits dans l'offre ; l'offre Pro peut inclure un support prioritaire. Le Prestataire 
          s'efforce de répondre dans des délais raisonnables sans garantir un délai fixe.
        </p>
      </section>

      {/* 16. Sous-traitants / prestataires */}
      <section id="sous-traitants" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] border-b border-[hsl(var(--border))] pb-2">
          16. Sous-traitants / prestataires
        </h2>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          Le Prestataire peut faire appel à des sous-traitants ou prestataires (hébergement [Nom de l'hébergeur], 
          outils techniques, etc.) pour la fourniture du Service. Il s'assure que ceux-ci respectent des 
          obligations compatibles avec les présentes CGV et le droit applicable en matière de données 
          personnelles.
        </p>
      </section>

      {/* 17. Force majeure */}
      <section id="force-majeure" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] border-b border-[hsl(var(--border))] pb-2">
          17. Force majeure
        </h2>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          Aucune des parties ne pourra être tenue responsable en cas d'inexécution imputable à un cas de 
          force majeure (événement échappant au contrôle raisonnable, imprévisible et irrésistible). La partie 
          concernée en informe l'autre dans les meilleurs délais. En cas de persistance au-delà d'une durée 
          [à définir – placeholder], chaque partie pourra résilier le contrat sans indemnité.
        </p>
      </section>

      {/* 18. Modification des CGV */}
      <section id="modification-cgv" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] border-b border-[hsl(var(--border))] pb-2">
          18. Modification des CGV
        </h2>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          Le Prestataire peut modifier les présentes CGV. Les modifications sont notifiées au Client par 
          [email / notification dans le Service – placeholder] au moins [X jours – placeholder] avant leur 
          entrée en vigueur. En cas de désaccord, le Client peut résilier le contrat avant la date d'effet ; 
          à défaut, les nouvelles conditions s'appliquent. Les conditions tarifaires peuvent être modifiées 
          dans les mêmes conditions de notification ; en cas d'augmentation, le Client dispose du droit de 
          résilier sans pénalité avant la prise d'effet.
        </p>
      </section>

      {/* 19. Droit applicable / juridiction compétente */}
      <section id="droit-applicable" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] border-b border-[hsl(var(--border))] pb-2">
          19. Droit applicable / juridiction compétente
        </h2>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          Les présentes CGV sont régies par le droit français. En cas de litige, et après éventuelle tentative 
          de résolution amiable, les tribunaux du ressort de [Ville] seront seuls compétents.
        </p>
      </section>

      {/* 20. Contact */}
      <section id="contact" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] border-b border-[hsl(var(--border))] pb-2">
          20. Contact
        </h2>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          Pour toute question relative aux présentes CGV ou au Service : [Raison sociale], [Adresse], 
          email [Email], téléphone [Téléphone]. Responsable : [Nom du responsable]. Vous pouvez également 
          utiliser le formulaire de contact du site.
        </p>
      </section>

      {/* Bouton démo */}
      <div className="flex justify-center pt-6">
        <Button asChild size="lg">
          <Link href="/contact">Demander une démo</Link>
        </Button>
      </div>
    </LegalLayout>
  );
}
