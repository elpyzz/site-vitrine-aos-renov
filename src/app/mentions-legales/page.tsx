export const metadata = {
  title: "Mentions légales — BTP Pilot",
  description: "Mentions légales du site BTP Pilot.",
};

export default function MentionsLegalesPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 max-w-3xl">
      <h1 className="text-3xl font-bold">Mentions légales</h1>
      <p className="mt-4 text-[hsl(var(--muted-foreground))]">
        TODO: Remplacer par les mentions légales réelles (éditeur, hébergeur, directeur de la publication, etc.).
      </p>
      <div className="mt-8 prose prose-neutral dark:prose-invert max-w-none">
        <h2>1. Éditeur du site</h2>
        <p>
          [Raison sociale]<br />
          [Forme juridique]<br />
          [Siège social]<br />
          [SIRET / RCS]
        </p>
        <h2>2. Hébergeur</h2>
        <p>
          [Nom de l’hébergeur]<br />
          [Adresse]
        </p>
        <h2>3. Directeur de la publication</h2>
        <p>[Nom du responsable]</p>
        <h2>4. Contact</h2>
        <p>
          Pour toute question : <a href="/contact" className="text-[hsl(var(--accent))] underline">formulaire de contact</a>.
        </p>
      </div>
    </div>
  );
}
