import type { Metadata } from "next";
import Link from "next/link";
import { SharedFooter } from "@/components/SharedFooter";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Mobile CRO for Shopify: 9 Fixes That Recover Phone Sales | Saif Ali",
  description:
    "Most Shopify traffic is mobile — and most of it leaks on the phone. 9 mobile CRO fixes: sticky buy bar, tap targets, iOS zoom, express checkout.",
  alternates: {
    canonical: "https://www.saifali.site/blog/mobile-cro-shopify",
  },
  openGraph: {
    title: "Mobile CRO for Shopify: 9 Fixes That Recover Phone Sales | Saif Ali",
    description:
      "Most Shopify traffic is mobile — and most of it leaks on the phone. 9 mobile CRO fixes: sticky buy bar, tap targets, iOS zoom, express checkout.",
    url: "/blog/mobile-cro-shopify",
    type: "article",
    images: [
      {
        url: "/og-image.jpg",
        width: 2240,
        height: 1120,
        alt: "Saif Ali — Ecommerce Growth Consultant for DTC Brands",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile CRO for Shopify: 9 Fixes That Recover Phone Sales | Saif Ali",
    description:
      "Most Shopify traffic is mobile — and most of it leaks on the phone. 9 mobile CRO fixes: sticky buy bar, tap targets, iOS zoom, express checkout.",
    images: ["/og-image.jpg"],
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
  "@id": "https://www.saifali.site/blog/mobile-cro-shopify#article",
  headline: "Mobile CRO for Shopify: 9 Fixes That Recover Phone Sales",
  description:
    "Nine mobile-specific conversion fixes for Shopify stores — sticky buy bar, tap targets, iOS zoom behavior, pop-ups, express checkout, and the mobile form details that decide whether a phone visitor becomes a customer.",
  url: "https://www.saifali.site/blog/mobile-cro-shopify",
  datePublished: "2026-10-17",
  author: { "@id": "https://www.saifali.site/#person" },
  about: {
    "@type": "Thing",
    name: "Mobile conversion rate optimization for Shopify",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://www.saifali.site/blog/mobile-cro-shopify#breadcrumb",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.saifali.site/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Mobile CRO for Shopify",
    },
  ],
};

/** Rendered visibly below and mirrored in the FAQPage JSON-LD that follows */
const blogFaqs: { question: string; answer: string }[] = [
  {
    question: "Why is mobile conversion lower than desktop on Shopify?",
    answer:
      "Phones usually bring most of the traffic but convert worse, because the same page that works on a desktop asks more of a phone visitor: a smaller screen, a slower connection, thumb navigation, and forms that fight the keyboard. The gap is normally the mobile experience, not the traffic quality.",
  },
  {
    question: "What is a good mobile conversion rate for a Shopify store?",
    answer:
      "There is no universal benchmark worth chasing — the number that matters is your own mobile rate against your desktop rate, and your mobile trend over time. Stores I review tend to leak at the same mobile points: buy-button reachability, form friction, and pop-ups. Fix those before comparing yourself to anyone.",
  },
  {
    question: "Should I build a separate mobile site for my Shopify store?",
    answer:
      "No. Shopify themes are responsive, and every fix in this article works inside your existing theme. A separate mobile site doubles your maintenance and splits your pages for search, with no conversion benefit over a well-tuned responsive theme.",
  },
  {
    question: "Do I need a mobile app for better mobile conversion?",
    answer:
      "No. A fast, well-laid-out mobile web page beats most brand apps for first-time buyers — the phone visitor is deciding whether to trust you, not whether to install you. Apps help repeat buyers; they do nothing for the new visitor who leaves at the product page.",
  },
  {
    question: "Which mobile fix should I do first?",
    answer:
      "The sticky add-to-cart bar, 16px form text, and 44px tap targets — in that order. They touch every mobile visitor on every product page, they take minutes to check, and they fail silently: nobody emails you to say your size buttons are too small, they just leave.",
  },
  {
    question: "Can a CRO consultant fix mobile conversion without a redesign?",
    answer:
      "Yes. The fixes in this article are theme-setting and content changes inside your existing design — no new theme, no visual overhaul. That is exactly what the Shopify Conversion Fix Sprint does: find the mobile leaks and fix them where the store already is.",
  },
];

const blogFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.saifali.site/blog/mobile-cro-shopify#faq",
  mainEntity: blogFaqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
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
    title: "1. Add a sticky add-to-cart bar on mobile product pages",
    what: "A slim bar pinned to the bottom of the screen as the visitor scrolls, showing the product name, the price, and an add-to-cart button.",
    why: "Long product pages are good for selling — reviews, details, and guarantees all help. But once a visitor has scrolled past the main buy button and decided to buy, they should not have to scroll back up to do it. The sticky bar catches buying intent wherever it happens on the page.",
    check: "Open a product page on your phone and scroll halfway down. Can you buy without scrolling back up? If not, you are relying on the visitor\u2019s patience — and patience is the scarcest thing on a phone.",
  },
  {
    title: "2. Keep form text at 16px or larger",
    what: "Every text input — email, phone, address, discount code — set to at least 16px font size.",
    why: "On iPhones, Safari auto-zooms into any input smaller than 16px when the buyer taps it, and the page does not always zoom back out cleanly. The buyer loses their place in the form mid-checkout, which is exactly where you cannot afford confusion. It is a one-line theme fix for a real drop-off point.",
    check: "Tap an email or phone field on an iPhone. If the page zooms in and the layout jumps when you move to the next field, your inputs are under 16px.",
  },
  {
    title: "3. Make every tap target at least 44px",
    what: "Variant swatches, size buttons, quantity steppers, menu items, and footer links — all large enough to hit with a thumb.",
    why: "On a desktop, a misclick is a shrug. On a phone, repeatedly hitting the wrong size because the buttons are 28px wide feels like a broken site — and nobody emails you to say your size buttons are too small. They just leave. Small tap targets fail silently, which is why they survive so long.",
    check: "Try buying from your store using only your thumb. If you hit the wrong variant or have to zoom to tap a button, the targets are too small.",
  },
  {
    title: "4. Don\u2019t let pop-ups trap phone visitors",
    what: "Email pop-ups that appear seconds after arrival, take over the full phone screen, and have a close button that is tiny, low-contrast, or missing.",
    why: "On a desktop, a pop-up is an interruption. On a phone, it is the entire screen — and when the visitor cannot find the way out, they close the tab, not the pop-up. You traded a maybe-subscriber for a definitely-lost buyer.",
    check: "Visit your store on your phone and wait ten seconds. If a pop-up covers everything and the close button is hard to find, delay it, make the close obvious, and never show it to returning visitors.",
  },
  {
    title: "5. Give mobile buyers enough images — with zoom that works",
    what: "Several photos of the actual product: the product alone, the product in use, close-ups of details and materials, and a sense of scale — with pinch-zoom that actually works on a phone.",
    why: "Online buyers cannot touch the product, so images do the job of the in-store pickup — and on a phone the screen is small, so every image has to earn its place. One hero shot leaves questions unanswered, and a zoom that opens a broken lightbox is worse than no zoom at all.",
    check: "Can a phone buyer see the details, the scale, and the product in context without leaving the page? If you have fewer than four images or zoom misbehaves, that is a gap worth closing.",
  },
  {
    title: "6. Offer express checkout on mobile",
    what: "One-tap payment buttons — Apple Pay, Shop Pay, Google Pay — shown at the cart or the start of checkout, before the manual card form.",
    why: "Typing a sixteen-digit card number on a phone keyboard is the highest-friction moment in the whole journey. Express wallets remove most of it: the buyer authenticates with a thumb and the order is done. If mobile buyers must type everything, you are filtering for only the most patient ones.",
    check: "Start checkout on your phone. Is there an express option before the card form? If the first thing a phone buyer sees is empty card fields, add the wallets.",
  },
  {
    title: "7. Use the right keyboard for every field",
    what: "The telephone keyboard for phone numbers, the email keyboard for email addresses, the numeric keyboard for quantities and zip codes — plus autocomplete attributes so the browser can fill what it knows.",
    why: "The wrong keyboard turns a three-second field into a fifteen-second chore: a full QWERTY layout for a phone number means hunting for digits one at a time. On a phone, every unnecessary second in a form is a reason to abandon it.",
    check: "Tap each checkout field on your phone. If a phone-number field brings up letters, or nothing auto-fills that the browser obviously knows, the field types are wrong.",
  },
  {
    title: "8. Lighten the page for mobile connections",
    what: "Hero videos, oversized images, and app scripts that load fine on office wifi — but that a phone on a slow connection has to chew through before the buy button appears.",
    why: "A meaningful share of mobile shopping happens on slow connections: commutes, rural areas, throttled data. A product page that takes eight seconds to become usable on 4G loses the buyer before they ever see the product. The desktop experience told you nothing about this.",
    check: "Load your product page on your phone with wifi off. If the buy button takes many seconds to appear, compress the media and defer the scripts that are not needed for the first screen.",
  },
  {
    title: "9. Check for horizontal scrolling and sticky elements that cover the buy button",
    what: "Content wider than the phone screen — wide tables, unscaled images, embedded widgets — plus sticky headers, chat bubbles, and app banners that sit on top of the add-to-cart button.",
    why: "Sideways scrolling on a phone feels broken, full stop. And a chat widget parked on top of the buy button literally blocks the sale — the visitor can see the button but cannot tap it. Both are embarrassingly common on Shopify stores with several apps installed.",
    check: "Scroll a product page on your phone. Does anything slide sideways? Is the buy button fully tappable with every widget visible? Fix the overlap before you fix anything else on this list.",
  },
];

export default function BlogMobileCroPage() {
  return (
    <main className="saif-portfolio min-h-screen px-5 pb-28 pt-10 md:px-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogFaqSchema) }}
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
          <nav
            aria-label="Breadcrumb"
            className="text-sm text-[var(--text-secondary)]"
          >
            <Link
              href="/"
              className="text-[var(--accent)] underline underline-offset-4"
            >
              Home
            </Link>
            <span aria-hidden> / </span>
            <span>Blog</span>
            <span aria-hidden> / </span>
            <span>Mobile CRO for Shopify</span>
          </nav>
          <h1 className="font-clash text-[clamp(2rem,5vw,3.35rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-[var(--text)]">
            Mobile CRO for Shopify:{" "}
            <em className="not-italic accent" style={serifItalic}>
              9 Fixes That Recover
            </em>{" "}
            Phone Sales
          </h1>
          <p className="mt-3 text-sm text-[var(--text-muted)]">
            By Saif Ali · Published 17 October 2026
          </p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">
            <span className={leadClass}>
              Most of your traffic is on a phone. Most of your lost sales are
              too.
            </span>
          </p>
          <p className={bodyClass + " max-w-2xl"}>
            On nearly every Shopify store I review, mobile brings the majority
            of visitors and converts at a fraction of desktop. The cause is
            rarely the offer or the product — it is the phone experience
            itself: the same page that works fine on a laptop asks more of a
            phone visitor at every step. Smaller screen, slower connection,
            thumb navigation, forms that fight the keyboard. This article is
            nine of those leaks, written so you can check each one on your
            own phone in a few minutes.
          </p>
          <p className={bodyClass + " max-w-2xl"}>
            Same honest note as the{" "}
            <Link
              href="/blog/shopify-conversion-rate-optimization"
              className="text-[var(--accent)] underline underline-offset-4"
            >
              13 high-impact fixes guide
            </Link>
            : I don&rsquo;t have client before-and-after numbers to show you
            yet, and I&rsquo;d rather say that than invent some. What I can
            give you is the pattern — the same mobile issues showing up
            store after store. The structured version of that pattern is the{" "}
            <Link
              href="/resources/shopify-conversion-framework"
              className="text-[var(--accent)] underline underline-offset-4"
            >
              13-area Shopify conversion framework
            </Link>
            .
          </p>
          <p className={bodyClass + " max-w-2xl"}>
            Work the list on your actual phone, not your laptop — half of
            these are invisible on desktop.
          </p>
        </section>

        {/* The 9 fixes */}
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
            If the whole list feels like a lot, start here: fixes 1, 2, and
            3. The sticky buy bar, 16px form text, and 44px tap targets
            touch every mobile visitor on every product page — and they
            fail silently, so they are the last things store owners think
            to check. Those three alone close the most common reasons a
            store with strong mobile traffic has weak mobile sales.
          </p>
          <p className={bodyClass}>
            Then work down the list in the order a phone buyer meets each
            problem: product page first, then cart, then checkout.
          </p>
        </section>

        {/* FAQs */}
        <section id="faq">
          <h2 className={h2Class}>Questions founders ask about mobile CRO</h2>
          <div className="mt-6 space-y-8">
            {blogFaqs.map((item) => (
              <div key={item.question}>
                <h3 className="font-general text-lg font-medium text-[var(--text)]">
                  {item.question}
                </h3>
                <p className={bodyClass}>{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Author bio */}
        <p className={bodyClass}>
          <a
            href="https://www.saifali.site/"
            className="text-[var(--accent)] underline underline-offset-4"
          >
            Saif Ali
          </a>{" "}
          is an ecommerce growth consultant for DTC brands, doing
          full-journey CRO across Meta ads, landing pages and Shopify.
        </p>

        {/* Closing CTA */}
        <section id="book" className="mt-14 md:mt-20">
          <h2 className="font-general text-[clamp(1.6rem,3.5vw,2.4rem)] font-medium leading-tight tracking-[-1px] text-[var(--text)]">
            Want a second pair of eyes on your store?
          </h2>
          <p className={bodyClass}>
            If you&rsquo;d like, I&rsquo;ll review your store&rsquo;s
            buying journey on a phone myself and tell you honestly where
            the mobile leaks are. No pressure either way. If the list above
            is enough to get you started, that&rsquo;s a win too. If
            you&rsquo;d rather have a specialist own the full journey,
            here&rsquo;s{" "}
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
