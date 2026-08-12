import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { technologyControls } from "@/lib/homepage";
import { getIcon } from "@/lib/icons";

/** Homepage Section 6 — Technology & controls. */
export default function TechnologyControls() {
  // Two passes of the list; the marquee translates -50% for a seamless loop.
  const rail = [...technologyControls.platforms, ...technologyControls.platforms];

  return (
    <section className="section-padding bg-muted overflow-hidden">
      <div className="container-wide">
        <SectionHeading
          eyebrow={technologyControls.eyebrow}
          title={technologyControls.heading}
          subtitle={technologyControls.intro}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {technologyControls.items.map((item, i) => {
            const Icon = getIcon(item.icon);
            return (
              <Reveal key={item.title} delay={(i % 4) * 0.08}>
                <div className="card-premium bg-card rounded-2xl p-7 shadow-elegant h-full">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-gold" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-playfair text-lg font-semibold text-primary mb-2.5">
                    {item.title}
                  </h3>
                  <p className="font-inter text-sm text-slate leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Common platforms — scrolling logo rail */}
      <Reveal delay={0.1}>
        <div className="mt-16">
          <p className="container-wide font-inter text-sm font-semibold uppercase tracking-[0.18em] text-gold mb-8">
            {technologyControls.platformsLabel}
          </p>

          <div className="relative mask-fade-edges">
            <div className="flex w-max animate-marquee gap-6">
              {/* The supplied artwork is already a self-contained tile, so it
                  is shown directly rather than nested inside another card. */}
              {rail.map((p, i) => (
                <div
                  key={`${p.name}-${i}`}
                  className="flex items-center justify-center h-28 w-28 shrink-0 rounded-2xl overflow-hidden"
                >
                  {p.logo ? (
                    <Image
                      src={p.logo}
                      alt={p.name}
                      width={180}
                      height={180}
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <span className="font-playfair text-lg font-semibold text-primary/75 text-center px-3">
                      {p.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
