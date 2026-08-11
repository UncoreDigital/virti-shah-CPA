import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  ReceiptText,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import Software from "@/components/sections/Software";
import CTA from "@/components/sections/CTA";
import { services } from "@/lib/site";
import { serviceDetails } from "@/lib/services-data";
import { aiImplementation } from "@/lib/ai-implementation";
import { tax } from "@/lib/tax";

const serviceIcons: Record<string, typeof BookOpenCheck> = {
  bookkeeping: BookOpenCheck,
  "tax-preparation": ReceiptText,
  "ai-implementation": Sparkles,
  audit: ShieldCheck,
};

// Audit links to its hub; every other service links to its own detail page.
const hrefFor = (slug: string) =>
  slug === "audit" ? "/services/audit" : `/services/${slug}`;

export const metadata: Metadata = {
  title: "Services",
  description:
    "One offshore partner across audit & assurance, tax preparation, bookkeeping and CAS, and AI implementation for U.S. CPA, EA and accounting firms.",
};

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        title="One Offshore Partner, Full Coverage"
        subtitle="Audit & assurance, tax, bookkeeping and AI implementation, delivered as an extension of your firm, under one quality standard."
        crumbs={[{ name: "Services", href: "/services" }]}
      />

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => {
              const detail = serviceDetails[s.slug];
              const Icon = serviceIcons[s.slug];
              const href = hrefFor(s.slug);
              // The AI page is bespoke rather than a ServiceDetail, so its card
              // bullets come from that page's pillars.
              // Tax and AI have bespoke pages rather than ServiceDetail entries,
              // so their card bullets come from their own content modules.
              const bullets =
                detail?.list ??
                (s.slug === tax.slug
                  ? tax.cardBullets
                  : s.slug === aiImplementation.slug
                    ? aiImplementation.whatWeDo.pillars.map((p) => p.title)
                    : []);
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
                        {bullets.slice(0, 4).map((item) => (
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

      <Software />
      <CTA />
    </>
  );
}
