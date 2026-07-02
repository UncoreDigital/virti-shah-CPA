"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const slides = [
  {
    image: "/assets/hero/slide-1.jpg",
    eyebrow: "Outsourced Accounting & Offshore Staffing",
    titleLead: "Affordable, Reliable & Quality",
    titleHighlight: "Outsourced Accounting",
    titleTail: "Solutions",
    subtitle:
      "Your go-to partner for bookkeeping, tax preparation and audit support — serving US-based CPA, EA, Tax, Accounting and Advisory firms of all sizes.",
    objectPosition: "object-[60%_center] md:object-center",
  },
  {
    image: "/assets/hero/slide-2.jpg",
    eyebrow: "Audit Specialists",
    titleLead: "Leading service providers for",
    titleHighlight: "HUD, CIRA, NFP & EBP",
    titleTail: "Audits",
    subtitle:
      "An audit is the highest level of assurance — and it demands the same level of quality. We pride ourselves as an audit-specialised outsourcing firm.",
    objectPosition: "object-[70%_center] md:object-center",
  },
];

const highlights = [
  "US CPA-led, multi-level review process",
  "Latest software & 100% secured operations",
  "Cost-effective, expert & reliable support",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(
    () => setCurrent((p) => (p + 1) % slides.length),
    []
  );
  const prev = () =>
    setCurrent((p) => (p - 1 + slides.length) % slides.length);

  useEffect(() => {
    const t = setInterval(next, 6500);
    return () => clearInterval(t);
  }, [next, current]);

  const slide = slides[current];

  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden">
      {/* Background slides */}
      <div className="absolute inset-0 z-0">
        {slides.map((s, i) => (
          <motion.div
            key={s.image}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: current === i ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src={s.image}
              alt=""
              fill
              priority={i === 0}
              sizes="100vw"
              className={`object-cover ${s.objectPosition}`}
            />
          </motion.div>
        ))}
        {/* Navy overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/50 md:to-primary/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
      </div>

      <div className="container-wide relative z-10 pt-32 pb-24 lg:pt-40 lg:pb-28">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-10 bg-gold" />
                  <span className="text-gold font-inter text-xs md:text-sm font-medium tracking-widest uppercase">
                    {slide.eyebrow}
                  </span>
                </div>

                <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 max-w-3xl">
                  {slide.titleLead}{" "}
                  <span className="text-gradient-gold">
                    {slide.titleHighlight}
                  </span>{" "}
                  {slide.titleTail}
                </h1>

                <p className="font-inter text-primary-foreground/80 text-lg leading-relaxed mb-8 max-w-xl">
                  {slide.subtitle}
                </p>
              </motion.div>
            </AnimatePresence>

            <ul className="space-y-3 mb-10">
              {highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-center gap-3 font-inter text-primary-foreground/85"
                >
                  <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-gold">
                Book a Trial
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold border-2 border-white/30 text-white hover:bg-white/10 transition-all"
              >
                Our Services
              </Link>
            </div>
          </div>

          {/* Arrow controls */}
          <div className="hidden lg:flex lg:col-span-4 flex-col items-end justify-center gap-4">
            <div className="flex gap-3">
              <button
                onClick={prev}
                aria-label="Previous slide"
                className="p-3 border border-white/25 rounded-full text-white hover:bg-white/10 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={next}
                aria-label="Next slide"
                className="p-3 border border-white/25 rounded-full text-white hover:bg-white/10 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((s, i) => (
          <button
            key={s.image}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "w-8 h-2.5 bg-gold"
                : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
