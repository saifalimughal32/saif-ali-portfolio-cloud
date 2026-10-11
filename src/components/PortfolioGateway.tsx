"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { about } from "@/content/about";
import { publishedProjects } from "@/content/portfolio";
import { Reveal } from "./Reveal";

gsap.registerPlugin(ScrollTrigger);

/**
 * Word-by-word color reveal matching Avada/AWB:
 * data-scroll-reveal-effect="color_change" basis="words" behavior="always"
 * Words start muted, scrub to full ink as the block scrolls through view.
 */
export function PositioningStatement() {
  const rootRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const text = textRef.current;
    if (!root || !text) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) return;

    const raw = about.positioning;
    const parts = raw.split(/(\s+)/);
    text.innerHTML = "";
    const words: HTMLSpanElement[] = [];

    parts.forEach((part) => {
      if (/^\s+$/.test(part)) {
        text.appendChild(document.createTextNode(part));
        return;
      }
      const span = document.createElement("span");
      span.className = "positioning-word";
      span.textContent = part;
      text.appendChild(span);
      words.push(span);
    });

    if (!words.length) return;

    gsap.set(words, { color: "#c8c8c8" });

    const tween = gsap.to(words, {
      color: "#333333",
      ease: "none",
      stagger: 0.08,
      scrollTrigger: {
        trigger: root,
        start: "top 75%",
        end: "bottom 35%",
        scrub: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
      text.textContent = raw;
    };
  }, []);

  return (
    <section
      ref={rootRef}
      className="positioning-section pb-[var(--section-space)] pt-[clamp(3rem,8vw,6rem)]"
    >
      <div className="container-site">
        <p
          ref={textRef}
          className="max-w-4xl font-general text-[clamp(1.75rem,4vw,3.2rem)] font-medium leading-[1.3] tracking-[-1.2px] text-[var(--text)]"
        >
          {about.positioning}
        </p>
      </div>
    </section>
  );
}

export function PortfolioGateway() {
  const previewIds = ["aura21", "bunbox", "spookybite", "rivori-matcha"];
  const previews = previewIds
    .map((id) => publishedProjects.find((p) => p.id === id))
    .filter((p): p is (typeof publishedProjects)[number] => Boolean(p));

  return (
    <section className="pb-[var(--section-space)]">
      <div className="container-site">
        <Reveal>
          <Link
            href="/portfolio"
            className="portfolio-gateway-banner group relative block overflow-hidden rounded-[22px] bg-white px-5 py-10 text-center shadow-[0_8px_28px_rgba(0,0,0,0.04)] transition-transform duration-300 hover:scale-[1.01] sm:rounded-[28px] sm:px-8 sm:py-14 md:px-16 md:py-16"
          >
            <span
              className="portfolio-gateway-leaf pointer-events-none absolute inset-y-0 left-0 w-28 opacity-40 md:w-40"
              aria-hidden
            />
            <span
              className="portfolio-gateway-leaf portfolio-gateway-leaf-right pointer-events-none absolute inset-y-0 right-0 w-28 opacity-40 md:w-40"
              aria-hidden
            />
            <p className="relative text-sm text-[var(--text-secondary)] md:text-base">
              Click here to see my
            </p>
            <h1 className="relative mt-2 font-general text-[clamp(2rem,5vw,3.5rem)] font-medium leading-none tracking-[-2px] text-[var(--text)] transition-colors group-hover:text-[var(--accent)]">
              Complete Portfolio
            </h1>
            <p className="relative mt-4 text-sm text-[var(--text-muted)]">
              Updated portfolio showcase, as of October, 2026.
            </p>
          </Link>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {previews.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.1}>
              <Link
                href={`/portfolio#pc=${p.category}`}
                className="block overflow-hidden rounded-[20px] bg-white p-4 sm:rounded-[24px] sm:p-6"
              >
                <div className="overflow-hidden rounded-[18px]">
                  <Image
                    src={p.thumbnail}
                    alt={p.thumbnailAlt}
                    width={1200}
                    height={900}
                    quality={75}
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="aspect-[4/3] h-auto w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <p className="font-medium">{p.title}</p>
                  <span className="shrink-0 text-xs uppercase tracking-wide text-[var(--text-muted)]">
                    {p.category === "branding"
                      ? "Brand & Packaging"
                      : p.category === "shopify"
                        ? "Store Design"
                        : p.category === "ai-creatives"
                          ? "Ad Creatives"
                          : p.category === "performance"
                            ? "Paid Ads"
                            : p.category === "growth-strategy"
                              ? "Offers & Funnels"
                              : "Creative Ops"}
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
