import Link from "next/link";
import { LegalLayout } from "@/components/layout/LegalLayout";

export const metadata = {
  title: "Conditions générales d'utilisation (CGU) — Aos Renov",
  description:
    "Conditions générales d'utilisation du site vitrine et de la plateforme Aos Renov : accès, utilisation, responsabilité, propriété intellectuelle et droit applicable.",
};

export default function CguPage() {
  return (
    <LegalLayout
      title="Conditions Générales d'Utilisation (CGU)"
      description="Version en vigueur au 25 février 2025. Les présentes CGU définissent les règles d'utilisation du site vitrine et de l'application Aos Renov, édités par Aos Renov."
    >
      {/* 1. Objet */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] border-b border-[hsl(var(--border))] pb-2">
          1. Objet
        </h2>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          Les présentes Conditions Générales d'Utilisation (CGU) ont pour objet de définir les règles 
          d'utilisation du site vitrine Aos Renov (site d'information, formulaire de contact, demandes de 
          démo) et de la plateforme en ligne Aos Renov (application SaaS : devis, factures, planning 
          chantiers, envoi par email, relances manuelles, conversion devis → facture en un clic), tous deux 
          édités par Aos Renov, dont le siège est situé au Le Haillan 33185, France. Elles s'appliquent à tout 
          visiteur du site et à tout utilisateur disposant d'un accès à la plateforme. Les conditions 
          commerciales (tarifs, durée, facturation) sont régies par les{" "}
          <Link href="/cgv" className="text-[hsl(var(--accent))] underline hover:no-underline">
            Conditions Générales de Vente (CGV)
          </Link>.
        </p>
      </section>

      {/* 2. Acceptation */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] border-b border-[hsl(var(--border))] pb-2">
          2. Acceptation
        </h2>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          Toute utilisation du site vitrine ou de la plateforme Aos Renov implique l'acceptation sans 
          réserve des présentes CGU. En accédant au site ou en utilisant la plateforme (après création 
          de compte ou connexion), l'utilisateur reconnaît avoir pris connaissance des présentes conditions 
          et les accepter. En cas de désaccord, l'utilisateur doit cesser toute utilisation du site et 
          de la plateforme.
        </p>
      </section>

      {/* 3. Accès au site et à la plateforme */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] border-b border-[hsl(var(--border))] pb-2">
          3. Accès au site et à la plateforme
        </h2>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          <strong>Site vitrine :</strong> l'accès au site d'information est libre et gratuit. Aos Renov 
          s'efforce d'en assurer la disponibilité sans toutefois garantir un accès ininterrompu.
        </p>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          <strong>Plateforme (application) :</strong> l'accès à la plateforme Aos Renov est réservé aux 
          utilisateurs disposant d'un compte actif, dans le cadre d'un abonnement ou d'une démo. L'accès 
          se fait par identifiants personnels et confidentiels (login, mot de passe). L'utilisateur est 
          responsable du caractère confidentiel de ses identifiants et de toute utilisation effectuée à 
          partir de son compte.
        </p>
      </section>

      {/* 4. Création de compte */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] border-b border-[hsl(var(--border))] pb-2">
          4. Création de compte
        </h2>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          La création d'un compte sur la plateforme suppose la fourniture d'informations exactes, 
          complètes et à jour. L'utilisateur s'engage à ne pas usurper l'identité d'un tiers ni à 
          communiquer de fausses informations. Aos Renov se réserve le droit de refuser ou de 
          suspendre un compte en cas d'informations manifestement erronées ou frauduleuses. L'utilisateur 
          est seul responsable des accès réalisés depuis son compte et doit informer Aos Renov sans 
          délai en cas d'utilisation non autorisée ou de perte de ses identifiants.
        </p>
      </section>

      {/* 5. Utilisation du service */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] border-b border-[hsl(var(--border))] pb-2">
          5. Utilisation du service
        </h2>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          Le site et la plateforme sont destinés à un <strong>usage professionnel</strong> uniquement 
          (artisans, entreprises du BTP, professionnels concernés). L'utilisateur s'engage à utiliser le 
          service conformément à son objet et aux lois et règlements en vigueur.
        </p>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          Sont notamment interdits : tout usage frauduleux ou illégal ; la tentative d'intrusion, 
          d'accès non autorisé ou de perturbation du fonctionnement du site, de la plateforme ou des 
          systèmes associés ; l'introduction de virus ou de codes malveillants ; l'extraction ou la 
          réutilisation massive de contenus sans autorisation ; toute utilisation portant atteinte aux 
          droits de tiers ou à l'image de Aos Renov. En cas de manquement, Aos Renov se réserve 
          le droit de suspendre ou supprimer le compte et, le cas échéant, d'engager des poursuites.
        </p>
      </section>

      {/* 6. Responsabilité */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] border-b border-[hsl(var(--border))] pb-2">
          6. Responsabilité
        </h2>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          Aos Renov s'efforce d'assurer la disponibilité du site et de la plateforme dans le cadre 
          d'une obligation de moyens. La disponibilité n'est pas garantie à 100 % ; des interruptions 
          (maintenance, incident technique, force majeure) peuvent survenir. Aucune obligation de 
          résultat n'est assumée quant au contenu, aux fonctionnalités ou aux performances du service.
        </p>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          L'utilisateur reste seul responsable des données qu'il saisit, des documents qu'il génère 
          (devis, factures) et des actes qu'il accomplit via le service. Aos Renov ne peut être 
          tenue responsable des erreurs, omissions ou dommages résultant de l'utilisation du service 
          par l'utilisateur, dans les limites autorisées par la loi.
        </p>
      </section>

      {/* 7. Propriété intellectuelle */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] border-b border-[hsl(var(--border))] pb-2">
          7. Propriété intellectuelle
        </h2>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          Le site, la plateforme, le logiciel, la marque Aos Renov, les designs, les textes et les 
          éléments graphiques sont protégés par le droit de la propriété intellectuelle et appartiennent 
          à Aos Renov ou à ses ayants droit. L'utilisateur ne dispose que d'un droit d'usage du 
          service dans le cadre prévu par le contrat et les présentes CGU.
        </p>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          Sont interdits sans autorisation écrite préalable : la copie, la reproduction, la 
          représentation, la modification, la distribution, la revente ou l'exploitation commerciale 
          des éléments protégés ; la décompilation, le reverse engineering ou toute tentative 
          d'extraction du code source ou de la logique du logiciel, sauf dans les limites strictement 
          prévues par la loi.
        </p>
      </section>

      {/* 8. Suspension / suppression de compte */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] border-b border-[hsl(var(--border))] pb-2">
          8. Suspension / suppression de compte
        </h2>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          Aos Renov se réserve le droit de suspendre ou supprimer l'accès au compte et à la 
          plateforme, sans préavis ni indemnité, en cas de non-respect des présentes CGU, d'utilisation 
          frauduleuse ou illicite du service, de manquement aux obligations contractuelles (notamment 
          impayé) ou sur demande des autorités compétentes. La résiliation du contrat (CGV) peut 
          entraîner la suppression du compte et l'arrêt de l'accès aux données dans les conditions 
          prévues au contrat. L'utilisateur reste redevable des sommes dues jusqu'à la date d'effet.
        </p>
      </section>

      {/* 9. Données personnelles */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] border-b border-[hsl(var(--border))] pb-2">
          9. Données personnelles
        </h2>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          Le traitement des données personnelles collectées dans le cadre de l'utilisation du site et 
          de la plateforme est décrit dans notre{" "}
          <Link href="/confidentialite" className="text-[hsl(var(--accent))] underline hover:no-underline">
            politique de confidentialité
          </Link>
          . En utilisant le site ou la plateforme, l'utilisateur en accepte les termes. Il dispose des 
          droits prévus par le RGPD (accès, rectification, effacement, opposition, etc.) dans les 
          conditions indiquées dans cette politique.
        </p>
      </section>

      {/* 10. Modification des CGU */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] border-b border-[hsl(var(--border))] pb-2">
          10. Modification des CGU
        </h2>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          Aos Renov se réserve le droit de modifier les présentes CGU à tout moment. Les 
          modifications sont portées à la connaissance des utilisateurs par la mise à jour de la page 
          et de la date « Version en vigueur au 25 février 2025 ». En cas de changement substantiel, une 
          information peut être diffusée sur le site ou par tout moyen adapté (email aux comptes 
          actifs, notification dans l'application) dans la limite du raisonnable. La poursuite de 
          l'utilisation du site ou de la plateforme après entrée en vigueur des nouvelles CGU vaut 
          acceptation. En cas de désaccord, l'utilisateur doit cesser d'utiliser le service ; pour les 
          utilisateurs sous contrat, les conditions de résiliation sont celles des CGV.
        </p>
      </section>

      {/* 11. Droit applicable */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] border-b border-[hsl(var(--border))] pb-2">
          11. Droit applicable et juridiction compétente
        </h2>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          Les présentes CGU sont régies par le droit français. En cas de litige, et à défaut de 
          résolution amiable, les tribunaux du ressort de Bordeaux seront seuls compétents.
        </p>
      </section>

      {/* Contact et liens */}
      <div className="rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--muted))]/20 p-6">
        <p className="text-sm font-medium text-[hsl(var(--foreground))] mb-2">
          Contact et documents associés
        </p>
        <p className="text-sm text-[hsl(var(--foreground))] mb-4">
          Pour toute question : Aos Renov, Le Haillan 33185, France, aosrenovbtp@gmail.com.
        </p>
        <ul className="flex flex-wrap gap-4 text-sm">
          <li>
            <Link href="/cgv" className="text-[hsl(var(--accent))] underline hover:no-underline">
              Conditions générales de vente (CGV)
            </Link>
          </li>
          <li>
            <Link href="/confidentialite" className="text-[hsl(var(--accent))] underline hover:no-underline">
              Politique de confidentialité
            </Link>
          </li>
        </ul>
      </div>
    </LegalLayout>
  );
}
