import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Phone, ChevronRight } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";
import { howWeWork } from "@/lib/pages-content";

export const metadata: Metadata = {
  title: howWeWork.seoTitle,
  description: howWeWork.metaDescription,
};

export default function HowWeWorkPage() {
  return (
    <>
      <PageBanner
        title={howWeWork.h1}
        subtitle={howWeWork.subtitle}
        crumbs={[{ name: "How We Work", href: "/how-we-work" }]}
      />

      {/* Proof strip */}
      <section className="bg-muted border-b border-border">
        <div className="container-wide py-6">
          <ul className="flex flex-wrap items-center gap-x-3 gap-y-2 font-inter text-sm text-primary">
            {howWeWork.proofStrip.map((p, i) => (
              <li key={p} className="flex items-center gap-3">
                {i > 0 && <span className="text-gold">&middot;</span>}
                <span className="font-medium">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <Reveal>
            <p className="max-w-3xl font-inter text-slate leading-relaxed mb-14">
              {howWeWork.opening}
            </p>
          </Reveal>

          <div className="grid lg:grid-cols-12 gap-10">
            {/* Process */}
            <div className="lg:col-span-8">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-10">
                {howWeWork.processHeading}
              </h2>

              <div className="grid sm:grid-cols-2 gap-6">
                {howWeWork.steps.map((s, i) => (
                  <Reveal key={s.step} delay={(i % 2) * 0.08}>
                    <div className="bg-card rounded-2xl p-7 shadow-elegant h-full flex flex-col">
                      <div className="flex items-baseline gap-3 mb-3">
                        <span className="font-playfair text-3xl font-bold text-gold/40">
                          {s.step}
                        </span>
                        <h3 className="font-playfair text-lg font-semibold text-primary">
                          {s.title}
                        </h3>
                      </div>
                      <p className="font-inter text-sm text-slate leading-relaxed mb-6">
                        {s.summary}
                      </p>

                      <div className="mt-auto space-y-3">
                        <div className="rounded-xl bg-gold/10 border-l-4 border-gold p-4">
                          <div className="font-inter text-[11px] font-semibold uppercase tracking-wider text-gold mb-1">
                            Your Firm
                          </div>
                          <p className="font-inter text-sm text-primary leading-relaxed">
                            {s.yourFirm}
                          </p>
                        </div>
                        <div className="rounded-xl bg-primary/5 border-l-4 border-primary p-4">
                          <div className="font-inter text-[11px] font-semibold uppercase tracking-wider text-primary mb-1">
                            Our Professionals
                          </div>
                          <p className="font-inter text-sm text-primary leading-relaxed">
                            {s.ourProfessionals}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Sidebar, beside the process on desktop, stacked below on mobile */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-28 space-y-6">
                <Reveal>
                  <div className="bg-gradient-navy rounded-2xl p-7">
                    <h3 className="font-playfair text-xl font-semibold text-primary-foreground mb-3">
                      {howWeWork.sidebar.heading}
                    </h3>
                    <p className="font-inter text-sm text-primary-foreground/85 leading-relaxed mb-6">
                      {howWeWork.sidebar.body}
                    </p>
                    <Link href="/contact" className="btn-gold w-full text-sm">
                      {howWeWork.sidebar.button}
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
                      {howWeWork.relatedHeading}
                    </h3>
                    <ul className="space-y-1">
                      {howWeWork.related.map((l) => (
                        <li key={l.name}>
                          <Link
                            href={l.href}
                            className="flex items-center justify-between gap-2 py-2.5 font-inter text-sm text-slate hover:text-gold transition-colors border-b border-border/60 last:border-0"
                          >
                            {l.name}
                            <ChevronRight className="w-4 h-4" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>
            </aside>
          </div>

          {/* Closing line, page ends on white, no navy closing band */}
          <Reveal delay={0.1}>
            <p className="mt-16 font-playfair text-xl md:text-2xl text-primary max-w-3xl">
              {howWeWork.closingLine}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
