/**
 * Lead qualification quiz — conditional branching by brand stage.
 * Edit options / next ids here; UI stays data-driven.
 */

export type QuizOption = {
  id: string;
  label: string;
  /** Next question id, or "contact" for the final screen */
  next: string | "contact";
};

export type QuizQuestion = {
  id: string;
  question: string;
  options: QuizOption[];
  /** Step within the 5-question path (1–5) */
  step: number;
};

export const QUIZ_TOTAL_STEPS = 5;

export const quizQuestions: Record<string, QuizQuestion> = {
  // ——— Routing ———
  stage: {
    id: "stage",
    question: "Where are you now?",
    step: 1,
    options: [
      { id: "starting", label: "Starting a brand", next: "start_ready" },
      { id: "live", label: "Brand is live", next: "live_problem" },
      { id: "scale", label: "Trying to scale", next: "scale_break" },
      { id: "systems", label: "Need better systems", next: "sys_fix" },
      { id: "agency", label: "I run an agency", next: "agency_need" },
    ],
  },

  // ——— PATH 1: Starting ———
  start_ready: {
    id: "start_ready",
    question: "What’s ready?",
    step: 2,
    options: [
      { id: "idea", label: "Just the idea", next: "start_idea_need" },
      { id: "product", label: "Product ready", next: "start_product_need" },
      { id: "branding", label: "Branding ready", next: "start_branding_next" },
      { id: "store", label: "Store ready", next: "start_store_missing" },
    ],
  },
  start_idea_need: {
    id: "start_idea_need",
    question: "What do you need?",
    step: 3,
    options: [
      { id: "product_dir", label: "Product direction", next: "start_goal" },
      { id: "branding", label: "Branding", next: "start_goal" },
      { id: "offer", label: "Offer", next: "start_goal" },
      { id: "launch", label: "Launch plan", next: "start_goal" },
      { id: "everything", label: "Everything", next: "start_goal" },
    ],
  },
  start_product_need: {
    id: "start_product_need",
    question: "What do you need?",
    step: 3,
    options: [
      { id: "branding", label: "Branding", next: "start_goal" },
      { id: "shopify", label: "Shopify", next: "start_goal" },
      { id: "offer", label: "Offer", next: "start_goal" },
      { id: "marketing", label: "Marketing", next: "start_goal" },
      { id: "everything", label: "Everything", next: "start_goal" },
    ],
  },
  start_branding_next: {
    id: "start_branding_next",
    question: "What’s next?",
    step: 3,
    options: [
      { id: "store", label: "Store", next: "start_goal" },
      { id: "launch", label: "Launch", next: "start_goal" },
      { id: "ads", label: "Ads", next: "start_goal" },
      { id: "content", label: "Content", next: "start_goal" },
      { id: "unsure", label: "Not sure", next: "start_goal" },
    ],
  },
  start_store_missing: {
    id: "start_store_missing",
    question: "What’s missing?",
    step: 3,
    options: [
      { id: "launch", label: "Launch plan", next: "start_goal" },
      { id: "ads", label: "Ads", next: "start_goal" },
      { id: "creatives", label: "Creatives", next: "start_goal" },
      { id: "cro", label: "CRO", next: "start_goal" },
      { id: "unsure", label: "Not sure", next: "start_goal" },
    ],
  },
  start_goal: {
    id: "start_goal",
    question: "What’s your goal?",
    step: 4,
    options: [
      { id: "launch", label: "Launch", next: "timing" },
      { id: "first_sales", label: "Get first sales", next: "timing" },
      { id: "properly", label: "Build it properly", next: "timing" },
      { id: "grow_fast", label: "Grow fast", next: "timing" },
    ],
  },

  // ——— PATH 2: Brand is live ———
  live_problem: {
    id: "live_problem",
    question: "What’s not working?",
    step: 2,
    options: [
      { id: "low_sales", label: "Low sales", next: "live_sales_weak" },
      { id: "low_traffic", label: "Low traffic", next: "live_traffic_source" },
      { id: "low_cv", label: "Low conversion", next: "live_drop" },
      { id: "ads", label: "Ads not working", next: "live_ads_issue" },
      { id: "unsure", label: "Not sure", next: "live_off" },
    ],
  },
  live_sales_weak: {
    id: "live_sales_weak",
    question: "What feels weakest?",
    step: 3,
    options: [
      { id: "traffic", label: "Traffic", next: "live_want" },
      { id: "offer", label: "Offer", next: "live_want" },
      { id: "website", label: "Website", next: "live_want" },
      { id: "ads", label: "Ads", next: "live_want" },
      { id: "unsure", label: "Not sure", next: "live_want" },
    ],
  },
  live_traffic_source: {
    id: "live_traffic_source",
    question: "How do you get traffic?",
    step: 3,
    options: [
      { id: "meta", label: "Meta Ads", next: "live_want" },
      { id: "google", label: "Google Ads", next: "live_want" },
      { id: "organic", label: "Organic", next: "live_want" },
      { id: "influencers", label: "Influencers", next: "live_want" },
      { id: "none", label: "Not running ads", next: "live_want" },
    ],
  },
  live_drop: {
    id: "live_drop",
    question: "Where do they drop?",
    step: 3,
    options: [
      { id: "pdp", label: "Product page", next: "live_want" },
      { id: "cart", label: "Cart", next: "live_want" },
      { id: "checkout", label: "Checkout", next: "live_want" },
      { id: "mobile", label: "Mobile", next: "live_want" },
      { id: "unsure", label: "Not sure", next: "live_want" },
    ],
  },
  live_ads_issue: {
    id: "live_ads_issue",
    question: "What goes wrong?",
    step: 3,
    options: [
      { id: "cpa", label: "High CPA", next: "live_want" },
      { id: "roas", label: "Low ROAS", next: "live_want" },
      { id: "creatives", label: "Weak creatives", next: "live_want" },
      { id: "consistency", label: "No consistency", next: "live_want" },
      { id: "unsure", label: "Not sure", next: "live_want" },
    ],
  },
  live_off: {
    id: "live_off",
    question: "What feels off?",
    step: 3,
    options: [
      { id: "website", label: "Website", next: "live_want" },
      { id: "ads", label: "Ads", next: "live_want" },
      { id: "offer", label: "Offer", next: "live_want" },
      { id: "creatives", label: "Creatives", next: "live_want" },
      { id: "everything", label: "Everything", next: "live_want" },
    ],
  },
  live_want: {
    id: "live_want",
    question: "What do you want?",
    step: 4,
    options: [
      { id: "sales", label: "More sales", next: "timing" },
      { id: "roas", label: "Better ROAS", next: "timing" },
      { id: "conversions", label: "More conversions", next: "timing" },
      { id: "creatives", label: "Better creatives", next: "timing" },
      { id: "everything", label: "Fix everything", next: "timing" },
    ],
  },

  // ——— PATH 3: Trying to scale ———
  scale_break: {
    id: "scale_break",
    question: "What breaks first?",
    step: 2,
    options: [
      { id: "cpa", label: "CPA rises", next: "scale_cpa_test" },
      { id: "roas", label: "ROAS drops", next: "scale_roas_where" },
      { id: "creatives", label: "Creatives die", next: "scale_creative_who" },
      { id: "conversion", label: "Conversion drops", next: "scale_cv_weak" },
      { id: "unsure", label: "Not sure", next: "scale_hard" },
    ],
  },
  scale_cpa_test: {
    id: "scale_cpa_test",
    question: "What are you testing?",
    step: 3,
    options: [
      { id: "creatives", label: "Creatives", next: "scale_goal" },
      { id: "audiences", label: "Audiences", next: "scale_goal" },
      { id: "offers", label: "Offers", next: "scale_goal" },
      { id: "landing", label: "Landing pages", next: "scale_goal" },
      { id: "little", label: "Not much", next: "scale_goal" },
    ],
  },
  scale_roas_where: {
    id: "scale_roas_where",
    question: "Where is the issue?",
    step: 3,
    options: [
      { id: "creative", label: "Creative", next: "scale_goal" },
      { id: "offer", label: "Offer", next: "scale_goal" },
      { id: "website", label: "Website", next: "scale_goal" },
      { id: "targeting", label: "Targeting", next: "scale_goal" },
      { id: "unsure", label: "Not sure", next: "scale_goal" },
    ],
  },
  scale_creative_who: {
    id: "scale_creative_who",
    question: "Who makes creatives?",
    step: 3,
    options: [
      { id: "team", label: "My team", next: "scale_goal" },
      { id: "agency", label: "Agency", next: "scale_goal" },
      { id: "freelancers", label: "Freelancers", next: "scale_goal" },
      { id: "ugc", label: "UGC creators", next: "scale_goal" },
      { id: "none", label: "No system", next: "scale_goal" },
    ],
  },
  scale_cv_weak: {
    id: "scale_cv_weak",
    question: "What feels weak?",
    step: 3,
    options: [
      { id: "pdp", label: "Product page", next: "scale_goal" },
      { id: "offer", label: "Offer", next: "scale_goal" },
      { id: "checkout", label: "Checkout", next: "scale_goal" },
      { id: "mobile", label: "Mobile", next: "scale_goal" },
      { id: "unsure", label: "Not sure", next: "scale_goal" },
    ],
  },
  scale_hard: {
    id: "scale_hard",
    question: "What feels hardest?",
    step: 3,
    options: [
      { id: "ads", label: "Ads", next: "scale_goal" },
      { id: "creatives", label: "Creatives", next: "scale_goal" },
      { id: "conversion", label: "Conversion", next: "scale_goal" },
      { id: "offer", label: "Offer", next: "scale_goal" },
      { id: "ops", label: "Operations", next: "scale_goal" },
    ],
  },
  scale_goal: {
    id: "scale_goal",
    question: "What’s the goal?",
    step: 4,
    options: [
      { id: "revenue", label: "Scale revenue", next: "timing" },
      { id: "cpa", label: "Lower CPA", next: "timing" },
      { id: "roas", label: "Improve ROAS", next: "timing" },
      { id: "system", label: "Build a system", next: "timing" },
      { id: "all", label: "All of these", next: "timing" },
    ],
  },

  // ——— PATH 4: Need better systems ———
  sys_fix: {
    id: "sys_fix",
    question: "What needs fixing?",
    step: 2,
    options: [
      { id: "creative", label: "Creative system", next: "sys_creative" },
      { id: "ads", label: "Paid ads", next: "sys_ads" },
      { id: "shopify", label: "Shopify", next: "sys_shopify" },
      { id: "cro", label: "CRO", next: "sys_cro" },
      { id: "ai", label: "AI workflows", next: "sys_ai" },
      { id: "everything", label: "Everything", next: "sys_everything" },
    ],
  },
  sys_creative: {
    id: "sys_creative",
    question: "What’s missing?",
    step: 3,
    options: [
      { id: "ideas", label: "Ideas", next: "sys_priority" },
      { id: "volume", label: "Volume", next: "sys_priority" },
      { id: "testing", label: "Testing", next: "sys_priority" },
      { id: "ugc", label: "UGC", next: "sys_priority" },
      { id: "process", label: "Process", next: "sys_priority" },
    ],
  },
  sys_ads: {
    id: "sys_ads",
    question: "What’s the issue?",
    step: 3,
    options: [
      { id: "cpa", label: "CPA", next: "sys_priority" },
      { id: "roas", label: "ROAS", next: "sys_priority" },
      { id: "scaling", label: "Scaling", next: "sys_priority" },
      { id: "tracking", label: "Tracking", next: "sys_priority" },
      { id: "unsure", label: "Not sure", next: "sys_priority" },
    ],
  },
  sys_shopify: {
    id: "sys_shopify",
    question: "What needs work?",
    step: 3,
    options: [
      { id: "design", label: "Design", next: "sys_priority" },
      { id: "speed", label: "Speed", next: "sys_priority" },
      { id: "conversion", label: "Conversion", next: "sys_priority" },
      { id: "pdp", label: "Product pages", next: "sys_priority" },
      { id: "rebuild", label: "Full rebuild", next: "sys_priority" },
    ],
  },
  sys_cro: {
    id: "sys_cro",
    question: "Where is the leak?",
    step: 3,
    options: [
      { id: "pdp", label: "Product page", next: "sys_priority" },
      { id: "cart", label: "Cart", next: "sys_priority" },
      { id: "checkout", label: "Checkout", next: "sys_priority" },
      { id: "mobile", label: "Mobile", next: "sys_priority" },
      { id: "unsure", label: "Not sure", next: "sys_priority" },
    ],
  },
  sys_ai: {
    id: "sys_ai",
    question: "Where is time lost?",
    step: 3,
    options: [
      { id: "research", label: "Research", next: "sys_priority" },
      { id: "creatives", label: "Creatives", next: "sys_priority" },
      { id: "content", label: "Content", next: "sys_priority" },
      { id: "reporting", label: "Reporting", next: "sys_priority" },
      { id: "ops", label: "Operations", next: "sys_priority" },
    ],
  },
  sys_everything: {
    id: "sys_everything",
    question: "What matters most?",
    step: 3,
    options: [
      { id: "growth", label: "Growth", next: "sys_priority" },
      { id: "efficiency", label: "Efficiency", next: "sys_priority" },
      { id: "profit", label: "Profit", next: "sys_priority" },
      { id: "scale", label: "Scale", next: "sys_priority" },
      { id: "unsure", label: "Not sure", next: "sys_priority" },
    ],
  },
  sys_priority: {
    id: "sys_priority",
    question: "What matters most?",
    step: 4,
    options: [
      { id: "time", label: "Save time", next: "timing" },
      { id: "scale", label: "Scale faster", next: "timing" },
      { id: "profit", label: "Improve profit", next: "timing" },
      { id: "output", label: "Better output", next: "timing" },
      { id: "systems", label: "Build systems", next: "timing" },
    ],
  },

  // ——— PATH 5: Agency ———
  agency_need: {
    id: "agency_need",
    question: "What do you need?",
    step: 2,
    options: [
      { id: "shopify", label: "Shopify", next: "agency_help" },
      { id: "cro", label: "CRO", next: "agency_help" },
      { id: "meta", label: "Meta Ads", next: "agency_help" },
      { id: "creatives", label: "Creatives", next: "agency_help" },
      { id: "ai", label: "AI workflows", next: "agency_help" },
    ],
  },
  agency_help: {
    id: "agency_help",
    question: "How can I help?",
    step: 3,
    options: [
      { id: "project", label: "One project", next: "agency_freq" },
      { id: "ongoing", label: "Ongoing support", next: "agency_freq" },
      { id: "wl", label: "White label", next: "agency_freq" },
      { id: "capacity", label: "Extra capacity", next: "agency_freq" },
      { id: "unsure", label: "Not sure", next: "agency_freq" },
    ],
  },
  agency_freq: {
    id: "agency_freq",
    question: "How often?",
    step: 4,
    options: [
      { id: "once", label: "One time", next: "agency_timing" },
      { id: "few", label: "Few projects", next: "agency_timing" },
      { id: "monthly", label: "Monthly", next: "agency_timing" },
      { id: "ongoing", label: "Ongoing", next: "agency_timing" },
    ],
  },
  agency_timing: {
    id: "agency_timing",
    question: "When do you need help?",
    step: 5,
    options: [
      { id: "now", label: "Now", next: "contact" },
      { id: "month", label: "This month", next: "contact" },
      { id: "next", label: "Next month", next: "contact" },
      { id: "explore", label: "Just exploring", next: "contact" },
    ],
  },

  // ——— Shared timing (paths 1–4) ———
  timing: {
    id: "timing",
    question: "When to start?",
    step: 5,
    options: [
      { id: "now", label: "Now", next: "contact" },
      { id: "month", label: "This month", next: "contact" },
      { id: "next", label: "Next month", next: "contact" },
      { id: "explore", label: "Just exploring", next: "contact" },
    ],
  },
};

export const QUIZ_START_ID = "stage";

export const quizContactTimes = [
  "Morning",
  "Afternoon",
  "Evening",
  "Anytime",
] as const;

export const quizContactMethods = [
  "WhatsApp",
  "Call",
  "Google Meet",
  "Email",
] as const;

export type QuizContactTime = (typeof quizContactTimes)[number];
export type QuizContactMethod = (typeof quizContactMethods)[number];

export type QuizSubmission = {
  stage: string;
  stageLabel: string;
  answers: { questionId: string; question: string; optionId: string; label: string }[];
  name: string;
  email: string;
  phone: string;
  bestTime: QuizContactTime;
  preferredContact: QuizContactMethod;
  submittedAt: string;
};

export function getOptionLabel(questionId: string, optionId: string): string {
  const q = quizQuestions[questionId];
  return q?.options.find((o) => o.id === optionId)?.label ?? optionId;
}
