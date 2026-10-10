import { NextResponse } from "next/server";

type Payload = {
  name?: string;
  role?: string;
  email?: string;
  statusType?: string;
  info?: string;
};

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

  // Local / mock delivery fallback until SMTP or a mail provider is configured.
  console.info("[contact]", {
    name,
    role,
    email,
    statusType,
    info,
    at: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true, delivery: "local-log" });
}
