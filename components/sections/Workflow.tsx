import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { workflow } from "@/lib/site";

export default function Workflow() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Work Flow"
          title="How We Work With You"
          subtitle="A clear, collaborative process designed to deliver high-quality outsourced accounting that fits your firm."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mt-16">
          {workflow.map((w, i) => (
            <Reveal key={w.step} delay={i * 0.1}>
              <div className="relative bg-card rounded-2xl p-7 shadow-elegant h-full">
                <span className="font-playfair text-5xl font-bold text-gold/20">
                  {w.step}
                </span>
                <h3 className="font-playfair text-lg font-semibold text-primary mt-2 mb-3">
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
    </section>
  );
}
