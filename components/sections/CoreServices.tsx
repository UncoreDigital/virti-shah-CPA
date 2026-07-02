import Link from "next/link";
import {
  ArrowUpRight,
  BookOpenCheck,
  ReceiptText,
  ShieldCheck,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/site";

const serviceIcons: Record<string, typeof BookOpenCheck> = {
  bookkeeping: BookOpenCheck,
  "tax-preparation": ReceiptText,
  audit: ShieldCheck,
};

export default function CoreServices() {
  return (
    <section className="section-padding bg-muted">
      <div className="container-wide">
        <SectionHeading
          eyebrow="What We Offer"
          title="Services We Provide"
          subtitle="Comprehensive outsourced accounting solutions tailored to the needs of US accounting firms."
        />

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {services.map((s, i) => {
            const Icon = serviceIcons[s.slug];
            return (
            <Reveal key={s.slug} delay={i * 0.1}>
              <Link
                href={`/services/${s.slug}`}
                className="group bg-card rounded-2xl p-8 card-hover shadow-elegant flex flex-col h-full"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 rounded-xl bg-muted flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                    <Icon className="w-8 h-8 text-gold" />
                  </div>
                  <span className="font-playfair text-4xl font-bold text-muted-foreground/20">
                    {s.number}
                  </span>
                </div>
                <h3 className="font-playfair text-xl font-semibold text-primary mb-3 group-hover:text-gold transition-colors">
                  {s.title}
                </h3>
                <p className="text-slate font-inter text-sm leading-relaxed mb-6 flex-grow">
                  {s.teaser}
                </p>
                <span className="inline-flex items-center gap-2 text-gold font-medium text-sm mt-auto">
                  Read More
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </Link>
            </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
