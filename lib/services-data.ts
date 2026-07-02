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
    title: "Bookkeeping",
    metaDescription:
      "Comprehensive outsourced bookkeeping services — QuickBooks, Xero and R365 experts handling reconciliations, AP/AR and customized financial reporting.",
    image: "/assets/services/bookkeeping.jpg",
    intro:
      "VSCPA offers comprehensive bookkeeping services to help businesses stay on top of their finances.",
    paragraphs: [
      "VSCPA offers comprehensive bookkeeping services to help businesses stay on top of their finances. Our outsourced bookkeeping services take the hassle off your plate, allowing you to focus on your core business while we take care of your bookkeeping needs.",
      "Our team of expert bookkeepers is proficient in using various accounting software, including Quickbooks (Online and Desktop), Xero, and R365. We can help you set up your books, reconcile bank and credit card statements, manage accounts payable and accounts receivable, and produce financial reports customized to your business needs.",
      "By outsourcing your bookkeeping to us, you can make informed financial and tax decisions based on accurate data and up-to-date books. This allows you to save time and money while improving your financial decision-making capabilities.",
      "Whether you're a small business owner or a large corporation, VSCPA can help you streamline your bookkeeping processes and gain better insights into your financial health. Contact us today to learn more about our bookkeeping services and how we can help your business thrive.",
    ],
    listTitle: "Our Bookkeeping services",
    list: [
      "Year-end Bookkeeping",
      "Monthly Bookkeeping",
      "Catch up & Clean up",
      "Bank Reconciliation",
      "Account receivable/payable",
      "Financial statement analysis",
      "Preparation of Cash Flow Statement",
    ],
    highlight:
      "Proficient in Quickbooks (Online and Desktop), Xero and R365.",
  },
  "tax-preparation": {
    slug: "tax-preparation",
    title: "Tax Preparation",
    metaDescription:
      "Reliable, efficient outsourced tax preparation. Experienced professionals using Lacerte, UltraTax, ProSeries, ATX and Drake to process returns accurately and on time.",
    image: "/assets/services/tax-preparation.jpg",
    intro:
      "A reliable and efficient tax preparation service to help you navigate the tax season.",
    paragraphs: [
      "Looking for a reliable and efficient tax preparation service to help you navigate the tax season? Look no further than VSCPA. Our team of experienced tax professionals will assist you in taking on more work while ensuring timely delivery of high-quality output, increasing your profitability, and reducing operating expenses.",
      "At VSCPA, we understand the importance of using cutting-edge tax software and technology to provide our clients with the best possible results. That's why we utilize Intuit's Lacerte, Creative Solutions' UltraTax, Intuit ProSeries, ATX, and Drake to ensure that your tax returns are processed accurately and efficiently.",
      "By choosing VSCPA, you'll be saving yourself the hassle of scouting, evaluating, and training personnel, all at a fraction of the cost. Trust us to handle your tax preparation needs, and experience the peace of mind that comes with knowing your financials are in expert hands.",
    ],
    listTitle: "Our Preparation Services",
    list: [
      "Individual returns - Form 1040",
      "Partnership returns - Form 1065",
      "S-corp returns - Form 1120-S",
      "C-corp returns - Form 1120-C",
      "NFP returns - Form 990",
    ],
    highlight:
      "Software: Intuit's Lacerte, Creative Solutions' UltraTax, Intuit ProSeries, ATX and Drake.",
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
