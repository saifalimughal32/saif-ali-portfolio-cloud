import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // Bump the affected page's lastModified on every content deploy so
  // crawlers get a freshness signal for recrawls.
  return [
    { url: "https://www.saifali.site/", lastModified: "2026-10-16", changeFrequency: "weekly", priority: 1 },
    { url: "https://www.saifali.site/portfolio", lastModified: "2026-10-28", changeFrequency: "monthly", priority: 0.8 },
    { url: "https://www.saifali.site/shopify-cro-consultant", lastModified: "2026-10-16", changeFrequency: "monthly", priority: 0.9 },
    { url: "https://www.saifali.site/ecommerce-growth-consultant", lastModified: "2026-10-16", changeFrequency: "monthly", priority: 0.9 },
    { url: "https://www.saifali.site/ecommerce-ux-audit", lastModified: "2026-10-16", changeFrequency: "monthly", priority: 0.9 },
    { url: "https://www.saifali.site/landing-page-optimization", lastModified: "2026-10-16", changeFrequency: "monthly", priority: 0.9 },
    { url: "https://www.saifali.site/case-studies", lastModified: "2026-10-16", changeFrequency: "monthly", priority: 0.9 },
    { url: "https://www.saifali.site/resources/shopify-conversion-framework", lastModified: "2026-10-16", changeFrequency: "monthly", priority: 0.8 },
    { url: "https://www.saifali.site/blog/shopify-conversion-rate-optimization", lastModified: "2026-10-16", changeFrequency: "monthly", priority: 0.8 },
    { url: "https://www.saifali.site/blog/mobile-cro-shopify", lastModified: "2026-10-17", changeFrequency: "monthly", priority: 0.8 },
    { url: "https://www.saifali.site/blog/luma-brand-identity", lastModified: "2026-10-28", changeFrequency: "monthly", priority: 0.8 },
    { url: "https://www.saifali.site/book", lastModified: "2026-10-16", changeFrequency: "monthly", priority: 0.7 },
    { url: "https://www.saifali.site/cv", lastModified: "2026-10-16", changeFrequency: "monthly", priority: 0.5 },
  ];
}
