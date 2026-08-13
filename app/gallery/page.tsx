import type { Metadata } from "next";
import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CTA from "@/components/sections/CTA";
import { gallery } from "@/lib/gallery";

export const metadata: Metadata = {
  title: gallery.h1,
  description: gallery.subtitle,
};

export default function GalleryPage() {
  return (
    <>
      <PageBanner
        eyebrow={gallery.eyebrow}
        title={gallery.h1}
        subtitle={gallery.subtitle}
        crumbs={[{ name: gallery.h1, href: "/gallery" }]}
      />

      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading
            eyebrow={gallery.sectionEyebrow}
            title={gallery.sectionHeading}
          />

          {/* Justified gallery: rows share a fixed height and the last row's
              tiles grow to fill the width, so any photo count leaves no gaps. */}
          <div className="mt-12 flex flex-wrap gap-4">
            {gallery.photos.map((src, i) => (
              <Reveal
                key={src}
                delay={(i % 4) * 0.05}
                className="grow basis-[calc(50%-0.5rem)] sm:basis-[calc(33.333%-0.667rem)] lg:basis-[calc(25%-0.75rem)]"
              >
                <div className="relative h-[180px] sm:h-[210px] lg:h-[230px] w-full overflow-hidden rounded-2xl shadow-elegant group">
                  <Image
                    src={src}
                    alt={`${gallery.altPrefix} photo ${i + 1}`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/15" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
