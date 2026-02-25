import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Message envoyé — BTP Pilot",
  description: "Votre demande a bien été envoyée. Nous vous recontactons rapidement.",
  robots: "noindex, follow",
};

export default function MerciPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 text-center">
      <div className="mx-auto max-w-md">
        <div className="flex justify-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
            <CheckCircle className="h-10 w-10" />
          </span>
        </div>
        <h1 className="mt-6 text-2xl font-bold">Message envoyé</h1>
        <p className="mt-2 text-[hsl(var(--muted-foreground))]">
          Merci pour votre demande. Nous vous recontactons dans les plus brefs délais.
        </p>
        <Button asChild className="mt-8">
          <Link href="/">Retour à l’accueil</Link>
        </Button>
      </div>
    </div>
  );
}
