import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { taxBookkeeping } from "@/lib/firm-data";

export default function TaxPracticeBlock() {
  return (
    <div className="mt-12">
      <Reveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {taxBookkeeping.stats.map((s) => (
            <div
              key={s.label}
              className="bg-muted rounded-2xl p-5 text-center h-full"
            >
              <div className="font-playfair text-3xl font-bold text-gradient-gold mb-1">
                {s.value}
              </div>
              <div className="font-inter text-xs text-slate leading-snug">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="bg-card rounded-2xl p-7 shadow-elegant border-l-4 border-gold">
          <h3 className="font-playfair text-lg font-semibold text-primary mb-5">
            Multi-level review before it reaches you
          </h3>
          <div className="flex flex-col sm:flex-row items-stretch gap-2.5">
            {taxBookkeeping.reviewWorkflow.map((step, i) => (
              <div key={step} className="flex items-center gap-2.5 flex-1">
                <div className="flex-1 bg-muted rounded-xl px-4 py-3 text-center">
                  <span className="font-inter text-sm font-medium text-primary">
                    {step}
                  </span>
                </div>
                {i < taxBookkeeping.reviewWorkflow.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-gold flex-shrink-0 hidden sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
