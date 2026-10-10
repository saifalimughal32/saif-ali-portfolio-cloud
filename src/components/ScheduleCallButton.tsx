"use client";

import { CalendarDays } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { normalizeCalendlyUrl } from "@/lib/calendly";
import { cn } from "@/lib/utils";
import type { CalendlyApi } from "@/types/calendly";

const SCRIPT_ID = "calendly-widget-js";
const STYLE_ID = "calendly-widget-css";

function loadCalendlyAssets(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();

  if (!document.getElementById(STYLE_ID)) {
    const link = document.createElement("link");
    link.id = STYLE_ID;
    link.rel = "stylesheet";
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    document.head.appendChild(link);
  }

  const existing = document.getElementById(
    SCRIPT_ID,
  ) as HTMLScriptElement | null;
  if (existing && window.Calendly) return Promise.resolve();

  return new Promise((resolve, reject) => {
    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener(
        "error",
        () => reject(new Error("Calendly script failed")),
        { once: true },
      );
      return;
    }
    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Calendly script failed"));
    document.body.appendChild(script);
  });
}

type ScheduleCallButtonProps = {
  url: string | null;
  emailFallback: string;
  className?: string;
  label?: string;
};

export function ScheduleCallButton({
  url,
  emailFallback,
  className,
  label = "Schedule a call",
}: ScheduleCallButtonProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!url) return;
    let cancelled = false;
    loadCalendlyAssets()
      .then(() => {
        if (!cancelled) setReady(true);
      })
      .catch(() => {
        if (!cancelled) setReady(false);
      });
    return () => {
      cancelled = true;
    };
  }, [url]);

  const openCalendly = useCallback(() => {
    if (!url) return;
    const booking = normalizeCalendlyUrl(url);
    const calendly = window.Calendly as CalendlyApi | undefined;
    if (calendly?.initPopupWidget) {
      calendly.initPopupWidget({ url: booking });
      return;
    }
    window.open(booking, "_blank", "noopener,noreferrer");
  }, [url]);

  if (!url) {
    return (
      <a
        href={`mailto:${emailFallback}?subject=${encodeURIComponent("Schedule a call")}`}
        className={cn(
          "inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90",
          className,
        )}
      >
        <CalendarDays className="h-4 w-4" aria-hidden />
        {label}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={openCalendly}
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90",
        className,
      )}
      aria-label={ready ? label : `${label} (loading Calendly)`}
    >
      <CalendarDays className="h-4 w-4" aria-hidden />
      {label}
    </button>
  );
}
