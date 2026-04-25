"use client";

import { NicheData } from "@/lib/niches";
import { AlertCircle, X } from "lucide-react";
import { useRef } from "react";
import { useInView } from "framer-motion";

export function LandingProblem({ niche }: { niche: NicheData }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isVisible = isInView;

  return (
    <section id="problem" className="relative py-12 lg:py-16 bg-background overflow-hidden">
      {/* Background decoration matching main site */}
      <div className="absolute left-0 top-0 w-full h-full opacity-[0.03] pointer-events-none select-none overflow-hidden">
         <div className="text-[20rem] font-display absolute -left-20 -top-20 leading-none">?</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-8 lg:mb-12">
           <span className="inline-block text-[10px] font-mono uppercase tracking-[0.4em] text-primary mb-6">The Challenge</span>
           <h2
             ref={ref}
             className={`font-display leading-[1.1] tracking-tight transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
             style={{ fontSize: "clamp(2rem, 4vw, 3.1rem)" }}
           >
             {niche.problem.headline}
           </h2>
           <div className="text-muted-foreground text-base lg:text-xl whitespace-pre-wrap leading-relaxed max-w-3xl mx-auto">
             {niche.problem.body}
           </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div className="space-y-4">
              {niche.problem.painPoints.slice(0, 3).map((point, i) => (
                <div key={i} className="flex items-center gap-6 p-6 rounded-2xl bg-foreground/5 border border-foreground/5 group hover:border-primary/20 transition-all duration-500 hover:translate-x-2">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                    <X className="h-5 w-5" />
                  </div>
                  <span className="text-foreground text-lg font-medium text-left">{point}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {niche.problem.painPoints.slice(3).map((point, i) => (
                <div key={i} className="flex items-center gap-6 p-6 rounded-2xl bg-foreground/5 border border-foreground/5 group hover:border-primary/20 transition-all duration-500 hover:translate-x-2">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                    <X className="h-5 w-5" />
                  </div>
                  <span className="text-foreground text-lg font-medium text-left">{point}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12 sm:mt-16 p-6 sm:p-10 rounded-[1.5rem] sm:rounded-[2.5rem] border-sketch bg-muted/20 relative max-w-3xl mx-auto text-center">
            <p className="text-lg sm:text-xl lg:text-2xl text-foreground font-display leading-relaxed italic opacity-90">
              {niche.problem.result}
            </p>
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-background border border-foreground/10 rounded-full flex items-center justify-center italic font-display text-2xl opacity-50">"</div>
          </div>
        </div>
      </div>
    </section>
  );
}
