"use client";

import { useEffect, useState, useRef } from "react";
import { Clock, PenTool, Search, ShieldCheck } from "lucide-react";

export function WhyChooseUsSection() {
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
    <section ref={sectionRef} className="py-24 lg:py-32 bg-background relative overflow-hidden">
      
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-foreground/[0.04] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center justify-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Why Choose Floxia Studio
            <span className="w-8 h-px bg-foreground/30" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-display leading-[1.1] tracking-tight mb-6">
            Fast Delivery. Branded Design. <br className="hidden sm:block"/>
            Built to Rank.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We've engineered our process to remove every common pain point associated with web development projects — missed deadlines, generic designs, poor communication, and sites that fail to perform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Clock className="w-6 h-6" />,
              title: "Fast Delivery",
              desc: "We deliver projects with industry-leading speed without sacrificing quality. Our tightly integrated team ensures you hit your launch dates flawlessly.",
            },
            {
              icon: <PenTool className="w-6 h-6" />,
              title: "Branded Design",
              desc: "Our design philosophy is rooted in your brand identity. We create visually distinctive digital experiences that communicate your unique value proposition.",
            },
            {
              icon: <Search className="w-6 h-6" />,
              title: "Built to Rank",
              desc: "Every website we build is SEO-optimized from the ground up. Your site is ready to rank, attract organic traffic, and generate leads from day one.",
            },
            {
              icon: <ShieldCheck className="w-6 h-6" />,
              title: "Hardened Security",
              desc: "Every target we deliver is hardened with SSL encryption, security headers, regular vulnerability scanning, and robust CDN protection for complete trust.",
            },
          ].map((feature, i) => (
            <div 
              key={i} 
              className={`flex flex-col p-8 rounded-3xl bg-background border border-border/80 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${(i * 100) + 200}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-foreground/5 text-foreground flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 font-display tracking-tight text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
