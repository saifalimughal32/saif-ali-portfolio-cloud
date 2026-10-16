import type { Metadata } from "next";
import { PortfolioPage } from "@/components/PortfolioPage";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: site.meta.portfolioTitle,
  description: site.meta.portfolioDescription,
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: site.meta.portfolioTitle,
    description: site.meta.portfolioDescription,
    url: "/portfolio",
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
    title: site.meta.portfolioTitle,
    description: site.meta.portfolioDescription,
    images: ["/og-image.jpg"],
  },
};

/** The 7 visible portfolio entries (lightbox cards, no external hrefs) */
const portfolioEntries = [
  {
    name: "Aura21 — Shopify Store Design for a Streetwear Brand",
    url: "https://www.saifali.site/portfolio#aura21",
  },
  {
    name: "Bun Box — Shopify Store Design for a Bakery Brand",
    url: "https://www.saifali.site/portfolio#bunbox",
  },
  {
    name: "Elvo — Shopify Store Design for a Furniture Brand",
    url: "https://www.saifali.site/portfolio#elvo",
  },
  {
    name: "Homely Furniture — Shopify Store Design for a Cozy Furniture Brand",
    url: "https://www.saifali.site/portfolio#homely",
  },
  {
    name: "MORA — Brand Identity Design for a Lavender-Blueberry Drink Brand",
    url: "https://www.saifali.site/portfolio#mora",
  },
  {
    name: "Rivori Matcha — Brand Identity Design for a Playful Matcha Lifestyle Brand",
    url: "https://www.saifali.site/portfolio#rivori-matcha",
  },
  {
    name: "SpookyBite — Brand Identity Design for a Playful Pizza Brand",
    url: "https://www.saifali.site/portfolio#spookybite",
  },
];

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://www.saifali.site/portfolio#collection",
  name: "Shopify & Ecommerce Portfolio | Saif Ali",
  url: "https://www.saifali.site/portfolio",
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: portfolioEntries.length,
    itemListElement: portfolioEntries.map((entry, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: entry.name,
      url: entry.url,
    })),
  },
};

export default function PortfolioRoute() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <PortfolioPage />
    </>
  );
}
