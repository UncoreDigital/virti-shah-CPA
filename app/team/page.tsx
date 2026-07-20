import type { Metadata } from "next";
import Image from "next/image";
import { Award, Layers, Repeat, CalendarClock } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CTA from "@/components/sections/CTA";
import {
  team,
  teamComposition,
  teamCredentials,
  capacityStats,
  taxBookkeeping,
} from "@/lib/firm-data";

export const metadata: Metadata = {
  title: "Meet the Team & Capacity",
  description:
    "The people and capacity behind Virti Shah CPA — partners, managers, seniors and audit staff, review depth, busy-season capacity and credentials that support U.S. CPA firms.",
};

const capacityHighlights = [
  {
    icon: Repeat,
    value: teamComposition.total,
    label: "Professionals across the firm",
  },
  {
    icon: Layers,
    value: teamComposition.reviewLevels,
    label: "Levels of review before partner sign-off",
  },
  {
    icon: CalendarClock,
    value: taxBookkeeping.stats[0].value,
    label: taxBookkeeping.stats[0].label,
  },
  {
    icon: Award,
    value: "EA & CPA",
    label: "Led by licensed professionals",
  },
];

const composition = [
  teamComposition.founder,
  teamComposition.managers,
  teamComposition.seniors,
  teamComposition.staff,
];

export default function TeamPage() {
  return (
    <>
      <PageBanner
        title="Meet the Team & Our Capacity"
        subtitle="People buy people. Here is the bench behind every engagement — and the capacity story that answers 'can you scale with us?'"
        crumbs={[{ name: "Meet the Team", href: "/team" }]}
      />

      {/* Capacity story */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Our Capacity"
            title="Depth that scales with your busy season"
            subtitle="A structured, multi-level team — not a solo practitioner — built to absorb peak workload while protecting quality."
          />

          {/* headline stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
            {capacityStats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06}>
                <div className="bg-card rounded-2xl p-7 shadow-elegant text-center h-full">
                  <div className="font-playfair text-4xl font-bold text-gradient-gold mb-2">
                    {s.value}
                  </div>
                  <div className="font-inter text-sm text-slate leading-snug">
                    {s.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* composition + review highlights */}
          <div className="grid lg:grid-cols-2 gap-6 mt-6">
            <Reveal>
              <div className="bg-muted rounded-2xl p-8 h-full">
                <h3 className="font-playfair text-xl font-semibold text-primary mb-6">
                  Team composition
                </h3>
                <div className="space-y-4">
                  {composition.map((c) => (
                    <div
                      key={c.label}
                      className="flex items-center justify-between border-b border-border/60 pb-3 last:border-0"
                    >
                      <span className="font-inter text-sm text-foreground">
                        {c.label}
                      </span>
                      <span className="font-playfair text-2xl font-bold text-primary">
                        {c.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <div className="grid grid-cols-2 gap-4">
              {capacityHighlights.map((h, i) => (
                <Reveal key={h.label} delay={i * 0.06}>
                  <div className="bg-gradient-navy rounded-2xl p-6 h-full">
                    <h.icon className="w-7 h-7 text-gold mb-4" />
                    <div className="font-playfair text-3xl font-bold text-primary-foreground mb-1">
                      {h.value}
                    </div>
                    <div className="font-inter text-xs text-primary-foreground/70 leading-snug">
                      {h.label}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* People */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Our People"
            title="Not just partners"
            subtitle="Managers, seniors and audit staff — the professionals who actually execute your engagements."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {team.map((member, i) => (
              <Reveal key={`${member.name}-${i}`} delay={(i % 3) * 0.06}>
                <div className="bg-card rounded-2xl overflow-hidden shadow-elegant h-full flex flex-col">
                  <div className="relative aspect-[4/5] bg-muted">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      unoptimized
                      className="object-cover object-top"
                    />
                    <span className="absolute top-3 left-3 text-[11px] font-inter font-semibold uppercase tracking-wide bg-primary/90 text-primary-foreground px-2.5 py-1 rounded-full">
                      {member.level}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-playfair text-lg font-semibold text-primary">
                      {member.name}
                    </h3>
                    <p className="font-inter text-sm text-gold font-medium mb-2">
                      {member.role}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {member.credentials && (
                        <span className="text-xs font-inter text-primary bg-muted rounded-full px-2.5 py-1">
                          {member.credentials}
                        </span>
                      )}
                      {member.experience && (
                        <span className="text-xs font-inter text-primary bg-muted rounded-full px-2.5 py-1">
                          {member.experience} experience
                        </span>
                      )}
                    </div>
                    {member.bio && (
                      <p className="font-inter text-sm text-slate leading-relaxed">
                        {member.bio}
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Credentials */}
          <Reveal delay={0.1}>
            <div className="mt-14 bg-card rounded-2xl p-8 shadow-elegant text-center">
              <h3 className="font-playfair text-xl font-semibold text-primary mb-5">
                Credentials across the team
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {teamCredentials.map((c) => (
                  <span
                    key={c}
                    className="font-inter text-sm font-medium text-primary bg-muted rounded-full px-4 py-2"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
