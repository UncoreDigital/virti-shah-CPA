import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, Linkedin } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Virti Shah CPA. Visit our Ahmedabad office, call +1 (646) 236-6829 or email info@virtishahcpa.com to book a trial.",
};

const details = [
  {
    icon: MapPin,
    label: "Office",
    value: site.address,
  },
  {
    icon: Phone,
    label: "Phone",
    value: site.phone,
    href: site.phoneHref,
  },
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    href: site.emailHref,
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: site.hours,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="Let's Talk"
        subtitle="Visit our office or simply send us an email anytime. If you have any questions, please feel free to contact us."
        crumbs={[{ name: "Contact", href: "/contact" }]}
      />

      <section className="section-padding">
        <div className="container-wide grid lg:grid-cols-5 gap-12">
          {/* Info */}
          <div className="lg:col-span-2">
            <Reveal className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-gold" />
              <span className="text-gold font-inter text-sm font-medium tracking-widest uppercase">
                Contact Us With Ease
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-4">
                Focus on what&apos;s important
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="font-inter text-slate leading-relaxed mb-8">
                {site.name} is here to help your firm scale. Reach out and our
                team will get back to you promptly.
              </p>
            </Reveal>

            <div className="space-y-5">
              {details.map((d, i) => (
                <Reveal key={d.label} delay={0.2 + i * 0.06}>
                  <div className="flex items-start gap-4 bg-card rounded-2xl p-5 shadow-elegant">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <d.icon className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <div className="font-inter text-xs uppercase tracking-wider text-muted-foreground mb-1">
                        {d.label}
                      </div>
                      {d.href ? (
                        <a
                          href={d.href}
                          className="font-inter text-primary font-medium hover:text-gold transition-colors"
                        >
                          {d.value}
                        </a>
                      ) : (
                        <div className="font-inter text-primary font-medium">
                          {d.value}
                        </div>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}

              <Reveal delay={0.5}>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-inter text-sm text-gold hover:underline"
                >
                  <Linkedin className="w-4 h-4" />
                  Connect with us on LinkedIn
                </a>
              </Reveal>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-20">
        <div className="container-wide">
          <Reveal>
            <div className="rounded-3xl overflow-hidden shadow-elegant-lg h-[400px]">
              <iframe
                title="Virti Shah CPA Office Location"
                src="https://www.google.com/maps?q=Span+Trade+Centre+Paldi+Ahmedabad&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
