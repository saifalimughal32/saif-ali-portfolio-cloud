import type { Metadata } from "next";
import Link from "next/link";
import { SharedFooter } from "@/components/SharedFooter";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Shopify CRO Consultant for DTC Brands | Saif Ali",
  description:
    "Shopify CRO consultant for DTC brands — full-journey conversion audits from Meta ads to checkout. Book the $750 Shopify Conversion Fix Sprint.",
  alternates: { canonical: "/shopify-cro-consultant" },
};

const serifItalic = {
  fontFamily: '"Instrument Serif", "Noto Serif", Georgia, serif',
  fontStyle: "italic" as const,
  fontWeight: 400,
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.saifali.site/shopify-cro-consultant#service",
  name: "Shopify CRO Consulting",
  description:
    "Full-journey conversion rate optimization for DTC brands on Shopify — from Meta ads to checkout.",
  url: "https://www.saifali.site/shopify-cro-consultant",
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
  "@id": "https://www.saifali.site/shopify-cro-consultant#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does it cost — is it really fixed-price?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "$750 flat for the sprint scope above. If something falls outside scope — a full theme rebuild, for example — I'll flag it and quote it separately before doing anything. No hidden fees.",
      },
    },
    {
      "@type": "Question",
      name: "How long does the sprint take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Seven days from kickoff to handoff, assuming I get store access and timely answers from you. Slow access or slow approvals are the usual delays — everything else is on me.",
      },
    },
    {
      "@type": "Question",
      name: "How is this different from hiring a CRO agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An agency puts an account manager between you and the person doing the work, and usually sells a monthly retainer. With me, the person auditing your store is the person fixing it — one operator, one fixed scope, faster decisions. An agency still makes sense if you need a whole team and ongoing experimentation at scale.",
      },
    },
    {
      "@type": "Question",
      name: "What access do you need to my store?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shopify collaborator access — I'll tell you exactly which permissions and why before you approve anything. If I'm reviewing your ads, read-only access to the ad account helps; GA4 read access too, if you have it. I won't touch anything outside the agreed fixes.",
      },
    },
    {
      "@type": "Question",
      name: "Do you guarantee a conversion-rate lift?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No — and you should be wary of anyone who does. I target the highest-impact leaks first, but results depend on your traffic quality, your offer, and your pricing. What I guarantee is the work: the audit, the ranked fixes, the implementation, and the verification.",
      },
    },
    {
      "@type": "Question",
      name: "Will you change my store's design?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No redesign. Fixes work inside your existing theme — same design language, same brand. If a visual change would genuinely help conversion, I'll explain why and get your approval first.",
      },
    },
    {
      "@type": "Question",
      name: "What happens after the sprint?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You get a handoff summary: what changed, why it changed, and what to watch next. If you want follow-up work afterward, we can talk about it — no obligation, no retainer pitch baked in.",
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

export default function ShopifyCroConsultantPage() {
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
        {/* Breadcrumb / back — mirrors the /book page pattern */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <p className="font-hand text-base text-[var(--text-secondary)]">
            / Shopify CRO Consultant
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
            Shopify CRO Consultant
            <br />
            for{" "}
            <em className="not-italic accent" style={serifItalic}>
              DTC Brands
            </em>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">
            I find where your Shopify store leaks revenue — from Meta ads to
            checkout — and fix it in a focused conversion sprint.
          </p>
          <p className={bodyClass + " max-w-2xl"}>
            A Shopify CRO consultant audits your full buying journey, finds
            where shoppers drop off using evidence, then prioritizes and
            implements fixes ranked by revenue impact. I do that across the
            whole journey: your ads, landing pages, product pages, cart, and
            checkout — not just the theme.
          </p>
          <CtaRow />
        </section>

        {/* 1 — The problem */}
        <section id="problem" className="mt-14 md:mt-20">
          <h2 className={h2Class}>Your store looks fine. So why aren&rsquo;t people buying?</h2>
          <p className={bodyClass}>
            Most stores I review look good on the surface. The problems sit
            underneath: a value proposition that never quite lands above the
            fold, shipping and returns information nowhere near the buy
            button, trust signals buried pages away from the purchase, a cart
            that introduces doubt instead of removing it.
          </p>
          <p className={bodyClass}>
            You have already paid for the traffic. Running more ads will not
            fix a leaky funnel — fixing the journey from ad click to checkout
            is what makes every visitor worth more.
          </p>
        </section>

        {/* 2 — Who this is for */}
        <section id="who-its-for" className="mt-14 md:mt-20">
          <h2 className={h2Class}>Who this is for</h2>
          <ul className={listClass}>
            <li>— A US or UK Shopify brand in apparel, accessories, or home.</li>
            <li>— You are already running paid traffic and getting orders.</li>
            <li>— You can give Shopify collaborator access and answer questions during the sprint.</li>
          </ul>
          <p className={bodyClass}>
            <span className="font-medium text-[var(--text)]">Not a fit:</span>{" "}
            pre-launch stores with no traffic data yet, anyone wanting a full
            rebrand or redesign, and anyone who needs a guaranteed conversion
            rate — I will not promise you one.
          </p>
        </section>

        {/* 3 — AEO definition block */}
        <section id="what-it-is" className="mt-14 md:mt-20">
          <h2 className={h2Class}>What does a Shopify CRO consultant actually do?</h2>
          <p className={bodyClass}>
            <span className="font-medium text-[var(--text)]">
              A Shopify CRO consultant audits your entire buying journey —
              homepage, collections, product pages, cart, and checkout, on
              mobile and desktop — finds where shoppers drop off using
              evidence, then prioritizes and implements fixes ranked by
              revenue impact.
            </span>
          </p>
          <p className={bodyClass}>
            A consultant is different from an agency: one senior operator does
            the audit and ships the fixes — no account manager relaying
            messages between you and the person doing the work. And different
            from a developer: diagnosis comes before code, so you fix the
            right things instead of rebuilding the wrong ones.
          </p>
          <p className={bodyClass}>
            What it is not: not a redesign service, not guaranteed lift
            percentages, and not ad management.
          </p>
        </section>

        {/* 4 — Method */}
        <section id="method" className="mt-14 md:mt-20">
          <h2 className={h2Class}>My method: full-journey CRO</h2>
          <p className={bodyClass}>
            Most CRO consultants stop at the theme. I start at the ad: Meta
            ad → landing page → product page → cart → checkout. One continuous
            journey, reviewed as one thing — because a sharper ad does not
            help a confusing product page, and a clean product page does not
            save a checkout full of surprises.
          </p>
          <p className={bodyClass}>
            That is only possible because my background covers the whole line:
            Meta ads, landing pages, and Shopify design and development. Most
            people own one slice — ads <em>or</em> CRO <em>or</em> dev. You can
            see the range of that work in{" "}
            <Link href="/portfolio" className="text-[var(--accent)] underline underline-offset-4">
              my portfolio
            </Link>
            .
          </p>
        </section>

        {/* 5 — The sprint offer */}
        <section id="sprint" className="mt-14 md:mt-20">
          <h2 className={h2Class}>What&rsquo;s included: the Shopify Conversion Fix Sprint</h2>
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
              offer framing, homepage, product pages, cart drawer, and trust
              signals near checkout.
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
            full redesign, custom app development, ongoing ad management.
          </p>
          <p className={bodyClass}>
            <span className="font-medium text-[var(--text)]">Access I&rsquo;ll need:</span>{" "}
            Shopify collaborator access (I&rsquo;ll specify the exact
            permissions before you approve anything), read-only ad account
            access if I&rsquo;m reviewing your ads, and GA4 read access if you
            have it.
          </p>
          <CtaRow label="Start the sprint" />
        </section>

        {/* 6 — Process */}
        <section id="process" className="mt-14 md:mt-20">
          <h2 className={h2Class}>How the sprint works</h2>
          <ol className={listClass + " list-none"}>
            <li>
              <span className="font-medium text-[var(--text)]">1. Audit (days 1–2).</span>{" "}
              I walk the full journey the way a buyer does — 13 areas, mobile
              and desktop — and document every leak with screenshots.
            </li>
            <li>
              <span className="font-medium text-[var(--text)]">2. Prioritize (day 3).</span>{" "}
              Fixes ranked by revenue impact. You approve the order before
              anything is touched.
            </li>
            <li>
              <span className="font-medium text-[var(--text)]">3. Implement (days 4–6).</span>{" "}
              The highest-impact fixes go live on your store, inside your
              existing theme.
            </li>
            <li>
              <span className="font-medium text-[var(--text)]">4. Verify (day 7).</span>{" "}
              Before/after check on every change, plus a short handoff note so
              you know exactly what moved and why.
            </li>
          </ol>
        </section>

        {/* 7 — Proof */}
        <section id="proof" className="mt-14 md:mt-20">
          <h2 className={h2Class}>Proof</h2>
          <p className={bodyClass}>
            Honest answer first: I don&rsquo;t have client before-and-afters to
            show you yet — and I&rsquo;d rather tell you that than invent some.
          </p>
          <p className={bodyClass}>
            What I can show you is how I audit. In independent store reviews
            I&rsquo;ve published, the same patterns keep appearing: no
            delivery or returns information near the buy button, trust signals
            sitting pages away from the purchase, variant selectors with no
            stock indication, shipping costs revealed only at checkout. That
            is the lens I bring to your store — and you can see the range of
            builds behind it in{" "}
            <Link href="/portfolio" className="text-[var(--accent)] underline underline-offset-4">
              my portfolio
            </Link>
            .
          </p>
          {/* [PROOF NEEDED]: client before/after screenshots, metric snapshots,
              or confirmed quotes — to be added here when available. Never invent. */}
        </section>

        {/* 8 — Why me */}
        <section id="why-me" className="mt-14 md:mt-20">
          <h2 className={h2Class}>Why work with me instead of an agency</h2>
          <ul className={listClass}>
            <li>
              — <span className="font-medium text-[var(--text)]">One senior operator.</span>{" "}
              I do the audit and I ship the fixes. No account manager, no
              relay, no overhead baked into the price.
            </li>
            <li>
              — <span className="font-medium text-[var(--text)]">One skill set across the journey.</span>{" "}
              Shopify development and design, Meta ads, landing pages,
              ecommerce UX. Agencies split this across three people who rarely
              talk to each other.
            </li>
            <li>
              — <span className="font-medium text-[var(--text)]">Fixed price, fixed scope.</span>{" "}
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

        {/* 9 — FAQs */}
        <section id="faq" className="mt-14 md:mt-20">
          <h2 className={h2Class}>Questions founders ask</h2>
          <div className="mt-6 space-y-8">
            <div>
              <h3 className="font-general text-lg font-medium text-[var(--text)]">
                How much does it cost — is it really fixed-price?
              </h3>
              <p className={bodyClass}>
                $750 flat for the sprint scope above. If something falls
                outside scope — a full theme rebuild, for example — I&rsquo;ll
                flag it and quote it separately before doing anything. No
                hidden fees.
              </p>
            </div>
            <div>
              <h3 className="font-general text-lg font-medium text-[var(--text)]">
                How long does the sprint take?
              </h3>
              <p className={bodyClass}>
                Seven days from kickoff to handoff, assuming I get store access
                and timely answers from you. Slow access or slow approvals are
                the usual delays — everything else is on me.
              </p>
            </div>
            <div>
              <h3 className="font-general text-lg font-medium text-[var(--text)]">
                How is this different from hiring a CRO agency?
              </h3>
              <p className={bodyClass}>
                An agency puts an account manager between you and the person
                doing the work, and usually sells a monthly retainer. With me,
                the person auditing your store is the person fixing it — one
                operator, one fixed scope, faster decisions. An agency still
                makes sense if you need a whole team and ongoing
                experimentation at scale.
              </p>
            </div>
            <div>
              <h3 className="font-general text-lg font-medium text-[var(--text)]">
                What access do you need to my store?
              </h3>
              <p className={bodyClass}>
                Shopify collaborator access — I&rsquo;ll tell you exactly which
                permissions and why before you approve anything. If I&rsquo;m
                reviewing your ads, read-only access to the ad account helps;
                GA4 read access too, if you have it. I won&rsquo;t touch
                anything outside the agreed fixes.
              </p>
            </div>
            <div>
              <h3 className="font-general text-lg font-medium text-[var(--text)]">
                Do you guarantee a conversion-rate lift?
              </h3>
              <p className={bodyClass}>
                No — and you should be wary of anyone who does. I target the
                highest-impact leaks first, but results depend on your traffic
                quality, your offer, and your pricing. What I guarantee is the
                work: the audit, the ranked fixes, the implementation, and the
                verification.
              </p>
            </div>
            <div>
              <h3 className="font-general text-lg font-medium text-[var(--text)]">
                Will you change my store&rsquo;s design?
              </h3>
              <p className={bodyClass}>
                No redesign. Fixes work inside your existing theme — same
                design language, same brand. If a visual change would genuinely
                help conversion, I&rsquo;ll explain why and get your approval
                first.
              </p>
            </div>
            <div>
              <h3 className="font-general text-lg font-medium text-[var(--text)]">
                What happens after the sprint?
              </h3>
              <p className={bodyClass}>
                You get a handoff summary: what changed, why it changed, and
                what to watch next. If you want follow-up work afterward, we
                can talk about it — no obligation, no retainer pitch baked in.
              </p>
            </div>
          </div>
        </section>

        {/* 10 — Closing CTA */}
        <section id="book" className="mt-14 md:mt-20">
          <h2 className={h2Class}>Tell me about your store</h2>
          <p className={bodyClass}>
            Book a fit call. Tell me about your store and your traffic —
            I&rsquo;ll tell you honestly whether a sprint will move the needle
            for you. If it won&rsquo;t, I&rsquo;ll say so.
          </p>
          <p className={bodyClass}>
            Thinking bigger than conversion — who should own your ecommerce
            growth end to end? Read my{" "}
            <Link href="/ecommerce-growth-consultant" className="text-[var(--accent)] underline underline-offset-4">
              ecommerce growth consultant
            </Link>{" "}
            page.
          </p>
          <p className={bodyClass}>
            Want the expert diagnosis before any fixes? Read my{" "}
            <Link href="/ecommerce-ux-audit" className="text-[var(--accent)] underline underline-offset-4">
              ecommerce UX audit
            </Link>{" "}
            page — a teardown-style review of your store, delivered as a
            ranked report before we change a thing.
          </p>
          <p className={bodyClass}>
            Running paid traffic to a page that drops the click? Read my{" "}
            <Link href="/landing-page-optimization" className="text-[var(--accent)] underline underline-offset-4">
              landing page optimization
            </Link>{" "}
            page — message, offer, and creative aligned with your ads.
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
