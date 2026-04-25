"use client";

import { NicheData } from "@/lib/niches";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export function LandingFaqs({ niche }: { niche: NicheData }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isVisible = isInView;

  return (
    <section id="faqs" className="py-10 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2
              ref={ref}
              className={`font-display leading-[1.1] tracking-tight transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ fontSize: "clamp(2rem, 4vw, 3.1rem)" }}
            >
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">Everything you need to know about our services for {niche.slug}.</p>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            {niche.faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-border/50">
                <AccordionTrigger className="text-left py-6 text-lg hover:no-underline hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
