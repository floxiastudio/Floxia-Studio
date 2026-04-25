"use client";

import { NicheData } from "@/lib/niches";
import { Compass, PenTool, MapPin, ShieldCheck, ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { useInView } from "framer-motion";

const icons = {
  Compass,
  PenTool,
  MapPin,
  ShieldCheck,
};

export function LandingDifferent({ niche }: { niche: NicheData }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isVisible = isInView;

  return (
    <section id="solution" className="py-16 lg:py-20 relative overflow-hidden bg-background">
      {/* Architectural Background Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-[1400px] mx-auto lg:px-12">
          <div className="flex flex-col items-center text-center mb-10 lg:mb-16">
            <div className="max-w-3xl">
               <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full border border-foreground/10 mb-8">
                  <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-primary">Strategic Difference</span>
               </div>
               <h2
                 ref={ref}
                 className={`font-display leading-[1.1] tracking-tight transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                 style={{ fontSize: "clamp(2rem, 4vw, 3.1rem)" }}
               >
                 {niche.different.headline}
               </h2>
               <p className="text-muted-foreground text-lg lg:text-xl opacity-60 max-w-2xl mx-auto leading-relaxed">
                 {niche.different.subheadline}
               </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10 rounded-[2rem] sm:rounded-[4rem] overflow-hidden shadow-2xl">
            {niche.different.cards.map((card, i) => {
              const Icon = icons[card.icon as keyof typeof icons] || Compass;
              return (
                <div key={i} className="p-10 lg:p-20 bg-background group hover:bg-muted/30 transition-all duration-700 relative overflow-hidden">
                  {/* Subtle hover glow */}
                  <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-foreground/5 flex items-center justify-center mb-10 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-700 shadow-sm border border-foreground/5 group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(var(--primary),0.2)]">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold mb-6 tracking-tight group-hover:translate-x-2 transition-transform duration-500">{card.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-base lg:text-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500 max-w-sm">
                      {card.description}
                    </p>
                  </div>
                  
                  <div className="absolute bottom-10 right-10 opacity-10 group-hover:opacity-40 transition-opacity duration-500 scale-150 group-hover:scale-100 transition-transform duration-700">
                    <ArrowUpRight className="h-8 w-8 text-primary" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
