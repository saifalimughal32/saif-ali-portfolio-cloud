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
import type { Metadata } from "next";
import { faqItems } from "@/content/faq";
import { site } from "@/content/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    title: site.meta.homeTitle,
    description: site.meta.homeDescription,
    url: "/",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 2240,
        height: 1120,
        alt: "Saif Ali — Ecommerce Growth Consultant for DTC Brands",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.meta.homeTitle,
    description: site.meta.homeDescription,
    images: ["/og-image.jpg"],
  },
};

/** Mirrors the visible FaqSection (built from the same faqItems) for search */
const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.saifali.site/#faq",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const inlineLinkClass = "text-[var(--accent)] underline underline-offset-4";

export default function HomePage() {
  return (
    <div className="saif-portfolio min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />
      <GreetingLoader variant="home" />
      <MobileHeader />
      <FloatingNav variant="home" />
      <main>
        <h1 className="sr-only">
          Ecommerce Growth Consultant for DTC Brands — full-journey CRO
          across Meta ads, landing pages and Shopify
        </h1>
        {/* Portrait pin spans hero → Growth System until About (flip + travel) */}
        <div data-portrait-story className="intro-section">
          <Hero />
          <ServicesSection />
        </div>
        <AboutSection />
        <div className="container-site">
          <p className="max-w-xl text-[var(--text-secondary)]">
            I offer{" "}
            <a href="/shopify-cro-consultant" className={inlineLinkClass}>
              Shopify CRO consulting
            </a>
            ,{" "}
            <a href="/ecommerce-ux-audit" className={inlineLinkClass}>
              ecommerce UX audits
            </a>
            ,{" "}
            <a href="/landing-page-optimization" className={inlineLinkClass}>
              landing page optimization
            </a>
            , and{" "}
            <a
              href="/ecommerce-growth-consultant"
              className={inlineLinkClass}
            >
              ecommerce growth consulting
            </a>{" "}
            for DTC brands — see the{" "}
            <a href="/case-studies" className={inlineLinkClass}>
              case studies
            </a>{" "}
            or{" "}
            <a href="/book" className={inlineLinkClass}>
              book a fit call
            </a>{" "}
            to start with a teardown. Start with my{" "}
            <a
              href="/resources/shopify-conversion-framework"
              className={inlineLinkClass}
            >
              13-area Shopify conversion framework
            </a>{" "}
            or the{" "}
            <a
              href="/blog/shopify-conversion-rate-optimization"
              className={inlineLinkClass}
            >
              13 high-impact fixes
            </a>{" "}
            write-up.
          </p>
        </div>
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
