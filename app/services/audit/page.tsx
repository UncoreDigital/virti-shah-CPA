import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ShieldCheck, Layers, UserCheck } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CTA from "@/components/sections/CTA";
import { auditServices, positioning, capacityStats } from "@/lib/firm-data";

export const metadata: Metadata = {
  title: "Audit & Assurance Services",
  description:
    "Dedicated offshore audit & assurance support for U.S. CPA firms — financial statement, nonprofit, EBP, HUD, Single audits, reviews, compilations and audit preparation.",
};

const pillars = [
  {
    icon: UserCheck,
    title: "CPA-led review",
    body: "Every engagement runs through a multi-level review process before it reaches your partners.",
  },
  {
    icon: Layers,
    title: "Your methodology",
    body: "We work inside your audit approach and file structure — deliverables arrive review-ready.",
  },
  {
    icon: ShieldCheck,
    title: "Secured operations",
    body: "100% on-site, SOC 2 and ISO 27001-aligned controls protecting your clients' data.",
  },
];

export default function AuditHubPage() {
  return (
    <>
      <PageBanner
        title="Audit & Assurance"
        subtitle={positioning.subhead}
        crumbs={[{ name: "Audit & Assurance", href: "/services/audit" }]}
      />

      {/* Intro + pillars */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-gold" />
              <span className="text-gold font-inter text-sm font-medium tracking-widest uppercase">
                Audit-Specialised Outsourcing
              </span>
            </div>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-5">
              An extension of your engagement teams
            </h2>
            <p className="font-inter text-slate leading-relaxed">
              We are not a general accounting shop that also does audits. Audit
              and assurance is our specialisation. Our professionals support the
              full engagement lifecycle — from planning and roll-forward through
              testing, documentation and reporting — so your firm can take on
              more assurance work without stretching partner capacity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="bg-card rounded-2xl p-7 shadow-elegant h-full">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                    <p.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-playfair text-lg font-semibold text-primary mb-2">
                    {p.title}
                  </h3>
                  <p className="font-inter text-sm text-slate leading-relaxed">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* All audit services */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Engagement Types"
            title="Our Audit & Assurance Services"
            subtitle="Each engagement type is handled by professionals who do that work day in and day out."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {auditServices.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.06}>
                <Link
                  href={`/services/audit/${s.slug}`}
                  className="group flex flex-col h-full bg-card rounded-2xl p-7 shadow-elegant border border-transparent hover:border-gold/30 card-hover"
                >
                  <h3 className="font-playfair text-xl font-semibold text-primary mb-3 group-hover:text-gold transition-colors">
                    {s.title}
                  </h3>
                  <p className="font-inter text-sm text-slate leading-relaxed flex-grow">
                    {s.short}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-gold font-medium text-sm mt-5">
                    Explore service
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Capacity band */}
      <section className="py-16 bg-gradient-navy">
        <div className="container-wide grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {capacityStats.map((s) => (
            <div key={s.label}>
              <div className="font-playfair text-4xl font-bold text-gold mb-2">
                {s.value}
              </div>
              <div className="font-inter text-sm text-primary-foreground/70">
                {s.label}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/team" className="inline-flex items-center gap-2 text-gold font-semibold hover:underline">
            See our full capacity story
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <CTA />
    </>
  );
}
