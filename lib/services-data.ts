export type ServiceDetail = {
  slug: string;
  title: string;
  metaDescription: string;
  image: string;
  intro: string;
  paragraphs: string[];
  listTitle: string;
  list: string[];
  highlight?: string;
};

export const serviceDetails: Record<string, ServiceDetail> = {
  bookkeeping: {
    slug: "bookkeeping",
    title: "Bookkeeping & Client Accounting Services",
    metaDescription:
      "Outsourced bookkeeping, month-end close, CAS, payroll and sales-tax compliance for U.S. CPA, EA and bookkeeping firms — 300+ monthly clients across QuickBooks, Xero and more.",
    image: "/assets/services/bookkeeping.jpg",
    intro:
      "Dedicated bookkeeping, month-end close and Client Accounting Services — supporting 300+ monthly clients for U.S. CPA, EA and bookkeeping firms.",
    paragraphs: [
      "We manage recurring bookkeeping and month-end close for 300+ monthly clients across CPA firms, EA firms and bookkeeping firms — reconciliations, AP/AR, payroll and management reporting delivered on a predictable monthly cadence.",
      "Beyond core bookkeeping, we provide full Client Accounting Services (CAS), payroll processing and sales-tax compliance, so your firm can offer a complete outsourced accounting function to its clients without adding internal staff.",
      "Our team works across QuickBooks Online and Desktop, Xero, Wave, Zoho Books and industry platforms such as Yardi and Rent Manager — plus payment and payroll tools including Bill.com, Gusto, ADP and Paychex — adapting to whatever stack your clients already run on.",
    ],
    listTitle: "Our Accounting Services",
    list: [
      "Bookkeeping & Month-End Close",
      "Client Accounting Services (CAS)",
      "Payroll",
      "Sales Tax Compliance",
      "Bank & Credit Card Reconciliation",
      "Accounts Payable / Receivable",
      "Management Reporting",
    ],
    highlight:
      "300+ monthly bookkeeping clients across CPA, EA and bookkeeping firms — with industry-specific expertise.",
  },
  "tax-preparation": {
    slug: "tax-preparation",
    title: "Tax Preparation",
    metaDescription:
      "EA-led outsourced tax preparation for U.S. CPA firms — 2,000+ returns each season across Forms 1040, 1120-S, 1065, 1120 and multi-state, with a 3-level review process.",
    image: "/assets/services/tax-preparation.jpg",
    intro:
      "IRS-licensed, EA-led tax preparation that scales your firm through busy season — over 2,000 returns each season.",
    paragraphs: [
      "Our tax practice is led by IRS-licensed Enrolled Agents (EAs) and prepares 2,000+ returns each season for U.S. CPA firms — across individual, partnership, S-corp, C-corp and multi-state returns. Your firm takes on more work while we deliver accurate, review-ready output on time.",
      "Every return moves through a structured, multi-level review — Preparer → Senior Reviewer → Tax Manager — before it reaches your CPA or partner for final sign-off. That process protects technical accuracy, compliance and consistency at volume, so nothing lands on a partner's desk unchecked.",
      "You get dedicated capacity that works inside your software and your workflow — CCH Axcess, UltraTax, ProConnect, Lacerte, ProSeries, Drake and TaxAct — without the cost and hassle of scouting, evaluating and training seasonal staff.",
    ],
    listTitle: "Our Tax Services",
    list: [
      "Tax Preparation (1040, 1065, 1120-S, 1120)",
      "Multi-state returns",
      "Independent Tax Review",
      "Tax Planning",
      "IRS & State Notice Responses",
      "Tax Advisory",
    ],
    highlight:
      "Led by IRS-licensed Enrolled Agents (EAs). 2,000+ returns prepared each season through a 3-level review process.",
  },
  "independent-tax-review": {
    slug: "independent-tax-review",
    title: "Independent Tax Review",
    metaDescription:
      "Standalone independent tax review for U.S. CPA firms — 500+ returns reviewed annually for technical accuracy, compliance and consistency, whoever prepared them.",
    image: "/assets/services/tax-preparation.jpg",
    intro:
      "A standalone quality-review service — send us returns your own staff or another provider prepared, and we review them independently.",
    paragraphs: [
      "Independent Tax Review is a distinct, standalone service — not part of the returns we prepare. CPA firms send us returns prepared by their own staff or by other providers, and our Enrolled Agents and Tax Managers perform an independent quality review before the return is filed.",
      "We review 500+ returns each year for technical accuracy, compliance and consistency — checking entity-specific treatment, multi-state positions, diagnostics and disclosures — and return clear reviewer notes your team can act on.",
      "It's an efficient way to add a senior second-look to your process, catch issues before they reach the client, and give your partners confidence in work prepared under time pressure or by less experienced staff.",
    ],
    listTitle: "What the review covers",
    list: [
      "Technical accuracy & entity treatment",
      "Federal & multi-state positions",
      "Software diagnostics resolution",
      "Disclosures & consistency checks",
      "Prior-year comparison",
      "Documented reviewer notes for your team",
    ],
    highlight:
      "500+ returns independently reviewed annually — a standalone service, separate from the 2,000+ returns we prepare.",
  },
  audit: {
    slug: "audit",
    title: "Audit",
    metaDescription:
      "Specialist outsourced audit services — HUD, CIRA, NFP and EBP audits. Comprehensive review, workpapers and testing using cutting-edge data analytics tools.",
    image: "/assets/services/audit.jpg",
    intro:
      "We specialize in a variety of audit services for businesses of all sizes — including HUD, CIRA, NFP and EBP audits.",
    paragraphs: [
      "Welcome to Virti Shah CPA, where we specialize in a variety of audit services for businesses of all sizes. Our team of skilled and experienced auditors has a wealth of knowledge in various audit areas, including HUD, CIRA, NFP, and EBP audits. We are dedicated to providing you with accurate and efficient financial reporting, no matter your needs.",
      "Our approach to auditing is designed to be comprehensive, providing a thorough review of your financial records and processes to ensure compliance with applicable laws and regulations. Our team is trained in latest auditing technology and software, including cutting-edge data analytics and visualization tools, to provide our clients with the most efficient and accurate audits possible.",
      "We take pride in our reputation for integrity, reliability, and accuracy, and we're committed to upholding those standards in every audit we perform. Contact us today to learn more about our specialized audit services and how we can assist your business.",
    ],
    listTitle: "Our Services",
    list: [
      "Preparation, Review and Compilation",
      "Data Roll forwarding",
      "Work paper preparation",
      "JE Testing & Sample Testing",
    ],
    highlight:
      "An audit is the highest level of assurance — and it demands the same level of quality. We pride ourselves as an audit-specialised outsourcing firm.",
  },
};

export const auditSpecialties = [
  {
    title: "HUD Audits",
    body: "We specialize in HUD audits, which are required for organizations that receive funding from the Department of Housing and Urban Development. Our team has extensive experience with HUD audits and can help you navigate the complex requirements to ensure compliance and accurate reporting.",
  },
  {
    title: "CIRA Audits",
    body: "We also specialize in CIRA (Common Interest Realty Association) audits, which are required for homeowners associations and other similar organizations. Our team can help you evaluate your financial records and processes to ensure compliance with CIRA regulations and provide recommendations for improvement.",
  },
  {
    title: "NFP Audits",
    body: "For nonprofit organizations, we specialize in NFP (not-for-profit) audits. Our team understands the unique reporting requirements and regulations for nonprofit organizations and can help ensure accurate and timely reporting to donors, grantors, and other stakeholders.",
  },
  {
    title: "EBP Audits",
    body: "Finally, for organizations with employee benefit plans, we specialize in EBP (employee benefit plan) audits. Our team can help ensure compliance with complex regulations governing these plans, including the Employee Retirement Income Security Act (ERISA).",
  },
];

export const pricingPackages = [
  {
    price: "$149",
    name: "Basic Package",
    subtitle: "Tax Calculation",
    features: [
      "Basic account checkups",
      "Tax recommendations",
      "IRS recommendations",
      "Tax refunds",
    ],
    featured: false,
  },
  {
    price: "$199",
    name: "Upgraded Package",
    subtitle: "Tax & Refund Calculation",
    features: [
      "Advanced account checkups",
      "Tax calculations",
      "IRS calculations",
      "Tax refunds",
    ],
    featured: true,
  },
  {
    price: "$299",
    name: "Full Package",
    subtitle: "Tax & IRS Calculation",
    features: [
      "Full all accounts checkups",
      "Tax calculations & advices",
      "IRS calculations & advices",
      "Tax refunds",
    ],
    featured: false,
  },
];
