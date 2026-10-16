import type { Metadata } from "next";
import Link from "next/link";
import {
  BookPageFallback,
  CalendlyEmbed,
} from "@/components/CalendlyEmbed";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Book a Fit Call — Shopify Conversion Fix Sprint | Saif Ali",
  description:
    "Book a fit call with Saif Ali about the $750 Shopify Conversion Fix Sprint — 13-area teardown, fixes shipped in 7 days. No pitch if it's not a fit.",
  alternates: { canonical: "/book" },
  openGraph: {
    title: "Book a Fit Call — Shopify Conversion Fix Sprint | Saif Ali",
    description:
      "Book a fit call with Saif Ali about the $750 Shopify Conversion Fix Sprint — 13-area teardown, fixes shipped in 7 days. No pitch if it's not a fit.",
    url: "/book",
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
    title: "Book a Fit Call — Shopify Conversion Fix Sprint | Saif Ali",
    description:
      "Book a fit call with Saif Ali about the $750 Shopify Conversion Fix Sprint — 13-area teardown, fixes shipped in 7 days. No pitch if it's not a fit.",
    images: ["/og-image.jpg"],
  },
};

const h2Class =
  "font-general text-[clamp(1.6rem,3.5vw,2.4rem)] font-medium leading-tight tracking-[-1px] text-[var(--text)]";
const bodyClass =
  "mt-4 text-base leading-relaxed text-[var(--text-secondary)] md:text-lg";
const listClass =
  "mt-4 space-y-3 text-base leading-relaxed text-[var(--text-secondary)] md:text-lg";
const h3Class = "font-general mt-8 text-lg font-medium text-[var(--text)]";

/** Mirrored in the FAQPage JSON-LD below */
const bookFaqs: { question: string; answer: string }[] = [
  {
    question: "Do I pay anything on the call?",
    answer:
      "No. The call is a fit check. Payment only happens after you approve a written scope.",
  },
  {
    question: "What should I prepare?",
    answer:
      "Your store URL and, if you run ads, read-only access helps — but it's not required for the call.",
  },
  {
    question: "What if we're not a fit?",
    answer:
      "I'll tell you plainly and point you at the right next step. No pitch, no follow-up sequence.",
  },
];

const bookFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.saifali.site/book#faq",
  mainEntity: bookFaqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function BookPage() {
  const url = site.bookingUrl;

  return (
    <main className="saif-portfolio min-h-screen px-5 pb-28 pt-10 md:px-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookFaqSchema) }}
      />
      <div className="mx-auto w-full max-w-4xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-hand text-base text-[var(--text-secondary)]">
              / Book
            </p>
            <h1 className="mt-2 font-general text-[clamp(2rem,4vw,2.8rem)] font-medium leading-none tracking-[-2px]">
              Schedule a <span className="accent">call</span>
            </h1>
            <p className="mt-3 max-w-xl text-[var(--text-secondary)]">
              Pick a time that works — {site.displayName} will confirm through
              Calendly.
            </p>
          </div>
          <Link
            href="/#about"
            className="rounded-full bg-[#e0e0e0] px-5 py-2.5 text-sm font-medium text-[var(--text)] transition-colors hover:bg-[#d4d4d4]"
          >
            Back
          </Link>
        </div>

        <section className="mt-10">
          <h2 className={h2Class}>Book a fit call</h2>
          <p className={bodyClass}>
            A 20-minute fit call about the Shopify Conversion Fix Sprint —
            $750 fixed price, 13-area teardown with the highest-impact fixes
            shipped on your store in 7 days.
          </p>
          <ul className={listClass}>
            <li>
              — We&rsquo;ll look at your store&rsquo;s buying journey
              together and I&rsquo;ll tell you honestly whether the sprint
              fits.
            </li>
            <li>
              — No pitch if it&rsquo;s not a fit — I&rsquo;ll say so and
              point you at the right next step.
            </li>
            <li>
              — No payment taken on the call. If we proceed, you get a
              written scope before anything is agreed.
            </li>
          </ul>
        </section>

        <div className="mt-8">
          {url ? <CalendlyEmbed url={url} /> : <BookPageFallback />}
        </div>

        {/* Micro-FAQ */}
        <section id="faq" className="mt-14 md:mt-20">
          <h2 className={h2Class}>Quick questions</h2>
          {bookFaqs.map((item) => (
            <div key={item.question}>
              <h3 className={h3Class}>{item.question}</h3>
              <p className={bodyClass}>{item.answer}</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
