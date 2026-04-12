"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Copy, MoveLeft } from "lucide-react";
import Link from "next/link";

const STEPS = [
  {
    id: "biz",
    label: "Business info",
    heading: "Tell us about your business",
    sub: "We need the basics to understand who you are and who your customers are.",
    fields: [
      {
        type: "row",
        children: [
          { id: "f_name", label: "Your full name", req: true, inputType: "text", placeholder: "Jane Smith" },
          { id: "f_role", label: "Your role / title", req: true, inputType: "text", placeholder: "CEO, Founder, Marketing Manager…" },
        ],
      },
      {
        type: "row",
        children: [
          { id: "f_bname", label: "Business name", req: true, inputType: "text", placeholder: "Acme Inc." },
          { id: "f_industry", label: "Industry / niche", req: true, inputType: "text", placeholder: "E-commerce, SaaS, Real Estate…" },
        ],
      },
      { id: "f_email", label: "Email address", req: true, inputType: "email", placeholder: "you@yourcompany.com" },
      { id: "f_phone", label: "Phone number", req: false, inputType: "text", placeholder: "+1 (555) 000-0000 (optional)" },
      { id: "f_website", label: "Existing website URL", req: false, inputType: "text", placeholder: "https://… (leave blank if none)" },
      {
        id: "f_desc",
        label: "Describe your business in a few sentences",
        req: true,
        inputType: "textarea",
        placeholder: "What do you sell or offer? Who are your customers? What makes you different from competitors?",
      },
      {
        id: "f_audience",
        label: "Who is your target audience?",
        req: true,
        inputType: "textarea",
        placeholder: "Age range, location, job titles, income level, interests, pain points…",
      },
    ],
  },
  {
    id: "goals",
    label: "Goals",
    heading: "Project goals & requirements",
    sub: "Understanding what success looks like helps us design and build with purpose.",
    fields: [
      {
        id: "f_sitetype",
        label: "What type of website do you need?",
        req: true,
        inputType: "chips",
        multi: false,
        options: [
          "Business / brochure",
          "E-commerce store",
          "Portfolio / showcase",
          "SaaS / web app",
          "Blog / content site",
          "Landing page",
          "Booking / service site",
          "Other",
        ],
      },
      {
        id: "f_goals",
        label: "Primary goals for this website",
        req: true,
        inputType: "chips",
        multi: true,
        options: [
          "Generate leads",
          "Sell products online",
          "Book appointments",
          "Build brand awareness",
          "Replace existing site",
          "Attract investors",
          "Showcase portfolio",
          "Automate customer inquiries",
        ],
      },
      {
        id: "f_pages",
        label: "Pages you need",
        req: false,
        inputType: "chips",
        multi: true,
        options: [
          "Home",
          "About",
          "Services",
          "Portfolio",
          "Blog",
          "Pricing",
          "Contact",
          "FAQ",
          "Booking",
          "Product pages",
          "Landing pages",
          "Dashboard / member login",
        ],
      },
      {
        id: "f_integrations",
        label: "Integrations & special features",
        req: false,
        inputType: "chips",
        multi: true,
        options: [
          "Contact form",
          "Booking / calendar",
          "AI chatbot",
          "WhatsApp button",
          "Email marketing",
          "CRM connection",
          "Payment gateway",
          "Live chat",
          "Analytics dashboard",
          "Multi-language",
          "Social media feeds",
        ],
      },
      {
        id: "f_launch",
        label: "Desired launch timeline",
        req: true,
        inputType: "chips",
        multi: false,
        options: ["ASAP (2–3 weeks)", "1 month", "6–8 weeks", "3 months+", "Flexible — quality over speed"],
      },
      {
        id: "f_budget",
        label: "Estimated project budget (USD)",
        req: true,
        inputType: "chips",
        multi: false,
        options: ["Under $2,000", "$2,000–$5,000", "$5,000–$10,000", "$10,000–$25,000", "$25,000+", "Not sure yet"],
      },
    ],
  },
  {
    id: "brand",
    label: "Branding",
    heading: "Brand & visual identity",
    sub: "Great design starts with a clear brand direction. Share yours — or tell us to start fresh.",
    fields: [
      {
        id: "f_haslogo",
        label: "Do you have existing brand assets?",
        req: true,
        inputType: "chips",
        multi: false,
        options: [
          "Yes — full brand kit (logo, fonts, colors)",
          "Yes — just a logo",
          "Partial — some assets exist",
          "No — starting completely from scratch",
        ],
      },
      { id: "f_colors", label: "Preferred brand colors", note: "— pick up to 3", req: false, inputType: "colors" },
      {
        id: "f_vibe",
        label: "What feeling should your website give visitors?",
        req: true,
        inputType: "chips",
        multi: true,
        options: [
          "Professional & trustworthy",
          "Bold & energetic",
          "Minimal & clean",
          "Warm & friendly",
          "Luxury & premium",
          "Fun & playful",
          "Tech & innovative",
          "Earthy & organic",
        ],
      },
      {
        id: "f_fonts",
        label: "Typography style preference",
        req: false,
        inputType: "chips",
        multi: false,
        options: ["Modern sans-serif", "Classic serif", "Geometric / display", "Mixed — pair both", "No preference — you decide"],
      },
      {
        id: "f_inspo",
        label: "Website inspiration — URLs you admire",
        req: false,
        inputType: "textarea",
        placeholder: "Share 1–3 websites you love and briefly note what appeals to you about each one.",
      },
      {
        id: "f_avoid",
        label: "Anything to avoid in the design?",
        req: false,
        inputType: "textarea",
        placeholder: "Colors, styles, layouts, or design trends you dislike or that don't fit your brand.",
      },
    ],
  },
  {
    id: "content",
    label: "Content",
    heading: "Content & copy",
    sub: "Content is the foundation of every great website. Tell us what you have and what you need.",
    fields: [
      {
        id: "f_copy",
        label: "Who will write the website copy?",
        req: true,
        inputType: "chips",
        multi: false,
        options: ["We provide all copy", "Floxia Studio writes it (SEO-optimized)", "We provide drafts — you refine", "Not sure yet"],
      },
      {
        id: "f_images",
        label: "What image assets do you have?",
        req: true,
        inputType: "chips",
        multi: true,
        options: [
          "Professional brand photos",
          "Product photos",
          "Team / headshots",
          "Brand illustrations / icons",
          "None — need stock photos",
          "None — need custom photography brief",
        ],
      },
      {
        id: "f_video",
        label: "Will the site include video?",
        req: false,
        inputType: "chips",
        multi: false,
        options: ["Yes — video ready to upload", "Yes — needs to be produced", "Background / ambient video only", "No video"],
      },
      {
        id: "f_blog",
        label: "Will the site have a blog or content hub?",
        req: false,
        inputType: "chips",
        multi: false,
        options: ["Yes — active blog planned", "Yes — need to migrate existing posts", "Maybe in future", "No"],
      },
      {
        id: "f_seo",
        label: "SEO content strategy",
        req: true,
        inputType: "chips",
        multi: false,
        options: ["Yes — full SEO content strategy", "Basic on-page SEO only", "We handle SEO ourselves", "Not a priority right now"],
      },
      {
        id: "f_languages",
        label: "Languages the site needs to support",
        req: false,
        inputType: "chips",
        multi: true,
        options: ["English only", "Spanish", "French", "Arabic", "Portuguese", "Other"],
      },
      {
        id: "f_addcontent",
        label: "Anything else about your content?",
        req: false,
        inputType: "textarea",
        placeholder: "Tone of voice, key messages, terminology to use or avoid, content you're proud of, or anything else.",
      },
    ],
  },
  {
    id: "tech",
    label: "Technical",
    heading: "Technical & final details",
    sub: "A few last questions about platform preferences, access, and anything else on your mind.",
    fields: [
      {
        id: "f_platform",
        label: "Preferred platform / technology",
        req: false,
        inputType: "chips",
        multi: false,
        options: [
          "Next.js / React (fastest & most scalable)",
          "WordPress (easy to manage)",
          "Shopify (e-commerce first)",
          "Angular (enterprise applications)",
          "Webflow (visual CMS)",
          "No preference — recommend for me",
        ],
      },
      {
        id: "f_hosting",
        label: "Hosting situation",
        req: false,
        inputType: "chips",
        multi: false,
        options: ["We have existing hosting", "Need hosting recommended", "Managed hosting via Floxia Studio", "Not sure yet"],
      },
      {
        id: "f_domain",
        label: "Domain status",
        req: false,
        inputType: "chips",
        multi: false,
        options: ["We own the domain", "Need to purchase a domain", "Need help transferring a domain"],
      },
      {
        id: "f_maintain",
        label: "Post-launch maintenance",
        req: true,
        inputType: "chips",
        multi: false,
        options: ["Yes — monthly retainer wanted", "Occasional updates only", "We'll manage it ourselves", "Decide after launch"],
      },
      {
        id: "f_competitors",
        label: "Who are your top 1–3 competitors?",
        req: false,
        inputType: "textarea",
        placeholder: "List competitor names or URLs. This helps us position your site strategically in the market.",
      },
      {
        id: "f_anything",
        label: "Anything else we should know before we start?",
        req: false,
        inputType: "textarea",
        placeholder: "Special requirements, project history, concerns, tight deadlines, or questions for our team.",
      },
      {
        id: "f_hear",
        label: "How did you find Floxia Studio?",
        req: false,
        inputType: "chips",
        multi: false,
        options: ["Google search", "Referral / word of mouth", "Social media", "Clutch / directory listing", "Portfolio / previous work", "Other"],
      },
    ],
  },
];

const COLOR_OPTS = [
  { hex: "#0a0a0a", label: "Black" },
  { hex: "#1a1a6e", label: "Navy" },
  { hex: "#5B4EE8", label: "Purple" },
  { hex: "#1D9E75", label: "Teal" },
  { hex: "#D85A30", label: "Coral" },
  { hex: "#378ADD", label: "Blue" },
  { hex: "#EF9F27", label: "Amber" },
  { hex: "#D4537E", label: "Rose" },
  { hex: "#888780", label: "Gray" },
  { hex: "#f5f5f5", label: "White" },
];

export function OnboardingForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formState, setFormState] = useState<Record<string, any>>({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  const formBodyRef = useRef<HTMLDivElement>(null);

  // Scroll to top of section on step change
  useEffect(() => {
    if (formBodyRef.current && currentStep > 0) {
      window.scrollTo({
        top: formBodyRef.current.offsetTop - 120,
        behavior: "smooth",
      });
    }
  }, [currentStep]);

  const handleChange = (id: string, value: any) => {
    setFormState((prev) => ({ ...prev, [id]: value }));
  };

  const toggleChip = (id: string, multi: boolean, val: string) => {
    setFormState((prev) => {
      if (multi) {
        const currentArr = Array.isArray(prev[id]) ? [...prev[id]] : [];
        if (currentArr.includes(val)) {
          return { ...prev, [id]: currentArr.filter((v) => v !== val) };
        } else {
          return { ...prev, [id]: [...currentArr, val] };
        }
      } else {
        return { ...prev, [id]: val };
      }
    });
  };

  const toggleColor = (hex: string) => {
    setFormState((prev) => {
      const currentArr = Array.isArray(prev["f_colors"]) ? [...prev["f_colors"]] : [];
      if (currentArr.includes(hex)) {
        return { ...prev, f_colors: currentArr.filter((h) => h !== hex) };
      } else if (currentArr.length < 3) {
        return { ...prev, f_colors: [...currentArr, hex] };
      }
      return prev;
    });
  };

  const isSelected = (id: string, val: string) => {
    if (!formState[id]) return false;
    return Array.isArray(formState[id]) ? formState[id].includes(val) : formState[id] === val;
  };

  const renderField = (f: any) => {
    if (f.type === "row") {
      return (
        <div key={f.children[0].id} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {f.children.map((child: any) => renderField(child))}
        </div>
      );
    }

    const labelComponent = (
      <label className="block text-sm font-semibold mb-2">
        {f.label}
        {f.req && <span className="text-destructive ml-1">*</span>}
        {f.note && <span className="text-muted-foreground font-normal ml-1 text-xs">{f.note}</span>}
      </label>
    );

    if (f.inputType === "chips") {
      return (
        <div key={f.id} className="mb-8">
          {labelComponent}
          <div className="flex flex-wrap gap-2.5 mt-2">
            {f.options.map((opt: string) => {
              const active = isSelected(f.id, opt);
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => toggleChip(f.id, f.multi, opt)}
                  className={`px-5 py-2.5 rounded-full text-sm sm:text-base border transition-all duration-300 select-none flex-grow sm:flex-grow-0 ${
                    active
                      ? "bg-foreground text-background border-foreground font-medium shadow-md sm:scale-105"
                      : "bg-background text-muted-foreground border-foreground/20 hover:border-foreground/40 hover:bg-foreground/5 hover:text-foreground"
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </div>
      );
    }

    if (f.inputType === "colors") {
      const selColors = formState[f.id] || [];
      return (
        <div key={f.id} className="mb-8">
          {labelComponent}
          <div className="flex flex-wrap gap-5 mt-3">
            {COLOR_OPTS.map((c) => {
              const active = selColors.includes(c.hex);
              return (
                <div key={c.hex} className="flex flex-col items-center gap-2 cursor-pointer group" onClick={() => toggleColor(c.hex)}>
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full transition-all duration-300 ${
                      active ? "ring-2 ring-offset-4 ring-offset-background ring-foreground scale-110 shadow-lg" : "hover:scale-110 ring-1 ring-border group-hover:shadow-md"
                    }`}
                    style={{ backgroundColor: c.hex }}
                  />
                  <span className={`text-[11px] sm:text-xs transition-colors ${active ? "text-foreground font-semibold" : "text-muted-foreground"}`}>{c.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    if (f.inputType === "textarea") {
      return (
        <div key={f.id} className="mb-6">
          {labelComponent}
          <Textarea
            placeholder={f.placeholder}
            value={formState[f.id] || ""}
            onChange={(e) => handleChange(f.id, e.target.value)}
            className="min-h-[120px] resize-y bg-foreground/[0.02] border-foreground/10 focus-visible:ring-foreground/20 rounded-xl px-4 py-3 text-base"
          />
        </div>
      );
    }

    return (
      <div key={f.id} className="mb-6">
        {labelComponent}
        <Input
          type={f.inputType || "text"}
          placeholder={f.placeholder}
          value={formState[f.id] || ""}
          onChange={(e) => handleChange(f.id, e.target.value)}
          className="bg-foreground/[0.02] border-foreground/10 focus-visible:ring-foreground/20 rounded-xl px-4 h-12 sm:h-14 text-base"
        />
      </div>
    );
  };

  const handleNext = () => {
    setFormState((prev) => ({ ...prev, [`__done_${currentStep}`]: true }));
    if (currentStep === STEPS.length - 1) {
      setIsSuccess(true);
    } else {
      setCurrentStep((c) => c + 1);
    }
  };

  const formatVal = (v: any) => {
    if (!v) return "—";
    if (Array.isArray(v)) return v.join(", ") || "—";
    return v;
  };

  const copyAnswers = () => {
    const lines = STEPS.flatMap((s) =>
      s.fields.flatMap((f: any) => {
        if (f.type === "row") return f.children.map((c: any) => `${c.label}: ${formatVal(formState[c.id])}`);
        if (f.inputType === "colors") return [`Brand colors: ${(formState[f.id] || []).join(", ")}`];
        return [`${f.label}: ${formatVal(formState[f.id])}`];
      })
    );
    navigator.clipboard.writeText(lines.join("\n")).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  if (isSuccess) {
    const name = formState["f_name"] || "there";
    const biz = formState["f_bname"] || "your business";
    return (
      <div className="max-w-2xl mx-auto p-8 rounded-2xl border bg-background text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-green-500" />
        </div>
        <h2 className="text-3xl font-display font-bold mb-3">Thanks, {name.split(" ")[0]}!</h2>
        <p className="text-muted-foreground leading-relaxed max-w-md mx-auto mb-8">
          We've received your questionnaire for <strong className="text-foreground">{biz}</strong>. Our team will review everything and reach out within 24 hours to schedule your free discovery call.
        </p>

        <div className="bg-muted/30 rounded-xl p-6 text-left max-w-lg mx-auto mb-8 border border-border/50">
          {[
            { k: "Business", v: biz },
            { k: "Email", v: formState["f_email"] },
            { k: "Site type", v: formState["f_sitetype"] },
            { k: "Goals", v: Array.isArray(formState["f_goals"]) ? formState["f_goals"].join(", ") : formState["f_goals"] },
            { k: "Budget", v: formState["f_budget"] },
            { k: "Timeline", v: formState["f_launch"] },
          ].map((item, i) => (
            <div key={i} className="flex justify-between py-2 border-b border-border/50 last:border-0 text-sm">
              <span className="text-muted-foreground">{item.k}</span>
              <span className="font-medium text-right max-w-[60%] truncate">{item.v || "—"}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="outline" onClick={() => { setIsSuccess(false); setCurrentStep(0); setFormState({}); }}>
            Start over
          </Button>
          <Button onClick={copyAnswers} className="min-w-[160px]">
            {copied ? "Copied!" : "Copy answers"}
            {!copied && <Copy className="w-4 h-4 ml-2" />}
          </Button>
        </div>
      </div>
    );
  }

  const currentStepData = STEPS[currentStep];
  const progressPercent = ((currentStep + 1) / STEPS.length) * 100;

  return (
    <div className="max-w-[800px] mx-auto min-h-[calc(100vh-200px)]">
      <Link href="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-6 md:mb-8 transition-colors group">
        <MoveLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" /> back to home
      </Link>

      <div className="rounded-3xl border border-border/80 bg-background/95 backdrop-blur-xl shadow-2xl overflow-hidden min-h-[500px] flex flex-col">
        {/* Header */}
        <div className="p-6 md:p-12 border-b border-border/50 bg-foreground/[0.02]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-foreground flex items-center justify-center">
              <span className="text-background font-bold text-lg">F</span>
            </div>
            <div>
              <div className="font-bold">Floxia Studio</div>
              <div className="text-xs text-muted-foreground">Client onboarding</div>
            </div>
          </div>
          <h1 className="text-2xl md:text-3xl font-display font-bold mb-2">New project questionnaire</h1>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl">
            Help us understand your business so we can build something extraordinary. Takes about 8–10 minutes. Fields marked <span className="text-destructive">*</span> are required.
          </p>
        </div>

        <Progress value={progressPercent} className="h-1.5 rounded-none bg-border/40" />

        {/* Step Nav */}
        <nav className="flex overflow-x-auto border-b border-border/50 px-4 md:px-8 py-0 scrollbar-hide">
          {STEPS.map((s, i) => {
            const isActive = i === currentStep;
            const isDone = formState[`__done_${i}`];
            return (
              <button
                key={s.id}
                onClick={() => setCurrentStep(i)}
                className={`flex items-center gap-2.5 px-4 py-4 sm:px-6 sm:py-5 text-sm sm:text-base whitespace-nowrap border-b-2 transition-all duration-300 ${
                  isActive
                    ? "border-foreground text-foreground font-semibold bg-foreground/[0.03]"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:bg-foreground/[0.02]"
                }`}
              >
                <span className={`w-2.5 h-2.5 rounded-full transition-colors ${isDone && !isActive ? "bg-green-500" : isActive ? "bg-foreground" : "bg-border"}`} />
                {s.label}
              </button>
            );
          })}
        </nav>

        {/* Form Body */}
        <div className="p-6 md:p-12 flex-1" ref={formBodyRef}>
          <div className="animate-in fade-in slide-in-from-right-4 duration-700" key={currentStep}>
            <div className="text-[10px] font-bold tracking-[0.12em] uppercase text-muted-foreground mb-1">
              Section {currentStep + 1} of {STEPS.length}
            </div>
            <h2 className="text-xl md:text-2xl font-bold mb-1">{currentStepData.heading}</h2>
            <p className="text-sm text-muted-foreground mb-8 pb-8 border-b border-border/50">{currentStepData.sub}</p>

            <div className="space-y-2">
              {currentStepData.fields.map((f: any) => renderField(f))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 md:px-12 py-6 border-t border-border/50 flex items-center justify-between bg-foreground/[0.01]">
          <span className="text-sm font-medium text-muted-foreground hidden sm:inline-block">
            Section {currentStep + 1} of {STEPS.length}
          </span>
          <div className="flex gap-4 w-full sm:w-auto">
            {currentStep > 0 && (
              <Button variant="outline" className="flex-1 sm:flex-none h-12 px-6 rounded-full border-foreground/20 hover:bg-foreground/5 hover:text-foreground" onClick={() => setCurrentStep((c) => c - 1)}>
                Back
              </Button>
            )}
            <Button className="flex-1 sm:flex-none h-12 px-8 rounded-full bg-foreground text-background hover:bg-foreground/90 shadow-lg hover:shadow-xl transition-all" onClick={handleNext}>
              {currentStep === STEPS.length - 1 ? "Submit questionnaire" : "Continue to next step"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
