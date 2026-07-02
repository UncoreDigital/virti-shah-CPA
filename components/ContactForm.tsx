"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { site } from "@/lib/site";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    firm: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No backend yet — compose an email for the client to wire up later.
    const subject = encodeURIComponent(
      `New enquiry from ${form.name}${form.firm ? ` (${form.firm})` : ""}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nFirm: ${form.firm}\nService: ${form.service}\n\n${form.message}`
    );
    window.location.href = `${site.emailHref}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-card rounded-2xl shadow-elegant p-10 text-center">
        <CheckCircle2 className="w-14 h-14 text-gold mx-auto mb-4" />
        <h3 className="font-playfair text-2xl font-semibold text-primary mb-2">
          Thank you!
        </h3>
        <p className="font-inter text-slate">
          Your email client should now be open. If not, reach us directly at{" "}
          <a href={site.emailHref} className="text-gold hover:underline">
            {site.email}
          </a>
          .
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-lg border border-input bg-background px-4 py-3 font-inter text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition";

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
            className={inputClass}
          >
            <option value="">Select a service</option>
            <option value="Bookkeeping">Bookkeeping</option>
            <option value="Tax Preparation">Tax Preparation</option>
            <option value="Audit">Audit</option>
            <option value="Other">Other</option>
          </select>
        </div>
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
          rows={5}
          placeholder="How can we help your firm?"
          className={inputClass}
        />
      </div>
      <button type="submit" className="btn-gold mt-6 w-full sm:w-auto">
        Send Message
        <Send className="w-4 h-4" />
      </button>
    </form>
  );
}
