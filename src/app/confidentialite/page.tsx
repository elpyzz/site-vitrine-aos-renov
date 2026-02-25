import Link from "next/link";
import { LegalLayout } from "@/components/layout/LegalLayout";

export const metadata = {
  title: "Politique de confidentialité — BTP Pilot",
  description:
    "Politique de confidentialité et protection des données personnelles (RGPD) du service BTP Pilot : données collectées, finalités, droits, cookies et contact.",
};

export default function ConfidentialitePage() {
  return (
    <LegalLayout
      title="Politique de confidentialité"
      description="Dernière mise à jour : [DATE]. Cette politique décrit comment [Nom société] traite les données personnelles dans le cadre du service BTP Pilot."
    >
      {/* Encadré engagement */}
      <div
        className="rounded-lg border-2 border-[hsl(var(--accent))]/30 bg-[hsl(var(--accent))]/5 p-6 text-center"
        role="note"
      >
        <p className="text-lg font-medium text-[hsl(var(--foreground))]">
          Vos données ne sont jamais revendues.
        </p>
      </div>

      {/* 1. Introduction */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] border-b border-[hsl(var(--border))] pb-2">
          1. Introduction
        </h2>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          [Nom société], [Forme juridique], dont le siège est situé au [Adresse], édite le service BTP Pilot, 
          outil de gestion destiné aux professionnels du BTP (devis, factures, planning chantiers, envoi par email, 
          relances manuelles, conversion devis → facture en un clic). Nous nous engageons à protéger les données 
          personnelles des utilisateurs et des clients dans le respect du Règlement général sur la protection des 
          données (RGPD) et de la loi « Informatique et Libertés ». La présente politique peut être complétée par 
          des informations spécifiques communiquées au moment de la collecte. Nous nous efforçons de maintenir cette 
          politique à jour ; aucune garantie de conformité absolue ne peut toutefois être donnée au-delà des 
          obligations légales.
        </p>
      </section>

      {/* 2. Données collectées */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] border-b border-[hsl(var(--border))] pb-2">
          2. Données collectées
        </h2>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          Nous pouvons collecter les catégories de données suivantes, dans la mesure nécessaire à nos finalités :
        </p>
        <h3 className="text-lg font-medium text-[hsl(var(--foreground))] mt-4">
          2.1 Données d'identification
        </h3>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          Nom, prénom, adresse email, numéro de téléphone, et le cas échéant adresse postale, collectés via le 
          formulaire de contact, les demandes de démo ou la création et la gestion du compte client.
        </p>
        <h3 className="text-lg font-medium text-[hsl(var(--foreground))] mt-4">
          2.2 Données professionnelles
        </h3>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          Raison sociale ou nom de l'entreprise, activité, secteur (BTP, artisanat, etc.), SIRET et informations 
          nécessaires à la facturation et à la relation contractuelle.
        </p>
        <h3 className="text-lg font-medium text-[hsl(var(--foreground))] mt-4">
          2.3 Données générées dans le logiciel
        </h3>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          Données saisies ou générées dans le cadre de l'utilisation du service : devis, factures, planning des 
          chantiers, données relatives aux clients des utilisateurs (nom, coordonnées, etc.) dans la limite de ce 
          que l'utilisateur renseigne. Ces données sont traitées pour la fourniture du service et l'hébergement des 
          contenus.
        </p>
        <h3 className="text-lg font-medium text-[hsl(var(--foreground))] mt-4">
          2.4 Données de navigation
        </h3>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          Données techniques (adresse IP, type de navigateur, pages visitées, horodatage) et, le cas échéant, 
          cookies ou traceurs pour le fonctionnement du site, la mesure d'audience ou l'amélioration du service 
          (voir section « Cookies »).
        </p>
      </section>

      {/* 3. Finalités du traitement */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] border-b border-[hsl(var(--border))] pb-2">
          3. Finalités du traitement
        </h2>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          Les données sont traitées pour les finalités suivantes :
        </p>
        <ul className="list-disc list-inside space-y-2 text-[hsl(var(--foreground))]">
          <li><strong>Fourniture du service SaaS :</strong> accès à la plateforme, création et gestion des comptes, hébergement des données (devis, factures, planning), envoi d'emails depuis l'application, fonctionnalités prévues au contrat.</li>
          <li><strong>Gestion des comptes clients :</strong> identification, authentification, paramétrage, support.</li>
          <li><strong>Facturation et relation contractuelle :</strong> émission des factures, suivi des paiements, gestion des abonnements.</li>
          <li><strong>Support :</strong> réponse aux demandes, assistance technique, résolution des incidents.</li>
          <li><strong>Amélioration du service :</strong> analyse d'usage (dans le respect de la vie privée), corrections, évolutions, dans la limite du raisonnable.</li>
          <li><strong>Prospection :</strong> envoi d'informations commerciales ou newsletters uniquement avec votre consentement ou dans le cadre d'une relation contractuelle en cours, avec possibilité de vous opposer à tout moment.</li>
        </ul>
      </section>

      {/* 4. Base légale */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] border-b border-[hsl(var(--border))] pb-2">
          4. Base légale
        </h2>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          Le traitement des données repose sur les bases légales suivantes, selon les cas :
        </p>
        <ul className="list-disc list-inside space-y-2 text-[hsl(var(--foreground))]">
          <li><strong>Exécution du contrat :</strong> fourniture du service, gestion du compte, facturation, support lié au contrat.</li>
          <li><strong>Intérêt légitime :</strong> amélioration du service, sécurité, prévention des abus, gestion des réclamations, dans le respect de vos droits.</li>
          <li><strong>Consentement :</strong> prospection commerciale par email (hors relation contractuelle), cookies non strictement nécessaires lorsque la loi l'exige.</li>
          <li><strong>Obligations légales :</strong> conservation de pièces comptables, réponse aux demandes des autorités compétentes lorsque la loi le prévoit.</li>
        </ul>
      </section>

      {/* 5. Durée de conservation */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] border-b border-[hsl(var(--border))] pb-2">
          5. Durée de conservation
        </h2>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          Les données sont conservées pour la durée nécessaire aux finalités concernées, dans les limites suivantes :
        </p>
        <ul className="list-disc list-inside space-y-2 text-[hsl(var(--foreground))]">
          <li><strong>Clients actifs :</strong> pendant la durée du contrat et le temps nécessaire à la gestion de la relation, aux réclamations et aux obligations légales après la fin du contrat.</li>
          <li><strong>Prospects (demandes de contact, démo, non conclus) :</strong> au maximum 3 ans à compter du dernier contact, sauf consentement ou obligation légale.</li>
          <li><strong>Obligations comptables :</strong> les pièces et données à caractère comptable peuvent être conservées 10 ans lorsque la loi l'exige.</li>
        </ul>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          À l'issue des durées applicables, les données sont supprimées ou anonymisées dans la mesure du possible.
        </p>
      </section>

      {/* 6. Hébergement et sécurité */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] border-b border-[hsl(var(--border))] pb-2">
          6. Hébergement et sécurité
        </h2>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          Les données sont hébergées [en France / dans l'Union européenne – placeholder] par [Hébergeur]. 
          Nous mettons en œuvre des mesures techniques et organisationnelles adaptées pour protéger les données, 
          notamment :
        </p>
        <ul className="list-disc list-inside space-y-2 text-[hsl(var(--foreground))]">
          <li>Communication sécurisée (HTTPS) pour les échanges avec le site et l'application.</li>
          <li>Sauvegardes régulières des données dans le cadre de l'exploitation du service.</li>
          <li>Accès restreint aux données (personnel habilité, authentification, traçabilité dans la limite de nos moyens).</li>
        </ul>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          Aucune mesure de sécurité ne pouvant garantir un risque zéro, nous ne promettons pas une sécurité 
          absolue ; nous nous engageons à réagir en cas d'incident connu et à vous en informer lorsque la loi 
          l'exige.
        </p>
      </section>

      {/* 7. Partage des données */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] border-b border-[hsl(var(--border))] pb-2">
          7. Partage des données
        </h2>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          Les données peuvent être communiquées aux destinataires suivants, dans la mesure nécessaire à leurs 
          missions et dans le respect du droit applicable :
        </p>
        <ul className="list-disc list-inside space-y-2 text-[hsl(var(--foreground))]">
          <li><strong>Hébergeur :</strong> [Hébergeur], pour l'hébergement des serveurs et des données.</li>
          <li><strong>Prestataire de paiement :</strong> [Prestataire paiement], pour le traitement des paiements (données de facturation, moyens de paiement dans la limite de ce qu'il reçoit).</li>
          <li><strong>Outils d'emailing :</strong> prestataires utilisés pour l'envoi d'emails transactionnels ou, le cas échéant, de prospection, sous contrat et dans le respect des garanties requises.</li>
          <li><strong>Analytics :</strong> [Outils analytics si utilisés – ou « aucun outil d'analyse de trafic tiers » si non utilisés].</li>
        </ul>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          Nous ne vendons pas et ne revendons pas vos données personnelles à des tiers à des fins commerciales. 
          Toute transmission en dehors de l'UE, si elle devait avoir lieu, serait encadrée par les garanties 
          prévues par le droit (décision d'adéquation, clauses types, etc.).
        </p>
      </section>

      {/* 8. Droits des utilisateurs */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] border-b border-[hsl(var(--border))] pb-2">
          8. Droits des utilisateurs
        </h2>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          Conformément au RGPD et à la loi « Informatique et Libertés », vous disposez des droits suivants, 
          sous réserve des conditions et limites prévues par la loi :
        </p>
        <ul className="list-disc list-inside space-y-2 text-[hsl(var(--foreground))]">
          <li><strong>Droit d'accès :</strong> obtenir la confirmation que des données vous concernant sont traitées et en obtenir une copie.</li>
          <li><strong>Droit de rectification :</strong> faire corriger des données inexactes ou incomplètes.</li>
          <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données dans les cas prévus par la loi.</li>
          <li><strong>Droit d'opposition :</strong> vous opposer à un traitement fondé sur l'intérêt légitime ou à la prospection.</li>
          <li><strong>Droit à la portabilité :</strong> recevoir les données que vous avez fournies dans un format structuré et couramment utilisé, lorsque le traitement est fondé sur le contrat ou le consentement.</li>
          <li><strong>Droit à la limitation :</strong> demander la limitation du traitement dans les situations prévues par le RGPD.</li>
        </ul>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          Pour exercer ces droits, contactez-nous à l'adresse indiquée en section « Contact RGPD ». Vous pouvez 
          également introduire une réclamation auprès de la Commission nationale de l'informatique et des libertés 
          (CNIL), 3 Place de Fontenoy, 75007 Paris, ou sur{" "}
          <a
            href="https://www.cnil.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[hsl(var(--accent))] underline hover:no-underline"
          >
            cnil.fr
          </a>.
        </p>
      </section>

      {/* 9. Cookies */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] border-b border-[hsl(var(--border))] pb-2">
          9. Cookies
        </h2>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          Le site et l'application peuvent utiliser les types de cookies suivants :
        </p>
        <h3 className="text-lg font-medium text-[hsl(var(--foreground))] mt-4">
          9.1 Cookies techniques
        </h3>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          Cookies strictement nécessaires au fonctionnement (session, authentification, préférences essentielles). 
          Ils ne requièrent pas de consentement préalable.
        </p>
        <h3 className="text-lg font-medium text-[hsl(var(--foreground))] mt-4">
          9.2 Cookies statistiques
        </h3>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          Cookies ou traceurs destinés à mesurer l'audience, le cas échéant : [Outils analytics si utilisés – 
          ou préciser « aucun outil tiers » si non utilisés]. Leur dépôt peut être subordonné à votre 
          consentement selon la réglementation en vigueur.
        </p>
        <h3 className="text-lg font-medium text-[hsl(var(--foreground))] mt-4">
          9.3 Paramétrage
        </h3>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          Vous pouvez configurer votre navigateur pour refuser ou supprimer certains cookies (paramètres de 
          confidentialité ou préférences). Le refus des cookies techniques peut affecter le fonctionnement du 
          site ou de l'application.
        </p>
      </section>

      {/* 10. Contact RGPD */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] border-b border-[hsl(var(--border))] pb-2">
          10. Contact RGPD
        </h2>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          Pour toute question relative à la protection de vos données ou pour exercer vos droits :
        </p>
        <ul className="list-none space-y-2 text-[hsl(var(--foreground))] mt-4">
          <li><strong>Email dédié :</strong> [Email contact RGPD]</li>
          <li><strong>Adresse postale :</strong> [Nom société], [Adresse]</li>
        </ul>
        <p className="text-[hsl(var(--foreground))] leading-relaxed mt-4">
          Vous pouvez également utiliser le{" "}
          <Link href="/contact" className="text-[hsl(var(--accent))] underline hover:no-underline">
            formulaire de contact
          </Link>{" "}
          du site en précisant l'objet de votre demande.
        </p>
      </section>

      {/* Liens vers CGV et Mentions légales */}
      <div className="rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--muted))]/20 p-6">
        <p className="text-sm font-medium text-[hsl(var(--foreground))] mb-2">
          Documents associés
        </p>
        <ul className="flex flex-wrap gap-4 text-sm">
          <li>
            <Link href="/cgv" className="text-[hsl(var(--accent))] underline hover:no-underline">
              Conditions générales de vente (CGV)
            </Link>
          </li>
          <li>
            <Link href="/mentions-legales" className="text-[hsl(var(--accent))] underline hover:no-underline">
              Mentions légales
            </Link>
          </li>
        </ul>
      </div>
    </LegalLayout>
  );
}
