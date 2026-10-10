export type Review = {
  quote: string;
  name: string;
  service: string;
  date: string;
  rating?: number;
};

/**
 * Staging reviews for layout fidelity. Replace with approved client quotes
 * before launch — do not publish invented testimonials as verified proof.
 */
export const reviews: Review[] = [
  {
    quote:
      "Saif rebuilt our Shopify storefront with clearer product pages and a cleaner mobile flow. Sales conversations got easier because the site finally matched the brand.",
    name: "Ayesha K.",
    service: "Shopify Design",
    date: "March 2025",
    rating: 5,
  },
  {
    quote:
      "Strong creative direction and fast iteration. He connected the offer, landing pages, and Meta creatives so the whole funnel felt like one system.",
    name: "Omar R.",
    service: "Growth Strategy",
    date: "January 2025",
    rating: 5,
  },
  {
    quote:
      "Our PDP and collection pages were confusing. After the redesign, customers found products faster and checkout felt less stressful.",
    name: "Nadia M.",
    service: "UI/UX & CRO",
    date: "November 2024",
    rating: 5,
  },
  {
    quote:
      "Reliable collaborator for brand visuals and campaign assets. Clear communication and thoughtful feedback loops throughout the project.",
    name: "Hassan A.",
    service: "Brand & Campaign Design",
    date: "August 2024",
    rating: 5,
  },
  {
    quote:
      "He helped us turn product angles into scroll-stopping creatives. The work looked premium without slowing the launch timeline.",
    name: "Sara B.",
    service: "AI Creatives",
    date: "June 2024",
    rating: 5,
  },
  {
    quote:
      "Great partner for agencies that need Shopify design support. He fits into existing workflows and still raises the quality bar.",
    name: "Daniel P.",
    service: "Agency Collaboration",
    date: "April 2024",
    rating: 5,
  },
];
