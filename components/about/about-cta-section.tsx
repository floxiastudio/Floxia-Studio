"use client";

import { useRef, useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export function AboutCtaSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 lg:py-36 bg-background border-t border-foreground/10 overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className={`p-10 sm:p-16 lg:p-24 rounded-3xl bg-foreground text-primary-foreground relative overflow-hidden transition-all duration-1000 ${isVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-12"}`}
        >
          {/* Decorative blur */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-foreground/10 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Left */}
            <div>
              <div className="flex items-center gap-3 text-sm font-mono text-primary-foreground/50 mb-6">
                <span className="w-8 h-px bg-primary-foreground/30" />
                Ready to Start?
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.1] mb-6 tracking-tight">
                Let's Build Something Together
              </h2>
              <p className="text-base sm:text-lg text-primary-foreground/70 leading-relaxed max-w-xl">
                Whether you're launching your first business website, scaling an e-commerce operation,
                or rebuilding a digital platform that no longer serves your growth — Floxia Studio is
                ready to be your partner. We bring the technical depth, creative vision, and strategic
                thinking to help your business thrive online.
              </p>
            </div>

            {/* Right — CTA */}
            <div className="flex flex-col gap-4 lg:items-end">
              <a
                href="https://calendly.com/aithinkagents/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary-foreground text-foreground px-8 py-4 rounded-full text-sm font-medium hover:bg-primary-foreground/90 transition-all group"
              >
                Schedule a Free Discovery Call
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="/onboarding"
                className="inline-flex items-center gap-3 border border-primary-foreground/20 text-primary-foreground px-8 py-4 rounded-full text-sm font-medium hover:border-primary-foreground/50 hover:bg-primary-foreground/5 transition-all group"
              >
                Start a Project
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
