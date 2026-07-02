import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function PageBanner({
  title,
  subtitle,
  crumbs = [],
}: {
  title: string;
  subtitle?: string;
  crumbs?: { name: string; href: string }[];
}) {
  return (
    <section className="relative bg-gradient-navy pt-44 pb-20 overflow-hidden">
      {/* decorative */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gold blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-gold/50 blur-3xl" />
      </div>
      <div className="container-wide relative z-10 text-center">
        <div className="flex items-center justify-center gap-2 text-sm font-inter text-primary-foreground/60 mb-5">
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
        <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-5">
          {title}
        </h1>
        {subtitle && (
          <p className="max-w-2xl mx-auto font-inter text-primary-foreground/70 text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
