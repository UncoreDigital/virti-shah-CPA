import { ShieldCheck } from "lucide-react";
import Reveal from "@/components/Reveal";
import { security } from "@/lib/site";

export default function Security() {
  return (
    <section className="section-padding bg-gradient-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold blur-3xl" />
      </div>
      <div className="container-wide relative z-10">
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold font-inter text-sm font-medium tracking-widest uppercase">
              IT Infrastructure &amp; Security
            </span>
          </div>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Your data, fully protected
          </h2>
          <p className="font-inter text-primary-foreground/70 leading-relaxed">
            We operate 100% on-site under strict, audited security controls — so
            your clients&apos; data stays confidential and compliant at every
            step.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {security.map((s, i) => (
            <Reveal key={s} delay={(i % 3) * 0.08}>
              <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
                <ShieldCheck className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="font-inter text-sm text-primary-foreground/80">
                  {s}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
