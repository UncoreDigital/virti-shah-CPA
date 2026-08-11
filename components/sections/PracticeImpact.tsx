import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { practiceImpact } from "@/lib/homepage";

/** Homepage Section 3, Practice impact. */
export default function PracticeImpact() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-line-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_72%)]" />
      <div className="container-wide relative z-10">
        <SectionHeading
          eyebrow={practiceImpact.eyebrow}
          title={practiceImpact.heading}
          subtitle={practiceImpact.intro}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {practiceImpact.items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 4) * 0.08}>
              <div className="group card-premium bg-card rounded-2xl p-7 shadow-elegant h-full">
                {/* Sits fully inside the card — the card clips overflow, so a
                    bleeding watermark would be sliced mid-glyph. */}
                <span
                  aria-hidden
                  className="absolute top-6 right-6 font-playfair text-xl font-bold leading-none text-gold/35 transition-colors duration-300 group-hover:text-gold/60"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="relative font-playfair text-lg font-semibold text-primary mb-2.5 pr-12">
                  {item.title}
                </h3>
                <p className="relative font-inter text-sm text-slate leading-relaxed">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
