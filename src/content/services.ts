export type Service = {
  number: string;
  title: string;
  eyebrow: string;
  description: string;
  capabilities: string[];
  /** Short label for the growth-system connector */
  systemLabel: string;
  /** How this step hands off to the next */
  connectsTo?: string;
};

export const servicesIntro = {
  label: "/ Growth system",
  heading: "What I do best?",
  accentWord: "best?",
  body: "These are not separate services — they plug into each other. Shopify, strategy, branding, AI creatives, performance marketing, and AI workflows run as one full-journey CRO loop so every piece feeds the next.",
};

/** Top CTA block for the Services section (AI creatives positioning). */
export const servicesHero = {
  line1: "AI-Powered creative that reduces",
  line2Before: "CPA by 35% and ",
  line2Accent: "scales your meta",
  line3Accent: "spend",
  body: "We find your winning angles, produce fully-edited ads monthly, and build the system that compounds your results. Real-looking AI, no creator bottlenecks, completely done for you.",
  cta: "Book your Discovery Call",
  trust: "Trusted by ecommerce brands worldwide",
};

/** Short names — must match each service below in order */
export const growthSystemFlow = [
  "Shopify",
  "Growth Strategy",
  "Branding",
  "AI Creatives",
  "Performance",
  "AI Workflows",
] as const;

export const services: Service[] = [
  {
    number: "01",
    title: "Shopify Design & Development",
    eyebrow: "Built to sell",
    systemLabel: "Shopify",
    connectsTo: "Growth Strategy decides what the store must convert",
    description:
      "I build conversion-focused Shopify stores that make products easy to explore and buying simple — the foundation every other step sells into.",
    capabilities: [
      "Custom sections",
      "Theme customization",
      "Mobile experience",
      "Product pages",
      "Storefront API",
    ],
  },
  {
    number: "02",
    title: "Ecommerce Growth Strategy",
    eyebrow: "Clear direction",
    systemLabel: "Growth Strategy",
    connectsTo: "Branding makes that direction look inevitable",
    description:
      "As an ecommerce growth consultant, I connect the offer, customer journey, creative, and store experience around one growth goal — so branding and performance pull the same way.",
    capabilities: [
      "Offer positioning",
      "Funnel planning",
      "Customer research",
      "Creative testing",
      "Growth priorities",
    ],
  },
  {
    number: "03",
    title: "Graphic Design & Branding",
    eyebrow: "Brand defining",
    systemLabel: "Branding",
    connectsTo: "AI Creatives turn the brand into ads that convert",
    description:
      "I create visual identities and campaign designs that help brands look consistent and recognizable — the look AI creatives and ads inherit.",
    capabilities: [
      "Logos",
      "Visual identity",
      "Typography",
      "Packaging concepts",
      "Social design",
    ],
  },
  {
    number: "04",
    title: "AI Creatives",
    eyebrow: "Built to convert",
    systemLabel: "AI Creatives",
    connectsTo: "Performance Marketing puts them in front of buyers",
    description:
      "I produce fully-edited AI video and image ads — research-backed angles, real-looking creatives, and monthly variations ready for Meta.",
    capabilities: [
      "AI UGC video",
      "Static ads",
      "Product visuals",
      "Angle research",
      "Ad variations",
      "Creative testing",
    ],
  },
  {
    number: "05",
    title: "Performance Marketing",
    eyebrow: "Data informed",
    systemLabel: "Performance",
    connectsTo: "AI Workflows speed the whole loop",
    description:
      "I plan and optimize paid campaigns around the offer, creative, and customer journey — then feed winners back into AI creatives and strategy.",
    capabilities: [
      "Meta Ads",
      "TikTok Ads",
      "Google Ads",
      "Creative testing",
      "Event tracking",
    ],
  },
  {
    number: "06",
    title: "AI Assisted Workflows",
    eyebrow: "Smarter execution",
    systemLabel: "AI Workflows",
    description:
      "I use AI tools to speed up research, creative production, and website development — so the whole system moves faster every cycle.",
    capabilities: [
      "ChatGPT",
      "Claude",
      "Gemini",
      "Cursor",
      "Prototyping",
      "Workflow design",
    ],
  },
];
