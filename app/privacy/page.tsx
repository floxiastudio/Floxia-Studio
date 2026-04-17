import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Floxia Studio",
  description: "Privacy Policy for Floxia Studio digital services and website use.",
};

export default function PrivacyPage() {
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
              Privacy <br />
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
                Floxia Studio (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;) operates the website <a href="https://www.floxiastudio.com" className="text-foreground underline underline-offset-4 decoration-foreground/20 hover:decoration-foreground transition-colors">www.floxiastudio.com</a> (&quot;Website&quot;). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our Website or use our services.
              </p>
              <p>
                By using our Website, you consent to the practices described in this policy.
              </p>
            </div>

            <div className="space-y-6">
              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">1. Information We Collect</h2>
                <p>We may collect the following types of information:</p>
                
                <div className="space-y-4 pt-2">
                  <div>
                    <h3 className="font-semibold text-foreground italic">a. Personal Information</h3>
                    <ul className="list-disc pl-6 space-y-1 mt-1">
                      <li>Name</li>
                      <li>Email address</li>
                      <li>Phone number</li>
                      <li>Business details</li>
                      <li>Billing and payment information</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground italic">b. Non-Personal Information</h3>
                    <ul className="list-disc pl-6 space-y-1 mt-1">
                      <li>Browser type</li>
                      <li>IP address</li>
                      <li>Device information</li>
                      <li>Pages visited and time spent</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground italic">c. Cookies & Tracking Technologies</h3>
                    <p>We use cookies, pixels, and similar tracking technologies to enhance your experience and analyze website traffic.</p>
                  </div>
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">2. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Provide and manage our services</li>
                  <li>Communicate with you</li>
                  <li>Process transactions</li>
                  <li>Improve our Website and offerings</li>
                  <li>Send marketing and promotional messages (you can opt-out anytime)</li>
                  <li>Ensure security and prevent fraud</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">3. Sharing Your Information</h2>
                <p>We do not sell your personal data. However, we may share your information with:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Service providers (hosting, payment processors, analytics tools)</li>
                  <li>Legal authorities when required by law</li>
                  <li>Third-party tools integrated into our services</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">4. Data Retention</h2>
                <p>
                  We retain your information only as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">5. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal data. However, no method of transmission over the internet is 100% secure.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">6. Your Rights</h2>
                <p>Depending on your location, you may have the right to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Access your personal data</li>
                  <li>Request correction or deletion</li>
                  <li>Object to processing</li>
                  <li>Withdraw consent at any time</li>
                </ul>
                <p className="mt-2 text-sm italic">To exercise these rights, contact us using the details below.</p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">7. Third-Party Links</h2>
                <p>
                  Our Website may contain links to third-party websites. We are not responsible for the privacy practices of those sites.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">8. Children&apos;s Privacy</h2>
                <p>
                  Our services are not intended for individuals under the age of 13. We do not knowingly collect data from children.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">9. International Data Transfers</h2>
                <p>
                  Your information may be transferred and processed outside your country. By using our services, you consent to such transfers.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">10. Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. Updates will be posted on this page with a revised effective date.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">11. Contact Us</h2>
                <p>If you have any questions or concerns about this Privacy Policy, contact us:</p>
                <div className="font-mono text-sm space-y-1 mt-2 p-4 bg-foreground/5 rounded-xl border border-foreground/10">
                  <p>Email: {contactEmail}</p>
                  <p>Website: <a href="https://www.floxiastudio.com" className="underline underline-offset-4 decoration-foreground/20 hover:decoration-foreground transition-colors">www.floxiastudio.com</a></p>
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">12. Consent</h2>
                <p>
                  By using our Website and services, you agree to this Privacy Policy.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
