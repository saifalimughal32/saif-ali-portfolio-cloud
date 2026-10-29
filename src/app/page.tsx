import type { Metadata } from "next";
import { faqItems } from "@/content/faq";
import { site } from "@/content/site";
import { EditorialHome } from "@/components/EditorialHome";
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


export default function HomePage(){return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqPageSchema)}}/><EditorialHome/></>}
