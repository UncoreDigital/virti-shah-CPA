import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  BookOpenCheck,
  ReceiptText,
  ShieldCheck,
} from "lucide-react";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import Security from "@/components/sections/Security";
import Software from "@/components/sections/Software";
import CTA from "@/components/sections/CTA";
import { services } from "@/lib/site";
import { serviceDetails, pricingPackages } from "@/lib/services-data";

const serviceIcons: Record<string, typeof BookOpenCheck> = {
  bookkeeping: BookOpenCheck,
  "tax-preparation": ReceiptText,
  audit: ShieldCheck,
};

export const metadata: Metadata = {
  title: "Services",
  description:
    "Outsourced bookkeeping, tax preparation and audit services for US-based CPA, EA, Tax, Accounting and Advisory firms. Accounting made affordable.",
};

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        title="Your Reliable Tax Partner"
        subtitle="Cost-effective, expert and reliable outsourced accounting solutions — accounting made affordable."
        crumbs={[{ name: "Services", href: "/services" }]}
      />

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((s, i) => {
              const detail = serviceDetails[s.slug];
              const Icon = serviceIcons[s.slug];
              return (
                <Reveal key={s.slug} delay={i * 0.1}>
                  <div className="bg-card rounded-2xl shadow-elegant overflow-hidden card-hover h-full flex flex-col">
                    <div className="bg-gradient-navy p-8 flex items-center justify-between">
                      <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-gold" />
                      </div>
                      <span className="font-playfair text-5xl font-bold text-white/15">
                        {s.number}
                      </span>
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <h3 className="font-playfair text-2xl font-semibold text-primary mb-3">
                        {s.title}
                      </h3>
                      <p className="font-inter text-slate text-sm leading-relaxed mb-4">
                        {s.teaser}
                      </p>
                      {s.note && (
                        <p className="font-inter text-sm text-primary/70 italic border-l-2 border-gold pl-3 mb-6 flex-grow">
                          {s.note}
                        </p>
                      )}
                      <ul className="space-y-2 mb-6">
                        {detail.list.slice(0, 4).map((item) => (
                          <li
                            key={item}
                            className="font-inter text-sm text-foreground/80 flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={`/services/${s.slug}`}
                        className="btn-navy w-full justify-center mt-auto"
                      >
                        Learn More
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <Reveal className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-gold" />
              <span className="text-gold font-inter text-sm font-medium tracking-widest uppercase">
                Pricing Packages
              </span>
              <div className="h-px w-12 bg-gold" />
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
                Accounting Made Affordable
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="font-inter text-slate">
                Save with our pricing packages — simple, transparent and built
                around the support your firm needs.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingPackages.map((pkg, i) => (
              <Reveal key={pkg.name} delay={i * 0.1}>
                <div
                  className={`relative rounded-2xl p-8 h-full flex flex-col ${
                    pkg.featured
                      ? "bg-gradient-navy shadow-elegant-lg lg:-translate-y-4"
                      : "bg-card shadow-elegant"
                  }`}
                >
                  {pkg.featured && (
                    <span className="absolute top-5 right-5 bg-gold text-primary text-xs font-semibold px-3 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                  <h3
                    className={`font-playfair text-xl font-semibold mb-1 ${
                      pkg.featured ? "text-primary-foreground" : "text-primary"
                    }`}
                  >
                    {pkg.name}
                  </h3>
                  <p
                    className={`font-inter text-sm mb-5 ${
                      pkg.featured
                        ? "text-primary-foreground/60"
                        : "text-muted-foreground"
                    }`}
                  >
                    {pkg.subtitle}
                  </p>
                  <div className="mb-6">
                    <span
                      className={`font-playfair text-5xl font-bold ${
                        pkg.featured ? "text-gold" : "text-primary"
                      }`}
                    >
                      {pkg.price}
                    </span>
                  </div>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {pkg.features.map((f) => (
                      <li
                        key={f}
                        className={`flex items-start gap-2.5 font-inter text-sm ${
                          pkg.featured
                            ? "text-primary-foreground/80"
                            : "text-foreground"
                        }`}
                      >
                        <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`w-full justify-center mt-auto ${
                      pkg.featured ? "btn-gold" : "btn-navy"
                    }`}
                  >
                    Get Started
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Software />
      <Security />
      <CTA />
    </>
  );
}
