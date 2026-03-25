"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 5, suffix: " min", label: "pour créer un devis complet" },
  { value: 1, suffix: " clic", label: "devis → facture, zéro ressaisie" },
  { value: 2027, suffix: "", label: "factures déjà conformes à la loi" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const done = useRef(false);

  useEffect(() => {
    if (done.current) return;
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        done.current = true;
        const duration = 1500;
        const start = Date.now();
        const step = () => {
          const t = (Date.now() - start) / duration;
          const eased = t >= 1 ? 1 : 1 - Math.pow(2, -10 * t);
          setCount(Math.round(value * eased));
          if (t < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  const display = value >= 100 ? `${count}${suffix}` : String(count) + suffix;
  return (
    <span
      ref={ref}
      className="block w-full truncate text-center font-mono text-2xl font-bold leading-tight text-accent-warm sm:text-3xl md:text-4xl lg:text-5xl"
    >
      {display}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="relative border-b border-secondary/30 bg-secondary py-16 md:py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-12 sm:flex-row sm:flex-wrap sm:gap-x-0 sm:gap-y-0">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-1 basis-0 flex-col items-center justify-center px-4 py-4 text-center min-w-0 sm:min-w-[140px] md:min-w-0 md:border-r md:border-white/30 md:px-6 md:first:pl-0 md:last:border-r-0 md:last:pr-0 lg:px-8"
            >
              <div className="w-full min-w-0 overflow-hidden">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-4 max-w-[200px] text-sm leading-snug text-white/80">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
