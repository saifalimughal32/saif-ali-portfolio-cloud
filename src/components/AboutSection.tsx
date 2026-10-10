"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Globe, Send, Star } from "lucide-react";
import { about } from "@/content/about";
import { site, type SocialLink } from "@/content/site";
import { downloadCv } from "@/lib/downloadCv";
import { Reveal } from "./Reveal";
import { ScheduleCallButton } from "./ScheduleCallButton";

gsap.registerPlugin(ScrollTrigger);

function BrandIcon({
  icon,
  className,
}: {
  icon: SocialLink["icon"];
  className?: string;
}) {
  if (icon === "instagram") {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden fill="none" stroke="currentColor" strokeWidth="1.75">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  if (icon === "x") {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.725-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
      </svg>
    );
  }
  if (icon === "youtube") {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.75 15.5v-7l6.2 3.5-6.2 3.5z" />
      </svg>
    );
  }
  if (icon === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
        <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.1c.5-1 1.8-2.1 3.7-2.1 4 0 4.7 2.6 4.7 6V23h-4v-5.9c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V23h-4V8.5z" />
      </svg>
    );
  }
  if (icon === "dribbble") {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.42 25.42 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.95 53.95 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.191-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.32 35.32 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.359a8.468 8.468 0 01-3.655 5.725z" />
      </svg>
    );
  }
  if (icon === "pinterest") {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
        <path d="M12 2C6.48 2 2 6.3 2 11.66c0 4.1 2.56 7.61 6.2 8.92-.09-.75-.16-1.91.03-2.73.18-.75 1.14-4.78 1.14-4.78s-.29-.58-.29-1.44c0-1.35.78-2.36 1.76-2.36.83 0 1.23.62 1.23 1.37 0 .83-.53 2.08-.8 3.24-.23.96.48 1.75 1.43 1.75 1.71 0 3.03-1.81 3.03-4.41 0-2.31-1.66-3.92-4.03-3.92-2.74 0-4.36 2.06-4.36 4.18 0 .83.32 1.72.72 2.2a.29.29 0 0 1 .07.28c-.07.31-.24.96-.27 1.1-.04.18-.15.22-.34.13-1.27-.59-2.07-2.45-2.07-3.94 0-3.21 2.33-6.16 6.73-6.16 3.53 0 6.28 2.52 6.28 5.88 0 3.51-2.21 6.33-5.28 6.33-1.03 0-2-.54-2.33-1.17l-.63 2.42c-.23.89-.86 2-1.28 2.68A10.1 10.1 0 0 0 12 21.32c5.52 0 10-4.3 10-9.66C22 6.3 17.52 2 12 2z" />
      </svg>
    );
  }
  if (icon === "whatsapp") {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    );
  }
  if (icon === "telegram") {
    return <Send className={className} strokeWidth={1.75} />;
  }
  return <Globe className={className} strokeWidth={1.75} />;
}

export function AboutSection() {
  const aboutPortraitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = aboutPortraitRef.current;
    const aboutEl = document.querySelector("#about");
    if (!el || !aboutEl) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) return;

    const media = gsap.matchMedia();
    // Desktop only: fade About portrait in as traveling hero portrait exits.
    media.add(
      "(min-width: 1000px) and (prefers-reduced-motion: no-preference)",
      () => {
        gsap.set(el, { autoAlpha: 0 });
        gsap.fromTo(
          el,
          { autoAlpha: 0 },
          {
            autoAlpha: 1,
            ease: "none",
            scrollTrigger: {
              trigger: aboutEl,
              start: "top 40%",
              end: "top 12%",
              scrub: true,
            },
          },
        );
      },
    );

    return () => media.revert();
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      const toast = document.getElementById("email-toast");
      if (!toast) return;
      toast.dataset.show = "1";
      window.setTimeout(() => {
        toast.dataset.show = "0";
      }, 1600);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  };

  return (
    <section
      id="about"
      className="pb-[var(--section-space)] pt-[clamp(5rem,14vw,9rem)]"
    >
      <div className="container-site grid items-center gap-12 min-[1000px]:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <p className="font-hand text-base text-[var(--text)]">{about.eyebrow}</p>
          <h2 className="mt-2 max-w-xl font-general text-[clamp(2rem,4vw,2.8rem)] font-medium leading-[1.05] tracking-[-2px] text-[var(--text)]">
            {about.line1}
            <br />
            {about.line2Before}
            <em className="not-italic accent">{about.line2Accent}</em>
          </h2>
          <p className="mt-4 text-lg font-medium text-[var(--text)]">
            {about.subtitle}
          </p>
          <p className="mt-4 max-w-xl text-[var(--text-secondary)]">
            {about.body}
          </p>
          <p className="mt-3 max-w-xl font-medium text-[var(--text)]">
            {about.impactLine}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <ScheduleCallButton
              url={site.bookingUrl}
              emailFallback={site.email}
            />
            <button
              type="button"
              onClick={copyEmail}
              className="rounded-full border border-[var(--border)] bg-[#f0f0f0] px-6 py-3 text-sm font-medium text-[var(--text)] transition-colors hover:bg-white"
            >
              Copy email
            </button>
            {site.cvUrl ? (
              <>
                <a
                  href="/cv"
                  className="rounded-full border border-[var(--border)] bg-[#f0f0f0] px-6 py-3 text-sm font-medium text-[var(--text)] transition-colors hover:bg-white"
                >
                  View CV
                </a>
                <button
                  type="button"
                  onClick={() => {
                    void downloadCv();
                  }}
                  className="rounded-full border border-[var(--border)] bg-[#f0f0f0] px-6 py-3 text-sm font-medium text-[var(--text)] transition-colors hover:bg-white"
                >
                  Download CV
                </button>
              </>
            ) : null}
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-2">
            <span className="flex gap-0.5 text-[var(--accent)]" aria-hidden>
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </span>
            <p className="text-sm font-semibold text-[var(--text)]">
              {about.trustLine}
            </p>
          </div>

          <div className="mt-5 flex flex-wrap gap-2.5">
            {site.socials.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[#f0f0f0] text-[var(--text)] transition-colors hover:bg-white"
              >
                <BrandIcon icon={s.icon} className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal
          delay={0.1}
          className="flex justify-center min-[1000px]:justify-end"
        >
          <div
            ref={aboutPortraitRef}
            className="relative w-full max-w-[420px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,.12)]"
            style={{ borderRadius: 28, aspectRatio: "4 / 5" }}
            data-about-portrait
          >
            <Image
              src="/media/saif-portrait-about.jpg"
              alt={`${site.displayName}`}
              fill
              sizes="(max-width: 999px) 80vw, 420px"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>

      <div
        id="email-toast"
        data-show="0"
        className="pointer-events-none fixed bottom-28 left-1/2 z-[70] -translate-x-1/2 rounded-full bg-[var(--nav-bg)] px-4 py-2 text-sm text-white opacity-0 transition-opacity duration-200 data-[show=1]:opacity-100"
      >
        Email copied
      </div>
    </section>
  );
}
