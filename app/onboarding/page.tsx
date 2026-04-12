import { OnboardingForm } from "@/components/onboarding/onboarding-form";

export const metadata = {
  title: "Client Onboarding | Floxia Studio",
  description: "Help us understand your business so we can build something extraordinary.",
};

export default function OnboardingPage() {
  return (
    <main className="relative min-h-screen pt-24 pb-12 px-4 bg-muted/20 noise-overlay">
      <OnboardingForm />
    </main>
  );
}
