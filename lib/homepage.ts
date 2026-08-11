/* ---------------------------------------------------------------------------
 *  HOMEPAGE, locked developer copy.
 *
 *  Source: "VSCPA_Homepage_Final_Copy_for_Developer_FINAL_LOCKED.docx" (7 sections).
 *  DEVELOPER RULE: this file is the homepage content source. Do not edit the
 *  wording without a later written management instruction that supersedes it.
 *
 *  One deviation from the source document: em dashes have been replaced with
 *  commas, per the separate written instruction to remove all long dashes from
 *  the website. Wording is otherwise verbatim.
 * ------------------------------------------------------------------------- */

/* SECTION 1, Hero & trust strip */
export const hero = {
  eyebrow: "Specialized Delivery for CPA Firms",
  h1: "Scale Your Firm Without Stretching Your Team",
  /** Same locked H1, split so the opening phrase can carry the gradient. */
  h1Lead: "Scale Your Firm",
  h1Tail: "Without Stretching Your Team",
  body: "Credentialed professionals complete defined audit, tax, bookkeeping and financial reporting work within your firm's systems, methodology and review process, helping you scale production while retaining control of client relationships and final decisions.",
  primaryCta: { label: "Schedule a Capacity Assessment", href: "/contact" },
  secondaryCta: { label: "Explore Our Services", href: "/services" },
  trustPoints: [
    "CPA, EA & CA Leadership",
    "Three-Tier Quality Review",
    "Integrated Workflows",
    "Flexible Engagement Models",
  ],
};

/* SECTION 2, What we do / core services */
export const coreServices = {
  eyebrow: "What We Do",
  heading: "Experienced Teams Across Audit, Tax, Bookkeeping & Reporting",
  intro:
    "Add credentialed professionals where your firm needs them most, from engagement workpapers and tax preparation to recurring bookkeeping and financial reporting.",
  cta: { label: "Explore All Services", href: "/services" },
  items: [
    {
      title: "Audit & Assurance",
      body: "Workpapers, testing, reconciliations and reporting support.",
      icon: "ShieldCheck",
      href: "/services/audit",
    },
    {
      title: "Tax Services",
      body: "Preparation and review support for individual, business and specialty returns.",
      icon: "ReceiptText",
      href: "/services/tax-preparation",
    },
    {
      title: "Bookkeeping",
      body: "Close support, reconciliations and recurring accounting workflows.",
      icon: "BookOpenCheck",
      href: "/services/bookkeeping",
    },
    {
      title: "AI Implementation",
      body: "Secure, human-reviewed AI adoption across audit, tax and accounting work.",
      icon: "Sparkles",
      href: "/services/ai-implementation",
    },
  ],
};

/* SECTION 3, Practice impact */
export const practiceImpact = {
  eyebrow: "Built for How CPA Firms Grow",
  heading: "What the Right Delivery Model Should Deliver",
  intro:
    "The right delivery model should help your firm take on more work, protect senior time and create a more predictable review process.",
  items: [
    {
      title: "Take On More Work",
      body: "Absorb more client demand without immediately adding local headcount.",
    },
    {
      title: "Protect Senior Time",
      body: "Free partners and managers to focus on review, decisions and client relationships.",
    },
    {
      title: "Improve Delivery Predictability",
      body: "Use a structured workflow that keeps work moving and open items visible.",
    },
    {
      title: "Strengthen Engagement Leverage",
      body: "Improve team utilization with support matched to scope, timing and complexity.",
    },
  ],
};

/* SECTION 4, Engagement models */
export const engagementModels = {
  eyebrow: "Flexible Ways to Engage",
  heading: "More Capacity When It Matters Most",
  intro:
    "From audit deadlines and tax season to recurring bookkeeping and financial reporting cycles, choose a delivery model that fits your firm's workload, timing and scope.",
  cta: { label: "Explore Engagement Models", href: "/how-we-work" },
  items: [
    "Seasonal & Deadline Support",
    "Project-Based Scope",
    "Recurring Production",
    "Dedicated Team",
  ],
};

/* SECTION 5, How we work */
export const howWeWorkTeaser = {
  eyebrow: "How We Work",
  heading: "A Working Model Built Around Your Firm",
  intro:
    "A structured process designed to fit your methodology, software and review cadence.",
  steps: [
    {
      step: "1",
      title: "Needs Discussion",
      body: "We align on service line, timing, software and expected volume.",
    },
    {
      step: "2",
      title: "Scope & Team",
      body: "We define the work, review points and right-fit team structure.",
    },
    {
      step: "3",
      title: "Workflow Alignment",
      body: "Access, templates and file-handling are set to your process.",
    },
    {
      step: "4",
      title: "Delivery & Review",
      body: "Work is completed, documented and routed through review.",
    },
    {
      step: "5",
      title: "Feedback & Scaling",
      body: "We refine the workflow and adjust team depth as needs change.",
    },
  ],
};

/* SECTION 6, Technology & controls */
export const technologyControls = {
  eyebrow: "Technology & Controls",
  heading: "Built to Work Within Your Firm's Environment",
  intro:
    "Documented processes designed to fit approved software, access controls and confidentiality expectations.",
  items: [
    {
      title: "Approved System Access",
      body: "We operate within your approved systems and access protocols.",
      icon: "Network",
    },
    {
      title: "Defined User Permissions",
      body: "Role-based access aligns system permissions with assigned responsibilities.",
      icon: "Users",
    },
    {
      title: "Confidentiality Procedures",
      body: "Defined confidentiality procedures guide the handling of client information.",
      icon: "Lock",
    },
    {
      title: "Documented Information Handling",
      body: "Documented procedures support consistent information handling and review readiness.",
      icon: "ClipboardCheck",
    },
  ],
  platformsLabel: "Common Platforms",
  /**
   * Management-approved platforms, shown as a scrolling logo rail.
   * The source document's developer note asked for text labels *unless*
   * approved logo assets are available; the logos were approved for use.
   * Any platform without a `logo` asset falls back to a styled wordmark
   * tile, so the rail stays uniform.
   */
  platforms: [
    { name: "CCH Axcess", logo: "/assets/software/cch-axcess.png" },
    { name: "CaseWare" },
    { name: "Caseware Cloud" },
    { name: "QuickBooks", logo: "/assets/software/quickbooks.png" },
    { name: "Xero", logo: "/assets/software/xero.png" },
    { name: "Drake", logo: "/assets/software/drake.png" },
    { name: "ProFx", logo: "/assets/software/profx.png" },
    { name: "Lacerte", logo: "/assets/software/lacerte-new.png" },
    { name: "Slack" },
    { name: "Karbon" },
    { name: "Monday.com" },
    { name: "TaxDome" },
    { name: "Canopy" },
  ] as { name: string; logo?: string }[],
};

/* SECTION 7, Final CTA */
export const finalCta = {
  eyebrow: "Start the Conversation",
  heading: "Where Does Your Firm Need More Delivery Support?",
  body: "Tell us the services, expected volume, timing and software involved. We will help define a practical starting scope.",
};
