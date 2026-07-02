import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export default function CTA() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <Reveal>
          <div className="relative bg-gradient-navy rounded-3xl px-8 py-14 md:px-16 md:py-20 overflow-hidden text-center">
            <div className="absolute inset-0 opacity-15 pointer-events-none">
              <div className="absolute -top-16 -left-10 w-80 h-80 rounded-full bg-gold blur-3xl" />
              <div className="absolute -bottom-16 -right-10 w-80 h-80 rounded-full bg-gold/60 blur-3xl" />
            </div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-5">
                Focus on what&apos;s important
              </h2>
              <p className="font-inter text-primary-foreground/70 text-lg mb-9">
                Ready to take the next step? Contact us today to learn how VSCPA
                can help your firm grow with reliable outsourced accounting.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-gold">
                  Book a Trial
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold border-2 border-white/30 text-white hover:bg-white/10 transition-all"
                >
                  Call {site.phone}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
