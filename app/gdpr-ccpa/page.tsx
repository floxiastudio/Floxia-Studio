import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GDPR & CCPA | Floxia Studio",
  description: "GDPR & CCPA Compliance Policy for Floxia Studio.",
};

export default function GdprCcpaPage() {
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
              GDPR & CCPA <br />
              <span className="relative inline">
                Compliance
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
                Floxia Studio (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting your privacy and ensuring compliance with applicable data protection laws, including the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA).
              </p>
              <p>
                This policy explains your rights and how we handle your personal data in accordance with these regulations.
              </p>
            </div>

            <div className="space-y-6">
              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">1. Scope</h2>
                <p>This policy applies to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Users from the European Economic Area (EEA) under GDPR</li>
                  <li>California residents under CCPA</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">2. Personal Data We Collect</h2>
                <p>We may collect the following categories of personal data:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Identifiers (name, email, phone number)</li>
                  <li>Commercial information (services purchased)</li>
                  <li>Internet activity (IP address, browsing behavior)</li>
                  <li>Technical data (device, browser type)</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">3. Legal Basis for Processing (GDPR)</h2>
                <p>We process your data under the following legal bases:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Consent</li>
                  <li>Contractual necessity</li>
                  <li>Legal obligation</li>
                  <li>Legitimate interests</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">4. Your Rights Under GDPR</h2>
                <p>If you are located in the EEA, you have the right to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion (&quot;Right to be Forgotten&quot;)</li>
                  <li>Restrict processing</li>
                  <li>Data portability</li>
                  <li>Object to processing</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">5. Your Rights Under CCPA</h2>
                <p>If you are a California resident, you have the right to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Know what personal data we collect</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of the sale of personal data (we do not sell data)</li>
                  <li>Non-discrimination for exercising your rights</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">6. Data Sharing</h2>
                <p>We do not sell your personal information. We may share data with:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Service providers (hosting, analytics, CRM tools)</li>
                  <li>Legal authorities when required</li>
                </ul>
                <p className="mt-2 text-sm italic">All third parties are required to handle your data securely.</p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">7. Data Retention</h2>
                <p>
                  We retain personal data only as long as necessary for business or legal purposes.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">8. Data Security</h2>
                <p>
                  We implement industry-standard security measures to protect your data. However, no system is completely secure.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">9. International Data Transfers</h2>
                <p>
                  Your data may be transferred outside your country. We ensure appropriate safeguards are in place for such transfers.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">10. How to Exercise Your Rights</h2>
                <p>To exercise your rights under GDPR or CCPA, contact us at:</p>
                <div className="font-mono text-sm space-y-1 mt-2 p-4 bg-foreground/5 rounded-xl border border-foreground/10">
                  <p>Email: {contactEmail}</p>
                </div>
                <p className="mt-2 text-sm italic">We will respond within the timeframe required by law.</p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">11. Do Not Track Signals</h2>
                <p>
                  Our Website may not respond to &quot;Do Not Track&quot; browser signals. You can manage tracking through cookies settings.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">12. Updates to This Policy</h2>
                <p>
                  We may update this policy periodically. Changes will be posted with an updated effective date.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">13. Contact Us</h2>
                <p>If you have any questions about this policy or your data rights, contact us:</p>
                <div className="font-mono text-sm space-y-1 mt-2 p-4 bg-foreground/5 rounded-xl border border-foreground/10">
                  <p>Email: {contactEmail}</p>
                  <p>Website: <a href="https://www.floxiastudio.com" className="underline underline-offset-4 decoration-foreground/20 hover:decoration-foreground transition-colors">www.floxiastudio.com</a></p>
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">14. Consent</h2>
                <p>
                  By using our Website and services, you acknowledge and agree to this GDPR & CCPA Compliance Policy.
                </p>
              </section>

              <div className="pt-12 border-t border-foreground/10 text-center">
                <p className="text-sm font-mono text-muted-foreground uppercase tracking-widest">
                  End of GDPR & CCPA Compliance Policy
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
