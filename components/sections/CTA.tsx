import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

/**
 * Site-wide conversion band. Defaults carry the locked homepage copy
 * (Section 7); pages with their own approved CTA copy override via props.
 */
export default function CTA({
  eyebrow = "Start the Conversation",
  heading = "Where Does Your Firm Need More Delivery Support?",
  body = "Tell us the services, expected volume, timing and software involved. We will help define a practical starting scope.",
  buttonLabel = site.primaryCta,
  buttonHref = "/contact",
  showPhone = false,
}: {
  eyebrow?: string;
  heading?: string;
  body?: string;
  buttonLabel?: string;
  buttonHref?: string;
  showPhone?: boolean;
}) {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <Reveal>
          <div className="relative bg-gradient-navy rounded-3xl px-8 py-14 md:px-16 md:py-20 overflow-hidden text-left shadow-elegant-lg">
            <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute -top-16 -left-10 w-80 h-80 rounded-full bg-gold blur-3xl" />
              <div className="absolute -bottom-16 -right-10 w-80 h-80 rounded-full bg-gold/60 blur-3xl" />
            </div>
            <div className="relative z-10 max-w-3xl">
              {eyebrow && (
                <p className="font-inter text-sm font-semibold uppercase tracking-[0.18em] text-gold mb-4">
                  {eyebrow}
                </p>
              )}
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-5">
                {heading}
              </h2>
              <p className="font-inter text-primary-foreground/85 text-lg mb-9 leading-relaxed">
                {body}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={buttonHref} className="btn-gold">
                  {buttonLabel}
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                {showPhone && (
                  <a
                    href={site.phoneHref}
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold border-2 border-white/30 text-white hover:bg-white/10 transition-all"
                  >
                    Call {site.phone}
                  </a>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
