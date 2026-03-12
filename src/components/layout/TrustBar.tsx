"use client";

import { Wrench, Zap, Paintbrush, Layout, HardHat, Flame, Key } from "lucide-react";

const trades: { label: string; icon: React.ElementType }[] = [
  { label: "Plombier", icon: Wrench },
  { label: "Électriciens", icon: Zap },
  { label: "Peintre", icon: Paintbrush },
  { label: "Carreleur", icon: Layout },
  { label: "Maçon", icon: HardHat },
  { label: "Chauffagiste", icon: Flame },
  { label: "Serruriers", icon: Key },
];

const pillClassName =
  "group flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-white/25 bg-white/10 px-4 py-2.5 text-sm font-medium text-white transition duration-200 hover:border-amber-500 hover:bg-amber-500 hover:text-white";

function Pill({ label, Icon }: { label: string; Icon: React.ElementType }) {
  return (
    <span className={pillClassName}>
      <Icon className="h-4 w-4 shrink-0 text-white transition-colors duration-200 group-hover:text-white" aria-hidden />
      {label}
    </span>
  );
}

export function TrustBar() {
  return (
    <div className="border-b border-white/10 bg-[#0F172A] py-6">
      <div className="container mx-auto px-4">
        <p className="mb-4 text-center text-base font-medium text-white md:text-lg">
          Conçu pour tous les métiers du BTP
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {trades.map(({ label, icon: Icon }) => (
            <Pill key={label} label={label} Icon={Icon} />
          ))}
        </div>
      </div>
    </div>
  );
}
