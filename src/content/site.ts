const askQuery = encodeURIComponent(
  "Who is Saif Ali, founder of whyitworks.ai — an AI-driven marketing agency for ecommerce?",
);

const whatsappNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "").trim() ||
  "923001234567";
const linkedinUrl =
  process.env.NEXT_PUBLIC_LINKEDIN_URL?.trim() ||
  "https://www.linkedin.com/in/saif-ali-094034279";
/** Set NEXT_PUBLIC_DRIBBBLE_URL to your profile (e.g. https://dribbble.com/handle) */
const dribbbleUrl =
  process.env.NEXT_PUBLIC_DRIBBBLE_URL?.trim() || "https://dribbble.com/";
/** Set NEXT_PUBLIC_PINTEREST_URL to your profile */
const pinterestUrl =
  process.env.NEXT_PUBLIC_PINTEREST_URL?.trim() || "https://www.pinterest.com/";

export type SocialLink = {
  label: string;
  href: string;
  icon:
    | "x"
    | "instagram"
    | "youtube"
    | "linkedin"
    | "telegram"
    | "globe"
    | "dribbble"
    | "pinterest"
    | "whatsapp";
};

export const site = {
  displayName: "Saif Ali",
  heroLeft: "SAIF",
  heroRight: "ALI",
  professionalLabel: "Founder · AI Ecommerce Marketing",
  heroTagline: "I give people a reason to choose you.",
  heroTaglineStatic: "I turn ad clicks into",
  heroTaglineRotations: [
    "customers.",
    "returning buyers.",
    "repeat revenue.",
  ] as const,
  /** Longest rotating phrase — sizes the slot so the hero never jumps */
  heroTaglineSizer: "returning buyers.",
  heroEyebrow: "Ecommerce Growth Consultant for DTC Brands",
  location: "Muzaffarabad, Pakistan",
  timeZone: "Asia/Karachi",
  gmtLabel: "GMT+5",
  email: "info@saifali.site",
  instagram: "https://www.instagram.com/saifalimughal_01/",
  agency: "whyitworks.ai",
  agencyUrl: "https://whyitworks.ai/",
  /**
   * Calendly event URL. Override with NEXT_PUBLIC_CALENDLY_URL if needed.
   */
  bookingUrl: (process.env.NEXT_PUBLIC_CALENDLY_URL?.trim() ||
    "https://calendly.com/callwithsaif/30min") as string | null,
  cvUrl: "/api/cv" as string | null,
  phone: null as string | null,
  whatsappNumber,
  linkedinUrl,
  dribbbleUrl,
  pinterestUrl,
  askAi: {
    chatgpt: `https://chatgpt.com/?q=${askQuery}`,
    claude: `https://claude.ai/new?q=${askQuery}`,
    gemini: `https://gemini.google.com/app?q=${askQuery}`,
    perplexity: `https://www.perplexity.ai/search?q=${askQuery}`,
  } as {
    chatgpt?: string;
    claude?: string;
    gemini?: string;
    perplexity?: string;
  },
  socials: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/saifalimughal_01/",
      icon: "instagram",
    },
    { label: "Dribbble", href: dribbbleUrl, icon: "dribbble" },
    { label: "Pinterest", href: pinterestUrl, icon: "pinterest" },
    { label: "LinkedIn", href: linkedinUrl, icon: "linkedin" },
    {
      label: "WhatsApp",
      href: `https://wa.me/${whatsappNumber}`,
      icon: "whatsapp",
    },
    {
      label: "Agency",
      href: "https://whyitworks.ai/",
      icon: "globe",
    },
  ] as SocialLink[],
  meta: {
    homeTitle: "Ecommerce CRO Consultant for DTC Brands | Saif Ali",
    homeDescription:
      "I help DTC brands turn ad clicks into customers — full-journey CRO across Meta ads, landing pages and Shopify. DM for a free teardown.",
    portfolioTitle: "Shopify & Ecommerce Portfolio | Saif Ali",
    portfolioDescription:
      "Selected Shopify builds, CRO-focused redesigns and ecommerce growth work by Saif Ali. See the builds and the thinking behind them.",
  },
} as const;
