import Reveal from "@/components/Reveal";
import { capacityStats } from "@/lib/firm-data";

export default function CapacityStats() {
  return (
    <section className="relative -mt-16 z-20">
      <div className="container-wide">
        <div className="bg-card rounded-2xl shadow-elegant-lg border border-border/60 grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-border/60 overflow-hidden">
          {capacityStats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="p-6 lg:p-8 text-center h-full flex flex-col items-center justify-center">
                <div className="font-playfair text-4xl lg:text-5xl font-bold text-gradient-gold mb-2">
                  {s.value}
                </div>
                <div className="font-inter text-sm text-slate leading-snug">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
