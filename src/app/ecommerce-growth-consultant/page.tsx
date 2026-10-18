import type { Metadata } from "next";
import Link from "next/link";
import { SharedFooter } from "@/components/SharedFooter";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Ecommerce Growth Consultant for DTC Brands | Saif Ali",
  description:
    "Ecommerce growth consultant for DTC brands — Meta ads, landing pages, Shopify and checkout in one growth line. Book the $750 Conversion Fix Sprint.",
  alternates: {
    canonical: "https://www.saifali.site/ecommerce-growth-consultant",
  },
  openGraph: {
    title: "Ecommerce Growth Consultant for DTC Brands | Saif Ali",
    description:
      "Ecommerce growth consultant for DTC brands — Meta ads, landing pages, Shopify and checkout in one growth line. Book the $750 Conversion Fix Sprint.",
    url: "/ecommerce-growth-consultant",
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
    title: "Ecommerce Growth Consultant for DTC Brands | Saif Ali",
    description:
      "Ecommerce growth consultant for DTC brands — Meta ads, landing pages, Shopify and checkout in one growth line. Book the $750 Conversion Fix Sprint.",
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
  "@id": "https://www.saifali.site/ecommerce-growth-consultant#service",
  name: "Ecommerce Growth Consulting",
  description:
    "Full-journey growth consulting for DTC brands — Meta ads, landing pages, Shopify, and checkout in one growth line.",
  url: "https://www.saifali.site/ecommerce-growth-consultant",
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
  "@id": "https://www.saifali.site/ecommerce-growth-consultant#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "How is an ecommerce growth consultant different from a CRO consultant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A CRO consultant specializes in the store — product pages, cart, and checkout. I do that too, but a growth consultant owns the whole line: the ads that bring the traffic, the landing pages that receive it, and the store that converts it. If your only problem is the store, my Shopify CRO consulting page is the sharper fit.",
      },
    },
    {
      "@type": "Question",
      name: "How much does it cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every engagement starts with the Shopify Conversion Fix Sprint: $750, fixed price, seven days. Broader growth work after the sprint — landing-page builds, ongoing full-journey reviews — gets scoped and priced honestly once we've worked together, never before.",
      },
    },
    {
      "@type": "Question",
      name: "How long before I see results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The sprint ships in seven days: the audit, the ranked fixes, the implementation, and the verification. What happens after that depends on your traffic, your offer, and how fast you implement — I won't promise revenue timelines I can't control.",
      },
    },
    {
      "@type": "Question",
      name: "Do you run my ad campaigns?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. I don't manage ad accounts — what I do is review ad-to-landing-page consistency as part of the full journey, so the traffic you pay for lands somewhere that converts. Your media buyer keeps the account; I make sure the rest of the line doesn't waste the spend.",
      },
    },
    {
      "@type": "Question",
      name: "What do you need from me to start the sprint?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shopify collaborator access — I'll specify the exact permissions before you approve anything. Read-only access to your ad account so I can review the journey from the ad side, and GA4 read access if you have it. Mostly I need your time during the sprint: quick answers to quick questions.",
      },
    },
    {
      "@type": "Question",
      name: "How much traffic do I need before hiring a growth consultant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Enough to read decisions from. If you cannot tell whether a change moved sales because weeks pass with barely any buyers, the constraint is traffic, not the store — growth work can still find leaks, but you will not be able to measure the fix. Stores with steady ad or organic traffic get the most from this work.",
      },
    },
    {
      "@type": "Question",
      name: "Will you redesign my store?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No redesign. Fixes and builds work inside your existing theme and design language. If a visual change would genuinely move the number, I'll explain why and get your approval first.",
      },
    },
    {
      "@type": "Question",
      name: "What happens after the sprint — do you offer ongoing work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You get a handoff summary: what changed, why it changed, and what to watch next. If you want broader growth work afterward — landing pages, ongoing reviews across the whole line — we scope it together. No obligation, no retainer pitch baked in.",
      },
    },
    {
      "@type": "Question",
      name: "What is a bottleneck diagnosis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The first step of growth work: I walk your whole funnel as a buyer — ad to checkout, mobile and desktop — and find the single constraint costing you the most sales right now. Every engagement starts there, because fixing the bottleneck moves revenue and fixing everything at once hides what worked.",
      },
    },
    {
      "@type": "Question",
      name: "What does an ecommerce growth consultant do for a DTC brand?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An ecommerce growth consultant finds where a DTC brand's revenue leaks and fixes the highest-impact constraint first. That means reviewing the full customer journey — Meta ads, landing pages, product pages, cart, and checkout — diagnosing the bottleneck, then implementing fixes ranked by conversion impact. It's diagnosis plus execution across the whole line, not advice confined to one channel.",
      },
    },
    {
      "@type": "Question",
      name: "When should I hire an ecommerce growth consultant instead of an agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hire a growth consultant when your bottleneck is the journey between channels — your ads perform but the landing page drops, or the store converts but paid traffic bounces. Agencies optimize inside one silo; a consultant owns the seams. If you're early enough that one person can walk your whole funnel as a buyer and fix what matters most, that beats paying three specialists who never talk to each other.",
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

export default function EcommerceGrowthConsultantPage() {
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
        {/* Breadcrumb / back — mirrors the /shopify-cro-consultant page pattern */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <p className="font-hand text-base text-[var(--text-secondary)]">
            / Ecommerce Growth Consultant
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
            Ecommerce Growth Consultant
            <br />
            for{" "}
            <em className="not-italic accent" style={serifItalic}>
              DTC Brands
            </em>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">
            One person across your whole growth line — Meta ads, landing pages,
            and your Shopify store — so nothing leaks between them.
          </p>
          <p className={bodyClass + " max-w-2xl"}>
            An ecommerce growth consultant owns the full journey from first
            click to repeat purchase: the Meta ads that bring the traffic, the
            landing pages that receive it, your Shopify product pages, cart,
            checkout, and the post-purchase touchpoints that bring customers
            back. I audit and improve that whole line, so your traffic converts
            and your customers return.
          </p>
          <CtaRow />
        </section>

        {/* 1 — The problem */}
        <section id="problem" className="mt-14 md:mt-20">
          <h2 className={h2Class}>Your growth problem is not a traffic problem</h2>
          <p className={bodyClass}>
            You are already paying for traffic. Ads are running, people are
            clicking — and somewhere between the click and the order, most of
            them disappear. Each point in that line leaks a little: the landing
            page doesn&rsquo;t match the ad, the product page hides the shipping
            cost, the cart introduces doubt at exactly the wrong moment.
          </p>
          <p className={bodyClass}>
            The real problem is that each point is owned by someone different —
            or by nobody. Your media buyer stops at the ad. Your developer
            stops at the theme. Nobody owns the line. Growth stalls not
            because you need more traffic, but because the traffic you have
            keeps falling through gaps no one is watching.
          </p>
        </section>

        {/* 2 — Who this is for */}
        <section id="who-its-for" className="mt-14 md:mt-20">
          <h2 className={h2Class}>Who this is for</h2>
          <ul className={listClass}>
            <li>— A US or UK DTC brand in apparel, accessories, or home.</li>
            <li>— You are running paid traffic, Meta ads especially, and getting orders.</li>
            <li>— You want one person who can see the ads, the landing pages, and the store together.</li>
          </ul>
          <p className={bodyClass}>
            <span className="font-medium text-[var(--text)]">Not a fit:</span>{" "}
            pre-launch stores with no traffic data yet, anyone wanting a full
            rebrand, and anyone who needs guaranteed growth numbers — I will
            not promise those. And if your only problem is the store itself,
            my{" "}
            <Link href="/shopify-cro-consultant" className="text-[var(--accent)] underline underline-offset-4">
              Shopify CRO consulting
            </Link>{" "}
            page is the sharper fit.
          </p>
        </section>

        {/* 3 — AEO definition block */}
        <section id="what-it-is" className="mt-14 md:mt-20">
          <h2 className={h2Class}>What does an ecommerce growth consultant actually do?</h2>
          <p className={bodyClass}>
            <span className="font-medium text-[var(--text)]">
              An ecommerce growth consultant owns the full journey from first
              click to repeat purchase — auditing and improving Meta ads,
              landing pages, Shopify product pages, cart, checkout, and
              post-purchase touchpoints so traffic converts and customers come
              back.
            </span>
          </p>
          <p className={bodyClass}>
            That is different from hiring an agency: one senior operator does
            the audit and ships the fixes — no account manager relaying
            messages. Different from a media buyer: the work doesn&rsquo;t stop
            at the ad. And different from a CRO consultant: the work
            doesn&rsquo;t stop at the store.
          </p>
          <p className={bodyClass}>
            What it is not: not ad account management, not a redesign service,
            and not guaranteed lift percentages.
          </p>
        </section>

        {/* 4 — Method */}
        <section id="method" className="mt-14 md:mt-20">
          <h2 className={h2Class}>My method: one growth line, end to end</h2>
          <p className={bodyClass}>
            I treat your whole funnel as one thing: Meta ad → landing page →
            product page → cart → checkout → post-purchase. Reviewed as one
            line, because a sharper ad doesn&rsquo;t help a confusing landing
            page, and a clean store doesn&rsquo;t save a weak offer.
          </p>
          <p className={bodyClass}>
            That&rsquo;s only possible because my background covers the line:
            Meta ads, landing pages, Shopify design and development, ecommerce
            UX. Most people own one slice — ads <em>or</em> CRO <em>or</em> dev
            — and the slices don&rsquo;t talk to each other. You can see the
            range of that work in{" "}
            <Link href="/portfolio" className="text-[var(--accent)] underline underline-offset-4">
              my portfolio
            </Link>
            .
          </p>
        </section>

        {/* 4b — Full-journey thesis */}
        <section id="full-journey-thesis" className="mt-14 md:mt-20">
          <h2 className={h2Class}>Growth is a connected system</h2>
          <p className={bodyClass}>
            <span className="font-medium text-[var(--text)]">
              Your funnel is one line: the ad makes a promise, the click
              carries intent, the landing page receives it, the product page
              sells it, the offer and trust signals close it, and checkout
              collects it. Break any link and the whole line leaks.
            </span>
          </p>
          <p className={bodyClass}>
            That is why growth work that only fixes one stage keeps
            disappointing. A sharper ad pointed at a confusing landing page
            just buys more expensive bounces. A beautiful store with a weak
            offer converts a trickle of expensive traffic. A strong offer
            with no trust near the buy button stalls at the final step.
            Each stage multiplies the next — so the work has to diagnose
            the line in order, not the stage someone happens to sell.
          </p>
          <p className={bodyClass}>
            Most people own one slice: ads <em>or</em> landing pages{" "}
            <em>or</em> the store. The slices don&rsquo;t talk to each
            other — and the gaps between them are where your growth goes.
            One operator across the whole line is the thesis of this page:
            the handoffs get owned instead of dropped.
          </p>
        </section>

        {/* 4c — Bottleneck diagnosis */}
        <section id="bottleneck-diagnosis" className="mt-14 md:mt-20">
          <h2 className={h2Class}>Bottleneck diagnosis: find the one constraint</h2>
          <p className={bodyClass}>
            A line converts at the speed of its tightest constraint. The
            bottleneck is the single stage costing you the most sales right
            now — the message mismatch between ad and landing page, the
            product page that hides shipping, the checkout step where
            buyers stall. Every engagement starts by finding it, because
            fixing the bottleneck moves revenue and fixing everything at
            once hides what worked.
          </p>
          <ul className={listClass}>
            <li>
              — <span className="font-medium text-[var(--text)]">Walk the line as a buyer.</span>{" "}
              Ad to checkout, mobile and desktop. I document where buyers
              hesitate, stall, or drop — with screenshots from your actual
              pages.
            </li>
            <li>
              — <span className="font-medium text-[var(--text)]">Name the constraint.</span>{" "}
              Out of everything found, one stage is the binding constraint:
              the leak that, fixed, unlocks the most revenue. That is what
              gets fixed first.
            </li>
            <li>
              — <span className="font-medium text-[var(--text)]">Fix in order, verify after.</span>{" "}
              The bottleneck first, then the next. Every change checked
              after it ships — so you always know what moved the number.
            </li>
          </ul>
          <p className={bodyClass}>
            The ranked fix list you approve on day three of the sprint{" "}
            <em>is</em> this diagnosis written down: every finding ordered
            by expected revenue impact, bottleneck first, so the work
            starts where the money is.
          </p>
        </section>

        {/* deploy retrigger: Vercel missed the c115be4b push event; content unchanged */}

        {/* 5 — The sprint offer */}
        <section id="sprint" className="mt-14 md:mt-20">
          <h2 className={h2Class}>Where we start: the Shopify Conversion Fix Sprint</h2>
          <p className={bodyClass}>
            <span className="font-medium text-[var(--text)]">
              $750, fixed price. Seven days, start to finish.
            </span>
          </p>
          <ul className={listClass}>
            <li>
              — <span className="font-medium text-[var(--text)]">Full-journey audit:</span>{" "}
              your store reviewed across 13 areas, from homepage to ad and
              landing-page consistency — documented, with screenshots.
            </li>
            <li>
              — <span className="font-medium text-[var(--text)]">Fix list ranked by impact:</span>{" "}
              every finding ordered by expected revenue impact, not opinion.
              You see the list before anything changes.
            </li>
            <li>
              — <span className="font-medium text-[var(--text)]">Fixes implemented on your store:</span>{" "}
              the highest-impact items shipped directly: announcement bar and
              offer framing, landing pages, product pages, cart, and trust
              signals through checkout.
            </li>
            <li>
              — <span className="font-medium text-[var(--text)]">Before/after verification:</span>{" "}
              every change checked after it ships.
            </li>
            <li>
              — <span className="font-medium text-[var(--text)]">Handoff summary:</span>{" "}
              what changed, why it changed, and what to watch next.
            </li>
          </ul>
          <p className={bodyClass}>
            <span className="font-medium text-[var(--text)]">Not included:</span>{" "}
            ad campaign management, full redesign, custom app development.
          </p>
          <p className={bodyClass}>
            <span className="font-medium text-[var(--text)]">After the sprint:</span>{" "}
            if you want broader growth work — new landing pages, ongoing
            reviews across the whole line — we scope it together once the sprint
            is done. Nothing invented upfront, nothing sold before it earns its
            place.
          </p>
          <CtaRow label="Start the sprint" />
        </section>

        {/* 6 — Process */}
        <section id="process" className="mt-14 md:mt-20">
          <h2 className={h2Class}>How it works</h2>
          <ol className={listClass + " list-none"}>
            <li>
              <span className="font-medium text-[var(--text)]">1. Audit (days 1–2).</span>{" "}
              I walk the full journey the way a buyer does — ad to checkout,
              mobile and desktop — and document every leak with screenshots.
            </li>
            <li>
              <span className="font-medium text-[var(--text)]">2. Prioritize (day 3).</span>{" "}
              Fixes ranked by revenue impact. You approve the order before
              anything is touched.
            </li>
            <li>
              <span className="font-medium text-[var(--text)]">3. Implement (days 4–6).</span>{" "}
              The highest-impact fixes go live — on your store, and where it
              matters, on the pages your ads land on.
            </li>
            <li>
              <span className="font-medium text-[var(--text)]">4. Verify (day 7).</span>{" "}
              Before/after check on every change, plus a short handoff note so
              you know exactly what moved and why.
            </li>
          </ol>
        </section>

        {/* 7 — CRO vs growth consultant */}
        <section id="cro-vs-growth" className="mt-14 md:mt-20">
          <h2 className={h2Class}>How is this different from a CRO consultant?</h2>
          <p className={bodyClass}>
            A CRO consultant is a specialist in the store: product pages, cart,
            checkout. That&rsquo;s the right hire when the ads are working and
            the store is the bottleneck. An ecommerce growth consultant owns the
            whole line — ads, landing pages, and store — for a founder who
            doesn&rsquo;t want to coordinate three vendors and watch the gaps
            between them.
          </p>
          <p className={bodyClass}>
            If you know the problem is only in the store, the{" "}
            <Link href="/shopify-cro-consultant" className="text-[var(--accent)] underline underline-offset-4">
              Shopify Conversion Fix Sprint
            </Link>{" "}
            is the sharper starting point. If the question is bigger — who
            should run our ecommerce growth — you&rsquo;re reading the right page.
          </p>
        </section>

        {/* 8 — Proof */}
        <section id="proof" className="mt-14 md:mt-20">
          <h2 className={h2Class}>Proof</h2>
          <p className={bodyClass}>
            Honest answer first: I don&rsquo;t have client before-and-afters to
            show you yet — and I&rsquo;d rather tell you that than invent some.
          </p>
          <p className={bodyClass}>
            What I can show you is how I audit. In independent store reviews
            I&rsquo;ve published, the same leaks keep appearing between the
            parts: ads whose promises the landing page drops, product pages
            that hide shipping costs until checkout, reviews nowhere near the
            buy button, carts and checkout that give hesitant buyers no reason
            to finish. That is the lens I bring to your whole line &mdash; and
            you can see the builds behind it in{" "}
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
          <h2 className={h2Class}>Why work with me instead of an agency</h2>
          <ul className={listClass}>
            <li>
              — <span className="font-medium text-[var(--text)]">One senior operator.</span>{" "}
              I do the audit and I ship the fixes. No account manager, no
              relay, no overhead baked into the price.
            </li>
            <li>
              — <span className="font-medium text-[var(--text)]">One skill set across the line.</span>{" "}
              Meta ads, landing pages, Shopify development and design,
              ecommerce UX. Agencies split this across people who rarely talk
              to each other.
            </li>
            <li>
              — <span className="font-medium text-[var(--text)]">Fixed price to start.</span>{" "}
              $750, seven days, defined deliverables — and direct access to me
              throughout.
            </li>
            <li>
              — <span className="font-medium text-[var(--text)]">Public background.</span>{" "}
              My work is on this site, my code is on{" "}
              <a
                href="https://github.com/saifalimughal32"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)] underline underline-offset-4"
              >
                GitHub
              </a>
              , and my profile is on{" "}
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
                How is an ecommerce growth consultant different from a CRO consultant?
              </h3>
              <p className={bodyClass}>
                A CRO consultant specializes in the store — product pages, cart,
                and checkout. I do that too, but a growth consultant owns the
                whole line: the ads that bring the traffic, the landing pages
                that receive it, and the store that converts it. If your only
                problem is the store, my{" "}
                <Link href="/shopify-cro-consultant" className="text-[var(--accent)] underline underline-offset-4">
                  Shopify CRO consulting
                </Link>{" "}
                page is the sharper fit.
              </p>
            </div>
            <div>
              <h3 className="font-general text-lg font-medium text-[var(--text)]">
                How much does it cost?
              </h3>
              <p className={bodyClass}>
                Every engagement starts with the Shopify Conversion Fix Sprint:
                $750, fixed price, seven days. Broader growth work after the
                sprint — landing-page builds, ongoing full-journey reviews —
                gets scoped and priced honestly once we&rsquo;ve worked
                together, never before.
              </p>
            </div>
            <div>
              <h3 className="font-general text-lg font-medium text-[var(--text)]">
                How long before I see results?
              </h3>
              <p className={bodyClass}>
                The sprint ships in seven days: the audit, the ranked fixes,
                the implementation, and the verification. What happens after
                that depends on your traffic, your offer, and how fast you
                implement — I won&rsquo;t promise revenue timelines I
                can&rsquo;t control.
              </p>
            </div>
            <div>
              <h3 className="font-general text-lg font-medium text-[var(--text)]">
                Do you run my ad campaigns?
              </h3>
              <p className={bodyClass}>
                No. I don&rsquo;t manage ad accounts — what I do is review
                ad-to-landing-page consistency as part of the full journey, so
                the traffic you pay for lands somewhere that converts. Your
                media buyer keeps the account; I make sure the rest of the line
                doesn&rsquo;t waste the spend.
              </p>
            </div>
            <div>
              <h3 className="font-general text-lg font-medium text-[var(--text)]">
                What do you need from me to start the sprint?
              </h3>
              <p className={bodyClass}>
                Shopify collaborator access — I&rsquo;ll specify the exact
                permissions before you approve anything. Read-only access to
                your ad account so I can review the journey from the ad side,
                and GA4 read access if you have it. Mostly I need your time
                during the sprint: quick answers to quick questions.
              </p>
            </div>
            <div>
              <h3 className="font-general text-lg font-medium text-[var(--text)]">
                How much traffic do I need before hiring a growth consultant?
              </h3>
              <p className={bodyClass}>
                Enough to read decisions from. If you cannot tell whether a
                change moved sales because weeks pass with barely any buyers,
                the constraint is traffic, not the store &mdash; growth work
                can still find leaks, but you will not be able to measure the
                fix. Stores with steady ad or organic traffic get the most
                from this work.
              </p>
            </div>
            <div>
              <h3 className="font-general text-lg font-medium text-[var(--text)]">
                Will you redesign my store?
              </h3>
              <p className={bodyClass}>
                No redesign. Fixes and builds work inside your existing theme
                and design language. If a visual change would genuinely move
                the number, I&rsquo;ll explain why and get your approval first.
              </p>
            </div>
            <div>
              <h3 className="font-general text-lg font-medium text-[var(--text)]">
                What happens after the sprint — do you offer ongoing work?
              </h3>
              <p className={bodyClass}>
                You get a handoff summary: what changed, why it changed, and
                what to watch next. If you want broader growth work afterward —
                landing pages, ongoing reviews across the whole line — we scope
                it together. No obligation, no retainer pitch baked in.
              </p>
            </div>
            <div>
              <h3 className="font-general text-lg font-medium text-[var(--text)]">
                What is a bottleneck diagnosis?
              </h3>
              <p className={bodyClass}>
                The first step of growth work: I walk your whole funnel as a
                buyer — ad to checkout, mobile and desktop — and find the
                single constraint costing you the most sales right now. Every
                engagement starts there, because fixing the bottleneck moves
                revenue and fixing everything at once hides what worked.
              </p>
            </div>
            <div>
              <h3 className="font-general text-lg font-medium text-[var(--text)]">
                What does an ecommerce growth consultant do for a DTC brand?
              </h3>
              <p className={bodyClass}>
                An ecommerce growth consultant finds where a DTC brand&rsquo;s
                revenue leaks and fixes the highest-impact constraint first.
                That means reviewing the full customer journey — Meta ads,
                landing pages, product pages, cart, and checkout — diagnosing
                the bottleneck, then implementing fixes ranked by conversion
                impact. It&rsquo;s diagnosis plus execution across the whole
                line, not advice confined to one channel.
              </p>
            </div>
            <div>
              <h3 className="font-general text-lg font-medium text-[var(--text)]">
                When should I hire an ecommerce growth consultant instead of
                an agency?
              </h3>
              <p className={bodyClass}>
                Hire a growth consultant when your bottleneck is the journey
                between channels — your ads perform but the landing page
                drops, or the store converts but paid traffic bounces.
                Agencies optimize inside one silo; a consultant owns the
                seams. If you&rsquo;re early enough that one person can walk
                your whole funnel as a buyer and fix what matters most, that
                beats paying three specialists who never talk to each other.
              </p>
            </div>
          </div>
        </section>

        {/* 11 — Closing CTA */}
        <section id="book" className="mt-14 md:mt-20">
          <h2 className={h2Class}>Tell me about your brand</h2>
          <p className={bodyClass}>
            Book a fit call. Tell me about your brand and your traffic —
            I&rsquo;ll tell you honestly whether owning the whole line will
            move the needle for you. If it won&rsquo;t, I&rsquo;ll say so.
          </p>
          <p className={bodyClass}>
            Prefer to start with the diagnosis? My{" "}
            <Link href="/ecommerce-ux-audit" className="text-[var(--accent)] underline underline-offset-4">
              ecommerce UX audit
            </Link>{" "}
            is a teardown-style review of your store — the itemized report,
            ranked by impact, before anything changes.
          </p>
          <p className={bodyClass}>
            Want the page your ads point to rebuilt to convert? My{" "}
            <Link href="/landing-page-optimization" className="text-[var(--accent)] underline underline-offset-4">
              landing page optimization
            </Link>{" "}
            engagement aligns message, offer, and creative with your paid
            traffic.
          </p>
          <p className={bodyClass}>
            Want to see the full teardown in practice first? My{" "}
<Link href="/case-studies" className="text-[var(--accent)] underline underline-offset-4">
              case studies
            </Link>{" "}
            page documents the 13-area review behind every engagement —
            problem, evidence, impact, fix, priority. The checklist itself
            is published as the{" "}
            <Link href="/resources/shopify-conversion-framework" className="text-[var(--accent)] underline underline-offset-4">
              13-area Shopify conversion framework
            </Link>
            .
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


