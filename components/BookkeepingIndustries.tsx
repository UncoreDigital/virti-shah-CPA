import Reveal from "@/components/Reveal";
import { taxBookkeeping } from "@/lib/firm-data";
import { getIcon } from "@/lib/icons";

export default function BookkeepingIndustries() {
  return (
    <div className="mt-12">
      <Reveal>
        <h3 className="font-playfair text-2xl font-semibold text-primary mb-2">
          Industry-specific bookkeeping
        </h3>
        <p className="font-inter text-slate text-sm mb-6">
          Deep, repeatable expertise in the niches your clients operate in — so
          the chart of accounts, KPIs and reporting fit the business.
        </p>
      </Reveal>
      <div className="grid grid-cols-2 gap-4">
        {taxBookkeeping.bookkeepingIndustries.map((ind, i) => {
          const Icon = getIcon(ind.icon);
          return (
            <Reveal key={ind.name} delay={(i % 2) * 0.08}>
              <div className="flex items-center gap-4 bg-card rounded-2xl p-5 shadow-elegant h-full">
                <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-gold" />
                </div>
                <span className="font-playfair text-base font-semibold text-primary leading-snug">
                  {ind.name}
                </span>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
