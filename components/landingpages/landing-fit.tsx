"use client";

import { NicheData } from "@/lib/niches";
import { CheckCircle2, XCircle } from "lucide-react";
import { useRef } from "react";
import { useInView } from "framer-motion";

export function LandingFit({ niche }: { niche: NicheData }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isVisible = isInView;

  return (
    <section className="py-12 lg:py-20 relative bg-background overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-foreground/[0.03]" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-foreground/[0.03]" />
        <div className="absolute top-1/4 left-0 w-full h-px bg-foreground/[0.03]" />
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-foreground/[0.03]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-[1400px] mx-auto lg:px-12">
          <div className="max-w-3xl mb-8 lg:mb-12 mx-auto text-center">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-primary">
                Alignment Check
              </span>
            </div>
            <h2
              ref={ref}
              className={`font-display leading-[1.1] tracking-tight transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ fontSize: "clamp(2rem, 4vw, 3.1rem)" }}
            >
              {niche.fit.headline}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Great Fit Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-primary/20 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative p-10 sm:p-14 lg:p-20 rounded-[3rem] bg-foreground text-background overflow-hidden shadow-2xl transition-all duration-700 hover:-translate-y-2 border border-foreground">
                <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity duration-700 rotate-12 group-hover:rotate-0">
                  <CheckCircle2 className="h-48 w-48" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-6 mb-12">
                    <div className="h-14 w-14 rounded-2xl bg-primary flex items-center justify-center shadow-[0_0_30px_rgba(var(--primary),0.3)]">
                      <CheckCircle2 className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
                      Ideal For
                    </h3>
                  </div>

                  <ul className="space-y-8">
                    {niche.fit.greatFit.map((item, i) => (
                      <li key={i} className="flex items-start gap-5 group/item">
                        <div className="mt-1.5 flex-shrink-0 h-6 w-6 rounded-full border border-primary/30 flex items-center justify-center transition-all duration-500 group-hover/item:border-primary group-hover/item:bg-primary/10">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        </div>
                        <span className="text-lg sm:text-xl font-medium leading-tight opacity-70 group-hover/item:opacity-100 transition-opacity duration-300">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Not a Fit Card */}
            <div className="group relative">
              <div className="relative p-10 sm:p-14 lg:p-20 rounded-[3rem] bg-muted/10 border border-foreground/5 overflow-hidden transition-all duration-700 hover:-translate-y-2 backdrop-blur-sm">
                <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-700 -rotate-12 group-hover:rotate-0">
                  <XCircle className="h-48 w-48" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-6 mb-12">
                    <div className="h-14 w-14 rounded-2xl bg-foreground/5 flex items-center justify-center border border-foreground/10">
                      <XCircle className="h-7 w-7 opacity-40" />
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-display font-bold tracking-tight opacity-40">
                      Not a Match
                    </h3>
                  </div>

                  <ul className="space-y-8">
                    {niche.fit.notFit.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-5 group/item opacity-40 hover:opacity-100 transition-opacity duration-500"
                      >
                        <div className="mt-1.5 flex-shrink-0 h-6 w-6 rounded-full border border-foreground/10 flex items-center justify-center">
                          <div className="h-px w-2 bg-foreground/40" />
                        </div>
                        <span className="text-lg sm:text-xl font-medium leading-tight line-through decoration-foreground/20">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
