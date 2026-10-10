import { NextResponse } from "next/server";
import {
  quizContactMethods,
  quizContactTimes,
  type QuizSubmission,
} from "@/content/quiz";

export async function POST(request: Request) {
  let body: Partial<QuizSubmission>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const phone = String(body.phone || "").trim();
  const bestTime = String(body.bestTime || "").trim();
  const preferredContact = String(body.preferredContact || "").trim();
  const stage = String(body.stage || "").trim();
  const stageLabel = String(body.stageLabel || "").trim();
  const answers = Array.isArray(body.answers) ? body.answers : [];

  if (!name || !email || !phone || !bestTime || !preferredContact || !stage) {
    return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
  }
  if (!quizContactTimes.includes(bestTime as (typeof quizContactTimes)[number])) {
    return NextResponse.json({ ok: false, error: "Invalid time" }, { status: 400 });
  }
  if (
    !quizContactMethods.includes(
      preferredContact as (typeof quizContactMethods)[number],
    )
  ) {
    return NextResponse.json({ ok: false, error: "Invalid contact method" }, { status: 400 });
  }

  const payload: QuizSubmission = {
    stage,
    stageLabel,
    answers: answers.map((a) => ({
      questionId: String(a?.questionId || ""),
      question: String(a?.question || ""),
      optionId: String(a?.optionId || ""),
      label: String(a?.label || ""),
    })),
    name,
    email,
    phone,
    bestTime: bestTime as QuizSubmission["bestTime"],
    preferredContact: preferredContact as QuizSubmission["preferredContact"],
    submittedAt: new Date().toISOString(),
  };

  console.info("[quiz]", payload);

  return NextResponse.json({ ok: true, delivery: "local-log" });
}
