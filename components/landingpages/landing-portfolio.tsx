"use client";

import { NicheData } from "@/lib/niches";
import { useRef } from "react";
import { useInView } from "framer-motion";

export function LandingPortfolio({ niche }: { niche: NicheData }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isVisible = isInView;

  return (
    <section id="portfolio" className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            ref={ref}
            className={`font-display leading-[1.1] tracking-tight transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ fontSize: "clamp(2rem, 4vw, 3.1rem)" }}
          >
            Our Latest Work for {niche.id}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            High-performance digital solutions we've built for businesses just
            like yours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-[2rem] border border-border shadow-lg"
            >
              <div className="aspect-[16/10] bg-muted relative">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm italic">
                  [Project Image Display for {niche.slug}]
                </div>
              </div>
              <div className="p-8 bg-background">
                <h3 className="text-2xl font-bold mb-2">
                  Premium {niche.slug} Platform
                </h3>
                <p className="text-muted-foreground mb-6">
                  Custom design, SEO optimization, and integrated booking
                  systems.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    Next.js
                  </span>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    Tailwind
                  </span>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    SEO
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
