export function Pricing() {
  return (
    <section className="relative overflow-hidden border-b border-primary/10 bg-bg-light py-20 md:py-24">
      <div className="container relative mx-auto px-4">
        <div className="reveal text-center">
          <h2 className="te-section-title-lg text-text-primary-dark">Tarifs sur mesure</h2>
        </div>
        <p className="reveal mx-auto mt-3 max-w-2xl text-center text-text-secondary">
          Chaque configuration est unique. Contactez-nous pour obtenir un devis personnalisé adapté à votre activité.
        </p>
        <p className="reveal mx-auto mt-4 max-w-2xl text-center text-sm text-text-secondary/90">
          Vous ne payez pas pour une « place » dans une app unique : nous déployons <strong className="font-semibold text-text-primary-dark">votre</strong> instance — marque, réglages et <strong className="font-semibold text-text-primary-dark">votre domaine</strong>. Les besoins évoluent : l&apos;outil s&apos;ajuste avec vous.
        </p>
      </div>
    </section>
  );
}
