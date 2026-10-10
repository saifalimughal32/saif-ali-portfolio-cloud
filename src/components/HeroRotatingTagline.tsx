"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

const HOLD_MS = 2800;
const TRANSITION = 0.7;

export function HeroRotatingTagline({
  align = "left",
  className,
}: {
  align?: "left" | "right";
  className?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const phrases = site.heroTaglineRotations;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const items = Array.from(
      track.querySelectorAll<HTMLElement>("[data-rotating-phrase]"),
    );
    if (items.length < 2) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    gsap.set(items, { autoAlpha: 0, y: 10 });
    gsap.set(items[0], { autoAlpha: 1, y: 0 });

    if (reduced) return;

    let index = 0;
    let timeoutId = 0;
    let activeTween: gsap.core.Timeline | null = null;
    let cancelled = false;

    const advance = () => {
      if (cancelled) return;
      const outgoing = items[index];
      const next = (index + 1) % items.length;
      const incoming = items[next];

      activeTween?.kill();
      activeTween = gsap
        .timeline({
          defaults: { duration: TRANSITION, ease: "power2.inOut" },
          onComplete: () => {
            index = next;
            setActiveIndex(next);
            timeoutId = window.setTimeout(advance, HOLD_MS);
          },
        })
        .to(outgoing, { y: -12, autoAlpha: 0 }, 0)
        .fromTo(
          incoming,
          { y: 12, autoAlpha: 0 },
          { y: 0, autoAlpha: 1 },
          0.08,
        );
    };

    timeoutId = window.setTimeout(advance, HOLD_MS);

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
      activeTween?.kill();
    };
  }, [phrases]);

  return (
    <div
      className={cn(
        "w-full max-w-[18rem] text-sm font-medium leading-snug sm:text-base",
        align === "right" && "ml-auto max-w-[16rem] text-right",
        className,
      )}
    >
      <p className="text-[var(--text-secondary)]">{site.heroTaglineStatic}</p>
      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {phrases[activeIndex]}
      </p>
      <div ref={trackRef} className="relative overflow-hidden" aria-hidden>
        {/* Fixed height from longest phrase — prevents hero jump */}
        <span className="invisible block whitespace-nowrap accent">
          {site.heroTaglineSizer}
        </span>
        {phrases.map((phrase) => (
          <span
            key={phrase}
            data-rotating-phrase
            className={cn(
              "absolute inset-x-0 top-0 block whitespace-nowrap accent",
              align === "right" && "text-right",
            )}
          >
            {phrase}
          </span>
        ))}
      </div>
    </div>
  );
}
