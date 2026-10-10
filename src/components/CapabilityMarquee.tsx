"use client";

import { about } from "@/content/about";

export function CapabilityMarquee() {
  const loop = [...about.marqueeItems, ...about.marqueeItems];
  const accessible = about.marqueeItems.join(" / ");

  return (
    <section className="py-8 md:py-10" aria-label="Capabilities">
      <p className="sr-only">{accessible}</p>
      <div className="marquee">
        <div className="marquee-track font-general text-xl font-medium tracking-[-1px] text-[var(--text-secondary)] md:text-3xl">
          <div className="flex shrink-0 items-center gap-5 px-4" aria-hidden>
            {loop.map((item, i) => (
              <span key={`${item}-${i}`} className="flex items-center gap-5">
                {item}
                <span className="text-[var(--text-muted)]">/</span>
              </span>
            ))}
          </div>
          <div className="flex shrink-0 items-center gap-5 px-4" aria-hidden>
            {loop.map((item, i) => (
              <span key={`dup-${item}-${i}`} className="flex items-center gap-5">
                {item}
                <span className="text-[var(--text-muted)]">/</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
