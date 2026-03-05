"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

const metiers = [
  "Plombier / Chauffagiste",
  "Électricien",
  "Peintre / Carreleur",
  "Maçon / Couvreur",
  "Menuisier / Serrurier",
  "Paysagiste",
];

export function ForWho() {
  return (
    <section
      id="pour-qui"
      className="relative scroll-mt-20 overflow-hidden border-b border-white/10 bg-[#0A1628] py-20 md:py-24"
    >
      <div className="container relative mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Visuel à gauche — photo avec overlay */}
          <div className="reveal relative order-2 flex justify-center lg:order-1 lg:justify-start">
            <div className="relative w-full max-w-md">
              <div
                className="relative overflow-hidden rounded-3xl shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
                style={{ borderRadius: 24 }}
              >
                <Image
                  src="/artisan-tablette.png"
                  alt="Artisan sur chantier utilisant une tablette pour gérer son activité"
                  width={1000}
                  height={667}
                  className="w-full object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  unoptimized
                />
                <div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background: "linear-gradient(to top, #0A1628 0%, transparent 60%)",
                    borderRadius: 24,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Texte à droite */}
          <div className="order-1 flex flex-col lg:order-2">
            <span className="section-label-light inline-block w-fit">POUR QUI ?</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-white md:text-4xl">
              Fait pour vous si vous travaillez seul ou en petite équipe.
            </h2>
            <p className="mt-4 text-lg font-light text-white/65">
              Devis, factures et planning en un seul outil — sans usine à gaz.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {metiers.map((m) => (
                <div
                  key={m}
                  className="reveal flex items-center gap-3 rounded-lg border border-white/5 bg-white/5 px-4 py-3"
                  style={{ padding: "10px 16px" }}
                >
                  <span className="shrink-0 text-[#10B981]">
                    <Check className="h-5 w-5" />
                  </span>
                  <span className="text-white">{m}</span>
                </div>
              ))}
            </div>

            <div className="reveal mt-6 rounded-lg border-l-4 border-[#F59E0B] bg-[rgba(245,158,11,0.1)] px-4 py-3">
              <p className="text-white">
                <span className="font-bold text-[#F59E0B]">+600 000</span> artisans indépendants en France
                utilisent encore Excel ou Word pour leurs devis
              </p>
            </div>

            <div className="mt-8 reveal">
              <Link
                href="#contact"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#2563EB] px-6 py-4 font-semibold text-white transition-all hover:bg-[#1d4ed8] hover:shadow-[0_20px_40px_rgba(37,99,235,0.35)] md:w-auto md:inline-flex"
              >
                Je veux tester gratuitement <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
