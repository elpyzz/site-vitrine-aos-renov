import Link from "next/link";

const legalLinks = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/cgv", label: "CGV" },
  { href: "/cgu", label: "CGU" },
  { href: "/confidentialite", label: "Politique de confidentialité" },
  { href: "/politique-cookies", label: "Politique de cookies" },
];

export function Footer() {
  return (
    <footer className="border-t border-[hsl(var(--border))] bg-[hsl(var(--muted))]/30">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <Link href="/" className="font-semibold text-lg text-[hsl(var(--accent))]">
              BTP Pilot
            </Link>
            <p className="mt-2 max-w-xs text-sm text-[hsl(var(--muted-foreground))]">
              Devis, factures et planning pour artisans — simple et rapide.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-sm font-medium text-[hsl(var(--foreground))]">
              Légal
            </span>
            <ul className="flex flex-col gap-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-sm font-medium text-[hsl(var(--foreground))]">
              Contact
            </span>
            <p className="text-sm text-[hsl(var(--muted-foreground))]">
              <Link href="/contact" className="hover:text-[hsl(var(--foreground))] transition-colors">
                Formulaire de contact
              </Link>
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[hsl(var(--border))] text-center text-sm text-[hsl(var(--muted-foreground))]">
          © {new Date().getFullYear()} BTP Pilot. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
