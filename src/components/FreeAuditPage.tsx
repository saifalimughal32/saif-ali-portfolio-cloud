"use client";

import Link from "next/link";
import {
  FormEvent,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import { ArrowLeft, Check } from "lucide-react";
import { PROCESS_STEPS } from "@/content/freeAudit";
import {
  QUIZ_START_ID,
  QUIZ_TOTAL_STEPS,
  getOptionLabel,
  quizQuestions,
  type QuizOption,
} from "@/content/quiz";
import { cn } from "@/lib/utils";
import { FloatingNav } from "./FloatingNav";
import { GreetingLoader } from "./GreetingLoader";
import { MobileHeader } from "./MobileHeader";
import { Reveal } from "./Reveal";
import { SharedFooter } from "./SharedFooter";

type HistoryEntry = { questionId: string; optionId: string };
type Phase = "quiz" | "details" | "success";

type FieldErrors = Partial<
  Record<"name" | "email" | "whatsapp" | "brand" | "website" | "form", string>
>;

function Chip({
  label,
  selected,
  onClick,
  disabled,
}: {
  label: string;
  selected?: boolean;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-pressed={selected}
      className={cn(
        "rounded-full border px-3.5 py-2.5 text-left text-[0.85rem] font-medium transition sm:text-[0.9rem]",
        selected
          ? "border-[var(--accent)] bg-[rgba(226,117,0,0.1)] text-[var(--accent)]"
          : "border-[var(--border)] bg-white text-[var(--text)] hover:border-[var(--accent)]/50",
        disabled && !selected && "pointer-events-none opacity-40",
      )}
    >
      {label}
    </button>
  );
}

export function FreeAuditPage() {
  const formId = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const advanceTimer = useRef<number | null>(null);

  const [phase, setPhase] = useState<Phase>("quiz");
  const [questionId, setQuestionId] = useState(QUIZ_START_ID);
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [selected, setSelected] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [brand, setBrand] = useState("");
  const [website, setWebsite] = useState("");
  const [alreadyTried, setAlreadyTried] = useState("");
  const [usefulLink, setUsefulLink] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const submittedLock = useRef(false);

  const question = quizQuestions[questionId];
  const step = question?.step ?? 1;

  const quizAnswers = useMemo(
    () =>
      history.map((h) => ({
        questionId: h.questionId,
        question: quizQuestions[h.questionId]?.question ?? h.questionId,
        optionId: h.optionId,
        label: getOptionLabel(h.questionId, h.optionId),
      })),
    [history],
  );

  const stageLabel = useMemo(() => {
    const stage = history.find((h) => h.questionId === "stage");
    return stage ? getOptionLabel("stage", stage.optionId) : "";
  }, [history]);

  const clearAdvance = useCallback(() => {
    if (advanceTimer.current != null) {
      window.clearTimeout(advanceTimer.current);
      advanceTimer.current = null;
    }
  }, []);

  useEffect(() => () => clearAdvance(), [clearAdvance]);

  function goNext(option: QuizOption) {
    if (selected || phase !== "quiz") return;
    setSelected(option.id);
    clearAdvance();
    advanceTimer.current = window.setTimeout(() => {
      const nextHistory = [...history, { questionId, optionId: option.id }];
      setHistory(nextHistory);
      setSelected(null);
      if (option.next === "contact") {
        setPhase("details");
        window.setTimeout(() => {
          formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 80);
      } else {
        setQuestionId(option.next);
      }
    }, 220);
  }

  function goBack() {
    clearAdvance();
    setSelected(null);
    if (phase === "details") {
      const last = history[history.length - 1];
      if (last) {
        setPhase("quiz");
        setQuestionId(last.questionId);
        setHistory(history.slice(0, -1));
      }
      return;
    }
    if (history.length === 0) return;
    const prev = history[history.length - 1];
    setHistory(history.slice(0, -1));
    setQuestionId(prev.questionId);
  }

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
    return next;
  }, [name, email, whatsapp, brand, website]);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === "loading" || submittedLock.current || phase !== "details") {
      return;
    }
    if (quizAnswers.length === 0) {
      setErrors({ form: "Please answer the diagnosis questions first." });
      return;
    }

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
          alreadyTried: alreadyTried.trim(),
          usefulLink: usefulLink.trim(),
          stageLabel,
          quizAnswers,
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
      setPhase("success");
      setStatus("idle");
    } catch {
      submittedLock.current = false;
      setStatus("error");
      setErrors({
        form: "Network error. Check your connection and try again.",
      });
    }
  }

  useEffect(() => {
    if (phase !== "success") return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [phase]);

  return (
    <div className="saif-portfolio min-h-screen">
      <GreetingLoader variant="portfolio" />
      <MobileHeader />
      <FloatingNav variant="home" />

      <main>
        {phase === "success" ? (
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
            <section className="container-site pb-10 pt-10 sm:pb-14 sm:pt-14">
              <Reveal>
                <p className="font-hand text-base text-[var(--accent)]">FREE AUDIT</p>
                <h1 className="mt-2 max-w-2xl font-general text-[clamp(2rem,4vw,2.8rem)] font-medium leading-[1.05] tracking-[-2px] text-[var(--text)]">
                  Something isn’t working.
                  <br />
                  Let me find out why.
                </h1>
                <p className="mt-4 max-w-xl text-[0.98rem] leading-relaxed text-[var(--text-secondary)] sm:text-[1.05rem]">
                  Answer a few quick questions about your brand — the same
                  diagnosis I use on the site — then share your details. I’ll
                  review what’s wrong and what needs to change.
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

            <section className="container-site pb-14 sm:pb-20">
              <Reveal>
                <p className="font-hand text-base text-[var(--text-secondary)]">
                  / How it works
                </p>
                <div className="mt-6 grid gap-6 sm:grid-cols-3 sm:gap-8">
                  {PROCESS_STEPS.map((item) => (
                    <div key={item.index}>
                      <p className="font-hand text-sm text-[var(--accent)]">
                        Step {item.index}
                      </p>
                      <h2 className="mt-2 font-general text-[1.25rem] font-medium tracking-[-0.5px] text-[var(--text)] sm:text-[1.35rem]">
                        {item.title}
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </section>

            <section
              id="audit-form"
              className="container-site scroll-mt-28 pb-16 sm:pb-24"
            >
              <Reveal>
                <div className="mx-auto max-w-2xl">
                  <p className="font-hand text-base text-[var(--accent)]">
                    Free Audit Request
                  </p>
                  <h2 className="mt-2 font-general text-[clamp(1.75rem,3.5vw,2.4rem)] font-medium leading-[1.08] tracking-[-1.5px] text-[var(--text)]">
                    {phase === "quiz"
                      ? "Tell me what’s going on."
                      : "Almost done — your details."}
                  </h2>
                  <p className="mt-2 text-sm text-[var(--text-muted)]">
                    {phase === "quiz"
                      ? `Step ${step} of ${QUIZ_TOTAL_STEPS} · same questions as the site quiz`
                      : "Takes about one minute."}
                  </p>

                  {phase === "quiz" && question ? (
                    <div className="mt-8">
                      <div className="mb-5 flex items-center gap-3">
                        {history.length > 0 ? (
                          <button
                            type="button"
                            onClick={goBack}
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-white text-[var(--text)] transition hover:border-[#cfcfcf]"
                            aria-label="Back"
                          >
                            <ArrowLeft className="h-4 w-4" strokeWidth={2} />
                          </button>
                        ) : null}
                        <div
                          className="h-[3px] flex-1 overflow-hidden rounded-full bg-[#e4e4e4]"
                          role="progressbar"
                          aria-valuemin={0}
                          aria-valuemax={100}
                          aria-valuenow={Math.round(
                            (step / QUIZ_TOTAL_STEPS) * 100,
                          )}
                          aria-label={`Step ${step} of ${QUIZ_TOTAL_STEPS}`}
                        >
                          <div
                            className="h-full rounded-full bg-[var(--accent)] transition-[width] duration-300"
                            style={{
                              width: `${(step / QUIZ_TOTAL_STEPS) * 100}%`,
                            }}
                          />
                        </div>
                      </div>

                      <h3 className="font-general text-[clamp(1.35rem,3vw,1.75rem)] font-medium tracking-[-1px] text-[var(--text)]">
                        {question.question}
                      </h3>
                      <div
                        className="mt-5 flex flex-wrap gap-2.5"
                        role="group"
                        aria-label={question.question}
                      >
                        {question.options.map((opt) => (
                          <Chip
                            key={opt.id}
                            label={opt.label}
                            selected={selected === opt.id}
                            disabled={!!selected && selected !== opt.id}
                            onClick={() => goNext(opt)}
                          />
                        ))}
                      </div>
                    </div>
                  ) : null}

                  {phase === "details" ? (
                    <form
                      ref={formRef}
                      onSubmit={onSubmit}
                      noValidate
                      className="mt-8"
                    >
                      <button
                        type="button"
                        onClick={goBack}
                        className="mb-6 inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] transition hover:text-[var(--text)]"
                      >
                        <ArrowLeft className="h-4 w-4" strokeWidth={2} />
                        Edit answers
                      </button>

                      {quizAnswers.length > 0 ? (
                        <div className="mb-8 rounded-[20px] border border-[var(--border)] bg-white px-4 py-4 sm:px-5">
                          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">
                            Your answers
                          </p>
                          <ul className="mt-3 space-y-2.5">
                            {quizAnswers.map((a) => (
                              <li
                                key={`${a.questionId}-${a.optionId}`}
                                className="text-sm leading-snug"
                              >
                                <span className="text-[var(--text-secondary)]">
                                  {a.question}
                                </span>
                                <span className="mx-1.5 text-[var(--text-muted)]">
                                  ·
                                </span>
                                <span className="font-medium text-[var(--text)]">
                                  {a.label}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}

                      <div className="grid gap-5 sm:grid-cols-2">
                        <label className="block">
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

                        <label className="block">
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

                        <label className="block">
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

                        <label className="block">
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
                          Your information stays private and is only used to
                          review your audit request.
                        </p>
                      </div>
                    </form>
                  ) : null}
                </div>
              </Reveal>
            </section>
          </>
        )}
      </main>

      <SharedFooter />
    </div>
  );
}
