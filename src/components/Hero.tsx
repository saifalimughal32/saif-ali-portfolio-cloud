"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { site } from "@/content/site";
import { DiagnoseQuizTrigger } from "./DiagnoseQuiz";
import { HeroRotatingTagline } from "./HeroRotatingTagline";
import { LocalClock } from "./LocalClock";

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });

export function Hero() {
  const pinRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const shellRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const showreelRef = useRef<HTMLVideoElement>(null);
  const showreelArmed = useRef(false);

  useEffect(() => {
    const pin = pinRef.current;
    const card = cardRef.current;
    const shell = shellRef.current;
    const showreel = showreelRef.current;
    const intro = document.querySelector<HTMLElement>("[data-portrait-story]");
    const about = document.querySelector<HTMLElement>("#about");
    if (!pin || !card || !shell || !intro || !about) return;

    if (showreel) {
      showreel.muted = true;
      showreel.defaultMuted = true;
      showreel.playsInline = true;
      showreel.setAttribute("playsinline", "");
      showreel.setAttribute("webkit-playsinline", "");
    }

    // Defer showreel download until scroll nears the flip (keeps LCP free).
    const armShowreel = () => {
      const v = showreelRef.current;
      if (!v || showreelArmed.current) return;
      showreelArmed.current = true;
      v.preload = "auto";
      try {
        v.load();
      } catch {
        /* ignore */
      }
    };

    const playShowreel = () => {
      const v = showreelRef.current;
      if (!v) return;
      armShowreel();
      if (!v.paused) return;
      v.muted = true;
      void v.play().catch(() => {
        const retry = () => {
          if (v.paused) void v.play().catch(() => undefined);
        };
        v.addEventListener("canplay", retry, { once: true });
        v.addEventListener("loadeddata", retry, { once: true });
      });
    };

    const media = gsap.matchMedia();

    // Desktop only — pin + 3D flip travel (matches nikolaradeski desktop motion).
    // Mobile/tablet keep portrait in normal document flow so it never covers Skills.
    media.add(
      "(min-width: 1000px) and (prefers-reduced-motion: no-preference)",
      () => {
        const displacement = () => Math.min(460, window.innerWidth * 0.28);
        // Hero shell 270×380 → large 9:16 phone so collage frames fill the card
        // Exact 9:16 shell — video contain/center shows full collage (no crop)
        const bigW = () =>
          Math.min(520, Math.max(400, window.innerWidth * 0.32));
        const bigH = () => bigW() * (16 / 9);
        const fadeStart = "top 70%";
        const fadeEnd = "top 12%";

        gsap.set(shell, { width: 270, height: 380 });
        gsap.set(card, { transformOrigin: "50% 50%", scale: 1 });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: intro,
            start: "top top",
            endTrigger: about,
            end: fadeEnd,
            scrub: 1.2,
            pin,
            pinSpacing: false,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // Small in hero → flip → grow shell only (no card scale = no edge crop)
        timeline
          .to(card, {
            x: displacement,
            y: 70,
            rotationZ: 8,
            rotationY: 0,
            scale: 1,
            duration: 0.16,
            ease: "power1.inOut",
          })
          .to(card, {
            rotationY: 180,
            rotationZ: 0,
            duration: 0.36,
            ease: "power2.inOut",
            onStart: playShowreel,
          })
          .to(
            shell,
            {
              width: bigW,
              height: bigH,
              duration: 1.35,
              ease: "power1.out",
            },
            "<0.05",
          )
          .to(
            card,
            {
              scale: 1,
              y: 28,
              x: displacement,
              rotationY: 180,
              duration: 1.35,
              ease: "power1.out",
            },
            "<",
          )
          .to(card, {
            scale: 1,
            y: 28,
            x: displacement,
            rotationY: 180,
            duration: 1.2,
            ease: "none",
          })
          .to(shell, {
            width: 270,
            height: 380,
            duration: 0.35,
            ease: "power1.inOut",
          })
          .to(
            card,
            {
              scale: 1,
              y: 55,
              duration: 0.35,
              ease: "power1.inOut",
            },
            "<",
          )
          .to(card, {
            rotationY: 360,
            duration: 0.28,
            ease: "power2.inOut",
          })
          .to(card, { duration: 0.35, ease: "none" });

        const fade = gsap.fromTo(
          [pin, card],
          { autoAlpha: 1 },
          {
            autoAlpha: 0,
            ease: "none",
            scrollTrigger: {
              trigger: about,
              start: fadeStart,
              end: fadeEnd,
              scrub: true,
              onLeave: () => {
                gsap.set([pin, card], {
                  autoAlpha: 0,
                  pointerEvents: "none",
                });
                showreelRef.current?.pause();
              },
              onEnterBack: () => {
                gsap.set([pin, card], { pointerEvents: "auto" });
                playShowreel();
              },
            },
          },
        );

        const flipTrigger = ScrollTrigger.create({
          trigger: intro,
          start: "top top",
          endTrigger: about,
          end: fadeStart,
          scrub: 1.2,
          onUpdate: (self) => {
            const v = showreelRef.current;
            if (!v) return;
            if (self.progress >= 0.02) armShowreel();
            const backVisible = self.progress >= 0.05 && self.progress <= 0.92;
            if (backVisible) playShowreel();
            else if (!v.paused) v.pause();
          },
        });

        return () => {
          fade.scrollTrigger?.kill();
          fade.kill();
          flipTrigger.kill();
        };
      },
    );

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    document.fonts?.ready?.then(refresh);

    return () => {
      media.revert();
      window.removeEventListener("load", refresh);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      { threshold: 0.05 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[100svh] pt-[4.5rem] min-[642px]:pt-0"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden>
        <video
          ref={videoRef}
          className="h-full w-full object-cover opacity-90 max-[999px]:opacity-70"
          src="/media/hero-bg.mp4"
          poster="/media/hero-bg-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="hero-hex-bg absolute inset-0 -z-10 opacity-0" />
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[var(--page-bg)]"
        aria-hidden
      />

      {/* —— Mobile / tablet: text-first, portrait in flow (no pin) —— */}
      <div className="container-site relative flex min-h-[calc(100svh-4.5rem)] flex-col justify-center gap-6 py-10 min-[1000px]:hidden">
        <div className="flex items-start gap-4">
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full shadow-[0_6px_20px_rgba(0,0,0,0.12)] sm:h-20 sm:w-20">
            <Image
              src="/media/saif-portrait.jpg"
              alt=""
              fill
              sizes="80px"
              className="object-cover"
              priority
            />
          </div>
          <div className="min-w-0 pt-1">
            <p className="font-hand text-sm text-[var(--text-secondary)] sm:text-base">
              {site.heroEyebrow}
            </p>
            {/* SEO: single h1 per page — the page h1 is the sr-only role title in page.tsx, so the hero name renders as a styled p (zero visual change) */}
            <p className="mt-1 font-clash text-[clamp(2.5rem,12vw,3.75rem)] font-semibold leading-[0.92] tracking-[-0.04em] text-[var(--text)]">
              {site.heroLeft}
              <br />
              {site.heroRight}
            </p>
            <HeroRotatingTagline className="mt-3" align="left" />
            <div className="mt-2">
              <LocalClock align="left" />
              <DiagnoseQuizTrigger align="left" />
            </div>
          </div>
        </div>

        {/* Compact static portrait — stays in hero, never overlays Skills */}
        <div className="mx-auto w-full max-w-[220px] sm:max-w-[240px]">
          <div className="portrait-card relative aspect-[270/380] w-full overflow-hidden rounded-[22px] shadow-[0_6px_28px_rgba(0,0,0,0.14)]">
            <Image
              src="/media/saif-portrait.jpg"
              alt={`${site.displayName} portrait`}
              fill
              sizes="(max-width: 640px) 220px, 240px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* —— Desktop: 3-col grid + pin/flip shell —— */}
      <div className="container-site relative hidden min-h-[100svh] items-center gap-8 py-16 min-[1000px]:grid min-[1000px]:grid-cols-[1fr_270px_1fr]">
        <div className="self-center">
          <p className="font-hand text-base text-[var(--text-secondary)]">
            {site.heroEyebrow}
          </p>
          {/* SEO: single h1 per page — desktop hero name is a visual duplicate of the h1 above, so it renders as a styled p (zero visual change) */}
          <p className="font-clash text-[clamp(4rem,8vw,6rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-[var(--text)]">
            {site.heroLeft}
          </p>
        </div>

        <div
          ref={shellRef}
          className="relative z-20 mx-auto h-[380px] w-[270px] will-change-[width,height]"
        >
          <div ref={pinRef} className="portrait-pin !mt-0 h-full w-full">
            <div ref={cardRef} className="portrait-card">
              <div className="portrait-face portrait-front">
                <Image
                  src="/media/saif-portrait.jpg"
                  alt={`${site.displayName} portrait`}
                  width={270}
                  height={380}
                  priority
                  sizes="(min-width: 1000px) 420px, 270px"
                />
              </div>
              <div className="portrait-face portrait-back">
                <video
                  ref={showreelRef}
                  src="/media/showreel.mp4"
                  poster="/media/showreel-poster.jpg"
                  muted
                  playsInline
                  loop
                  preload="none"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="self-center text-right">
          <HeroRotatingTagline className="mb-2" align="right" />
          <p className="font-clash text-[clamp(4rem,8vw,6rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
            {site.heroRight}
          </p>
          <div className="mt-2 flex flex-col items-end">
            <LocalClock align="right" />
            <DiagnoseQuizTrigger align="right" />
          </div>
        </div>
      </div>
    </section>
  );
}
