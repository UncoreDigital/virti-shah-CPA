import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2, ChevronDown } from "lucide-react";
import { hero } from "@/lib/homepage";

/**
 * Homepage Section 1 — locked copy.
 *
 * Entrance is a CSS animation (not framer-motion) so the copy is never gated
 * behind hydration; if JS is slow or blocked the text still renders.
 *
 * Height uses rem steps rather than vh: mobile browsers resize the viewport as
 * the address bar hides, which makes vh-based heights jump mid-scroll.
 */
const stagger = (i: number) => ({
  animationDelay: `${i * 90}ms`,
  animationFillMode: "both" as const,
});

export default function Hero() {
  return (
    <section className="relative bg-primary min-h-[34rem] sm:min-h-[38rem] lg:min-h-[44rem] xl:min-h-[48rem] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero/slide-1.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[68%_center] md:object-[60%_center] lg:object-center"
        />
        {/*
          Scrim is weighted to the left, where the copy sits, so the photograph
          stays visible on the right instead of being flattened to a navy block.
          Mobile gets a heavier base tint because the text spans the full width.
        */}
        <div className="absolute inset-0 bg-primary/65 md:bg-primary/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-transparent md:via-primary/65 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-dot-grid opacity-[0.12]" />
        {/* Teal glow, kept off the photo side */}
        <div className="absolute -top-32 -left-24 w-[32rem] h-[32rem] rounded-full bg-gold/20 blur-[120px]" />
      </div>

      {/* w-full: the section is a flex row, so without it this box shrink-wraps
          and mx-auto centres it instead of sitting on the page gutter. */}
      <div className="container-wide relative z-10 w-full pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28">
        <div className="max-w-4xl">
          <div
            style={stagger(0)}
            className="animate-fade-in-up inline-flex items-center gap-2.5 rounded-full border border-gold/40 bg-primary/50 px-3.5 py-2 mb-6 sm:mb-7 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
            </span>
            <span className="font-inter text-[11px] sm:text-xs md:text-[13px] font-semibold tracking-[0.16em] uppercase text-gold-light">
              {hero.eyebrow}
            </span>
          </div>

          {/* Fluid type: scales smoothly between breakpoints and under zoom. */}
          <h1
            style={stagger(1)}
            className="animate-fade-in-up font-playfair text-[clamp(2rem,5.2vw,3.75rem)] leading-[1.12] font-bold text-primary-foreground mb-5 sm:mb-6 [text-shadow:0_2px_18px_hsl(203_53%_18%/0.45)]"
          >
            <span className="text-gradient-gold-bright">{hero.h1Lead}</span>{" "}
            {hero.h1Tail}
          </h1>

          <p
            style={stagger(2)}
            className="animate-fade-in-up font-inter text-primary-foreground/90 text-[clamp(0.95rem,1.15vw,1.125rem)] leading-relaxed mb-8 sm:mb-9 max-w-xl lg:max-w-2xl [text-shadow:0_1px_12px_hsl(203_53%_18%/0.5)]"
          >
            {hero.body}
          </p>

          <div
            style={stagger(3)}
            className="animate-fade-in-up flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 mb-10 sm:mb-12"
          >
            <Link href={hero.primaryCta.href} className="btn-gold group">
              {hero.primaryCta.label}
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold border-2 border-white/35 text-white hover:bg-white/10 hover:border-white/55 transition-all duration-300"
            >
              {hero.secondaryCta.label}
            </Link>
          </div>

          {/* Trust strip */}
          <ul
            style={stagger(4)}
            className="animate-fade-in-up flex flex-wrap gap-2.5 sm:gap-3"
          >
            {hero.trustPoints.map((point) => (
              <li
                key={point}
                className="chip-glass font-inter text-[13px] sm:text-sm text-primary-foreground"
              >
                <CheckCircle2 className="w-4 h-4 text-gold-light flex-shrink-0" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Scroll cue — only on screens tall enough to have room for it */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 hidden flex-col items-center gap-1.5 text-primary-foreground/60 [@media(min-height:820px)]:lg:flex">
        <span className="font-inter text-[10px] uppercase tracking-[0.2em]">
          Scroll
        </span>
        <ChevronDown className="w-4 h-4 animate-float" />
      </div>
    </section>
  );
}
