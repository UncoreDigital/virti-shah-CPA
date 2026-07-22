import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock, Linkedin } from "lucide-react";
import { site } from "@/lib/site";
import { auditServices } from "@/lib/firm-data";

const firmLinks = [
  { name: "About Us", href: "/about" },
  { name: "Meet the Team & Capacity", href: "/team" },
  { name: "Security & Compliance", href: "/security" },
  { name: "Industries", href: "/industries" },
  { name: "Technology", href: "/software" },
  { name: "Client Success Stories", href: "/success-stories" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-primary pt-20 pb-8">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Image
              src={site.logo}
              alt="Virti Shah CPA"
              width={180}
              height={60}
              className="h-14 w-auto object-contain bg-white rounded-lg p-2 mb-6"
            />
            <p className="text-primary-foreground/60 font-inter text-sm leading-relaxed mb-6">
              {site.name} provides dedicated offshore audit &amp; assurance
              professionals who work as an extension of U.S. CPA firms&apos;
              engagement teams — plus tax and bookkeeping support.
            </p>
            <p className="text-gold font-playfair italic text-sm mb-6">
              &ldquo;{site.tagline}&rdquo;
            </p>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 inline-flex items-center justify-center hover:bg-gold hover:text-primary transition-all duration-300"
            >
              <Linkedin className="w-5 h-5 text-primary-foreground" />
            </a>
          </div>

          {/* Audit & Assurance */}
          <div>
            <h4 className="font-playfair text-lg font-semibold text-primary-foreground mb-6">
              Audit &amp; Assurance
            </h4>
            <ul className="space-y-3">
              {auditServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/audit/${s.slug}`}
                    className="text-primary-foreground/60 font-inter text-sm hover:text-gold transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Firm */}
          <div>
            <h4 className="font-playfair text-lg font-semibold text-primary-foreground mb-6">
              The Firm
            </h4>
            <ul className="space-y-3">
              {firmLinks.map((l) => (
                <li key={l.name}>
                  <Link
                    href={l.href}
                    className="text-primary-foreground/60 font-inter text-sm hover:text-gold transition-colors"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-playfair text-lg font-semibold text-primary-foreground mb-6">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/60 font-inter text-sm">
                  {site.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <a
                  href={site.phoneHref}
                  className="text-primary-foreground/60 font-inter text-sm hover:text-gold transition-colors"
                >
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <a
                  href={site.emailHref}
                  className="text-primary-foreground/60 font-inter text-sm hover:text-gold transition-colors"
                >
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/60 font-inter text-sm">
                  {site.hours}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-primary-foreground/40 font-inter text-sm">
            © {new Date().getFullYear()} {site.name}. All rights reserved. | Powered by Uncore Digital
          </p>
          <Link
            href="/privacy-policy"
            className="text-primary-foreground/40 font-inter text-sm hover:text-gold transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
