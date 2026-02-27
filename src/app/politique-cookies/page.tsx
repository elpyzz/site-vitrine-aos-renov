import Link from "next/link";
import { LegalLayout } from "@/components/layout/LegalLayout";

export const metadata = {
  title: "Politique de cookies — Aos Renov",
  description:
    "Politique de cookies du site Aos Renov : types de cookies, base légale, durée, gestion et contact, conformément au RGPD et aux recommandations CNIL.",
};

export default function PolitiqueCookiesPage() {
  return (
    <LegalLayout
      title="Politique de cookies"
      description="Dernière mise à jour : 25 février 2025. Cette page vous informe sur l'utilisation des cookies sur le site Aos Renov édité par Aos Renov."
    >
      {/* 1. Introduction */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] border-b border-[hsl(var(--border))] pb-2">
          1. Introduction
        </h2>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone) 
          lors de la visite d'un site. Il permet au site de mémoriser des informations pendant votre navigation 
          ou lors de visites ultérieures (par exemple : maintien de votre session, préférences d'affichage, 
          mesure d'audience). Les cookies sont gérés par votre navigateur.
        </p>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          Le site Aos Renov utilise des cookies strictement nécessaires au fonctionnement du site vitrine et 
          à la sécurisation de votre navigation. Aucun outil d'analyse tiers (Google Analytics, Meta Pixel, etc.) 
          n'est utilisé. La présente politique précise les types de cookies utilisés, leur finalité, 
          leur durée et les moyens dont vous disposez pour les gérer, conformément au RGPD et aux 
          recommandations de la CNIL.
        </p>
      </section>

      {/* 2. Types de cookies utilisés */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] border-b border-[hsl(var(--border))] pb-2">
          2. Types de cookies utilisés
        </h2>

        <h3 className="text-lg font-medium text-[hsl(var(--foreground))] mt-4">
          2.1 Cookies strictement nécessaires
        </h3>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          Ces cookies sont indispensables au fonctionnement du site : gestion de la session, sécurité, 
          équilibrage de charge, mémorisation de vos choix essentiels (par exemple le bandeau d'information 
          sur les cookies). Ils ne nécessitent pas votre consentement préalable. Sans eux, certaines 
          fonctionnalités du site ne pourraient pas être assurées.
        </p>

        <h3 className="text-lg font-medium text-[hsl(var(--foreground))] mt-4">
          2.2 Cookies de mesure d'audience
        </h3>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          Nous n'utilisons pas de cookies de mesure d'audience ni d'outils d'analyse tiers (pas de Google 
          Analytics, pas de Meta Pixel). Seuls des cookies techniques sont déposés.
        </p>

        <h3 className="text-lg font-medium text-[hsl(var(--foreground))] mt-4">
          2.3 Cookies de préférences
        </h3>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          Les éventuels cookies de préférences (par exemple mémorisation de vos choix sur le bandeau cookies) 
          sont limités au strict nécessaire au fonctionnement du site.
        </p>

        <h3 className="text-lg font-medium text-[hsl(var(--foreground))] mt-4">
          2.4 Cookies publicitaires
        </h3>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          Aucun cookie publicitaire, de ciblage ou de reciblage n'est utilisé sur ce site. Nous ne diffusons 
          pas de publicité tierce et ne revendons pas vos données de navigation à des régies publicitaires.
        </p>
      </section>

      {/* 3. Base légale */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] border-b border-[hsl(var(--border))] pb-2">
          3. Base légale
        </h2>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          Conformément au RGPD et à la directive ePrivacy (transposée en droit français) :
        </p>
        <ul className="list-disc list-inside space-y-2 text-[hsl(var(--foreground))]">
          <li><strong>Cookies strictement nécessaires :</strong> le traitement repose sur notre intérêt légitime (fourniture et sécurité du site) ou sur une obligation technique ; ils ne requièrent pas de consentement préalable.</li>
          <li><strong>Cookies non essentiels</strong> (mesure d'audience, préférences lorsque non indispensables) : le dépôt est subordonné à votre <strong>consentement</strong>, recueilli via le bandeau d'information ou les paramètres du site. Vous pouvez refuser ou retirer ce consentement à tout moment.</li>
        </ul>
      </section>

      {/* 4. Durée de conservation */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] border-b border-[hsl(var(--border))] pb-2">
          4. Durée de conservation des cookies
        </h2>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          Conformément aux recommandations de la CNIL, la durée de conservation des cookies déposés sur votre 
          terminal ne dépasse pas <strong>13 mois</strong> à compter de leur premier dépôt (ou de votre dernier 
          consentement pour les cookies soumis au consentement). À l'issue de cette période, votre consentement 
          sera à nouveau sollicité pour les cookies non essentiels. Les cookies de session peuvent être 
          supprimés à la fermeture du navigateur.
        </p>
      </section>

      {/* 5. Gestion des cookies */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] border-b border-[hsl(var(--border))] pb-2">
          5. Gestion des cookies
        </h2>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          Vous disposez de plusieurs moyens pour gérer les cookies :
        </p>
        <ul className="list-disc list-inside space-y-2 text-[hsl(var(--foreground))]">
          <li><strong>Bandeau ou paramétrage sur le site :</strong> lors de votre première visite, un bandeau ou une page dédiée vous informe de l'utilisation des cookies et vous permet d'accepter ou de refuser les cookies non essentiels. Vous pouvez modifier vos choix à tout moment (lien « Gérer les cookies » ou équivalent en pied de page ou dans les paramètres).</li>
          <li><strong>Paramétrage de votre navigateur :</strong> vous pouvez configurer votre navigateur pour refuser certains ou tous les cookies, ou être averti avant qu'un cookie ne soit enregistré. Les modalités varient selon les navigateurs (Chrome, Firefox, Safari, Edge, etc.) ; vous trouverez les options généralement dans « Paramètres » ou « Préférences » &gt; « Confidentialité » ou « Vie privée ».</li>
          <li><strong>Retrait du consentement :</strong> vous pouvez retirer votre consentement aux cookies non essentiels à tout moment en supprimant les cookies via votre navigateur ou en refusant à nouveau via le bandeau ou le lien dédié sur le site. Le retrait ne remet pas en cause la licéité des traitements effectués avant le retrait.</li>
        </ul>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          Le refus ou la suppression des cookies strictement nécessaires peut affecter le fonctionnement du 
          site (par exemple : perte de session, impossibilité d'utiliser le formulaire de démo).
        </p>
      </section>

      {/* 6. Modification de la politique */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] border-b border-[hsl(var(--border))] pb-2">
          6. Modification de la politique
        </h2>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          Aos Renov se réserve le droit de modifier la présente politique de cookies pour refléter les 
          évolutions du site, des outils utilisés ou de la réglementation. La date de dernière mise à jour 
          sera indiquée en tête de page. Nous vous invitons à la consulter régulièrement. En cas de changement 
          substantiel, une information pourra vous être communiquée par tout moyen adapté (bandeau sur le site, 
          email si vous êtes client, etc.) dans la limite du raisonnable.
        </p>
      </section>

      {/* 7. Contact */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[hsl(var(--foreground))] border-b border-[hsl(var(--border))] pb-2">
          7. Contact
        </h2>
        <p className="text-[hsl(var(--foreground))] leading-relaxed">
          Pour toute question relative aux cookies ou à la présente politique : Aos Renov, aosrenovbtp@gmail.com. 
          Vous pouvez également consulter notre{" "}
          <Link href="/confidentialite" className="text-[hsl(var(--accent))] underline hover:no-underline">
            politique de confidentialité
          </Link>{" "}
          pour les informations générales sur le traitement des données personnelles.
        </p>
      </section>
    </LegalLayout>
  );
}
