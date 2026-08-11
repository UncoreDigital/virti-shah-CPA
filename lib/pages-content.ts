/* ---------------------------------------------------------------------------
 *  HOW WE WORK + WHY VSCPA, final clean website copy.
 *
 *  Source: "VSCPA_Final_Clean_How_We_Work_Why_VSCPA.docx".
 *  DEVELOPER INSTRUCTION: this document is the final source for these two
 *  pages. Copy the public wording exactly.
 *
 *  CREDENTIAL WRITING RULE: first reference on a page must expand to
 *  "Certified Public Accountants (CPAs), IRS-licensed Enrolled Agents (EAs)
 *  and Chartered Accountants (CAs)". Later references may use CPAs, EAs and
 *  CAs. Use "led by" language; never imply every professional holds all three.
 * ------------------------------------------------------------------------- */

export type ProcessStep = {
  step: string;
  title: string;
  summary: string;
  yourFirm: string;
  ourProfessionals: string;
};

export const howWeWork = {
  seoTitle: "How We Work | Audit, Tax & Client Accounting Capacity | VSCPA",
  metaDescription:
    "See how our professionals align with your firm's software, methodology and review process, from scope confirmation through onboarding, delivery and scaling.",
  h1: "How We Work With Your Firm",
  subtitle: "A working model built around your firm.",
  proofStrip: [
    "Defined Scopes",
    "Workflow Alignment",
    "Three-Tier Quality Review",
    "Flexible Capacity",
  ],
  opening:
    "Our professionals work within your firm's existing methodology, software and review process. We begin with a clearly defined scope, align the team with your workflow and refine delivery as the working relationship develops.",
  processHeading: "From Capacity Discussion to Ongoing Delivery",
  steps: [
    {
      step: "1",
      title: "Capacity Discussion",
      summary: "Understand the service line, volume, timing and software.",
      yourFirm: "Shares priorities, volume and timing.",
      ourProfessionals:
        "Confirm capabilities and recommend a practical starting approach.",
    },
    {
      step: "2",
      title: "Scope Confirmation",
      summary: "Define tasks, deliverables, review steps and timing.",
      yourFirm: "Approves the scope and expectations.",
      ourProfessionals: "Document the workflow and deliverables.",
    },
    {
      step: "3",
      title: "Team & Workflow Setup",
      summary: "Align the team with approved software, templates and instructions.",
      yourFirm: "Provides approved systems, templates and instructions.",
      ourProfessionals: "Align the team and workflow.",
    },
    {
      step: "4",
      title: "Onboarding",
      summary:
        "Confirm access, communication, file locations and review expectations.",
      yourFirm: "Approves access and workflow requirements.",
      ourProfessionals:
        "Complete onboarding within the approved systems and workflow.",
    },
    {
      step: "5",
      title: "Delivery & Review",
      summary: "Return completed work with supporting schedules and open items.",
      yourFirm: "Reviews deliverables and provides feedback.",
      ourProfessionals: "Complete the assigned work and internal review.",
    },
    {
      step: "6",
      title: "Feedback & Scaling",
      summary: "Refine the workflow and adjust capacity as needs change.",
      yourFirm: "Provides feedback and future capacity needs.",
      ourProfessionals:
        "Refine the workflow and adjust the assigned capacity.",
    },
  ] as ProcessStep[],
  sidebar: {
    heading: "Start With a Defined Scope",
    body: "Tell us where you need capacity, expected volume, timing and software. We will help define a practical starting scope.",
    button: "Schedule a Capacity Assessment",
  },
  relatedHeading: "Explore VSCPA",
  related: [
    { name: "Services", href: "/services" },
    { name: "Why VSCPA", href: "/why-vscpa" },
    { name: "Security & Technology", href: "/security" },
    { name: "Contact", href: "/contact" },
  ],
  closingLine:
    "Start with a clearly defined scope and expand as the workflow proves effective.",
};

export const whyVscpa = {
  seoTitle: "Why CPA Firms Choose VSCPA | Audit, Tax & Client Accounting",
  metaDescription:
    "Learn why CPA firms choose VSCPA for credentialed leadership, three-tier quality review, workflow integration, reviewer-ready delivery and flexible capacity.",
  h1: "Why CPA Firms Choose VSCPA",
  subtitle: "Capacity built around your firm.",
  proofStrip: [
    "CPA, EA & CA Leadership",
    "Three-Tier Quality Review",
    "Integrated Workflows",
    "Reviewer-Ready Delivery",
  ],
  intro:
    "Led by CPAs, EAs and CAs, our teams provide scalable capacity across audit, tax and client accounting while working within each firm's approved software, methodology and review process.",
  benefitsHeading: "Capacity That Fits the Way Your Firm Works",
  benefits: [
    {
      title: "CPA, EA & CA Leadership",
      body: "Our teams are led by Certified Public Accountants (CPAs), IRS-licensed Enrolled Agents (EAs) and Chartered Accountants (CAs), with professionals selected for the service line, engagement type and software involved.",
      icon: "Users",
    },
    {
      title: "Three-Tier Quality Review",
      body: "Every deliverable moves through preparer, senior reviewer and manager review before delivery, producing consistent, well-documented and reviewer-ready work.",
      icon: "ClipboardCheck",
    },
    {
      title: "Workflow Integration",
      body: "We work within your approved software, templates, workpaper formats and instructions, reducing transition time and making review more efficient.",
      icon: "Network",
    },
    {
      title: "Consistent Documentation",
      body: "Supporting schedules, workpapers and open-item notes are organized in the agreed format so reviewers can quickly understand completed work and outstanding items.",
      icon: "FileSpreadsheet",
    },
    {
      title: "Flexible Capacity",
      body: "Begin with a defined scope and expand capacity for recurring volume, seasonal demands and changing priorities.",
      icon: "Briefcase",
    },
    {
      title: "Secure & Controlled Delivery",
      body: "Work is performed through approved systems, defined access controls and confidentiality procedures designed for professional services engagements.",
      icon: "Lock",
    },
  ],
  sidebar: {
    heading: "Discuss Your Capacity Needs",
    body: "Tell us the services, expected volume, timing and software involved. We will help define a practical starting scope.",
    button: "Schedule a Capacity Assessment",
  },
  relatedHeading: "Related Pages",
  related: [
    { name: "How We Work", href: "/how-we-work" },
    { name: "Services", href: "/services" },
    { name: "Security & Technology", href: "/security" },
    { name: "Contact", href: "/contact" },
  ],
  closingLine:
    "Practical capacity that fits the way your firm already works.",
};
