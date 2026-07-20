import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  BookOpenCheck,
  ReceiptText,
  ShieldCheck,
  FileCheck2,
} from "lucide-react";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import Security from "@/components/sections/Security";
import Software from "@/components/sections/Software";
import CTA from "@/components/sections/CTA";
import { services } from "@/lib/site";
import { serviceDetails } from "@/lib/services-data";
import { taxBookkeeping } from "@/lib/firm-data";

const serviceIcons: Record<string, typeof BookOpenCheck> = {
  bookkeeping: BookOpenCheck,
  "tax-preparation": ReceiptText,
  "independent-tax-review": FileCheck2,
  audit: ShieldCheck,
};

// Audit links to its hub; every other service links to its own detail page.
const hrefFor = (slug: string) =>
  slug === "audit" ? "/services/audit" : `/services/${slug}`;

export const metadata: Metadata = {
  title: "Services",
  description:
    "One offshore partner across audit & assurance, tax preparation, independent tax review, bookkeeping and CAS for U.S. CPA, EA and accounting firms.",
};

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        title="One Offshore Partner, Full Coverage"
        subtitle="Audit & assurance, tax, independent review and accounting — delivered as an extension of your firm, under one quality standard."
        crumbs={[{ name: "Services", href: "/services" }]}
      />

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => {
              const detail = serviceDetails[s.slug];
              const Icon = serviceIcons[s.slug];
              const href = hrefFor(s.slug);
              return (
                <Reveal key={s.slug} delay={i * 0.08}>
                  <div className="bg-card rounded-2xl shadow-elegant overflow-hidden card-hover h-full flex flex-col">
                    <div className="bg-gradient-navy p-7 flex items-center justify-between">
                      <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center">
                        <Icon className="w-7 h-7 text-gold" />
                      </div>
                      <span className="font-playfair text-4xl font-bold text-white/15">
                        {s.number}
                      </span>
                    </div>
                    <div className="p-7 flex flex-col flex-grow">
                      <h3 className="font-playfair text-xl font-semibold text-primary mb-3">
                        {s.title}
                      </h3>
                      <p className="font-inter text-slate text-sm leading-relaxed mb-4 flex-grow">
                        {s.teaser}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {detail?.list.slice(0, 4).map((item) => (
                          <li
                            key={item}
                            className="font-inter text-sm text-foreground/80 flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={href}
                        className="inline-flex items-center gap-2 text-gold font-semibold text-sm mt-auto"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tax & Bookkeeping capacity + review workflow (replaces generic pricing) */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <Reveal className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-gold" />
              <span className="text-gold font-inter text-sm font-medium tracking-widest uppercase">
                Tax & Bookkeeping Practice
              </span>
              <div className="h-px w-12 bg-gold" />
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
                Volume handled with control
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="font-inter text-slate">
                An EA-led practice built to absorb your busy-season volume — with
                a structured review process that protects quality at scale.
              </p>
            </Reveal>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {taxBookkeeping.stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06}>
                <div className="bg-card rounded-2xl p-7 shadow-elegant text-center h-full">
                  <div className="font-playfair text-4xl font-bold text-gradient-gold mb-2">
                    {s.value}
                  </div>
                  <div className="font-inter text-sm text-slate leading-snug">
                    {s.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Review workflow */}
          <Reveal>
            <div className="bg-card rounded-2xl p-8 shadow-elegant">
              <h3 className="font-playfair text-xl font-semibold text-primary mb-6 text-center">
                Our review workflow — 3 levels before it reaches you
              </h3>
              <div className="flex flex-col md:flex-row items-stretch justify-center gap-3">
                {taxBookkeeping.reviewWorkflow.map((step, i) => (
                  <div key={step} className="flex items-center gap-3 flex-1">
                    <div className="flex-1 bg-muted rounded-xl px-5 py-4 text-center h-full flex flex-col items-center justify-center">
                      <span className="font-playfair text-2xl font-bold text-gold mb-1">
                        {i + 1}
                      </span>
                      <span className="font-inter text-sm font-medium text-primary leading-snug">
                        {step}
                      </span>
                    </div>
                    {i < taxBookkeeping.reviewWorkflow.length - 1 && (
                      <ArrowRight className="w-5 h-5 text-gold flex-shrink-0 hidden md:block" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="text-center mt-12">
            <Link href="/contact" className="btn-navy">
              Book a Trial
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Software />
      <Security />
      <CTA />
    </>
  );
}
