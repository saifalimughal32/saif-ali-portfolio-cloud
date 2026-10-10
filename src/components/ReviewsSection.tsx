"use client";

import { useState } from "react";
import { reviews } from "@/content/reviews";
import { Reveal } from "./Reveal";

function Stars({ count = 5 }: { count?: number }) {
  return (
    <p className="flex gap-0.5 text-[var(--accent)]" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }, (_, i) => (
        <span key={i} aria-hidden>
          ★
        </span>
      ))}
    </p>
  );
}

export function ReviewsSection() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="testimonials" className="relative pb-[var(--section-space)]">
      <div className="container-site">
        <Reveal>
          <p className="font-hand text-base text-[var(--text)]">
            / Community Trust - Testimonials
          </p>
          <h2 className="mt-2 font-general text-[clamp(2rem,4vw,2.8rem)] font-medium leading-none tracking-[-2px]">
            What <span className="accent">people</span> say
          </h2>
          <p className="mt-3 max-w-xl text-[var(--text-secondary)]">
            A few thoughts from people who have experienced the value of working
            together.
          </p>
        </Reveal>

        {reviews.length === 0 ? (
          <div className="mt-10 rounded-[20px] border border-[var(--border)] bg-white px-6 py-10 text-[var(--text-secondary)]">
            Reviews will appear here once approved client testimonials are
            added.
          </div>
        ) : (
          <div className="review-grid mt-10">
            {reviews.map((review) => {
              const long = review.quote.length > 220;
              const key = `${review.name}-${review.date}`;
              const open = expanded === key;
              const text =
                long && !open
                  ? `${review.quote.slice(0, 200).trim()} [...]`
                  : review.quote;
              return (
                <article
                  key={key}
                  className="review-card mb-2.5 break-inside-avoid rounded-[14px] border border-[#e8e8e8] bg-white p-7"
                >
                  <Stars count={review.rating ?? 5} />
                  <p className="mt-3 text-[15px] leading-relaxed text-[var(--text)]">
                    &ldquo;{text}&rdquo;
                  </p>
                  {long ? (
                    <button
                      type="button"
                      className="mt-2 text-sm font-medium text-[var(--accent)]"
                      onClick={() => setExpanded(open ? null : key)}
                    >
                      {open ? "Show less" : "Read more"}
                    </button>
                  ) : null}
                  <hr className="my-4 border-[#ececec]" />
                  <p className="font-semibold text-[var(--text)]">{review.name}</p>
                  <p className="mt-0.5 text-sm text-[var(--text-secondary)]">
                    {review.service}
                  </p>
                  <p className="mt-0.5 text-sm text-[var(--text-muted)]">
                    {review.date}
                  </p>
                </article>
              );
            })}
          </div>
        )}
      </div>

      {/* Soft fade at section bottom like the reference */}
      {reviews.length > 0 ? (
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-[var(--page-bg)]"
          aria-hidden
        />
      ) : null}
    </section>
  );
}
