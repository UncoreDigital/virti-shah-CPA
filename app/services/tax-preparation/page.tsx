import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Phone, ClipboardCheck, FileText } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import CTA from "@/components/sections/CTA";
import { site } from "@/lib/site";
import { tax } from "@/lib/tax";
import { getIcon } from "@/lib/icons";

export const metadata: Metadata = {
  title: tax.seoTitle,
  description: tax.metaDescription,
};

export default function TaxPreparationPage() {
  return (
    <>
      <PageBanner
        title={tax.hero.h1}
        subtitle={tax.hero.subtitle}
        crumbs={[
          { name: "Services", href: "/services" },
          { name: "Tax Services", href: `/services/${tax.slug}` },
        ]}
      />

      <section className="section-padding">
        <div className="container-wide grid lg:grid-cols-12 gap-10">
          {/* Main column */}
          <div className="lg:col-span-8 space-y-14">
            <Reveal>
              <p className="font-inter text-slate leading-relaxed text-lg">
                {tax.intro}
              </p>
            </Reveal>

            {/* Built for CPA-firm tax workflows */}
            <Reveal>
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <ClipboardCheck className="w-6 h-6 text-gold" strokeWidth={1.75} />
                  <h2 className="font-playfair text-2xl md:text-3xl font-bold text-primary">
                    {tax.workflow.heading}
                  </h2>
                </div>
                <ul className="flex flex-wrap gap-3">
                  {tax.workflow.pills.map((p) => (
                    <li
                      key={p}
                      className="rounded-full border border-gold/30 bg-gold/10 px-5 py-2.5 font-inter text-sm font-medium text-primary"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Tax work we can prepare */}
            <Reveal>
              <div>
                <h2 className="font-playfair text-2xl md:text-3xl font-bold text-primary mb-6">
                  {tax.prepares.heading}
                </h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  {tax.prepares.items.map((item, i) => {
                    const Icon = getIcon(item.icon);
                    return (
                      <Reveal key={item.title} delay={(i % 2) * 0.06}>
                        <div className="group card-premium bg-card rounded-2xl p-6 shadow-elegant h-full flex gap-4">
                          <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover:bg-gold">
                            <Icon
                              className="w-5 h-5 text-gold transition-colors duration-300 group-hover:text-white"
                              strokeWidth={1.75}
                            />
                          </div>
                          <div>
                            <h3 className="font-playfair text-lg font-semibold text-primary mb-1.5">
                              {item.title}
                            </h3>
                            <p className="font-inter text-sm text-slate leading-relaxed">
                              {item.body}
                            </p>
                          </div>
                        </div>
                      </Reveal>
                    );
                  })}
                </div>
              </div>
            </Reveal>

            {/* How tax preparation works */}
            <Reveal>
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <FileText className="w-6 h-6 text-gold" strokeWidth={1.75} />
                  <h2 className="font-playfair text-2xl md:text-3xl font-bold text-primary">
                    {tax.how.heading}
                  </h2>
                </div>
                <div className="space-y-4">
                  {tax.how.points.map((p) => (
                    <p
                      key={p.label}
                      className="font-inter text-slate leading-relaxed"
                    >
                      <strong className="font-semibold text-primary">
                        {p.label}
                      </strong>{" "}
                      {p.body}
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
                    {tax.sidebar.heading}
                  </h3>
                  <p className="font-inter text-sm text-primary-foreground/85 leading-relaxed mb-6">
                    {tax.sidebar.body}
                  </p>
                  <Link href="/contact" className="btn-gold w-full text-sm">
                    {tax.sidebar.button}
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
                    {tax.servicesListHeading}
                  </h3>
                  {/* Capability labels, not separate pages, so not linked. */}
                  <ul className="space-y-1">
                    {tax.servicesList.map((s) => (
                      <li
                        key={s}
                        className="flex items-start gap-2.5 py-2.5 font-inter text-sm text-slate border-b border-border/60 last:border-0"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/services"
                    className="mt-4 inline-flex items-center gap-2 font-inter text-sm font-semibold text-gold hover:underline"
                  >
                    View all services
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </aside>
        </div>
      </section>

      <CTA />
    </>
  );
}
