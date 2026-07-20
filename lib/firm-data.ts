/**
 * ============================================================================
 *  VIRTI SHAH CPA — CENTRAL FIRM DATA
 * ============================================================================
 *  This is the SINGLE source of truth for every firm-specific fact used across
 *  the repositioned website (capacity numbers, certifications, team headcount,
 *  measurable outcomes, etc.).
 *
 *  ⚠️  ACTION REQUIRED — anything marked `TODO: CONFIRM` is a SAFE PLACEHOLDER,
 *      not a verified fact. Replace each with the firm's real figure before the
 *      site goes public. Nothing false is stated in the meantime — numbers are
 *      conservative and certification claims use "aligned with" language until
 *      you confirm a formal certificate exists (then flip `certified` to true
 *      and drop the "aligned with" wording).
 *
 *  See the "FILL-IN CHECKLIST" comment at the bottom of this file.
 * ============================================================================
 */

/* ---------------------------------------------------------------------------
 *  POSITIONING — the one-line promise the site now leads with
 * ------------------------------------------------------------------------- */
export const positioning = {
  headline: "Dedicated Offshore Audit & Assurance Professionals for U.S. CPA Firms",
  subhead:
    "We work as a seamless extension of your engagement teams — scaling your assurance practice through busy season without adding partner overhead or sacrificing quality.",
  // Short value proposition used in nav CTAs and meta descriptions
  shortPitch:
    "Extend your audit practice without increasing partner overhead. Dedicated offshore audit teams integrated with your engagement methodology.",
};

/* ---------------------------------------------------------------------------
 *  CAPACITY STORY — the "how big / how deep are you" answer partners look for
 *  TODO: CONFIRM every number below.
 * ------------------------------------------------------------------------- */
export type Stat = { value: string; label: string; sub?: string };

// Firm-wide, confirmed trust signals shown in the homepage hero band.
// (Audit-specific capacity numbers are being supplied separately by the audit team.)
export const capacityStats: Stat[] = [
  { value: "100+", label: "Professionals across audit, tax & bookkeeping" },
  { value: "3", label: "Levels of review before partner sign-off" },
  { value: "EA & CPA", label: "IRS-licensed & CPA-led engagements" },
  { value: "100%", label: "On-site, secured operations" },
];

// Team-composition / staffing-depth breakdown — CONFIRMED firm-wide headcount.
export const teamComposition = {
  founder: { count: "1", label: "Founder" },
  managers: { count: "10+", label: "Managers" },
  seniors: { count: "35+", label: "Seniors / Reviewers" },
  staff: { count: "60+", label: "Staff / Associates" },
  total: "100+",
  reviewLevels: "3", // Preparer → Senior Reviewer → Manager → Client CPA/Partner sign-off
  cpaLed: true,
};

/* ---------------------------------------------------------------------------
 *  TAX & BOOKKEEPING PRACTICE — CONFIRMED data (provided by the tax team)
 * ------------------------------------------------------------------------- */
export const taxBookkeeping = {
  stats: [
    { value: "2,000+", label: "Tax returns prepared each season" },
    { value: "500+", label: "Returns independently reviewed / year" },
    { value: "300+", label: "Monthly bookkeeping clients" },
    { value: "EA-led", label: "IRS-licensed Enrolled Agents" },
  ] as Stat[],
  // Multi-level tax review workflow (the "3 Levels of Review" story is accurate here)
  reviewWorkflow: [
    "Preparer",
    "Senior Reviewer",
    "Tax Manager",
    "Client CPA / Partner Sign-off",
  ],
  taxServices: [
    "Tax Preparation",
    "Independent Tax Review",
    "Tax Planning",
    "IRS & State Notice Responses",
    "Tax Advisory",
  ],
  accountingServices: [
    "Bookkeeping & Month-End Close",
    "Client Accounting Services (CAS)",
    "Payroll",
    "Sales Tax Compliance",
  ],
  entityForms: [
    "Individual — Form 1040",
    "Partnership — Form 1065",
    "S-Corp — Form 1120-S",
    "C-Corp — Form 1120",
    "Multi-state returns",
  ],
  // Industry-specific bookkeeping niches to feature
  bookkeepingIndustries: [
    { name: "ABA Therapy Practices", icon: "HeartHandshake" },
    { name: "Dental Offices", icon: "Stethoscope" },
    { name: "Law Firms", icon: "Landmark" },
    { name: "Rental Property Businesses", icon: "Building2" },
  ],
};

/* ---------------------------------------------------------------------------
 *  AUDIT & ASSURANCE SERVICES — one entry per dedicated sub-page
 * ------------------------------------------------------------------------- */
export type AuditService = {
  slug: string;
  title: string;
  short: string; // card teaser
  metaDescription: string;
  intro: string;
  paragraphs: string[];
  scope: string[]; // "What we handle" checklist
  standards?: string[]; // relevant standards / frameworks
};

export const auditServices: AuditService[] = [
  {
    slug: "financial-statement-audits",
    title: "Financial Statement Audits",
    short:
      "Full-scope audit support for private and closely-held entities — planning, fieldwork, workpapers and reporting.",
    metaDescription:
      "Offshore financial statement audit support for U.S. CPA firms — planning, risk assessment, substantive testing, workpaper preparation and reporting under AICPA standards.",
    intro:
      "End-to-end financial statement audit support that plugs directly into your engagement methodology.",
    paragraphs: [
      "Our audit professionals support your financial statement engagements from planning through reporting — performing risk assessment, internal-control walkthroughs, substantive testing and workpaper documentation that ties out cleanly for partner review.",
      "We work within your firm's audit methodology and file structure (CaseWare, CCH, or your preferred platform), so deliverables arrive review-ready and in your house style rather than requiring rework.",
    ],
    scope: [
      "Engagement planning & risk assessment",
      "Internal control walkthroughs & testing",
      "Substantive analytical procedures",
      "Detail & sample testing",
      "Workpaper preparation & tie-outs",
      "Financial statement drafting & disclosure checklists",
    ],
    standards: ["AICPA (GAAS)", "U.S. GAAP"],
  },
  {
    slug: "nonprofit-audits",
    title: "Nonprofit Audits",
    short:
      "Deep not-for-profit experience — net asset classification, functional expense, grants and donor-restriction testing.",
    metaDescription:
      "Offshore nonprofit (NFP) audit support for U.S. CPA firms — net asset classification, functional expense allocation, grant compliance and Yellow Book considerations.",
    intro:
      "Specialised support for not-for-profit engagements, where reporting nuances make experience matter.",
    paragraphs: [
      "Not-for-profit audits carry reporting requirements that general audit staff often miss — net asset classification, functional expense allocation, contribution and grant revenue recognition, and donor-restriction tracking. Our team handles these day in and day out.",
      "We support both financial statement audits of nonprofits and the compliance layers that frequently accompany them, coordinating with your engagement team on Yellow Book and Single Audit considerations where applicable.",
    ],
    scope: [
      "Net asset classification & roll-forwards",
      "Functional expense allocation testing",
      "Contribution & grant revenue recognition",
      "Donor-restriction & endowment testing",
      "Statement of functional expenses",
      "Yellow Book / Single Audit coordination",
    ],
    standards: ["AICPA (GAAS)", "GASB / FASB NFP", "Government Auditing Standards (Yellow Book)"],
  },
  {
    slug: "employee-benefit-plan-audits",
    title: "Employee Benefit Plan Audits",
    short:
      "ERISA plan audits — 401(k), 403(b), pension and health & welfare — including the new SAS 136 requirements.",
    metaDescription:
      "Offshore employee benefit plan (EBP) audit support for U.S. CPA firms — ERISA 401(k), 403(b), pension and health & welfare plan audits under SAS 136.",
    intro:
      "ERISA employee benefit plan audit support, aligned to the current SAS 136 reporting framework.",
    paragraphs: [
      "Employee benefit plan audits are governed by complex ERISA regulations and the SAS 136 reporting model. Our professionals support 401(k), 403(b), defined-benefit pension, and health & welfare plan engagements with the specialised testing these plans demand.",
      "We handle participant and contribution testing, benefit-payment testing, party-in-interest and prohibited-transaction procedures, and the SAS 136-specific documentation — all reviewed within your firm's quality framework.",
    ],
    scope: [
      "Participant data & eligibility testing",
      "Contribution & remittance testing",
      "Benefit payment & distribution testing",
      "Investment & fair-value testing",
      "Party-in-interest / prohibited transactions",
      "ERISA & SAS 136 reporting support",
    ],
    standards: ["AICPA (GAAS)", "ERISA", "SAS 136"],
  },
  {
    slug: "hud-audits",
    title: "HUD Audits",
    short:
      "HUD-assisted and multifamily housing audits under the HUD Consolidated Audit Guide.",
    metaDescription:
      "Offshore HUD audit support for U.S. CPA firms — multifamily housing and HUD-assisted program audits under the HUD Consolidated Audit Guide and Uniform Guidance.",
    intro:
      "Audit support for HUD-assisted programs and multifamily housing entities.",
    paragraphs: [
      "Organizations receiving Department of Housing and Urban Development funding face a distinct compliance and reporting regime. Our team has hands-on experience with the HUD Consolidated Audit Guide, REAC electronic submission, and the compliance requirements unique to HUD engagements.",
      "We prepare the financial and compliance workpapers, perform the required program testing, and assemble the templates your engagement team needs for on-time REAC filing.",
    ],
    scope: [
      "HUD Consolidated Audit Guide compliance",
      "Multifamily housing project testing",
      "REAC / FASS electronic submission templates",
      "Compliance & internal control testing",
      "Mortgagor / owner certification support",
      "Uniform Guidance coordination",
    ],
    standards: ["HUD Consolidated Audit Guide", "Uniform Guidance (2 CFR 200)", "Yellow Book"],
  },
  {
    slug: "single-audits",
    title: "Single Audits",
    short:
      "Uniform Guidance single audits — major program determination, compliance and internal-control testing.",
    metaDescription:
      "Offshore Single Audit support for U.S. CPA firms — Uniform Guidance (2 CFR 200) major program determination, compliance requirements and SEFA reconciliation.",
    intro:
      "Single Audit support under Uniform Guidance for entities expending federal awards.",
    paragraphs: [
      "Entities that expend $750,000 or more in federal awards require a Single Audit under Uniform Guidance. These engagements layer compliance testing on top of the financial statement audit and demand precise documentation.",
      "We support major program determination, Schedule of Expenditures of Federal Awards (SEFA) reconciliation, compliance-requirement testing, and the internal-control-over-compliance procedures that define a defensible Single Audit file.",
    ],
    scope: [
      "SEFA preparation & reconciliation",
      "Major program determination",
      "Compliance requirement testing (12 areas)",
      "Internal control over compliance",
      "Data Collection Form (SF-SAC) support",
      "Findings & questioned-cost documentation",
    ],
    standards: ["Uniform Guidance (2 CFR 200)", "Government Auditing Standards (Yellow Book)"],
  },
  {
    slug: "reviews",
    title: "Reviews",
    short:
      "SSARS review engagements — analytical procedures, inquiry and limited-assurance documentation.",
    metaDescription:
      "Offshore review engagement support for U.S. CPA firms — SSARS-compliant analytical procedures, inquiries and limited-assurance workpapers.",
    intro:
      "Review engagement support providing limited assurance under SSARS.",
    paragraphs: [
      "Review engagements provide limited assurance and rely on analytical procedures and inquiry rather than the extensive testing of an audit. Our team prepares the analytics, documents the inquiries, and assembles the workpapers your firm needs to issue the review report.",
      "We help you deliver reviews efficiently and profitably, freeing your professional staff to focus on client relationships and higher-assurance work.",
    ],
    scope: [
      "Analytical procedures & ratio analysis",
      "Inquiry documentation",
      "Financial statement drafting",
      "Disclosure checklists",
      "Management representation coordination",
      "Review workpaper assembly",
    ],
    standards: ["SSARS 21+ (AR-C 90)"],
  },
  {
    slug: "compilations",
    title: "Compilations",
    short:
      "SSARS compilation engagements — financial statement preparation without assurance.",
    metaDescription:
      "Offshore compilation engagement support for U.S. CPA firms — SSARS-compliant financial statement preparation and presentation.",
    intro:
      "Compilation engagement support — accurate financial statement preparation under SSARS.",
    paragraphs: [
      "Compilation engagements present financial information in the form of financial statements without providing assurance. Our team prepares the statements, applies the appropriate reporting framework, and readies the file for your partner's compilation report.",
      "It's a cost-effective way to serve clients who need presentable statements, and a natural fit for offshore support that frees your staff for advisory work.",
    ],
    scope: [
      "Financial statement preparation",
      "Framework application (GAAP / cash / tax basis)",
      "Note disclosures",
      "Trial balance & adjusting entries",
      "Presentation formatting",
      "Compilation report support",
    ],
    standards: ["SSARS 21+ (AR-C 80)"],
  },
  {
    slug: "audit-preparation",
    title: "Audit Preparation",
    short:
      "Pre-audit prep and workpaper roll-forward so your fieldwork starts on day one, not week three.",
    metaDescription:
      "Offshore audit preparation support for U.S. CPA firms — prior-year roll-forward, PBC schedules, lead sheets and trial balance setup that accelerate fieldwork.",
    intro:
      "Get engagements fieldwork-ready before your team logs in.",
    paragraphs: [
      "A large share of every audit is preparation — rolling forward prior-year files, building lead sheets, setting up the trial balance, and chasing down PBC schedules. Offloading that work to us means your professional staff walk into fieldwork with a clean, organised file.",
      "We prepare the file structure, populate the roll-forwards, and flag open items so your engagement team spends its hours on judgment and review rather than setup.",
    ],
    scope: [
      "Prior-year workpaper roll-forward",
      "Trial balance & lead sheet setup",
      "PBC (Prepared-By-Client) schedule requests",
      "Confirmations preparation & tracking",
      "Reconciliation of client data",
      "Open-items tracking for fieldwork",
    ],
    standards: ["Firm-specific methodology"],
  },
];

/* ---------------------------------------------------------------------------
 *  INDUSTRIES — specialization signal
 * ------------------------------------------------------------------------- */
export type Industry = { slug: string; name: string; blurb: string; icon: string };

export const industries: Industry[] = [
  {
    slug: "nonprofit",
    name: "Nonprofit & NGO",
    blurb:
      "Net asset accounting, functional expense allocation, grant compliance and donor-restriction testing.",
    icon: "HeartHandshake",
  },
  {
    slug: "real-estate",
    name: "Real Estate & HUD Housing",
    blurb:
      "Multifamily, affordable housing, CIRA and HUD-assisted entities — including REAC submission support.",
    icon: "Building2",
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    blurb:
      "Providers, clinics and health & welfare benefit plans with their distinct compliance requirements.",
    icon: "Stethoscope",
  },
  {
    slug: "manufacturing",
    name: "Manufacturing & Distribution",
    blurb:
      "Inventory valuation, cost accounting and revenue recognition for product-based businesses.",
    icon: "Factory",
  },
  {
    slug: "construction",
    name: "Construction & Real Property",
    blurb:
      "Percentage-of-completion, WIP schedules, job costing and surety-driven reporting.",
    icon: "HardHat",
  },
  {
    slug: "financial-institutions",
    name: "Financial Institutions",
    blurb:
      "Banks, credit unions and lenders with regulatory reporting and allowance testing needs.",
    icon: "Landmark",
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    blurb:
      "Firms and partnerships needing reliable reviews, compilations and benefit-plan audits.",
    icon: "Briefcase",
  },
  {
    slug: "employee-benefit-plans",
    name: "Employee Benefit Plans",
    blurb:
      "401(k), 403(b), pension and health & welfare plans under ERISA and SAS 136.",
    icon: "Users",
  },
];

/* ---------------------------------------------------------------------------
 *  SECURITY & COMPLIANCE — grouped controls. Certification claims are gated.
 *  ⚠️  Do NOT claim a formal SOC 2 / ISO 27001 CERTIFICATE unless one exists.
 *      Leave `certified: false` to display "aligned with" language, which is
 *      accurate for a firm that operates the controls without a formal report.
 * ------------------------------------------------------------------------- */
export const compliance = {
  soc: {
    certified: false, // TODO: set true ONLY if you hold a SOC report
    label: "SOC 2",
    aligned:
      "Our control environment is aligned with SOC 2 Trust Services Criteria — security, availability, confidentiality and privacy.",
    certifiedText:
      "SOC 2 Type II examined — report available under NDA.", // used only when certified: true
  },
  iso: {
    certified: false, // TODO: set true ONLY if you hold ISO 27001
    label: "ISO 27001",
    aligned:
      "Our information security management practices are aligned with the ISO/IEC 27001 framework.",
    certifiedText: "ISO/IEC 27001 certified information security management system.",
  },
};

export type SecurityGroup = { title: string; icon: string; items: string[] };

export const securityGroups: SecurityGroup[] = [
  {
    title: "Access & Network",
    icon: "Network",
    items: [
      "VPN-secured connections to all client servers",
      "Multi-factor authentication (MFA) on every system",
      "Role-based, least-privilege access to client data",
      "Multiple segregated LAN networks",
      "Firewall-restricted internet & blocked harmful sites",
    ],
  },
  {
    title: "Data Protection",
    icon: "Lock",
    items: [
      "Encryption in transit and at rest",
      "External plug-in / USB devices disabled",
      "Restriction on printing of client documents",
      "Automatic, redundant backups to prevent data loss",
      "Defined data retention & secure disposal policy",
    ],
  },
  {
    title: "People & Facility",
    icon: "ShieldCheck",
    items: [
      "Background checks on all personnel",
      "Signed confidentiality & NDA agreements",
      "100% on-site operations — strictly no work-from-home",
      "Password-protected, centrally-managed workstations",
      "Licensed software only, with regular security updates",
    ],
  },
  {
    title: "Governance & Monitoring",
    icon: "ClipboardCheck",
    items: [
      "Regular internal system & security audits",
      "Centralised device configuration & control",
      "Incident response & escalation procedures",
      "Documented policies reviewed periodically",
      "Client-specific security addenda on request",
    ],
  },
];

/* ---------------------------------------------------------------------------
 *  MEET THE TEAM — scaffold. Swap placeholder people for real photos/bios.
 *  Photos should go in /public/assets/team/<file>. Using a shared placeholder
 *  until real headshots are supplied.
 * ------------------------------------------------------------------------- */
export type TeamMember = {
  name: string;
  role: string;
  level: "Leadership" | "Manager" | "Senior" | "Staff";
  credentials?: string; // e.g. "CPA, CA"
  experience?: string; // e.g. "12+ yrs"
  photo: string;
  bio?: string;
};

export const team: TeamMember[] = [
  {
    name: "Virti Shah",
    role: "Founder & CPA",
    level: "Leadership",
    credentials: "CPA", // TODO: CONFIRM additional credentials if any
    experience: "12+ yrs", // TODO: CONFIRM
    photo: "/assets/founder/virti-shah.jpeg",
    bio: "Virti Shah is a U.S. Certified Public Accountant and the founder of Virti Shah CPA. She built the firm as a specialised offshore partner to U.S. accounting firms, leading its audit, assurance and tax practice and shaping the multi-level review process that underpins every engagement. She works closely with U.S. CPA firms to extend their capacity through busy season while protecting the quality standards their clients expect.", // TODO: refine with founder's own wording
  },
  {
    name: "Krunal Ratadiya, EA",
    role: "US Tax Manager",
    level: "Manager",
    credentials: "Enrolled Agent (EA)",
    experience: "10 yrs",
    photo: "/assets/team/krunal-ratadiya.jpeg",
    bio: "IRS-licensed Enrolled Agent with 10 years of taxation experience, including more than 5 years dedicated exclusively to U.S. federal and multi-state tax compliance for U.S. CPA firms. He prepares and reviews returns across all major entity types — Forms 1040, 1065, 1120-S and 1120 — and oversees the quality review of all preparer work before partner sign-off, ensuring technical accuracy, compliance and consistency.",
  },
  {
    name: "Jahnvi Prajapati",
    role: "Tax Manager",
    level: "Manager",
    experience: "7+ yrs",
    photo: "/assets/team/jahnvi-prajapati.jpeg",
    bio: "Tax Manager with 7+ years of experience, including 5+ years serving U.S. CPA firms and 2 years in Indian taxation and audit. She prepares and reviews Forms 1040, 1065, 1120-S, 1120 and multi-state returns, and oversees preparer reviews before partner sign-off. Her experience includes nonprofit taxation and the Form 990 series (990, 990-EZ, 990-PF and 990-T), public support testing, functional expense allocation and unrelated business income (UBI) analysis.",
  },
];

export const teamCredentials = [
  "IRS-licensed Enrolled Agents (EA)",
  "U.S. Certified Public Accountants (CPA)",
  "Chartered Accountants (CA)",
];

/* ---------------------------------------------------------------------------
 *  CLIENT SUCCESS STORIES — measurable outcomes, not "great service".
 *  TODO: CONFIRM every metric. Keep anonymised ("a Top 50 CPA firm") unless
 *  you have written permission to name the client.
 * ------------------------------------------------------------------------- */
export type SuccessStory = {
  metric: string;
  headline: string;
  body: string;
  tags: string[];
};

export const successStories: SuccessStory[] = [
  {
    metric: "300+",
    headline: "Nonprofit audits supported through busy season",
    body: "Helped a Top 50 U.S. CPA firm complete over 300 nonprofit audits during a single busy season — absorbing peak workload without the firm adding local headcount.", // TODO: CONFIRM
    tags: ["Nonprofit", "Busy season", "Capacity"],
  },
  {
    metric: "40%",
    headline: "Lower cost per engagement",
    body: "Reduced a regional firm's cost per audit engagement by roughly 40% by moving preparation and testing offshore while partners retained review and sign-off.", // TODO: CONFIRM
    tags: ["Cost", "Efficiency"],
  },
  {
    metric: "2 weeks",
    headline: "Faster fieldwork start",
    body: "Cut a firm's average fieldwork start time by two weeks through pre-engagement roll-forward and PBC preparation handled by our team.", // TODO: CONFIRM
    tags: ["Audit prep", "Turnaround"],
  },
];

/* ---------------------------------------------------------------------------
 *  TECHNOLOGY — audit-relevant platforms + existing software marquee.
 * ------------------------------------------------------------------------- */
export type TechTool = { name: string; category: string; logo?: string };

export const techStack: TechTool[] = [
  // Tax Preparation
  { name: "CCH Axcess Tax", category: "Tax Preparation", logo: "/assets/software/cch-axcess.png" },
  { name: "UltraTax CS", category: "Tax Preparation", logo: "/assets/software/ultratax.png" },
  { name: "ProConnect", category: "Tax Preparation", logo: "/assets/software/proconnect-or-advancedflow.png" },
  { name: "Lacerte", category: "Tax Preparation", logo: "/assets/software/lacerte-new.png" },
  { name: "ProSeries", category: "Tax Preparation" },
  { name: "Drake", category: "Tax Preparation", logo: "/assets/software/drake.png" },
  { name: "TaxAct", category: "Tax Preparation" },
  // Workflow, CRM & Document Management
  { name: "CCH Workflow", category: "Workflow, CRM & Document Management" },
  { name: "Karbon", category: "Workflow, CRM & Document Management" },
  { name: "Canopy", category: "Workflow, CRM & Document Management" },
  { name: "TaxDome", category: "Workflow, CRM & Document Management" },
  { name: "Monday.com", category: "Workflow, CRM & Document Management" },
  // Bookkeeping & Accounting
  { name: "QuickBooks Online", category: "Bookkeeping & Accounting", logo: "/assets/software/quickbooks.png" },
  { name: "QuickBooks Desktop", category: "Bookkeeping & Accounting", logo: "/assets/software/quickbooks.png" },
  { name: "Xero", category: "Bookkeeping & Accounting", logo: "/assets/software/xero.png" },
  { name: "Wave", category: "Bookkeeping & Accounting" },
  { name: "Zoho Books", category: "Bookkeeping & Accounting" },
  { name: "Yardi", category: "Bookkeeping & Accounting" },
  { name: "Rent Manager", category: "Bookkeeping & Accounting" },
  // Payroll & Payments
  { name: "ADP", category: "Payroll & Payments" },
  { name: "Gusto", category: "Payroll & Payments" },
  { name: "Paychex", category: "Payroll & Payments" },
  { name: "Bill.com", category: "Payroll & Payments" },
  { name: "Stripe", category: "Payroll & Payments" },
  { name: "PayPal", category: "Payroll & Payments" },
  // NOTE: Audit & assurance working-paper platforms to be confirmed by the audit team.
];

/* ============================================================================
 *  FILL-IN CHECKLIST — remaining items (audit team / Virti)
 *  ----------------------------------------------------------------------------
 *  CONFIRMED (July 2026): teamComposition, taxBookkeeping, techStack,
 *  team[] (Virti/Krunal/Jahnvi), teamCredentials, capacityStats.
 *
 *  STILL PENDING — provided separately by Virti & the audit team:
 *  [ ] compliance.soc.certified / iso.certified: true ONLY if a formal
 *      report/certificate exists (otherwise leave false = "aligned with")
 *  [ ] successStories[]: verify/replace every metric; permission before naming clients
 *  [ ] audit-specific capacity numbers (headcount, engagements, avg experience)
 *  [ ] audit working-paper software (CaseWare, etc.) to add to techStack
 *  [ ] additional audit-team member bios & photos for team[]
 * ==========================================================================*/
