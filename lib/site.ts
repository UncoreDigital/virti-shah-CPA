export const site = {
  name: "Virti Shah CPA",
  shortName: "VSCPA",
  tagline: "We hustle to reduce your hassle",
  logo: "/assets/logo/vs_final_logo.png",
  email: "info@virtishahcpa.com",
  phone: "+1 (646) 236-6829",
  phoneHref: "tel:+16462366829",
  emailHref: "mailto:info@virtishahcpa.com",
  address: "401-403, Span Trade Centre, Opp. Kocharab Ashram, Paldi, Ahmedabad 380007",
  hours: "Mon – Sat | 10AM to 7PM | Closed Sunday",
  linkedin: "https://www.linkedin.com/in/virtishahcpa/",
};

export type NavItem = {
  name: string;
  href: string;
  dropdown?: { name: string; href: string }[];
};

export const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  {
    name: "Audit & Assurance",
    href: "/services/audit",
    dropdown: [
      { name: "Financial Statement Audits", href: "/services/audit/financial-statement-audits" },
      { name: "Nonprofit Audits", href: "/services/audit/nonprofit-audits" },
      { name: "Employee Benefit Plan Audits", href: "/services/audit/employee-benefit-plan-audits" },
      { name: "HUD Audits", href: "/services/audit/hud-audits" },
      { name: "Single Audits", href: "/services/audit/single-audits" },
      { name: "Reviews", href: "/services/audit/reviews" },
      { name: "Compilations", href: "/services/audit/compilations" },
      { name: "Audit Preparation", href: "/services/audit/audit-preparation" },
    ],
  },
  {
    name: "Firm",
    href: "/about",
    dropdown: [
      { name: "About Us", href: "/about" },
      { name: "Meet the Team & Capacity", href: "/team" },
      { name: "Security & Compliance", href: "/security" },
      { name: "Industries", href: "/industries" },
      { name: "Technology", href: "/software" },
      { name: "Client Success Stories", href: "/success-stories" },
    ],
  },
  {
    name: "Services",
    href: "/services",
    dropdown: [
      { name: "Audit & Assurance", href: "/services/audit" },
      { name: "Tax Preparation", href: "/services/tax-preparation" },
      { name: "Independent Tax Review", href: "/services/independent-tax-review" },
      { name: "Bookkeeping & CAS", href: "/services/bookkeeping" },
    ],
  },
  { name: "Contact", href: "/contact" },
];

export const services = [
  {
    slug: "audit",
    number: "01",
    title: "Audit & Assurance",
    icon: "/assets/icons/icon-service-03.png",
    teaser:
      "Dedicated offshore audit support across financial statement, nonprofit, EBP, HUD, Single audits, reviews and compilations — working inside your engagement methodology.",
    note: "An audit is the highest level of assurance and it demands the same level of quality. We are an audit-specialised outsourcing partner, not a generalist.",
  },
  {
    slug: "tax-preparation",
    number: "02",
    title: "Tax Preparation",
    icon: "/assets/icons/icon-service-02.png",
    teaser:
      "EA-led preparation of 2,000+ returns each season — 1040, 1065, 1120-S, 1120 and multi-state — with a structured 3-level review before partner sign-off.",
    note: "Led by IRS-licensed Enrolled Agents, so your firm can glide through busy season while we absorb the volume.",
  },
  {
    slug: "independent-tax-review",
    number: "03",
    title: "Independent Tax Review",
    icon: "/assets/icons/icon-service-04.png",
    teaser:
      "A standalone quality-review service — send us returns prepared by your own staff or another provider and we review them independently for accuracy and compliance.",
    note: "500+ returns independently reviewed each year — a senior second-look, separate from the returns we prepare.",
  },
  {
    slug: "bookkeeping",
    number: "04",
    title: "Bookkeeping & CAS",
    icon: "/assets/icons/icon-service-01.png",
    teaser:
      "Bookkeeping, month-end close, Client Accounting Services, payroll and sales-tax compliance for 300+ monthly clients — with industry-specific expertise.",
    note: "A complete outsourced accounting function your firm can offer clients without adding internal staff.",
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
    body: "Offshore accounting teams often have lower labor costs, translating to significant savings — helping firms reduce operating expenses and increase profitability.",
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
    body: "We start by understanding your business, your accounting needs, and your pain points — determining whether we're the right fit and how we can help.",
  },
  {
    step: "02",
    title: "Proposal & Engagement Letter",
    body: "We provide a proposal and engagement letter outlining scope, timeline, fees, and terms — ensuring both parties are aligned before work begins.",
  },
  {
    step: "03",
    title: "Data Collection",
    body: "We collect financial statements, bank statements, invoices, and receipts through a secure file-sharing platform so all data is stored safely.",
  },
  {
    step: "04",
    title: "Onboarding",
    body: "We onboard you onto our accounting systems — setting up software, chart of accounts, bank feeds, and accurately entering all data.",
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
  "100% on-site functioning — No WFH",
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
