import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { coreServices } from "@/lib/homepage";
import { getIcon } from "@/lib/icons";

/** Homepage Section 2, What We Do / core services. */
export default function CoreServices() {
  return (
    <section className="section-padding bg-muted">
      <div className="container-wide">
        <SectionHeading
          eyebrow={coreServices.eyebrow}
          title={coreServices.heading}
          subtitle={coreServices.intro}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {coreServices.items.map((s, i) => {
            const Icon = getIcon(s.icon);
            return (
              <Reveal key={s.title} delay={(i % 4) * 0.08}>
                <Link
                  href={s.href}
                  className="group card-premium bg-card rounded-2xl p-7 shadow-elegant flex flex-col h-full"
                >
                  <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-gold group-hover:scale-105">
                    <Icon
                      className="w-7 h-7 text-gold transition-colors duration-300 group-hover:text-white"
                      strokeWidth={1.75}
                    />
                  </div>
                  <h3 className="font-playfair text-lg font-semibold text-primary mb-2.5 group-hover:text-gold transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-slate font-inter text-sm leading-relaxed mb-5">
                    {s.body}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1.5 font-inter text-sm font-semibold text-gold opacity-0 -translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    Learn more
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-12">
          <Link href={coreServices.cta.href} className="btn-gold">
            {coreServices.cta.label}
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
