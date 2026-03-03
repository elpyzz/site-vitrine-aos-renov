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
    <header className="sticky top-0 z-50 w-full border-b border-[hsl(var(--border))] bg-white/95 shadow-sm backdrop-blur">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 text-xl font-semibold text-[hsl(var(--te-dark))]">
          <Hammer className="h-6 w-6 shrink-0 text-[hsl(var(--accent))] animate-te-wiggle" aria-hidden />
          <span className="text-[hsl(var(--accent))]">Aos Renov</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) =>
            item.href.startsWith("#") ? (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[hsl(var(--te-body))] hover:text-[hsl(var(--accent))] transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[hsl(var(--te-body))] hover:text-[hsl(var(--accent))] transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href={demoHref}
            className="text-sm font-medium text-[hsl(var(--te-dark))] hover:text-[hsl(var(--accent))] transition-colors"
          >
            Voir une démo
          </Link>
          <Link
            href="/contact"
            className="te-theme-btn"
          >
            Demander une démo <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden rounded-lg p-2 text-[hsl(var(--te-dark))] hover:bg-[hsl(var(--muted))]"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div className={cn("md:hidden border-t border-[hsl(var(--border))] bg-white", open ? "block" : "hidden")}>
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
                className="py-3 text-sm font-medium text-[hsl(var(--te-body))] hover:text-[hsl(var(--accent))]"
              >
                {item.label}
              </Comp>
            );
          })}
          <div className="mt-4 flex flex-col gap-2">
            <Link href={demoHref} onClick={() => setOpen(false)} className="py-3 text-center text-sm font-medium">
              Voir une démo
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="te-theme-btn w-full justify-center py-3">
              Demander une démo <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
