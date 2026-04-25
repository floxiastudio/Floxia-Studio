import { NicheData } from "@/lib/niches";

export function LandingProcess({ niche }: { niche: NicheData }) {
  return (
    <section
      id="process"
      className="py-12 lg:py-16 bg-muted/20 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-[1400px] mx-auto lg:px-12">
          <div className="max-w-3xl mb-8 lg:mb-12 mx-auto text-center">
            <span className="inline-block text-[10px] font-mono uppercase tracking-[0.4em] text-primary mb-6">
              Process
            </span>
            <h2
              className="font-display leading-[1.1] tracking-tight mb-8"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
            >
              {niche.process.headline}
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg lg:text-xl leading-relaxed opacity-80">
              {niche.process.subheadline}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-foreground/10 border border-foreground/10 rounded-[1.5rem] sm:rounded-[3rem] overflow-hidden">
            {niche.process.steps.map((step, i) => (
              <div
                key={i}
                className="p-8 sm:p-10 lg:p-12 bg-background group hover:bg-muted/50 transition-all duration-500"
              >
                <div className="text-4xl sm:text-6xl font-display font-bold text-foreground/5 group-hover:text-primary/20 transition-colors duration-500 mb-6 sm:mb-8">
                  0{i + 1}
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-display font-bold mb-4 sm:mb-6 group-hover:translate-x-2 transition-transform duration-500">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base opacity-80">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
