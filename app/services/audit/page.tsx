import type { Metadata } from "next";
import { Building2 } from "lucide-react";
import ServiceDetail from "@/components/ServiceDetail";
import Reveal from "@/components/Reveal";
import CTA from "@/components/sections/CTA";
import { serviceDetails, auditSpecialties } from "@/lib/services-data";

const data = serviceDetails.audit;

export const metadata: Metadata = {
  title: data.title,
  description: data.metaDescription,
};

export default function AuditPage() {
  return (
    <>
      <ServiceDetail data={data}>
        <div className="mt-10">
          <Reveal>
            <h3 className="font-playfair text-2xl font-semibold text-primary mb-2">
              Specialised Audit Types
            </h3>
            <p className="font-inter text-slate text-sm mb-6">
              Leading service providers for HUD, CIRA, NFP and EBP audits.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {auditSpecialties.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.08}>
                <div className="bg-card rounded-2xl p-6 shadow-elegant h-full">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                    <Building2 className="w-6 h-6 text-gold" />
                  </div>
                  <h4 className="font-playfair text-lg font-semibold text-primary mb-2">
                    {a.title}
                  </h4>
                  <p className="font-inter text-sm text-slate leading-relaxed">
                    {a.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </ServiceDetail>
      <CTA />
    </>
  );
}
