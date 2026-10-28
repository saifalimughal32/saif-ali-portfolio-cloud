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
    title: "Homely Furniture — Shopify Store Design for a Cozy Furniture Brand",
    category: "shopify",
    thumbnail: "/projects/homely.jpg",
    thumbnailAlt: "Homely Furniture Shopify storefront — soft-form armchair hero designed for conversion",
    media: [
      { type: "image", src: "/projects/homely/section-01.jpg" },
      { type: "image", src: "/projects/homely/section-02.jpg" },
      { type: "image", src: "/projects/homely/full.jpg" },
    ],
    description:
      "Shopify store design for Homely Furniture, a cozy furniture brand. Product-led hero, catalog highlights, and warm brand UI built to guide shoppers from first scroll to purchase. Context: Homely Furniture sells soft-form chairs and cozy living pieces — furniture shoppers compare carefully, so the design keeps the hero product-led, browsing calm, and brand warmth consistent. Role: full storefront design — product showcase UI, catalog highlights, and ecommerce visual direction. Result: a warm, browsing-friendly layout that guides shoppers from hero through product discovery toward purchase.",
    contribution:
      "Shopify storefront design, product showcase UI, catalog highlights, and ecommerce visual direction.",
    status: "published",
    approvedForDisplay: true,
  },
  {
    id: "mora",
    title: "MORA — Brand Identity Design for a Lavender-Blueberry Drink Brand",
    category: "branding",
    thumbnail: "/projects/mora.jpg",
    thumbnailAlt:
      "MORA brand identity board — lavender-blueberry drink logo and packaging designed to stand out at the shelf and on socials",
    media: [
      { type: "image", src: "/projects/mora/brand-board.jpg" },
      { type: "image", src: "/projects/mora/lifestyle-drink.jpg" },
      { type: "image", src: "/projects/mora/apparel.jpg" },
      { type: "image", src: "/projects/mora/storefront.jpg" },
      { type: "image", src: "/projects/mora/packaging.jpg" },
      { type: "image", src: "/projects/mora/social.jpg" },
    ],
    description:
      "Brand identity and packaging design for MORA, a calming lavender–blueberry drink. Identity system, packaging, apparel, retail environment, and social stories built around “Dream Better. Feel Brighter.” Context: MORA is a calming lavender-blueberry drink — beverage shoppers decide in seconds at the shelf and on socials, so the identity is built to be recognizable at a glance and consistent across packaging, apparel, and campaign visuals. Role: full identity system — logo, product packaging, apparel, retail environment, and social story concepts. Result: one cohesive visual language that carries from shelf to screen, giving the brand a consistent look across every touchpoint.",
    contribution:
      "Brand identity system, product packaging, apparel, retail environment, and social campaign concepts.",
    liveUrl: "/case-studies/mora",
    status: "published",
    approvedForDisplay: true,
  },
  {
    id: "rivori-matcha",
    title: "Rivori Matcha — Brand Identity Design for a Playful Matcha Lifestyle Brand",
    category: "branding",
    thumbnail: "/projects/rivori-matcha.jpg",
    thumbnailAlt:
      "Rivori Matcha brand identity board — playful matcha packaging cups, carrier bag and logo system designed for shelf and social recognition",
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
      "Full brand identity for Rivori Matcha, a playful matcha lifestyle brand — logo system, packaging, storefront, social, and lifestyle campaign visuals. Context: Rivori Matcha is built around \u201cSmooth. Fresh. Uplifting.\u201d — matcha competes in a crowded wellness-drink space where shelf recognition and social shareability decide first purchases, so the identity is built to be recognizable at a glance and consistent from packaging cups to storefront to social profiles. Role: full identity system — logo and logo mark, packaging cups and carrier bag system, storefront graphics, shipping boxes, social profile kit, and lifestyle campaign visuals. Result: one cohesive identity that carries the brand\u2019s playful energy across every touchpoint, from the cup in hand to the shelf, the box at the door, and the feed.",
    contribution:
      "Brand identity system — logo, packaging cups and carrier bag, storefront and environmental graphics, shipping boxes, social profile kit, and lifestyle campaign visuals.",
    liveUrl: "/case-studies/rivori-matcha",
    status: "published",
    approvedForDisplay: true,
  },
  {
    id: "spookybite",
    title: "SpookyBite — Brand Identity Design for a Playful Pizza Brand",
    category: "branding",
    thumbnail: "/projects/spookybite.jpg",
    thumbnailAlt:
      "SpookyBite pizza brand identity board — ghost mascot, logo lockup, pizza boxes and packaging system designed for shelf and social recognition",
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
      "Full brand identity for SpookyBite, a playful pizza brand — ghost mascot, wordmark, packaging system, storefront, pattern, and social visuals. Context: SpookyBite pairs everyday pizza cravings with a spooky twist — in food branding the identity has to trigger recognition and appetite at a glance, from the pizza box in hand to the storefront to the feed, so the system is built around one memorable mascot and a bold red, orange, and cream palette. Role: full identity system — ghost mascot and wordmark, logo lockup, packaging boxes, cup-and-bag system, storefront graphics, brand pattern, stickers, and social post visuals. Result: one cohesive identity that carries the brand\u2019s playful energy across every touchpoint, from the box at the door to the storefront to the feed.",
    contribution:
      "Brand identity system — ghost mascot, wordmark and logo lockup, pizza box and cup-and-bag packaging, storefront graphics, brand pattern, stickers, and social visual direction.",
    liveUrl: "/case-studies/spookybite",
    status: "published",
    approvedForDisplay: true,
  },
  {
    id: "ai-video1",
    title: "AI Lifestyle UGC Ad — Realistic AI-Generated Video Creative for Meta",
    category: "ai-creatives",
    thumbnail: "/projects/ai-video1.jpg",
    thumbnailAlt:
      "AI-generated lifestyle UGC video ad — realistic creator-style video creative made for Meta ad creative testing",
    media: [
      {
        type: "video",
        src: "/projects/ai-creatives/video1.mp4",
        poster: "/projects/ai-creatives/video1-poster.jpg",
      },
    ],
    description:
      "AI-generated UGC-style video ad in a lifestyle angle, built for Meta creative testing. Context: Meta ad accounts run on a test-and-scale loop — winners get scaled, losers get killed — so every testing round needs fresh angles, and lifestyle/creator formats are the staple DTC brands test with. Problem: real UGC means casting, shooting, and waiting, so brands short on native-looking creative recycle the same ads and let fatigue set in. Role: AI video generation, creative direction, edit, and ad-ready delivery — generated to look and feel like real UGC so it sits natively in the feed. Result: a test-ready lifestyle angle the brand can drop into its testing rotation — realistic UGC-style creative without organizing a shoot. Campaign performance: not published — this entry demonstrates the creative, not the ad results.",
    contribution:
      "AI video generation, creative direction, edit, and ad-ready delivery for Meta.",
    status: "published",
    approvedForDisplay: true,
  },
  {
    id: "ai-video3",
    title: "AI Product Story Ad — AI-Generated Video Creative with Product Storytelling",
    category: "ai-creatives",
    thumbnail: "/projects/ai-video3.jpg",
    thumbnailAlt:
      "AI-generated product story video ad — branded AI video creative with product storytelling and conversion-focused pacing",
    media: [
      {
        type: "video",
        src: "/projects/ai-creatives/video3.mp4",
        poster: "/projects/ai-creatives/video3-poster.jpg",
      },
    ],
    description:
      "AI-generated product story video ad with conversion-focused pacing. Context: paid-social testing runs on fresh creative angles — a product-story format gives the brand a storytelling angle to rotate alongside hooks, UGC, and offer-led ads. Problem: telling a real product story on camera needs a shoot, talent, and timelines, so teams lean on static product shots that blend into the feed. Role: AI video generation, creative direction, pacing and edit for conversion-focused storytelling, delivered ad-ready — built to look like a branded product story without organizing a shoot. Result: a test-ready product-story angle the brand can drop into its creative rotation. Campaign performance: not published — this entry demonstrates the creative, not the ad results.",
    contribution:
      "AI video production, creative direction, and ad-ready edit.",
    status: "published",
    approvedForDisplay: true,
  },
  {
    id: "ai-bag",
    title: "AI Handbag Ad — AI-Generated Video Creative for Fashion Accessories",
    category: "ai-creatives",
    thumbnail: "/projects/ai-bag.jpg",
    thumbnailAlt:
      "AI-generated fashion handbag video ad — product-led accessories creative with clean studio-style framing",
    media: [
      {
        type: "video",
        src: "/projects/ai-creatives/bag.mp4",
        poster: "/projects/ai-creatives/bag-poster.jpg",
      },
    ],
    description:
      "AI-generated handbag video ad with product-led creative for a fashion accessories offer. Context: accessories brands need close-up product creatives that hold attention in the feed — UGC covers storytelling, but it does not always show the product clearly. Problem: shooting real product footage with consistent lighting and styling takes a shoot day, and plain product shots blend into the feed. Role: AI scene generation, product-led creative direction, and ad-ready edit — built to look like a styled product shoot without organizing one. Result: a test-ready product-led angle the brand can rotate alongside lifestyle and offer-led ads. Campaign performance: not published — this entry demonstrates the creative, not the ad results.",
    contribution:
      "AI scene generation, product-led creative direction, and ad-ready edit.",
    status: "published",
    approvedForDisplay: true,
  },
  {
    id: "ai-teller",
    title:
      "AI Homeware Ad — AI-Generated Video Creative for Homeware & Tableware",
    category: "ai-creatives",
    thumbnail: "/projects/ai-teller.jpg",
    thumbnailAlt:
      "AI-generated homeware video ad — tableware styled in a warm in-home scene",
    media: [
      {
        type: "video",
        src: "/projects/ai-creatives/teller.mp4",
        poster: "/projects/ai-creatives/teller-poster.jpg",
      },
    ],
    description:
      "AI-generated homeware video ad with styled in-home scenes for a tableware offer. Context: homeware brands sell a feeling — tableware and decor need to be seen styled in a real home setting to trigger purchase intent, and flat product shots undersell them. Problem: styling and shooting tableware in a beautiful home setting means a location, a stylist, and a shoot day, which is slow and expensive when testing multiple looks. Role: AI scene generation, home-styled creative direction, and ad-ready edit — built to look like an in-home styled shoot without organizing one. Result: a test-ready styled-scene angle the brand can rotate alongside UGC and offer-led ads. Campaign performance: not published — this entry demonstrates the creative, not the ad results.",
    contribution:
      "AI scene generation, home-styled creative direction, and ad-ready edit.",
    status: "published",
    approvedForDisplay: true,
  },
  {
    id: "ai-ring",
    title: "AI Jewelry Ad — AI-Generated Video Creative for Jewelry Brands",
    category: "ai-creatives",
    thumbnail: "/projects/ai-ring.jpg",
    thumbnailAlt:
      "AI-generated jewelry video ad — macro detail shots and styled lifestyle framing",
    media: [
      {
        type: "video",
        src: "/projects/ai-creatives/ring.mp4",
        poster: "/projects/ai-creatives/ring-poster.jpg",
      },
    ],
    description:
      "AI-generated jewelry video ad with macro detail shots and styled lifestyle framing for a jewelry offer. Context: jewelry is high-consideration — sparkle, craftsmanship detail, and seeing it worn is what triggers desire, and flat packshots undersell that. Problem: macro jewelry photography and styled lifestyle framing need specialized photography, controlled lighting, and a model shoot, which is slow and expensive when testing new collections. Role: AI video generation, detail-led creative direction, and ad-ready edit — built to look like a luxury jewelry shoot without organizing one. Result: a test-ready detail-led angle the brand can rotate alongside UGC and offer-led ads. Campaign performance: not published — this entry demonstrates the creative, not the ad results.",
    contribution:
      "AI video generation, detail-led creative direction, and ad-ready edit.",
    status: "published",
    approvedForDisplay: true,
  },
  {
    id: "ai-kleid",
    title:
      "AI Apparel Ad — AI-Generated Fashion Video Creative for Clothing Brands",
    category: "ai-creatives",
    thumbnail: "/projects/ai-kleid.jpg",
    thumbnailAlt:
      "AI-generated apparel video ad — model-worn styling with realistic fabric movement",
    media: [
      {
        type: "video",
        src: "/projects/ai-creatives/kleid.mp4",
        poster: "/projects/ai-creatives/kleid-poster.jpg",
      },
    ],
    description:
      "AI-generated apparel video ad with model-worn styling and realistic fabric movement for a clothing offer. Context: apparel sells on how clothes look when worn — fit, drape, and movement are what convince a shopper, and flat lays or packshots do not show that. Problem: booking a model, a location, and a styling day to film product-on-model footage is slow and expensive when testing new drops. Role: AI video generation, model-led creative direction, and ad-ready edit — built to look like an on-model fashion shoot without organizing one. Result: a test-ready model-worn angle the brand can rotate alongside UGC and offer-led ads. Campaign performance: not published — this entry demonstrates the creative, not the ad results.",
    contribution:
      "AI video generation, model-led creative direction, and ad-ready edit.",
    status: "published",
    approvedForDisplay: true,
  },
  {
    id: "ai-padel",
    title: "AI Sports Ad — AI-Generated Video Creative for Sports Brands",
    category: "ai-creatives",
    thumbnail: "/projects/ai-padel.jpg",
    thumbnailAlt:
      "AI-generated sports video ad — on-court padel action with product-focused framing",
    media: [
      {
        type: "video",
        src: "/projects/ai-creatives/padel.mp4",
        poster: "/projects/ai-creatives/padel-poster.jpg",
      },
    ],
    description:
      "AI-generated sports video ad with on-court padel action and product-focused framing for a sports offer. Context: sports products sell on energy — shoppers buy the movement, the intensity, and the on-court feel, and static packshots cannot show that. Problem: filming real on-court action footage needs athletes, court time, and a camera crew, which is slow and expensive when testing new creative angles. Role: AI video generation, action-led creative direction, and ad-ready edit — built to look like a shot-on-court sports ad without organizing a shoot. Result: a test-ready action angle the brand can rotate alongside UGC and offer-led ads. Campaign performance: not published — this entry demonstrates the creative, not the ad results.",
    contribution: "AI video generation, action-led creative direction, and ad-ready edit.",
    status: "published",
    approvedForDisplay: true,
  },
  {
    id: "ai-food",
    title: "AI Food Ad — AI-Generated Video Creative for Food Brands",
    category: "ai-creatives",
    thumbnail: "/projects/ai-food.jpg",
    thumbnailAlt:
      "AI-generated food video ad — appetite appeal and product close-ups for Meta ads",
    media: [
      {
        type: "video",
        src: "/projects/ai-creatives/food.mp4",
        poster: "/projects/ai-creatives/food-poster.jpg",
      },
    ],
    description:
      "AI-generated food video ad with appetite appeal and product close-ups, built for Meta ad placements. Context: food and drink offers win or lose on appetite appeal — shoppers buy the texture, the steam, the close-up that makes them hungry, and static packshots cannot trigger that. Problem: filming real food footage needs a shoot day, food styling, and a crew, which is slow and expensive when testing new creative angles. Role: AI video generation, appetite-led creative direction, and ad-ready edit — built to look like a shot food commercial without organizing a shoot. Result: a test-ready appetite angle the brand can rotate alongside UGC and offer-led ads. Campaign performance: not published — this entry demonstrates the creative, not the ad results.",
    contribution:
      "AI video generation, appetite-led creative direction, and ad-ready edit.",
    status: "published",
    approvedForDisplay: true,
  },
  {
    id: "ai-klammern",
    title: "AI Accessories Ad — AI-Generated Video Creative for Fashion Accessories",
    category: "ai-creatives",
    thumbnail: "/projects/ai-klammern.jpg",
    thumbnailAlt:
      "AI-generated accessories video ad — styling, detail close-ups and movement for Meta ads",
    media: [
      {
        type: "video",
        src: "/projects/ai-creatives/klammern.mp4",
        poster: "/projects/ai-creatives/klammern-poster.jpg",
      },
    ],
    description:
      "AI-generated accessories video ad with styling, detail close-ups and movement, built for Meta ad placements. Context: fashion accessories sell on detail and movement — the clasp, the finish, the way a piece catches light — and static packshots flatten that. Problem: filming real accessory footage needs styling, a model or a set, and a crew, which is slow and expensive when testing new creative angles. Role: AI video generation, accessory-led creative direction, and ad-ready edit — built to look like a shot product commercial without organizing a shoot. Result: a test-ready detail-and-movement angle the brand can rotate alongside UGC and offer-led ads. Campaign performance: not published — this entry demonstrates the creative, not the ad results.",
    contribution:
      "AI video generation, accessory-led creative direction, and ad-ready edit.",
    status: "published",
    approvedForDisplay: true,
  },
  {
    id: "ai-outfit",
    title: "AI Outfit Lifestyle Ad — AI-Generated Video Creative for Fashion Outfits",
    category: "ai-creatives",
    thumbnail: "/projects/ai-outfit.jpg",
    thumbnailAlt:
      "AI-generated outfit lifestyle video ad — full-look styling and movement for Meta ads",
    media: [
      {
        type: "video",
        src: "/projects/ai-creatives/outfit.mp4",
        poster: "/projects/ai-creatives/outfit-poster.jpg",
      },
    ],
    description:
      "AI-generated outfit lifestyle video ad with full-look styling and movement, built for Meta ad placements. Context: fashion outfits sell on the whole look — the fit, the styling, the way the pieces move together — and a single packshot cannot carry that story. Problem: filming real lifestyle footage needs a location, a model, styling, and a crew, which is slow and expensive when testing new creative angles. Role: AI video generation, outfit-led creative direction, and ad-ready edit — built to look like a shot lifestyle commercial without organizing a shoot. Result: a test-ready full-look angle the brand can rotate alongside UGC and offer-led ads. Campaign performance: not published — this entry demonstrates the creative, not the ad results.",
    contribution:
      "AI video generation, outfit-led creative direction, and ad-ready edit.",
    status: "published",
    approvedForDisplay: true,
  },
  {
    id: "ai-static-ads",
    title: "AI Static Ads — AI-Generated Static Ad Creatives for Meta Testing",
    category: "ai-creatives",
    thumbnail: "/projects/ai-statics.jpg",
    thumbnailAlt:
      "AI-generated static ad creatives — brand and direct-response formats for Meta ad testing",
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
      "AI-generated static ad creatives in brand and direct-response formats, built for creative testing on Meta. Context: static ads still carry a large share of Meta testing because they are fast to produce and easy to read in the feed, and one strong angle can be tested across placements without a shoot. Problem: producing enough varied angles — brand-led, offer-led, and product-led — by traditional design is slow when a brand needs to test quickly. Role: AI image generation, angle variations, and ad-account-ready exports — a set of ready-to-test statics across formats. Result: a test-ready set of angles the brand can rotate against video and UGC to find what stops the scroll. Campaign performance: not published — this entry demonstrates the creative, not the ad results.",
    contribution:
      "AI image generation, angle variations, and ad-account-ready exports.",
    status: "published",
    approvedForDisplay: true,
  },
  {
    id: "ai-product-visuals",
    title: "AI Product Visuals — AI-Generated Product Imagery for Ecommerce Catalogs and Ads",
    category: "ai-creatives",
    thumbnail: "/projects/ai-product.jpg",
    thumbnailAlt: "AI-generated product visuals — catalog, social and ad-ready imagery for ecommerce brands",
    media: [
      { type: "image", src: "/projects/ai-creatives/static-product.jpg" },
      { type: "image", src: "/projects/ai-creatives/static-r1.jpg" },
      { type: "image", src: "/projects/ai-creatives/static-rounded.jpg" },
    ],
    description:
      "Context: an ecommerce brand needs clean, consistent product imagery across its catalog, social posts, and ads, but a full photo shoot for every angle and variation is slow and costly. Problem: without strong visuals, listings and ads look flat and shoppers move on before they see what the product offers. Role: I directed and generated the product visuals with AI, keeping the product, lighting, and brand look consistent across the set. Result: a ready-to-use set of catalog, social, and ad images the brand can publish without a shoot. Campaign performance: not published — this entry demonstrates the creative, not the ad results.",
    contribution: "AI image generation, product-led creative direction, and ad-ready exports.",
    status: "published",
    approvedForDisplay: true,
  },
  {
    id: "habibi",
    title: "Habibi \u2014 Brand Identity Design for a Bold Fast Food Brand",
    category: "branding",
    thumbnail: "/projects/habibi.jpg",
    thumbnailAlt:
      "Habibi fast food brand identity board \u2014 expressive habibi! wordmark, vibrant orange and brown palette, packaging and campaign system designed for instant recognition",
    media: [
      { type: "image", src: "/projects/habibi/brand-board.jpg" },
      { type: "image", src: "/projects/habibi/logo-system.jpg" },
      { type: "image", src: "/projects/habibi/posters-social.jpg" },
      { type: "image", src: "/projects/habibi/crispy-campaign.jpg" },
      { type: "image", src: "/projects/habibi/merch-delivery.jpg" },
    ],
    description:
      "Context: fast food is a crowded category where a brand gets a second to trigger appetite and recognition — from the bucket in hand to the restaurant wall to the feed. Problem: generic fast food branding blends in, so a bold new brand risks looking like every other outlet before a customer ever tastes the food. Role: I built the complete identity system around the supplied Habibi logo — logo variations and lockups, Gliker display typography, a bold orange, brown, and cream color system, packaging for buckets, cups, and bags, poster and campaign design, social media templates, and merchandise and delivery branding, with big food photography doing the talking. Result: one cohesive, high-energy identity that carries across packaging, campaigns, and everyday touchpoints, giving Habibi a distinctive look that stands apart from generic fast food branding.",
    contribution:
      "Brand identity system \u2014 logo application and lockups, packaging, campaign posters, social templates, merchandise, and delivery branding.",
    liveUrl: "/case-studies/habibi",
    status: "published",
    approvedForDisplay: true,
  },
  {
    id: "luma",
    title: "Luma \u2014 Brand Identity Design for a Protein Soft Serve Brand",
    category: "branding",
    thumbnail: "/projects/luma.jpg",
    thumbnailAlt:
      "Luma protein soft serve brand identity \u2014 two striped Luma cups held against a summer sky, chunky rounded wordmark, indulgence without compromise campaign visual",
    media: [
      { type: "image", src: "/projects/luma/campaign-hero.jpg" },
      { type: "image", src: "/projects/luma/brand-messaging.jpg" },
      { type: "image", src: "/projects/luma/sculptural-logo.jpg" },
      { type: "image", src: "/projects/luma/colour-system.jpg" },
      { type: "image", src: "/projects/luma/packaging-wall.jpg" },
      { type: "image", src: "/projects/luma/cafe-posters.jpg" },
    ],
    description:
      "Full brand identity for Luma, a protein soft serve brand \u2014 playful rounded wordmark, flavour-led colour system, packaging, signage, and campaign visuals, designed by whyitworks. Context: protein desserts usually dress like diet products \u2014 restrained, clinical, apologetic \u2014 so Luma is built the other way around, indulgence first with the protein as the bonus, around one soft, rounded wordmark and a palette taken from the product itself: Sky Blue, Orange Cream, Vanilla White, Choco Brown, and Lavender Mist. Role: complete identity system \u2014 primary logo with construction, clear space, and misuse rules, colour and Helvetica typography system, packaging for 12 oz cups and 33 oz take-home pints across vanilla, strawberry, and chocolate flavour pairings, staff apron and cap, exterior signage, caf\u00e9 posters, outdoor billboard and street hoarding campaigns, delivery cartons, and social templates, all carrying the line Indulgence Without Compromise. Result: one cohesive, high-energy identity that stays instantly recognisable from a cup in hand to a billboard \u2014 a protein brand that looks like a treat, not a compromise.",
    contribution:
      "Brand identity system \u2014 logo and usage guidelines, colour and typography, packaging, signage, outdoor and caf\u00e9 campaigns, and social templates.",
    liveUrl: "/case-studies/luma",
    status: "published",
    approvedForDisplay: true,
  },
  {
    id: "dentify",
    title: "Dentify \u2014 Brand Identity Design for a Dental Clinic",
    category: "branding",
    thumbnail: "/projects/dentify.jpg",
    thumbnailAlt:
      "Dentify dental clinic brand identity \u2014 smiling patient during a checkup with the white Dentify logo, deep blue and cyan system",
    media: [
      { type: "image", src: "/projects/dentify/cover.jpg" },
      { type: "image", src: "/projects/dentify/logo.jpg" },
      { type: "image", src: "/projects/dentify/colour-typography.jpg" },
      { type: "image", src: "/projects/dentify/stationery.jpg" },
      { type: "image", src: "/projects/dentify/billboard.jpg" },
      { type: "image", src: "/projects/dentify/social-profile.jpg" },
    ],
    description:
      "Full brand identity for Dentify, a modern dental clinic \u2014 a warm, confident system built on gentle precision, designed by whyitworks. Context: dental branding usually leans cold and clinical, so Dentify is built the other way \u2014 clinical clarity with a welcoming visual language that helps patients feel understood from the first appointment. Role: complete identity system around the supplied Dentify emblem and wordmark \u2014 a five-colour system of Deep Blue, Cyan, White, Dark Navy, and Cool Mist, Britti Sans typography, photography direction, clinic interiors and signage, staff ID badges and uniforms, stationery and appointment cards, a printed brand book, billboard and poster campaigns, social templates and stories, and app and web interface branding. Result: one consistent, reassuring identity that carries the same calm voice from the clinic chair to the patient\u2019s phone. The full visual case study is on the site at /case-studies/dentify.",
    contribution:
      "Brand identity system \u2014 logo application, colour and typography, clinic signage and interiors, stationery, brand book, campaigns, social and app branding.",
    liveUrl: "/case-studies/dentify",
    status: "published",
    approvedForDisplay: true,
  },
];

export const publishedProjects = projects.filter(
  (p) => p.approvedForDisplay && p.status === "published",
);

