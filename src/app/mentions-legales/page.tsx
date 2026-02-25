import Link from "next/link";
import { LegalLayout } from "@/components/layout/LegalLayout";

export const metadata = {
  title: "Mentions légales — BTP Pilot",
  description:
    "Mentions légales du site BTP Pilot : éditeur, hébergement, propriété intellectuelle, responsabilité et contact.",
};

export default function MentionsLegalesPage() {
  return (
    <LegalLayout
      title="Mentions légales"
      description="Conformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique, nous vous informons des présentes mentions légales."
    >
      {/* 1. Éditeur du site */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] border-b border-[hsl(var(--border))] pb-2">
          1. Éditeur du site
        </h2>
        <ul className="list-none space-y-2 text-[hsl(var(--foreground))]">
          <li><strong>Nom / Raison sociale :</strong> [Nom de la société]</li>
          <li><strong>Forme juridique :</strong> [SARL / SAS / SA / Auto-entrepreneur / etc.]</li>
          <li><strong>Capital social :</strong> [Montant et devise]</li>
          <li><strong>Siège social :</strong> [Adresse complète]</li>
          <li><strong>SIRET :</strong> [Numéro SIRET]</li>
          <li><strong>RCS :</strong> [Ville et numéro RCS]</li>
          <li><strong>Numéro de TVA intracommunautaire :</strong> [FR XX XXXXXXXXX]</li>
          <li><strong>Email :</strong> [contact@exemple.fr]</li>
          <li><strong>Téléphone :</strong> [Numéro de téléphone]</li>
          <li><strong>Directeur de la publication :</strong> [Nom du responsable]</li>
        </ul>
      </section>

      {/* 2. Hébergement */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] border-b border-[hsl(var(--border))] pb-2">
          2. Hébergement
        </h2>
        <ul className="list-none space-y-2 text-[hsl(var(--foreground))]">
          <li><strong>Nom de l'hébergeur :</strong> [Nom de l'hébergeur]</li>
          <li><strong>Adresse :</strong> [Adresse complète de l'hébergeur]</li>
          <li><strong>Téléphone :</strong> [Numéro de téléphone de l'hébergeur]</li>
        </ul>
      </section>

      {/* 3. Propriété intellectuelle */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] border-b border-[hsl(var(--border))] pb-2">
          3. Propriété intellectuelle
        </h2>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          L'ensemble des contenus présents sur le site (textes, graphismes, logos, icônes, images, vidéos, logiciels, etc.) 
          est la propriété exclusive de [Nom de la société] ou de ses partenaires et est protégé par les dispositions du Code de 
          propriété intellectuelle. Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie 
          des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite préalable 
          de [Nom de la société]. Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient 
          sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 
          et suivants du Code de propriété intellectuelle.
        </p>
      </section>

      {/* 4. Responsabilité */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] border-b border-[hsl(var(--border))] pb-2">
          4. Responsabilité
        </h2>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          Les informations diffusées sur ce site sont présentées à titre indicatif. [Nom de la société] s'efforce d'assurer 
          l'exactitude et la mise à jour des informations publiées, mais ne peut garantir l'exactitude, la précision ou 
          l'exhaustivité des informations mises à disposition. En conséquence, [Nom de la société] décline toute responsabilité 
          pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur ce site. L'éditeur ne 
          pourra être tenu responsable des dommages directs ou indirects résultant de l'accès ou de l'utilisation du site, 
          notamment d'une indisponibilité des informations. Les liens hypertextes vers d'autres sites n'engagent pas la 
          responsabilité de [Nom de la société] quant au contenu de ces sites.
        </p>
      </section>

      {/* 5. Contact */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] border-b border-[hsl(var(--border))] pb-2">
          5. Contact
        </h2>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          Pour toute question relative aux présentes mentions légales ou au site, vous pouvez nous contacter :
        </p>
        <ul className="list-none space-y-1 text-[hsl(var(--foreground))]">
          <li><strong>Par email :</strong> [contact@exemple.fr]</li>
          <li>
            <strong>Par le formulaire :</strong>{" "}
            <Link
              href="/contact"
              className="text-[hsl(var(--accent))] underline hover:no-underline"
            >
              formulaire de contact
            </Link>
          </li>
        </ul>
      </section>

      {/* 6. Données personnelles */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] border-b border-[hsl(var(--border))] pb-2">
          6. Données personnelles
        </h2>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          Les données personnelles collectées sur ce site et les droits qui vous sont reconnus (accès, rectification, 
          opposition, etc.) sont décrits dans notre{" "}
          <Link
            href="/confidentialite"
            className="text-[hsl(var(--accent))] underline hover:no-underline"
          >
            politique de confidentialité
          </Link>
          .
        </p>
      </section>

      {/* 7. Médiation */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] border-b border-[hsl(var(--border))] pb-2">
          7. Médiation
        </h2>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          Conformément aux articles L.611-1 et L.612-1 du Code de la consommation, en cas de litige, le consommateur 
          peut recourir gratuitement à un médiateur de la consommation en vue de la résolution amiable du litige qui 
          l'oppose au professionnel. À cette fin, le professionnel s'engage à communiquer au consommateur les 
          coordonnées du médiateur de la consommation dont il relève : [Nom du médiateur / structure de médiation], 
          [adresse], [site web ou courriel]. Le recours au médiateur est possible à tout moment, y compris en cours 
          de procédure judiciaire. Le consommateur peut également consulter le site{" "}
          <a
            href="https://www.economie.gouv.fr/mediation-conso"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[hsl(var(--accent))] underline hover:no-underline"
          >
            economie.gouv.fr/mediation-conso
          </a>{" "}
          pour identifier le médiateur compétent.
        </p>
      </section>
    </LegalLayout>
  );
}
