"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "/#home", label: "Home" },
  { href: "/#skills", label: "Skills" },
  { href: "/#about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/#testimonials", label: "Reviews" },
  { href: "/#contact", label: "Contact" },
];

export function MobileHeader({
  portfolioLinks,
  onPortfolioFilter,
}: {
  portfolioLinks?: { label: string; hash: string }[];
  onPortfolioFilter?: (hash: string) => void;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="min-[642px]:hidden">
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between bg-[#1a1a1a] px-5 py-3.5 pt-[max(0.85rem,env(safe-area-inset-top))] text-white shadow-sm">
        <Link href="/" className="font-general text-sm font-medium text-white">
          {site.displayName} ©
        </Link>
        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center gap-2 rounded-full px-3 py-2 text-sm text-white"
          aria-expanded={open}
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          <span className="flex w-5 flex-col gap-1.5" aria-hidden>
            <span className="block h-[1.5px] w-full bg-white" />
            <span className="block h-[1.5px] w-3/4 bg-white" />
          </span>
          Menu
        </button>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-[60] bg-[var(--page-bg)] transition-all duration-350",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
        data-lenis-prevent
      >
        <div className="flex items-center justify-between bg-[#1a1a1a] px-5 py-3.5 pt-[max(0.85rem,env(safe-area-inset-top))] text-white">
          <span className="text-sm font-medium">{site.displayName}</span>
          <button
            type="button"
            className="min-h-11 rounded-full border border-white/25 px-4 py-2 text-sm"
            onClick={() => setOpen(false)}
          >
            Close
          </button>
        </div>
        <nav
          className="flex flex-col gap-1 px-6 pt-10 pb-[max(2rem,env(safe-area-inset-bottom))]"
          aria-label="Mobile"
        >
          {(portfolioLinks
            ? [
                { href: "/", label: "Home", hash: "home" },
                ...portfolioLinks.map((l) => ({
                  href: `/portfolio/#pc=${l.hash}`,
                  label: l.label,
                  hash: l.hash,
                })),
              ]
            : LINKS.map((l) => ({ ...l, hash: l.href }))
          ).map((link, i) =>
            portfolioLinks && "hash" in link && link.hash !== "home" ? (
              <button
                key={link.label}
                type="button"
                className="min-h-14 border-b border-[var(--border)] py-3 text-left font-clash text-[clamp(1.75rem,8vw,2.5rem)] font-semibold tracking-tight"
                style={{ transitionDelay: `${i * 60}ms` }}
                onClick={() => {
                  onPortfolioFilter?.(link.hash);
                  setOpen(false);
                }}
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="min-h-14 border-b border-[var(--border)] py-3 font-clash text-[clamp(1.75rem,8vw,2.5rem)] font-semibold tracking-tight"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>
        <div className="absolute bottom-10 left-6 right-6 text-sm text-[var(--text-secondary)]">
          <a
            href={`mailto:${site.email}`}
            className="underline-offset-2 hover:underline"
          >
            {site.email}
          </a>
        </div>
      </div>
    </div>
  );
}
