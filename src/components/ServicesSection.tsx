"use client";

import type { CSSProperties } from "react";
import {
  growthSystemFlow,
  services,
  servicesIntro,
} from "@/content/services";
import { Reveal } from "./Reveal";

export function ServicesSection() {
  return (
    <section
      id="skills"
      className="relative pb-[var(--section-space)] pt-[clamp(5rem,14vw,9rem)]"
      data-services
    >
      <div className="container-site relative">
        <Reveal>
          <p className="font-hand text-base text-[var(--text-secondary)]">
            {servicesIntro.label}
          </p>
          <h2 className="mt-2 font-general text-[clamp(2rem,4vw,2.8rem)] font-medium leading-none tracking-[-2px]">
            What I do <span className="accent">best?</span>
          </h2>
          <p className="mt-4 max-w-2xl text-[var(--text-secondary)]">
            {servicesIntro.body}
          </p>

          {/* Connected flow strip — reads as one system */}
          <div
            className="growth-flow mt-6"
            aria-label="Growth system flow"
          >
            {growthSystemFlow.map((step, i) => (
              <span key={step} className="growth-flow-item">
                <span className="growth-flow-chip">{step}</span>
                {i < growthSystemFlow.length - 1 ? (
                  <span className="growth-flow-arrow" aria-hidden>
                    →
                  </span>
                ) : null}
              </span>
            ))}
            <span className="growth-flow-result">= growth system</span>
          </div>
        </Reveal>

        {/* Sticky stack with spine connector */}
        <div className="relative mt-10 grid gap-5 min-[1000px]:mt-16 min-[1000px]:grid-cols-[minmax(0,1fr)_minmax(280px,0.9fr)] min-[1000px]:gap-8">
          <div className="service-stack relative z-10">
            <div className="service-spine" aria-hidden />

            {services.map((service, i) => {
              const isLast = i === services.length - 1;
              return (
                <article
                  key={service.number}
                  className="service-card-sticky"
                  style={
                    {
                      zIndex: i + 1,
                      "--stack-top": `${72 + Math.min(i, 5) * 14}px`,
                    } as CSSProperties
                  }
                >
                  <div className="service-card">
                    <div className="service-card-meta">
                      <p className="font-hand text-sm text-[var(--text-muted)]">
                        {service.eyebrow}
                      </p>
                      <span className="service-step-pill">
                        Step {service.number} · {service.systemLabel}
                      </span>
                    </div>
                    <h3 className="mt-2 font-general text-[clamp(1.5rem,5vw,2.25rem)] font-medium leading-[1.1] tracking-[-1px]">
                      <span className="text-[var(--text-muted)]">
                        {service.number}.{" "}
                      </span>
                      {service.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-[var(--text-secondary)] sm:mt-4 sm:text-base">
                      {service.description}
                    </p>
                    <ul className="mt-4 space-y-1 text-sm text-[#a5a5a5] sm:mt-5">
                      {service.capabilities.map((item) => (
                        <li key={item}>— {item}</li>
                      ))}
                    </ul>

                    {service.connectsTo ? (
                      <p className="service-connect">
                        <span className="service-connect-label">Feeds into</span>
                        {service.connectsTo}
                      </p>
                    ) : null}

                    {isLast ? (
                      <p className="service-system-close">
                        Together these steps form one growth system — each
                        loop makes the next one sharper.
                      </p>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
          {/* Empty stage — portrait travels here while pinned from hero (desktop only) */}
          <div
            className="pointer-events-none relative hidden min-h-[420px] min-[1000px]:block"
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
}
