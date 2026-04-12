"use client";

import { useRef, useEffect, useState } from "react";

export function AboutStorySection() {
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

  const milestones = [
    { year: "2020", label: "Founded" },
    { year: "50+", label: "Projects Launched" },
    { year: "12+", label: "Industries Served" },
    { year: "100%", label: "Client Retention" },
  ];

  return (
    <section ref={ref} className="relative py-24 lg:py-36 bg-background overflow-hidden border-t border-foreground/10">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-foreground/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1fr,1.6fr] gap-16 lg:gap-28 items-start">

          {/* Left — label + heading + stats */}
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              Our Story
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display leading-[1.1] tracking-tight mb-10">
              From Passion to a{" "}
              <span className="text-muted-foreground">Full-Service Digital Studio</span>
            </h2>

            {/* Stat pills */}
            <div className="grid grid-cols-2 gap-4">
              {milestones.map((m, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl border border-foreground/10 bg-foreground/[0.02] hover:border-foreground/30 transition-all duration-300"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <span className="block font-display text-3xl text-foreground">{m.year}</span>
                  <span className="block text-xs font-mono text-muted-foreground mt-1 uppercase tracking-widest">{m.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — story paragraphs */}
          <div className="space-y-6">
            {[
              "Floxia Studio was born from a shared frustration: too many businesses were investing significant resources into websites that underdelivered — slow to load, impossible to update, ugly on mobile, and invisible in search engines. Our founders, with deep backgrounds in software engineering, UI/UX design, and digital marketing, saw an opportunity to do things differently.",
              "We started by taking on complex custom development projects — the ones other agencies turned away. We built multi-platform e-commerce systems, integrated AI tools before they became mainstream, and designed brand identities that genuinely reflected each client's voice and vision. Word spread. Our client roster grew. And Floxia Studio evolved from a small but mighty team into a full-service web development powerhouse.",
              "Today, we partner with businesses of all sizes — from funded startups and local service providers to national retail brands and global e-commerce operations. Our portfolio spans dozens of industries and hundreds of successful website launches. But regardless of the project size, our commitment remains the same: deliver extraordinary work, on time, every time.",
            ].map((para, i) => (
              <p
                key={i}
                className={`text-base sm:text-lg text-foreground/75 leading-relaxed transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: `${200 + i * 120}ms` }}
              >
                {para}
              </p>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
