import type { Metadata } from "next";
import Link from "next/link";
import {
  BookPageFallback,
  CalendlyEmbed,
} from "@/components/CalendlyEmbed";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `Book a call | ${site.displayName}`,
  description: `Schedule a call with ${site.displayName} — founder of whyitworks.ai.`,
  alternates: { canonical: "/book" },
};

export default function BookPage() {
  const url = site.bookingUrl;

  return (
    <main className="saif-portfolio min-h-screen px-5 pb-28 pt-10 md:px-10">
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

        <div className="mt-8">
          {url ? <CalendlyEmbed url={url} /> : <BookPageFallback />}
        </div>
      </div>
    </main>
  );
}
