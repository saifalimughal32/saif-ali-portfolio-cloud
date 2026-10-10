import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type Payload = {
  name?: string;
  role?: string;
  email?: string;
  statusType?: string;
  info?: string;
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
  const role = String(body.role || "").trim();
  const email = String(body.email || "").trim();
  const statusType = String(body.statusType || "").trim();
  const info = String(body.info || "").trim();

  if (!name || !role || !email || !statusType || !info) {
    return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
  }

  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpHost = process.env.SMTP_HOST || "smtp.hostinger.com";
  const smtpPort = Number(process.env.SMTP_PORT || "465");

  if (!smtpUser || !smtpPass) {
    console.error("[contact] Missing SMTP_USER or SMTP_PASS");
    return NextResponse.json({ ok: false, error: "Delivery failed" }, { status: 500 });
  }

  const text = [
    `Name: ${name}`,
    `Role: ${role}`,
    `Email: ${email}`,
    `Status Type: ${statusType}`,
    `Info: ${info}`,
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
      subject: `New contact form submission: ${name}`,
      text,
    });
  } catch (err) {
    console.error("[contact] SMTP delivery failed", err);
    return NextResponse.json({ ok: false, error: "Delivery failed" }, { status: 500 });
  }

  return NextResponse.json({ ok: true, delivery: "smtp" });
}
