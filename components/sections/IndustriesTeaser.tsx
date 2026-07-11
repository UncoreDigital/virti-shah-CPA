import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { industries } from "@/lib/firm-data";
import { getIcon } from "@/lib/icons";

export default function IndustriesTeaser() {
  return (
    <section className="section-padding bg-muted">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Specialization"
          title="Industries We Know Deeply"
          subtitle="Audit nuance lives in the industry. Our teams bring engagement-tested experience across the sectors your clients operate in."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {industries.map((ind, i) => {
            const Icon = getIcon(ind.icon);
            return (
              <Reveal key={ind.slug} delay={(i % 4) * 0.06}>
                <div className="bg-card rounded-2xl p-6 shadow-elegant h-full border border-transparent hover:border-gold/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-playfair text-base font-semibold text-primary leading-snug">
                    {ind.name}
                  </h3>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-gold font-semibold hover:underline"
          >
            Explore our industry expertise
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
