import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { softwareLogos } from "@/lib/site";

export default function Software() {
  const row = [...softwareLogos, ...softwareLogos];
  return (
    <section className="section-padding bg-muted overflow-hidden">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Our Tech Stack"
          title="Software We Work With"
          subtitle="We use the latest accounting and tax software to deliver accurate, timely results."
        />
      </div>

      <div className="relative mt-16">
        {/* edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-muted to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-muted to-transparent" />

        <div className="flex w-max animate-marquee gap-6">
          {row.map((logo, i) => (
            <div
              key={`${logo.alt}-${i}`}
              className="flex items-center justify-center bg-card rounded-xl shadow-elegant h-28 w-44 shrink-0 px-6"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={60}
                className="max-h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
