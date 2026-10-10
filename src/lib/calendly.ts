export function getCalendlyUrl(): string | null {
  const fromEnv = process.env.NEXT_PUBLIC_CALENDLY_URL?.trim();
  if (fromEnv) return fromEnv;
  return null;
}

export function normalizeCalendlyUrl(url: string): string {
  const trimmed = url.trim();
  try {
    const parsed = new URL(trimmed);
    // Prefer clean booking page without existing query noise; Calendly adds its own.
    parsed.search = "";
    parsed.hash = "";
    return parsed.toString().replace(/\/$/, "");
  } catch {
    return trimmed.replace(/\/$/, "");
  }
}
