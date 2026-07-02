import Link from "next/link";
import Image from "next/image";
import { Check, ArrowUpRight, Sparkles } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import { services, site } from "@/lib/site";
import type { ServiceDetail as ServiceDetailType } from "@/lib/services-data";

export default function ServiceDetail({
  data,
  children,
}: {
  data: ServiceDetailType;
  children?: React.ReactNode;
}) {
  return (
    <>
      <PageBanner
        title={data.title}
        subtitle={data.intro}
        crumbs={[
          { name: "Services", href: "/services" },
          { name: data.title, href: `/services/${data.slug}` },
        ]}
      />

      <section className="section-padding">
        <div className="container-wide grid lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2">
            <Reveal>
              <div className="relative rounded-2xl overflow-hidden shadow-elegant-lg mb-8 aspect-[16/9]">
                <Image
                  src={data.image}
                  alt={`${data.title} services at Virti Shah CPA`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover"
                  priority
                />
              </div>
            </Reveal>
            <div className="space-y-5 font-inter text-slate leading-relaxed">
              {data.paragraphs.map((p, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>

            {data.highlight && (
              <Reveal delay={0.2}>
                <div className="mt-8 flex items-start gap-3 bg-muted rounded-2xl p-6 border-l-4 border-gold">
                  <Sparkles className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <p className="font-inter text-primary font-medium">
                    {data.highlight}
                  </p>
                </div>
              </Reveal>
            )}

            {children}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-28 space-y-6">
              <Reveal>
                <div className="bg-card rounded-2xl p-7 shadow-elegant">
                  <h3 className="font-playfair text-xl font-semibold text-primary mb-5">
                    {data.listTitle}
                  </h3>
                  <ul className="space-y-3">
                    {data.list.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 font-inter text-sm text-foreground"
                      >
                        <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="bg-gradient-navy rounded-2xl p-7 text-center">
                  <h3 className="font-playfair text-xl font-semibold text-primary-foreground mb-2">
                    Ready to get started?
                  </h3>
                  <p className="font-inter text-sm text-primary-foreground/70 mb-5">
                    Book a trial and see the VSCPA difference.
                  </p>
                  <Link href="/contact" className="btn-gold w-full justify-center">
                    Book a Trial
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                  <a
                    href={site.phoneHref}
                    className="block mt-4 font-inter text-sm text-gold hover:underline"
                  >
                    {site.phone}
                  </a>
                </div>
              </Reveal>

              {/* Other services */}
              <Reveal delay={0.15}>
                <div className="bg-card rounded-2xl p-7 shadow-elegant">
                  <h3 className="font-playfair text-lg font-semibold text-primary mb-4">
                    Other Services
                  </h3>
                  <ul className="space-y-2">
                    {services
                      .filter((s) => s.slug !== data.slug)
                      .map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/services/${s.slug}`}
                            className="flex items-center justify-between font-inter text-sm text-foreground hover:text-gold transition-colors py-1.5"
                          >
                            {s.title}
                            <ArrowUpRight className="w-4 h-4" />
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
