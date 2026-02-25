import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — BTP Pilot",
  description: "Demandez une démo ou contactez l’équipe BTP Pilot.",
};

export default function ContactLayout({
  children,
}: { children: React.ReactNode }) {
  return children;
}
