import type { Metadata } from "next";
import Link from "next/link";
import { SharedFooter } from "@/components/SharedFooter";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Ecommerce UX Audit for Shopify Stores | Saif Ali",
  description:
    "Ecommerce UX audit for Shopify stores: teardown-style expert review across 13 areas, annotated screenshots, fixes ranked by impact. $750 fixed.",
  alternates: {
    canonical: "https://www.saifali.site/ecommerce-ux-audit",
  },
  openGraph: {
    title: "Ecommerce UX Audit for Shopify Stores | Saif Ali",
    description:
      "Ecommerce UX audit for Shopify stores: teardown-style expert review across 13 areas, annotated screenshots, fixes ranked by impact. $750 fixed.",
    url: "/ecommerce-ux-audit",
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
    title: "Ecommerce UX Audit for Shopify Stores | Saif Ali",
    description:
      "Ecommerce UX audit for Shopify stores: teardown-style expert review across 13 areas, annotated screenshots, fixes ranked by impact. $750 fixed.",
    images: ["/og-image.jpg"],
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
  "@id": "https://www.saifali.site/ecommerce-ux-audit#service",
  name: "Ecommerce UX Audit",
  description:
    "Teardown-style UX audit for Shopify stores — an expert review of the full buying journey across 13 areas, with annotated screenshots and a fix list ranked by revenue impact.",
  url: "https://www.saifali.site/ecommerce-ux-audit",
  telephone: "+92 345 4105932",
  priceRange: "$750+",
  image: "https://www.saifali.site/og-image.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "L-3 Software Technology Park",
    addressLocality: "Muzaffarabad",
    addressRegion: "Azad Jammu and Kashmir",
    postalCode: "13100",
    addressCountry: "PK",
  },
  provider: { "@id": "https://www.saifali.site/#person" },
  areaServed: ["US", "GB"],
  offers: {
    "@type": "Offer",
    name: "Ecommerce UX Audit",
    price: "750",
    priceCurrency: "USD",
    url: "https://www.saifali.site/book",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.saifali.site/ecommerce-ux-audit#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "How is a UX audit different from the Conversion Fix Sprint?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The audit is the diagnosis as a report you keep: a teardown-style review of your whole store, annotated screenshots, and every finding ranked by revenue impact. The Shopify Conversion Fix Sprint adds implementation and verification on top — I ship the highest-impact fixes on your store over seven days. If you searched for a shopify cro audit, this page is it: the expert teardown. The sprint is the teardown plus the fixes.",
      },
    },
    {
      "@type": "Question",
      name: "What exactly does the UX audit report include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A written teardown report. Your store is reviewed across 13 areas — homepage, navigation, collections, product page messaging, images and video, pricing and offer, reviews and trust, delivery and returns, variants and purchase controls, mobile, cart, checkout, and ads and landing-page consistency. Every finding comes with an annotated screenshot, an explanation of why it costs sales, and the concrete fix — ranked by revenue impact, not vague advice.",
      },
    },
    {
      "@type": "Question",
      name: "Can I see a sample audit report before I book?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — the methodology demos on the case studies page are the closest public equivalent: a public storefront walked through the same 13 areas, with findings ranked the same way. A paid audit report is the same format pointed at your store, with annotated screenshots of your pages and a fix list your team can implement.",
      },
    },
    {
      "@type": "Question",
      name: "How much does the audit cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "$750, fixed price, for one store. The report is yours to keep no matter what you do next — implement it in-house, hand it to your team, or roll it into the sprint.",
      },
    },
    {
      "@type": "Question",
      name: "How long does the UX audit take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The audit is delivered within seven days of kickoff: intake, the full teardown, ranking every finding by impact, and the written report.",
      },
    },
    {
      "@type": "Question",
      name: "Do you need access to my store?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For the UX audit: no store access needed. The teardown is done the way a buyer does it — no collaborator access required. Read-only analytics access helps me see where buyers actually drop off, but it isn't required; the audit stands on the expert review alone.",
      },
    },
    {
      "@type": "Question",
      name: "Will the audit just tell me to redesign?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The audit finds fixes inside your existing theme and design language. If something genuinely needs a rebuild, I'll say so with reasons — but a redesign is never the default recommendation.",
      },
    },
    {
      "@type": "Question",
      name: "What do I do with the report after?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Whatever you want. Implement the fixes yourself, hand the report to your developer or team, or book the Conversion Fix Sprint and have me implement the highest-impact items and verify them. The report doesn't expire and it doesn't come with a sales pitch attached.",
      },
    },
    {
      "@type": "Question",
      name: "How do you decide what to fix first?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "By expected revenue impact — never by how the site looks. P1 findings are frictions at the purchase decision that touch most buyers: hidden shipping costs near the buy button, missing trust signals where payment happens. P2 findings stall buyers on high-traffic pages before they reach the decision. Visual polish sits at P3. The report opens with the P1 list, so the first page is where the money is.",
      },
    },
    {
      "@type": "Question",
      name: "What is an ecommerce UX audit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A systematic, expert review of how real buyers move through your store — homepage, navigation, collections, product pages, cart and checkout — done the way a buyer does it. It pinpoints the exact frictions that cost sales, ranks every finding by expected revenue impact, and delivers a written report with annotated screenshots and concrete fixes you can implement yourself or hand to your team.",
      },
    },
    {
      "@type": "Question",
      name: "How do I know if my store needs a UX audit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Three signals: traffic with real intent converts far below what you’d expect, your landing pages bounce fast, or you redesigned and conversions stayed flat. If buyers reach the product page and leave, or carts stall around shipping, trust and purchase details, the store has friction worth a teardown before you spend more on traffic.",
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

export default function EcommerceUxAuditPage() {
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
            / Ecommerce UX Audit
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
            Ecommerce UX Audit
            <br />
            for{" "}
            <em className="not-italic accent" style={serifItalic}>
              Shopify Stores
            </em>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">
            A teardown-style expert review of your store — every friction
            point documented, annotated, and ranked by revenue impact.
          </p>
          <p className={bodyClass + " max-w-2xl"}>
            An ecommerce UX audit is an expert review of your online
            store&rsquo;s buying experience: a specialist walks your Shopify
            store the way a customer does — homepage, collections, product
            pages, cart, checkout, mobile — and documents every point of
            friction with annotated screenshots and a fix list ranked by
            revenue impact.
          </p>
          <CtaRow />
        </section>

        {/* 1 — The problem */}
        <section id="problem" className="mt-14 md:mt-20">
          <h2 className={h2Class}>You know something is off, but nobody can tell you what</h2>
          <p className={bodyClass}>
            Traffic is fine. The product is fine. The store &ldquo;looks
            fine.&rdquo; And yet buyers stall somewhere between the product
            page and the order confirmation — and nobody can tell you where.
            Agencies will sell you a redesign; freelancers will give you
            opinions. What you actually need is an itemized expert list:
            exactly what&rsquo;s wrong, where, why it matters, and what to
            change first.
          </p>
          <p className={bodyClass}>
            That is what a teardown-style audit is for. A diagnosis before
            fixes — so you spend on the right changes instead of the loudest
            ones, and so whoever implements them (you, your team, or me) works
            from evidence instead of guesses.
          </p>
        </section>

        {/* 2 — Who this is for */}
        <section id="who-its-for" className="mt-14 md:mt-20">
          <h2 className={h2Class}>Who this is for</h2>
          <ul className={listClass}>
            <li>— A US or UK Shopify brand in apparel, accessories, or home.</li>
            <li>— Your store is live, with real traffic and real orders — there is buyer behavior to review.</li>
            <li>— You want an expert diagnosis before committing to changes: the itemized list first, the fixes second.</li>
          </ul>
          <p className={bodyClass}>
            <span className="font-medium text-[var(--text)]">Not a fit:</span>{" "}
            pre-launch stores with no buyer behavior to review yet, anyone
            shopping for a redesign quote (this audit works inside your
            existing theme), and anyone who needs guaranteed conversion
            numbers — I will not promise those. And if you already know you
            want the fixes implemented rather than just diagnosed, my{" "}
            <Link href="/shopify-cro-consultant" className="text-[var(--accent)] underline underline-offset-4">
              Shopify CRO consulting
            </Link>{" "}
            page — the Conversion Fix Sprint — is the sharper fit.
          </p>
        </section>

        {/* 3 — AEO definition block */}
        <section id="what-it-is" className="mt-14 md:mt-20">
          <h2 className={h2Class}>What does an ecommerce UX audit actually cover?</h2>
          <p className={bodyClass}>
            <span className="font-medium text-[var(--text)]">
              An ecommerce UX audit covers the full buying journey of your
              store — homepage, navigation, collections, product pages, cart,
              checkout, and mobile — reviewed by an expert against 13 areas,
              with every friction point documented in annotated screenshots
              and ranked by revenue impact. The deliverable is a written
              report, not a call and not a slide deck of generic advice.
            </span>
          </p>
          <p className={bodyClass}>
            That is different from an automated audit tool: tools scan code —
            they don&rsquo;t experience the store as a buyer does. Different
            from a redesign quote: the audit works inside your existing theme.
            And different from an agency retainer: this is a one-time,
            fixed-price deliverable — one senior operator, no relay.
          </p>
          <p className={bodyClass}>
            What it is not: not a speed-test printout, not generic
            best-practice slides, and not guaranteed lift percentages.
          </p>
        </section>

        {/* 4 — Method */}
        <section id="method" className="mt-14 md:mt-20">
          <h2 className={h2Class}>My method: the 13-area teardown</h2>
          <p className={bodyClass}>
            Every audit runs the same discipline: homepage, navigation,
            collections, product page messaging, product images and video,
            pricing and offer, reviews and trust, delivery and returns,
            variants and purchase controls, mobile experience, cart,
            checkout, and ads and landing-page consistency. Reviewed the way
            a buyer moves — mobile and desktop — because friction rarely sits
            where you expect it.
          </p>
          <p className={bodyClass}>
            Each finding gets three things: an annotated screenshot so you
            see exactly what I saw, an explanation of why it costs sales,
            and the concrete fix. Then everything is ranked by revenue
            impact — so the report opens with what matters most and you
            never have to guess where to start. You can see the range of
            store builds behind that lens in{" "}
            <Link href="/portfolio" className="text-[var(--accent)] underline underline-offset-4">
              my portfolio
            </Link>
            .
          </p>
          <p className={bodyClass}>
            The full checklist behind this method — what each of the 13
            areas covers — is published as the{" "}
            <Link href="/resources/shopify-conversion-framework" className="text-[var(--accent)] underline underline-offset-4">
              open 13-area Shopify conversion framework
            </Link>
            .
          </p>
        </section>

        {/* 4b — Sample finding format */}
        <section id="sample-finding" className="mt-14 md:mt-20">
          <h2 className={h2Class}>What a finding actually looks like</h2>
          <p className={bodyClass}>
            Every finding in the report follows the same five-field format —
            Problem, Evidence, Impact, Fix, Priority. The example below is
            illustrative and anonymized: it shows the format, not a client
            case. The pattern it describes — delivery information hidden from
            the buy button — is one that keeps appearing in independent
            store reviews.
          </p>
          <ul className={listClass}>
            <li>
              — <span className="font-medium text-[var(--text)]">Problem:</span>{" "}
              no delivery or returns information anywhere near the buy
              button.
            </li>
            <li>
              — <span className="font-medium text-[var(--text)]">Evidence:</span>{" "}
              the product page shows price and add-to-bag; shipping cost and
              delivery time appear only at checkout. The store&rsquo;s own
              policy pages confirm flat-rate shipping and a returns window —
              buyers just can&rsquo;t see them where the purchase decision
              happens.
            </li>
            <li>
              — <span className="font-medium text-[var(--text)]">Impact:</span>{" "}
              buyers decide at the buy button, not at checkout — and hidden
              shipping cost is one of the most common reasons carts get
              abandoned. Page-level friction at the purchase decision,
              touching most buyers.
            </li>
            <li>
              — <span className="font-medium text-[var(--text)]">Fix:</span>{" "}
              one line under the buy button — the store&rsquo;s real policy,
              surfaced where it matters (e.g. &ldquo;Flat $7 shipping
              &middot; free over $80 &middot; arrives in 3–5 days&rdquo;),
              linking to the full policy. Two lines of copy, no redesign.
            </li>
            <li>
              — <span className="font-medium text-[var(--text)]">Priority:</span>{" "}
              P1 — highest expected revenue impact.
            </li>
          </ul>
          <p className={bodyClass}>
            Every finding in your report looks like this: the specific page
            and element, the evidence I saw, why it costs sales, the
            concrete change — and its rank. Nothing vague, nothing you have
            to interpret.
          </p>
        </section>

        {/* 4c — Prioritization method */}
        <section id="prioritization" className="mt-14 md:mt-20">
          <h2 className={h2Class}>Ranked by conversion impact — never by how it looks</h2>
          <p className={bodyClass}>
            The rank answers one question: if you can only fix five things
            this month, which five move revenue? Each finding is ranked by
            expected conversion impact — the pages the friction touches, how
            much buyer traffic reaches them, and how close the friction sits
            to the purchase. Visual preference plays no part: &ldquo;this
            looks dated&rdquo; is never a finding on its own.
          </p>
          <ul className={listClass}>
            <li>
              — <span className="font-medium text-[var(--text)]">P1 — fix first:</span>{" "}
              friction at the purchase decision itself — the buy-button
              area, cart, checkout entry — touching most buyers. Hidden
              shipping costs, missing trust signals where payment happens,
              broken purchase controls.
            </li>
            <li>
              — <span className="font-medium text-[var(--text)]">P2 — fix next:</span>{" "}
              friction on your highest-traffic pages — homepage, top
              collections, key product pages — that stalls buyers before
              they ever reach the decision.
            </li>
            <li>
              — <span className="font-medium text-[var(--text)]">P3 — when there&rsquo;s time:</span>{" "}
              everything else: low-traffic pages, edge cases, and visual
              polish. A prettier button never outranks a missing shipping
              cost.
            </li>
          </ul>
          <p className={bodyClass}>
            The report opens with the P1 list — so the first page is where
            the money is, and nobody has to guess where to start.
          </p>
        </section>

        {/* 5 — The audit offer */}
        <section id="audit" className="mt-14 md:mt-20">
          <h2 className={h2Class}>What&rsquo;s included: the audit deliverable</h2>
          <p className={bodyClass}>
            <span className="font-medium text-[var(--text)]">
              $750, fixed price. One store. Delivered within seven days of kickoff.
            </span>
          </p>
          <ul className={listClass}>
            <li>
              — <span className="font-medium text-[var(--text)]">Full teardown report:</span>{" "}
              your store reviewed across all 13 areas, from homepage to ads
              and landing-page consistency — documented in writing, with
              annotated screenshots from your actual pages.
            </li>
            <li>
              — <span className="font-medium text-[var(--text)]">Every finding ranked by impact:</span>{" "}
              each issue ordered by expected revenue impact, so the first
              page of the report is where the money is.
            </li>
            <li>
              — <span className="font-medium text-[var(--text)]">Concrete fixes, not vague advice:</span>{" "}
              every finding says what to change and why — clear enough to
              hand directly to your developer or team.
            </li>
            <li>
              — <span className="font-medium text-[var(--text)]">Yours to keep:</span>{" "}
              the report is yours no matter what you do next. No expiry, no
              sales pitch attached.
            </li>
          </ul>
          <p className={bodyClass}>
            <span className="font-medium text-[var(--text)]">Not included:</span>{" "}
            implementation on the store, redesign work, ad campaign
            management.
          </p>
          <p className={bodyClass}>
            <span className="font-medium text-[var(--text)]">After the audit:</span>{" "}
            implement the fixes yourself, hand the report to your team — or
            book the Conversion Fix Sprint and I&rsquo;ll implement the
            highest-impact items on your store and verify them. Your call,
            your report.
          </p>
          <CtaRow label="Get the audit" />
        </section>

        {/* 6 — Process */}
        <section id="process" className="mt-14 md:mt-20">
          <h2 className={h2Class}>How the audit works</h2>
          <ol className={listClass + " list-none"}>
            <li>
              <span className="font-medium text-[var(--text)]">1. Intake (day 1).</span>{" "}
              You send the store URL, your traffic sources, and anything
              you&rsquo;ve noticed. No collaborator access needed — I review
              as a buyer.
            </li>
            <li>
              <span className="font-medium text-[var(--text)]">2. Teardown (days 2–5).</span>{" "}
              I walk the full journey — ad to checkout, mobile and desktop —
              and document every friction point with screenshots.
            </li>
            <li>
              <span className="font-medium text-[var(--text)]">3. Rank (day 6).</span>{" "}
              Every finding is ordered by revenue impact, so the report
              leads with what matters most.
            </li>
            <li>
              <span className="font-medium text-[var(--text)]">4. Report (day 7).</span>{" "}
              The written audit lands in your inbox: the annotated findings,
              the ranked fix list, and what to do with it.
            </li>
          </ol>
        </section>

        {/* 7 — Audit vs sprint (anti-cannibalization) */}
        <section id="audit-vs-sprint" className="mt-14 md:mt-20">
          <h2 className={h2Class}>How is this different from the Conversion Fix Sprint?</h2>
          <p className={bodyClass}>
            The audit is the diagnosis as a deliverable: the full teardown
            report, ranked fix list, yours to keep — for the founder who
            wants to know exactly what&rsquo;s wrong before deciding who
            fixes it. The Conversion Fix Sprint is the audit plus the fix
            crew: I implement the highest-impact findings on your store over
            seven days and verify them.
          </p>
          <p className={bodyClass}>
            If the question is &ldquo;what exactly is wrong with my
            store,&rdquo; the audit is the right buy. If it&rsquo;s
            &ldquo;fix it for me,&rdquo; read my{" "}
            <Link href="/shopify-cro-consultant" className="text-[var(--accent)] underline underline-offset-4">
              Shopify CRO consulting
            </Link>{" "}
            page. And if the question is bigger — who should run our
            ecommerce growth end to end — my{" "}
            <Link href="/ecommerce-growth-consultant" className="text-[var(--accent)] underline underline-offset-4">
              ecommerce growth consultant
            </Link>{" "}
            page is the one.
          </p>
        </section>

        {/* 8 — Proof */}
        <section id="proof" className="mt-14 md:mt-20">
          <h2 className={h2Class}>Proof</h2>
          <p className={bodyClass}>
            Honest answer first: I don&rsquo;t have client before-and-afters
            to show you yet — and I&rsquo;d rather tell you that than invent
            some.
          </p>
          <p className={bodyClass}>
            What I can show you is how I audit. In independent store reviews
            I&rsquo;ve published, the same patterns keep appearing: no
            delivery or returns information near the buy button, trust
            signals sitting pages away from the purchase, shipping costs
            revealed only at checkout, variant selectors with no stock
            indication. That is the lens a teardown brings to your store —
            and you can see the builds behind it in{" "}
            <Link href="/portfolio" className="text-[var(--accent)] underline underline-offset-4">
              my portfolio
            </Link>
            .
          </p>
          {/* [PROOF NEEDED]: client before/after screenshots, metric snapshots,
              or confirmed quotes — to be added here when available. Never invent. */}
        </section>

        {/* 9 — Why me */}
        <section id="why-me" className="mt-14 md:mt-20">
          <h2 className={h2Class}>Why work with me instead of an audit agency</h2>
          <ul className={listClass}>
            <li>
              — <span className="font-medium text-[var(--text)]">One senior operator does the teardown.</span>{" "}
              Not a junior analyst, not an automated report generator. I walk
              your store myself, and I write the findings myself.
            </li>
            <li>
              — <span className="font-medium text-[var(--text)]">The same 13-area discipline, every time.</span>{" "}
              The audit isn&rsquo;t improvised per store — it&rsquo;s the
              same rigorous checklist I use on every review, so nothing gets
              skipped.
            </li>
            <li>
              — <span className="font-medium text-[var(--text)]">The journey, not just the theme.</span>{" "}
              Shopify design and development, ecommerce UX, and Meta ads in
              one background — so the audit covers ad-to-checkout
              consistency, not just what the theme looks like.
            </li>
            <li>
              — <span className="font-medium text-[var(--text)]">Fixed price, honest scope.</span>{" "}
              $750, seven days, a defined deliverable — and a public
              background you can check: my work on this site, my code on{" "}
              <a
                href="https://github.com/saifalimughal32"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)] underline underline-offset-4"
              >
                GitHub
              </a>
              , and my profile on{" "}
              <a
                href={site.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)] underline underline-offset-4"
              >
                LinkedIn
              </a>
              . Nothing to hide behind.
            </li>
          </ul>
        </section>

        {/* 10 — FAQs */}
        <section id="faq" className="mt-14 md:mt-20">
          <h2 className={h2Class}>Questions founders ask</h2>
          <div className="mt-6 space-y-8">
            <div>
              <h3 className="font-general text-lg font-medium text-[var(--text)]">
                How is a UX audit different from the Conversion Fix Sprint?
              </h3>
              <p className={bodyClass}>
                The audit is the diagnosis as a report you keep: a
                teardown-style review of your whole store, annotated
                screenshots, and every finding ranked by revenue impact. The{" "}
                <Link href="/shopify-cro-consultant" className="text-[var(--accent)] underline underline-offset-4">
                  Shopify Conversion Fix Sprint
                </Link>{" "}
                adds implementation and verification on top — I ship the
                highest-impact fixes on your store over seven days. If you
                searched for a shopify cro audit, this page is it: the expert
                teardown. The sprint is the teardown plus the fixes.
              </p>
            </div>
            <div>
              <h3 className="font-general text-lg font-medium text-[var(--text)]">
                What exactly does the UX audit report include?
              </h3>
              <p className={bodyClass}>
                A written teardown report. Your store is reviewed across 13
                areas — homepage, navigation, collections, product page
                messaging, images and video, pricing and offer, reviews and
                trust, delivery and returns, variants and purchase controls,
                mobile, cart, checkout, and ads and landing-page consistency.
                Every finding comes with an annotated screenshot, an
                explanation of why it costs sales, and the concrete fix —
                ranked by revenue impact, not vague advice.
              </p>
            </div>
            <div>
              <h3 className="font-general text-lg font-medium text-[var(--text)]">
                Can I see a sample audit report before I book?
              </h3>
              <p className={bodyClass}>
                Yes &mdash; the methodology demos on the case studies page are
                the closest public equivalent: a public storefront walked
                through the same 13 areas, with findings ranked the same way.
                A paid audit report is the same format pointed at your store,
                with annotated screenshots of your pages and a fix list your
                team can implement.
              </p>
            </div>
            <div>
              <h3 className="font-general text-lg font-medium text-[var(--text)]">
                How much does the audit cost?
              </h3>
              <p className={bodyClass}>
                $750, fixed price, for one store. The report is yours to keep
                no matter what you do next — implement it in-house, hand it
                to your team, or roll it into the sprint.
              </p>
            </div>
            <div>
              <h3 className="font-general text-lg font-medium text-[var(--text)]">
                How long does the UX audit take?
              </h3>
              <p className={bodyClass}>
                The audit is delivered within seven days of kickoff: intake,
                the full teardown, ranking every finding by impact, and the
                written report.
              </p>
            </div>
            <div>
              <h3 className="font-general text-lg font-medium text-[var(--text)]">
                Do you need access to my store?
              </h3>
              <p className={bodyClass}>
                For the UX audit: no store access needed. The teardown is
                done the way a buyer does it — no collaborator access
                required. Read-only analytics access helps
                me see where buyers actually drop off, but it isn&rsquo;t
                required; the audit stands on the expert review alone.
              </p>
            </div>
            <div>
              <h3 className="font-general text-lg font-medium text-[var(--text)]">
                Will the audit just tell me to redesign?
              </h3>
              <p className={bodyClass}>
                No. The audit finds fixes inside your existing theme and
                design language. If something genuinely needs a rebuild,
                I&rsquo;ll say so with reasons — but a redesign is never the
                default recommendation.
              </p>
            </div>
            <div>
              <h3 className="font-general text-lg font-medium text-[var(--text)]">
                What do I do with the report after?
              </h3>
              <p className={bodyClass}>
                Whatever you want. Implement the fixes yourself, hand the
                report to your developer or team, or book the Conversion Fix
                Sprint and have me implement the highest-impact items and
                verify them. The report doesn&rsquo;t expire and it
                doesn&rsquo;t come with a sales pitch attached.
              </p>
            </div>
            <div>
              <h3 className="font-general text-lg font-medium text-[var(--text)]">
                How do you decide what to fix first?
              </h3>
              <p className={bodyClass}>
                By expected revenue impact — never by how the site looks.
                P1 findings are frictions at the purchase decision that
                touch most buyers: hidden shipping costs near the buy
                button, missing trust signals where payment happens. P2
                findings stall buyers on high-traffic pages before they
                reach the decision. Visual polish sits at P3. The report
                opens with the P1 list, so the first page is where the
                money is.
              </p>
            </div>
            <div>
              <h3 className="font-general text-lg font-medium text-[var(--text)]">
                What is an ecommerce UX audit?
              </h3>
              <p className={bodyClass}>
                A systematic, expert review of how real buyers move through
                your store — homepage, navigation, collections, product pages,
                cart and checkout — done the way a buyer does it. It pinpoints
                the exact frictions that cost sales, ranks every finding by
                expected revenue impact, and delivers a written report with
                annotated screenshots and concrete fixes you can implement
                yourself or hand to your team.
              </p>
            </div>
            <div>
              <h3 className="font-general text-lg font-medium text-[var(--text)]">
                How do I know if my store needs a UX audit?
              </h3>
              <p className={bodyClass}>
                Three signals: traffic with real intent converts far below
                what you&rsquo;d expect, your landing pages bounce fast, or
                you redesigned and conversions stayed flat. If buyers reach
                the product page and leave, or carts stall around shipping,
                trust and purchase details, the store has friction worth a
                teardown before you spend more on traffic.
              </p>
            </div>
          </div>
        </section>

        {/* 11 — Closing CTA */}
        <section id="book" className="mt-14 md:mt-20">
          <h2 className={h2Class}>Get the teardown</h2>
          <p className={bodyClass}>
            Book a fit call. Send me your store URL and tell me what
            you&rsquo;ve noticed — I&rsquo;ll tell you honestly whether an
            audit will move the needle for you. If it won&rsquo;t, I&rsquo;ll
            say so.
          </p>
          <p className={bodyClass}>
            Running paid traffic to a landing page that leaks clicks? Read my{" "}
            <Link href="/landing-page-optimization" className="text-[var(--accent)] underline underline-offset-4">
              landing page optimization
            </Link>{" "}
            page — the ad-to-page handoff, rebuilt to convert.
          </p>
          <p className={bodyClass}>
            Want to see the audit format before you book? The{" "}
<Link href="/case-studies" className="text-[var(--accent)] underline underline-offset-4">
              case studies
            </Link>{" "}
            page shows the teardown methodology on a public storefront —
            every finding ranked by revenue impact.
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
