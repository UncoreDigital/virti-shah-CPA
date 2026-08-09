import type { Metadata } from "next";
import { BadgeCheck } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import CTA from "@/components/sections/CTA";
import { securityGroups, securityModel, compliance } from "@/lib/firm-data";
import { getIcon } from "@/lib/icons";

export const metadata: Metadata = {
  title: "Security & Compliance",
  description:
    "How Virti Shah CPA handles client information — controlled access, company-managed workstations, on-site operations and documented confidentiality procedures, designed with reference to SOC 2 and ISO/IEC 27001 principles.",
};

export default function SecurityPage() {
  return (
    <>
      <PageBanner
        eyebrow="Security & Information Handling"
        title="Security Practices Designed for CPA Firm Workflows"
        subtitle="VSCPA follows documented security and information-handling procedures designed for its operating environment and each client relationship. Assigned client work is performed from approved VSCPA office locations using company-managed workstations. Personal devices and unapproved remote work are not permitted."
        crumbs={[{ name: "Security & Compliance", href: "/security" }]}
      />

      {/* Security model */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="font-inter text-sm font-semibold uppercase tracking-[0.18em] text-gold mb-3">
              {securityModel.eyebrow}
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary">
              {securityModel.heading}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityGroups.map((group, i) => {
              const Icon = getIcon(group.icon);
              return (
                <Reveal key={group.title} delay={(i % 4) * 0.08}>
                  <div className="bg-card rounded-2xl p-7 shadow-elegant h-full">
                    <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-gold" />
                    </div>
                    <h3 className="font-playfair text-lg font-semibold text-primary mb-2">
                      {group.title}
                    </h3>
                    <p className="font-inter text-sm text-foreground leading-relaxed">
                      {group.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Framework-informed practices */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <p className="text-center font-inter text-sm font-semibold uppercase tracking-[0.18em] text-gold mb-10">
            {compliance.eyebrow}
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {compliance.frameworks.map((f) => (
              <Reveal key={f.label}>
                <div className="flex gap-4 bg-gradient-navy rounded-2xl p-7 h-full">
                  <BadgeCheck className="w-8 h-8 text-gold flex-shrink-0" />
                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-primary-foreground mb-1.5">
                      {f.label}
                    </h3>
                    <p className="font-inter text-sm text-primary-foreground/70 leading-relaxed">
                      {f.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mt-8 text-center max-w-4xl mx-auto font-inter text-xs text-slate leading-relaxed">
            {compliance.frameworkDisclaimer}
          </p>
        </div>
      </section>

      <CTA />
    </>
  );
}
