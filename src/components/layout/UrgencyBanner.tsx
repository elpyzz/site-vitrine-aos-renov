"use client";

import Link from "next/link";
import { useState } from "react";

export function UrgencyBanner() {
  const [closed, setClosed] = useState(false);

  if (closed) return null;

  return (
    <div className="relative flex h-11 items-center justify-center border-b border-amber-600/30 bg-accent-warm text-center">
      <Link
        href="#contact"
        className="text-base font-semibold text-primary transition hover:opacity-90"
        aria-label="Offre de lancement — 2 semaines offertes"
      >
        <span className="text-amber-700">⚡</span>{" "}
        Lancement — 2 semaines offertes pour les 20 premiers artisans inscrits ce mois-ci
      </Link>
      <button
        type="button"
        onClick={() => setClosed(true)}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-1 text-primary/70 transition hover:bg-primary/10 hover:text-primary"
        aria-label="Fermer la bannière"
      >
        <span className="text-lg leading-none">×</span>
      </button>
    </div>
  );
}
