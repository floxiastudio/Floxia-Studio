"use client";

import { useRef, useEffect, useState } from "react";
import { Search, PenTool, Code2, Puzzle, BarChart2, Rocket } from "lucide-react";

const stages = [
  {
    icon: Search,
    number: "01",
    title: "Discovery",
    desc: "Deep-dive into your business, goals, competitors, and target audience to establish a rock-solid foundation.",
  },
  {
    icon: BarChart2,
    number: "02",
    title: "Strategy",
    desc: "Platform selection, information architecture, SEO keyword mapping, and technology stack planning.",
  },
  {
    icon: PenTool,
    number: "03",
    title: "Design",
    desc: "Wireframes, UI mockups, and brand-aligned visual design with your feedback built in at every step.",
  },
  {
    icon: Code2,
    number: "04",
    title: "Development",
    desc: "Clean, semantic, secure code with continuous staging environment access for your review throughout.",
  },
  {
    icon: Puzzle,
    number: "05",
    title: "Integration",
    desc: "All third-party tools, APIs, chatbots, and automation systems connected and thoroughly tested.",
  },
  {
    icon: BarChart2,
    number: "06",
    title: "SEO & Performance",
    desc: "Technical SEO audit, speed optimization, Core Web Vitals compliance, and schema markup implementation.",
  },
  {
    icon: Rocket,
    number: "07",
    title: "Launch & Support",
    desc: "Monitored deployment, post-launch testing, and ongoing support packages available to keep you growing.",
  },
];

export function AboutProcessSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setIsVisible(true); },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-24 lg:py-36 bg-background overflow-hidden border-t border-foreground/10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-foreground/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 lg:mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center justify-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Our Process
            <span className="w-8 h-px bg-foreground/30" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display leading-[1.1] tracking-tight mb-5">
            A Proven Process That{" "}
            <span className="text-stroke">Delivers Results</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Great websites are not built by accident. They are the product of a disciplined,
            well-structured process that puts client goals at the center of every decision.
          </p>
        </div>

        {/* Stages — alternating timeline feel on desktop */}
        <div className="relative">
          {/* Vertical connector line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-foreground/10" />

          <div className="space-y-6 lg:space-y-0">
            {stages.map((stage, i) => {
              const Icon = stage.icon;
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`relative lg:grid lg:grid-cols-2 lg:gap-16 items-center transition-all duration-700 lg:mb-10 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${200 + i * 100}ms` }}
                >
                  {/* Left slot */}
                  <div className={`${isLeft ? "lg:text-right lg:pr-16" : "lg:order-3 lg:pl-16"}`}>
                    {isLeft ? (
                      <StageCard stage={stage} Icon={Icon} />
                    ) : (
                      <div className="hidden lg:block" />
                    )}
                  </div>

                  {/* Center dot */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border-2 border-foreground/20 bg-background items-center justify-center z-10">
                    <span className="font-mono text-xs text-muted-foreground">{stage.number}</span>
                  </div>

                  {/* Right slot */}
                  <div className={`${!isLeft ? "lg:text-left lg:pl-16 lg:order-3" : "lg:pl-16"}`}>
                    {!isLeft ? (
                      <StageCard stage={stage} Icon={Icon} />
                    ) : (
                      <div className="hidden lg:block" />
                    )}
                  </div>

                  {/* Mobile card (always visible) */}
                  <div className="lg:hidden">
                    <StageCard stage={stage} Icon={Icon} />
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

function StageCard({ stage, Icon }: { stage: (typeof stages)[0]; Icon: React.ElementType }) {
  return (
    <div className="group flex items-start gap-4 p-6 rounded-2xl border border-foreground/10 hover:border-foreground/25 hover:bg-foreground/[0.02] transition-all duration-300 cursor-default">
      <div className="w-10 h-10 rounded-xl bg-foreground/5 flex items-center justify-center shrink-0 group-hover:bg-foreground/10 transition-colors">
        <Icon className="w-4 h-4 text-foreground" />
      </div>
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="font-mono text-xs text-muted-foreground">Stage {stage.number}</span>
        </div>
        <h3 className="font-display text-lg text-foreground mb-1">{stage.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{stage.desc}</p>
      </div>
    </div>
  );
}
