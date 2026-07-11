import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { successStories } from "@/lib/firm-data";

export default function SuccessStories() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Results"
          title="Outcomes, Not Adjectives"
          subtitle="Partners evaluate offshore providers on measurable impact. Here is the kind of result our teams deliver for U.S. CPA firms."
        />

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {successStories.map((s, i) => (
            <Reveal key={s.headline} delay={i * 0.1}>
              <div className="bg-card rounded-2xl p-8 shadow-elegant h-full border-t-4 border-gold flex flex-col">
                <div className="font-playfair text-5xl font-bold text-gradient-gold mb-4">
                  {s.metric}
                </div>
                <h3 className="font-playfair text-lg font-semibold text-primary mb-3">
                  {s.headline}
                </h3>
                <p className="font-inter text-sm text-slate leading-relaxed flex-grow">
                  {s.body}
                </p>
                <div className="flex flex-wrap gap-2 mt-5">
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

        <div className="text-center mt-12">
          <Link href="/success-stories" className="btn-navy">
            More Success Stories
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
