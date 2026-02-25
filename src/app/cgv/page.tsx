export const metadata = {
  title: "Conditions générales de vente — BTP Pilot",
  description: "CGV de BTP Pilot.",
};

export default function CgvPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 max-w-3xl">
      <h1 className="text-3xl font-bold">Conditions générales de vente</h1>
      <p className="mt-4 text-[hsl(var(--muted-foreground))]">
        TODO: Remplacer par les CGV réelles (objet, prix, durée, résiliation, responsabilité, etc.).
      </p>
      <div className="mt-8 prose prose-neutral dark:prose-invert max-w-none">
        <h2>1. Objet</h2>
        <p>Les présentes CGV régissent l’accès et l’utilisation du service BTP Pilot.</p>
        <h2>2. Acceptation</h2>
        <p>L’utilisation du service vaut acceptation des présentes conditions.</p>
        <h2>3. Prix et facturation</h2>
        <p>[À compléter selon votre modèle tarifaire.]</p>
        <h2>4. Durée et résiliation</h2>
        <p>[À compléter.]</p>
        <h2>5. Contact</h2>
        <p>
          <a href="/contact" className="text-[hsl(var(--accent))] underline">Formulaire de contact</a>.
        </p>
      </div>
    </div>
  );
}
