"use client";

import Link from "next/link";
import { useEffect, useLayoutEffect, useState } from "react";
import { Home } from "lucide-react";
import { cn } from "@/lib/utils";
import { portfolioCategories } from "@/content/portfolio";

const HOME_LINKS = [
  { href: "/#home", label: "Home", id: "home", icon: true },
  { href: "/#skills", label: "Skills", id: "skills" },
  { href: "/#about", label: "About", id: "about" },
  { href: "/portfolio", label: "Portfolio", id: "portfolio", arrow: true },
  { href: "/#testimonials", label: "Reviews", id: "testimonials" },
  { href: "/#contact", label: "Contact me", id: "contact", contact: true },
] as const;

type HomeLink = (typeof HOME_LINKS)[number];

function isContact(link: HomeLink): link is HomeLink & { contact: true } {
  return "contact" in link && link.contact === true;
}
function hasIcon(link: HomeLink): link is HomeLink & { icon: true } {
  return "icon" in link && link.icon === true;
}
function hasArrow(link: HomeLink): link is HomeLink & { arrow: true } {
  return "arrow" in link && link.arrow === true;
}

const MOBILE_NAV_MQ = "(max-width: 641px)";
const SCROLL_HIDE_MS = 1200;

export function FloatingNav({
  variant = "home",
  activeCategory,
  onCategory,
}: {
  variant?: "home" | "portfolio";
  activeCategory?: string;
  onCategory?: (hash: string) => void;
}) {
  const [active, setActive] = useState("home");
  /** Mobile-only scroll reveal; desktop stays always visible via CSS + this flag. */
  const [scrollHideMode, setScrollHideMode] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const chromeVisible = !scrollHideMode || navVisible;

  useEffect(() => {
    if (variant !== "home") return;
    const ids = ["home", "skills", "about", "testimonials", "contact"];
    const observers: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-40% 0px -45% 0px", threshold: 0 },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [variant]);

  useLayoutEffect(() => {
    const mq = window.matchMedia(MOBILE_NAV_MQ);
    let hideTimer: ReturnType<typeof setTimeout> | null = null;

    const clearHide = () => {
      if (hideTimer) {
        clearTimeout(hideTimer);
        hideTimer = null;
      }
    };

    const scheduleHide = () => {
      clearHide();
      hideTimer = setTimeout(() => setNavVisible(false), SCROLL_HIDE_MS);
    };

    const applyMode = () => {
      clearHide();
      if (mq.matches) {
        setScrollHideMode(true);
        setNavVisible(false);
        return;
      }
      setScrollHideMode(false);
      setNavVisible(true);
    };

    const onScroll = () => {
      if (!mq.matches) return;
      setNavVisible(true);
      scheduleHide();
    };

    applyMode();
    mq.addEventListener("change", applyMode);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      clearHide();
      mq.removeEventListener("change", applyMode);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <div
        className={cn("nav-fade", chromeVisible && "nav-chrome-visible")}
        aria-hidden
      />
      <nav
        className={cn(
          "nav-chrome pointer-events-none fixed inset-x-0 bottom-[calc(16px+env(safe-area-inset-bottom))] z-50 flex justify-center px-3 min-[642px]:bottom-[calc(24px+env(safe-area-inset-bottom))] min-[642px]:px-0",
          chromeVisible && "nav-chrome-visible",
        )}
        aria-label="Primary"
        aria-hidden={scrollHideMode && !navVisible}
      >
        <ul
          className={cn(
            "pointer-events-auto mx-auto flex h-[46px] w-max max-w-full min-w-0 items-center gap-0.5 overflow-x-auto rounded-full bg-[var(--nav-bg)] px-1.5 text-[12px] text-white shadow-lg [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
            "min-[642px]:h-[51px] min-[642px]:max-w-[min(590px,100%)] min-[642px]:gap-1 min-[642px]:overflow-visible min-[642px]:px-2 min-[642px]:text-[14px]",
            !chromeVisible && "pointer-events-none",
          )}
        >
          {variant === "home"
            ? HOME_LINKS.map((link) => (
                <li key={link.id} className="shrink-0">
                  <Link
                    href={link.href}
                    tabIndex={chromeVisible ? undefined : -1}
                    className={cn(
                      "flex items-center gap-0.5 rounded-full px-2.5 py-2 transition-colors min-[642px]:gap-1 min-[642px]:px-3",
                      isContact(link)
                        ? "group bg-[var(--accent)] font-medium text-white hover:bg-transparent"
                        : active === link.id
                          ? "text-[var(--accent)]"
                          : "text-white/85 hover:text-white",
                    )}
                  >
                    {hasIcon(link) ? (
                      <Home className="h-3.5 w-3.5 min-[642px]:h-4 min-[642px]:w-4" aria-hidden />
                    ) : null}
                    {isContact(link) ? (
                      <span className="nav-label rounded-full px-0.5 transition-colors group-hover:bg-white group-hover:text-[var(--nav-bg)] group-focus-visible:bg-white group-focus-visible:text-[var(--nav-bg)] min-[642px]:px-1">
                        <span>
                          <span className="min-[642px]:hidden">
                            Hello, it&apos;s me
                          </span>
                          <span className="hidden min-[642px]:inline">
                            Contact me
                          </span>
                        </span>
                        <span>Hello, it&apos;s me</span>
                      </span>
                    ) : (
                      <span className="nav-label">
                        <span>{link.label}</span>
                        <span>{link.label}</span>
                      </span>
                    )}
                    {hasArrow(link) ? (
                      <span className="text-[11px] min-[642px]:text-inherit" aria-hidden>
                        ↗
                      </span>
                    ) : null}
                  </Link>
                </li>
              ))
            : [
                { href: "/", label: "Home", hash: "home" },
                ...portfolioCategories.map((c) => ({
                  href: `/portfolio/#pc=${c.hash}`,
                  label: c.label,
                  hash: c.hash,
                })),
              ].map((link) => (
                <li key={link.hash} className="shrink-0">
                  <button
                    type="button"
                    tabIndex={chromeVisible ? undefined : -1}
                    onClick={() => {
                      if (link.hash === "home") {
                        window.location.href = "/";
                        return;
                      }
                      onCategory?.(link.hash);
                    }}
                    className={cn(
                      "rounded-full px-2.5 py-2 transition-colors min-[642px]:px-3",
                      activeCategory === link.hash ||
                        (link.hash === "all" && activeCategory === "all")
                        ? "text-[var(--accent)]"
                        : "text-white/85 hover:text-white",
                    )}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
        </ul>
      </nav>
    </>
  );
}
