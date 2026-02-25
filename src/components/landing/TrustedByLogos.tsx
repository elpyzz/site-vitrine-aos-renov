import {
  Wrench,
  Zap,
  Paintbrush,
  Layout,
  HardHat,
  Home,
  type LucideIcon,
} from "lucide-react";

const trades: { label: string; icon: LucideIcon }[] = [
  { label: "Plombier", icon: Wrench },
  { label: "Électricien", icon: Zap },
  { label: "Peintre", icon: Paintbrush },
  { label: "Carreleur", icon: Layout },
  { label: "Maçon", icon: HardHat },
  { label: "Couvreur", icon: Home },
];

export function TrustedByLogos() {
  return (
    <section className="border-b border-[hsl(var(--border))] bg-white py-20 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-xl font-semibold sm:text-2xl">
          Pensé pour les artisans
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-sm text-[hsl(var(--muted-foreground))]">
          Conçu pour les indépendants du BTP : devis, factures, planning, relances en 1 clic.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {trades.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="flex items-center gap-2 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--card))] px-4 py-2.5 shadow-sm transition-shadow hover:shadow-md"
            >
              <span
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[hsl(var(--accent))]/10 text-[hsl(var(--accent))]"
                aria-hidden
              >
                <Icon className="h-4 w-4" />
              </span>
              <span className="text-sm font-medium text-[hsl(var(--foreground))]">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
