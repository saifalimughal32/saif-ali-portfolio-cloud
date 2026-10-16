"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronUp, Mail, Phone } from "lucide-react";
import { site } from "@/content/site";

const AI_PROVIDERS = [
  {
    key: "chatgpt" as const,
    label: "ChatGPT",
    src: "/media/ai/chatgpt.png",
  },
  {
    key: "claude" as const,
    label: "Claude",
    src: "/media/ai/claude.png",
  },
  {
    key: "gemini" as const,
    label: "Gemini",
    src: "/media/ai/gemini.png",
  },
  {
    key: "perplexity" as const,
    label: "perplexity",
    src: "/media/ai/perplexity.png",
  },
];

export function SharedFooter() {
  const year = new Date().getFullYear();
  const phrase = "Let’s work together ✱";
  const marquee = Array.from({ length: 10 }, () => phrase);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const askAi = site.askAi;

  return (
    <footer className="relative overflow-hidden pb-20 pt-4 min-[642px]:pb-28">
      {/* Giant outlined name as atmospheric background */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 select-none overflow-hidden"
        aria-hidden
      >
        <p className="footer-name-outline whitespace-nowrap text-center font-clash text-[clamp(2.75rem,14vw,14rem)] font-medium leading-none tracking-[-0.05em]">
          {site.displayName}
        </p>
      </div>

      <div className="relative z-10 pt-[clamp(3rem,8vw,6rem)]">
        <div className="marquee" aria-hidden>
          <div className="marquee-track font-general text-[clamp(2.5rem,5vw,4rem)] font-medium leading-[3] tracking-[-1px] text-[var(--text)]">
            <span className="inline-flex gap-6 px-3">
              {marquee.map((item, i) => (
                <span key={`a-${i}`}>{item}</span>
              ))}
            </span>
            <span className="inline-flex gap-6 px-3">
              {marquee.map((item, i) => (
                <span key={`b-${i}`}>{item}</span>
              ))}
            </span>
          </div>
        </div>
        <p className="sr-only">Let&apos;s work together</p>

        {askAi ? (
          <div className="container-site mt-14 text-center">
            <p className="text-sm font-medium text-[var(--text-secondary)] md:text-base">
              Ask AI about me
            </p>
            <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
              {AI_PROVIDERS.map(({ key, label, src }) => {
                const href = askAi[key];
                if (!href) return null;
                return (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex opacity-90 transition-opacity hover:opacity-100"
                      aria-label={`Ask ${label} about ${site.displayName}`}
                    >
                      <Image
                        src={src}
                        alt={label}
                        width={160}
                        height={50}
                        className="h-7 w-auto object-contain md:h-8"
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}

        <div className="container-site mt-10 space-y-3 text-center">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2.5 text-base font-medium tracking-[-0.5px] text-[var(--text)] md:text-lg"
          >
            <Mail className="h-4 w-4 shrink-0" aria-hidden />
            {site.email}
          </a>
          {site.phone ? (
            <p>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 text-base font-medium text-[var(--text)] md:text-lg"
              >
                <Phone className="h-4 w-4" aria-hidden />
                {site.phone}
              </a>
            </p>
          ) : null}
        </div>

        <div className="container-site mt-16 flex items-center justify-between text-sm text-[var(--text)]">
          <span>{year}</span>
          <div className="flex items-center gap-5">
            <span>All rights reserved.</span>
            <a
              href="https://www.trustpilot.com/review/saifali.site"
              target="_blank"
              rel="noreferrer"
              aria-label="Reviews on Trustpilot"
              className="flex flex-col items-end gap-1"
            >
              <Image
                src="/media/trustpilot-stars.svg"
                alt="Rated on Trustpilot"
                width={120}
                height={23}
                className="h-5 w-auto"
              />
              <span className="text-xs text-[var(--text-secondary)]">
                Trusted by Trustpilot
              </span>
            </a>
          </div>
        </div>
      </div>

      <button
        type="button"
        aria-label="Back to top"
        className={`fixed bottom-[calc(110px+env(safe-area-inset-bottom))] right-5 z-40 rounded-md bg-[var(--nav-bg)] p-2.5 text-white shadow-lg transition-opacity min-[642px]:bottom-[calc(96px+env(safe-area-inset-bottom))] ${
          showTop ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => {
          const reduced = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
          ).matches;
          window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
        }}
      >
        <ChevronUp className="h-4 w-4" />
      </button>
    </footer>
  );
}
