"use client";

import { NicheData } from "@/lib/niches";
import { Check } from "lucide-react";
import { useRef } from "react";
import { useInView } from "framer-motion";

export function LandingBuiltSpecifically({ niche }: { niche: NicheData }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isVisible = isInView;

  return (
    <section className="py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2
              ref={ref}
              className={`font-display leading-[1.1] tracking-tight transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ fontSize: "clamp(2rem, 4vw, 3.1rem)" }}
            >
              {niche.builtSpecifically.title}
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              {niche.builtSpecifically.description}
            </p>
            <div className="space-y-4">
              {niche.builtSpecifically.items.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                    <Check className="h-3 w-3 text-primary-foreground" />
                  </div>
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-video rounded-3xl bg-muted overflow-hidden border border-border shadow-2xl">
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground italic font-medium">
              [High-Quality Dashboard or Platform Preview Image]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
