"use client";

import Image from "next/image";
import { FormEvent, useCallback, useState } from "react";
import { site } from "@/content/site";
import { ContactThankYouModal } from "./ContactThankYouModal";
import { Reveal } from "./Reveal";
import { ScheduleCallButton } from "./ScheduleCallButton";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [message, setMessage] = useState("");
  const [thankYouOpen, setThankYouOpen] = useState(false);

  const closeThankYou = useCallback(() => {
    setThankYouOpen(false);
    setStatus("idle");
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || "").trim(),
      role: String(data.get("role") || "").trim(),
      email: String(data.get("email") || "").trim(),
      statusType: String(data.get("statusType") || "").trim(),
      info: String(data.get("info") || "").trim(),
    };

    const nextErrors: Record<string, string> = {};
    if (!payload.name) nextErrors.name = "Please enter your name.";
    if (!payload.role) nextErrors.role = "Please enter your role.";
    if (!payload.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
      nextErrors.email = "Please enter a valid email.";
    }
    if (!payload.statusType) nextErrors.statusType = "Please select one.";
    if (!payload.info) nextErrors.info = "Please share a bit more.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setStatus("submitting");
    setMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
      setThankYouOpen(true);
      form.reset();
    } catch {
      setStatus("error");
      setMessage(
        `Something went wrong. You can email me directly at ${site.email}.`,
      );
    }
  }

  return (
    <section id="contact" className="pb-[var(--section-space)]">
      <div className="container-site">
        <Reveal>
          <p className="font-hand text-base text-[var(--text)]">
            / Contact Information
          </p>
          <h2 className="mt-2 font-general text-[clamp(2rem,7vw,4rem)] font-medium leading-none tracking-[-2px]">
            Let&apos;s get <span className="accent">started</span>
          </h2>
        </Reveal>

        <div className="mt-10 grid items-start gap-10 min-[1000px]:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <h3 className="font-general text-[clamp(1.5rem,3vw,2rem)] font-medium tracking-[-1px]">
              How can I help?
            </h3>
            <p className="mt-2 text-[var(--text-secondary)]">
              I would love to hear more about your project or company.
              {site.bookingUrl
                ? " Prefer a call? Book a time on Calendly."
                : null}
            </p>
            {site.bookingUrl ? (
              <div className="mt-4">
                <ScheduleCallButton
                  url={site.bookingUrl}
                  emailFallback={site.email}
                />
              </div>
            ) : null}

            <form className="mt-8 space-y-5" onSubmit={onSubmit} noValidate>
              <div>
                <label htmlFor="name" className="sr-only">
                  Your Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  placeholder="Your Full Name *"
                  className="field-line"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "err-name" : undefined}
                />
                {errors.name ? (
                  <p id="err-name" className="mt-1 text-sm text-red-600">
                    {errors.name}
                  </p>
                ) : null}
              </div>
              <div>
                <label htmlFor="role" className="sr-only">
                  Your Role
                </label>
                <input
                  id="role"
                  name="role"
                  placeholder="Your Role *"
                  className="field-line"
                />
                {errors.role ? (
                  <p className="mt-1 text-sm text-red-600">{errors.role}</p>
                ) : null}
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Your E-mail Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Your E-mail Address *"
                  className="field-line"
                />
                {errors.email ? (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                ) : null}
              </div>
              <fieldset>
                <legend className="text-sm text-[var(--text-muted)]">
                  Your status? *
                </legend>
                <div className="mt-3 flex flex-wrap gap-6">
                  <label className="flex cursor-pointer items-center gap-2.5 text-sm text-[var(--text)]">
                    <input
                      type="radio"
                      name="statusType"
                      value="project"
                      className="h-4 w-4 accent-[var(--accent)]"
                    />
                    I have a project
                  </label>
                  <label className="flex cursor-pointer items-center gap-2.5 text-sm text-[var(--text)]">
                    <input
                      type="radio"
                      name="statusType"
                      value="recruiter"
                      className="h-4 w-4 accent-[var(--accent)]"
                    />
                    I am a recruiter
                  </label>
                </div>
                {errors.statusType ? (
                  <p className="mt-1 text-sm text-red-600">{errors.statusType}</p>
                ) : null}
              </fieldset>
              <div>
                <label htmlFor="info" className="sr-only">
                  More info
                </label>
                <textarea
                  id="info"
                  name="info"
                  placeholder="More info *"
                  className="field-line"
                  rows={3}
                />
                {errors.info ? (
                  <p className="mt-1 text-sm text-red-600">{errors.info}</p>
                ) : null}
              </div>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-2 w-full rounded-2xl bg-[var(--accent)] px-6 py-4 text-sm font-semibold text-white disabled:opacity-60"
              >
                {status === "submitting" ? "Sending…" : "Submit >"}
              </button>
              {status === "error" && message ? (
                <p className="text-sm text-red-600" role="status">
                  {message}
                </p>
              ) : null}
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-[24px] bg-[#1a1a1a]">
              <Image
                src="/media/saif-portrait-contact.jpg"
                alt=""
                width={640}
                height={800}
                className="h-full min-h-[520px] w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent p-7 pt-24 text-white">
                <p className="max-w-sm text-[15px] leading-relaxed text-white/95">
                  If the work above fits what you need, send me a note. Share
                  the goal, a link, budget range, and when you want to start.
                  I&apos;ll reply with the next step.
                </p>
                <p className="mt-5 font-hand text-2xl text-white">
                  {site.displayName}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <ContactThankYouModal open={thankYouOpen} onClose={closeThankYou} />
    </section>
  );
}
