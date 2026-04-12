"use client";

import { useEffect, useState, useRef } from "react";

const integrations = [
  { name: "GitHub", category: "Version Control" },
  { name: "Slack", category: "Communication" },
  { name: "Stripe", category: "Payments" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Redis", category: "Cache" },
  { name: "AWS", category: "Cloud" },
  { name: "MongoDB", category: "Database" },
  { name: "Vercel", category: "Hosting" },
  { name: "Figma", category: "Design" },
  { name: "Linear", category: "Project Management" },
  { name: "Notion", category: "Documentation" },
  { name: "OpenAI", category: "AI/ML" },
];

export function IntegrationsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="integrations" ref={sectionRef} className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono text-muted-foreground mb-4 sm:mb-6">
            <span className="w-5 sm:w-8 h-px bg-foreground/30" />
            Integrations
            <span className="w-5 sm:w-8 h-px bg-foreground/30" />
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-display tracking-tight mb-3 sm:mb-5">
            Works with everything
            <br />
            you already use.
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground">
            200+ pre-built integrations. Connect your entire stack in minutes.
          </p>
        </div>

      </div>
      
      {/* Full-width marquees outside container */}
      <div className="w-full mb-3 sm:mb-5 lg:mb-6">
        <div className="flex gap-3 sm:gap-4 lg:gap-6 marquee">
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-3 sm:gap-4 lg:gap-6 shrink-0">
              {integrations.map((integration) => (
                <div
                  key={`${integration.name}-${setIndex}`}
                  className="shrink-0 px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 border border-foreground/10 hover:border-foreground/30 hover:bg-foreground/[0.02] transition-all duration-300 group"
                >
                  <div className="text-sm sm:text-base lg:text-lg font-medium group-hover:translate-x-1 transition-transform">
                    {integration.name}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{integration.category}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      
      {/* Reverse marquee */}
      <div className="w-full">
        <div className="flex gap-3 sm:gap-4 lg:gap-6 marquee-reverse">
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-3 sm:gap-4 lg:gap-6 shrink-0">
              {[...integrations].reverse().map((integration) => (
                <div
                  key={`${integration.name}-reverse-${setIndex}`}
                  className="shrink-0 px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 border border-foreground/10 hover:border-foreground/30 hover:bg-foreground/[0.02] transition-all duration-300 group"
                >
                  <div className="text-sm sm:text-base lg:text-lg font-medium group-hover:translate-x-1 transition-transform">
                    {integration.name}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{integration.category}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
