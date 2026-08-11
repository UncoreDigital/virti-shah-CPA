export type ServiceDetail = {
  slug: string;
  title: string;
  metaDescription: string;
  image: string;
  /** Supporting heading shown under the H1, above the hero copy. */
  supportingHeading?: string;
  intro: string;
  /** Optional heading above the body paragraphs. */
  sectionHeading?: string;
  paragraphs: string[];
  listTitle: string;
  list: string[];
  highlight?: string;
  /** Horizontal trust points. No statistics or numerical claims here. */
  atAGlance?: { title: string; body: string; icon: string }[];
  /** Page-specific closing CTA copy; falls back to the site default. */
  cta?: { heading: string; body: string };
};

export const serviceDetails: Record<string, ServiceDetail> = {
  bookkeeping: {
    slug: "bookkeeping",
    title: "Bookkeeping & Client Accounting Services",
    metaDescription:
      "Dependable bookkeeping, month-end close and Client Accounting Services for U.S. CPA, EA and accounting firms, delivered on an agreed recurring cadence within your systems and review process.",
    image: "/assets/services/bookkeeping.jpg",
    supportingHeading: "Recurring Accounting Capacity, Built Around Your Firm",
    intro:
      "Dependable bookkeeping, month-end close and Client Accounting Services for U.S. CPA, EA and accounting firms. Our professionals complete clearly defined recurring work on an agreed delivery cadence, while your firm retains the client relationship and final review.",
    sectionHeading: "Recurring Accounting, Delivered Consistently",
    paragraphs: [
      "Our professionals complete recurring bookkeeping and month-end close work for your firm's clients. Scope may include reconciliations, accounts payable and receivable, payroll preparation and management reporting.",
      "Where included in the approved scope, assigned work may also include payroll processing and sales-tax preparation and filing.",
      "Work is completed within your systems and review process. Your firm retains the client relationship and final oversight.",
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
    /* Per the developer instruction: three horizontal trust points, teal line
       icons, and deliberately no statistics or numerical claims. */
    atAGlance: [
      {
        title: "Recurring Delivery",
        body: "An agreed monthly or recurring delivery cadence.",
        icon: "CalendarDays",
      },
      {
        title: "Defined CAS Scope",
        body: "Bookkeeping, close and reporting work based on your requirements.",
        icon: "ListChecks",
      },
      {
        title: "Client-Firm Control",
        body: "Your firm retains the client relationship and final review.",
        icon: "Users",
      },
    ],
    /* Closing CTA copy taken from the BK.png reference. That image is a design
       reference only and is deliberately NOT reproduced as a layout. */
    cta: {
      heading: "Ready to Add Bookkeeping & CAS Capacity?",
      body: "Tell us the approximate number of clients, expected cadence, current platforms and timing. We will confirm fit and outline a practical starting scope.",
    },
  },
  "independent-tax-review": {
    slug: "independent-tax-review",
    title: "Independent Tax Review",
    metaDescription:
      "Standalone independent tax review for U.S. CPA firms: 500+ returns reviewed annually for technical accuracy, compliance and consistency, whoever prepared them.",
    image: "/assets/services/tax-preparation.jpg",
    intro:
      "A standalone quality-review service, send us returns your own staff or another provider prepared, and we review them independently.",
    paragraphs: [
      "Independent Tax Review is a distinct, standalone service, not part of the returns we prepare. CPA firms send us returns prepared by their own staff or by other providers, and our Enrolled Agents and Tax Managers perform an independent quality review before the return is filed.",
      "We review 500+ returns each year for technical accuracy, compliance and consistency, checking entity-specific treatment, multi-state positions, diagnostics and disclosures, and return clear reviewer notes your team can act on.",
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
      "500+ returns independently reviewed annually: a standalone service, separate from the 2,000+ returns we prepare.",
  },
  audit: {
    slug: "audit",
    title: "Audit",
    metaDescription:
      "Specialist outsourced audit services, HUD, CIRA, NFP and EBP audits. Comprehensive review, workpapers and testing using cutting-edge data analytics tools.",
    image: "/assets/services/audit.jpg",
    intro:
      "We specialize in a variety of audit services for businesses of all sizes, including HUD, CIRA, NFP and EBP audits.",
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
      "An audit is the highest level of assurance, and it demands the same level of quality. We pride ourselves as an audit-specialised outsourcing firm.",
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
