/**
 * ============================================================================
 *  VIRTI SHAH CPA, CENTRAL FIRM DATA
 * ============================================================================
 *  This is the SINGLE source of truth for every firm-specific fact used across
 *  the repositioned website (capacity numbers, certifications, team headcount,
 *  measurable outcomes, etc.).
 *
 *  ⚠️  ACTION REQUIRED, anything marked `TODO: CONFIRM` is a SAFE PLACEHOLDER,
 *      not a verified fact. Replace each with the firm's real figure before the
 *      site goes public. Nothing false is stated in the meantime, numbers are
 *      conservative and certification claims use "aligned with" language until
 *      you confirm a formal certificate exists (then flip `certified` to true
 *      and drop the "aligned with" wording).
 *
 *  See the "FILL-IN CHECKLIST" comment at the bottom of this file.
 * ============================================================================
 */

/* ---------------------------------------------------------------------------
 *  POSITIONING, the one-line promise the site now leads with
 * ------------------------------------------------------------------------- */
export const positioning = {
  headline: "Dedicated Offshore Audit & Assurance Professionals for U.S. CPA Firms",
  subhead:
    "We work as a seamless extension of your engagement teams, scaling your assurance practice through busy season without adding partner overhead or sacrificing quality.",
  // Short value proposition used in nav CTAs and meta descriptions
  shortPitch:
    "Extend your audit practice without increasing partner overhead. Dedicated offshore audit teams integrated with your engagement methodology.",
};

/* ---------------------------------------------------------------------------
 *  CAPACITY STORY, the "how big / how deep are you" answer partners look for
 *  TODO: CONFIRM every number below.
 * ------------------------------------------------------------------------- */
export type Stat = { value: string; label: string; sub?: string };

// Firm-wide, confirmed trust signals shown in the homepage hero band.
// (Audit-specific capacity numbers are being supplied separately by the audit team.)
export const capacityStats: Stat[] = [
  { value: "100+", label: "Professionals across audit, tax & bookkeeping" },
  { value: "3", label: "Levels of review before partner sign-off" },
  { value: "CPA, EA & CA Leadership", label: "Clear accountability throughout every engagement" },
  { value: "100%", label: "On-site, secured operations" },
];

// Team-composition / staffing-depth breakdown, CONFIRMED firm-wide headcount.
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
 *  TAX & BOOKKEEPING PRACTICE, CONFIRMED data (provided by the tax team)
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
    "Individual (Form 1040)",
    "Partnership (Form 1065)",
    "S-Corp (Form 1120-S)",
    "C-Corp (Form 1120)",
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
 *  AUDIT & ASSURANCE SERVICES, one entry per dedicated sub-page
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
  /** True when the slug has a hand-built page instead of the [slug] route. */
  ownPage?: boolean;
};

/**
 * Required by the Audit & Assurance developer checklist: this statement must
 * appear on the Audit hub AND every internal audit page. Wording matches the
 * approved CIRA page copy. Do not remove from any audit page.
 */
export const professionalResponsibility = {
  heading: "Professional Responsibility",
  paragraphs: [
    "Our firm performs assigned preparation, testing documentation, financial statement and completion tasks within the client CPA firm's methodology and review process.",
    "The client CPA firm remains responsible for engagement acceptance and continuance, independence, planning decisions, risk assessment, materiality, professional judgments, supervision and review, client communications, evaluation of evidence, conclusions, report issuance and final sign-off.",
  ],
};

export const auditServices: AuditService[] = [
  {
    /* Listed here so it appears in the Audit & Assurance grid and related
       lists. It has its own bespoke page (app/services/audit/cira-hoa-condominium-audits),
       so `ownPage` keeps the dynamic [slug] route from also generating it. */
    slug: "cira-hoa-condominium-audits",
    title: "CIRA, HOA & Condominium Audits",
    short:
      "Specialized audit capacity for condominium associations, homeowners' associations, cooperatives and other common-interest realty associations.",
    metaDescription:
      "Specialized CIRA, HOA and condominium audit capacity for CPA firms, including fund accounting, member assessments, reserves, workpapers and financial statements.",
    intro:
      "Specialized audit capacity for condominium associations, homeowners' associations, cooperatives and other common-interest realty association engagements.",
    paragraphs: [
      "Our professionals work with U.S. CPA firms to prepare assigned workpapers, testing schedules, financial statements and completion tasks for common-interest realty association engagements.",
    ],
    scope: [
      "Operating, Replacement Reserve & Special-Assessment Funds",
      "Member Assessments & Ancillary Revenue",
      "Reserve-Study Reconciliation & Future Major Repairs",
      "Interfund Balances, Transfers & Restricted Cash",
      "Operating Expenses, Liabilities & Major Repair Projects",
      "Fund-Based Financial Statements & Supplementary Information",
    ],
    standards: [
      "FASB ASC 972",
      "AICPA Audit and Accounting Guide - Common Interest Realty Associations",
      "Applicable State Requirements",
    ],
    ownPage: true,
  },
  {
    slug: "nonprofit-audits",
    title: "Nonprofit Audits",
    short:
      "Deep not-for-profit experience: net asset classification, functional expense, grants and donor-restriction testing.",
    metaDescription:
      "Offshore nonprofit (NFP) audit support for U.S. CPA firms: net asset classification, functional expense allocation, grant compliance and Yellow Book considerations.",
    intro:
      "Specialized support for not-for-profit engagements, where reporting nuances make experience matter.",
    paragraphs: [
      "Not-for-profit engagements require focused attention to net asset classification, functional expense allocation, contribution and grant revenue recognition, and donor-restriction tracking. Our professionals have relevant experience with these areas.",
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
    standards: ["AICPA (GAAS)", "FASB not-for-profit reporting, and GASB when applicable to a governmental entity", "Government Auditing Standards (Yellow Book)"],
  },
  {
    slug: "employee-benefit-plan-audits",
    title: "Employee Benefit Plan Audits",
    short:
      "ERISA plan audit support for 401(k), 403(b), pension, and health and welfare plans, including applicable SAS No. 136 requirements.",
    metaDescription:
      "Offshore employee benefit plan (EBP) audit support for U.S. CPA firms: ERISA 401(k), 403(b), pension and health & welfare plan audits under SAS 136.",
    intro:
      "ERISA employee benefit plan audit support, aligned to the current SAS 136 reporting framework.",
    paragraphs: [
      "Employee benefit plan audits are governed by complex ERISA regulations and the SAS 136 reporting model. Our professionals support 401(k), 403(b), defined-benefit pension, and health & welfare plan engagements with the specialized testing these plans demand.",
      "We handle participant and contribution testing, benefit-payment testing, party-in-interest and prohibited-transaction procedures, and the SAS 136-specific documentation, all reviewed within your firm's quality framework.",
    ],
    scope: [
      "Participant data & eligibility testing",
      "Contribution & remittance testing",
      "Benefit payment & distribution testing",
      "Investment & fair-value testing",
      "Party-in-interest / prohibited transactions",
      "ERISA & SAS 136 reporting support",
    ],
    standards: ["AICPA (GAAS)", "ERISA", "SAS No. 136"],
  },
  {
    slug: "hud-audits",
    title: "HUD Audits",
    short:
      "HUD-assisted and multifamily housing audits under the HUD Consolidated Audit Guide.",
    metaDescription:
      "Offshore HUD audit support for U.S. CPA firms: multifamily housing and HUD-assisted program audits under the HUD Consolidated Audit Guide and Uniform Guidance.",
    intro:
      "Audit support for HUD-assisted programs and multifamily housing entities.",
    paragraphs: [
      "Organizations receiving Department of Housing and Urban Development funding face a distinct compliance and reporting regime. Our team has hands-on experience with the HUD Consolidated Audit Guide, FASS-MF submission, and the compliance requirements unique to HUD engagements.",
      "We prepare the financial and compliance workpapers, perform the required program testing, and assemble the templates your engagement team needs for on-time REAC filing.",
    ],
    scope: [
      "HUD Consolidated Audit Guide compliance",
      "Multifamily housing project testing",
      "FASS-MF submission templates",
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
      "Uniform Guidance single audits: major program determination, compliance and internal-control testing.",
    metaDescription:
      "Offshore Single Audit support for U.S. CPA firms: Uniform Guidance (2 CFR 200) major program determination, compliance requirements and SEFA reconciliation.",
    intro:
      "Single Audit support under Uniform Guidance for entities expending federal awards.",
    paragraphs: [
      "Entities receiving federal awards may be subject to Single Audit requirements under the Uniform Guidance. The client CPA firm determines whether a Single Audit is required and retains responsibility for engagement acceptance, professional judgment, final review and report issuance. Our professionals complete clearly assigned procedures within the firm's methodology and review process.",
      "We support major program determination, Schedule of Expenditures of Federal Awards (SEFA) reconciliation, compliance-requirement testing, and the internal-control-over-compliance procedures that define a defensible Single Audit file.",
    ],
    scope: [
      "SEFA preparation & reconciliation",
      "Major program determination",
      "Testing of applicable compliance requirements",
      "Internal control over compliance",
      "Data Collection Form (SF-SAC) support",
      "Findings & questioned-cost documentation",
    ],
    standards: ["Uniform Guidance (2 CFR 200)", "Government Auditing Standards (Yellow Book)"],
  },
  {
    slug: "financial-statement-audits",
    title: "Financial Statement Audits",
    short:
      "Full-scope audit support for private and closely-held entities: planning, fieldwork, workpapers and reporting.",
    metaDescription:
      "Offshore financial statement audit support for U.S. CPA firms: planning, risk assessment, substantive testing, workpaper preparation and reporting under AICPA standards.",
    intro:
      "End-to-end financial statement audit support that plugs directly into your engagement methodology.",
    paragraphs: [
      "Our audit professionals support your financial statement engagements from planning through reporting, performing risk assessment, internal-control walkthroughs, substantive testing and workpaper documentation that ties out cleanly for partner review.",
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
    slug: "audit-preparation",
    title: "Audit Preparation",
    short:
      "Pre-audit preparation and workpaper roll-forward to help your engagement team begin fieldwork with an organized file.",
    metaDescription:
      "Offshore audit preparation support for U.S. CPA firms: prior-year roll-forward, PBC schedules, lead sheets and trial balance setup that accelerate fieldwork.",
    intro:
      "Get engagements fieldwork-ready before your team logs in.",
    paragraphs: [
      "A large share of every audit is preparation: rolling forward prior-year files, building lead sheets, setting up the trial balance, and coordinating client-prepared schedules and supporting documentation. Assigning this work to our professionals helps your engagement team begin fieldwork with an organized file.",
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
  {
    slug: "reviews",
    title: "Reviews",
    short:
      "SSARS review engagements: analytical procedures, inquiry and limited-assurance documentation.",
    metaDescription:
      "Offshore review engagement support for U.S. CPA firms: SSARS-compliant analytical procedures, inquiries and limited-assurance workpapers.",
    intro:
      "Review engagement support providing limited assurance under SSARS.",
    paragraphs: [
      "Review engagements provide limited assurance and rely on analytical procedures and inquiry rather than the extensive testing of an audit. Our professionals prepare analytical schedules, support inquiry documentation, and assemble workpapers for your firm's review and report issuance.",
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
    standards: ["AR-C Section 90, Review of Financial Statements"],
  },
  {
    slug: "compilations",
    title: "Compilations",
    short:
      "SSARS compilation engagements: financial statement preparation without assurance.",
    metaDescription:
      "Offshore compilation engagement support for U.S. CPA firms: SSARS-compliant financial statement preparation and presentation.",
    intro:
      "Compilation engagement support: accurate financial statement preparation under SSARS.",
    paragraphs: [
      "Compilation engagements present financial information in the form of financial statements without providing assurance. Our professionals assist with financial statement preparation, application of the selected reporting framework, and file organization for your firm's final review and compilation report.",
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
    standards: ["AR-C Section 80, Compilation Engagements"],
  },
];

/* ---------------------------------------------------------------------------
 *  INDUSTRIES, specialization signal
 * ------------------------------------------------------------------------- */
export type Industry = { slug: string; name: string; blurb: string; icon: string };

export const industriesPage = {
  subtitle:
    "Relevant industry experience across the audit, tax, bookkeeping and financial reporting work your firm assigns.",
  intro:
    "Every industry has distinct accounting cycles, tax considerations and reporting requirements. VSCPA brings relevant industry understanding to each assignment, helping your firm extend capacity across a diverse client portfolio with confidence.",
  cta: {
    eyebrow: "Industry-Specific Needs",
    heading: "Does Your Firm Need Industry-Specific Capacity?",
    body: "Tell us the industry, service line, expected volume and timing. We will define a practical starting scope for your firm.",
  },
};

export const industries: Industry[] = [
  {
    slug: "nonprofit",
    name: "Nonprofit & Tax-Exempt Organizations",
    blurb:
      "Fund accounting, grants, functional expense reporting, tax preparation, financial statements and audit preparation for nonprofit and tax-exempt organizations.",
    icon: "HeartHandshake",
  },
  {
    slug: "real-estate",
    name: "Real Estate & Property Management",
    blurb:
      "Property-level accounting, reconciliations, reporting, tax preparation and audit preparation for multifamily, affordable and HUD-assisted housing.",
    icon: "Building2",
  },
  {
    slug: "cira-hoa",
    name: "CIRA, HOA & Condominium Associations",
    blurb:
      "Assessment income, member receivables, reserves, reporting, tax preparation and audit preparation for community associations.",
    icon: "Home",
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    blurb:
      "Revenue and receivables, payroll-related accounting, expense classification, financial reporting and tax preparation for healthcare organizations.",
    icon: "Stethoscope",
  },
  {
    slug: "manufacturing",
    name: "Manufacturing & Distribution",
    blurb:
      "Inventory, purchasing, cost accounting, revenue recognition, month-end close and financial reporting for product-based businesses.",
    icon: "Factory",
  },
  {
    slug: "construction",
    name: "Construction & Contractors",
    blurb:
      "Job costing, work-in-progress schedules, contract balances, tax preparation and financial reporting for contractors and construction businesses.",
    icon: "HardHat",
  },
  {
    slug: "financial-services",
    name: "Financial Services & Lending",
    blurb:
      "Reconciliations, loan and investment schedules, interest activity, financial reporting, tax preparation and audit preparation for financial institutions and lenders.",
    icon: "Landmark",
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    blurb:
      "Bookkeeping, billing, receivables, payroll, partner or member activity, tax preparation and financial reporting for professional-service firms.",
    icon: "Briefcase",
  },
];

/* ---------------------------------------------------------------------------
 *  SECURITY & COMPLIANCE
 *  ⚠️  This copy is deliberately framework-INFORMED, not framework-CERTIFIED.
 *      Wording is "designed with reference to", never "aligned with",
 *      "compliant" or "certified", and `frameworkDisclaimer` must stay on the
 *      page alongside the framework cards. Do not reintroduce Certified /
 *      Aligned badges unless a real report exists to back the claim.
 * ------------------------------------------------------------------------- */
export const compliance = {
  eyebrow: "Framework-Informed Security Practices",
  frameworks: [
    {
      label: "SOC 2 Trust Services Criteria",
      text: "Selected practices are designed with reference to relevant principles involving security, availability, confidentiality and privacy.",
    },
    {
      label: "ISO/IEC 27001",
      text: "Policies and procedures are developed with reference to risk management, access control, information handling and incident management principles.",
    },
  ],
  frameworkDisclaimer:
    "Framework references describe VSCPA's internal control design approach and do not represent certification, independent attestation, audit or endorsement.",
};

export type SecurityGroup = { title: string; icon: string; description: string };

export const securityModel = {
  eyebrow: "How We Protect Client Information",
  heading: "A Practical Security Model for Client Work",
};

export const securityGroups: SecurityGroup[] = [
  {
    title: "Controlled Access",
    icon: "Users",
    description:
      "Access is limited to personnel assigned to the agreed work and responsibilities.",
  },
  {
    title: "Managed Workstations",
    icon: "Monitor",
    description:
      "Client work uses company-managed devices, approved software and centrally administered settings.",
  },
  {
    title: "On-Site Operations",
    icon: "Building2",
    description:
      "Assigned work is performed from VSCPA office locations under defined workplace and device procedures.",
  },
  {
    title: "Confidentiality Procedures",
    icon: "Lock",
    description:
      "Assigned personnel follow documented confidentiality and information-handling requirements.",
  },
];

/* ---------------------------------------------------------------------------
 *  MEET THE TEAM, scaffold. Swap placeholder people for real photos/bios.
 *  Photos should go in /public/assets/team/<file>. Using a shared placeholder
 *  until real headshots are supplied.
 * ------------------------------------------------------------------------- */
export type TeamMember = {
  name: string;
  role: string;
  level: "Leadership" | "Manager" | "Consultant" | "Senior" | "Staff";
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
    bio: "Virti Shah is a U.S. Certified Public Accountant and the founder of Virti Shah CPA. She built the firm as a specialized offshore partner to U.S. accounting firms, leading its audit, assurance and tax practice and shaping the multi-level review process that underpins every engagement. She works closely with U.S. CPA firms to extend their capacity through busy season while protecting the quality standards their clients expect.", // TODO: refine with founder's own wording
  },
  {
    name: "Krunal Ratadiya, EA",
    role: "US Tax Manager",
    level: "Manager",
    credentials: "Enrolled Agent (EA)",
    experience: "10 yrs",
    photo: "/assets/team/krunal-ratadiya.jpeg",
    bio: "IRS-licensed Enrolled Agent with 10 years of taxation experience, including more than 5 years dedicated exclusively to U.S. federal and multi-state tax compliance for U.S. CPA firms. He prepares and reviews returns across all major entity types (Forms 1040, 1065, 1120-S and 1120), and oversees the quality review of all preparer work before partner sign-off, ensuring technical accuracy, compliance and consistency.",
  },
  {
    name: "Uttar Hingu",
    role: "Audit Manager",
    level: "Manager",
    experience: "8+ yrs",
    photo: "/assets/team/uttar-hingu.jpeg",
    bio: "Uttar Hingu is an Audit Manager with 8+ years of professional experience, including 4.5+ years specializing in U.S. audit and assurance services. He serves clients across the Affordable Housing (HUD), Nonprofit (NPO), Employee Benefit Plans (EBP), and Community Associations (CIRA) sectors. His expertise spans audit planning, financial reporting, and regulatory compliance in accordance with U.S. professional standards. Dedicated to innovation and continuous learning, Uttar is passionate about leveraging Artificial Intelligence (AI) to enhance audit quality, streamline workflows, and improve efficiency while delivering exceptional client service.",
  },
  {
    name: "Akshat Shah",
    role: "US Audit & Assurance Consultant",
    level: "Consultant",
    credentials: "Chartered Accountant (CA)",
    experience: "8+ yrs",
    photo: "/assets/team/akshat-shah.jpeg",
    bio: "Akshat Shah is a Chartered Accountant with 8+ years of professional experience, including 4+ years specializing in U.S. audit and assurance services. He provides professional consulting services to Virti Shah CPA in the area of U.S. audit and assurance, supporting Audit, Review, and Compilation engagements for both standalone and consolidated financial statements in accordance with U.S. GAAP and AICPA professional standards. His experience includes serving clients across Community Associations (CIRA), Affordable Housing (HUD), Nonprofit Organizations (NPO), Real Estate & Construction, Healthcare, Finance, and closely held private companies. He has been involved in engagement planning, risk assessment, audit execution, financial reporting, quality review, and coordinating with engagement teams across a wide range of assurance engagements. Akshat enjoys working on technically challenging engagements and is committed to delivering practical, timely, and high-quality assurance services while maintaining compliance with applicable professional standards.",
  },
];

export const teamCredentials = [
  "IRS-licensed Enrolled Agents (EA)",
  "U.S. Certified Public Accountants (CPA)",
  "Chartered Accountants (CA)",
];

/* ---------------------------------------------------------------------------
 *  CLIENT SUCCESS STORIES, measurable outcomes, not "great service".
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
    body: "Helped a Top 50 U.S. CPA firm complete over 300 nonprofit audits during a single busy season, absorbing peak workload without the firm adding local headcount.", // TODO: CONFIRM
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
 *  TECHNOLOGY, audit-relevant platforms + existing software marquee.
 * ------------------------------------------------------------------------- */
export type TechTool = { name: string; category: string; logo?: string };

export const techStack: TechTool[] = [
  // Tax Preparation
  { name: "CCH Axcess Tax", category: "Tax Preparation", logo: "/assets/software-logos/1-tax-preparation/cch-access-tax.png" },
  { name: "CCH ProSystem fx Tax", category: "Tax Preparation", logo: "/assets/software-logos/1-tax-preparation/cch-prosystem-fx-tax.png" },
  { name: "UltraTax CS", category: "Tax Preparation", logo: "/assets/software-logos/1-tax-preparation/ultra-tax-cs.png" },
  { name: "Lacerte Tax", category: "Tax Preparation", logo: "/assets/software-logos/1-tax-preparation/lacerte-tax.png" },
  { name: "ProConnect", category: "Tax Preparation", logo: "/assets/software-logos/1-tax-preparation/proconnect-lacerte.png" },
  { name: "ProSeries Tax", category: "Tax Preparation", logo: "/assets/software-logos/1-tax-preparation/proseries-tax.png" },
  { name: "Drake Tax", category: "Tax Preparation", logo: "/assets/software-logos/1-tax-preparation/drake-tax.png" },
  { name: "TaxAct", category: "Tax Preparation", logo: "/assets/software-logos/1-tax-preparation/taxact.png" },
  // Workflow, CRM & Document Management
  { name: "CCH Workflow", category: "Workflow, CRM & Document Management", logo: "/assets/software-logos/2-workflow-crm-document-management/cch-workflow.png" },
  { name: "GoFileRoom", category: "Workflow, CRM & Document Management", logo: "/assets/software-logos/2-workflow-crm-document-management/gofileroom.png" },
  { name: "Karbon", category: "Workflow, CRM & Document Management", logo: "/assets/software-logos/2-workflow-crm-document-management/karbon.png" },
  { name: "Canopy", category: "Workflow, CRM & Document Management", logo: "/assets/software-logos/2-workflow-crm-document-management/canopy.png" },
  { name: "TaxDome", category: "Workflow, CRM & Document Management", logo: "/assets/software-logos/2-workflow-crm-document-management/taxdone.png" },
  { name: "Monday.com", category: "Workflow, CRM & Document Management", logo: "/assets/software-logos/2-workflow-crm-document-management/monday-com.png" },
  { name: "Slack", category: "Workflow, CRM & Document Management", logo: "/assets/software-logos/2-workflow-crm-document-management/slack.png" },
  { name: "Microsoft SharePoint", category: "Workflow, CRM & Document Management", logo: "/assets/software-logos/2-workflow-crm-document-management/microsoft-sharepoint.png" },
  // Bookkeeping & Accounting
  { name: "QuickBooks Online", category: "Bookkeeping & Accounting", logo: "/assets/software-logos/3-bookkeeping-accounting/qb-online.png" },
  { name: "QuickBooks Desktop", category: "Bookkeeping & Accounting", logo: "/assets/software-logos/3-bookkeeping-accounting/qb-desktop.png" },
  { name: "Xero", category: "Bookkeeping & Accounting", logo: "/assets/software-logos/3-bookkeeping-accounting/xero.png" },
  { name: "Sage", category: "Bookkeeping & Accounting", logo: "/assets/software-logos/3-bookkeeping-accounting/sage.png" },
  { name: "NetSuite", category: "Bookkeeping & Accounting", logo: "/assets/software-logos/3-bookkeeping-accounting/netsuite.png" },
  { name: "Zoho Books", category: "Bookkeeping & Accounting", logo: "/assets/software-logos/3-bookkeeping-accounting/zoho-books.png" },
  { name: "Wave", category: "Bookkeeping & Accounting", logo: "/assets/software-logos/3-bookkeeping-accounting/wave.png" },
  { name: "Dext", category: "Bookkeeping & Accounting", logo: "/assets/software-logos/3-bookkeeping-accounting/dext.png" },
  { name: "Yardi", category: "Bookkeeping & Accounting", logo: "/assets/software-logos/3-bookkeeping-accounting/yardi.png" },
  { name: "Rent Manager", category: "Bookkeeping & Accounting", logo: "/assets/software-logos/3-bookkeeping-accounting/rent-manger.png" },
  { name: "AppFolio", category: "Bookkeeping & Accounting", logo: "/assets/software-logos/3-bookkeeping-accounting/appfolio.png" },
  { name: "Buildium", category: "Bookkeeping & Accounting", logo: "/assets/software-logos/3-bookkeeping-accounting/buildium.png" },
  // Payroll & Payments
  { name: "ADP", category: "Payroll & Payments", logo: "/assets/software-logos/4-payroll-payments/adp.png" },
  { name: "Gusto", category: "Payroll & Payments", logo: "/assets/software-logos/4-payroll-payments/gusto.png" },
  { name: "Paychex", category: "Payroll & Payments", logo: "/assets/software-logos/4-payroll-payments/paychex.png" },
  { name: "Rippling", category: "Payroll & Payments", logo: "/assets/software-logos/4-payroll-payments/rippling.png" },
  { name: "QuickBooks Payroll", category: "Payroll & Payments", logo: "/assets/software-logos/4-payroll-payments/qb-payroll.png" },
  { name: "Bill.com", category: "Payroll & Payments", logo: "/assets/software-logos/4-payroll-payments/bill-com.png" },
  { name: "Ramp", category: "Payroll & Payments", logo: "/assets/software-logos/4-payroll-payments/ramp.png" },
  { name: "Expensify", category: "Payroll & Payments", logo: "/assets/software-logos/4-payroll-payments/expensify.png" },
  { name: "Stripe", category: "Payroll & Payments", logo: "/assets/software-logos/4-payroll-payments/stripe.png" },
  { name: "PayPal", category: "Payroll & Payments", logo: "/assets/software-logos/4-payroll-payments/paypal.png" },
  // Audit & Assurance
  { name: "CaseWare", category: "Audit & Assurance", logo: "/assets/software-logos/5-audit-assurance/caseware.png" },
  { name: "CaseWare Cloud", category: "Audit & Assurance", logo: "/assets/software-logos/5-audit-assurance/caseware-cloud.png" },
  { name: "CCH ProSystem fx Engagement", category: "Audit & Assurance", logo: "/assets/software-logos/5-audit-assurance/cch-prosystem-fx-engagement.png" },
  { name: "Engagement Manager (AdvanceFlow)", category: "Audit & Assurance", logo: "/assets/software-logos/5-audit-assurance/engagement-manager-advance-flow.png" },
  { name: "AuditFile", category: "Audit & Assurance", logo: "/assets/software-logos/5-audit-assurance/auditfile.png" },
  { name: "Suralink", category: "Audit & Assurance", logo: "/assets/software-logos/5-audit-assurance/suralink.png" },
];

/* ============================================================================
 *  FILL-IN CHECKLIST, remaining items (audit team / Virti)
 *  ----------------------------------------------------------------------------
 *  CONFIRMED (July 2026): teamComposition, taxBookkeeping, techStack,
 *  team[] (Virti/Krunal/Uttar/Akshat), teamCredentials, capacityStats.
 *
 *  STILL PENDING, provided separately by Virti & the audit team:
 *  [ ] compliance.soc.certified / iso.certified: true ONLY if a formal
 *      report/certificate exists (otherwise leave false = "aligned with")
 *  [ ] successStories[]: verify/replace every metric; permission before naming clients
 *  [ ] audit-specific capacity numbers (headcount, engagements, avg experience)
 *  [ ] additional audit-team member bios & photos for team[]
 * ==========================================================================*/
