"use client";
import { CalendarDays } from "lucide-react";
import { normalizeCalendlyUrl } from "@/lib/calendly";
import { cn } from "@/lib/utils";

type ScheduleCallButtonProps = { url: string | null; emailFallback: string; className?: string; label?: string };

export function ScheduleCallButton({ url, emailFallback, className, label = "Schedule a call" }: ScheduleCallButtonProps) {
  const href = url ? normalizeCalendlyUrl(url) : `mailto:${emailFallback}?subject=${encodeURIComponent("Schedule a call")}`;
  return (
    <a href={href} {...(url ? { target: "_blank", rel: "noopener noreferrer" } : {})} aria-label={label}
      className={cn("inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90", className)}>
      <CalendarDays className="h-4 w-4" aria-hidden />
      {label}
    </a>
  );
}
