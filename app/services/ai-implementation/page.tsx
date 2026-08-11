import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CTA from "@/components/sections/CTA";
import { aiImplementation as ai } from "@/lib/ai-implementation";
import { getIcon } from "@/lib/icons";

export const metadata: Metadata = {
  title: ai.seoTitle,
  description: ai.metaDescription,
};

export default function AiImplementationPage() {
  return (
    <>
      <PageBanner
        eyebrow={ai.hero.eyebrow}
        title={
          <>
            {ai.hero.h1Lead}{" "}
            <span className="text-gradient-gold-bright">
              {ai.hero.h1Highlight}
            </span>
          </>
        }
        subtitle={ai.hero.lead}
        crumbs={[
          { name: "Services", href: "/services" },
          { name: "AI Implementation", href: `/services/${ai.slug}` },
        ]}
      />

      {/* Hero trust strip */}
      <section className="bg-muted border-b border-border">
        <div className="container-wide py-7">
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ai.hero.strip.map((s) => (
              <li key={s.title}>
                <div className="font-playfair text-base font-semibold text-primary">
                  {s.title}
                </div>
                <div className="font-inter text-sm text-slate mt-1">
                  {s.body}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What we do */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading
            eyebrow={ai.whatWeDo.eyebrow}
            title={ai.whatWeDo.heading}
            subtitle={ai.whatWeDo.intro}
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {ai.whatWeDo.pillars.map((p, i) => {
              const Icon = getIcon(p.icon);
              return (
                <Reveal key={p.title} delay={(i % 4) * 0.08}>
                  <div className="group card-premium bg-card rounded-2xl p-7 shadow-elegant h-full">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-gold">
                      <Icon
                        className="w-6 h-6 text-gold transition-colors duration-300 group-hover:text-white"
                        strokeWidth={1.75}
                      />
                    </div>
                    <h3 className="font-playfair text-lg font-semibold text-primary mb-2.5">
                      {p.title}
                    </h3>
                    <p className="font-inter text-sm text-slate leading-relaxed">
                      {p.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Security first */}
      <section className="relative section-padding bg-gradient-navy overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid opacity-[0.14]" />
        <div className="absolute -top-24 -left-20 w-[26rem] h-[26rem] rounded-full bg-gold/15 blur-[120px]" />
        <div className="container-wide relative z-10">
          <SectionHeading
            eyebrow={ai.security.eyebrow}
            title={ai.security.heading}
            subtitle={ai.security.intro}
            light
          />

          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {ai.security.cards.map((c, i) => {
              const Icon = getIcon(c.icon);
              return (
                <Reveal key={c.title} delay={(i % 3) * 0.08}>
                  <div className="h-full rounded-2xl border border-white/15 bg-white/5 p-7 backdrop-blur-sm">
                    <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-gold-light" strokeWidth={1.75} />
                    </div>
                    <h3 className="font-playfair text-lg font-semibold text-primary-foreground mb-2.5">
                      {c.title}
                    </h3>
                    <p className="font-inter text-sm text-primary-foreground/85 leading-relaxed">
                      {c.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
          {/* The sample's closing disclaimer is omitted on instruction. */}
        </div>
      </section>

      {/* Human-led */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading
            eyebrow={ai.human.eyebrow}
            title={ai.human.heading}
          />
          <Reveal delay={0.15}>
            <p className="max-w-3xl font-inter text-slate leading-relaxed mt-6">
              {ai.human.body}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 max-w-3xl bg-muted rounded-2xl p-6 border-l-4 border-gold">
              <p className="font-inter text-primary leading-relaxed">
                <strong className="font-semibold">{ai.human.optOutLead}</strong>{" "}
                {ai.human.optOut}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <SectionHeading
            eyebrow={ai.process.eyebrow}
            title={ai.process.heading}
          />

          {/* Connector rail behind the step cards on wide screens */}
          <div className="relative mt-14">
            <div
              aria-hidden
              className="hidden lg:block absolute top-[3.25rem] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent"
            />
            <div className="relative grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {ai.process.steps.map((s, i) => (
                <Reveal key={s.step} delay={i * 0.08}>
                  <div className="group card-premium bg-card rounded-2xl p-7 shadow-elegant h-full">
                    <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-gold group-hover:border-gold">
                      <span className="font-playfair text-xl font-bold text-gold transition-colors duration-300 group-hover:text-white">
                        {s.step}
                      </span>
                    </div>
                    <h3 className="font-playfair text-lg font-semibold text-primary mb-3">
                      {s.title}
                    </h3>
                    <p className="font-inter text-slate text-sm leading-relaxed">
                      {s.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA
        eyebrow=""
        heading={ai.cta.heading}
        body={ai.cta.body}
        buttonLabel={ai.cta.button}
      />
    </>
  );
}
