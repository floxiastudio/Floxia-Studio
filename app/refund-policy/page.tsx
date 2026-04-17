import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | Floxia Studio",
  description: "Refund Policy for Floxia Studio digital services and website use.",
};

export default function RefundPolicyPage() {
  const effectiveDate = "April 16, 2026";
  const contactEmail = "support@floxiastudio.com";

  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay bg-background">
      <Navigation />
      
      {/* Hero / Header Section */}
      <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 border-b border-foreground/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display leading-[1.1] tracking-tight mb-6">
              Refund <br />
              <span className="relative inline">
                Policy
                <span className="absolute -bottom-1 left-0 right-0 h-1.5 bg-foreground/10" />
              </span>
            </h1>
            <p className="text-lg text-muted-foreground font-mono">
              Effective Date: {effectiveDate}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto space-y-12 text-foreground/80 leading-relaxed">
            
            <div className="space-y-4">
              <p>
                This Refund Policy outlines the terms under which Floxia Studio (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;) provides refunds for services purchased through <a href="https://www.floxiastudio.com" className="text-foreground underline underline-offset-4 decoration-foreground/20 hover:decoration-foreground transition-colors">www.floxiastudio.com</a> (&quot;Website&quot;).
              </p>
              <p>
                By purchasing our services, you agree to this Refund Policy.
              </p>
            </div>

            <div className="space-y-6">
              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">1. General Policy</h2>
                <p>
                  Due to the nature of digital services, all payments made to Floxia Studio are generally non-refundable.
                  However, we aim to ensure client satisfaction and may offer refunds under specific conditions outlined below.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">2. Eligibility for Refunds</h2>
                <p>Refunds may be considered in the following cases:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>The project has not been started</li>
                  <li>Duplicate or accidental payments</li>
                  <li>Failure to deliver the agreed service due to our fault</li>
                </ul>
                <p className="mt-2 text-sm italic text-muted-foreground">All refund requests must be submitted within 7 days of purchase.</p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">3. Non-Refundable Cases</h2>
                <p>Refunds will not be provided in the following situations:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Change of mind after project initiation</li>
                  <li>Delays caused by the client (e.g., lack of content, feedback, or approvals)</li>
                  <li>Completed or substantially completed work</li>
                  <li>Dissatisfaction based on subjective preferences after agreed revisions</li>
                  <li>Third-party service costs (domains, hosting, plugins, APIs, etc.)</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">4. Partial Refunds</h2>
                <p>
                  In certain cases, we may issue partial refunds based on the amount of work completed.
                  The final refund amount will be determined at our sole discretion.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">5. Subscription & Retainer Services</h2>
                <p>For recurring services (maintenance, automation, AI systems, etc.):</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Payments are billed in advance</li>
                  <li>No refunds will be issued for the current billing cycle once it has started</li>
                  <li>You may cancel future billing at any time</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">6. Chargebacks & Disputes</h2>
                <p>Initiating a chargeback without contacting us first is considered a violation of this policy. We reserve the right to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Suspend or terminate services</li>
                  <li>Provide evidence to payment processors to dispute the chargeback</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">7. Processing Refunds</h2>
                <p>
                  Approved refunds will be processed within 7–14 business days to the original payment method.
                  Processing times may vary depending on your payment provider.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">8. Revisions Instead of Refunds</h2>
                <p>
                  We prioritize resolving issues through revisions and improvements before considering refunds.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">9. Changes to This Policy</h2>
                <p>
                  We may update this Refund Policy at any time. Changes will be posted with an updated effective date.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">10. Contact Us</h2>
                <p>If you have questions or want to request a refund, contact us:</p>
                <div className="font-mono text-sm space-y-1 mt-2 p-4 bg-foreground/5 rounded-xl border border-foreground/10">
                  <p>Email: {contactEmail}</p>
                  <p>Website: <a href="https://www.floxiastudio.com" className="underline underline-offset-4 decoration-foreground/20 hover:decoration-foreground transition-colors">www.floxiastudio.com</a></p>
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">11. Agreement</h2>
                <p>
                  By purchasing our services, you acknowledge that you have read and agree to this Refund Policy.
                </p>
              </section>

              <div className="pt-12 border-t border-foreground/10 text-center">
                <p className="text-sm font-mono text-muted-foreground uppercase tracking-widest">
                  End of Refund Policy
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
