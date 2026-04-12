"use client";

import { useEffect, useState, useRef } from "react";

const STACK = [
  {
    category: "Frontend",
    items: ["Next.js", "React.js", "Angular", "Vue.js", "Tailwind CSS", "TypeScript"],
  },
  {
    category: "CMS Platforms",
    items: ["WordPress", "Shopify", "Webflow", "Contentful", "Sanity", "Strapi"],
  },
  {
    category: "E-Commerce",
    items: ["Shopify Plus", "WooCommerce", "Magento", "BigCommerce"],
  },
  {
    category: "Backend & APIs",
    items: ["Node.js", "Express", "REST APIs", "GraphQL", "Firebase"],
  },
  {
    category: "Integrations",
    items: ["WhatsApp API", "OpenAI API", "Twilio", "Stripe", "HubSpot"],
  },
  {
    category: "DevOps & Security",
    items: ["Vercel", "Cloudflare", "SSL/TLS", "CDN", "GDPR compliance"],
  },
];

export function TechStackSection() {
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
    <section ref={sectionRef} className="py-24 lg:py-32 bg-foreground text-background">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        <div className={`grid lg:grid-cols-[1fr,2fr] gap-12 lg:gap-24 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          
          {/* Header */}
          <div>
            <div className="flex items-center gap-3 text-sm font-mono text-muted mb-6">
              <span className="w-8 h-px bg-background/30" />
              Technology Stack
            </div>
            <h2 className="text-4xl md:text-5xl font-display leading-[1.1] tracking-tight mb-6">
              Masters of the Full <br/> Web Technology Stack
            </h2>
            <p className="text-muted leading-relaxed text-lg">
              We believe mastery of technology is what separates good agencies from great ones. At Floxia Studio, our developers are continuously trained in the latest web technologies, frameworks, and best practices.
            </p>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 gap-8 md:gap-x-12 md:gap-y-10">
            {STACK.map((group, i) => (
              <div 
                key={i} 
                className={`transition-all duration-700 delay-${(i * 100) + 300} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                <h3 className="font-mono text-xs tracking-wider uppercase text-muted mb-4 pb-2 border-b border-background/20">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item, j) => (
                    <span 
                      key={j} 
                      className="px-3 py-1.5 rounded-md text-sm font-medium bg-background/10 text-background/90 hover:bg-background hover:text-foreground transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
