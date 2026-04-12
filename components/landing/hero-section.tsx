"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedSphere } from "./animated-sphere";
import Link from "next/link";

// ─── Types ───────────────────────────────────────────────────────────────────

export interface HeroCta {
  label: string;
  href: string;
  /** If true, opens in a new browser tab */
  external?: boolean;
}

export interface HeroSectionProps {
  /** Small label above the headline e.g. "Floxia Studio" */
  eyebrow?: string;
  /** First line of the big headline */
  headingLine1?: string;
  /** Second line — the highlighted/underlined part */
  headingLine2?: string;
  /** Paragraph(s) below the headline — accepts a string or JSX */
  description?: React.ReactNode;
  /** Primary (filled) button */
  primaryCta?: HeroCta;
  /** Secondary (outline) button — omit to hide */
  secondaryCta?: HeroCta;
}

// ─── Defaults (homepage content) ─────────────────────────────────────────────

const defaults: Required<HeroSectionProps> = {
  eyebrow: "Floxia Studio",
  headingLine1: "Floxia Studio Builds",
  headingLine2: "What Businesses Need",
  description:
    "We are Floxia Studio — a full-service web design and development agency based in the USA, crafting high-performance websites, e-commerce stores, and AI-integrated digital systems for ambitious brands worldwide.",
  primaryCta: { label: "Start Your Project", href: "/onboarding" },
  secondaryCta: { label: "See Our Work", href: "#work" },
};

// ─── Component ────────────────────────────────────────────────────────────────

export function HeroSection({
  eyebrow = defaults.eyebrow,
  headingLine1 = defaults.headingLine1,
  headingLine2 = defaults.headingLine2,
  description = defaults.description,
  primaryCta = defaults.primaryCta,
  secondaryCta = defaults.secondaryCta,
}: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Helper: renders a CTA as a link (internal or external)
  const CtaLink = ({
    cta,
    children,
  }: {
    cta: HeroCta;
    children: React.ReactNode;
  }) =>
    cta.external ? (
      <a
        href={cta.href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-auto"
      >
        {children}
      </a>
    ) : (
      <Link href={cta.href} className="w-full sm:w-auto">
        {children}
      </Link>
    );

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Animated sphere background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] opacity-40 pointer-events-none">
        <AnimatedSphere />
      </div>

      {/* Subtle grid lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        {[...Array(8)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-foreground/10"
            style={{ top: `${12.5 * (i + 1)}%`, left: 0, right: 0 }}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px bg-foreground/10"
            style={{ left: `${8.33 * (i + 1)}%`, top: 0, bottom: 0 }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-24 sm:py-32 lg:py-40">
        {/* Eyebrow */}
        <div
          className={`mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground">
            <span className="w-8 h-px bg-foreground/30" />
            {eyebrow}
          </span>
        </div>

        {/* Main headline */}
        <div className="mb-8 sm:mb-12">
          <h1
            className={`text-[clamp(2.25rem,6vw,7rem)] font-display leading-[1.1] tracking-tight transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="block">{headingLine1}</span>
            <span className="block mt-2 sm:mt-0">
              <span className="relative inline-block whitespace-nowrap">
                {headingLine2}
                <span className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-2 sm:h-3 bg-foreground/10" />
              </span>
            </span>
          </h1>
        </div>

        {/* Description + CTAs */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-24 lg:items-end">
          <div
            className={`text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl transition-all duration-700 delay-200 space-y-4 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            {description}
          </div>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 transition-all duration-700 delay-300 w-full sm:w-auto ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            {/* Primary CTA */}
            <CtaLink cta={primaryCta}>
              <Button
                size="lg"
                className="bg-foreground hover:bg-foreground/90 text-background px-6 sm:px-8 h-12 sm:h-14 text-sm sm:text-base rounded-full group w-full"
              >
                {primaryCta.label}
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </CtaLink>

            {/* Secondary CTA — only rendered when provided */}
            {secondaryCta && (
              <CtaLink cta={secondaryCta}>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-6 sm:px-8 h-12 sm:h-14 text-sm sm:text-base rounded-full border-foreground/20 hover:bg-foreground/5 group w-full sm:w-auto"
                >
                  {secondaryCta.label}
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </CtaLink>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
