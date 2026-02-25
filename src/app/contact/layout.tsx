import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Aos Renov",
  description: "Demandez une démo ou contactez l’équipe Aos Renov.",
};

export default function ContactLayout({
  children,
}: { children: React.ReactNode }) {
  return children;
}
