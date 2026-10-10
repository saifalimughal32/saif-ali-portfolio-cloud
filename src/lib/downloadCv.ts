"use client";

import { site } from "@/content/site";

/**
 * Force a real file download even when the page is served through a
 * preview proxy where the HTML download attribute is ignored.
 */
export async function downloadCv() {
  const url = site.cvUrl || "/api/cv";
  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) throw new Error(`CV fetch failed: ${res.status}`);
    const blob = await res.blob();
    const objectUrl = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = objectUrl;
    a.download = "Saif-Ali-CV.pdf";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(objectUrl);
  } catch {
    // Fallback: open API attachment endpoint
    window.location.href = "/api/cv";
  }
}
