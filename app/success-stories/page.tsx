import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Quote } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import CTA from "@/components/sections/CTA";
import { successStories } from "@/lib/firm-data";

export const metadata: Metadata = {
  title: "Client Success Stories",
  description:
    "Measurable outcomes for U.S. CPA firms — busy-season audit capacity, lower cost per engagement and faster fieldwork through Virti Shah CPA's offshore audit teams.",
};

const messagingPoints = [
  "Extend your audit practice without increasing partner overhead.",
  "Dedicated offshore audit teams integrated with your engagement methodology.",
  "Scale your assurance practice during busy season without sacrificing quality.",
  "Experienced audit professionals working as an extension of your engagement teams.",
];

export default function SuccessStoriesPage() {
  return (
    <>
      <PageBanner
        title="Client Success Stories"
        subtitle="Partners evaluate offshore providers on measurable impact — not adjectives. Here is the kind of result our teams deliver."
        crumbs={[{ name: "Client Success Stories", href: "/success-stories" }]}
      />

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-8">
            {successStories.map((s, i) => (
              <Reveal key={s.headline} delay={i * 0.1}>
                <div className="bg-card rounded-2xl p-8 shadow-elegant h-full border-t-4 border-gold flex flex-col">
                  <div className="font-playfair text-6xl font-bold text-gradient-gold mb-4">
                    {s.metric}
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-primary mb-3">
                    {s.headline}
                  </h3>
                  <p className="font-inter text-sm text-slate leading-relaxed flex-grow">
                    {s.body}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-inter font-medium text-primary bg-muted rounded-full px-3 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Positioning / messaging block */}
      <section className="section-padding bg-gradient-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gold blur-3xl" />
        </div>
        <div className="container-wide relative z-10 max-w-4xl">
          <Quote className="w-12 h-12 text-gold mb-6" />
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary-foreground mb-10">
            How firms describe working with us
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {messagingPoints.map((m, i) => (
              <Reveal key={m} delay={i * 0.08}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full">
                  <p className="font-playfair text-lg text-primary-foreground/90 leading-relaxed">
                    &ldquo;{m}&rdquo;
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/contact" className="btn-gold">
              Discuss your engagement needs
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
