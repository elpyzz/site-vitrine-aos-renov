interface LegalLayoutProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function LegalLayout({ title, description, children }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20 max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-[hsl(var(--foreground))] md:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-lg text-[hsl(var(--muted-foreground))]">
            {description}
          </p>
        )}
        <div className="mt-10 space-y-10 md:space-y-12">
          {children}
        </div>
      </div>
    </div>
  );
}
