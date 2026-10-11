"use client";

import Link from "next/link";
import {
  FormEvent,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { Check } from "lucide-react";
import {
  AUDIT_TOPICS,
  HELP_OPTIONS,
  PROCESS_STEPS,
  TOPIC_TO_HELP,
  type AuditTopic,
  type HelpOption,
} from "@/content/freeAudit";
import { cn } from "@/lib/utils";
import { FloatingNav } from "./FloatingNav";
import { GreetingLoader } from "./GreetingLoader";
import { MobileHeader } from "./MobileHeader";
import { Reveal } from "./Reveal";
import { SharedFooter } from "./SharedFooter";

type FieldErrors = Partial<
  Record<
    | "name"
    | "email"
    | "whatsapp"
    | "brand"
    | "website"
    | "helpCategory"
    | "problem"
    | "outcome"
    | "form",
    string
  >
>;

function Chip({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={cn(
        "rounded-full border px-3.5 py-2 text-left text-[0.8rem] font-medium transition sm:text-[0.85rem]",
        selected
          ? "border-[var(--accent)] bg-[rgba(226,117,0,0.1)] text-[var(--accent)]"
          : "border-[var(--border)] bg-white text-[var(--text)] hover:border-[var(--accent)]/50",
      )}
    >
      {label}
    </button>
  );
}

export function FreeAuditPage() {
  const formId = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [brand, setBrand] = useState("");
  const [website, setWebsite] = useState("");
  const [helpCategory, setHelpCategory] = useState<HelpOption | "">("");
  const [topicHighlight, setTopicHighlight] = useState<AuditTopic | "">("");
  const [problem, setProblem] = useState("");
  const [alreadyTried, setAlreadyTried] = useState("");
  const [usefulLink, setUsefulLink] = useState("");
  const [outcome, setOutcome] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const submittedLock = useRef(false);

  const selectTopic = useCallback((topic: AuditTopic) => {
    setTopicHighlight(topic);
    const mapped = TOPIC_TO_HELP[topic];
    if (mapped) setHelpCategory(mapped);
    setErrors((prev) => ({ ...prev, helpCategory: undefined }));
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const validate = useCallback((): FieldErrors => {
    const next: FieldErrors = {};
    if (!name.trim()) next.name = "Please enter your name.";
    if (!email.trim()) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      next.email = "Enter a valid email address.";
    }
    if (!whatsapp.trim()) next.whatsapp = "Please enter your WhatsApp number.";
    if (!brand.trim()) next.brand = "Please enter your brand or store name.";
    if (
      website.trim() &&
      !/^https?:\/\//i.test(website.trim()) &&
      !/^[\w.-]+\.[\w.-]+/.test(website.trim())
    ) {
      next.website = "Enter a valid website URL.";
    }
    if (!helpCategory) next.helpCategory = "Select what needs help.";
    if (!problem.trim()) next.problem = "Tell me what problem you are facing.";
    if (!outcome.trim()) next.outcome = "Share the outcome you want.";
    return next;
  }, [name, email, whatsapp, brand, website, helpCategory, problem, outcome]);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === "loading" || submittedLock.current) return;

    const next = validate();
    setErrors(next);
    if (Object.keys(next).length) return;

    submittedLock.current = true;
    setStatus("loading");
    setErrors({});

    try {
      const res = await fetch("/api/free-audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          whatsapp: whatsapp.trim(),
          brand: brand.trim(),
          website: website.trim(),
          helpCategory,
          problem: problem.trim(),
          alreadyTried: alreadyTried.trim(),
          usefulLink: usefulLink.trim(),
          outcome: outcome.trim(),
        }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };
      if (!res.ok || !data.ok) {
        submittedLock.current = false;
        setStatus("error");
        setErrors({
          form:
            data.error === "Delivery failed"
              ? "Could not send your request. Please try again in a moment."
              : "Something went wrong. Please check your details and try again.",
        });
        return;
      }
      setStatus("success");
    } catch {
      submittedLock.current = false;
      setStatus("error");
      setErrors({
        form: "Network error. Check your connection and try again.",
      });
    }
  }

  useEffect(() => {
    if (status !== "success") return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [status]);

  return (
    <div className="saif-portfolio min-h-screen">
      <GreetingLoader variant="portfolio" />
      <MobileHeader />
      <FloatingNav variant="home" />

      <main>
        {status === "success" ? (
          <section className="container-site pb-16 pt-10 sm:pb-24 sm:pt-14">
            <div
              className="mx-auto max-w-xl text-center"
              style={{ animation: "quiz-panel-in 0.45s ease both" }}
            >
              <div
                className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[rgba(226,117,0,0.12)] text-[var(--accent)]"
                aria-hidden
              >
                <Check size={28} strokeWidth={2.5} />
              </div>
              <p className="font-hand text-base text-[var(--accent)]">Free Audit</p>
              <h1 className="mt-2 font-general text-[clamp(2rem,4vw,2.8rem)] font-medium leading-none tracking-[-2px] text-[var(--text)]">
                Audit request received.
              </h1>
              <p className="mt-4 text-[0.98rem] leading-relaxed text-[var(--text-secondary)] sm:text-[1.05rem]">
                I’ve got the details. I’ll review the problem and look for what
                is actually holding things back.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                If I need anything else, I’ll reach out using the contact details
                you submitted.
              </p>
              <Link
                href="/"
                className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--accent)] px-7 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                Back to Home
              </Link>
            </div>
          </section>
        ) : (
          <>
            {/* Hero */}
            <section className="container-site pb-10 pt-10 sm:pb-14 sm:pt-14">
              <Reveal>
                <p className="font-hand text-base text-[var(--accent)]">FREE AUDIT</p>
                <h1 className="mt-2 max-w-2xl font-general text-[clamp(2rem,4vw,2.8rem)] font-medium leading-[1.05] tracking-[-2px] text-[var(--text)]">
                  Something isn’t working.
                  <br />
                  Let me find out why.
                </h1>
                <p className="mt-4 max-w-xl text-[0.98rem] leading-relaxed text-[var(--text-secondary)] sm:text-[1.05rem]">
                  Send me the problem you’re facing with your store, ads,
                  creatives, CRO, or ecommerce growth. I’ll review it, identify
                  what’s actually wrong, and show you what needs to change.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href="#audit-form"
                    className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--accent)] px-7 text-sm font-medium text-white transition-opacity hover:opacity-90"
                  >
                    Get My Free Audit
                  </a>
                  <p className="text-sm text-[var(--text-muted)] sm:pl-1">
                    No sales call required. No payment required.
                  </p>
                </div>
              </Reveal>
            </section>

            {/* Process */}
            <section className="container-site pb-14 sm:pb-20">
              <Reveal>
                <p className="font-hand text-base text-[var(--text-secondary)]">
                  / How it works
                </p>
                <div className="mt-6 grid gap-6 sm:grid-cols-3 sm:gap-8">
                  {PROCESS_STEPS.map((step) => (
                    <div key={step.index}>
                      <p className="font-hand text-sm text-[var(--accent)]">
                        Step {step.index}
                      </p>
                      <h2 className="mt-2 font-general text-[1.25rem] font-medium tracking-[-0.5px] text-[var(--text)] sm:text-[1.35rem]">
                        {step.title}
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                        {step.body}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </section>

            {/* Topics */}
            <section className="container-site pb-14 sm:pb-20">
              <Reveal>
                <h2 className="max-w-xl font-general text-[clamp(1.75rem,3.5vw,2.4rem)] font-medium leading-[1.08] tracking-[-1.5px] text-[var(--text)]">
                  Whatever is slowing your growth, send it.
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-[var(--text-secondary)] sm:text-[0.98rem]">
                  You do not need to know exactly what the problem is. Tell me
                  what you are seeing and I’ll help identify the real issue.
                </p>
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {AUDIT_TOPICS.map((topic) => (
                    <Chip
                      key={topic}
                      label={topic}
                      selected={topicHighlight === topic}
                      onClick={() => selectTopic(topic)}
                    />
                  ))}
                </div>
              </Reveal>
            </section>

            {/* Form */}
            <section
              id="audit-form"
              className="container-site scroll-mt-28 pb-16 sm:pb-24"
            >
              <Reveal>
                <form
                  ref={formRef}
                  onSubmit={onSubmit}
                  noValidate
                  className="mx-auto max-w-2xl"
                >
                  <p className="font-hand text-base text-[var(--accent)]">
                    Free Audit Request
                  </p>
                  <h2 className="mt-2 font-general text-[clamp(1.75rem,3.5vw,2.4rem)] font-medium leading-[1.08] tracking-[-1.5px] text-[var(--text)]">
                    Tell me what’s not working.
                  </h2>
                  <p className="mt-2 text-sm text-[var(--text-muted)]">
                    Takes about one minute.
                  </p>

                  <div className="mt-8 grid gap-5 sm:grid-cols-2">
                    <label className="block sm:col-span-1">
                      <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">
                        Full Name
                      </span>
                      <input
                        id={`${formId}-name`}
                        name="name"
                        autoComplete="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="field-line"
                        placeholder="Your name"
                        aria-invalid={Boolean(errors.name)}
                      />
                      {errors.name ? (
                        <span className="mt-1 block text-xs text-red-600">
                          {errors.name}
                        </span>
                      ) : null}
                    </label>

                    <label className="block sm:col-span-1">
                      <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">
                        Email
                      </span>
                      <input
                        id={`${formId}-email`}
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="field-line"
                        placeholder="you@brand.com"
                        aria-invalid={Boolean(errors.email)}
                      />
                      {errors.email ? (
                        <span className="mt-1 block text-xs text-red-600">
                          {errors.email}
                        </span>
                      ) : null}
                    </label>

                    <label className="block sm:col-span-1">
                      <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">
                        WhatsApp Number
                      </span>
                      <input
                        id={`${formId}-whatsapp`}
                        name="whatsapp"
                        type="tel"
                        autoComplete="tel"
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        className="field-line"
                        placeholder="+1 555 000 0000"
                        aria-invalid={Boolean(errors.whatsapp)}
                      />
                      {errors.whatsapp ? (
                        <span className="mt-1 block text-xs text-red-600">
                          {errors.whatsapp}
                        </span>
                      ) : null}
                    </label>

                    <label className="block sm:col-span-1">
                      <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">
                        Brand or Store Name
                      </span>
                      <input
                        id={`${formId}-brand`}
                        name="brand"
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                        className="field-line"
                        placeholder="Your brand"
                        aria-invalid={Boolean(errors.brand)}
                      />
                      {errors.brand ? (
                        <span className="mt-1 block text-xs text-red-600">
                          {errors.brand}
                        </span>
                      ) : null}
                    </label>

                    <label className="block sm:col-span-2">
                      <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">
                        Website URL{" "}
                        <span className="font-normal normal-case tracking-normal">
                          (optional)
                        </span>
                      </span>
                      <input
                        id={`${formId}-website`}
                        name="website"
                        type="url"
                        inputMode="url"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        className="field-line"
                        placeholder="https://yourstore.com"
                        aria-invalid={Boolean(errors.website)}
                      />
                      {errors.website ? (
                        <span className="mt-1 block text-xs text-red-600">
                          {errors.website}
                        </span>
                      ) : null}
                    </label>
                  </div>

                  <fieldset className="mt-8">
                    <legend className="mb-3 text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">
                      What needs help?
                    </legend>
                    <div className="flex flex-wrap gap-2.5">
                      {HELP_OPTIONS.map((option) => (
                        <Chip
                          key={option}
                          label={option}
                          selected={helpCategory === option}
                          onClick={() => {
                            setHelpCategory(option);
                            setErrors((prev) => ({
                              ...prev,
                              helpCategory: undefined,
                            }));
                          }}
                        />
                      ))}
                    </div>
                    {errors.helpCategory ? (
                      <span className="mt-2 block text-xs text-red-600">
                        {errors.helpCategory}
                      </span>
                    ) : null}
                  </fieldset>

                  <label className="mt-8 block">
                    <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">
                      What problem are you facing?
                    </span>
                    <textarea
                      id={`${formId}-problem`}
                      name="problem"
                      value={problem}
                      onChange={(e) => setProblem(e.target.value)}
                      className="field-line"
                      rows={4}
                      placeholder="For example: We are getting traffic but very few purchases."
                      aria-invalid={Boolean(errors.problem)}
                    />
                    {errors.problem ? (
                      <span className="mt-1 block text-xs text-red-600">
                        {errors.problem}
                      </span>
                    ) : null}
                  </label>

                  <label className="mt-6 block">
                    <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">
                      What have you already tried?{" "}
                      <span className="font-normal normal-case tracking-normal">
                        (optional)
                      </span>
                    </span>
                    <textarea
                      id={`${formId}-tried`}
                      name="alreadyTried"
                      value={alreadyTried}
                      onChange={(e) => setAlreadyTried(e.target.value)}
                      className="field-line"
                      rows={3}
                      placeholder="Ads tests, page changes, offers, tracking fixes…"
                    />
                  </label>

                  <label className="mt-6 block">
                    <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">
                      Share any useful link{" "}
                      <span className="font-normal normal-case tracking-normal">
                        (optional)
                      </span>
                    </span>
                    <input
                      id={`${formId}-link`}
                      name="usefulLink"
                      value={usefulLink}
                      onChange={(e) => setUsefulLink(e.target.value)}
                      className="field-line"
                      placeholder="Ad Library, landing page, product page, Loom, Drive…"
                    />
                  </label>

                  <label className="mt-6 block">
                    <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">
                      What outcome are you trying to achieve?
                    </span>
                    <textarea
                      id={`${formId}-outcome`}
                      name="outcome"
                      value={outcome}
                      onChange={(e) => setOutcome(e.target.value)}
                      className="field-line"
                      rows={3}
                      placeholder="More purchases, lower CPA, clearer funnel…"
                      aria-invalid={Boolean(errors.outcome)}
                    />
                    {errors.outcome ? (
                      <span className="mt-1 block text-xs text-red-600">
                        {errors.outcome}
                      </span>
                    ) : null}
                  </label>

                  {errors.form ? (
                    <p
                      className="mt-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                      role="alert"
                    >
                      {errors.form}
                    </p>
                  ) : null}

                  <div className="mt-8">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="mt-2 w-full rounded-2xl bg-[var(--accent)] px-6 py-4 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:min-w-[220px]"
                    >
                      {status === "loading"
                        ? "Sending…"
                        : "Get My Free Audit"}
                    </button>
                    <p className="mt-3 text-sm text-[var(--text)]">
                      I’ll personally review your submission.
                    </p>
                    <p className="mt-1 text-xs text-[var(--text-muted)]">
                      Your information stays private and is only used to review
                      your audit request.
                    </p>
                  </div>
                </form>
              </Reveal>
            </section>
          </>
        )}
      </main>

      <SharedFooter />
    </div>
  );
}
