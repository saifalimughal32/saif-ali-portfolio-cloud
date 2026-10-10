"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { faqItems } from "@/content/faq";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="pb-[var(--section-space)]">
      <div className="container-site">
        <Reveal>
          <h2 className="font-general text-[clamp(2rem,4vw,2.8rem)] font-medium leading-none tracking-[-2px]">
            How can I <span className="accent">help?</span>
          </h2>
        </Reveal>

        <div className="mt-8 space-y-2.5">
          {faqItems.map((item, i) => {
            const isOpen = open === i;
            const panelId = `faq-panel-${i}`;
            const btnId = `faq-btn-${i}`;
            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-[20px] border border-[var(--border)] bg-white"
              >
                <button
                  id={btnId}
                  type="button"
                  className="flex min-h-[54px] w-full items-center justify-between gap-4 px-5 py-3 text-left"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="font-medium">{item.question}</span>
                  <Plus
                    className={cn(
                      "h-5 w-5 shrink-0 transition-transform duration-300",
                      isOpen && "rotate-45",
                    )}
                  />
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-[var(--text-secondary)]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
