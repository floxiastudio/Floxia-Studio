import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | Floxia Studio",
  description: "Terms and Conditions for Floxia Studio digital services and website use.",
};

export default function TermsPage() {
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
              Terms and <br />
              <span className="relative inline">
                Conditions
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
                Welcome to Floxia Studio (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;). These Terms and Conditions (&quot;Terms&quot;) govern your use of our website located at <a href="https://www.floxiastudio.com" className="text-foreground underline underline-offset-4 decoration-foreground/20 hover:decoration-foreground transition-colors">www.floxiastudio.com</a> (&quot;Website&quot;) and our services.
              </p>
              <p>
                By accessing or using our Website and services, you agree to be bound by these Terms. If you do not agree, please do not use our services.
              </p>
            </div>

            <div className="space-y-6">
              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">1. Services</h2>
                <p>
                  Floxia Studio provides website development, design, automation, AI integrations, and related digital services. We reserve the right to modify or discontinue any service at any time without prior notice.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">2. User Responsibilities</h2>
                <p>By using our services, you agree that:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You will provide accurate and complete information.</li>
                  <li>You will not use our services for any illegal or unauthorized purpose.</li>
                  <li>You will not attempt to harm, hack, or disrupt our systems.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">3. Payments & Pricing</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>All prices are listed in USD unless otherwise stated.</li>
                  <li>Payments must be made upfront unless agreed otherwise in writing.</li>
                  <li>We reserve the right to change pricing at any time.</li>
                  <li>Failure to pay may result in suspension or termination of services.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">4. Refund Policy</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Due to the nature of digital services, all payments are generally non-refundable.</li>
                  <li>Refunds may be issued at our sole discretion in special cases.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">5. Intellectual Property</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>All content, designs, code, and materials created by Floxia Studio remain our property until full payment is received.</li>
                  <li>Upon full payment, ownership may be transferred to the client unless otherwise agreed.</li>
                  <li>We reserve the right to showcase completed work in our portfolio.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">6. Project Timelines</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Project timelines are estimates and may vary based on scope and client responsiveness.</li>
                  <li>Delays caused by the client (e.g., lack of feedback, missing content) are not our responsibility.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">7. Revisions & Scope</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Projects include a limited number of revisions unless otherwise specified.</li>
                  <li>Additional revisions or changes outside the agreed scope may incur extra charges.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">8. Third-Party Services</h2>
                <p>We may integrate third-party tools, platforms, or services (e.g., hosting, plugins, APIs). We are not responsible for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Third-party outages</li>
                  <li>Policy changes</li>
                  <li>Security issues originating from third-party providers</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">9. Limitation of Liability</h2>
                <p>To the fullest extent permitted by law, Floxia Studio shall not be liable for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Any indirect, incidental, or consequential damages</li>
                  <li>Loss of data, revenue, or profits</li>
                  <li>Issues arising from misuse of our services</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">10. Termination</h2>
                <p>
                  We reserve the right to terminate or suspend access to our services immediately, without prior notice, if you breach these Terms.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">11. Privacy</h2>
                <p>
                  Your use of our services is also governed by our Privacy Policy. Please review it separately.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">12. Governing Law</h2>
                <p>
                  These Terms shall be governed by and interpreted in accordance with the laws of Pakistan.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">13. Changes to Terms</h2>
                <p>
                  We may update these Terms at any time. Changes will be posted on this page with an updated effective date.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">14. Contact Information</h2>
                <p>If you have any questions about these Terms, please contact us:</p>
                <div className="font-mono text-sm space-y-1 mt-2 p-4 bg-foreground/5 rounded-xl border border-foreground/10">
                  <p>Email: {contactEmail}</p>
                  <p>Website: <a href="https://www.floxiastudio.com" className="underline underline-offset-4 decoration-foreground/20 hover:decoration-foreground transition-colors">www.floxiastudio.com</a></p>
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">15. Acceptance of Terms</h2>
                <p>
                  By using our Website and services, you acknowledge that you have read, understood, and agree to these Terms and Conditions.
                </p>
              </section>

              <div className="pt-12 border-t border-foreground/10 text-center">
                <p className="text-sm font-mono text-muted-foreground uppercase tracking-widest">
                  End of Terms and Conditions
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
