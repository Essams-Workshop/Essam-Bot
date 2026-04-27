import { ClosingCTA } from "@/components/landing/ClosingCTA";
import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { SocialProof } from "@/components/landing/SocialProof";
import { Testimonials } from "@/components/landing/Testimonials";
import { TopNav } from "@/components/ui/TopNav";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-bg">
      <TopNav />
      <Hero />
      <SocialProof />
      <Testimonials />
      <HowItWorks />
      <ClosingCTA />
      <FAQ />
      <Footer />
    </main>
  );
}
