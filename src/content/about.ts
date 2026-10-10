export const about = {
  eyebrow: "/ About Me",
  /** Offer-style heading — accent words render in brand orange */
  line1: "Ecommerce systems that reduce",
  line2Before: "wasted spend and ",
  line2Accent: "scale what sells",
  subtitle: "Store. Offer. Creative. Ads. One growth system.",
  body: "If your Shopify store looks fine but CPA stays high, the pieces aren’t connected. I connect store design, offer clarity, Meta creatives, and paid growth so brands convert clearer, waste less, and scale with confidence.",
  impactLine: "Done-for-you systems that compound.",
  trustLine: "Trusted by ecommerce brands worldwide",
  proofLine: "Founder at whyitworks.ai — AI marketing for ecommerce",
  positioning:
    "I help ecommerce brands connect better design with clearer messaging, sharper creatives, and performance that compounds.",
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
