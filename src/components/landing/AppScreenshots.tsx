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
      className="relative scroll-mt-20 overflow-hidden border-b border-[hsl(var(--border))] bg-gradient-to-b from-[#f5f7fa] to-[#F6FBFF] py-20 md:py-24"
    >
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[hsl(var(--accent))]/6 blur-3xl" aria-hidden />
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center animate-te-fade-up" style={{ animationDelay: "0.05s" }}>
          <span className="te-section-short-title mx-auto">Découverte</span>
          <h2 className="te-section-title-lg mt-4 text-[hsl(var(--te-dark))]">
            L&apos;app en images
          </h2>
          <p className="mt-3 text-lg text-[hsl(var(--te-body))]">
            Une interface simple pour gérer vos devis, factures et planning au quotidien.
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-10">
          {screenshots.map(({ src, alt, title, description }, i) => (
            <div
              key={src}
              className="animate-te-fade-up group overflow-hidden rounded-2xl border border-[hsl(var(--border))] bg-white shadow-[0px_0px_40px_0px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-xl"
              style={{ animationDelay: `${0.1 + i * 0.08}s` }}
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
                <h3 className="font-semibold text-[hsl(var(--te-dark))]">
                  {title}
                </h3>
                <p className="mt-1 text-sm text-[hsl(var(--te-body))]">
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
