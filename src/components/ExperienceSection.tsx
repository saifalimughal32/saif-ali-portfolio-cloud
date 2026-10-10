"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experience } from "@/content/about";
import { site } from "@/content/site";
import { downloadCv } from "@/lib/downloadCv";
import { Reveal } from "./Reveal";

gsap.registerPlugin(ScrollTrigger);

export function ExperienceSection() {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = listRef.current;
    if (!root) return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) return;

    const rows = Array.from(
      root.querySelectorAll<HTMLElement>("[data-experience-row]"),
    );
    const triggers: ScrollTrigger[] = [];

    rows.forEach((row) => {
      const isMobile = window.matchMedia("(max-width: 640px)").matches;
      const blurFrom = isMobile ? "blur(4px)" : "blur(8px)";
      gsap.set(row, { autoAlpha: 0, filter: blurFrom });

      const tween = gsap.fromTo(
        row,
        { autoAlpha: 0, filter: blurFrom },
        {
          autoAlpha: 1,
          filter: "blur(0px)",
          ease: "none",
          scrollTrigger: {
            trigger: row,
            start: "top 80%",
            end: "bottom 70%",
            scrub: true,
          },
        },
      );
      if (tween.scrollTrigger) triggers.push(tween.scrollTrigger);
    });

    ScrollTrigger.refresh();

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, []);

  return (
    <section id="experience" className="pb-[var(--section-space)]">
      <div className="container-site">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-hand text-base text-[var(--text)]">/ Career</p>
              <h2 className="mt-2 font-general text-[clamp(2rem,4vw,2.8rem)] font-medium leading-none tracking-[-2px]">
                Work <span className="accent">Experience</span>
              </h2>
              <p className="mt-3 text-[var(--text-secondary)]">
                My impact over the years.
              </p>
            </div>
            {site.cvUrl ? (
              <div className="flex shrink-0 flex-wrap gap-2">
                <a
                  href="/cv"
                  className="rounded-full border border-[var(--border)] bg-white px-5 py-2.5 text-sm font-medium text-[var(--text)] transition-colors hover:bg-[#f5f5f5]"
                >
                  View CV
                </a>
                <button
                  type="button"
                  onClick={() => {
                    void downloadCv();
                  }}
                  className="rounded-full bg-[#e0e0e0] px-5 py-2.5 text-sm font-medium text-[var(--text)] transition-colors hover:bg-[#d4d4d4]"
                >
                  Download CV
                </button>
              </div>
            ) : null}
          </div>
        </Reveal>

        <div ref={listRef} className="mt-10 border-t border-[var(--border)]">
          {experience.map((item) => (
            <div
              key={`${item.role}-${item.organization}`}
              data-experience-row
              className="experience-row border-b border-[var(--border)] py-5 sm:py-8"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                <h3 className="min-w-0 font-general text-[clamp(1.25rem,5vw,2.75rem)] font-medium leading-[1.2] tracking-[-1px] text-[var(--text)] sm:tracking-[-1.5px]">
                  {item.role}
                  <span className="font-normal text-[var(--text-secondary)]">
                    {" "}
                    · {item.organization}
                  </span>
                </h3>
                <p className="shrink-0 text-sm text-[var(--text-secondary)] md:text-lg">
                  {item.dates}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
