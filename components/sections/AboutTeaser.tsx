import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/Reveal";

const points = [
  "A team of qualified CAs, CPAs and accounting professionals",
  "Founded by Virti Shah, CA, CPA, B.Com — 11+ years of experience",
  "Five years at Citrin Cooperman across audit, tax and advisory",
  "Highest levels of ethics, integrity and multi-level reviews",
];

export default function AboutTeaser() {
  return (
    <section className="section-padding">
      <div className="container-wide grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-gold opacity-10 rounded-3xl blur-2xl" />
            <Image
              src="/assets/founder/virti-shah.jpeg"
              alt="Virti Shah, CA, CPA, B.Com — Founder of Virti Shah CPA"
              width={560}
              height={640}
              className="relative rounded-3xl shadow-elegant-lg w-full object-cover"
            />
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-primary text-primary-foreground rounded-2xl px-6 py-4 shadow-lg">
              <div className="font-playfair text-2xl font-bold text-gold">
                Virti Shah
              </div>
              <div className="font-inter text-xs text-primary-foreground/70">
                CA, CPA, B.Com — Founder
              </div>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold font-inter text-sm font-medium tracking-widest uppercase">
              About Virti Shah CPA
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              A reliable partner built on expertise &amp; integrity
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="font-inter text-slate leading-relaxed mb-6">
              VSCPA is a young and dynamic enterprise providing offshore
              accounting services to US-based CPA, EA and advisory firms. We use
              the latest software and technology to ensure accurate, timely
              financial data — so you can make informed decisions while we take
              care of the rest.
            </p>
          </Reveal>
          <ul className="space-y-3 mb-8">
            {points.map((p, i) => (
              <Reveal key={p} delay={0.2 + i * 0.05}>
                <li className="flex items-start gap-3 font-inter text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  {p}
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={0.4}>
            <Link href="/about" className="btn-navy">
              More About Us
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
