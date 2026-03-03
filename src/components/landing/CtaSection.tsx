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
      <section id="contact" className="relative scroll-mt-20 overflow-hidden border-b border-[hsl(var(--border))] py-20 md:py-24">
        <div className="te-bg-animated-cta" aria-hidden />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[hsl(var(--accent))]/8 blur-3xl animate-te-float-slow" aria-hidden style={{ animationDelay: "1s" }} />
        <div className="container relative mx-auto px-4">
          <div className="animate-te-fade-up mx-auto max-w-2xl rounded-2xl border border-[hsl(var(--accent))]/15 bg-white p-6 shadow-[0px_0px_60px_0px_rgba(0,0,0,0.08)] md:p-8" style={{ animationDelay: "0.1s" }}>
            <span className="te-section-short-title">Contact</span>
            <h2 className="te-section-title-lg mt-4 text-[hsl(var(--te-dark))]">Prêt à simplifier votre gestion ?</h2>
            <p className="mt-3 text-lg text-[hsl(var(--te-body))]">
              On vous rappelle pour comprendre votre activité et vous montrer comment gagner du temps dès cette semaine.
            </p>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <Label htmlFor="cta-name">Nom / Entreprise</Label>
                <Input
                  id="cta-name"
                  className="mt-1"
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
                <Label htmlFor="cta-email">Email</Label>
                <Input
                  id="cta-email"
                  type="email"
                  className="mt-1"
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
                <Label htmlFor="cta-phone">Téléphone</Label>
                <Input
                  id="cta-phone"
                  type="tel"
                  className="mt-1"
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
                <Button type="submit" disabled={loading} className="te-theme-btn w-full sm:w-auto animate-te-glow-soft">
                  {loading ? "Envoi…" : "Être rappelé gratuitement"}
                </Button>
                <p className="mt-3 text-sm text-[hsl(var(--muted-foreground))]">
                  Réponse sous 24h — sans engagement.
                </p>
              </div>
              <p className="mt-3 text-sm text-[hsl(var(--muted-foreground))]">
                Aucune obligation. Vos informations restent privées. Pas de spam.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
