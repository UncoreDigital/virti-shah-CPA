import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Virti Shah CPA.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageBanner
        title="Privacy Policy"
        crumbs={[{ name: "Privacy Policy", href: "/privacy-policy" }]}
      />
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <div className="prose-vscpa space-y-6 font-inter text-slate leading-relaxed">
            <p>
              {site.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your
              privacy and is committed to protecting any personal information you
              share with us. This policy explains how we collect, use and
              safeguard your information.
            </p>
            <h2 className="font-playfair text-2xl font-semibold text-primary">
              Information we collect
            </h2>
            <p>
              We collect information you voluntarily provide through our contact
              form — such as your name, email, firm name and message — solely to
              respond to your enquiry and provide our services.
            </p>
            <h2 className="font-playfair text-2xl font-semibold text-primary">
              How we use information
            </h2>
            <p>
              Your information is used only to communicate with you regarding
              your enquiry and our outsourced accounting, tax and audit services.
              We do not sell or share your personal information with third
              parties.
            </p>
            <h2 className="font-playfair text-2xl font-semibold text-primary">
              Data security
            </h2>
            <p>
              We operate under strict, audited IT and security controls to keep
              your information confidential and protected at all times.
            </p>
            <h2 className="font-playfair text-2xl font-semibold text-primary">
              Contact
            </h2>
            <p>
              For any questions about this policy, contact us at{" "}
              <a href={site.emailHref} className="text-gold hover:underline">
                {site.email}
              </a>
              .
            </p>
            <p className="text-sm text-muted-foreground">
              This is a placeholder policy — please replace with your firm&apos;s
              finalised legal text before launch.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
