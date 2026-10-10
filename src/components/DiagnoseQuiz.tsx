"use client";

import {
  FormEvent,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type ComponentType,
  type SVGProps,
} from "react";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Building2,
  Calendar,
  Check,
  CircleDot,
  Clock,
  HelpCircle,
  Layout,
  Lightbulb,
  Megaphone,
  Package,
  Palette,
  Rocket,
  Search,
  Settings,
  ShoppingBag,
  Sparkles,
  Store,
  Target,
  TrendingUp,
  Users,
  X,
  Zap,
} from "lucide-react";
import {
  QUIZ_START_ID,
  QUIZ_TOTAL_STEPS,
  getOptionLabel,
  quizContactMethods,
  quizContactTimes,
  quizQuestions,
  type QuizContactMethod,
  type QuizContactTime,
  type QuizOption,
  type QuizSubmission,
} from "@/content/quiz";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

type IconType = ComponentType<
  SVGProps<SVGSVGElement> & { size?: number | string }
>;

function quizWhatsAppHref() {
  const text = encodeURIComponent(
    `Hi ${site.displayName} — I just finished the quiz on your site.`,
  );
  return `https://wa.me/${site.whatsappNumber.replace(/\D/g, "")}?text=${text}`;
}

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden
      fill="currentColor"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const MICROCOPY: Record<number, { title: string; body: string }> = {
  1: {
    title: "Quick diagnosis",
    body: "Takes about 10 seconds",
  },
  2: {
    title: "Nice. Keep going",
    body: "Just a few taps left",
  },
  3: {
    title: "Halfway there",
    body: "Your recommendation is taking shape",
  },
  4: {
    title: "Almost done",
    body: "Your recommendation is almost ready",
  },
  5: {
    title: "Last one",
    body: "Then I’ll show you what I’d fix",
  },
};

const STAGE_INSIGHT: Record<string, string> = {
  starting:
    "I’d start with offer clarity and a store built to sell — not just look good.",
  live: "I’d find where buyers drop off before putting more spend behind the store.",
  scale: "I’d tighten creative, offer, and funnel so scale doesn’t raise CPA.",
  systems:
    "I’d map the workflow that’s slowing launches — then simplify the loop.",
  agency:
    "I’d plug in where delivery needs depth, so your clients stay clean and consistent.",
};

function optionIcon(id: string, label: string): IconType {
  const key = `${id} ${label}`.toLowerCase();
  if (/start|idea|launch|rocket/.test(key)) return Rocket;
  if (/live|store|shopify|storefront/.test(key)) return Store;
  if (/scale|growth|trend|roas|cpa|ads|performance/.test(key)) return TrendingUp;
  if (/system|ops|process|workflow|setting/.test(key)) return Settings;
  if (/agency|team|white.?label|collaborat/.test(key)) return Building2;
  if (/product|package|sku/.test(key)) return Package;
  if (/brand|visual|design|logo|palette/.test(key)) return Palette;
  if (/shop|cart|checkout|ecommerce/.test(key)) return ShoppingBag;
  if (/offer|funnel|position|goal|target/.test(key)) return Target;
  if (/market|creative|content|promo|mega/.test(key)) return Megaphone;
  if (/ai|ugc|creative|spark/.test(key)) return Sparkles;
  if (/time|now|month|when|clock|schedul/.test(key)) return Clock;
  if (/calendar|timing|date/.test(key)) return Calendar;
  if (/research|explore|search|unsure|not sure/.test(key)) return Search;
  if (/help|support|need/.test(key)) return HelpCircle;
  if (/speed|fast|zap/.test(key)) return Zap;
  if (/user|customer|people|ugc/.test(key)) return Users;
  if (/page|layout|pdp|section/.test(key)) return Layout;
  if (/data|report|analytics|track/.test(key)) return BarChart3;
  if (/light|direction|plan/.test(key)) return Lightbulb;
  return CircleDot;
}

type Phase = "quiz" | "building" | "contact" | "success";

type HistoryEntry = {
  questionId: string;
  optionId: string;
};

function emptyContact() {
  return {
    name: "",
    email: "",
    phone: "",
    bestTime: "" as QuizContactTime | "",
    preferredContact: "" as QuizContactMethod | "",
  };
}

export function DiagnoseQuizTrigger({
  className,
  align = "right",
}: {
  className?: string;
  align?: "left" | "right";
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "mt-4 inline-flex items-center gap-1.5 rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]",
          align === "right" && "ml-auto",
          className,
        )}
      >
        See What I&apos;d Fix
        <span aria-hidden>↗</span>
      </button>
      <DiagnoseQuizModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}

export function DiagnoseQuizModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const advanceTimer = useRef<number | null>(null);
  const [phase, setPhase] = useState<Phase>("quiz");
  const [questionId, setQuestionId] = useState(QUIZ_START_ID);
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [animKey, setAnimKey] = useState(0);
  const [animDir, setAnimDir] = useState<"forward" | "back">("forward");
  const [progress, setProgress] = useState(100 / QUIZ_TOTAL_STEPS);
  const [contact, setContact] = useState(emptyContact);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const clearAdvance = useCallback(() => {
    if (advanceTimer.current != null) {
      window.clearTimeout(advanceTimer.current);
      advanceTimer.current = null;
    }
  }, []);

  const reset = useCallback(() => {
    clearAdvance();
    setPhase("quiz");
    setQuestionId(QUIZ_START_ID);
    setHistory([]);
    setSelected(null);
    setAnimKey(0);
    setAnimDir("forward");
    setProgress(100 / QUIZ_TOTAL_STEPS);
    setContact(emptyContact());
    setErrors({});
    setSubmitting(false);
    setSubmitError("");
  }, [clearAdvance]);

  useEffect(() => {
    if (!open) return;
    reset();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
      clearAdvance();
    };
  }, [open, onClose, reset, clearAdvance]);

  useEffect(() => {
    if (!open || phase === "building") return;
    const t = window.setTimeout(() => {
      panelRef.current
        ?.querySelector<HTMLElement>("button[data-quiz-option], input, button")
        ?.focus();
    }, 40);
    return () => window.clearTimeout(t);
  }, [open, phase, questionId, animKey]);

  const question = quizQuestions[questionId];
  const step = question?.step ?? 1;
  const micro = MICROCOPY[step] ?? MICROCOPY[1];

  const insight = useMemo(() => {
    const stage = history.find((h) => h.questionId === "stage")?.optionId;
    return stage ? STAGE_INSIGHT[stage] : null;
  }, [history]);

  const progressLabel = useMemo(() => {
    if (phase === "building" || phase === "contact" || phase === "success") {
      return "Complete";
    }
    return `Step ${step} of ${QUIZ_TOTAL_STEPS}`;
  }, [phase, step]);

  function goNext(option: QuizOption) {
    if (selected || phase !== "quiz") return;
    setSelected(option.id);
    setAnimDir("forward");
    const nextProgress =
      option.next === "contact"
        ? 100
        : ((quizQuestions[option.next]?.step ?? step + 1) / QUIZ_TOTAL_STEPS) *
          100;
    setProgress(nextProgress);

    clearAdvance();
    advanceTimer.current = window.setTimeout(() => {
      const nextHistory = [...history, { questionId, optionId: option.id }];
      setHistory(nextHistory);
      setSelected(null);

      if (option.next === "contact") {
        setPhase("building");
        window.setTimeout(() => {
          setPhase("contact");
          setAnimKey((k) => k + 1);
        }, 700);
      } else {
        setQuestionId(option.next);
        setAnimKey((k) => k + 1);
      }
    }, 280);
  }

  function goBack() {
    clearAdvance();
    setSelected(null);
    setAnimDir("back");
    if (phase === "contact" || phase === "building") {
      const last = history[history.length - 1];
      if (last) {
        setPhase("quiz");
        setQuestionId(last.questionId);
        setHistory(history.slice(0, -1));
        const prevQ = quizQuestions[last.questionId];
        setProgress(((prevQ?.step ?? 1) / QUIZ_TOTAL_STEPS) * 100);
        setAnimKey((k) => k + 1);
      }
      return;
    }
    if (history.length === 0) return;
    const prev = history[history.length - 1];
    setHistory(history.slice(0, -1));
    setQuestionId(prev.questionId);
    const prevQ = quizQuestions[prev.questionId];
    setProgress(((prevQ?.step ?? 1) / QUIZ_TOTAL_STEPS) * 100);
    setAnimKey((k) => k + 1);
  }

  async function onSubmitContact(e: FormEvent) {
    e.preventDefault();
    const nextErrors: Record<string, string> = {};
    if (!contact.name.trim()) nextErrors.name = "Please enter your name.";
    if (
      !contact.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email.trim())
    ) {
      nextErrors.email = "Please enter a valid email.";
    }
    if (!contact.phone.trim()) nextErrors.phone = "Please enter your phone.";
    if (!contact.bestTime) nextErrors.bestTime = "Please pick a time.";
    if (!contact.preferredContact) {
      nextErrors.preferredContact = "Please pick a contact method.";
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    const stageEntry = history.find((h) => h.questionId === "stage");
    const stageId = stageEntry?.optionId ?? "";
    const stageLabel = stageEntry
      ? getOptionLabel("stage", stageEntry.optionId)
      : "";

    const payload: QuizSubmission = {
      stage: stageId,
      stageLabel,
      answers: history.map((h) => ({
        questionId: h.questionId,
        question: quizQuestions[h.questionId]?.question ?? h.questionId,
        optionId: h.optionId,
        label: getOptionLabel(h.questionId, h.optionId),
      })),
      name: contact.name.trim(),
      email: contact.email.trim(),
      phone: contact.phone.trim(),
      bestTime: contact.bestTime as QuizContactTime,
      preferredContact: contact.preferredContact as QuizContactMethod,
      submittedAt: new Date().toISOString(),
    };

    setSubmitting(true);
    setSubmitError("");
    try {
      const res = await fetch("/api/quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("failed");
      setPhase("success");
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (!open) return null;

  const canBack =
    phase === "contact" ||
    phase === "building" ||
    (phase === "quiz" && history.length > 0);

  const slideClass =
    animDir === "forward" ? "quiz-slide-forward" : "quiz-slide-back";

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-5"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      data-lenis-prevent
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/50 backdrop-blur-[3px]"
        aria-label="Close quiz"
        onClick={onClose}
      />

      <div
        ref={panelRef}
        className="quiz-modal relative flex max-h-[min(94svh,760px)] w-full max-w-[540px] flex-col overflow-hidden rounded-t-[32px] border border-[var(--border)] bg-[#f7f7f7] shadow-[0_28px_90px_rgba(0,0,0,0.28)] sm:rounded-[32px]"
      >
        {/* Sticky chrome */}
        <div className="sticky top-0 z-10 shrink-0 bg-[#f7f7f7]/95 backdrop-blur-md">
          <div className="px-5 pt-4 sm:px-7 sm:pt-5">
            <div
              className="h-[3px] w-full overflow-hidden rounded-full bg-[#e4e4e4]"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(progress)}
              aria-label={progressLabel}
            >
              <div
                className="quiz-progress-fill h-full rounded-full bg-[var(--accent)]"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-6">
            <div className="flex min-w-0 items-center gap-2.5">
              {canBack && phase !== "building" ? (
                <button
                  type="button"
                  onClick={goBack}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-white text-[var(--text)] shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-colors hover:bg-white hover:border-[#cfcfcf]"
                  aria-label="Back"
                >
                  <ArrowLeft className="h-4 w-4" strokeWidth={2} />
                </button>
              ) : (
                <span className="w-9" aria-hidden />
              )}
              <p className="font-hand text-[13px] text-[var(--text-secondary)] sm:text-sm">
                {phase === "quiz"
                  ? "/ Diagnosis"
                  : phase === "building"
                    ? "/ Building"
                    : phase === "contact"
                      ? "/ Next step"
                      : "/ Sent"}
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-white text-[var(--text)] shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-colors hover:border-[#cfcfcf]"
              aria-label="Close"
            >
              <X className="h-4 w-4" strokeWidth={2} />
            </button>
          </div>
        </div>

        {phase === "quiz" && question ? (
          <div
            key={animKey}
            className={cn(
              "quiz-panel-enter flex-1 overflow-y-auto px-5 pb-7 pt-1 sm:px-7 sm:pb-9",
              slideClass,
            )}
          >
            <div className="mb-4 sm:mb-5">
              <p className="text-[12px] font-medium uppercase tracking-[0.06em] text-[var(--accent)] sm:text-[13px]">
                {micro.title}
              </p>
              <p className="mt-1 text-[13px] text-[var(--text-secondary)] sm:text-sm">
                {micro.body}
              </p>
            </div>

            <h2
              id={titleId}
              className="font-general text-[clamp(1.5rem,4.5vw,2.15rem)] font-medium leading-[1.08] tracking-[-1.5px] text-[var(--text)]"
            >
              {question.question}
            </h2>

            <div
              className="mt-5 flex flex-col gap-2.5 sm:mt-6 sm:gap-3"
              role="group"
              aria-label={question.question}
            >
              {question.options.map((opt, i) => {
                const active = selected === opt.id;
                const Icon = optionIcon(opt.id, opt.label);
                const letter = String.fromCharCode(65 + i);
                return (
                  <button
                    key={opt.id}
                    type="button"
                    data-quiz-option
                    onClick={() => goNext(opt)}
                    disabled={!!selected && !active}
                    style={{ animationDelay: `${40 + i * 35}ms` }}
                    className={cn(
                      "quiz-option-enter group relative flex w-full items-center gap-3.5 rounded-[20px] border bg-white px-3.5 py-3.5 text-left shadow-[0_1px_0_rgba(0,0,0,0.03)] transition-all duration-200 sm:gap-4 sm:rounded-[22px] sm:px-4 sm:py-4",
                      active
                        ? "border-[var(--accent)] bg-[rgba(226,117,0,0.07)] shadow-[0_8px_28px_rgba(226,117,0,0.12)]"
                        : "border-[var(--border)] hover:border-[#c8c8c8] hover:bg-[#fcfcfc] hover:shadow-[0_6px_20px_rgba(0,0,0,0.05)]",
                      selected && !active && "pointer-events-none opacity-40",
                    )}
                  >
                    <span
                      className={cn(
                        "relative flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px] transition-colors sm:h-11 sm:w-11 sm:rounded-[15px]",
                        active
                          ? "bg-[var(--accent)] text-white"
                          : "bg-[#f0f0f0] text-[var(--text-secondary)] group-hover:bg-[#ebebeb]",
                      )}
                    >
                      {active ? (
                        <Check className="h-[18px] w-[18px]" strokeWidth={2.5} />
                      ) : (
                        <Icon className="h-[17px] w-[17px]" strokeWidth={1.7} />
                      )}
                      <span className="sr-only">Option {letter}</span>
                    </span>

                    <span className="min-w-0 flex-1 text-[15px] font-medium leading-snug tracking-[-0.025em] text-[var(--text)] sm:text-[16px]">
                      {opt.label}
                    </span>

                    <span
                      className={cn(
                        "flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors",
                        active
                          ? "bg-[rgba(226,117,0,0.15)] text-[var(--accent)]"
                          : "text-[#c0c0c0] group-hover:text-[var(--text-muted)]",
                      )}
                    >
                      <ArrowRight className="h-4 w-4" strokeWidth={2} />
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        ) : null}

        {phase === "building" ? (
          <div
            className="quiz-panel-enter flex flex-1 flex-col items-center justify-center px-8 py-20 text-center"
            aria-live="polite"
          >
            <div className="quiz-build-ring relative flex h-14 w-14 items-center justify-center">
              <span className="absolute inset-0 rounded-full border-2 border-[var(--accent)]/20" />
              <span className="absolute inset-0 rounded-full border-2 border-transparent border-t-[var(--accent)]" />
              <Sparkles
                className="relative h-5 w-5 text-[var(--accent)]"
                strokeWidth={1.75}
              />
            </div>
            <p className="mt-6 font-hand text-sm text-[var(--text-secondary)]">
              / Reading your answers
            </p>
            <p
              id={titleId}
              className="mt-2 font-general text-[clamp(1.35rem,4vw,1.75rem)] font-medium tracking-[-0.04em] text-[var(--text)]"
            >
              Building your recommendation...
            </p>
          </div>
        ) : null}

        {phase === "contact" ? (
          <form
            onSubmit={onSubmitContact}
            className={cn(
              "quiz-panel-enter flex-1 overflow-y-auto px-5 pb-7 pt-1 sm:px-7 sm:pb-9",
              slideClass,
            )}
            noValidate
          >
            {insight ? (
              <div className="mb-5 rounded-[20px] border border-[var(--accent)]/25 bg-[rgba(226,117,0,0.06)] px-4 py-3.5 sm:mb-6 sm:px-5 sm:py-4">
                <p className="text-[11px] font-medium uppercase tracking-[0.06em] text-[var(--accent)]">
                  What I&apos;d look at first
                </p>
                <p className="mt-1.5 text-[14px] leading-relaxed tracking-[-0.02em] text-[var(--text)] sm:text-[15px]">
                  {insight}
                </p>
              </div>
            ) : null}

            <h2
              id={titleId}
              className="font-general text-[clamp(1.5rem,4.5vw,2.05rem)] font-medium leading-[1.08] tracking-[-1.4px] text-[var(--text)]"
            >
              Leave your details — I&apos;ll follow up.
            </h2>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              Share how to reach you and I&apos;ll come back with a clear next
              step.
            </p>

            <div className="mt-5 space-y-1 sm:mt-6">
              <div>
                <label htmlFor="quiz-name" className="sr-only">
                  Name
                </label>
                <input
                  id="quiz-name"
                  name="name"
                  autoComplete="name"
                  placeholder="Name *"
                  value={contact.name}
                  onChange={(e) =>
                    setContact((c) => ({ ...c, name: e.target.value }))
                  }
                  className="field-line"
                  aria-invalid={!!errors.name}
                />
                {errors.name ? (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                ) : null}
              </div>
              <div>
                <label htmlFor="quiz-email" className="sr-only">
                  Email
                </label>
                <input
                  id="quiz-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Email *"
                  value={contact.email}
                  onChange={(e) =>
                    setContact((c) => ({ ...c, email: e.target.value }))
                  }
                  className="field-line"
                  aria-invalid={!!errors.email}
                />
                {errors.email ? (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                ) : null}
              </div>
              <div>
                <label htmlFor="quiz-phone" className="sr-only">
                  Phone number
                </label>
                <input
                  id="quiz-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="Phone number *"
                  value={contact.phone}
                  onChange={(e) =>
                    setContact((c) => ({ ...c, phone: e.target.value }))
                  }
                  className="field-line"
                  aria-invalid={!!errors.phone}
                />
                {errors.phone ? (
                  <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                ) : null}
              </div>
            </div>

            <fieldset className="mt-5 sm:mt-6">
              <legend className="text-sm font-medium text-[var(--text)]">
                Best time to talk?
              </legend>
              <div className="mt-2.5 grid grid-cols-2 gap-2">
                {quizContactTimes.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setContact((c) => ({ ...c, bestTime: t }))}
                    className={cn(
                      "rounded-[16px] border px-3 py-3 text-sm font-medium transition-all",
                      contact.bestTime === t
                        ? "border-[var(--accent)] bg-[rgba(226,117,0,0.08)] text-[var(--accent)] shadow-[0_4px_16px_rgba(226,117,0,0.1)]"
                        : "border-[var(--border)] bg-white text-[var(--text)] hover:border-[#c8c8c8]",
                    )}
                  >
                    {t}
                  </button>
                ))}
              </div>
              {errors.bestTime ? (
                <p className="mt-1 text-sm text-red-600">{errors.bestTime}</p>
              ) : null}
            </fieldset>

            <fieldset className="mt-4">
              <legend className="text-sm font-medium text-[var(--text)]">
                Preferred contact?
              </legend>
              <div className="mt-2.5 grid grid-cols-2 gap-2">
                {quizContactMethods.map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() =>
                      setContact((c) => ({ ...c, preferredContact: m }))
                    }
                    className={cn(
                      "rounded-[16px] border px-3 py-3 text-sm font-medium transition-all",
                      contact.preferredContact === m
                        ? "border-[var(--accent)] bg-[rgba(226,117,0,0.08)] text-[var(--accent)] shadow-[0_4px_16px_rgba(226,117,0,0.1)]"
                        : "border-[var(--border)] bg-white text-[var(--text)] hover:border-[#c8c8c8]",
                    )}
                  >
                    {m}
                  </button>
                ))}
              </div>
              {errors.preferredContact ? (
                <p className="mt-1 text-sm text-red-600">
                  {errors.preferredContact}
                </p>
              ) : null}
            </fieldset>

            {submitError ? (
              <p className="mt-4 text-sm text-red-600" role="status">
                {submitError}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={submitting}
              className="mt-7 w-full rounded-2xl bg-[var(--accent)] px-6 py-4 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(226,117,0,0.28)] transition-opacity hover:opacity-90 disabled:opacity-60"
            >
              {submitting ? "Sending…" : "Send My Details"}
            </button>
          </form>
        ) : null}

        {phase === "success" ? (
          <div className="quiz-panel-enter flex flex-1 flex-col items-center justify-center px-6 py-12 text-center sm:px-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--accent)]/12">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent)] text-white">
                <Check className="h-5 w-5" strokeWidth={2.5} />
              </span>
            </div>
            <p className="mt-5 font-hand text-sm text-[var(--text-secondary)]">
              / Message received
            </p>
            <h2
              id={titleId}
              className="mt-1 font-general text-[clamp(1.55rem,4vw,1.95rem)] font-medium leading-none tracking-[-1px] text-[var(--text)]"
            >
              Got it — talk soon
            </h2>
            <p className="mx-auto mt-3 max-w-[34ch] text-sm leading-relaxed text-[var(--text-secondary)]">
              Your answers are in. I&apos;ll review what you shared and follow
              up with a clear next step.
            </p>
            <div className="mt-7 flex flex-col items-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-[var(--border)] bg-white px-6 py-3 text-sm font-medium text-[var(--text)] transition-colors hover:bg-white"
              >
                Close
              </button>
              <a
                href={quizWhatsAppHref()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white px-4 py-2 text-xs font-medium text-[var(--text)] transition-colors hover:border-[var(--accent)]/40 hover:text-[var(--accent)]"
              >
                <WhatsAppGlyph className="h-3.5 w-3.5" />
                WhatsApp
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
