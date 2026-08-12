export const site = {
  name: "Virti Shah CPA",
  shortName: "VSCPA",
  tagline: "We hustle to reduce your hassle",
  logo: "/assets/logo/vs_final_logo.png",
  email: "info@virtishahcpa.com",
  phone: "+1 (646) 236-6829",
  phoneHref: "tel:+16462366829",
  emailHref: "mailto:info@virtishahcpa.com",
  address:
    "Mauryansh Elanza, 202-203, Shyamal Cross Rd, Near Parekh hospital, Shyamal, Ahmedabad, Gujarat 380015",
  /** Address links out to Maps wherever it is displayed. */
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Mauryansh+Elanza+Shyamal+Cross+Road+Ahmedabad+380015",
  mapEmbed:
    "https://www.google.com/maps?q=Mauryansh+Elanza+Shyamal+Cross+Road+Ahmedabad+380015&output=embed",
  hours: "Mon – Sat | 10AM to 7PM | Closed Sunday",
  linkedin: "https://www.linkedin.com/in/virtishahcpa/",
  /** Locked primary CTA label, used by the header, footer and every CTA band. */
  primaryCta: "Schedule a Capacity Assessment",
};

export type NavItem = {
  name: string;
  href: string;
  dropdown?: { name: string; href: string }[];
};

/**
 * Primary navigation:
 *   Home | Services | How We Work | Why VSCPA | Firm
 * The copy document omits a desktop Home tab (the logo links home), but a Home
 * item was requested explicitly, so it leads the list on desktop and mobile.
 */
export const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    dropdown: [
      { name: "Audit & Assurance", href: "/services/audit" },
      { name: "Tax Services", href: "/services/tax-preparation" },
      { name: "Bookkeeping", href: "/services/bookkeeping" },
      { name: "AI Implementation", href: "/services/ai-implementation" },
    ],
  },
  { name: "How We Work", href: "/how-we-work" },
  { name: "Why VSCPA", href: "/why-vscpa" },
  {
    name: "Firm",
    href: "/about",
    dropdown: [
      { name: "About Us", href: "/about" },
      { name: "Meet the Team & Capacity", href: "/team" },
      { name: "Industries", href: "/industries" },
      { name: "Security & Technology", href: "/security" },
      { name: "Technology & Platforms", href: "/software" },
      /* New Gallery page; a nav entry is the only way it is reachable. */
      { name: "Life at VSCPA", href: "/gallery" },
      { name: "Contact", href: "/contact" },
    ],
  },
];

/** Mobile menu mirrors the desktop list (Home already leads it). */
export const mobileNavItems: NavItem[] = navItems;

export const services = [
  {
    slug: "audit",
    number: "01",
    title: "Audit & Assurance",
    icon: "/assets/icons/icon-service-03.png",
    teaser:
      "Dedicated offshore audit support across financial statement, nonprofit, EBP, HUD, Single audits, reviews and compilations, working inside your engagement methodology.",
    note: "An audit is the highest level of assurance and it demands the same level of quality. We are an audit-specialized outsourcing partner, not a generalist.",
  },
  {
    slug: "tax-preparation",
    number: "02",
    title: "Tax Services",
    icon: "/assets/icons/icon-service-02.png",
    teaser:
      "Flexible tax preparation and quality-review capacity within your firm's software, workpapers and review process.",
    note: "Individual, business, trust and estate, tax-exempt and approved international individual returns, prepared for your firm's review.",
  },
  {
    slug: "bookkeeping",
    number: "03",
    title: "Bookkeeping & CAS",
    icon: "/assets/icons/icon-service-01.png",
    teaser:
      "Bookkeeping, month-end close, Client Accounting Services, payroll and sales-tax compliance for 300+ monthly clients, with industry-specific expertise.",
    note: "A complete outsourced accounting function your firm can offer clients without adding internal staff.",
  },
  {
    slug: "ai-implementation",
    number: "04",
    title: "AI Implementation",
    icon: "/assets/icons/icon-service-04.png",
    teaser:
      "AI adoption across audit, tax and accounting work, with your data protected, your judgment intact and your firm always in control.",
    note: "AI speeds up the repetitive work; it does not perform the engagement. No AI output is delivered without human review.",
  },
];

export const softwareLogos = [
  { src: "/assets/software/xero.png", alt: "Xero" },
  { src: "/assets/software/quickbooks.png", alt: "Intuit QuickBooks" },
  { src: "/assets/software/r365.png", alt: "Restaurant365" },
  { src: "/assets/software/ultratax.png", alt: "UltraTax" },
  { src: "/assets/software/cch-axcess.png", alt: "CCH Axcess" },
  { src: "/assets/software/lacerte-new.png", alt: "Lacerte" },
  { src: "/assets/software/profx.png", alt: "ProFx" },
  { src: "/assets/software/drake.png", alt: "Drake" },
  { src: "/assets/software/proconnect-or-advancedflow.png", alt: "ProConnect" },
  { src: "/assets/software/splashtop.png", alt: "Splashtop" },
];

export const whyUs = [
  {
    title: "Cost Savings",
    body: "Offshore accounting teams often have lower labor costs, translating to significant savings, helping firms reduce operating expenses and increase profitability.",
  },
  {
    title: "Improved Efficiency",
    body: "Our highly specialized, experienced team improves the efficiency of your accounting processes, saving time and reducing the risk of errors or delays in reporting.",
  },
  {
    title: "Scalability",
    body: "Scale your team up or down depending on workload, giving you greater flexibility and agility in managing client engagements.",
  },
  {
    title: "Increased Capacity",
    body: "Take on more work and clients and grow your business without having to hire additional staff or expand your physical office space.",
  },
  {
    title: "Specialized Skills",
    body: "Access specialized skills and expertise that may not be available locally, expanding your service offerings and the value you provide to clients.",
  },
  {
    title: "Time-Zone Advantage",
    body: "Operating across time zones gives you the opportunity for round-the-clock operations, helping you meet tight deadlines with faster turnaround.",
  },
];

export const workflow = [
  {
    step: "01",
    title: "Initial Consultation",
    body: "We start by understanding your business, your accounting needs, and your pain points, determining whether we're the right fit and how we can help.",
  },
  {
    step: "02",
    title: "Proposal & Engagement Letter",
    body: "We provide a proposal and engagement letter outlining scope, timeline, fees, and terms, ensuring both parties are aligned before work begins.",
  },
  {
    step: "03",
    title: "Data Collection",
    body: "We collect financial statements, bank statements, invoices, and receipts through a secure file-sharing platform so all data is stored safely.",
  },
  {
    step: "04",
    title: "Onboarding",
    body: "We onboard you onto our accounting systems, setting up software, chart of accounts, bank feeds, and accurately entering all data.",
  },
  {
    step: "05",
    title: "Ongoing Communication",
    body: "Throughout the engagement we maintain regular reporting and updates, and remain available to answer any questions or concerns.",
  },
];

export const security = [
  "Latest-configuration workstations & centralized control",
  "VPN protection while working on client servers",
  "External plug-in devices disabled",
  "100% on-site functioning (No WFH)",
  "Licensed support software only",
  "Password-protected, secured workstations",
  "Regular system audits",
  "Restriction on printing of documents",
  "Role-based, functional access to client data",
  "Multiple LAN networks",
  "Restricted access to harmful websites",
  "Automatic backup to prevent data loss",
  "Internet browsing restricted by firewall",
  "Regular security updates",
];
