import type { Metadata } from "next";
import Link from "next/link";
import { SharedFooter } from "@/components/SharedFooter";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Case Studies: Shopify CRO Teardowns | Saif Ali",
  description:
    "Shopify CRO case studies and teardown methodology: the 13-area full-journey review behind every engagement, with an independent methodology demo on a public storefront. Honest proof — no invented results.",
  alternates: {
    canonical: "https://www.saifali.site/case-studies",
  },
};

const serifItalic = {
  fontFamily: '"Instrument Serif", "Noto Serif", Georgia, serif',
  fontStyle: "italic" as const,
  fontWeight: 400,
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.saifali.site/case-studies#service",
  name: "Shopify CRO Case Studies and Teardowns",
  description:
    "Case studies and full-journey teardown methodology for Shopify brands — the 13-area review behind the Shopify Conversion Fix Sprint, shown with an independent methodology demo on a public storefront.",
  url: "https://www.saifali.site/case-studies",
  provider: { "@id": "https://www.saifali.site/#person" },
  areaServed: ["US", "GB"],
  offers: {
    "@type": "Offer",
    name: "Shopify Conversion Fix Sprint",
    price: "750",
    priceCurrency: "USD",
    url: "https://www.saifali.site/book",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.saifali.site/case-studies#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you have client case studies with measured results yet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not yet — and I won't invent them. This page documents my teardown methodology and independent methodology demos run on public storefronts, so you can judge the quality of the thinking before any engagement. Client before-and-after results will be published here only when they are real and the client agrees.",
      },
    },
    {
      "@type": "Question",
      name: "What is a full-journey teardown?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A structured review of 13 areas of a Shopify store, from the ad click to checkout: homepage, navigation, collections, product page messaging, product images and video, pricing and offer, reviews and trust, delivery and returns, variants and purchase controls, mobile experience, cart, accessible checkout, and ads-to-landing-page consistency. Every area is explicitly labelled as reviewed with findings, reviewed with no meaningful issue, not accessible, or not assessed — so nothing is silently skipped.",
      },
    },
    {
      "@type": "Question",
      name: "What did the methodology demo find?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "On a public US candle storefront's $24 product page, the buy box showed the shipping cost in the announcement bar but no delivery-time estimate near Add to Cart — a first-time buyer couldn't tell how long the candle takes to arrive. No stock indicator and no money-back guarantee appeared near the button either. That single page illustrates the pattern: the cost is stated, the timing the buyer actually needs is missing.",
      },
    },
    {
      "@type": "Question",
      name: "What does 'not measured' mean in your case-study format?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It means exactly what it says. Every case study on this page is structured as problem, research, diagnosis, changes, and measured result. Where no client engagement exists — independent methodology demos — there is no conversion lift to report, so the result is labelled not measured instead of being invented. Client before-and-after results will carry real numbers here only when they are real and the client agrees.",
      },
    },
    {
      "@type": "Question",
      name: "How is a teardown different from the Conversion Fix Sprint?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The teardown is the diagnosis: the 13-area review with every finding documented and ranked. The Shopify Conversion Fix Sprint is the teardown plus the fix — the highest-impact findings implemented in your store within seven days, $750 fixed. If you only want the diagnosis as a report, the ecommerce UX audit is the report-only version.",
      },
    },
    {
      "@type": "Question",
      name: "Can you run a teardown on my store?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Book a fit call and I'll tell you honestly whether a teardown is the right starting point for your store — and whether the sprint, the UX audit, or one of the single-page engagements fits better. If your store isn't the problem, I'll say so.",
      },
    },
    {
      "@type": "Question",
      name: "Why publish teardowns of stores you don't work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Because the method is the product. Independent reviews of public storefronts use no private data and are always labelled as methodology demos, never as client work. They let you see exactly how I read a store before you trust me with yours.",
      },
    },
  ],
};

const ctaButtonClass =
  "inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-7 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90";

const h2Class =
  "font-general text-[clamp(1.6rem,3.5vw,2.4rem)] font-medium leading-tight tracking-[-1px] text-[var(--text)]";
const bodyClass = "mt-4 text-base leading-relaxed text-[var(--text-secondary)] md:text-lg";
const listClass = "mt-4 space-y-3 text-base leading-relaxed text-[var(--text-secondary)] md:text-lg";

function CtaRow({ label = "Book a fit call" }: { label?: string }) {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-4">
      <Link href="/book" className={ctaButtonClass}>
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

export default function CaseStudiesPage() {
  return (
    <main className="saif-portfolio min-h-screen px-5 pb-28 pt-10 md:px-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto w-full max-w-4xl">
        {/* Breadcrumb / back — mirrors the sibling pages' pattern */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <p className="font-hand text-base text-[var(--text-secondary)]">
            / Case Studies
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
            Case Studies
            <br />
            &{" "}
            <em className="not-italic accent" style={serifItalic}>
              Shopify Teardowns
            </em>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">
            The method is the product. This page documents how I read a
            Shopify store — the full 13-area teardown behind every
            engagement — with an independent methodology demo on a public
            storefront.
          </p>
          <p className={bodyClass + " max-w-2xl"}>
            <span className="font-medium text-[var(--text)]">
              Honest status first: I don&rsquo;t have client before-and-after
              case studies yet, and I&rsquo;d rather tell you that than
              invent some.
            </span>{" "}
            What this page gives you instead is the next best thing: the
            exact teardown methodology I run on every store, shown working on
            a real public storefront — labelled as a methodology demo, never
            as client work. Judge the thinking; the results get published
            here when they&rsquo;re real.
          </p>
          <CtaRow />
        </section>

        {/* 1 — What a full-journey teardown is (AEO definition block) */}
        <section id="what-it-is" className="mt-14 md:mt-20">
          <h2 className={h2Class}>What is a full-journey teardown?</h2>
          <p className={bodyClass}>
            <span className="font-medium text-[var(--text)]">
              A full-journey teardown is a structured review of 13 areas of
              a Shopify store, from the ad click to checkout — every area
              explicitly labelled as reviewed with findings, reviewed with
              no meaningful issue, not accessible, or not assessed, so
              nothing is silently skipped.
            </span>
          </p>
          <p className={bodyClass}>
            The 13 areas: homepage, navigation, collections, product page
            messaging, product images and video, pricing and offer, reviews
            and trust, delivery and returns, variants and purchase controls,
            mobile experience, cart, accessible checkout, and ads-to-landing-
            page consistency. The full breakdown — what each of the
            thirteen reviews covers and what good looks like — is published
            as the{" "}
            <Link href="/resources/shopify-conversion-framework" className="text-[var(--accent)] underline underline-offset-4">
              13-area Shopify conversion framework
            </Link>
            . Most &ldquo;audits&rdquo; check three of these
            and call it a CRO review. The teardown checks all thirteen and
            says plainly which ones had nothing wrong — because a clean area
            is also a finding, and it stops you fixing what isn&rsquo;t
            broken.
          </p>
          <p className={bodyClass}>
            What it is not: not a template checklist, not a screenshot with
            red arrows and no priorities, and not a promise of lift
            percentages. It&rsquo;s a reading of your store the way a buyer
            experiences it, ranked by what costs you the most.
          </p>
        </section>

        {/* 2 — Methodology demo (honest outcome format) */}
        <section id="demo" className="mt-14 md:mt-20">
          <h2 className={h2Class}>Methodology demo: a public storefront</h2>
          <p className={bodyClass}>
            <span className="font-medium text-[var(--text)]">
              Independent methodology demo — not a client engagement.
            </span>{" "}
            This teardown was run on a public US candle storefront, using
            only what any visitor can see. No private data, no client
            relationship, no invented outcomes. It follows the same outcome
            format every case study on this page will use: problem,
            research, diagnosis, changes, and measured result — with an
            explicit &ldquo;not measured&rdquo; note wherever nothing was
            measured.
          </p>
          <h3 className="font-general mt-8 text-lg font-medium text-[var(--text)]">
            Problem
          </h3>
          <p className={bodyClass}>
            On the store&rsquo;s $24 product page, a first-time buyer could
            see what shipping costs ($7, free over $80 — stated in the
            announcement bar) but couldn&rsquo;t tell how long the candle
            would take to arrive: there was no delivery-time estimate
            anywhere near Add to Cart. Arrival timing is the question that
            stops a first order, and the page didn&rsquo;t answer it.
          </p>
          <h3 className="font-general mt-8 text-lg font-medium text-[var(--text)]">
            Research
          </h3>
          <p className={bodyClass}>
            A 13-area review of the page, using only visitor-visible data.
            Area status: delivery and returns — reviewed with findings;
            variants and purchase controls — reviewed with findings; product
            page messaging — reviewed with findings; reviews and trust —
            reviewed with no meaningful issue (ratings were present and
            visible; the gap was guarantee placement, not missing proof);
            the remaining nine areas — not assessed (single-page demo scope,
            not a full engagement).
          </p>
          <h3 className="font-general mt-8 text-lg font-medium text-[var(--text)]">
            Diagnosis
          </h3>
          <p className={bodyClass}>
            The store states the cost and skips the timing — and timing is
            what a first-time buyer is actually weighing. Placement
            compounds it: no stock indicator and no money-back guarantee
            appear near the button, the one place the buyer is deciding.
          </p>
          <h3 className="font-general mt-8 text-lg font-medium text-[var(--text)]">
            Changes
          </h3>
          <p className={bodyClass}>
            None implemented. This was an independent demo, not a client
            engagement — I don&rsquo;t touch stores I don&rsquo;t work with.
          </p>
          <h3 className="font-general mt-8 text-lg font-medium text-[var(--text)]">
            Measured result
          </h3>
          <p className={bodyClass}>
            Not measured. With no engagement and no access to the
            store&rsquo;s analytics, there is no conversion lift to report —
            and I won&rsquo;t invent one. The output of a methodology demo
            is the ranked finding list above: the thinking you can judge,
            not a result you can&rsquo;t verify.
          </p>
          {/* [PROOF NEEDED]: client before/after screenshots, metric snapshots,
              or confirmed quotes — to be added here when available. Never invent. */}
        </section>
{/* 3 — What the teardown leads to */}
        <section id="offer" className="mt-14 md:mt-20">
          <h2 className={h2Class}>From teardown to fixed: the Sprint</h2>
          <p className={bodyClass}>
            <span className="font-medium text-[var(--text)]">
              $750, fixed price. The Shopify Conversion Fix Sprint is the
              teardown plus the fix: the 13-area review, then the
              highest-impact findings implemented in your store within seven
              days of kickoff.
            </span>
          </p>
          <ul className={listClass}>
            <li>
              — <span className="font-medium text-[var(--text)]">The teardown:</span>{" "}
              all 13 areas reviewed and ranked — what&rsquo;s costing you
              the most, in order.
            </li>
            <li>
              — <span className="font-medium text-[var(--text)]">The fixes shipped:</span>{" "}
              the top findings implemented directly in your theme — copy,
              hierarchy, trust placement, mobile layout.
            </li>
            <li>
              — <span className="font-medium text-[var(--text)]">Before-and-after notes:</span>{" "}
              what changed and why, so your team can repeat the pattern.
            </li>
          </ul>
          <p className={bodyClass}>
            <span className="font-medium text-[var(--text)]">Want only the diagnosis?</span>{" "}
            The ecommerce UX audit is the teardown as a report — no
            implementation. Same thirteen areas, same honest labelling.
          </p>
          <CtaRow label="Run a teardown on my store" />
        </section>

        {/* 4 — Where this fits (anti-cannibalization + sibling links) */}
        <section id="vs-others" className="mt-14 md:mt-20">
          <h2 className={h2Class}>Where this page fits</h2>
          <p className={bodyClass}>
            This page is the proof shelf: the methodology and the demos. The
            engagements it supports:{" "}
            <Link href="/shopify-cro-consultant" className="text-[var(--accent)] underline underline-offset-4">
              Shopify CRO consulting
            </Link>{" "}
            is the Conversion Fix Sprint itself — teardown plus
            implementation, $750, seven days. The{" "}
            <Link href="/ecommerce-ux-audit" className="text-[var(--accent)] underline underline-offset-4">
              ecommerce UX audit
            </Link>{" "}
            is the teardown as a report, no implementation.{" "}
            <Link href="/ecommerce-growth-consultant" className="text-[var(--accent)] underline underline-offset-4">
              Ecommerce growth consulting
            </Link>{" "}
            is ongoing ownership of the whole line, ads to repeat purchase.
            And{" "}
            <Link href="/landing-page-optimization" className="text-[var(--accent)] underline underline-offset-4">
              landing page optimization
            </Link>{" "}
            is the single-page version — the destination your paid traffic
            hits, rebuilt against your live ads. If the question is
            &ldquo;show me how you think,&rdquo; you&rsquo;re on the right
            page.
          </p>
        </section>

        {/* 5 — FAQs */}
        <section id="faq" className="mt-14 md:mt-20">
          <h2 className={h2Class}>Questions founders ask</h2>
          <div className="mt-6 space-y-8">
            <div>
              <h3 className="font-general text-lg font-medium text-[var(--text)]">
                Do you have client case studies with measured results yet?
              </h3>
              <p className={bodyClass}>
                Not yet — and I won&rsquo;t invent them. This page documents
                my teardown methodology and independent methodology demos run
                on public storefronts, so you can judge the quality of the
                thinking before any engagement. Client before-and-after
                results will be published here only when they are real and
                the client agrees.
              </p>
            </div>
            <div>
              <h3 className="font-general text-lg font-medium text-[var(--text)]">
                What is a full-journey teardown?
              </h3>
              <p className={bodyClass}>
                A structured review of 13 areas of a Shopify store, from the
                ad click to checkout: homepage, navigation, collections,
                product page messaging, product images and video, pricing and
                offer, reviews and trust, delivery and returns, variants and
                purchase controls, mobile experience, cart, accessible
                checkout, and ads-to-landing-page consistency. Every area is
                explicitly labelled — reviewed with findings, reviewed with
                no meaningful issue, not accessible, or not assessed — so
                nothing is silently skipped.
              </p>
            </div>
            <div>
              <h3 className="font-general text-lg font-medium text-[var(--text)]">
                What did the methodology demo find?
              </h3>
              <p className={bodyClass}>
                On a public US candle storefront&rsquo;s $24 product page,
                the buy box showed the shipping cost in the announcement bar
                but no delivery-time estimate near Add to Cart — a first-time
                buyer couldn&rsquo;t tell how long the candle takes to
                arrive. No stock indicator and no money-back guarantee
                appeared near the button either. The cost is stated; the
                timing the buyer actually needs is missing.
              </p>
            </div>
            <div>
              <h3 className="font-general text-lg font-medium text-[var(--text)]">
                What does &lsquo;not measured&rsquo; mean in your case-study format?
              </h3>
              <p className={bodyClass}>
                It means exactly what it says. Every case study on this page
                is structured as problem, research, diagnosis, changes, and
                measured result. Where no client engagement exists —
                independent methodology demos — there is no conversion lift
                to report, so the result is labelled not measured instead
                of being invented. Client before-and-after results will
                carry real numbers here only when they are real and the
                client agrees.
              </p>
            </div>
            <div>
              <h3 className="font-general text-lg font-medium text-[var(--text)]">
                How is a teardown different from the Conversion Fix Sprint?
              </h3>
              <p className={bodyClass}>
                The teardown is the diagnosis: the 13-area review with every
                finding documented and ranked. The{" "}
                <Link href="/shopify-cro-consultant" className="text-[var(--accent)] underline underline-offset-4">
                  Shopify Conversion Fix Sprint
                </Link>{" "}
                is the teardown plus the fix — the highest-impact findings
                implemented in your store within seven days, $750 fixed. If
                you only want the diagnosis as a report, the ecommerce UX
                audit is the report-only version.
              </p>
            </div>
            <div>
              <h3 className="font-general text-lg font-medium text-[var(--text)]">
                Can you run a teardown on my store?
              </h3>
              <p className={bodyClass}>
                Yes. Book a fit call and I&rsquo;ll tell you honestly whether
                a teardown is the right starting point for your store — and
                whether the sprint, the UX audit, or one of the single-page
                engagements fits better. If your store isn&rsquo;t the
                problem, I&rsquo;ll say so.
              </p>
            </div>
            <div>
              <h3 className="font-general text-lg font-medium text-[var(--text)]">
                Why publish teardowns of stores you don&rsquo;t work with?
              </h3>
              <p className={bodyClass}>
                Because the method is the product. Independent reviews of
                public storefronts use no private data and are always
                labelled as methodology demos, never as client work. They let
                you see exactly how I read a store before you trust me with
                yours — and you can see the builds behind that lens in{" "}
                <Link href="/portfolio" className="text-[var(--accent)] underline underline-offset-4">
                  my portfolio
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* 6 — Closing CTA */}
        <section id="book" className="mt-14 md:mt-20">
          <h2 className={h2Class}>See your store through this lens</h2>
          <p className={bodyClass}>
            Book a fit call. Tell me where your store stands — I&rsquo;ll
            tell you honestly whether the teardown is the right starting
            point. If it isn&rsquo;t, I&rsquo;ll say so.
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
