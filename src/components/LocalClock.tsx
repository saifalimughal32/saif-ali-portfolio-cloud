"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

export function LocalClock({ align = "right" }: { align?: "left" | "right" }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const format = () => {
      const formatted = new Intl.DateTimeFormat("en-GB", {
        timeZone: site.timeZone,
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(new Date());
      setTime(formatted);
    };
    format();
    const id = window.setInterval(format, 60_000);
    const onVis = () => {
      if (document.visibilityState === "visible") format();
    };
    document.addEventListener("visibilitychange", onVis);
    return () => {
      clearInterval(id);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <p
      className={cn(
        "mt-3 text-sm text-[var(--text-secondary)]",
        align === "right" ? "text-right" : "text-left",
      )}
    >
      {site.location} · {time || "--:--"} {site.gmtLabel}
    </p>
  );
}
