import Link from "next/link";
import { ArrowUpRight, Users, Award, Layers, Repeat } from "lucide-react";
import Reveal from "@/components/Reveal";
import { teamComposition } from "@/lib/firm-data";

const highlights = [
  {
    icon: Users,
    value: teamComposition.total,
    label: "Professionals across audit, tax & bookkeeping",
  },
  {
    icon: Layers,
    value: teamComposition.reviewLevels,
    label: "Levels of review before partner sign-off",
  },
  {
    icon: Repeat,
    value: `${teamComposition.managers.count}`,
    label: "Managers overseeing engagement quality",
  },
  {
    icon: Award,
    value: "EA & CPA",
    label: "Led by licensed professionals",
  },
];

export default function TeamTeaser() {
  return (
    <section className="section-padding bg-gradient-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-gold blur-3xl" />
      </div>
      <div className="container-wide relative z-10 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold font-inter text-sm font-medium tracking-widest uppercase">
              Capacity & People
            </span>
          </div>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-5">
            A real bench, not a solo practice
          </h2>
          <p className="font-inter text-primary-foreground/70 leading-relaxed mb-8">
            People buy people. Behind every engagement is a structured team —
            partners, managers, seniors and staff — with the depth to absorb
            your busy-season peaks and the review layers to protect quality.
          </p>
          <Link href="/team" className="btn-gold">
            Meet the Team & See Our Capacity
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {highlights.map((h, i) => (
            <Reveal key={h.label} delay={i * 0.08}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full">
                <h.icon className="w-7 h-7 text-gold mb-4" />
                <div className="font-playfair text-3xl font-bold text-primary-foreground mb-1">
                  {h.value}
                </div>
                <div className="font-inter text-sm text-primary-foreground/70 leading-snug">
                  {h.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
