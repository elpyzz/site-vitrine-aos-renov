import Image from "next/image";

const screenshots = [
  {
    src: "/app-dashboard.png",
    alt: "Tableau de bord Aos Renov — vue d'ensemble, devis, chantiers et facturation",
    title: "Vue d'ensemble",
    description: "Devis, chantiers actifs et facturation en un coup d'œil.",
  },
  {
    src: "/app-planning.png",
    alt: "Planning des chantiers Aos Renov — calendrier des interventions",
    title: "Planning des chantiers",
    description: "Organisez vos interventions sur un calendrier clair.",
  },
];

export function AppScreenshots() {
  return (
    <section
      id="app-en-images"
      className="scroll-mt-20 border-b border-[hsl(var(--border))] bg-[#f5f7fa] py-20 md:py-24"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">
            L&apos;app en images
          </h2>
          <p className="mt-2 text-[hsl(var(--muted-foreground))]">
            Une interface simple pour gérer vos devis, factures et planning au quotidien.
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-10">
          {screenshots.map(({ src, alt, title, description }) => (
            <div
              key={src}
              className="group overflow-hidden rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--muted))]/20 shadow-md transition-shadow hover:shadow-xl"
            >
              <div className="relative flex min-h-[280px] w-full items-center justify-center overflow-hidden md:min-h-[340px]">
                <Image
                  src={src}
                  alt={alt}
                  width={1200}
                  height={800}
                  className="w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 900px"
                  quality={95}
                />
              </div>
              <div className="border-t border-[hsl(var(--border))] bg-white px-5 py-4">
                <h3 className="font-semibold text-[hsl(var(--foreground))]">
                  {title}
                </h3>
                <p className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
