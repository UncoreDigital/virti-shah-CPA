import { NextResponse } from "next/server";
import { Resend } from "resend";

// Runs on the Node.js runtime (not edge) — required for the Resend SDK.
export const runtime = "nodejs";

type Payload = {
  name?: string;
  email?: string;
  firm?: string;
  service?: string;
  message?: string;
  // Honeypot — real users never fill this; bots often do.
  company_website?: string;
};

const MAX = { name: 120, email: 160, firm: 160, service: 80, message: 4000 };

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";
const escapeHtml = (v: string) =>
  v.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!)
  );

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Silently accept spam caught by the honeypot (don't tip off bots).
  if (clean(body.company_website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, MAX.name);
  const email = clean(body.email, MAX.email);
  const firm = clean(body.firm, MAX.firm);
  const service = clean(body.service, MAX.service);
  const message = clean(body.message, MAX.message);

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email and message are required." },
      { status: 400 }
    );
  }
  if (!isEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL; // must be on a domain verified in Resend
  const to = process.env.CONTACT_TO_EMAIL; // where the client wants to receive leads

  if (!apiKey || !from || !to) {
    console.error(
      "Contact form is not configured: missing RESEND_API_KEY, CONTACT_FROM_EMAIL or CONTACT_TO_EMAIL."
    );
    return NextResponse.json(
      { error: "The contact form isn't configured yet. Please email us directly." },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#1e3a44;line-height:1.6">
      <h2 style="margin:0 0 16px">New website enquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Firm / Company:</strong> ${escapeHtml(firm) || "—"}</p>
      <p><strong>Service of interest:</strong> ${escapeHtml(service) || "—"}</p>
      <p style="margin-top:16px"><strong>Message:</strong></p>
      <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
    </div>`;

  const text = `New website enquiry
Name: ${name}
Email: ${email}
Firm / Company: ${firm || "—"}
Service of interest: ${service || "—"}

${message}`;

  try {
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email, // hitting "Reply" answers the lead directly
      subject: `New enquiry from ${name}${firm ? ` (${firm})` : ""}`,
      html,
      text,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Could not send your message. Please email us directly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route exception:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please email us directly." },
      { status: 500 }
    );
  }
}
