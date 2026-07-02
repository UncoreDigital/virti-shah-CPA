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
  { name: "About Us", href: "/about" },
  {
    name: "Services",
    href: "/services",
    dropdown: [
      { name: "Bookkeeping", href: "/services/bookkeeping" },
      { name: "Tax Preparation", href: "/services/tax-preparation" },
      { name: "Audit", href: "/services/audit" },
    ],
  },
  { name: "Contact", href: "/contact" },
];

export const services = [
  {
    slug: "bookkeeping",
    number: "01",
    title: "Bookkeeping",
    icon: "/assets/icons/icon-service-01.png",
    teaser:
      "Outsourced bookkeeping can be a valuable solution for businesses looking to streamline their financial operations, save costs, and stay compliant with tax laws and regulations.",
    note: "Whether it is to make a financial decision or to know the performance of your business or to prepare your taxes, the most important thing is maintaining up to date books.",
  },
  {
    slug: "tax-preparation",
    number: "02",
    title: "Tax Preparation",
    icon: "/assets/icons/icon-service-02.png",
    teaser:
      "Outsourcing tax preparation can be a valuable solution for businesses looking to stay compliant with tax laws and regulations, reduce the risk of errors in their tax filings, and save time and resources.",
    note: "All the accountants dread busy season but, when you outsource your taxes to us, you can glide through the season while maintaining a healthy work-life balance while we take up all the hassles.",
  },
  {
    slug: "audit",
    number: "03",
    title: "Audit",
    icon: "/assets/icons/icon-service-03.png",
    teaser:
      "Outsourcing audit tasks can be a valuable solution for businesses looking to ensure compliance with specific audit requirements, reduce the risk of errors and non-compliance, and save time and resources.",
    note: "An audit is the highest level of assurance and it demands the same level of quality. We pride ourselves as an Audit specialised outsourcing firm.",
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
