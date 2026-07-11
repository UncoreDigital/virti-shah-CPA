import Link from "next/link";
import { Check, ArrowUpRight, ArrowRight, BookMarked } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";
import { auditServices, type AuditService } from "@/lib/firm-data";

export default function AuditServiceDetail({ data }: { data: AuditService }) {
  const others = auditServices.filter((s) => s.slug !== data.slug).slice(0, 5);

  return (
    <>
      <PageBanner
        title={data.title}
        subtitle={data.intro}
        crumbs={[
          { name: "Audit & Assurance", href: "/services/audit" },
          { name: data.title, href: `/services/audit/${data.slug}` },
        ]}
      />

      <section className="section-padding">
        <div className="container-wide grid lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2">
            <div className="space-y-5 font-inter text-slate leading-relaxed">
              {data.paragraphs.map((p, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>

            {data.standards && data.standards.length > 0 && (
              <Reveal delay={0.15}>
                <div className="mt-8">
                  <h3 className="font-playfair text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                    <BookMarked className="w-5 h-5 text-gold" />
                    Standards & Frameworks
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {data.standards.map((std) => (
                      <span
                        key={std}
                        className="font-inter text-sm font-medium text-primary bg-muted rounded-full px-4 py-1.5"
                      >
                        {std}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}

            <Reveal delay={0.2}>
              <div className="mt-10">
                <h3 className="font-playfair text-2xl font-semibold text-primary mb-6">
                  What our team handles
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {data.scope.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 bg-card rounded-xl p-4 shadow-elegant"
                    >
                      <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="font-inter text-sm text-foreground">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-28 space-y-6">
              <Reveal>
                <div className="bg-gradient-navy rounded-2xl p-7 text-center">
                  <h3 className="font-playfair text-xl font-semibold text-primary-foreground mb-2">
                    Extend your audit team
                  </h3>
                  <p className="font-inter text-sm text-primary-foreground/70 mb-5">
                    Add dedicated {data.title.toLowerCase()} capacity without
                    partner overhead.
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

              <Reveal delay={0.1}>
                <div className="bg-card rounded-2xl p-7 shadow-elegant">
                  <h3 className="font-playfair text-lg font-semibold text-primary mb-4">
                    More Audit Services
                  </h3>
                  <ul className="space-y-1">
                    {others.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/services/audit/${s.slug}`}
                          className="flex items-center justify-between gap-2 font-inter text-sm text-foreground hover:text-gold transition-colors py-2"
                        >
                          {s.title}
                          <ArrowRight className="w-4 h-4 flex-shrink-0" />
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link
                        href="/services/audit"
                        className="flex items-center justify-between gap-2 font-inter text-sm font-medium text-gold py-2"
                      >
                        View all
                        <ArrowUpRight className="w-4 h-4 flex-shrink-0" />
                      </Link>
                    </li>
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
