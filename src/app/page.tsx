import { AboutSection } from "@/components/AboutSection";
import { CapabilityMarquee } from "@/components/CapabilityMarquee";
import { ContactSection } from "@/components/ContactSection";
import { CredentialsSection } from "@/components/CredentialsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { FaqSection } from "@/components/FaqSection";
import { FloatingNav } from "@/components/FloatingNav";
import { GreetingLoader } from "@/components/GreetingLoader";
import { Hero } from "@/components/Hero";
import { MobileHeader } from "@/components/MobileHeader";
import {
  PortfolioGateway,
  PositioningStatement,
} from "@/components/PortfolioGateway";
import { ReviewsSection } from "@/components/ReviewsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { SharedFooter } from "@/components/SharedFooter";

export default function HomePage() {
  return (
    <div className="saif-portfolio min-h-screen">
      <GreetingLoader variant="home" />
      <MobileHeader />
      <FloatingNav variant="home" />
      <main>
        {/* Portrait pin spans hero → Growth System until About (flip + travel) */}
        <div data-portrait-story className="intro-section">
          <Hero />
          <ServicesSection />
        </div>
        <AboutSection />
        <CapabilityMarquee />
        <CredentialsSection />
        <PositioningStatement />
        <PortfolioGateway />
        <ExperienceSection />
        <ReviewsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <SharedFooter />
    </div>
  );
}
