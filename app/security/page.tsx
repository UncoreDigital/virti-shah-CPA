import type { Metadata } from "next";
import { ShieldCheck, BadgeCheck, Info } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import CTA from "@/components/sections/CTA";
import { securityGroups, compliance } from "@/lib/firm-data";
import { getIcon } from "@/lib/icons";

export const metadata: Metadata = {
  title: "Security & Compliance",
  description:
    "How Virti Shah CPA protects client data — SOC 2 and ISO 27001-aligned controls, VPN, MFA, encryption, background checks, confidentiality, data retention and 100% on-site operations.",
};

export default function SecurityPage() {
  const badges = [
    {
      active: compliance.soc.certified,
      label: compliance.soc.label,
      text: compliance.soc.certified
        ? compliance.soc.certifiedText
        : compliance.soc.aligned,
    },
    {
      active: compliance.iso.certified,
      label: compliance.iso.label,
      text: compliance.iso.certified
        ? compliance.iso.certifiedText
        : compliance.iso.aligned,
    },
  ];

  return (
    <>
      <PageBanner
        title="Security & Compliance"
        subtitle="Handling another firm's client data is a position of trust. Here is exactly how we protect it."
        crumbs={[{ name: "Security & Compliance", href: "/security" }]}
      />

      {/* Compliance posture */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-3xl mb-12">
            <p className="font-inter text-slate leading-relaxed">
              Our operations run 100% on-site under centrally-managed controls —
              no work-from-home, no personal devices, no data leaving the secured
              environment. Below is our control framework across access, data
              protection, people and governance.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-16">
            {badges.map((b) => (
              <Reveal key={b.label}>
                <div className="flex gap-4 bg-gradient-navy rounded-2xl p-7">
                  <BadgeCheck className="w-8 h-8 text-gold flex-shrink-0" />
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <h3 className="font-playfair text-xl font-semibold text-primary-foreground">
                        {b.label}
                      </h3>
                      <span
                        className={`text-[11px] font-inter font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full ${
                          b.active
                            ? "bg-gold text-primary"
                            : "bg-white/10 text-primary-foreground/80"
                        }`}
                      >
                        {b.active ? "Certified" : "Aligned"}
                      </span>
                    </div>
                    <p className="font-inter text-sm text-primary-foreground/70 leading-relaxed">
                      {b.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Control groups */}
          <div className="grid md:grid-cols-2 gap-6">
            {securityGroups.map((group, i) => {
              const Icon = getIcon(group.icon);
              return (
                <Reveal key={group.title} delay={(i % 2) * 0.08}>
                  <div className="bg-card rounded-2xl p-7 shadow-elegant h-full">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-gold" />
                      </div>
                      <h3 className="font-playfair text-lg font-semibold text-primary">
                        {group.title}
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 font-inter text-sm text-foreground"
                        >
                          <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Note */}
          <Reveal delay={0.1}>
            <div className="mt-10 flex items-start gap-3 bg-muted rounded-2xl p-6 border-l-4 border-gold">
              <Info className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
              <p className="font-inter text-sm text-primary">
                Need a client-specific security addendum, a completed vendor
                questionnaire, or an NDA in place before we begin? We routinely
                accommodate firm and end-client security requirements — just ask.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
