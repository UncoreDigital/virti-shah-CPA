import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { howWeWorkTeaser } from "@/lib/homepage";

/** Homepage Section 5, How we work. */
export default function Workflow() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <SectionHeading
          eyebrow={howWeWorkTeaser.eyebrow}
          title={howWeWorkTeaser.heading}
          subtitle={howWeWorkTeaser.intro}
        />

        {/* Connector rail behind the step cards on wide screens */}
        <div className="relative mt-16">
          <div
            aria-hidden
            className="hidden lg:block absolute top-[3.25rem] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent"
          />
          <div className="relative grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {howWeWorkTeaser.steps.map((w, i) => (
              <Reveal key={w.step} delay={i * 0.08}>
                <div className="group card-premium bg-card rounded-2xl p-7 shadow-elegant h-full">
                  <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-gold group-hover:border-gold">
                    <span className="font-playfair text-xl font-bold text-gold transition-colors duration-300 group-hover:text-white">
                      {w.step}
                    </span>
                  </div>
                  <h3 className="font-playfair text-lg font-semibold text-primary mb-3">
                    {w.title}
                  </h3>
                  <p className="font-inter text-slate text-sm leading-relaxed">
                    {w.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
