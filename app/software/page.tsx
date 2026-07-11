import type { Metadata } from "next";
import Image from "next/image";
import { Wrench } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import CTA from "@/components/sections/CTA";
import { techStack, type TechTool } from "@/lib/firm-data";

export const metadata: Metadata = {
  title: "Technology & Software",
  description:
    "The audit, tax and bookkeeping platforms Virti Shah CPA works in — CaseWare, CCH Axcess, ProSystem fx, UltraTax, Lacerte, Drake, QuickBooks, Xero and secure remote access tooling.",
};

// Preserve category order as first seen in the data
function groupByCategory(tools: TechTool[]) {
  const order: string[] = [];
  const map: Record<string, TechTool[]> = {};
  for (const t of tools) {
    if (!map[t.category]) {
      map[t.category] = [];
      order.push(t.category);
    }
    map[t.category].push(t);
  }
  return order.map((category) => ({ category, tools: map[category] }));
}

export default function SoftwarePage() {
  const groups = groupByCategory(techStack);

  return (
    <>
      <PageBanner
        title="Technology & Software"
        subtitle="We work inside the platforms your firm already uses — so our output drops straight into your files, not a conversion queue."
        crumbs={[{ name: "Technology", href: "/software" }]}
      />

      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-3xl mb-14">
            <p className="font-inter text-slate leading-relaxed">
              Our professionals are trained across the audit, tax and accounting
              software the U.S. profession runs on. Tell us your stack and we
              staff engagements with people who already know it — reducing
              onboarding time and keeping deliverables in your house format.
            </p>
          </div>

          <div className="space-y-12">
            {groups.map((group, gi) => (
              <div key={group.category}>
                <div className="flex items-center gap-3 mb-6">
                  <Wrench className="w-5 h-5 text-gold" />
                  <h2 className="font-playfair text-2xl font-semibold text-primary">
                    {group.category}
                  </h2>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                  {group.tools.map((tool, i) => (
                    <Reveal key={tool.name} delay={(i % 4) * 0.05}>
                      <div className="bg-card rounded-2xl shadow-elegant h-32 flex flex-col items-center justify-center gap-3 p-5 border border-transparent hover:border-gold/30 transition-colors">
                        {tool.logo ? (
                          <Image
                            src={tool.logo}
                            alt={tool.name}
                            width={130}
                            height={50}
                            unoptimized
                            className="max-h-12 w-auto object-contain"
                          />
                        ) : (
                          <span className="font-playfair text-xl font-semibold text-primary text-center">
                            {tool.name}
                          </span>
                        )}
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-14 bg-muted rounded-2xl p-8 text-center">
              <p className="font-inter text-primary">
                Using a platform not listed here?{" "}
                <span className="text-gold font-semibold">
                  We adapt to your stack.
                </span>{" "}
                Our teams onboard quickly to firm-specific tools and file
                structures.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
