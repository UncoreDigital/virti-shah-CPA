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

          {/* Uniform square tiles: the count is divisible by 2, 3 and 4, so the
              last row always fills and no empty blocks are left behind. */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {gallery.photos.map((src, i) => (
              <Reveal key={src} delay={(i % 4) * 0.05}>
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-elegant group">
                  <Image
                    src={src}
                    alt={`${gallery.altPrefix} photo ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
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
