import { Hero } from "@/components/landing/Hero";
import { ProblemSolution } from "@/components/landing/ProblemSolution";
import { Features } from "@/components/landing/Features";
import { AppScreenshots } from "@/components/landing/AppScreenshots";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { ForWho } from "@/components/landing/ForWho";
import { Faq } from "@/components/landing/Faq";
import { TrustedByLogos } from "@/components/landing/TrustedByLogos";
import { Pricing } from "@/components/landing/Pricing";
import { Testimonials } from "@/components/landing/Testimonials";
import { Trust } from "@/components/landing/Trust";
import { CtaSection } from "@/components/landing/CtaSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <Features />
      <AppScreenshots />
      <HowItWorks />
      <ForWho />
      <Faq />
      <TrustedByLogos />
      <Pricing />
      <Testimonials />
      <Trust />
      <CtaSection />
    </>
  );
}
