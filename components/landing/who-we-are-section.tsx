"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function WhoWeAreSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden bg-background">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-foreground/5 rounded-full blur-[120px] opacity-40 mix-blend-screen pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1fr,1.5fr] gap-12 lg:gap-16 items-start">
          {/* Header Column */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="flex items-center gap-3 text-sm font-mono text-muted-foreground mb-4">
              <span className="w-8 h-px bg-foreground/30" />
              Who We Are
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-display leading-[1.1] tracking-tight">
              We build systems, <br className="hidden lg:block" />
              <span className="text-muted-foreground">not just templates.</span>
            </h2>
          </div>

          {/* Content Column */}
          <div className="space-y-8">
            <p
              className={`text-lg sm:text-xl text-foreground/80 leading-relaxed transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              At Floxia Studio, we don't just build websites, we build digital
              infrastructure that drives real business outcomes. Whether you
              need a blazing-fast custom-coded platform in Next.js or React, a
              fully branded Shopify store, a powerful WordPress CMS, or an
              Angular enterprise application, our team of full-stack developers,
              UI/UX designers, and SEO strategists have the expertise to deliver
              it.
            </p>

            <p
              className={`text-lg sm:text-xl text-foreground/80 leading-relaxed transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              We work with startups, established businesses, e-commerce brands,
              SaaS companies, and service providers across the United States.
              Our process is collaborative, our timelines are fast, and our
              results speak for themselves. From the first wireframe to the
              final launch, we obsess over every detail performance, security,
              design, and conversion.
            </p>

            <div
              className={`p-8 sm:p-10 rounded-3xl bg-foreground/[0.02] border border-border/50 backdrop-blur-xl transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <h3 className="text-xl font-bold mb-4 font-display tracking-tight text-foreground">
                Beyond standard web development
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                What sets Floxia Studio apart is our ability to integrate modern
                technology directly into your website. Think AI-powered
                chatbots, WhatsApp integrations, automated email systems,
                booking forms, CRM dashboards, and sales-optimized product pages
                all built into a single, seamlessly functioning platform.
              </p>
              <Link
                href="/onboarding"
                className="inline-flex items-center gap-2 mt-6 text-sm font-semibold tracking-wide text-foreground hover:opacity-70 transition-opacity group"
              >
                WORK WITH US
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
