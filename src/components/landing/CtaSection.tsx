"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const leadSchema = {
  name: (v: string) => (v.trim().length >= 2 ? null : "Minimum 2 caractères"),
  email: (v: string) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? null : "Email invalide"),
  phone: (v: string) => (v.trim().length >= 8 ? null : "Téléphone invalide"),
};

export function CtaSection() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string }>({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const err: typeof errors = {};
    err.name = leadSchema.name(name) ?? undefined;
    err.email = leadSchema.email(email) ?? undefined;
    err.phone = leadSchema.phone(phone) ?? undefined;
    if (err.name || err.email || err.phone) {
      setErrors(err);
      return;
    }
    setErrors({});
    setLoading(true);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), phone: phone.trim(), source: "landing_mini" }),
      });
      if (!res.ok) throw new Error("Erreur");
      router.push("/merci");
    } catch {
      setErrors({ email: "Une erreur est survenue. Réessayez." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section id="contact" className="relative scroll-mt-20 overflow-hidden border-b border-primary/10 bg-primary py-20 md:py-24">
        <div className="mesh-blob absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-accent-hex" style={{ opacity: 0.15 }} />
        <div className="mesh-blob absolute -right-40 bottom-1/4 h-80 w-80 rounded-full bg-secondary" style={{ opacity: 0.15, animationDelay: "2s" }} />
        <div className="container relative mx-auto px-4">
          <h2 className="reveal text-center font-display text-4xl font-extrabold text-text-primary md:text-5xl">
            Prêt à récupérer vos soirées ?
          </h2>
          <p className="reveal mx-auto mt-4 max-w-xl text-center text-lg text-text-secondary">
            Une démo de 15 minutes suffit pour voir si c&apos;est fait pour vous. Sans engagement.
          </p>
          <p className="reveal mx-auto mt-3 max-w-2xl text-center text-sm text-text-secondary/90">
            Nous vous montrons l&apos;interface de référence : votre futur espace sera à <strong className="font-semibold text-text-primary">votre image</strong> (marque, couleurs, options) avec <strong className="font-semibold text-text-primary">votre nom de domaine</strong>.
          </p>
          <a href="tel:+3369430343" className="reveal mt-6 block text-center text-3xl font-bold text-text-primary md:text-4xl">
            📞 07 69 43 03 43
          </a>
          <p className="reveal mt-2 text-center text-sm text-text-secondary">
            Réponse garantie sous 24h — souvent bien moins
          </p>
          <div className="reveal mx-auto mt-10 max-w-2xl rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur md:p-8">
            <span className="te-section-short-title text-accent-hex">Contact</span>
            <p className="mt-3 text-text-secondary">
              Laissez vos coordonnées, on vous rappelle pour caler une démo et parler de <strong className="font-semibold text-text-primary">votre</strong> configuration (personnalisation + domaine).
            </p>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <Label htmlFor="cta-name" className="text-text-primary">Nom / Entreprise</Label>
                <Input
                  id="cta-name"
                  className="mt-1 border-white/30 bg-white/10 text-text-primary placeholder:text-white/50"
                  placeholder="Votre nom ou raison sociale"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "cta-name-error" : undefined}
                />
                {errors.name && (
                  <p id="cta-name-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="cta-email" className="text-text-primary">Email</Label>
                <Input
                  id="cta-email"
                  type="email"
                  className="mt-1 border-white/30 bg-white/10 text-text-primary placeholder:text-white/50"
                  placeholder="vous@exemple.fr"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "cta-email-error" : undefined}
                />
                {errors.email && (
                  <p id="cta-email-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="cta-phone" className="text-text-primary">Téléphone</Label>
                <Input
                  id="cta-phone"
                  type="tel"
                  className="mt-1 border-white/30 bg-white/10 text-text-primary placeholder:text-white/50"
                  placeholder="06 00 00 00 00"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "cta-phone-error" : undefined}
                />
                {errors.phone && (
                  <p id="cta-phone-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.phone}
                  </p>
                )}
              </div>
              <div className="pt-2">
                <Button type="submit" disabled={loading} className="btn-shimmer btn-primary w-full rounded-full bg-accent-hex py-3 sm:w-auto">
                  {loading ? "Envoi…" : "Être rappelé gratuitement"}
                </Button>
                <p className="mt-3 flex items-center gap-2 text-sm text-text-secondary">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-hex" aria-hidden />
                  Réponse sous 24h — sans engagement. Vos données sont sécurisées.
                </p>
              </div>
              <p className="mt-3 text-sm text-text-secondary">
                Aucune obligation. Vos informations restent privées. Pas de spam.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
