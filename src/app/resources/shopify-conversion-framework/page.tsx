import type { Metadata } from "next";
import Link from "next/link";
import { SharedFooter } from "@/components/SharedFooter";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "The 13-Area Shopify Conversion Framework | Saif Ali",
  description:
    "The open 13-area review I run on every Shopify store — homepage to checkout to ad consistency. What each area covers and what good looks like.",
  alternates: {
    canonical: "https://www.saifali.site/resources/shopify-conversion-framework",
  },
  openGraph: {
    title: "The 13-Area Shopify Conversion Framework | Saif Ali",
    description:
      "The open 13-area review I run on every Shopify store — homepage to checkout to ad consistency. What each area covers and what good looks like.",
    url: "/resources/shopify-conversion-framework",
    type: "website",
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
    title: "The 13-Area Shopify Conversion Framework | Saif Ali",
    description:
      "The open 13-area review I run on every Shopify store — homepage to checkout to ad consistency. What each area covers and what good looks like.",
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
  "@id": "https://www.saifali.site/resources/shopify-conversion-framework#article",
  headline: "The 13-Area Shopify Conversion Framework",
  description:
    "The open 13-area review behind every Shopify teardown: homepage to checkout to ad consistency. What each area covers, what good looks like, and how findings get ranked.",
  url: "https://www.saifali.site/resources/shopify-conversion-framework",
  datePublished: "2026-10-14",
  author: { "@id": "https://www.saifali.site/#person" },
  about: {
    "@type": "Thing",
    name: "Shopify conversion rate optimization",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.saifali.site/resources/shopify-conversion-framework#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the 13-area Shopify conversion framework?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It's the structured review I run on every Shopify store: 13 areas from the ad click to checkout — homepage, navigation, collections, product page messaging, product images and video, pricing and offer, reviews and trust, delivery and returns, variants and purchase controls, mobile experience, cart, accessible checkout, and ads-to-landing-page consistency. Every area is explicitly labelled as reviewed with findings, reviewed with no meaningful issue, not accessible, or not assessed, so nothing is silently skipped.",
      },
    },
    {
      "@type": "Question",
      name: "Can I run this framework on my own store?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — that's why it's published. Walk your store in buyer order: land the way your ad traffic lands, open your best-selling product page, add to cart, and start checkout. For each of the 13 areas, write down the one thing a first-time buyer can't find or can't trust. The value isn't the list; it's the honest labelling — saying plainly which areas are clean stops you fixing what isn't broken.",
      },
    },
    {
      "@type": "Question",
      name: "How is the framework different from a CRO audit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The framework is the lens; an audit is the lens pointed at your store. A CRO audit applies these 13 areas to one storefront and ranks the findings by what they cost you. My ecommerce UX audit is the framework as a report; the Conversion Fix Sprint is the framework plus the highest-impact fixes implemented in your theme within seven days.",
      },
    },
    {
      "@type": "Question",
      name: "Do all 13 areas matter for every store?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No — and that's the point of the honest labelling. Most stores lose sales in three to five areas and are genuinely fine in the rest. The framework forces you to name the clean areas too: reviewed with no meaningful issue. Without that discipline, every audit becomes a 40-item to-do list and the three things that actually cost money get buried.",
      },
    },
    {
      "@type": "Question",
      name: "Does the framework work for stores outside Shopify?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Partially. The 13 areas describe a buying journey, not a platform — product pages, trust, checkout friction exist everywhere. But the specifics assume Shopify: its theme structure, its checkout constraints, and the apps and analytics access a Shopify store gives me. On other platforms the lens still works; the fix list will differ.",
      },
    },
    {
      "@type": "Question",
      name: "How do you rank which finding to fix first?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "By cost: traffic times friction. A buy-box problem on your best-selling product page outranks a homepage nicety every time, because that's where your paid traffic actually decides. Findings get ranked by how many buyers hit them and how hard each one makes the yes — then the top of the list gets fixed first.",
      },
    },
    {
      "@type": "Question",
      name: "Can I cite or reference this framework?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Link to this page with attribution to Saif Ali. If you publish your own teardown using it, the honest-labelling rule travels with it: every area gets a status — reviewed with findings, reviewed with no meaningful issue, not accessible, or not assessed.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to review a store with the 13-area framework?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In the Conversion Fix Sprint I run the full 13-area review and implement the highest-impact fixes in the theme within seven days. Doing it yourself is slower but workable: walk the store in buyer order, give each area group — discovery, product page, offer and trust, checkout — a focused block of time, and rank your findings by traffic times friction before fixing anything.",
      },
    },
    {
      "@type": "Question",
      name: "Which of the 13 areas usually costs stores the most?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No single area wins for every store — but the costliest gaps usually sit in areas 4 through 9: the product page and buy box, where paid traffic actually decides. Missing delivery costs, missing reviews near the price, or a broken variant selector ends the session quietly. Homepage tweaks get debated endlessly; a silent buy-box problem gets the money. Rank by traffic times friction, not by area number.",
      },
    },
  ],
};

const ctaButtonClass =
  "inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-7 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90";

const h2Class =
  "font-general text-[clamp(1.6rem,3.5vw,2.4rem)] font-medium leading-tight tracking-[-1px] text-[var(--text)]";
const h3Class =
  "font-general mt-8 text-lg font-medium text-[var(--text)]";
const bodyClass = "mt-4 text-base leading-relaxed text-[var(--text-secondary)] md:text-lg";

function CtaRow({ label = "Book a fit call" }: { label?: string }) {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-4">
      <Link
        href="/book"
        className={ctaButtonClass}
      >
        {label}
      </Link>
      <Link
        href="/portfolio"
        className="rounded-full bg-[#e0e0e0] px-5 py-2.5 text-sm font-medium text-[var(--text)] transition-colors hover:bg-[#d4d4d4]"
      >
        See the work
      </Link>
    </div>
  );
}

const areas: { name: string; body: string }[] = [
  {
    name: "1. Homepage",
    body: "What the review covers: whether a first-time visitor can answer three questions in seconds — what you sell, who it's for, and why they should trust you. What good looks like: the hero states the offer in plain words, the path to product is one obvious click, and social proof appears before the fold ends. The common leak: a homepage built as a brand billboard — beautiful, slow, and with no clear next step for the buyer who just clicked an ad.",
  },
  {
    name: "2. Navigation",
    body: "What the review covers: whether a buyer can reach any product in two clicks without thinking. What good looks like: labels that name the thing being sold, a search box that works, and no dead ends. The common leak: clever category names that hide the catalog — the buyer came for a candle and the nav offers 'Ambience'.",
  },
  {
    name: "3. Collections",
    body: "What the review covers: whether collection pages sell the category or just grid products. What good looks like: a one-line reason this collection exists, merchandising that puts the best first, and filters that match how buyers actually choose (size, scent, price — not internal SKUs). The common leak: fifty products in default sort order with no guidance at all.",
  },
  {
    name: "4. Product page messaging",
    body: "What the review covers: whether the product page answers what it is, who it's for, and why this one — in the buyer's words, not the brand's. What good looks like: the first screen names the outcome, the details below handle objections in order of importance. The common leak: a feature list with no buyer language — dimensions and materials where the buyer needed a reason.",
  },
  {
    name: "5. Product images and video",
    body: "What the review covers: whether a buyer can see the product the way they'd hold it. What good looks like: five or more images covering scale, texture, use, and packaging — plus short video where motion answers questions. The common leak: two flat studio shots and nothing that shows the product in a real setting.",
  },
  {
    name: "6. Pricing and offer",
    body: "What the review covers: whether the price reads as obviously worth it at a glance. What good looks like: the value is anchored — bundles, compare pricing that's verifiable, or a threshold the buyer can see ('free shipping over $80'). The common leak: a price with no anchor and a sale badge with no verifiable original price.",
  },
  {
    name: "7. Reviews and trust",
    body: "What the review covers: whether proof appears where the decision happens. What good looks like: a star rating near the product title and real review content — photos, specifics — within sight of the buy button. The common leak: reviews exist but live far below the fold, or testimonials sit in a carousel the buyer never reaches.",
  },
  {
    name: "8. Delivery and returns",
    body: "What the review covers: whether the buyer can see shipping cost, delivery timing, and the return terms without leaving the product page. What good looks like: the actual cost and arrival window stated near the buy button, and the return window summarized in one line. The common leak: 'calculated at checkout' — the buyer does the mental math with the worst-case number, or just leaves.",
  },
  {
    name: "9. Variants and purchase controls",
    body: "What the review covers: whether choosing size, color, or quantity is frictionless — and whether the buyer knows what's in stock. What good looks like: selectors that keep context, a quantity control, and an honest stock indicator. The common leak: no quantity selector, no stock signal, and color options that behave like separate products.",
  },
  {
    name: "10. Mobile experience",
    body: "What the review covers: whether the whole journey works one-handed on a phone — where most ad traffic lands. What good looks like: a buy button reachable by thumb, text readable without pinching, and no horizontal scroll anywhere on the path to purchase. The common leak: a desktop-first theme where the buy button sits below three screens of content on mobile.",
  },
  {
    name: "11. Cart",
    body: "What the review covers: whether the cart confirms the choice and keeps momentum — without surprises. What good looks like: the product, variant, and price are exactly what the buyer picked; shipping progress is visible; the checkout button means it. The common leak: a cart that contradicts the product page, or an empty cart still offering an active checkout button.",
  },
  {
    name: "12. Accessible checkout",
    body: "What the review covers: whether a guest can finish buying with minimum friction. What good looks like: guest checkout by default, the fewest fields that still fulfill the order, and no forced account creation before payment. The common leak: mandatory registration, or surprise fees appearing only at the final step. Note: in independent reviews this area is usually not assessed — no test purchase is made on stores I don't work with.",
  },
  {
    name: "13. Ads and landing page consistency",
    body: "What the review covers: whether the page your ad traffic lands on matches the ad's promise. What good looks like: the headline, offer, and product on the landing page are the ones the ad sold — the buyer never has to re-orient. The common leak: profitable ads feeding a generic page — the click was earned, then the message changes and the buyer bounces.",
  },
];

export default function ConversionFrameworkPage() {
  return (
    <main className="saif-portfolio min-h-screen px-5 pb-28 pt-10 md:px-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto w-full max-w-4xl">
        {/* Breadcrumb / back — mirrors the sibling pages' pattern */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <p className="font-hand text-base text-[var(--text-secondary)]">
            / Resources
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
            The 13-Area
            <br />
            <em className="not-italic accent" style={serifItalic}>
              Shopify Conversion
            </em>{" "}
            Framework
          </h1>
          <p className="mt-3 text-sm text-[var(--text-muted)]">
            By Saif Ali · Published 14 October 2026
          </p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">
            <span className="font-medium text-[var(--text)]">
              The 13-area Shopify conversion framework is the structured
              review I run on every store — from the ad click to checkout —
              published openly so you can run it on yours.
            </span>
          </p>
          <p className={bodyClass + " max-w-2xl"}>
            Every area below states what the review covers, what good looks
            like, and the leak pattern it usually finds. The patterns come
            from independent store reviews — real product pages, real buy
            boxes, real carts — never invented, never presented as client
            work.
          </p>
          <CtaRow />
        </section>

        {/* The honest-labelling rule */}
        <section id="how-it-works" className="mt-14 md:mt-20">
          <h2 className={h2Class}>The rule that makes it work</h2>
          <p className={bodyClass}>
            <span className="font-medium text-[var(--text)]">
              Every area gets a status — reviewed with findings, reviewed
              with no meaningful issue, not accessible, or not assessed.
            </span>{" "}
            Most &ldquo;audits&rdquo; check three areas and call it a CRO
            review. This framework checks all thirteen and says plainly
            which ones had nothing wrong. A clean area is also a finding:
            it stops you fixing what isn&rsquo;t broken, and it keeps the
            real problems — usually three to five — from drowning in a
            40-item to-do list.
          </p>
          <p className={bodyClass}>
            Run it in buyer order: land the way your ad traffic lands, open
            your best-selling product page, add to cart, start checkout.
            Then rank every finding by cost — traffic times friction. A
            buy-box problem on your top product page outranks a homepage
            nicety every time, because that&rsquo;s where your paid traffic
            actually decides.
          </p>
        </section>

        {/* The 13 areas */}
        <section id="the-13-areas" className="mt-14 md:mt-20">
          <h2 className={h2Class}>The 13 areas</h2>
          {areas.map((area) => (
            <div key={area.name}>
              <h3 className={h3Class}>{area.name}</h3>
              <p className={bodyClass}>{area.body}</p>
            </div>
          ))}
        </section>

        {/* Where this fits (anti-cannibalization + sibling links) */}
        <section id="vs-others" className="mt-14 md:mt-20">
          <h2 className={h2Class}>Where this page fits</h2>
          <p className={bodyClass}>
            This page is the open framework — the lens. The engagements it
            supports:{" "}
            <Link href="/shopify-cro-consultant" className="text-[var(--accent)] underline underline-offset-4">
              Shopify CRO consulting
            </Link>{" "}
            is the Conversion Fix Sprint itself — the framework plus the
            highest-impact fixes implemented in your store, $750, seven
            days. The{" "}
            <Link href="/ecommerce-ux-audit" className="text-[var(--accent)] underline underline-offset-4">
              ecommerce UX audit
            </Link>{" "}
            is the framework applied to your store as a report, no
            implementation.{" "}
            <Link href="/ecommerce-growth-consultant" className="text-[var(--accent)] underline underline-offset-4">
              Ecommerce growth consulting
            </Link>{" "}
            is ongoing ownership of the whole line, ads to repeat purchase.
            And{" "}
            <Link href="/landing-page-optimization" className="text-[var(--accent)] underline underline-offset-4">
              landing page optimization
            </Link>{" "}
            is the single-page version — the destination your paid traffic
            hits, rebuilt against your live ads. To see the framework in
            action on a real storefront, read the{" "}
            <Link href="/case-studies" className="text-[var(--accent)] underline underline-offset-4">
              case studies page
            </Link>
            . For the fixes themselves in plain language, the blog covers{" "}
            <Link href="/blog/shopify-conversion-rate-optimization" className="text-[var(--accent)] underline underline-offset-4">
              13 high-impact Shopify conversion fixes that increase sales
            </Link>
            .
          </p>
        </section>

        {/* FAQs */}
        <section id="faq" className="mt-14 md:mt-20">
          <h2 className={h2Class}>Questions founders ask</h2>
          <div className="mt-6 space-y-8">
            <div>
              <h3 className="font-general text-lg font-medium text-[var(--text)]">
                What is the 13-area Shopify conversion framework?
              </h3>
              <p className={bodyClass}>
                It&rsquo;s the structured review I run on every Shopify
                store: 13 areas from the ad click to checkout — homepage,
                navigation, collections, product page messaging, product
                images and video, pricing and offer, reviews and trust,
                delivery and returns, variants and purchase controls, mobile
                experience, cart, accessible checkout, and ads-to-landing-
                page consistency. Every area is explicitly labelled —
                reviewed with findings, reviewed with no meaningful issue,
                not accessible, or not assessed — so nothing is silently
                skipped.
              </p>
            </div>
            <div>
              <h3 className="font-general text-lg font-medium text-[var(--text)]">
                Can I run this framework on my own store?
              </h3>
              <p className={bodyClass}>
                Yes — that&rsquo;s why it&rsquo;s published. Walk your
                store in buyer order: land the way your ad traffic lands,
                open your best-selling product page, add to cart, and start
                checkout. For each of the 13 areas, write down the one
                thing a first-time buyer can&rsquo;t find or can&rsquo;t
                trust. The value isn&rsquo;t the list; it&rsquo;s the
                honest labelling — saying plainly which areas are clean
                stops you fixing what isn&rsquo;t broken.
              </p>
            </div>
            <div>
              <h3 className="font-general text-lg font-medium text-[var(--text)]">
                How is the framework different from a CRO audit?
              </h3>
              <p className={bodyClass}>
                The framework is the lens; an audit is the lens pointed at
                your store. A CRO audit applies these 13 areas to one
                storefront and ranks the findings by what they cost you.
                My{" "}
                <Link href="/ecommerce-ux-audit" className="text-[var(--accent)] underline underline-offset-4">
                  ecommerce UX audit
                </Link>{" "}
                is the framework as a report; the{" "}
                <Link href="/shopify-cro-consultant" className="text-[var(--accent)] underline underline-offset-4">
                  Conversion Fix Sprint
                </Link>{" "}
                is the framework plus the highest-impact fixes implemented
                in your theme within seven days.
              </p>
            </div>
            <div>
              <h3 className="font-general text-lg font-medium text-[var(--text)]">
                Do all 13 areas matter for every store?
              </h3>
              <p className={bodyClass}>
                No — and that&rsquo;s the point of the honest labelling.
                Most stores lose sales in three to five areas and are
                genuinely fine in the rest. The framework forces you to
                name the clean areas too: reviewed with no meaningful
                issue. Without that discipline, every audit becomes a
                40-item to-do list and the three things that actually cost
                money get buried.
              </p>
            </div>
            <div>
              <h3 className="font-general text-lg font-medium text-[var(--text)]">
                Does the framework work for stores outside Shopify?
              </h3>
              <p className={bodyClass}>
                Partially. The 13 areas describe a buying journey, not a
                platform — product pages, trust, checkout friction exist
                everywhere. But the specifics assume Shopify: its theme
                structure, its checkout constraints, and the apps and
                analytics access a Shopify store gives me. On other
                platforms the lens still works; the fix list will differ.
              </p>
            </div>
            <div>
              <h3 className="font-general text-lg font-medium text-[var(--text)]">
                How do you rank which finding to fix first?
              </h3>
              <p className={bodyClass}>
                By cost: traffic times friction. A buy-box problem on your
                best-selling product page outranks a homepage nicety every
                time, because that&rsquo;s where your paid traffic actually
                decides. Findings get ranked by how many buyers hit them
                and how hard each one makes the yes — then the top of the
                list gets fixed first.
              </p>
            </div>
            <div>
              <h3 className="font-general text-lg font-medium text-[var(--text)]">
                Can I cite or reference this framework?
              </h3>
              <p className={bodyClass}>
                Yes. Link to this page with attribution to Saif Ali. If
                you publish your own teardown using it, the
                honest-labelling rule travels with it: every area gets a
                status — reviewed with findings, reviewed with no
                meaningful issue, not accessible, or not assessed.
              </p>
            </div>
            <div>
              <h3 className="font-general text-lg font-medium text-[var(--text)]">
                How long does it take to review a store with the 13-area
                framework?
              </h3>
              <p className={bodyClass}>
                In the Conversion Fix Sprint I run the full 13-area review
                and implement the highest-impact fixes in the theme within
                seven days. Doing it yourself is slower but workable: walk
                the store in buyer order, give each area group —
                discovery, product page, offer and trust, checkout — a
                focused block of time, and rank your findings by traffic
                times friction before fixing anything.
              </p>
            </div>
            <div>
              <h3 className="font-general text-lg font-medium text-[var(--text)]">
                Which of the 13 areas usually costs stores the most?
              </h3>
              <p className={bodyClass}>
                No single area wins for every store — but the
                costliest gaps usually sit in areas 4 through 9: the product
                page and buy box, where paid traffic actually decides.
                Missing delivery costs, missing reviews near the price, or
                a broken variant selector ends the session quietly. Homepage
                tweaks get debated endlessly; a silent buy-box problem gets
                the money. Rank by traffic times friction, not by area
                number.
              </p>
            </div>
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
          <h2 className={h2Class}>Want the framework run on your store?</h2>
          <p className={bodyClass}>
            Book a fit call. I&rsquo;ll run the 13-area review on your
            store and tell you honestly where the money is leaking — and
            whether the sprint, the UX audit, or one of the single-page
            engagements is the right fix. If your store isn&rsquo;t the
            problem, I&rsquo;ll say so.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/book" className={ctaButtonClass}>
              Book a fit call
            </Link>
            <a
              href={`mailto:${site.email}`}
              className="text-sm font-medium text-[var(--accent)] underline underline-offset-4"
            >
              or email {site.email}
            </a>
          </div>
        </section>
      </div>

      <SharedFooter />
    </main>
  );
}

