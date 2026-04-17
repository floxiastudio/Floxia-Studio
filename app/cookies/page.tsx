import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Floxia Studio",
  description: "Cookie Policy for Floxia Studio digital services and website use.",
};

export default function CookiePolicyPage() {
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
              Cookie <br />
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
                This Cookie Policy explains how Floxia Studio (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;) uses cookies and similar technologies when you visit <a href="https://www.floxiastudio.com" className="text-foreground underline underline-offset-4 decoration-foreground/20 hover:decoration-foreground transition-colors">www.floxiastudio.com</a> (&quot;Website&quot;).
              </p>
              <p>
                By continuing to use our Website, you agree to the use of cookies as described in this policy.
              </p>
            </div>

            <div className="space-y-6">
              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">1. What Are Cookies?</h2>
                <p>
                  Cookies are small text files stored on your device when you visit a website. They help improve user experience, analyze website performance, and support marketing efforts.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">2. Types of Cookies We Use</h2>
                <div className="space-y-4 pt-2">
                  <div>
                    <h3 className="font-semibold text-foreground italic">a. Essential Cookies</h3>
                    <p>These cookies are necessary for the Website to function properly. They enable core functionalities such as security, network management, and accessibility.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground italic">b. Performance & Analytics Cookies</h3>
                    <p>These cookies help us understand how visitors interact with our Website by collecting anonymous information such as page visits, traffic sources, and user behavior.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground italic">c. Functional Cookies</h3>
                    <p>These cookies allow the Website to remember choices you make (such as language or region) to provide a more personalized experience.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground italic">d. Marketing & Advertising Cookies</h3>
                    <p>These cookies are used to deliver relevant ads and track the effectiveness of our marketing campaigns across platforms.</p>
                  </div>
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">3. Third-Party Cookies</h2>
                <p>We may allow third-party services to place cookies on your device, including:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Analytics tools (e.g., Google Analytics)</li>
                  <li>Advertising platforms (e.g., Facebook Ads, Google Ads)</li>
                  <li>CRM and automation tools</li>
                </ul>
                <p className="mt-2 text-sm italic">These third parties have their own privacy policies governing their use of cookies.</p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">4. How You Can Control Cookies</h2>
                <p>You can manage or disable cookies through your browser settings. Please note that disabling cookies may affect the functionality of the Website.</p>
                <p>You can also:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Clear cookies from your browser</li>
                  <li>Use private/incognito browsing mode</li>
                  <li>Opt out of targeted advertising via ad settings</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">5. Cookie Consent</h2>
                <p>
                  When you first visit our Website, you may be presented with a cookie consent banner allowing you to accept or manage your cookie preferences.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">6. Updates to This Policy</h2>
                <p>
                  We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated effective date.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">7. Contact Us</h2>
                <p>If you have any questions about our use of cookies, please contact us:</p>
                <div className="font-mono text-sm space-y-1 mt-2 p-4 bg-foreground/5 rounded-xl border border-foreground/10">
                  <p>Email: {contactEmail}</p>
                  <p>Website: <a href="https://www.floxiastudio.com" className="underline underline-offset-4 decoration-foreground/20 hover:decoration-foreground transition-colors">www.floxiastudio.com</a></p>
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">8. Consent</h2>
                <p>
                  By using our Website, you consent to the use of cookies as described in this Cookie Policy.
                </p>
              </section>

              <div className="pt-12 border-t border-foreground/10 text-center">
                <p className="text-sm font-mono text-muted-foreground uppercase tracking-widest">
                  End of Cookie Policy
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
