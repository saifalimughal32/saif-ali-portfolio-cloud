/** Categories mirror services — empty ones show a placeholder until work is added */
export type PortfolioCategory =
  | "shopify"
  | "growth-strategy"
  | "branding"
  | "ai-creatives"
  | "performance"
  | "ai-workflows";

export type PortfolioProject = {
  id: string;
  title: string;
  category: PortfolioCategory;
  thumbnail: string;
  thumbnailAlt: string;
  media: { type: "image" | "video"; src: string; poster?: string }[];
  description?: string;
  contribution?: string;
  liveUrl?: string;
  status: "published" | "concept" | "in-progress" | "coming-soon";
  approvedForDisplay: boolean;
};

export type PortfolioCategoryIntro = {
  line1: string;
  line2Before: string;
  line2Accent: string;
  line3Accent?: string;
  body: string;
  cta: string;
  trust: string;
};

export const portfolioMeta = {
  updatedLabel: "Updated October, 2026",
  heading: "Portfolio Work Samples",
  accentWords: "Work Samples",
  support:
    "Ecommerce work that sells — store design, brand systems, product ads, and paid campaigns built to convert traffic into orders.",
};

export const portfolioCategories: {
  id: "all" | PortfolioCategory;
  label: string;
  hash: string;
  /** Shown when this filter has no published projects yet */
  emptyMessage: string;
  /** Easy-language purpose block — same style as Ad Creatives hero */
  intro: PortfolioCategoryIntro;
}[] = [
  {
    id: "all",
    label: "All",
    hash: "all",
    emptyMessage: "More ecommerce projects are being added. Check back soon.",
    intro: {
      line1: "A full ecommerce system that",
      line2Before: "stops wasted traffic and ",
      line2Accent: "turns clicks into orders",
      body: "Most brands lose money between the ad, the store, and the offer. We connect store design, branding, creatives, and paid ads into one loop — so every dollar you spend has a clearer path to checkout. Done with you, built to sell.",
      cta: "Book your Discovery Call",
      trust: "Trusted by ecommerce brands worldwide",
    },
  },
  {
    id: "shopify",
    label: "Store Design",
    hash: "shopify",
    emptyMessage: "Shopify storefront case studies coming soon.",
    intro: {
      line1: "Shopify stores that stop",
      line2Before: "shoppers from bouncing and ",
      line2Accent: "lift conversion",
      body: "Ugly pages, slow mobile, and confusing checkout kill sales. We design Shopify stores that make the product obvious, build trust fast, and make buying feel easy — so more of your traffic actually orders.",
      cta: "Book your Discovery Call",
      trust: "Built for brands that sell on Shopify",
    },
  },
  {
    id: "growth-strategy",
    label: "Offers & Funnels",
    hash: "growth-strategy",
    emptyMessage: "Offer and funnel case studies coming soon.",
    intro: {
      line1: "Offers and funnels that stop",
      line2Before: "confused traffic and ",
      line2Accent: "raise conversion",
      body: "If the offer is weak or the path from ad to cart is messy, ads can’t save you. We clarify what you sell, who it’s for, and the exact next step — so the same traffic buys more often.",
      cta: "Book your Discovery Call",
      trust: "Strategy that makes paid traffic worth it",
    },
  },
  {
    id: "branding",
    label: "Brand & Packaging",
    hash: "branding",
    emptyMessage: "Brand and packaging samples coming soon.",
    intro: {
      line1: "Brand and packaging that stop",
      line2Before: "looking cheap and ",
      line2Accent: "win trust fast",
      body: "When your brand looks random, people hesitate — and competitors win. We build logo, packaging, and visuals that look premium and consistent across your store and ads, so customers feel safer buying from you.",
      cta: "Book your Discovery Call",
      trust: "Identity that helps ecommerce brands sell",
    },
  },
  {
    id: "ai-creatives",
    label: "Ad Creatives",
    hash: "ai-creatives",
    emptyMessage: "Product ad creative samples coming soon.",
    intro: {
      line1: "AI-Powered creative that reduces",
      line2Before: "CPA by 35% and ",
      line2Accent: "scales your meta",
      line3Accent: "spend",
      body: "We find your winning angles, produce fully-edited ads monthly, and build the system that compounds your results. Real-looking AI, no creator bottlenecks, completely done for you.",
      cta: "Book your Discovery Call",
      trust: "Trusted by 100+ DTC brands",
    },
  },
  {
    id: "performance",
    label: "Paid Ads",
    hash: "performance",
    emptyMessage: "Paid ads case studies coming soon.",
    intro: {
      line1: "Paid ads that stop burning",
      line2Before: "budget and ",
      line2Accent: "scale what works",
      body: "Throwing money at Meta without a clear offer or creative plan wastes spend. We set up and optimize campaigns, test winners, kill losers, and scale only when ROAS makes sense — done for you.",
      cta: "Book your Discovery Call",
      trust: "Performance focused on ecommerce ROAS",
    },
  },
  {
    id: "ai-workflows",
    label: "Creative Ops",
    hash: "ai-workflows",
    emptyMessage: "Creative ops examples coming soon.",
    intro: {
      line1: "Creative systems that remove",
      line2Before: "bottlenecks and ",
      line2Accent: "ship ads faster",
      body: "Waiting on creators kills testing speed — and your CPA stays high. We build AI-assisted production workflows so you get more ad variations every month, less back-and-forth, and a machine that keeps up when ads start winning.",
      cta: "Book your Discovery Call",
      trust: "Built to remove creator bottlenecks",
    },
  },
];

export const projects: PortfolioProject[] = [
  {
    id: "aura21",
    title: "Aura21 — Shopify Store Design for a Streetwear Brand",
    category: "shopify",
    thumbnail: "/projects/aura21.jpg",
    thumbnailAlt: "Aura21 Shopify storefront — streetwear summer drop hero designed for conversion",
    media: [
      { type: "image", src: "/projects/aura21/section-01.jpg" },
      { type: "image", src: "/projects/aura21/section-02.jpg" },
      { type: "image", src: "/projects/aura21/section-03.jpg" },
      { type: "image", src: "/projects/aura21/section-04.jpg" },
      { type: "image", src: "/projects/aura21/full.jpg" },
    ],
    description:
      "Shopify store design for Aura21, a streetwear fashion brand. Summer-drop hero, collection-edit flow, and a conversion-focused layout built to move shoppers from first scroll to checkout. Context: Aura21 launched a summer drop and needed a high-energy hero plus clear collection storytelling to keep shoppers browsing instead of bouncing. Role: full storefront design — hero composition, collection storytelling, and ecommerce UI. Result: a conversion-focused layout with a hero-first flow into collections.",
    contribution:
      "Shopify storefront design, hero composition, collection storytelling, and ecommerce UI.",
    status: "published",
    approvedForDisplay: true,
  },
  {
    id: "bunbox",
    title: "Bun Box — Shopify Store Design for a Bakery Brand",
    category: "shopify",
    thumbnail: "/projects/bunbox.jpg",
    thumbnailAlt: "Bun Box Shopify storefront — bakery hero designed for conversion",
    media: [
      { type: "image", src: "/projects/bunbox/section-01.jpg" },
      { type: "image", src: "/projects/bunbox/section-02.jpg" },
      { type: "image", src: "/projects/bunbox/section-03.jpg" },
      { type: "image", src: "/projects/bunbox/section-04.jpg" },
      { type: "image", src: "/projects/bunbox/full.jpg" },
    ],
    description:
      "Shopify store design for Bun Box, a bakery ecommerce brand. Playful product storytelling, easy menu browsing, and an order-focused layout built to turn cravings into checkouts. Context: Bun Box sells baked goods online — bakery shoppers decide fast, so the menu must be easy to browse and the path to ordering obvious. Role: full storefront design — product presentation, menu-browsing UX, and conversion UI for baked goods ecommerce. Result: a playful, order-focused layout that guides shoppers from hero to checkout.",
    contribution:
      "Shopify storefront design, product presentation, and conversion UI for baked goods ecommerce.",
    status: "published",
    approvedForDisplay: true,
  },
  {
    id: "elvo",
    title: "Elvo — Shopify Store Design for a Furniture Brand",
    category: "shopify",
    thumbnail: "/projects/elvo.jpg",
    thumbnailAlt: "Elvo Shopify storefront — minimal wooden furniture hero designed for conversion",
    media: [
      { type: "image", src: "/projects/elvo/section-01.jpg" },
      { type: "image", src: "/projects/elvo/section-02.jpg" },
      { type: "image", src: "/projects/elvo/section-03.jpg" },
      { type: "image", src: "/projects/elvo/full.jpg" },
    ],
    description:
      "Shopify store design for Elvo, a minimal wooden furniture brand. Calm hero, clear category browsing, and trust features built to make considered furniture purchases feel easy. Context: Elvo sells minimal wooden furniture online — furniture shoppers compare carefully, so the design keeps the hero calm, product presentation honest, and trust signals visible to reduce hesitation. Role: full storefront design — furniture category UX, trust features, and brand-forward ecommerce layout. Result: a minimal, browsing-friendly layout that guides shoppers from hero through product discovery toward purchase.",
    contribution:
      "Shopify storefront design, furniture category UX, and brand-forward ecommerce layout.",
    status: "published",
    approvedForDisplay: true,
  },
  {
    id: "homely",
    title: "Homely Furniture",
    category: "shopify",
    thumbnail: "/projects/homely.jpg",
    thumbnailAlt: "Homely Furniture Shopify store — soft forms armchair hero",
    media: [
      { type: "image", src: "/projects/homely/section-01.jpg" },
      { type: "image", src: "/projects/homely/section-02.jpg" },
      { type: "image", src: "/projects/homely/full.jpg" },
    ],
    description:
      "Shopify store design for Homely Furniture — soft-form chairs and cozy living. Product-led hero, catalog highlights, and warm brand UI.",
    contribution:
      "Shopify storefront design, product showcase UI, and ecommerce visual direction.",
    status: "published",
    approvedForDisplay: true,
  },
  {
    id: "mora",
    title: "MORA",
    category: "branding",
    thumbnail: "/projects/mora.jpg",
    thumbnailAlt:
      "MORA brand identity board — Dream Better. Feel Brighter.",
    media: [
      { type: "image", src: "/projects/mora/brand-board.jpg" },
      { type: "image", src: "/projects/mora/lifestyle-drink.jpg" },
      { type: "image", src: "/projects/mora/apparel.jpg" },
      { type: "image", src: "/projects/mora/storefront.jpg" },
      { type: "image", src: "/projects/mora/packaging.jpg" },
      { type: "image", src: "/projects/mora/social.jpg" },
    ],
    description:
      "Brand identity and campaign system for MORA — a calming lavender–blueberry drink. Logo, packaging, apparel, retail environment, and social stories built around “Dream Better. Feel Brighter.”",
    contribution:
      "Visual identity, product packaging, lifestyle campaign, merch, and storefront concepts.",
    status: "published",
    approvedForDisplay: true,
  },
  {
    id: "rivori-matcha",
    title: "Rivori Matcha",
    category: "branding",
    thumbnail: "/projects/rivori-matcha.jpg",
    thumbnailAlt:
      "Rivori Matcha brand identity — packaging cups, carrier bag, and logo",
    media: [
      { type: "image", src: "/projects/rivori-matcha/packaging-cups-bag.jpg" },
      { type: "image", src: "/projects/rivori-matcha/logo-mark.jpg" },
      { type: "image", src: "/projects/rivori-matcha/storefront.jpg" },
      { type: "image", src: "/projects/rivori-matcha/pour-cups.jpg" },
      { type: "image", src: "/projects/rivori-matcha/shipping-boxes.jpg" },
      { type: "image", src: "/projects/rivori-matcha/social-profile.jpg" },
      { type: "image", src: "/projects/rivori-matcha/lifestyle-hat-cup.jpg" },
      { type: "image", src: "/projects/rivori-matcha/sip-cup.jpg" },
      { type: "image", src: "/projects/rivori-matcha/bottle-lifestyle.jpg" },
      { type: "image", src: "/projects/rivori-matcha/brand-collage.jpg" },
    ],
    description:
      "Full brand identity for Rivori Matcha — a playful matcha lifestyle brand. Logo system, packaging, storefront, social, and lifestyle campaign visuals built around Smooth. Fresh. Uplifting.",
    contribution:
      "Brand identity, packaging system, environmental graphics, and campaign photography direction.",
    status: "published",
    approvedForDisplay: true,
  },
  {
    id: "spookybite",
    title: "SpookyBite",
    category: "branding",
    thumbnail: "/projects/spookybite.jpg",
    thumbnailAlt:
      "SpookyBite pizza brand identity — ghost mascot and packaging",
    media: [
      { type: "image", src: "/projects/spookybite/brand-system.jpg" },
      { type: "image", src: "/projects/spookybite/logo-lockup.jpg" },
      { type: "image", src: "/projects/spookybite/packaging-boxes.jpg" },
      { type: "image", src: "/projects/spookybite/packaging-cup-bag.jpg" },
      { type: "image", src: "/projects/spookybite/lifestyle.jpg" },
      { type: "image", src: "/projects/spookybite/storefront.jpg" },
      { type: "image", src: "/projects/spookybite/pattern.jpg" },
      { type: "image", src: "/projects/spookybite/stickers.jpg" },
      { type: "image", src: "/projects/spookybite/social-post.jpg" },
      { type: "image", src: "/projects/spookybite/social-cheesy.jpg" },
    ],
    description:
      "SpookyBite is a playful pizza identity that brings a spooky twist to everyday cravings. Bold red, orange, and cream palette, a cute ghost mascot, and energetic packaging and social visuals that turn pizza into a fun, feel-good experience.",
    contribution:
      "Brand identity, mascot, wordmark, packaging system, pattern, and social visual direction.",
    status: "published",
    approvedForDisplay: true,
  },
  {
    id: "ai-video1",
    title: "AI Lifestyle UGC Ad",
    category: "ai-creatives",
    thumbnail: "/projects/ai-video1.jpg",
    thumbnailAlt: "AI-generated lifestyle UGC video ad",
    media: [
      {
        type: "video",
        src: "/projects/ai-creatives/video1.mp4",
        poster: "/projects/ai-creatives/video1-poster.jpg",
      },
    ],
    description:
      "Real-looking AI UGC video creative for Meta — lifestyle angle built to test and scale.",
    contribution: "AI video generation, edit, and ad-ready delivery.",
    status: "published",
    approvedForDisplay: true,
  },
  {
    id: "ai-video3",
    title: "AI Product Story Ad",
    category: "ai-creatives",
    thumbnail: "/projects/ai-video3.jpg",
    thumbnailAlt: "AI-generated product story video ad",
    media: [
      {
        type: "video",
        src: "/projects/ai-creatives/video3.mp4",
        poster: "/projects/ai-creatives/video3-poster.jpg",
      },
    ],
    description:
      "Branded AI video ad with product storytelling and conversion-focused pacing.",
    contribution: "AI production, creative direction, and platform-ready edit.",
    status: "published",
    approvedForDisplay: true,
  },
  {
    id: "ai-bag",
    title: "AI Handbag Ad",
    category: "ai-creatives",
    thumbnail: "/projects/ai-bag.jpg",
    thumbnailAlt: "AI creative video for handbag ecommerce",
    media: [
      {
        type: "video",
        src: "/projects/ai-creatives/bag.mp4",
        poster: "/projects/ai-creatives/bag-poster.jpg",
      },
    ],
    description: "AI video ad for a fashion handbag offer — clean product-led creative.",
    contribution: "AI scene generation and ad edit.",
    status: "published",
    approvedForDisplay: true,
  },
  {
    id: "ai-teller",
    title: "AI Homeware Ad",
    category: "ai-creatives",
    thumbnail: "/projects/ai-teller.jpg",
    thumbnailAlt: "AI creative video for tableware and homeware",
    media: [
      {
        type: "video",
        src: "/projects/ai-creatives/teller.mp4",
        poster: "/projects/ai-creatives/teller-poster.jpg",
      },
    ],
    description: "AI UGC-style ad for homeware / tableware ecommerce.",
    contribution: "AI creative production and editing.",
    status: "published",
    approvedForDisplay: true,
  },
  {
    id: "ai-ring",
    title: "AI Jewelry Ad",
    category: "ai-creatives",
    thumbnail: "/projects/ai-ring.jpg",
    thumbnailAlt: "AI creative video for jewelry brand",
    media: [
      {
        type: "video",
        src: "/projects/ai-creatives/ring.mp4",
        poster: "/projects/ai-creatives/ring-poster.jpg",
      },
    ],
    description: "Premium AI video creative for jewelry — detail shots and lifestyle framing.",
    contribution: "AI video generation and brand-aligned edit.",
    status: "published",
    approvedForDisplay: true,
  },
  {
    id: "ai-kleid",
    title: "AI Apparel Ad",
    category: "ai-creatives",
    thumbnail: "/projects/ai-kleid.jpg",
    thumbnailAlt: "AI creative video for apparel ecommerce",
    media: [
      {
        type: "video",
        src: "/projects/ai-creatives/kleid.mp4",
        poster: "/projects/ai-creatives/kleid-poster.jpg",
      },
    ],
    description: "AI fashion video ad for apparel — model and product storytelling.",
    contribution: "AI UGC production and ad editing.",
    status: "published",
    approvedForDisplay: true,
  },
  {
    id: "ai-padel",
    title: "AI Sports Ad",
    category: "ai-creatives",
    thumbnail: "/projects/ai-padel.jpg",
    thumbnailAlt: "AI creative video for sports and padel brand",
    media: [
      {
        type: "video",
        src: "/projects/ai-creatives/padel.mp4",
        poster: "/projects/ai-creatives/padel-poster.jpg",
      },
    ],
    description: "AI video creative for sports / padel ecommerce — action and product focus.",
    contribution: "AI scene creation and performance-oriented edit.",
    status: "published",
    approvedForDisplay: true,
  },
  {
    id: "ai-food",
    title: "AI Food Ad",
    category: "ai-creatives",
    thumbnail: "/projects/ai-food.jpg",
    thumbnailAlt: "AI creative video for food brand",
    media: [
      {
        type: "video",
        src: "/projects/ai-creatives/food.mp4",
        poster: "/projects/ai-creatives/food-poster.jpg",
      },
    ],
    description: "AI food video ad — appetite appeal and product close-ups for Meta.",
    contribution: "AI creative generation and platform-ready delivery.",
    status: "published",
    approvedForDisplay: true,
  },
  {
    id: "ai-klammern",
    title: "AI Accessories Ad",
    category: "ai-creatives",
    thumbnail: "/projects/ai-klammern.jpg",
    thumbnailAlt: "AI creative video for fashion accessories",
    media: [
      {
        type: "video",
        src: "/projects/ai-creatives/klammern.mp4",
        poster: "/projects/ai-creatives/klammern-poster.jpg",
      },
    ],
    description: "AI accessories video creative for DTC fashion brands.",
    contribution: "AI production and ad editing.",
    status: "published",
    approvedForDisplay: true,
  },
  {
    id: "ai-outfit",
    title: "AI Outfit Lifestyle Ad",
    category: "ai-creatives",
    thumbnail: "/projects/ai-outfit.jpg",
    thumbnailAlt: "AI creative video for outfit lifestyle ecommerce",
    media: [
      {
        type: "video",
        src: "/projects/ai-creatives/outfit.mp4",
        poster: "/projects/ai-creatives/outfit-poster.jpg",
      },
    ],
    description: "AI lifestyle outfit ad — full look storytelling for ecommerce.",
    contribution: "AI UGC creative and edit.",
    status: "published",
    approvedForDisplay: true,
  },
  {
    id: "ai-static-ads",
    title: "AI Static Ads",
    category: "ai-creatives",
    thumbnail: "/projects/ai-statics.jpg",
    thumbnailAlt: "AI-generated static Meta ad creatives",
    media: [
      { type: "image", src: "/projects/ai-creatives/static-30.jpg" },
      { type: "image", src: "/projects/ai-creatives/static-31.jpg" },
      { type: "image", src: "/projects/ai-creatives/static-32.jpg" },
      { type: "image", src: "/projects/ai-creatives/static-33.jpg" },
      { type: "image", src: "/projects/ai-creatives/static-34.jpg" },
      { type: "image", src: "/projects/ai-creatives/static-35.jpg" },
      { type: "image", src: "/projects/ai-creatives/static-36.jpg" },
      { type: "image", src: "/projects/ai-creatives/static-38.jpg" },
    ],
    description:
      "AI static ad set — brand and direct-response formats ready for creative testing.",
    contribution: "AI image ads, angle variations, and ad-account-ready exports.",
    status: "published",
    approvedForDisplay: true,
  },
  {
    id: "ai-product-visuals",
    title: "AI Product Visuals",
    category: "ai-creatives",
    thumbnail: "/projects/ai-product.jpg",
    thumbnailAlt: "AI-generated product and brand visuals",
    media: [
      { type: "image", src: "/projects/ai-creatives/static-product.jpg" },
      { type: "image", src: "/projects/ai-creatives/static-r1.jpg" },
      { type: "image", src: "/projects/ai-creatives/static-rounded.jpg" },
    ],
    description:
      "AI product and brand visuals for ecommerce — catalog, social, and ad use.",
    contribution: "AI product imagery and branded asset creation.",
    status: "published",
    approvedForDisplay: true,
  },
];

export const publishedProjects = projects.filter(
  (p) => p.approvedForDisplay && p.status === "published",
);
