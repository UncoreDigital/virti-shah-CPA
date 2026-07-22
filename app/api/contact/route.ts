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

  const received = new Date().toLocaleString("en-US", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "UTC",
  });

  // Labelled fields rendered as rows (message is handled separately below).
  const rows = [
    { label: "Name", value: escapeHtml(name) },
    {
      label: "Email",
      value: `<a href="mailto:${escapeHtml(email)}" style="color:#245675;text-decoration:none">${escapeHtml(email)}</a>`,
    },
    { label: "Firm / Company", value: escapeHtml(firm) || "—" },
    { label: "Service of interest", value: escapeHtml(service) || "—" },
  ]
    .map(
      ({ label, value }) => `
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #e6eef1;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:bold;letter-spacing:.4px;text-transform:uppercase;color:#5a7784;width:150px;vertical-align:top">${label}</td>
                <td style="padding:12px 0;border-bottom:1px solid #e6eef1;font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#1b3241;vertical-align:top">${value}</td>
              </tr>`
    )
    .join("");

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="color-scheme" content="light">
</head>
<body style="margin:0;padding:0;background-color:#f1f6f8">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f1f6f8">
    <tr>
      <td align="center" style="padding:32px 16px">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:100%;background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(27,50,65,.08)">

          <!-- Header -->
          <tr>
            <td style="background-color:#245675;background-image:linear-gradient(135deg,#245675 0%,#439fad 100%);padding:28px 32px">
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:bold;letter-spacing:1.5px;text-transform:uppercase;color:#bfe3e8">Virti Shah CPA</p>
              <h1 style="margin:6px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:24px;font-weight:bold;color:#ffffff">New Website Enquiry</h1>
            </td>
          </tr>

          <!-- Intro -->
          <tr>
            <td style="padding:28px 32px 8px">
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#3d5560">You've received a new enquiry from the website contact form. Hit <strong>Reply</strong> to respond to the lead directly.</p>
            </td>
          </tr>

          <!-- Details -->
          <tr>
            <td style="padding:8px 32px 4px">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                ${rows}
              </table>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding:20px 32px 4px">
              <p style="margin:0 0 8px;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:bold;letter-spacing:.4px;text-transform:uppercase;color:#5a7784">Message</p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:16px 18px;background-color:#f1f6f8;border-left:3px solid #439fad;border-radius:6px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.65;color:#1b3241;white-space:pre-wrap">${escapeHtml(message)}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 32px 28px">
              <hr style="border:none;border-top:1px solid #e6eef1;margin:0 0 16px">
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.6;color:#8aa0aa">Received ${received} (UTC)<br>Sent automatically from the Virti Shah CPA website.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const text = `NEW WEBSITE ENQUIRY — Virti Shah CPA

Name: ${name}
Email: ${email}
Firm / Company: ${firm || "—"}
Service of interest: ${service || "—"}

Message:
${message}

—
Received ${received} (UTC)
Reply to this email to respond to the lead directly.`;

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
