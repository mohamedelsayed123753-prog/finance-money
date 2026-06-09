import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { StatsSection } from "@/components/stats-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { MainServices } from "@/components/ui/main service";
import { FinancingJourney } from "@/components/FinancingJourney";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { FuturePlans } from "@/components/FuturePlans";
import { IndividualFinancing } from "@/components/IndividualFinancing";
import { BSSServices } from "@/components/Service-office-bss";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
      <MainServices />
      <IndividualFinancing />
      <BSSServices />
      <FinancingJourney />
      <WhyChooseUs />
      <FuturePlans />
      <Footer />
    </main>
  );
}
