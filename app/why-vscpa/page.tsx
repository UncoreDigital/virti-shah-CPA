import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Phone, ChevronRight } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";
import { whyVscpa } from "@/lib/pages-content";
import { getIcon } from "@/lib/icons";

export const metadata: Metadata = {
  title: whyVscpa.seoTitle,
  description: whyVscpa.metaDescription,
};

export default function WhyVscpaPage() {
  return (
    <>
      <PageBanner
        title={whyVscpa.h1}
        subtitle={whyVscpa.subtitle}
        crumbs={[{ name: "Why VSCPA", href: "/why-vscpa" }]}
      />

      {/* Proof strip */}
      <section className="bg-muted border-b border-border">
        <div className="container-wide py-6">
          <ul className="flex flex-wrap items-center gap-x-3 gap-y-2 font-inter text-sm text-primary">
            {whyVscpa.proofStrip.map((p, i) => (
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
              {whyVscpa.intro}
            </p>
          </Reveal>

          <div className="grid lg:grid-cols-12 gap-10">
            {/* Benefits */}
            <div className="lg:col-span-8">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-10">
                {whyVscpa.benefitsHeading}
              </h2>

              <div className="grid sm:grid-cols-2 gap-6">
                {whyVscpa.benefits.map((b, i) => {
                  const Icon = getIcon(b.icon);
                  return (
                    <Reveal key={b.title} delay={(i % 2) * 0.08}>
                      <div className="bg-card rounded-2xl p-7 shadow-elegant h-full">
                        <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                          <Icon className="w-6 h-6 text-gold" strokeWidth={1.75} />
                        </div>
                        <h3 className="font-playfair text-lg font-semibold text-primary mb-2.5">
                          {b.title}
                        </h3>
                        <p className="font-inter text-sm text-slate leading-relaxed">
                          {b.body}
                        </p>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>

            {/* Sidebar, beside the benefits on desktop, stacked below on mobile */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-28 space-y-6">
                <Reveal>
                  <div className="bg-gradient-navy rounded-2xl p-7">
                    <h3 className="font-playfair text-xl font-semibold text-primary-foreground mb-3">
                      {whyVscpa.sidebar.heading}
                    </h3>
                    <p className="font-inter text-sm text-primary-foreground/85 leading-relaxed mb-6">
                      {whyVscpa.sidebar.body}
                    </p>
                    <Link href="/contact" className="btn-gold w-full text-sm">
                      {whyVscpa.sidebar.button}
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
                      {whyVscpa.relatedHeading}
                    </h3>
                    <ul className="space-y-1">
                      {whyVscpa.related.map((l) => (
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
              {whyVscpa.closingLine}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
