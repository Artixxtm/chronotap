import { NextResponse } from "next/server";
import { ipAddress } from "@vercel/functions";
import { EMAIL_PATTERN, EMAIL_MAX_LENGTH } from "@/constants/validation";

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const recentHitsByIp = new Map();

function getClientIp(req) {
  return ipAddress(req) || "unknown";
}

function isRateLimited(ip) {
  const now = Date.now();
  const recent = (recentHitsByIp.get(ip) || []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  recent.push(now);
  recentHitsByIp.set(ip, recent);
  return recent.length > RATE_LIMIT_MAX;
}

function isTrustedOrigin(req) {
  const origin = req.headers.get("origin");
  if (!origin) return true;
  try {
    return new URL(origin).host === req.headers.get("host");
  } catch {
    return false;
  }
}

async function notifyTelegram(email, ip) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) throw new Error("Telegram env vars are not configured");

  const text = [
    "New ChronoTap Waitlist Signup",
    email,
  ].join("\n");

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 8000);

  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        disable_web_page_preview: true,
      }),
      signal: controller.signal,
    });

    if (!res.ok) {
      throw new Error(`Telegram API responded with ${res.status}`);
    }
  } finally {
    clearTimeout(timeoutId);
  }
}

export async function POST(req) {
  if (!isTrustedOrigin(req)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const ip = getClientIp(req);
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const email =
    typeof body.email === "string" ? body.email.trim().toLowerCase() : "";

  if (!email || email.length > EMAIL_MAX_LENGTH || !EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  try {
    await notifyTelegram(email, ip);
  } catch (err) {
    console.error("Waitlist Telegram notify failed:", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 502 });
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}