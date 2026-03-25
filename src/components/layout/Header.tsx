"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
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
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0F172A] shadow-lg backdrop-blur-[20px]">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-[1.25rem] font-bold text-white"
        >
          <Image
            src="/logo-aos-renov.png"
            alt="Logo Aos Renov"
            width={30}
            height={30}
            className="h-7 w-7 shrink-0 rounded-md object-cover"
            priority
          />
          <span>Aos Renov</span>
        </Link>

        <nav className="hidden md:flex items-center gap-5">
          {navItems.map((item) =>
            item.href.startsWith("#") ? (
              <a
                key={item.href}
                href={item.href}
                className="nav-link-underline py-4 text-sm font-medium text-white/70 transition hover:text-white"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link-underline py-4 text-sm font-medium text-white/70 transition hover:text-white"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href={demoHref}
            className="flex items-center gap-1.5 text-sm font-medium text-white/70 transition hover:text-white"
          >
            Voir une démo <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-accent-hex px-6 py-2.5 text-sm font-semibold text-white transition hover:brightness-110 hover:scale-[1.03]"
          >
            Demander une démo <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          type="button"
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg p-2 text-white/80 transition hover:bg-white/10 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <span
            className={cn(
              "h-0.5 w-5 rounded-full bg-current transition-all duration-200",
              open && "translate-y-2 rotate-45"
            )}
          />
          <span
            className={cn(
              "h-0.5 w-5 rounded-full bg-current transition-all duration-200",
              open && "opacity-0"
            )}
          />
          <span
            className={cn(
              "h-0.5 w-5 rounded-full bg-current transition-all duration-200",
              open && "-translate-y-2 -rotate-45"
            )}
          />
        </button>
      </div>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-[#0F172A] transition-all duration-300 ease-out md:hidden",
          open ? "visible opacity-100" : "invisible opacity-0"
        )}
        aria-hidden={!open}
      >
        <div
          className={cn(
            "flex min-h-full flex-col pt-24 pb-8 transition-transform duration-300",
            open ? "translate-y-0" : "translate-y-4"
          )}
        >
          <nav className="container mx-auto flex flex-1 flex-col gap-1 px-4">
            {navItems.map((item) => {
              const Comp = item.href.startsWith("#") ? "a" : Link;
              const props =
                item.href.startsWith("#")
                  ? { href: item.href, onClick: () => setOpen(false) }
                  : { href: item.href, onClick: () => setOpen(false) };
              return (
                <Comp
                  key={item.href}
                  {...props}
                  className="py-4 text-lg font-medium text-white/80 transition hover:text-white"
                >
                  {item.label}
                </Comp>
              );
            })}
          </nav>
          <div className="container mx-auto mt-auto flex flex-col gap-3 px-4 pt-8">
            <Link
              href={demoHref}
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 py-4 text-base font-medium text-white/80"
            >
              Voir une démo <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-accent-hex py-4 text-base font-semibold text-white transition hover:brightness-110"
            >
              Demander une démo <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
