"use client";

import { Wrench, Zap, Paintbrush, Layout, HardHat, Home } from "lucide-react";

const trades: { label: string; icon: React.ElementType }[] = [
  { label: "Plombier", icon: Wrench },
  { label: "Électricien", icon: Zap },
  { label: "Peintre", icon: Paintbrush },
  { label: "Carreleur", icon: Layout },
  { label: "Maçon", icon: HardHat },
  { label: "Couvreur", icon: Home },
];

export function TrustBar() {
  return (
    <div className="border-b border-primary/10 bg-bg-light py-6">
      <div className="container mx-auto px-4">
        <p className="mb-4 text-center text-sm font-medium text-text-primary-dark">
          Conçu pour tous les métiers du BTP
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {trades.map(({ label, icon: Icon }) => (
            <span
              key={label}
              className="flex items-center gap-2 rounded-full border border-primary/10 bg-white px-4 py-2.5 text-sm font-medium text-text-primary-dark shadow-sm"
            >
              <Icon className="h-4 w-4 text-accent-hex" aria-hidden />
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
