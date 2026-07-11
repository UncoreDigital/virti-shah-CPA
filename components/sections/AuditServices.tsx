import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { auditServices } from "@/lib/firm-data";

export default function AuditServices() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <SectionHeading
          eyebrow="What We Do"
          title="Audit & Assurance Services"
          subtitle="Dedicated support across the full assurance spectrum — each engagement type handled by professionals who do that work every day."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">
          {auditServices.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 4) * 0.06}>
              <Link
                href={`/services/audit/${s.slug}`}
                className="group flex flex-col h-full bg-card rounded-2xl p-6 shadow-elegant border border-transparent hover:border-gold/30 card-hover"
              >
                <h3 className="font-playfair text-lg font-semibold text-primary mb-2 group-hover:text-gold transition-colors">
                  {s.title}
                </h3>
                <p className="font-inter text-sm text-slate leading-relaxed flex-grow">
                  {s.short}
                </p>
                <span className="inline-flex items-center gap-1.5 text-gold font-medium text-sm mt-4">
                  Explore
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services/audit" className="btn-navy">
            View All Audit Services
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
