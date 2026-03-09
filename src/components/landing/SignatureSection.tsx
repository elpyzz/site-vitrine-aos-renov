"use client";

import { Shield } from "lucide-react";
import { SectionWaveToNavy } from "./SectionWave";

const points = [
  "Envoyez le devis en 1 clic depuis l'app",
  "Votre client reçoit un email avec un lien",
  "Il signe depuis son téléphone en 30 secondes",
  "Vous recevez une notification immédiate",
  "Le PDF signé est archivé automatiquement",
];

export function SignatureSection() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#0A1628] py-20 md:py-24 section-noise">
      <div className="container relative mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Texte gauche */}
          <div className="reveal">
            <span
              className="inline-flex items-center gap-2 rounded-full border border-[var(--accent-warm)]/40 bg-[var(--accent-warm)]/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[var(--accent-warm)]"
              style={{ fontFamily: "var(--font-dm-mono), monospace" }}
            >
              ✍️ SIGNATURE ÉLECTRONIQUE
            </span>
            <h2 className="mt-6 font-display text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
              Votre client signe.
              <br />
              Vous encaissez.
              <br />
              <span className="text-[var(--accent-warm)]">C&apos;est tout.</span>
            </h2>
            <ul className="mt-8 space-y-4">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-lg text-white/90">
                  <span className="mt-1 shrink-0 text-[var(--accent-warm)]" aria-hidden>
                    →
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <p
              className="mt-8 flex items-center gap-2 text-[11px] text-white/60"
              style={{ fontFamily: "var(--font-dm-mono), monospace" }}
            >
              <Shield className="h-4 w-4 shrink-0 text-[#10B981]" aria-hidden />
              ✓ Signature électronique avec SignWell — légalement valable en France, conforme eIDAS
            </p>
          </div>

          {/* Illustration droite — phone mockup */}
          <div className="reveal flex justify-center lg:justify-end">
            <div
              className="relative w-[260px] rounded-[36px] border-2 border-[rgba(245,166,35,0.2)] bg-[#0d1526] p-8 shadow-[0_40px_80px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.05)]"
              style={{ padding: "32px 20px" }}
            >
              {/* Encoche */}
              <div
                className="absolute left-1/2 top-3 h-1.5 -translate-x-1/2 rounded-full bg-white/10"
                style={{ width: 60 }}
                aria-hidden
              />
              {/* Carte email */}
              <div className="rounded-2xl border border-[rgba(245,166,35,0.15)] bg-[#131f35] p-4">
                <p className="text-xs text-white/50">📧 Nouveau message</p>
                <p className="mt-2 font-semibold text-white">Devis N°0042</p>
                <p className="text-sm text-white/80">Jean Dupont</p>
                <p className="text-sm text-white/70">Plomberie</p>
                <p className="mt-2 text-sm font-medium text-[var(--accent-warm)]">Montant : 850 €</p>
                <div
                  className="animate-pulse-amber mt-3.5 cursor-pointer rounded-xl bg-[var(--accent-warm)] py-3 text-center text-[13px] font-extrabold text-[#050810]"
                  style={{ marginTop: 14 }}
                >
                  ✍️ Signer maintenant
                </div>
                <p className="mt-2 text-center text-[10px] text-white/40">Signature avec SignWell · Aos Renov</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SectionWaveToNavy />
    </section>
  );
}
