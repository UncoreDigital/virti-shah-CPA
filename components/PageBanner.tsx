import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";

export default function PageBanner({
  title,
  subtitle,
  eyebrow,
  tagline,
  crumbs = [],
}: {
  /** ReactNode so a page can accent part of the heading. */
  title: ReactNode;
  subtitle?: string;
  eyebrow?: string;
  /** Supporting heading rendered between the H1 and the subtitle. */
  tagline?: string;
  /** Omit entirely to hide the breadcrumb row (the About page does). */
  crumbs?: { name: string; href: string }[];
}) {
  return (
    <section className="relative bg-gradient-navy pt-44 pb-20 overflow-hidden">
      {/* decorative */}
      <div className="absolute inset-0 bg-dot-grid opacity-[0.15]" />
      <div className="absolute inset-0 opacity-15">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gold blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-gold/50 blur-3xl" />
      </div>
      <div className="container-wide relative z-10 text-left">
        {crumbs.length > 0 && (
          <div className="flex items-center gap-2 text-sm font-inter text-primary-foreground/85 mb-5">
            <Link href="/" className="hover:text-gold transition-colors">
              Home
            </Link>
            {crumbs.map((c) => (
              <span key={c.href} className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4" />
                <Link href={c.href} className="hover:text-gold transition-colors">
                  {c.name}
                </Link>
              </span>
            ))}
          </div>
        )}
        {eyebrow && (
          <p className="font-inter text-sm font-semibold uppercase tracking-[0.18em] text-gold mb-4">
            {eyebrow}
          </p>
        )}
        <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-5">
          {title}
        </h1>
        {tagline && (
          <p className="font-playfair text-xl md:text-2xl text-gold-light mb-4">
            {tagline}
          </p>
        )}
        {subtitle && (
          <p className="max-w-3xl font-inter text-primary-foreground/85 text-lg leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
