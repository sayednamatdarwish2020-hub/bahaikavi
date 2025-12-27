import { z } from 'zod';

// Very small in-memory rate limiter (per server instance).
// Good enough for a simple contact form. For production multi-instance,
// use Redis / Upstash.
const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQ = 5;
const bucket = new Map();

const Schema = z.object({
  locale: z.string().optional(),
  name: z.string().trim().min(0).max(80).optional(),
  email: z.string().trim().email().max(120),
  subject: z.string().trim().min(2).max(120),
  message: z.string().trim().min(2).max(2000),
});

function getIp(req) {
  const xf = req.headers['x-forwarded-for'];
  if (typeof xf === 'string') return xf.split(',')[0].trim();
  return req.socket?.remoteAddress || 'unknown';
}

function sameOrigin(req) {
  const origin = req.headers.origin;
  const host = req.headers.host;
  if (!origin || !host) return true; // server-to-server or some deployments
  try {
    const o = new URL(origin);
    return o.host === host;
  } catch {
    return false;
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false });
  }

  if (!sameOrigin(req)) {
    return res.status(403).json({ ok: false, error: 'origin' });
  }

  const ip = getIp(req);
  const now = Date.now();
  const entry = bucket.get(ip);
  if (entry && now - entry.start < WINDOW_MS && entry.count >= MAX_REQ) {
    return res.status(429).json({ ok: false, error: 'rate_limit' });
  }
  if (!entry || now - entry.start >= WINDOW_MS) {
    bucket.set(ip, { start: now, count: 1 });
  } else {
    entry.count += 1;
  }

  const parsed = Schema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ ok: false, error: 'validation' });
  }

  // Security note:
  // - We DO NOT store messages in a database here to avoid DB/security complexity.
  // - Hook this into a secure mailbox or ticketing system (SMTP/API) via environment variables.
  // Example (later): send email using RESEND / SMTP.
  // For now, we just log on the server and return success.
  const { locale, name, email, subject, message } = parsed.data;
  console.log('[contact]', { locale, name, email, subject, messageLen: message.length });

  return res.status(200).json({ ok: true });
}
