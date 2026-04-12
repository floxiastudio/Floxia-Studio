"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SocialProofSection() {
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
    <section ref={sectionRef} className="py-16 sm:py-24 lg:py-32 bg-background overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        <div className={`p-6 sm:p-12 lg:p-24 rounded-2xl sm:rounded-[2.5rem] lg:rounded-[3rem] bg-foreground text-background relative overflow-hidden transition-all duration-1000 ${isVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-12"}`}>
          
          {/* Decorative background circle */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-background/10 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-20 items-center">
            <div>
              <h2 className="text-2xl sm:text-4xl lg:text-6xl font-display font-bold leading-[1.1] mb-4 sm:mb-6 tracking-tight">
                Ready to build something extraordinary?
              </h2>
              <p className="text-sm sm:text-base lg:text-xl text-background/80 leading-relaxed mb-6 sm:mb-8 lg:mb-10 max-w-xl">
                Join a growing list of businesses across the United States that have partnered with Floxia Studio to transform their online presence. From lean startups to established brands requiring complex ecosystems — we have the expertise to deliver exceptional results.
              </p>
            </div>
            
            <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6 lg:items-end w-full">
              <a
                href="https://calendly.com/aithinkagents/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button className="w-full sm:w-auto h-12 sm:h-14 lg:h-16 px-6 sm:px-8 lg:px-10 rounded-full bg-background text-foreground hover:bg-background/90 text-sm sm:text-base lg:text-lg font-medium tracking-wide group transition-all shrink-0">
                  Get a Free Consultation Today
                  <span className="ml-2 px-2 py-0.5 sm:py-1 bg-foreground/10 text-foreground text-xs rounded-full group-hover:bg-foreground/20 transition-colors hidden sm:inline">
                    No Strings Attached
                  </span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
