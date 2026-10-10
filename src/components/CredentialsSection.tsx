"use client";

import { credentials } from "@/content/about";
import { Reveal } from "./Reveal";

export function CredentialsSection() {
  const published = credentials.filter((c) => c.publish);
  if (published.length === 0) return null;

  return (
    <section className="pb-[var(--section-space)]">
      <div className="container-site">
        <Reveal>
          <p className="font-hand text-base text-[var(--text-secondary)]">
            / Proof & Results
          </p>
          <h2 className="mt-2 font-general text-[clamp(2rem,4vw,2.8rem)] font-medium leading-none tracking-[-2px]">
            Selected Results
          </h2>
        </Reveal>
        <div className="mt-10 divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {published.map((row) => (
            <div
              key={row.index}
              className="grid gap-3 py-5 text-sm md:grid-cols-[64px_1.4fr_1fr_120px] md:text-base"
            >
              <span className="text-[var(--text-muted)]">{row.index}</span>
              <span className="font-medium">{row.title}</span>
              <span className="text-[var(--text-secondary)]">
                {row.organization}
              </span>
              <span className="text-[var(--text-muted)] md:text-right">
                {row.date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
