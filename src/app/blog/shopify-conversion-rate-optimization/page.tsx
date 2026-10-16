import type { Metadata } from "next";
import Link from "next/link";
import { SharedFooter } from "@/components/SharedFooter";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title:
    "Shopify Conversion Rate Optimization: 13 High Impact Fixes That Increase Sales | Saif Ali",
  description:
    "13 high-impact Shopify CRO fixes from real store reviews — shipping clarity, visible reviews, mobile buy path, cart and checkout. What each leak is, why it costs sales, and how to check your store.",
  alternates: {
    canonical:
      "https://www.saifali.site/blog/shopify-conversion-rate-optimization",
  },
};

const serifItalic = {
  fontFamily: '"Instrument Serif", "Noto Serif", Georgia, serif',
  fontStyle: "italic" as const,
  fontWeight: 400,
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id":
    "https://www.saifali.site/blog/shopify-conversion-rate-optimization#article",
  headline:
    "Shopify Conversion Rate Optimization: 13 High Impact Fixes That Increase Sales",
  description:
    "13 high-impact Shopify CRO fixes from real store reviews — shipping clarity, visible reviews, mobile buy path, cart and checkout. What each leak is, why it costs sales, and how to check your store.",
  url: "https://www.saifali.site/blog/shopify-conversion-rate-optimization",
  datePublished: "2026-10-15",
  author: { "@id": "https://www.saifali.site/#person" },
  about: {
    "@type": "Thing",
    name: "Shopify conversion rate optimization",
  },
};

const ctaButtonClass =
  "inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-7 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90";

const h2Class =
  "font-general mt-14 md:mt-20 text-[clamp(1.6rem,3.5vw,2.4rem)] font-medium leading-tight tracking-[-1px] text-[var(--text)]";
const bodyClass =
  "mt-4 text-base leading-relaxed text-[var(--text-secondary)] md:text-lg";
const leadClass = "font-medium text-[var(--text)]";

const fixes: { title: string; what: string; why: string; check: string }[] = [
  {
    title: "1. Put shipping cost and delivery time next to the buy button",
    what: "The actual shipping price and how long delivery takes, shown within sight of the add-to-cart button — not hidden behind a “calculated at checkout” line or buried in a footer policy page.",
    why: "Shipping is the question almost every first-time buyer has, and it’s the one most stores answer last. When the cost only appears at checkout, the buyer does the mental math with the worst-case number — or just leaves. Stating it early removes the unknown.",
    check: "Open your best-selling product page. Without scrolling past the buy button, can you see what shipping costs and when the order arrives? If the answer is “calculated at checkout,” that’s the leak.",
  },
  {
    title: "2. Summarize your returns policy next to the buy button",
    what: "One plain line near the buy button — the return window and who pays for return shipping. Not the full policy; just the answer.",
    why: "Nobody reads a returns page before buying. They glance at the product page and decide whether the purchase feels safe. A visible return window lowers the perceived risk of the order. A policy hidden in a collapsed accordion or footer link does nothing for the person about to click buy.",
    check: "Same test as shipping. Near the buy button, is there any mention of returns? If a buyer has to hunt for it, assume most won’t.",
  },
  {
    title: "3. Show star ratings and review count near the product title",
    what: "The star rating and the number of reviews, placed right under or beside the product title — not three sections down the page.",
    why: "Reviews are the fastest trust signal on a product page, but only if they’re seen before the buying decision. A product with 400 reviews and no stars near the title reads the same as a product with zero reviews to a visitor who never scrolls.",
    check: "Open a product page on your phone. Is the rating visible without scrolling? If your reviews live in a tab or a section far below, move a summary up.",
  },
  {
    title: "4. Match the landing page to the ad that sent the click",
    what: "The headline and first screen of your landing page repeat the promise the ad made — same words, same offer, same product.",
    why: "When someone clicks an ad for free shipping over $50 and lands on a page that never mentions shipping, they wonder if they clicked the wrong thing. That confusion costs you the click you just paid for. Message match is the cheapest conversion fix in paid traffic because it touches every click the page receives.",
    check: "Open your top ad, read its first line, then open the landing page it points to. Does the page’s hero say the same thing? If the ad and the page look like they’re selling different things, fix the page first.",
  },
  {
    title: "5. Frame the offer in the first screen",
    what: "Within the first view of the product page, the visitor can answer three questions: what is this, what does it cost, and why should I care right now.",
    why: "Most visitors decide in seconds whether a page deserves more of their attention. If the value is clear immediately — the product, the price, the reason to buy — they keep reading. If the first screen is a brand statement or a lifestyle image with no product context, they bounce before they ever reach your selling points.",
    check: "Show your product page to someone for five seconds, then hide it. Can they tell you what the product is and what it costs? If not, the first screen isn’t doing its job.",
  },
  {
    title: "6. Make the mobile path to the buy button short",
    what: "On a phone, the distance from the top of the product page to the add-to-cart button is short — the buyer doesn’t scroll through galleries, brand stories, and feature lists before they can buy.",
    why: "Most of your traffic arrives on a phone, and phone visitors scroll less patiently than desktop visitors. Every full screen of content between arrival and the buy button is a chance to lose them. The buy button should be reachable within one or two scrolls.",
    check: "Open your product page on your phone and count the screens before the add-to-cart button appears. If it’s more than two, tighten the layout above it.",
  },
  {
    title: "7. Add a sticky add-to-cart bar on mobile product pages",
    what: "A slim bar that stays visible at the bottom (or top) of the screen as the visitor scrolls, with the product name, price, and an add-to-cart button.",
    why: "Long product pages are good for selling — reviews, details, guarantees all help. But once a visitor has scrolled past the main buy button and decided to buy, they shouldn’t have to scroll back up to do it. The sticky bar catches the buying intent wherever it happens on the page.",
    check: "Scroll halfway down a product page on your phone. Can you still buy without scrolling back up? If not, you’re relying on the visitor’s patience.",
  },
  {
    title: "8. Show stock status on the product page",
    what: "A simple indicator near the buy button — in stock, low stock, or out of stock — that’s accurate.",
    why: "Two reasons. First, it answers a real question: can I actually get this? Second, honest scarcity (“only 3 left”) tells the visitor there’s a reason not to wait. But it has to be true — fake stock counters destroy trust the moment a buyer notices.",
    check: "Look at your product pages. Is there any stock information at all? If a product sells out, does the page say so clearly instead of letting someone try to buy?",
  },
  {
    title: "9. Keep variant selection on one page",
    what: "Color, size, and other options selectable on the same product page — not split across separate product pages per color.",
    why: "When each color is its own page, the visitor loses everything when they switch: their scroll position, the reviews they were reading, and sometimes even the size they selected. Each variant page is also a weaker page for search. One product, one page, with a variant picker.",
    check: "If you sell variants, click between two colors. Did the page reload to a different URL and reset your position? If yes, consolidate.",
  },
  {
    title: "10. Use real product images — and enough of them",
    what: "Multiple photos of the actual product: the product alone, the product in use, close-ups of details and materials, and a sense of scale. Zoom that works.",
    why: "Online buyers can’t touch the product, so images do the job of the in-store pickup. One hero shot leaves questions unanswered — what does the texture look like, how big is it really, what’s in the box? Unanswered questions become reasons not to buy.",
    check: "Count the images on your best-seller. Can a buyer see the details, the scale, and the product in context? If you have fewer than four images or no zoom, that’s a gap worth closing.",
  },
  {
    title: "11. Fix the cart drawer before the customer reaches checkout",
    what: "A cart that shows the product clearly, the real subtotal, the shipping expectation, and a single obvious checkout button — with no surprises.",
    why: "The cart is the last step before money changes hands, and it’s where small confusions become abandoned orders. An empty cart showing an active checkout button, a subtotal that doesn’t match expectations, or shipping appearing for the first time here — each one gives the buyer a reason to stop.",
    check: "Add a product, open the cart, and read it like a first-time buyer. Is the subtotal clear? Is there a checkout button when the cart is empty (there shouldn’t be a working one)? Anything confusing here costs you the sale at the worst possible moment.",
  },
  {
    title: "12. Put trust signals at checkout, not just on the homepage",
    what: "Near the payment step: accepted payment methods, a money-back or satisfaction guarantee restated briefly, and contact information.",
    why: "Checkout is where anxiety peaks — the buyer is about to enter card details on your site. Trust badges on the homepage don’t help here because the buyer isn’t looking at the homepage. Reassurance has to be present at the exact moment of hesitation.",
    check: "Go through your checkout up to the payment step. Is there anything on that screen that tells a nervous buyer they’re safe? If the payment step is bare, add the basics.",
  },
  {
    title: "13. Offer guest checkout — and say so",
    what: "The option to complete a purchase without creating an account, stated clearly at the start of checkout.",
    why: "Forcing account creation is one of the most common checkout killers. Many buyers will complete a purchase as a guest but won’t create an account to do it. If you offer guest checkout but don’t say so until the end, hesitant buyers may leave before they find out.",
    check: "Start your checkout. Is guest checkout offered, and is it visible before the buyer has to make the choice? If account creation is the only path, you’re filtering out buyers for no revenue benefit.",
  },
];

export default function BlogCroFixesPage() {
  return (
    <main className="saif-portfolio min-h-screen px-5 pb-28 pt-10 md:px-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="mx-auto w-full max-w-4xl">
        {/* Breadcrumb / back — mirrors the sibling pages' pattern */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <p className="font-hand text-base text-[var(--text-secondary)]">
            / Blog
          </p>
          <Link
            href="/"
            className="rounded-full bg-[#e0e0e0] px-5 py-2.5 text-sm font-medium text-[var(--text)] transition-colors hover:bg-[#d4d4d4]"
          >
            Back
          </Link>
        </div>

        {/* Hero */}
        <section className="mt-6">
          <h1 className="font-clash text-[clamp(2rem,5vw,3.35rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-[var(--text)]">
            Shopify Conversion Rate
            <br />
            Optimization:{" "}
            <em className="not-italic accent" style={serifItalic}>
              13 High Impact Fixes
            </em>{" "}
            That Increase Sales
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">
            <span className={leadClass}>
              Most Shopify stores don&rsquo;t have a traffic problem. They
              have a leak problem.
            </span>
          </p>
          <p className={bodyClass + " max-w-2xl"}>
            Visitors arrive, look around, and leave without buying — for
            reasons that are usually visible on the page in under a minute.
            This list is 13 of those leaks. Each one comes from independent
            store reviews I&rsquo;ve done — real product pages, real buy
            boxes, real carts. For each fix you get three things: what it
            is, why it matters, and exactly how to check your own store.
          </p>
          <p className={bodyClass + " max-w-2xl"}>
            Honest note up front: I don&rsquo;t have client before-and-after
            numbers to show you yet, and I&rsquo;d rather say that than
            invent some. What I can give you is the pattern — the same
            issues showing up store after store. The structured version of
            that pattern is the{" "}
            <Link
              href="/resources/shopify-conversion-framework"
              className="text-[var(--accent)] underline underline-offset-4"
            >
              13-area Shopify conversion framework
            </Link>
            ; this post is the most common fixes it surfaces, written so
            you can run them yourself.
          </p>
          <p className={bodyClass + " max-w-2xl"}>
            Work through the list in order of traffic: fix what the most
            visitors see first (your product pages), then the cart, then
            checkout.
          </p>
        </section>

        {/* The 13 fixes */}
        <section id="the-fixes">
          {fixes.map((fix) => (
            <div key={fix.title}>
              <h2 className={h2Class}>{fix.title}</h2>
              <p className={bodyClass}>
                <span className={leadClass}>What it is:</span> {fix.what}
              </p>
              <p className={bodyClass}>
                <span className={leadClass}>Why it matters:</span> {fix.why}
              </p>
              <p className={bodyClass}>
                <span className={leadClass}>How to check your store:</span>{" "}
                {fix.check}
              </p>
            </div>
          ))}
        </section>

        {/* What to fix first */}
        <section id="what-first" className="mt-14 md:mt-20">
          <h2 className="font-general text-[clamp(1.6rem,3.5vw,2.4rem)] font-medium leading-tight tracking-[-1px] text-[var(--text)]">
            What to fix first
          </h2>
          <p className={bodyClass}>
            If the whole list feels like a lot, start here: fixes 1, 3,
            and 6. Shipping clarity, visible reviews, and a short mobile
            path to the buy button touch nearly every visitor your product
            pages get. Those three alone cover the most common reasons a
            store with good traffic has weak sales.
          </p>
          <p className={bodyClass}>
            Then work down the list in traffic order — product pages first,
            then cart, then checkout.
          </p>
        </section>

        {/* Closing CTA */}
        <section id="book" className="mt-14 md:mt-20">
          <h2 className="font-general text-[clamp(1.6rem,3.5vw,2.4rem)] font-medium leading-tight tracking-[-1px] text-[var(--text)]">
            Want a second pair of eyes on your store?
          </h2>
          <p className={bodyClass}>
            If you&rsquo;d like, I&rsquo;ll review your store&rsquo;s
            buying journey myself and tell you honestly where the leaks
            are. No pressure either way. If the list above is enough to get
            you started, that&rsquo;s a win too. If you&rsquo;d rather
            have a specialist own the full journey, here&rsquo;s{" "}
            <Link
              href="/shopify-cro-consultant"
              className="text-[var(--accent)] underline underline-offset-4"
            >
              how I work as a Shopify CRO consultant
            </Link>
            .
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/book" className={ctaButtonClass}>
              Book a fit call
            </Link>
            <Link
              href="/free-audit"
              className="rounded-full bg-[#e0e0e0] px-5 py-2.5 text-sm font-medium text-[var(--text)] transition-colors hover:bg-[#d4d4d4]"
            >
              Get a free audit
            </Link>
          </div>
          <p className={bodyClass}>
            Prefer email?{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-sm font-medium text-[var(--accent)] underline underline-offset-4"
            >
              {site.email}
            </a>
          </p>
        </section>
      </div>

      <SharedFooter />
    </main>
  );
}

