import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | Floxia Studio",
  description: "Disclaimer for Floxia Studio digital services and website use.",
};

export default function DisclaimerPage() {
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
              Legal <br />
              <span className="relative inline">
                Disclaimer
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
                The information provided by Floxia Studio (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;) on <a href="https://www.floxiastudio.com" className="text-foreground underline underline-offset-4 decoration-foreground/20 hover:decoration-foreground transition-colors">www.floxiastudio.com</a> (&quot;Website&quot;) is for general informational and business purposes only.
              </p>
              <p>
                By using our Website and services, you agree to this Disclaimer.
              </p>
            </div>

            <div className="space-y-6">
              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">1. No Professional Advice</h2>
                <p>
                  All content on this Website, including text, graphics, and services, is provided for general informational purposes only and does not constitute legal, financial, or professional advice.
                </p>
                <p>
                  You should consult with a qualified professional before making any decisions based on the information provided on our Website.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">2. Service Results Disclaimer</h2>
                <p>We strive to deliver high-quality website development, automation, and AI services. However, we do not guarantee:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Specific business results</li>
                  <li>Lead generation outcomes</li>
                  <li>Revenue growth or ROI</li>
                </ul>
                <p className="mt-2 text-sm italic">Results may vary based on multiple factors including market conditions, client effort, and third-party platforms.</p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">3. External Links Disclaimer</h2>
                <p>
                  Our Website may contain links to third-party websites or services. We do not control or guarantee the accuracy, relevance, or reliability of any third-party content.
                </p>
                <p>
                  We are not responsible for any damages or losses caused by your use of third-party websites.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">4. Third-Party Tools & Integrations</h2>
                <p>We may use or integrate third-party tools such as hosting providers, payment gateways, CRM systems, automation platforms, and analytics tools. We are not responsible for:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Downtime or errors from third-party services</li>
                  <li>Data loss caused by third-party platforms</li>
                  <li>Changes in third-party policies or pricing</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">5. Errors & Omissions</h2>
                <p>
                  While we strive to ensure that the information on our Website is accurate, we make no guarantees regarding completeness, reliability, or accuracy.
                </p>
                <p>
                  We are not liable for any errors, omissions, or outcomes related to the use of this information.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">6. Limitation of Liability</h2>
                <p>To the fullest extent permitted by law, Floxia Studio shall not be liable for any:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Direct or indirect damages</li>
                  <li>Loss of profits, data, or business opportunities</li>
                  <li>Issues arising from the use or inability to use our Website or services</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">7. Testimonials & Examples</h2>
                <p>
                  Any testimonials, case studies, or examples shown on our Website are for illustrative purposes only and do not guarantee that you will achieve similar results.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">8. Use at Your Own Risk</h2>
                <p>
                  Your use of our Website and services is solely at your own risk.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">9. Changes to This Disclaimer</h2>
                <p>
                  We may update this Disclaimer at any time. Updates will be posted on this page with a revised effective date.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">10. Contact Us</h2>
                <p>If you have any questions about this Disclaimer, please contact us:</p>
                <div className="font-mono text-sm space-y-1 mt-2 p-4 bg-foreground/5 rounded-xl border border-foreground/10">
                  <p>Email: {contactEmail}</p>
                  <p>Website: <a href="https://www.floxiastudio.com" className="underline underline-offset-4 decoration-foreground/20 hover:decoration-foreground transition-colors">www.floxiastudio.com</a></p>
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">11. Consent</h2>
                <p>
                  By using our Website, you acknowledge that you have read and agree to this Disclaimer.
                </p>
              </section>

              <div className="pt-12 border-t border-foreground/10 text-center">
                <p className="text-sm font-mono text-muted-foreground uppercase tracking-widest">
                  End of Disclaimer
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
