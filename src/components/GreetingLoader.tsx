"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/** Short greeting flash — keep brief so the site opens quickly. */
const GREETINGS = [
  "Hello....",
  "Welcome",
  "Salaam",
  "Hey",
  "Namaste",
];

const EASE = "cubic-bezier(.4,0,.2,1)";
const STORAGE_DONE = "done";

function storageKey(variant: "home" | "portfolio") {
  return `saif-loader-${variant}`;
}

function LetterWord({
  word,
  staggerMs,
  durationMs,
  delayMs = 0,
}: {
  word: string;
  staggerMs: number;
  durationMs: number;
  delayMs?: number;
}) {
  return (
    <span className="inline-flex" aria-hidden>
      {word.split("").map((char, i) => (
        <span
          key={`${word}-${i}-${char}`}
          className="inline-block opacity-0 translate-y-5"
          style={{
            animationName: "loader-letter-in",
            animationDuration: `${durationMs}ms`,
            animationTimingFunction: EASE,
            animationFillMode: "forwards",
            animationDelay: `${delayMs + i * staggerMs}ms`,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}

export function GreetingLoader({
  variant = "home",
}: {
  variant?: "home" | "portfolio";
}) {
  const key = storageKey(variant);
  // Server + first client paint must match — never read sessionStorage in useState.
  const [visible, setVisible] = useState(true);
  const [word, setWord] = useState(
    variant === "home" ? "Hello...." : "Welcome",
  );
  const [phase, setPhase] = useState<"enter" | "cycle" | "exit">("enter");
  const [letterKey, setLetterKey] = useState(0);
  const timers = useRef<number[]>([]);
  const finished = useRef(false);

  useEffect(() => {
    if (sessionStorage.getItem(key) === STORAGE_DONE) {
      setVisible(false);
      return;
    }

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) {
      sessionStorage.setItem(key, STORAGE_DONE);
      setVisible(false);
      return;
    }

    const track = (id: number) => {
      timers.current.push(id);
      return id;
    };

    const finish = () => {
      if (finished.current) return;
      finished.current = true;
      setPhase("exit");
      track(
        window.setTimeout(() => {
          sessionStorage.setItem(key, STORAGE_DONE);
          setVisible(false);
        }, 280),
      );
    };

    if (variant === "portfolio") {
      track(window.setTimeout(finish, 1400));
      track(window.setTimeout(finish, 2200));
      return () => {
        timers.current.forEach((t) => {
          clearTimeout(t);
          clearInterval(t);
        });
        timers.current = [];
      };
    }

    track(
      window.setTimeout(() => {
        setPhase("cycle");
        let idx = 0;
        const cycleTimer = window.setInterval(() => {
          idx += 1;
          if (idx >= GREETINGS.length) {
            window.clearInterval(cycleTimer);
            finish();
            return;
          }
          setWord(GREETINGS[idx]);
          setLetterKey((k) => k + 1);
        }, 70);
        timers.current.push(cycleTimer as unknown as number);
      }, 380),
    );

    track(window.setTimeout(finish, 1100));

    return () => {
      timers.current.forEach((t) => {
        clearTimeout(t);
        clearInterval(t);
      });
      timers.current = [];
    };
  }, [variant, key]);

  if (!visible) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center bg-black text-white transition-opacity duration-500",
        phase === "exit" && "opacity-0 pointer-events-none",
      )}
      aria-hidden
    >
      {variant === "home" ? (
        <p
          key={letterKey}
          className="font-clash text-5xl font-semibold tracking-tight md:text-7xl"
        >
          <LetterWord
            word={word}
            staggerMs={phase === "cycle" ? 0 : 35}
            durationMs={phase === "cycle" ? 60 : 180}
          />
        </p>
      ) : (
        <div className="text-center font-clash text-4xl font-semibold tracking-tight md:text-6xl">
          <p>
            <LetterWord word="Welcome" staggerMs={40} durationMs={250} />
          </p>
          <p className="mt-2 text-white/80">
            <LetterWord
              word="to my world!"
              staggerMs={40}
              durationMs={250}
              delayMs={7 * 40}
            />
          </p>
        </div>
      )}
    </div>
  );
}
