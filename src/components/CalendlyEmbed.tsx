"use client";

import { useEffect } from "react";
import Link from "next/link";
import { site } from "@/content/site";
import { normalizeCalendlyUrl } from "@/lib/calendly";
import type { CalendlyApi } from "@/types/calendly";

export function CalendlyEmbed({ url }: { url: string }) {
  useEffect(() => {
    const parent = document.getElementById("calendly-embed");
    if (!parent) return;

    const booking = normalizeCalendlyUrl(url);
    let cancelled = false;

    async function mount() {
      if (!document.getElementById("calendly-widget-css")) {
        const link = document.createElement("link");
        link.id = "calendly-widget-css";
        link.rel = "stylesheet";
        link.href = "https://assets.calendly.com/assets/external/widget.css";
        document.head.appendChild(link);
      }

      const ensureScript = () =>
        new Promise<void>((resolve, reject) => {
          const existing = document.getElementById(
            "calendly-widget-js",
          ) as HTMLScriptElement | null;
          if (existing && window.Calendly) {
            resolve();
            return;
          }
          if (existing) {
            existing.addEventListener("load", () => resolve(), { once: true });
            existing.addEventListener(
              "error",
              () => reject(new Error("failed")),
              { once: true },
            );
            return;
          }
          const script = document.createElement("script");
          script.id = "calendly-widget-js";
          script.src =
            "https://assets.calendly.com/assets/external/widget.js";
          script.async = true;
          script.onload = () => resolve();
          script.onerror = () => reject(new Error("failed"));
          document.body.appendChild(script);
        });

      try {
        await ensureScript();
        if (cancelled || !parent) return;
        parent.innerHTML = "";
        const calendly = window.Calendly as CalendlyApi | undefined;
        calendly?.initInlineWidget({
          url: booking,
          parentElement: parent,
        });
      } catch {
        if (!cancelled && parent) {
          parent.innerHTML = `<p class="p-6 text-sm text-[var(--text-secondary)]">Could not load Calendly. <a class="underline" href="${booking}" target="_blank" rel="noreferrer">Open booking page</a>.</p>`;
        }
      }
    }

    void mount();
    return () => {
      cancelled = true;
    };
  }, [url]);

  return (
    <div
      id="calendly-embed"
      className="min-h-[700px] w-full overflow-hidden rounded-[24px] border border-[var(--border)] bg-white"
    />
  );
}

export function BookPageFallback() {
  return (
    <div className="rounded-[24px] border border-[var(--border)] bg-white p-8 md:p-10">
      <h2 className="font-general text-2xl font-medium tracking-[-1px]">
        Connect your Calendly link
      </h2>
      <p className="mt-3 max-w-xl text-[var(--text-secondary)]">
        Add your scheduling URL as{" "}
        <code className="rounded bg-[#f0f0f0] px-1.5 py-0.5 text-sm">
          NEXT_PUBLIC_CALENDLY_URL
        </code>{" "}
        (for example{" "}
        <code className="rounded bg-[#f0f0f0] px-1.5 py-0.5 text-sm">
          https://calendly.com/your-username/30min
        </code>
        ), then restart the dev server. Until then, email works as a fallback.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={`mailto:${site.email}?subject=${encodeURIComponent("Schedule a call")}`}
          className="rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-white"
        >
          Email {site.displayName}
        </a>
        <Link
          href="/#about"
          className="rounded-full bg-[#e0e0e0] px-5 py-2.5 text-sm font-medium text-[var(--text)]"
        >
          Back home
        </Link>
      </div>
    </div>
  );
}
