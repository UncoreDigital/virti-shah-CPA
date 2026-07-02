import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import WhyUs from "@/components/sections/WhyUs";
import Workflow from "@/components/sections/Workflow";
import Security from "@/components/sections/Security";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Founded by Virti Shah (CA, CPA, B.Com), VSCPA delivers high-quality outsourced accounting, tax and audit support to US accounting firms — built on expertise, integrity and a client-focused approach.",
};

const servicesProvided = [
  "Tax Preparation and Tax Support Services",
  "Audit and Assurance Support",
  "Bookkeeping and Client Accounting Services (CAS)",
  "Financial Statement Preparation",
  "Accounting and Financial Reporting",
  "Advisory and Finance Support",
];

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="About Virti Shah CPA"
        subtitle="A team of qualified CAs, CPAs and accounting professionals dedicated to high-quality outsourced accounting for US firms."
        crumbs={[{ name: "About Us", href: "/about" }]}
      />

      {/* Founder bio */}
      <section className="section-padding">
        <div className="container-wide grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <Reveal>
            <div className="relative lg:sticky lg:top-28">
              <div className="absolute -inset-4 bg-gradient-gold opacity-10 rounded-3xl blur-2xl" />
              <Image
                src="/assets/founder/virti-shah.jpeg"
                alt="Virti Shah, CA, CPA, B.Com — Founder of Virti Shah CPA"
                width={560}
                height={680}
                className="relative rounded-3xl shadow-elegant-lg w-full object-cover"
              />
              <div className="absolute -bottom-6 left-6 bg-primary text-primary-foreground rounded-2xl px-6 py-4 shadow-lg">
                <div className="font-playfair text-2xl font-bold text-gold">
                  Virti Shah
                </div>
                <div className="font-inter text-xs text-primary-foreground/70">
                  CA, CPA, B.Com — Founder
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-gold" />
              <span className="text-gold font-inter text-sm font-medium tracking-widest uppercase">
                Our Story
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-6">
                Built on technical expertise, integrity &amp; client-focused
                service
              </h2>
            </Reveal>
            <div className="space-y-5 font-inter text-slate leading-relaxed">
              <Reveal delay={0.15}>
                <p>
                  At VSCPA, we are a team of qualified Chartered Accountants
                  (CAs), Certified Public Accountants (CPAs), and accounting
                  professionals dedicated to providing high-quality outsourced
                  accounting services to US CPA, EA, tax, advisory, and
                  accounting firms.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p>
                  Founded by <strong className="text-primary">Virti Shah,
                  CA, CPA, B.Com</strong>, VSCPA is built on a strong foundation
                  of technical expertise, integrity, and client-focused service.
                  With over <strong className="text-primary">11 years of
                  experience</strong> in Indian and US accounting, auditing,
                  taxation, and financial advisory, Virti brings a practical
                  understanding of the challenges accounting firms face and the
                  level of quality they expect from an offshore partner.
                </p>
              </Reveal>
              <Reveal delay={0.25}>
                <p>
                  After qualifying as a Chartered Accountant in 2019, Virti
                  spent <strong className="text-primary">five years at Citrin
                  Cooperman</strong>, where she gained extensive experience
                  serving a diverse portfolio of clients across audit,
                  assurance, taxation, and advisory engagements. In 2022, she
                  founded VSCPA with a vision to help accounting firms scale
                  efficiently by providing dependable, high-quality professional
                  support.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <p>
                  Accounting has always been a part of Virti&apos;s journey.
                  Growing up in a family of accounting professionals, she was
                  inspired by her father, who has successfully practiced as a
                  Chartered Accountant for over{" "}
                  <strong className="text-primary">25 years</strong>. This legacy
                  has shaped VSCPA&apos;s commitment to professionalism, ethics,
                  and long-term client relationships.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.35}>
              <div className="mt-10 bg-muted rounded-2xl p-7">
                <h3 className="font-playfair text-xl font-semibold text-primary mb-5">
                  What we provide
                </h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {servicesProvided.map((s) => (
                    <li
                      key={s}
                      className="flex items-start gap-2.5 font-inter text-sm text-foreground"
                    >
                      <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="pb-4">
        <div className="container-wide">
          <Reveal>
            <div className="bg-gradient-navy rounded-3xl px-8 py-12 md:px-14 md:py-16 text-center max-w-4xl mx-auto">
              <SectionHeading
                eyebrow="Our Mission"
                title="Helping firms grow with confidence"
                light
              />
              <p className="font-inter text-primary-foreground/75 leading-relaxed max-w-2xl mx-auto mt-2">
                To help accounting firms grow with confidence by providing
                reliable, scalable, and high-quality accounting, tax, and audit
                solutions. Through exceptional service, technical excellence, and
                a collaborative approach, we enable our clients to focus on
                serving their own clients while we take care of the rest.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <WhyUs />
      <Workflow />
      <Security />
      <CTA />
    </>
  );
}
