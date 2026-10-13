import type { Metadata } from "next";
import Link from "next/link";
import { SharedFooter } from "@/components/SharedFooter";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Landing Page Optimization for Shopify Brands | Saif Ali",
  description:
    "Landing page optimization for Shopify brands: message, offer and creative aligned with your paid traffic. Audited, rewritten, rebuilt. $750 fixed.",
  alternates: {
    canonical: "https://www.saifali.site/landing-page-optimization",
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
  "@id": "https://www.saifali.site/landing-page-optimization#service",
  name: "Landing Page Optimization",
  description:
    "Landing page optimization for Shopify brands — the paid-traffic destination page reviewed against your live ads and rebuilt so message, offer, and creative align from click to CTA.",
  url: "https://www.saifali.site/landing-page-optimization",
  provider: { "@id": "https://www.saifali.site/#person" },
  areaServed: ["US", "GB"],
  offers: {
    "@type": "Offer",
    name: "Landing Page Optimization",
    price: "750",
    priceCurrency: "USD",
    url: "https://www.saifali.site/book",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.saifali.site/landing-page-optimization#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "How is landing page optimization different from the Conversion Fix Sprint?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This engagement rebuilds one page: the destination your paid traffic hits — its message, offer, and creative aligned with your ads. The Shopify Conversion Fix Sprint is the whole store: the 13-area teardown with the highest-impact fixes shipped across product pages, cart, and checkout. If the paid-traffic page is where your clicks are lost, start here; if the whole store needs work, the sprint is the sharper fit.",
      },
    },
    {
      "@type": "Question",
      name: "What exactly do I get?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "$750, fixed price. A teardown of your landing page against your live ads — message match, offer clarity, creative consistency, and the mobile path to the CTA — then a full rewrite of the page copy and the page rebuilt inside your existing theme or builder, delivered within seven days of kickoff, with before-and-after notes on what changed and why.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work on my product pages or the rest of the store too?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not in this engagement. The scope is the landing page your ads point to, plus the click path from the ad to the CTA. If the whole store needs the same treatment, the Conversion Fix Sprint covers it — and the before-and-after notes from this engagement give your team the pattern to repeat on other pages.",
      },
    },
    {
      "@type": "Question",
      name: "What do you need from me to start?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The landing page URL, the ads currently pointing at it, and your offer details — pricing, shipping, guarantees. Read access to the ad account and to your analytics helps me match the message to the audience, but the work doesn't stall without it.",
      },
    },
    {
      "@type": "Question",
      name: "Will you redesign my landing page?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The rebuild works inside your existing theme or page builder and your design language — restructured sections, rewritten copy, sharper hierarchy on mobile and desktop. A full redesign is a different project, and I'll tell you honestly if that's what you need.",
      },
    },
    {
      "@type": "Question",
      name: "Do you create the ad creative or manage the ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. I don't run ad accounts or produce creative. I review your live ads so the landing page matches them — the alignment is the whole point of the engagement, and it has to start from what your ads actually promise.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Seven days from kickoff: intake, the teardown against your live ads, the rewrite and rebuild, then a before-and-after verification on mobile and desktop.",
      },
    },
    {
      "@type": "Question",
      name: "How do I know the problem is my landing page and not my ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Split the funnel at the click. If your click-through rate is healthy but the page barely converts, the ad kept its promise and the page broke it — that is the landing page. If click-through itself is weak, the ad's promise is not landing — that is the ad account. I start every engagement by reading both numbers, because rebuilding a page when the ad is the problem (or reworking ads when the page is the problem) just moves the loss around. If the numbers say the page is not the leak, I will tell you before you pay.",
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

export default function LandingPageOptimizationPage() {
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
            / Landing Page Optimization
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
            Landing Page Optimization
            <br />
            for{" "}
            <em className="not-italic accent" style={serifItalic}>
              Shopify Brands
            </em>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">
            Your ads buy the click. Your landing page has to close it —
            message, offer, and creative aligned from the ad to the buy
            button.
          </p>
          <p className={bodyClass + " max-w-2xl"}>
            Landing page optimization is the practice of making the page your
            paid traffic lands on convert more of its clicks: matching the
            page&rsquo;s message to the ad that brought the visitor, framing
            the offer so the value is obvious in seconds, and clearing the
            path to the buy button on mobile and desktop. For Shopify brands
            running Meta ads, the landing page is usually a collection page,
            a product page, or a dedicated page — and it is where most of the
            ad budget is quietly lost.
          </p>
          <CtaRow />
        </section>

        {/* 1 — The problem */}
        <section id="problem" className="mt-14 md:mt-20">
          <h2 className={h2Class}>Your ads are working. Your landing page is not.</h2>
          <p className={bodyClass}>
            The click costs the same whether the page converts or not. When a
            founder runs Meta ads to a Shopify store, the failure is rarely
            the ad — the ad is doing its job, people click. The failure is
            the handoff: the ad promises one thing and the page says another.
            The headline answers a question nobody asked. The offer sits three
            scrolls down. The buy button hides behind a gallery the visitor
            didn&rsquo;t come to browse. So the click bounces — and the
            founder blames the ad, raises the budget, changes the creative —
            when the money is being lost on the page.
          </p>
          <p className={bodyClass}>
            Landing page optimization exists for exactly this: one page, the
            destination your paid traffic already hits, rebuilt so the
            message matches the ad, the offer is unmissable, and the path to
            purchase is short. Not a new ad account. Not a redesign. The page
            your money lands on, made worth landing on.
          </p>
        </section>

        {/* 2 — The ad-math thesis */}
        <section id="ad-math" className="mt-14 md:mt-20">
          <h2 className={h2Class}>Why profitable Meta ads can still produce poor ecommerce results</h2>
          <p className={bodyClass}>
            An ad can look profitable and still lose money. Click-through
            above benchmark, cost per click under control, creative approved
            and scaling — and the store barely moves. The usual response is
            to fix the ads: new angles, new hooks, broader targeting, more
            budget. Sometimes that works. Often it just buys more of the
            same expensive clicks, because the leak was never in the ad
            account. It was on the page the clicks land on.
          </p>
          <p className={bodyClass}>
            The math is unforgiving. If a page turns one in a hundred clicks
            into customers when it could turn three, most of every extra ad
            dollar is waste before it is spent. Fixing the page multiplies
            every ad dollar already being bought — new creative cannot do
            that, because new creative lands on the same page.
          </p>
          <p className={bodyClass}>
            <span className="font-medium text-[var(--text)]">
              How to tell which one is leaking:
            </span>{" "}
            read the two numbers separately. Healthy click-through with weak
            conversion means the ad kept its promise and the page broke it —
            that is a landing page problem. Weak click-through means the
            promise itself is not landing — that is an ad problem. Most
            founders optimize the wrong one, because the ad account is where
            the dashboards are and the page is where nobody looks.
          </p>
          <p className={bodyClass}>
            <span className="font-medium text-[var(--text)]">
              What a finding looks like
            </span>{" "}
            (illustrative example, not a client result):
          </p>
          <ul className={listClass}>
            <li>
              — <span className="font-medium text-[var(--text)]">Problem.</span>{" "}
              The hero headline does not repeat the ad&rsquo;s promise.
            </li>
            <li>
              — <span className="font-medium text-[var(--text)]">Evidence.</span>{" "}
              The ad&rsquo;s first line offers free shipping over $50; the
              landing page hero shows the brand name and a lifestyle image,
              with no mention of shipping until checkout.
            </li>
            <li>
              — <span className="font-medium text-[var(--text)]">Impact.</span>{" "}
              The visitor cannot confirm they are in the right place in the
              first seconds, so a share of paid clicks leaves before
              scrolling.
            </li>
            <li>
              — <span className="font-medium text-[var(--text)]">Fix.</span>{" "}
              Mirror the ad&rsquo;s opening promise in the hero&rsquo;s first
              line, and restate the offer above the fold.
            </li>
            <li>
              — <span className="font-medium text-[var(--text)]">Priority.</span>{" "}
              P1 — it touches every paid click the page receives.
            </li>
          </ul>
        </section>

        {/* 3 — Who this is for */}
        <section id="who-its-for" className="mt-14 md:mt-20">
          <h2 className={h2Class}>Who this is for</h2>
          <ul className={listClass}>
            <li>— A US or UK Shopify brand running paid traffic — Meta ads especially — to a landing, collection, or product page.</li>
            <li>— You&rsquo;re spending real money on clicks and the page isn&rsquo;t pulling its weight: decent click-through, weak conversion.</li>
            <li>— You want the page your ads point to rebuilt to convert — not a lecture on your ad account.</li>
          </ul>
          <p className={bodyClass}>
            <span className="font-medium text-[var(--text)]">Not a fit:</span>{" "}
            brands with no paid traffic yet (for organic-first stores, the
            store-wide sprint or the audit is the sharper start), anyone
            wanting ad campaign management or new ad creative (I don&rsquo;t
            run ads or shoot creative), and anyone who wants guaranteed
            conversion rates — I won&rsquo;t promise those. And if the
            problem is the whole store rather than one page, my{" "}
            <Link href="/shopify-cro-consultant" className="text-[var(--accent)] underline underline-offset-4">
              Shopify CRO consulting
            </Link>{" "}
            page — the Conversion Fix Sprint — is the sharper fit.
          </p>
        </section>

        {/* 4 — AEO definition block */}
        <section id="what-it-is" className="mt-14 md:mt-20">
          <h2 className={h2Class}>What does landing page optimization actually involve?</h2>
          <p className={bodyClass}>
            <span className="font-medium text-[var(--text)]">
              Landing page optimization is the review and rebuild of a single
              destination page — the one your paid traffic lands on — so its
              message, offer, and creative line up with the ads sending the
              clicks, and the path from arrival to purchase is short and
              obvious. The deliverable is a rebuilt page, not a report and
              not a slide deck of suggestions.
            </span>
          </p>
          <p className={bodyClass}>
            That is different from store-wide CRO: this is one page,
            ad-driven, judged against your live ads. Different from a
            redesign: the rebuild works inside your existing theme or page
            builder. And different from a copywriter&rsquo;s rewrite: the
            work covers structure, hierarchy, trust placement, and the mobile
            layout — because a great headline can&rsquo;t save a page whose
            buy button is three scrolls away.
          </p>
          <p className={bodyClass}>
            What it is not: not ad management, not new ad creative, not a
            template swap, and not guaranteed lift percentages.
          </p>
        </section>

        {/* 5 — Method */}
        <section id="method" className="mt-14 md:mt-20">
          <h2 className={h2Class}>My method: message, offer, creative — aligned</h2>
          <p className={bodyClass}>
            Every landing page engagement runs the same three-part alignment
            — because a click converts when the page keeps the ad&rsquo;s
            promise, states the value fast, and looks like it belongs to the
            ad.
          </p>
          <ul className={listClass}>
            <li>
              — <span className="font-medium text-[var(--text)]">Message match.</span>{" "}
              The headline and first screen answer the ad&rsquo;s promise —
              the same words the clicker just read, the same problem, the
              same outcome. No bait-and-switch, no generic brand hero.
            </li>
            <li>
              — <span className="font-medium text-[var(--text)]">Offer framing.</span>{" "}
              The value stated in seconds: what they get, what it costs, why
              now — above the fold, and repeated at every scroll depth where
              attention fades.
            </li>
            <li>
              — <span className="font-medium text-[var(--text)]">Creative consistency.</span>{" "}
              The page looks like it belongs to the ad — same product, same
              visual language, same proof — so the visitor never wonders
              whether they landed in the wrong place.
            </li>
          </ul>
          <p className={bodyClass}>
            All of it reviewed mobile-first, because most ad clicks arrive on
            a phone: the full click path from ad to CTA, trust signals placed
            where attention actually is rather than where the template puts
            them. You can see the range of store builds behind that lens in{" "}
            <Link href="/portfolio" className="text-[var(--accent)] underline underline-offset-4">
              my portfolio
            </Link>
            .
          </p>
        </section>

        {/* 6 — The offer */}
        <section id="offer" className="mt-14 md:mt-20">
          <h2 className={h2Class}>What&rsquo;s included: the landing page engagement</h2>
          <p className={bodyClass}>
            <span className="font-medium text-[var(--text)]">
              $750, fixed price. One landing page — the ad-driven destination,
              whether it&rsquo;s a landing page, collection page, or product
              page, agreed at intake. Rebuilt within seven days of kickoff.
            </span>
          </p>
          <ul className={listClass}>
            <li>
              — <span className="font-medium text-[var(--text)]">Teardown against your live ads:</span>{" "}
              the page reviewed against the ads actually pointing at it —
              message match, offer clarity, creative consistency, and the
              mobile path to the CTA, every mismatch documented.
            </li>
            <li>
              — <span className="font-medium text-[var(--text)]">Rewrite:</span>{" "}
              headline, subhead, offer framing, and CTA copy — in your
              brand&rsquo;s voice, not a template&rsquo;s.
            </li>
            <li>
              — <span className="font-medium text-[var(--text)]">Rebuild:</span>{" "}
              the page restructured inside your existing theme or builder —
              hierarchy, sections, trust placement, mobile layout.
            </li>
            <li>
              — <span className="font-medium text-[var(--text)]">Before-and-after notes:</span>{" "}
              what changed and why, so your team can repeat the pattern on
              your other pages.
            </li>
          </ul>
          <p className={bodyClass}>
            <span className="font-medium text-[var(--text)]">Not included:</span>{" "}
            ad campaign management, new ad creative or photography, and
            store-wide changes beyond the landing page.
          </p>
          <p className={bodyClass}>
            <span className="font-medium text-[var(--text)]">After the engagement:</span>{" "}
            run your ads to the rebuilt page. If the whole store needs the
            same treatment, the Conversion Fix Sprint is the next step — and
            the notes from this engagement become its starting point.
          </p>
          <CtaRow label="Optimize my landing page" />
        </section>

        {/* 7 — Process */}
        <section id="process" className="mt-14 md:mt-20">
          <h2 className={h2Class}>How the engagement works</h2>
          <ol className={listClass + " list-none"}>
            <li>
              <span className="font-medium text-[var(--text)]">1. Intake (day 1).</span>{" "}
              The landing page URL, the ads pointing at it, and your offer
              details — pricing, shipping, guarantees. Read access to the ad
              account helps; the work doesn&rsquo;t stall without it.
            </li>
            <li>
              <span className="font-medium text-[var(--text)]">2. Teardown (days 2–3).</span>{" "}
              The page reviewed against your live ads — every mismatch
              between the ad&rsquo;s promise and the page documented.
            </li>
            <li>
              <span className="font-medium text-[var(--text)]">3. Rewrite and rebuild (days 4–6).</span>{" "}
              New copy, restructured sections, sharper mobile layout —
              shipped inside your existing theme or builder.
            </li>
            <li>
              <span className="font-medium text-[var(--text)]">4. Verify (day 7).</span>{" "}
              Before-and-after check on mobile and desktop, plus the handoff
              notes for your team.
            </li>
          </ol>
        </section>

        {/* 8 — Anti-cannibalization */}
        <section id="vs-others" className="mt-14 md:mt-20">
          <h2 className={h2Class}>How is this different from the Conversion Fix Sprint?</h2>
          <p className={bodyClass}>
            This page is about one page: the destination your paid traffic
            hits. Its message, offer, and creative get aligned with your ads
            and the page gets rebuilt — in seven days. The Conversion Fix
            Sprint is the whole store: the 13-area teardown with the
            highest-impact fixes shipped across product pages, cart, and
            checkout.
          </p>
          <p className={bodyClass}>
            And the rest of the shelf, so you land on the right page: the{" "}
            <Link href="/ecommerce-ux-audit" className="text-[var(--accent)] underline underline-offset-4">
              ecommerce UX audit
            </Link>{" "}
            is the diagnosis as a report — the full-store teardown with no
            implementation.{" "}
            <Link href="/ecommerce-growth-consultant" className="text-[var(--accent)] underline underline-offset-4">
              Ecommerce growth consulting
            </Link>{" "}
            is the ongoing ownership of the whole line, ads to repeat
            purchase. If the question is &ldquo;my ads get clicks but the
            page doesn&rsquo;t convert,&rdquo; this page is the answer. If
            it&rsquo;s &ldquo;fix my whole store,&rdquo; read my{" "}
            <Link href="/shopify-cro-consultant" className="text-[var(--accent)] underline underline-offset-4">
              Shopify CRO consulting
            </Link>{" "}
            page.
          </p>
        </section>

        {/* 9 — Proof */}
        <section id="proof" className="mt-14 md:mt-20">
          <h2 className={h2Class}>Proof</h2>
          <p className={bodyClass}>
            Honest answer first: I don&rsquo;t have client before-and-afters
            to show you yet — and I&rsquo;d rather tell you that than invent
            some.
          </p>
          <p className={bodyClass}>
            What I can show you is what I look for. In independent store
            reviews I&rsquo;ve published, the same landing-page patterns keep
            costing clicks: a headline that repeats the brand name instead of
            the ad&rsquo;s promise; the offer buried three sections down
            while the buy button sits alone at the top; trust signals —
            reviews, guarantees — placed far from where the click lands.
            (Illustrative example: an ad promising free shipping over $50
            that lands on a page which never mentions shipping until
            checkout.) That is the lens this engagement brings to your page —
            and you can see the builds behind it in{" "}
            <Link href="/portfolio" className="text-[var(--accent)] underline underline-offset-4">
              my portfolio
            </Link>
            .
          </p>
          {/* [PROOF NEEDED]: client before/after screenshots, metric snapshots,
              or confirmed quotes — to be added here when available. Never invent. */}
        </section>

        {/* 10 — Why me */}
        <section id="why-me" className="mt-14 md:mt-20">
          <h2 className={h2Class}>Why work with me on your landing page</h2>
          <ul className={listClass}>
            <li>
              — <span className="font-medium text-[var(--text)]">One senior operator, end to end.</span>{" "}
              I review the ads, write the copy, and rebuild the page myself.
              No handoffs between a copywriter, a designer, and a developer
              who never saw your ads.
            </li>
            <li>
              — <span className="font-medium text-[var(--text)]">Ads and pages in one background.</span>{" "}
              Meta ads, landing pages, Shopify design and development — so
              the alignment between ad and page isn&rsquo;t theoretical, and
              the rebuild doesn&rsquo;t break the theme.
            </li>
            <li>
              — <span className="font-medium text-[var(--text)]">Works inside your theme.</span>{" "}
              No rebuild, no new page builder, no plugin stack. Your design
              language, sharper — not someone else&rsquo;s template.
            </li>
            <li>
              — <span className="font-medium text-[var(--text)]">Fixed price, honest scope.</span>{" "}
              $750, seven days, one page — and a public background you can
              check: my work on this site, my code on{" "}
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

        {/* 11 — FAQs */}
        <section id="faq" className="mt-14 md:mt-20">
          <h2 className={h2Class}>Questions founders ask</h2>
          <div className="mt-6 space-y-8">
            <div>
              <h3 className="font-general text-lg font-medium text-[var(--text)]">
                How is landing page optimization different from the Conversion Fix Sprint?
              </h3>
              <p className={bodyClass}>
                This engagement rebuilds one page: the destination your paid
                traffic hits — its message, offer, and creative aligned with
                your ads. The{" "}
                <Link href="/shopify-cro-consultant" className="text-[var(--accent)] underline underline-offset-4">
                  Shopify Conversion Fix Sprint
                </Link>{" "}
                is the whole store: the 13-area teardown with the
                highest-impact fixes shipped across product pages, cart, and
                checkout. If the paid-traffic page is where your clicks are
                lost, start here.
              </p>
            </div>
            <div>
              <h3 className="font-general text-lg font-medium text-[var(--text)]">
                What exactly do I get?
              </h3>
              <p className={bodyClass}>
                $750, fixed price. A teardown of your landing page against
                your live ads — message match, offer clarity, creative
                consistency, and the mobile path to the CTA — then a full
                rewrite of the page copy and the page rebuilt inside your
                existing theme or builder, delivered within seven days of
                kickoff, with before-and-after notes on what changed and why.
              </p>
            </div>
            <div>
              <h3 className="font-general text-lg font-medium text-[var(--text)]">
                Do you work on my product pages or the rest of the store too?
              </h3>
              <p className={bodyClass}>
                Not in this engagement. The scope is the landing page your ads
                point to, plus the click path from the ad to the CTA. If the
                whole store needs the same treatment, the Conversion Fix
                Sprint covers it — and the before-and-after notes from this
                engagement give your team the pattern to repeat on other
                pages.
              </p>
            </div>
            <div>
              <h3 className="font-general text-lg font-medium text-[var(--text)]">
                What do you need from me to start?
              </h3>
              <p className={bodyClass}>
                The landing page URL, the ads currently pointing at it, and
                your offer details — pricing, shipping, guarantees. Read
                access to the ad account and to your analytics helps me match
                the message to the audience, but the work doesn&rsquo;t stall
                without it.
              </p>
            </div>
            <div>
              <h3 className="font-general text-lg font-medium text-[var(--text)]">
                Will you redesign my landing page?
              </h3>
              <p className={bodyClass}>
                No. The rebuild works inside your existing theme or page
                builder and your design language — restructured sections,
                rewritten copy, sharper hierarchy on mobile and desktop. A
                full redesign is a different project, and I&rsquo;ll tell you
                honestly if that&rsquo;s what you need.
              </p>
            </div>
            <div>
              <h3 className="font-general text-lg font-medium text-[var(--text)]">
                Do you create the ad creative or manage the ads?
              </h3>
              <p className={bodyClass}>
                No. I don&rsquo;t run ad accounts or produce creative. I
                review your live ads so the landing page matches them — the
                alignment is the whole point of the engagement, and it has to
                start from what your ads actually promise.
              </p>
            </div>
            <div>
              <h3 className="font-general text-lg font-medium text-[var(--text)]">
                How long does it take?
              </h3>
              <p className={bodyClass}>
                Seven days from kickoff: intake, the teardown against your
                live ads, the rewrite and rebuild, then a before-and-after
                verification on mobile and desktop.
              </p>
            </div>
            <div>
              <h3 className="font-general text-lg font-medium text-[var(--text)]">
                How do I know the problem is my landing page and not my ads?
              </h3>
              <p className={bodyClass}>
                Split the funnel at the click. If your click-through rate is
                healthy but the page barely converts, the ad kept its promise
                and the page broke it — that is the landing page. If
                click-through itself is weak, the ad&rsquo;s promise is not
                landing — that is the ad account. I start every engagement by
                reading both numbers, because rebuilding a page when the ad
                is the problem (or reworking ads when the page is the
                problem) just moves the loss around. If the numbers say the
                page is not the leak, I will tell you before you pay.
              </p>
            </div>
          </div>
        </section>

        {/* 12 — Closing CTA */}
        <section id="book" className="mt-14 md:mt-20">
          <h2 className={h2Class}>Make the click worth it</h2>
          <p className={bodyClass}>
            Book a fit call. Send me your landing page and the ads pointing
            at it — I&rsquo;ll tell you honestly whether the page is the
            leak. If it isn&rsquo;t, I&rsquo;ll say so.
          </p>
          <p className={bodyClass}>
            Wondering what a full-store teardown covers beyond one page?
            The{" "}
<Link href="/case-studies" className="text-[var(--accent)] underline underline-offset-4">
              case studies
            </Link>{" "}
            page walks through the 13-area methodology I use on every
            engagement.
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
