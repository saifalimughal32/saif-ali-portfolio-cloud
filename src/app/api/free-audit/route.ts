import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type QuizAnswer = {
  questionId?: string;
  question?: string;
  optionId?: string;
  label?: string;
};

type Payload = {
  name?: string;
  email?: string;
  whatsapp?: string;
  brand?: string;
  website?: string;
  alreadyTried?: string;
  usefulLink?: string;
  stageLabel?: string;
  quizAnswers?: QuizAnswer[];
};

const MAILBOX = "info@saifali.site";

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const whatsapp = String(body.whatsapp || "").trim();
  const brand = String(body.brand || "").trim();
  const website = String(body.website || "").trim();
  const alreadyTried = String(body.alreadyTried || "").trim();
  const usefulLink = String(body.usefulLink || "").trim();
  const stageLabel = String(body.stageLabel || "").trim();
  const quizAnswers = Array.isArray(body.quizAnswers)
    ? body.quizAnswers
        .map((a) => ({
          question: String(a?.question || "").trim(),
          label: String(a?.label || "").trim(),
        }))
        .filter((a) => a.question && a.label)
    : [];

  if (!name || !email || !whatsapp || !brand) {
    return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
  }
  if (quizAnswers.length === 0) {
    return NextResponse.json({ ok: false, error: "Missing quiz answers" }, { status: 400 });
  }
  if (website && !/^https?:\/\//i.test(website) && !/^[\w.-]+\.[\w.-]+/.test(website)) {
    return NextResponse.json({ ok: false, error: "Invalid website" }, { status: 400 });
  }

  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpHost = process.env.SMTP_HOST || "smtp.hostinger.com";
  const smtpPort = Number(process.env.SMTP_PORT || "465");

  if (!smtpUser || !smtpPass) {
    console.error("[free-audit] Missing SMTP_USER or SMTP_PASS");
    return NextResponse.json({ ok: false, error: "Delivery failed" }, { status: 500 });
  }

  const auditType = stageLabel || quizAnswers[0]?.label || "Audit";
  const submittedAt = new Date().toISOString();
  const quizBlock = quizAnswers
    .map((a, i) => `${i + 1}. ${a.question}\n   → ${a.label}`)
    .join("\n");

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `WhatsApp: ${whatsapp}`,
    `Brand: ${brand}`,
    `Website: ${website || "—"}`,
    `Stage: ${stageLabel || "—"}`,
    "",
    `Diagnosis answers:`,
    quizBlock,
    "",
    `What they already tried:`,
    alreadyTried || "—",
    "",
    `Relevant links:`,
    usefulLink || "—",
    "",
    `Submission date: ${submittedAt}`,
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
      subject: `New Free Audit Request | ${brand} | ${auditType}`,
      text,
    });
  } catch (err) {
    console.error("[free-audit] SMTP delivery failed", err);
    return NextResponse.json({ ok: false, error: "Delivery failed" }, { status: 500 });
  }

  return NextResponse.json({ ok: true, delivery: "smtp" });
}
