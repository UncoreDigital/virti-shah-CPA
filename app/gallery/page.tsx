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

          {/* Portrait shots take two rows so nothing is letterboxed. */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] sm:auto-rows-[210px] gap-4">
            {gallery.photos.map((photo, i) => (
              <Reveal
                key={photo.src}
                delay={(i % 4) * 0.05}
                className={
                  photo.orientation === "portrait" ? "row-span-2" : undefined
                }
              >
                <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-elegant group">
                  <Image
                    src={photo.src}
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
