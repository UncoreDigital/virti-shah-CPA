import type { Metadata } from "next";
import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import CTA from "@/components/sections/CTA";
import { about } from "@/lib/about";

export const metadata: Metadata = {
  title: "About Us",
  description: about.metaDescription,
};

export default function AboutPage() {
  return (
    <>
      {/* Breadcrumb intentionally omitted here, see lib/about.ts */}
      <PageBanner
        eyebrow={about.hero.eyebrow}
        title={
          <>
            {about.hero.h1Lead}{" "}
            <span className="text-gradient-gold-bright">
              {about.hero.h1Highlight}
            </span>{" "}
            {about.hero.h1Tail}
          </>
        }
        subtitle={about.hero.subtitle}
      />

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-wide grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <Reveal>
            <div className="relative lg:sticky lg:top-28">
              <div className="absolute -inset-4 bg-gradient-gold opacity-10 rounded-3xl blur-2xl" />
              <Image
                src="/assets/founder/virti-shah.jpeg"
                alt="Virti Shah, CA, CPA, B.Com, Founder of Virti Shah CPA"
                width={560}
                height={680}
                className="relative rounded-3xl shadow-elegant-lg w-full object-cover"
              />
              <div className="absolute -bottom-6 left-6 bg-primary text-primary-foreground rounded-2xl px-6 py-4 shadow-lg">
                <div className="font-playfair text-2xl font-bold text-gold">
                  Virti Shah
                </div>
                <div className="font-inter text-xs text-primary-foreground/85">
                  CA, CPA, B.Com | Founder
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-gold" />
              <span className="text-gold font-inter text-sm font-medium tracking-widest uppercase">
                {about.story.eyebrow}
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-6">
                {about.story.heading}
              </h2>
            </Reveal>
            <div className="space-y-5 font-inter text-slate leading-relaxed">
              {about.story.paragraphs.map((p, i) => (
                <Reveal key={p} delay={0.15 + i * 0.05}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <Reveal>
            <p className="font-inter text-sm font-semibold uppercase tracking-[0.18em] text-gold mb-4">
              {about.whyWeExist.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-6 max-w-4xl">
              {about.whyWeExist.heading}
            </h2>
          </Reveal>
          <div className="space-y-5 max-w-3xl">
            {about.whyWeExist.paragraphs.map((p, i) => (
              <Reveal key={p} delay={0.15 + i * 0.05}>
                <p className="font-inter text-slate leading-relaxed">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How Virti's experience shapes VSCPA */}
      <section className="section-padding">
        <div className="container-wide">
          <Reveal>
            <p className="font-inter text-sm font-semibold uppercase tracking-[0.18em] text-gold mb-4">
              {about.shapes.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-4">
              {about.shapes.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="font-inter text-slate leading-relaxed max-w-3xl mb-12">
              {about.shapes.intro}
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {about.shapes.items.map((item, i) => (
              <Reveal key={item.title} delay={(i % 4) * 0.08}>
                <div className="group card-premium bg-card rounded-2xl p-7 shadow-elegant h-full">
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

      <CTA heading={about.cta.heading} body={about.cta.body} eyebrow="" />
    </>
  );
}
