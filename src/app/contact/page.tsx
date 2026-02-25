"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { DemoDialog } from "@/components/landing/DemoDialog";
import { leadFormSchema, type LeadFormValues } from "@/lib/validations/lead";

export default function ContactPage() {
  const router = useRouter();
  const [demoOpen, setDemoOpen] = useState(false);
  const [form, setForm] = useState<LeadFormValues>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof LeadFormValues, string>>>({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = leadFormSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof LeadFormValues, string>> = {};
      result.error.errors.forEach((err) => {
        const key = err.path[0] as keyof LeadFormValues;
        if (key && !fieldErrors[key]) fieldErrors[key] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setLoading(true);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...result.data, source: "contact_page" }),
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
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="mx-auto max-w-xl">
        <h1 className="text-3xl font-bold">Contact</h1>
        <p className="mt-2 text-[hsl(var(--muted-foreground))]">
          Demandez une démo ou posez-nous vos questions. Nous vous recontactons rapidement.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <Label htmlFor="contact-name">Nom / Entreprise *</Label>
            <Input
              id="contact-name"
              className="mt-1"
              placeholder="Votre nom ou raison sociale"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "contact-name-error" : undefined}
            />
            {errors.name && (
              <p id="contact-name-error" className="mt-1 text-sm text-red-600" role="alert">
                {errors.name}
              </p>
            )}
          </div>
          <div>
            <Label htmlFor="contact-email">Email *</Label>
            <Input
              id="contact-email"
              type="email"
              className="mt-1"
              placeholder="vous@exemple.fr"
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "contact-email-error" : undefined}
            />
            {errors.email && (
              <p id="contact-email-error" className="mt-1 text-sm text-red-600" role="alert">
                {errors.email}
              </p>
            )}
          </div>
          <div>
            <Label htmlFor="contact-phone">Téléphone *</Label>
            <Input
              id="contact-phone"
              type="tel"
              className="mt-1"
              placeholder="06 00 00 00 00"
              value={form.phone}
              onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "contact-phone-error" : undefined}
            />
            {errors.phone && (
              <p id="contact-phone-error" className="mt-1 text-sm text-red-600" role="alert">
                {errors.phone}
              </p>
            )}
          </div>
          <div>
            <Label htmlFor="contact-message">Message</Label>
            <Textarea
              id="contact-message"
              className="mt-1 min-h-[120px]"
              placeholder="Votre message ou demande de démo..."
              value={form.message ?? ""}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "contact-message-error" : undefined}
            />
            {errors.message && (
              <p id="contact-message-error" className="mt-1 text-sm text-red-600" role="alert">
                {errors.message}
              </p>
            )}
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button type="submit" disabled={loading}>
              {loading ? "Envoi…" : "Envoyer"}
            </Button>
            <Button type="button" variant="outline" onClick={() => setDemoOpen(true)}>
              Voir une démo
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/">Retour à l’accueil</Link>
            </Button>
          </div>
        </form>
      </div>
      <DemoDialog open={demoOpen} onOpenChange={setDemoOpen} />
    </div>
  );
}
