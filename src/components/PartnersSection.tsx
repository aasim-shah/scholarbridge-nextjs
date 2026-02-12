const partners = [
  "Harvard University",
  "MIT",
  "Stanford",
  "Oxford",
  "Cambridge",
  "ETH Zürich",
  "Caltech",
  "Yale",
];

export function PartnersSection() {
  return (
    <section className="py-10 bg-card border-y border-border">
      <div className="container">
        <p className="text-center text-sm text-muted-foreground mb-6">
          Scholarships from world-renowned institutions
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {partners.map((partner, index) => (
            <div
              key={partner}
              className="text-muted-foreground/60 hover:text-foreground font-display font-semibold text-sm md:text-base transition-colors duration-200 animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
