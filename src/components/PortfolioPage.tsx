"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Play } from "lucide-react";
import {
  portfolioCategories,
  publishedProjects,
  type PortfolioCategory,
} from "@/content/portfolio";
import { cn } from "@/lib/utils";
import { FloatingNav } from "./FloatingNav";
import { MobileHeader } from "./MobileHeader";
import { PortfolioCategoryHero } from "./PortfolioCategoryHero";
import { SharedFooter } from "./SharedFooter";
import { GreetingLoader } from "./GreetingLoader";

function parseHash(): string {
  if (typeof window === "undefined") return "all";
  const raw = window.location.hash.replace(/^#/, "");
  const match = raw.match(/^(?:pc|pcm)=([^&]+)/);
  return match?.[1] || "all";
}

export function PortfolioPage() {
  const [category, setCategory] = useState("all");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [mediaIndex, setMediaIndex] = useState(0);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    setCategory(parseHash());
    const onHash = () => setCategory(parseHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const setFilter = useCallback((hash: string) => {
    setCategory(hash);
    const url = `${window.location.pathname}#pc=${hash}`;
    window.history.pushState(null, "", url);
  }, []);

  const openProject = useCallback((id: string) => {
    setLightbox(id);
    setMediaIndex(0);
    setVideoFailed(false);
  }, []);

  useEffect(() => {
    setVideoFailed(false);
  }, [mediaIndex, lightbox]);

  const filtered = useMemo(() => {
    if (category === "all") return publishedProjects;
    return publishedProjects.filter(
      (p) => p.category === (category as PortfolioCategory),
    );
  }, [category]);

  const activeCategory = useMemo(
    () =>
      portfolioCategories.find((c) => c.hash === category) ??
      portfolioCategories[0],
    [category],
  );

  const activeProject = publishedProjects.find((p) => p.id === lightbox);
  const mediaCount = activeProject?.media.length ?? 0;
  const activeMedia =
    activeProject?.media[mediaIndex] ?? activeProject?.media[0];

  useEffect(() => {
    if (!lightbox || !activeProject) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") {
        if (mediaCount > 1) {
          setMediaIndex((i) => (i + 1) % mediaCount);
        } else {
          const ids = filtered.map((p) => p.id);
          const idx = ids.indexOf(activeProject.id);
          openProject(ids[(idx + 1) % ids.length]);
        }
      }
      if (e.key === "ArrowLeft") {
        if (mediaCount > 1) {
          setMediaIndex((i) => (i - 1 + mediaCount) % mediaCount);
        } else {
          const ids = filtered.map((p) => p.id);
          const idx = ids.indexOf(activeProject.id);
          openProject(ids[(idx - 1 + ids.length) % ids.length]);
        }
      }
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightbox, activeProject, filtered, mediaCount, openProject]);

  // Touch swipe between gallery slides on mobile
  useEffect(() => {
    if (!lightbox || mediaCount < 2) return;
    let startX = 0;
    let startY = 0;
    const onStart = (e: TouchEvent) => {
      startX = e.touches[0]?.clientX ?? 0;
      startY = e.touches[0]?.clientY ?? 0;
    };
    const onEnd = (e: TouchEvent) => {
      const endX = e.changedTouches[0]?.clientX ?? 0;
      const endY = e.changedTouches[0]?.clientY ?? 0;
      const dx = endX - startX;
      const dy = endY - startY;
      if (Math.abs(dx) < 48 || Math.abs(dx) < Math.abs(dy)) return;
      if (dx < 0) setMediaIndex((i) => (i + 1) % mediaCount);
      else setMediaIndex((i) => (i - 1 + mediaCount) % mediaCount);
    };
    window.addEventListener("touchstart", onStart, { passive: true });
    window.addEventListener("touchend", onEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", onStart);
      window.removeEventListener("touchend", onEnd);
    };
  }, [lightbox, mediaCount]);

  return (
    <div className="saif-portfolio min-h-screen">
      <GreetingLoader variant="portfolio" />
      <MobileHeader
        portfolioLinks={portfolioCategories.map((c) => ({
          label: c.label,
          hash: c.hash,
        }))}
        onPortfolioFilter={setFilter}
      />
      <FloatingNav
        variant="portfolio"
        activeCategory={category}
        onCategory={setFilter}
      />

      <main id="work-postcards" className="px-0 pb-8 pt-24 min-[642px]:pt-16">
        <PortfolioCategoryHero intro={activeCategory.intro} />

        <div className="container-wide mt-10">
          <div
            className="flex flex-wrap items-center justify-center gap-2 border-b border-[var(--border)] pb-4"
            role="tablist"
            aria-label="Portfolio categories"
          >
            {portfolioCategories.map((c) => (
              <button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={category === c.hash}
                className={cn(
                  "relative px-4 py-2 text-sm transition-colors",
                  category === c.hash
                    ? "text-[var(--accent)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--text)]",
                )}
                onClick={() => setFilter(c.hash)}
              >
                {category === c.hash ? (
                  <span className="absolute inset-x-3 top-0 h-0.5 bg-[var(--accent)]" />
                ) : null}
                {c.label}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="mx-auto mt-16 max-w-md rounded-[24px] border border-dashed border-[var(--border)] bg-white/70 px-6 py-12 text-center">
              <p className="font-hand text-base text-[var(--accent)]">
                Coming soon
              </p>
              <p className="mt-3 text-[var(--text-secondary)]">
                {portfolioCategories.find((c) => c.hash === category)
                  ?.emptyMessage ??
                  "No projects in this category yet. Check back soon."}
              </p>
            </div>
          ) : (
            <div className="mt-10 grid gap-10 sm:grid-cols-2">
              {filtered.map((project) => {
                const isVideo = project.media.some((m) => m.type === "video");
                return (
                  <button
                    key={project.id}
                    type="button"
                    className="group rounded-[22px] bg-[#f3f3f3] p-4 text-left transition-opacity sm:rounded-[28px] sm:p-8"
                    onClick={() => openProject(project.id)}
                  >
                    <div className="relative overflow-hidden rounded-[20px] bg-white">
                      <Image
                        src={project.thumbnail}
                        alt={project.thumbnailAlt}
                        width={1200}
                        height={900}
                        quality={75}
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                      {isVideo ? (
                        <span
                          className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/15 transition-colors group-hover:bg-black/25"
                          aria-hidden
                        >
                          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-[var(--text)] shadow-[0_8px_28px_rgba(0,0,0,0.2)] sm:h-16 sm:w-16">
                            <Play
                              className="ml-0.5 h-6 w-6 fill-current sm:h-7 sm:w-7"
                              strokeWidth={0}
                            />
                          </span>
                        </span>
                      ) : null}
                    </div>
                    <div className="mt-4 flex items-center justify-between gap-3">
                      <p className="font-medium">{project.title}</p>
                      <span className="rounded-full bg-white px-3 py-1 text-xs uppercase tracking-wide text-[var(--text-muted)]">
                        {isVideo ? "Video" : project.status}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </main>

      <SharedFooter />

      {activeProject && activeMedia ? (
        <div
          className="fixed inset-0 z-[80] flex items-end justify-center bg-black/70 p-0 sm:items-center sm:p-4"
          role="dialog"
          aria-modal
          aria-label={activeProject.title}
          onClick={() => setLightbox(null)}
          data-lenis-prevent
        >
          <div
            className="max-h-[92svh] w-full max-w-4xl overflow-auto rounded-t-[24px] bg-white p-3 pb-[max(1rem,env(safe-area-inset-bottom))] sm:rounded-[24px] sm:p-4"
            onClick={(e) => e.stopPropagation()}
          >
            {activeMedia.type === "video" ? (
              videoFailed ? (
                <div className="relative mx-auto flex aspect-video w-full max-h-[52svh] items-center justify-center overflow-hidden rounded-[16px] bg-black sm:max-h-[65vh]">
                  {activeMedia.poster ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={activeMedia.poster}
                      alt=""
                      className="absolute inset-0 h-full w-full object-contain opacity-40"
                    />
                  ) : null}
                  <p className="relative z-10 max-w-[28ch] px-6 text-center text-sm text-white/90">
                    Video file missing. Add the .mp4 to{" "}
                    <span className="font-medium text-white">
                      public/projects/ai-creatives/
                    </span>
                  </p>
                </div>
              ) : (
                <video
                  key={activeMedia.src}
                  src={activeMedia.src}
                  poster={activeMedia.poster}
                  controls
                  playsInline
                  autoPlay
                  muted
                  loop
                  preload="metadata"
                  onError={() => setVideoFailed(true)}
                  className="mx-auto h-auto max-h-[52svh] w-full rounded-[16px] bg-black object-contain sm:max-h-[65vh]"
                />
              )
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={activeMedia.src}
                src={activeMedia.src}
                alt={activeProject.thumbnailAlt}
                className="mx-auto h-auto max-h-[52svh] w-full rounded-[16px] bg-[#f4f4f4] object-contain sm:max-h-[65vh]"
                decoding="async"
              />
            )}
            <div className="flex flex-col gap-3 p-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-4">
              <div className="min-w-0 flex-1">
                <p className="font-medium">{activeProject.title}</p>
                {activeProject.description ? (
                  <p className="text-sm text-[var(--text-secondary)]">
                    {activeProject.description}
                  </p>
                ) : null}
                {mediaCount > 1 ? (
                  <p className="mt-1 text-xs text-[var(--text-muted)]">
                    {mediaIndex + 1} / {mediaCount}
                    <span className="hidden sm:inline"> — use arrow keys</span>
                    <span className="sm:hidden"> — swipe to browse</span>
                  </p>
                ) : null}
              </div>
              <div className="flex gap-2">
                {mediaCount > 1 ? (
                  <>
                    <button
                      type="button"
                      className="min-h-11 flex-1 rounded-full border border-[var(--border)] px-4 py-2.5 text-sm sm:flex-none"
                      onClick={() =>
                        setMediaIndex((i) => (i - 1 + mediaCount) % mediaCount)
                      }
                    >
                      Prev
                    </button>
                    <button
                      type="button"
                      className="min-h-11 flex-1 rounded-full border border-[var(--border)] px-4 py-2.5 text-sm sm:flex-none"
                      onClick={() =>
                        setMediaIndex((i) => (i + 1) % mediaCount)
                      }
                    >
                      Next
                    </button>
                  </>
                ) : null}
                <button
                  type="button"
                  className="min-h-11 flex-1 rounded-full border border-[var(--border)] px-4 py-2.5 text-sm sm:flex-none"
                  onClick={() => setLightbox(null)}
                >
                  Close
                </button>
              </div>
            </div>
            {mediaCount > 1 ? (
              <div className="-mx-1 flex gap-2 overflow-x-auto px-3 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {activeProject.media.map((m, i) => (
                  <button
                    key={m.src}
                    type="button"
                    className={cn(
                      "relative h-14 w-[4.5rem] shrink-0 overflow-hidden rounded-lg border-2 sm:h-16 sm:w-20",
                      i === mediaIndex
                        ? "border-[var(--accent)]"
                        : "border-transparent",
                    )}
                    onClick={() => setMediaIndex(i)}
                  >
                    <Image
                      src={m.type === "video" ? m.poster || m.src : m.src}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}
