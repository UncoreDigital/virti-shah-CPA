"use client";

import { useState } from "react";
import { Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { site } from "@/lib/site";

const SERVICES = [
  "Audit & Assurance",
  "Tax Preparation",
  "Independent Tax Review",
  "Bookkeeping & CAS",
  "Other",
];

const EMPTY = { name: "", email: "", firm: "", service: "", message: "" };

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState(EMPTY);
  // Honeypot — kept off-screen; only bots fill it.
  const [company_website, setCompanyWebsite] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, company_website }),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setStatus("success");
      setForm(EMPTY);
    } catch {
      setErrorMsg(
        "Network error — please check your connection and try again."
      );
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-card rounded-2xl shadow-elegant p-10 text-center">
        <CheckCircle2 className="w-14 h-14 text-gold mx-auto mb-4" />
        <h3 className="font-playfair text-2xl font-semibold text-primary mb-2">
          Thank you!
        </h3>
        <p className="font-inter text-slate">
          Your message has been sent — our team will get back to you promptly.
          You can also reach us anytime at{" "}
          <a href={site.emailHref} className="text-gold hover:underline">
            {site.email}
          </a>
          .
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-lg border border-input bg-background px-4 py-3 font-inter text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition disabled:opacity-60";

  const sending = status === "sending";

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-card rounded-2xl shadow-elegant p-7 md:p-9"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block font-inter text-sm font-medium text-primary mb-2">
            Name *
          </label>
          <input
            required
            name="name"
            value={form.name}
            onChange={handleChange}
            disabled={sending}
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block font-inter text-sm font-medium text-primary mb-2">
            Email *
          </label>
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            disabled={sending}
            placeholder="you@firm.com"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block font-inter text-sm font-medium text-primary mb-2">
            Firm / Company
          </label>
          <input
            name="firm"
            value={form.firm}
            onChange={handleChange}
            disabled={sending}
            placeholder="Your firm"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block font-inter text-sm font-medium text-primary mb-2">
            Service of interest
          </label>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            disabled={sending}
            className={inputClass}
          >
            <option value="">Select a service</option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Honeypot: visually hidden, ignored by humans */}
      <div className="hidden" aria-hidden="true">
        <label>
          Company website
          <input
            type="text"
            name="company_website"
            tabIndex={-1}
            autoComplete="off"
            value={company_website}
            onChange={(e) => setCompanyWebsite(e.target.value)}
          />
        </label>
      </div>

      <div className="mt-5">
        <label className="block font-inter text-sm font-medium text-primary mb-2">
          Message *
        </label>
        <textarea
          required
          name="message"
          value={form.message}
          onChange={handleChange}
          disabled={sending}
          rows={5}
          placeholder="How can we help your firm?"
          className={inputClass}
        />
      </div>

      {status === "error" && (
        <div className="mt-5 flex items-start gap-2.5 rounded-lg bg-red-50 border border-red-200 px-4 py-3">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <p className="font-inter text-sm text-red-700">{errorMsg}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={sending}
        className="btn-gold mt-6 w-full sm:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {sending ? "Sending…" : "Send Message"}
        {sending ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <Send className="w-4 h-4" />
        )}
      </button>
    </form>
  );
}
