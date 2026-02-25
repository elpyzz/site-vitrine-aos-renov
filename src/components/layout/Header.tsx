"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    <header className="sticky top-0 z-50 w-full border-b border-[hsl(var(--border))] bg-[hsl(var(--background))]/95 backdrop-blur supports-[backdrop-filter]:bg-[hsl(var(--background))]/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
          {/* TODO: remplacer par le vrai logo */}
          <span className="text-[hsl(var(--accent))]">Aos Renov</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) =>
            item.href.startsWith("#") ? (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-[hsl(var(--foreground))]/80 hover:text-[hsl(var(--foreground))] transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-[hsl(var(--foreground))]/80 hover:text-[hsl(var(--foreground))] transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" asChild>
            <Link href={demoHref}>Voir une démo</Link>
          </Button>
          <Button asChild>
            <Link href="/contact">Demander une démo</Link>
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden border-t border-[hsl(var(--border))] bg-[hsl(var(--background))]",
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
                className="py-2 text-sm text-[hsl(var(--foreground))]/80 hover:text-[hsl(var(--foreground))]"
              >
                {item.label}
              </Comp>
            );
          })}
          <div className="mt-4 flex flex-col gap-2">
            <Button variant="outline" asChild className="w-full">
              <Link href={demoHref} onClick={() => setOpen(false)}>
                Voir une démo
              </Link>
            </Button>
            <Button asChild className="w-full">
              <Link href="/contact" onClick={() => setOpen(false)}>
                Demander une démo
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
