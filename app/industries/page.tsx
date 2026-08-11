import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import CTA from "@/components/sections/CTA";
import { industries, industriesPage } from "@/lib/firm-data";
import { getIcon } from "@/lib/icons";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Relevant industry experience across nonprofit, real estate, CIRA and HOA, healthcare, manufacturing, construction, financial services and professional-services engagements.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageBanner
        title="Industries We Serve"
        subtitle={industriesPage.subtitle}
        crumbs={[{ name: "Industries", href: "/industries" }]}
      />

      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-3xl mb-14">
            <p className="font-inter text-slate leading-relaxed">
              {industriesPage.intro}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {industries.map((ind, i) => {
              const Icon = getIcon(ind.icon);
              return (
                <Reveal key={ind.slug} delay={(i % 2) * 0.08}>
                  <div className="flex gap-5 bg-card rounded-2xl p-7 shadow-elegant h-full border border-transparent hover:border-gold/30 transition-colors">
                    <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-playfair text-xl font-semibold text-primary mb-2">
                        {ind.name}
                      </h3>
                      <p className="font-inter text-sm text-slate leading-relaxed">
                        {ind.blurb}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTA
        eyebrow={industriesPage.cta.eyebrow}
        heading={industriesPage.cta.heading}
        body={industriesPage.cta.body}
      />
    </>
  );
}
