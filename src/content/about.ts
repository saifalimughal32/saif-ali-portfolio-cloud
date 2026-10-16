export const about = {
  eyebrow: "/ About Me",
  /** Offer-style heading — accent words render in brand orange */
  line1: "Ecommerce growth consulting that reduces",
  line2Before: "wasted spend and ",
  line2Accent: "scales what sells",
  subtitle: "Ad. Click. Landing page. Store. Checkout. One full-journey CRO system.",
  body: "If your Shopify store looks fine but CPA stays high, the pieces aren’t connected. As an ecommerce growth consultant, I run full-journey CRO — connecting store design, offer clarity, Meta creatives, and paid growth — so brands waste less, convert more consistently, and scale with confidence.",
  impactLine: "Done-for-you systems that compound.",
  trustLine: "Trusted by ecommerce brands worldwide",
  proofLine: "Founder at whyitworks.ai — AI marketing for ecommerce",
  positioning:
    "I help DTC brands turn ad clicks into customers — full-journey CRO across Meta ads, landing pages, and Shopify.",
  marqueeItems: [
    "Shopify Store Design",
    "$197K Funnel Case",
    "Meta Ads & CRO",
    "Brand Identities",
    "AI Creatives",
    "Performance Marketing",
    "Fiverr · Scalewave · The Fliq",
  ],
};

export type Credential = {
  index: string;
  title: string;
  organization: string;
  date: string;
  publish: boolean;
};

/** Selected results / proof rows shown in CredentialsSection */
export const credentials: Credential[] = [
  {
    index: "01",
    title: "$197K in 45 days — Meta ads & funnel optimization",
    organization: "The Fliq / Client store",
    date: "2025",
    publish: true,
  },
  {
    index: "02",
    title: "Shopify design, builds & conversion redesigns for global brands",
    organization: "Fiverr",
    date: "2022 – 2026",
    publish: true,
  },
  {
    index: "03",
    title: "Meta ads for ecommerce — budgets up to $50K / month",
    organization: "Scalewave",
    date: "2023 – 2024",
    publish: true,
  },
];

export type Experience = {
  role: string;
  organization: string;
  dates: string;
};

/** LinkedIn experience + current agency — newest first */
export const experience: Experience[] = [
  {
    role: "Founder",
    organization: "whyitworks.ai · theclickup",
    dates: "Present",
  },
  {
    role: "Ecommerce Marketing Consultant",
    organization: "The Fliq",
    dates: "Jan 2025 – Jun 2026",
  },
  {
    role: "Shopify Designer & Developer",
    organization: "Fiverr",
    dates: "Feb 2022 – Jun 2026",
  },
  {
    role: "Performance Marketing Specialist",
    organization: "Scalewave",
    dates: "Jan 2023 – Sep 2024",
  },
];
