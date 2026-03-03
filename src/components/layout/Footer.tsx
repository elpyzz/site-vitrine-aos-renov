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
    <footer className="relative overflow-hidden bg-[#14203A] text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Bloc logo + description + colonnes type template */}
        <div className="te-footer-sec">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="te-footer-widget animate-te-fade-up" style={{ animationDelay: "0.05s" }}>
                <Link href="/" className="te-footer-logo text-xl font-semibold text-white">
                  Aos Renov
                </Link>
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
                  Devis, factures et planning pour artisans — simple et rapide.
                </p>
              </div>
            </div>
            <div className="lg:col-span-4">
              <div className="te-footer-widget animate-te-fade-up" style={{ animationDelay: "0.1s" }}>
                <h2 className="te-footer-widget-title text-sm font-semibold uppercase tracking-wider text-white/90">
                  Légal
                </h2>
                <ul className="mt-4 flex flex-col gap-2">
                  {legalLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/70 transition-colors hover:text-[#317EFE]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="lg:col-span-4">
              <div className="te-footer-widget animate-te-fade-up" style={{ animationDelay: "0.15s" }}>
                <h2 className="te-footer-widget-title text-sm font-semibold uppercase tracking-wider text-white/90">
                  Contact
                </h2>
                <p className="mt-4 text-sm text-white/70">
                  <Link href="/contact" className="transition-colors hover:text-[#317EFE]">
                    Formulaire de contact
                  </Link>
                </p>
                <p className="mt-2 text-sm text-white/70">
                  <a href="tel:+3369430343" className="transition-colors hover:text-[#317EFE]">
                    07 69 43 03 43
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom-area mt-12 border-t border-white/10 pt-8">
          <div className="te-footer-bottom-wrapper flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="te-copyright-text text-center text-sm text-white/60 sm:text-left">
              © {new Date().getFullYear()} Aos Renov. Tous droits réservés.
            </div>
            <div className="te-footer-bottom-menu">
              <ul className="flex flex-wrap justify-center gap-6 text-sm">
                <li>
                  <Link href="/mentions-legales" className="text-white/60 transition-colors hover:text-[#317EFE]">
                    Mentions légales
                  </Link>
                </li>
                <li>
                  <Link href="/confidentialite" className="text-white/60 transition-colors hover:text-[#317EFE]">
                    Confidentialité
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white/60 transition-colors hover:text-[#317EFE]">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
