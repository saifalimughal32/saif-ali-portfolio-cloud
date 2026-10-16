import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  quizContactMethods,
  quizContactTimes,
  type QuizSubmission,
} from "@/content/quiz";

const MAILBOX = "info@saifali.site";

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

  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpHost = process.env.SMTP_HOST || "smtp.hostinger.com";
  const smtpPort = Number(process.env.SMTP_PORT || "465");

  if (!smtpUser || !smtpPass) {
    console.error("[quiz] Missing SMTP_USER or SMTP_PASS");
    return NextResponse.json({ ok: false, error: "Delivery failed" }, { status: 500 });
  }

  const text = [
    `New quiz lead: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Best time: ${bestTime}`,
    `Preferred contact: ${preferredContact}`,
    `Stage: ${stage}${stageLabel ? ` (${stageLabel})` : ""}`,
    `Submitted at: ${payload.submittedAt}`,
    "",
    "Answers:",
    ...payload.answers.map((a) => `- ${a.question || a.questionId}: ${a.label || a.optionId}`),
  ].join("\n");

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: MAILBOX,
      to: MAILBOX,
      replyTo: email,
      subject: `New quiz lead: ${name}`,
      text,
    });
  } catch (err) {
    console.error("[quiz] SMTP delivery failed", err);
    return NextResponse.json({ ok: false, error: "Delivery failed" }, { status: 500 });
  }

  return NextResponse.json({ ok: true, delivery: "smtp" });
}
