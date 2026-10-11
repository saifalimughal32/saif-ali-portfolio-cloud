import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://www.saifali.site/", changeFrequency: "weekly", priority: 1 },
    { url: "https://www.saifali.site/portfolio", changeFrequency: "monthly", priority: 0.8 },
    { url: "https://www.saifali.site/book", changeFrequency: "monthly", priority: 0.7 },
    { url: "https://www.saifali.site/cv", changeFrequency: "monthly", priority: 0.5 },
  ];
}
