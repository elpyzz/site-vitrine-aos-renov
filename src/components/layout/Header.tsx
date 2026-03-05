"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ArrowRight, Hammer } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#fonctionnalites", label: "Fonctionnalités" },
  { href: "#comment-ca-marche", label: "Comment ça marche" },
  { href: "#pour-qui", label: "Pour qui" },
  { href: "#faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";
  const demoHref = isHome ? "#contact" : "/contact";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-primary/95 shadow-lg backdrop-blur-[20px]">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold text-text-primary"
        >
          <Hammer className="h-6 w-6 shrink-0 text-accent-hex" aria-hidden />
          <span>Aos Renov</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) =>
            item.href.startsWith("#") ? (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/70 transition hover:text-white hover:underline underline-offset-4"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/70 transition hover:text-white hover:underline underline-offset-4"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href={demoHref}
            className="text-sm font-medium text-white/70 transition hover:text-white"
          >
            Voir une démo
          </Link>
          <Link
            href="/contact"
            className="btn-shimmer btn-primary inline-flex items-center gap-2 rounded-full bg-accent-hex px-6 py-2.5 text-sm font-semibold text-white"
          >
            Demander une démo <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden rounded-lg p-2 text-white/80 hover:bg-white/10"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "md:hidden border-t border-white/10 bg-primary",
          open ? "block" : "hidden"
        )}
      >
        <nav className="container mx-auto flex flex-col gap-1 px-4 py-4">
          {navItems.map((item) => {
            const Comp = item.href.startsWith("#") ? "a" : Link;
            const props = item.href.startsWith("#")
              ? { href: item.href, onClick: () => setOpen(false) }
              : { href: item.href };
            return (
              <Comp
                key={item.href}
                {...props}
                className="py-3 text-sm font-medium text-white/80 hover:text-white"
              >
                {item.label}
              </Comp>
            );
          })}
          <div className="mt-4 flex flex-col gap-2">
            <Link
              href={demoHref}
              onClick={() => setOpen(false)}
              className="py-3 text-center text-sm font-medium text-white/80"
            >
              Voir une démo
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary rounded-full bg-accent-hex py-3 text-center font-semibold text-white"
            >
              Demander une démo <ArrowRight className="inline h-4 w-4" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
