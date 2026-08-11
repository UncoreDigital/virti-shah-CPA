import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { engagementModels } from "@/lib/homepage";

/** Homepage Section 4, Engagement models. */
export default function EngagementModels() {
  return (
    <section className="section-padding bg-muted">
      <div className="container-wide">
        <SectionHeading
          eyebrow={engagementModels.eyebrow}
          title={engagementModels.heading}
          subtitle={engagementModels.intro}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {engagementModels.items.map((model, i) => (
            <Reveal key={model} delay={(i % 4) * 0.08}>
              <div className="group relative overflow-hidden bg-gradient-navy rounded-2xl p-7 h-full flex flex-col justify-between gap-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-elegant-lg">
                <div className="absolute inset-0 bg-dot-grid opacity-25" />
                <div className="absolute -bottom-16 -right-12 w-44 h-44 rounded-full bg-gold/20 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="relative font-playfair text-4xl font-bold text-gold/40 transition-colors duration-300 group-hover:text-gold/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="relative font-playfair text-lg font-semibold text-primary-foreground leading-snug">
                  {model}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12">
          <Link href={engagementModels.cta.href} className="btn-gold">
            {engagementModels.cta.label}
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
