"use client";

import { Star } from "lucide-react";
import type { PortfolioCategoryIntro } from "@/content/portfolio";
import { site } from "@/content/site";
import { ScheduleCallButton } from "./ScheduleCallButton";

const serifItalic = {
  fontFamily: '"Instrument Serif", "Noto Serif", Georgia, serif',
  fontStyle: "italic" as const,
  fontWeight: 400,
};

/** Easy-language purpose block for each portfolio filter */
export function PortfolioCategoryHero({ intro }: { intro: PortfolioCategoryIntro }) {
  return (
    <section className="px-5 pb-6 pt-4 md:px-10">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-clash text-[clamp(2rem,5vw,3.35rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-[var(--text)]">
          {intro.line1}
          <br />
          {intro.line2Before}
          <em className="not-italic accent" style={serifItalic}>
            {intro.line2Accent}
          </em>
          {intro.line3Accent ? (
            <>
              <br />
              <em className="not-italic accent" style={serifItalic}>
                {intro.line3Accent}
              </em>
            </>
          ) : null}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">
          {intro.body}
        </p>
        <div className="mt-7 flex justify-center">
          <ScheduleCallButton
            url={site.bookingUrl}
            emailFallback={site.email}
            label={intro.cta}
            className="rounded-full bg-[var(--accent)] px-7 py-3.5 text-sm font-medium text-white hover:opacity-90"
          />
        </div>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm text-[var(--accent)]">
          <span className="flex gap-0.5" aria-hidden>
            {Array.from({ length: 5 }, (_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-current" />
            ))}
          </span>
          <p className="text-[var(--text-secondary)]">{intro.trust}</p>
        </div>
      </div>
    </section>
  );
}
