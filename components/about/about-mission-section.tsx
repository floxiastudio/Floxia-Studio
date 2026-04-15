"use client";

import { useRef, useEffect, useState } from "react";
import { Code2, Palette, Eye, Users, Zap } from "lucide-react";

const values = [
  {
    icon: Code2,
    title: "Technical Excellence",
    body: "We write clean, scalable, secure code. Always. No shortcuts, no hacks, no technical debt passed to the client.",
  },
  {
    icon: Palette,
    title: "Creative Integrity",
    body: "Design is not decoration it is communication. Every visual element we create serves your business objectives.",
  },
  {
    icon: Eye,
    title: "Radical Transparency",
    body: "Clear timelines, honest communication, and zero hidden fees. You always know exactly where your project stands.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    body: "We view our clients as long-term partners, not one-time transactions. Your success is our reputation.",
  },
  {
    icon: Zap,
    title: "Continuous Innovation",
    body: "The web evolves daily. We invest in continuous learning so our clients always benefit from the latest, most effective technologies.",
  },
];

export function AboutMissionSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative py-16 lg:py-24 bg-foreground text-primary-foreground overflow-hidden"
    >
      {/* Decorative circle */}
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-primary-foreground/5 rounded-full blur-[140px] pointer-events-none -translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary-foreground/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 translate-y-1/3" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className={`max-w-3xl mb-10 lg:mb-14 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex items-center gap-3 text-sm font-mono text-primary-foreground/50 mb-4">
            <span className="w-8 h-px bg-primary-foreground/30" />
            Our Mission & Values
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display leading-[1.1] tracking-tight mb-6">
            Driven by Purpose.{" "}
            <span className="opacity-50">Defined by Quality.</span>
          </h2>
          <p className="text-lg text-primary-foreground/70 leading-relaxed max-w-2xl">
            Our Mission: To empower businesses with world-class digital
            experiences that drive measurable growth, built with technical
            excellence and genuine creative ambition.
          </p>
        </div>

        {/* Values grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={i}
                className={`group p-7 rounded-2xl border border-primary-foreground/10 hover:border-primary-foreground/25 hover:bg-primary-foreground/[0.04] transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${200 + i * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center mb-5 group-hover:bg-primary-foreground/15 transition-colors">
                  <Icon className="w-5 h-5 text-primary-foreground" />
                </div>
                {/* Number label */}
                <span className="block font-mono text-xs text-primary-foreground/30 mb-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl text-primary-foreground mb-3">
                  {v.title}
                </h3>
                <p className="text-sm text-primary-foreground/60 leading-relaxed">
                  {v.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
