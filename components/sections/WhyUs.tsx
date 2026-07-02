import {
  PiggyBank,
  Gauge,
  Scaling,
  Layers,
  Sparkles,
  Clock4,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { whyUs } from "@/lib/site";

const icons = [PiggyBank, Gauge, Scaling, Layers, Sparkles, Clock4];

export default function WhyUs() {
  return (
    <section className="section-padding bg-muted">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Why Us?"
          title="Why Firms Choose VSCPA"
          subtitle="Cost reduction, increased ROI, access to skilled talent and a time-zone advantage — plus the peace of mind of a multi-level review process."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {whyUs.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="bg-card rounded-2xl p-8 shadow-elegant h-full border border-transparent hover:border-gold/30 transition-colors">
                  <div className="w-14 h-14 rounded-xl bg-gradient-gold/10 flex items-center justify-center mb-5 bg-gold/10">
                    <Icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="font-inter text-slate text-sm leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
