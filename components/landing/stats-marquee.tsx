"use client";

import { useEffect, useState } from "react";

export function StatsMarquee() {
  const [isVisible, setIsVisible] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-12 border-b border-foreground/10 overflow-hidden w-full relative">
      {/* Stats marquee */}
      <div
        className={`w-full transition-all duration-700 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="flex gap-16 marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-16">
              {[
                {
                  value: "20 days",
                  label: "saved on builds",
                  company: "NETFLIX",
                },
                { value: "98%", label: "faster deployment", company: "STRIPE" },
                {
                  value: "300%",
                  label: "throughput increase",
                  company: "LINEAR",
                },
                { value: "6x", label: "faster to ship", company: "NOTION" },
              ].map((stat) => (
                <div
                  key={`${stat.company}-${i}`}
                  className="flex items-baseline gap-4"
                >
                  <span className="text-4xl lg:text-5xl font-display">
                    {stat.value}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {stat.label}
                    <span className="block font-mono text-xs mt-1">
                      {stat.company}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
    </section>
  );
}
