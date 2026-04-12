"use client";

import { useEffect, useState, useRef } from "react";
import { Code2, ShoppingCart, Bot } from "lucide-react";

const DATA = [
  {
    title: "Custom Web Development",
    icon: <Code2 className="w-6 h-6" />,
    text: "Floxia Studio is platform-agnostic by design. We are fluent in every major web technology available today, which means we choose the right tool for your specific project — not the one we're most comfortable with. For businesses that need complete control and performance, we build fully custom-coded websites from scratch using modern JavaScript frameworks. For content-heavy sites and blogs, we craft powerful WordPress solutions with optimized database architecture.",
  },
  {
    title: "E-Commerce That Sells",
    icon: <ShoppingCart className="w-6 h-6" />,
    text: "Our e-commerce websites are built with one goal in mind: revenue. We design and develop Shopify stores, WooCommerce shops, and custom cart systems that deliver seamless user experiences, lightning-fast load times, secure payment gateways, and conversion-optimized product pages. Every design decision we make is backed by data, user behavior analysis, and best-in-class UX research.",
  },
  {
    title: "AI & Smart Automation",
    icon: <Bot className="w-6 h-6" />,
    text: "The future of web development is intelligent systems, and Floxia Studio is already building it. We integrate AI-powered chatbots, WhatsApp business automation, smart contact forms, email marketing pipelines, booking and appointment systems, and custom business dashboards into every project we touch. Our websites don't just display information — they actively work for your business around the clock.",
  },
];

export function WhatWeDoSection() {
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
    <section ref={sectionRef} className="relative py-24 lg:py-32 bg-background border-t border-border/50">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        
        <div className={`max-w-2xl mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            What We Do Best
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display leading-[1.1] tracking-tight mb-6">
            Engineered for <span className="text-muted-foreground">growth.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {DATA.map((item, i) => (
            <div 
              key={i}
              className={`group flex flex-col p-8 lg:p-10 rounded-3xl bg-foreground/[0.02] border border-border/50 hover:bg-foreground/[0.04] transition-all duration-500 shadow-sm hover:shadow-xl ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="w-12 h-12 rounded-2xl bg-foreground text-background flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold font-display tracking-tight mb-4">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed flex-grow">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
