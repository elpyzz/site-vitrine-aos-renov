"use client";

import Link from "next/link";

export function UrgencyBanner() {
  return (
    <Link
      href="#contact"
      className="block border-b border-amber-600/30 bg-accent-warm py-2.5 text-center text-sm font-semibold text-primary transition hover:bg-amber-500"
      aria-label="Offre de lancement — 2 semaines offertes"
    >
      ⚡ Lancement — 2 semaines offertes pour les 20 premiers artisans inscrits ce mois-ci
    </Link>
  );
}
