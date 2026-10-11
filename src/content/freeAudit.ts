export const AUDIT_TOPICS = [
  "Shopify Store",
  "Product Page",
  "Landing Page",
  "Conversion Rate",
  "Meta Ads",
  "Ad Creatives",
  "Offer",
  "Checkout",
  "Tracking",
  "Customer Journey",
  "Ecommerce Growth",
  "Something Else",
] as const;

export const HELP_OPTIONS = [
  "Store",
  "Ads",
  "Creatives",
  "CRO",
  "Landing Page",
  "Offer",
  "Tracking",
  "Checkout",
  "Growth",
  "Not Sure",
] as const;

export type HelpOption = (typeof HELP_OPTIONS)[number];
export type AuditTopic = (typeof AUDIT_TOPICS)[number];

/** Map browse topics → form help option */
export const TOPIC_TO_HELP: Partial<Record<AuditTopic, HelpOption>> = {
  "Shopify Store": "Store",
  "Product Page": "Store",
  "Landing Page": "Landing Page",
  "Conversion Rate": "CRO",
  "Meta Ads": "Ads",
  "Ad Creatives": "Creatives",
  Offer: "Offer",
  Checkout: "Checkout",
  Tracking: "Tracking",
  "Customer Journey": "Growth",
  "Ecommerce Growth": "Growth",
  "Something Else": "Not Sure",
};

export const PROCESS_STEPS = [
  {
    index: "01",
    title: "You send the problem",
    body: "Tell me what is not working and share anything relevant.",
  },
  {
    index: "02",
    title: "I find the issue",
    body: "I review the store, ads, funnel, creatives, or whatever is causing the problem.",
  },
  {
    index: "03",
    title: "You get the fix",
    body: "I explain what is wrong, why it is happening, and what should be changed.",
  },
] as const;
