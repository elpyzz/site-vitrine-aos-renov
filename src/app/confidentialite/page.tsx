export const metadata = {
  title: "Politique de confidentialité — BTP Pilot",
  description: "Politique de confidentialité et protection des données BTP Pilot.",
};

export default function ConfidentialitePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 max-w-3xl">
      <h1 className="text-3xl font-bold">Politique de confidentialité</h1>
      <p className="mt-4 text-[hsl(var(--muted-foreground))]">
        TODO: Remplacer par la politique de confidentialité réelle (RGPD : responsable du traitement, finalités, bases légales, durées, droits, etc.).
      </p>
      <div className="mt-8 prose prose-neutral dark:prose-invert max-w-none">
        <h2>1. Responsable du traitement</h2>
        <p>[Identité et coordonnées du responsable]</p>
        <h2>2. Données collectées</h2>
        <p>Données de contact (nom, email, téléphone, message) via le formulaire de contact et les demandes de démo.</p>
        <h2>3. Finalités</h2>
        <p>Réponse aux demandes, envoi d’informations commerciales si consentement, gestion de la relation client.</p>
        <h2>4. Base légale</h2>
        <p>Exécution de la relation contractuelle / consentement / intérêt légitime selon le cas.</p>
        <h2>5. Durée de conservation</h2>
        <p>[À définir selon votre politique.]</p>
        <h2>6. Vos droits</h2>
        <p>Droit d’accès, de rectification, d’effacement, à la limitation, à la portabilité, d’opposition. Réclamation auprès de la CNIL.</p>
        <h2>7. Contact</h2>
        <p>
          <a href="/contact" className="text-[hsl(var(--accent))] underline">Formulaire de contact</a>.
        </p>
      </div>
    </div>
  );
}
