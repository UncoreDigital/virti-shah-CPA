import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Phone,
  ChevronRight,
  ShieldCheck,
  BookMarked,
} from "lucide-react";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";
import { cira } from "@/lib/cira";

/**
 * Hidden pending service-line approval, noindex/nofollow, and nothing on the
 * site links here. See the publication note in lib/cira.ts before exposing it.
 */
export const metadata: Metadata = {
  title: cira.seoTitle,
  description: cira.metaDescription,
  robots: { index: false, follow: false },
};

export default function CiraAuditsPage() {
  return (
    <>
      <PageBanner
        eyebrow={cira.eyebrow}
        title={cira.h1}
        subtitle={cira.heroDescription}
        crumbs={[
          { name: "Audit & Assurance", href: "/services/audit" },
          { name: "CIRA, HOA & Condominium Audits", href: `/services/audit/${cira.slug}` },
        ]}
      />

      <section className="section-padding">
        <div className="container-wide grid lg:grid-cols-12 gap-10">
          {/* Main column */}
          <div className="lg:col-span-8 space-y-14">
            <Reveal>
              <p className="font-inter text-slate leading-relaxed text-lg">
                {cira.introduction}
              </p>
            </Reveal>

            {/* Relevant guidance */}
            <Reveal>
              <div>
                <h2 className="font-playfair text-2xl md:text-3xl font-bold text-primary mb-6">
                  {cira.guidanceHeading}
                </h2>
                <ul className="grid sm:grid-cols-3 gap-4 mb-5">
                  {cira.guidance.map((g) => (
                    <li
                      key={g}
                      className="bg-card rounded-2xl p-5 shadow-elegant flex gap-3"
                    >
                      <BookMarked className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="font-inter text-sm text-primary font-medium leading-relaxed">
                        {g}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="font-inter text-sm text-slate leading-relaxed">
                  {cira.guidanceNote}
                </p>
              </div>
            </Reveal>

            {/* What our team handles */}
            <Reveal>
              <div>
                <h2 className="font-playfair text-2xl md:text-3xl font-bold text-primary mb-6">
                  {cira.handlesHeading}
                </h2>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {cira.handles.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2.5 font-inter text-sm text-foreground bg-muted rounded-xl p-4"
                    >
                      <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Workpaper review & tax */}
            <Reveal>
              <div>
                <h2 className="font-playfair text-2xl md:text-3xl font-bold text-primary mb-6">
                  {cira.reviewHeading}
                </h2>
                <div className="space-y-4">
                  {cira.reviewParagraphs.map((p) => (
                    <p
                      key={p}
                      className="font-inter text-slate leading-relaxed"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Professional responsibility */}
            <Reveal>
              <div className="bg-muted rounded-2xl p-7 border-l-4 border-gold">
                <h2 className="font-playfair text-2xl font-bold text-primary mb-5">
                  {cira.responsibilityHeading}
                </h2>
                <div className="space-y-4">
                  {cira.responsibilityParagraphs.map((p) => (
                    <p
                      key={p}
                      className="font-inter text-sm text-slate leading-relaxed"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28 space-y-6">
              <Reveal>
                <div className="bg-gradient-navy rounded-2xl p-7">
                  <h3 className="font-playfair text-xl font-semibold text-primary-foreground mb-3">
                    {cira.sidebar.heading}
                  </h3>
                  <p className="font-inter text-sm text-primary-foreground/85 leading-relaxed mb-6">
                    {cira.sidebar.body}
                  </p>
                  <Link href="/contact" className="btn-gold w-full text-sm">
                    {cira.sidebar.button}
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                  <a
                    href={site.phoneHref}
                    className="mt-4 flex items-center justify-center gap-2 font-inter text-sm text-primary-foreground/80 hover:text-gold transition-colors"
                  >
                    <Phone className="w-4 h-4 text-gold" />
                    {site.phone}
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="bg-card rounded-2xl p-7 shadow-elegant">
                  <h3 className="font-playfair text-lg font-semibold text-primary mb-4">
                    {cira.relatedHeading}
                  </h3>
                  <ul className="space-y-1">
                    {cira.related.map((l) => (
                      <li key={l.name}>
                        <Link
                          href={l.href}
                          className="flex items-center justify-between gap-2 py-2.5 font-inter text-sm text-slate hover:text-gold transition-colors border-b border-border/60"
                        >
                          {l.name}
                          <ChevronRight className="w-4 h-4" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/services/audit"
                    className="mt-4 inline-flex items-center gap-2 font-inter text-sm font-semibold text-gold hover:underline"
                  >
                    {cira.relatedAllLabel}
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </aside>
        </div>
      </section>

      {/* Bottom conversion section */}
      <section className="section-padding pt-0">
        <div className="container-wide">
          <Reveal>
            <div className="relative bg-gradient-navy rounded-3xl px-8 py-14 md:px-16 md:py-16 overflow-hidden text-left">
              <div className="absolute inset-0 opacity-15 pointer-events-none">
                <div className="absolute -top-16 -left-10 w-80 h-80 rounded-full bg-gold blur-3xl" />
                <div className="absolute -bottom-16 -right-10 w-80 h-80 rounded-full bg-gold/60 blur-3xl" />
              </div>
              <div className="relative z-10 max-w-3xl">
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary-foreground mb-5">
                  {cira.bottomCta.heading}
                </h2>
                <p className="font-inter text-primary-foreground/85 text-lg mb-9">
                  {cira.bottomCta.body}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href={cira.bottomCta.primary.href} className="btn-gold">
                    {cira.bottomCta.primary.label}
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href={cira.bottomCta.secondary.href}
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold border-2 border-white/30 text-white hover:bg-white/10 transition-all"
                  >
                    {cira.bottomCta.secondary.label}
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
