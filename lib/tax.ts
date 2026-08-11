/* ---------------------------------------------------------------------------
 *  TAX SERVICES PAGE — copy taken from the approved mockup.
 *
 *  Source: "Tax_.png" (docs/change-req-11-08), per the instruction
 *  "For Tax page do as per Gdrive tax image".
 *
 *  NOT carried over from that mockup, deliberately:
 *    - its "DRAFT PREVIEW / HIDDEN / NOINDEX UNTIL TAX-LEADER APPROVAL" ribbon
 *      (a working annotation, not site chrome). The page is therefore still
 *      indexed like every other service page — see the open question raised
 *      with this change before assuming that is final.
 *    - its header and footer, which show the older navigation. Ours are
 *      unchanged on instruction.
 *
 *  The mockup image is cut off below "Scope confirmation", so anything beneath
 *  that point in the original design is not represented here.
 * ------------------------------------------------------------------------- */

export const tax = {
  slug: "tax-preparation",
  seoTitle: "Outsourced Tax Preparation Services for CPA Firms",
  metaDescription:
    "Flexible tax preparation and quality-review capacity for CPA and accounting firms, delivered within your firm's software, workpapers and review process.",

  hero: {
    h1: "Outsourced Tax Preparation Services for CPA Firms",
    subtitle:
      "Flexible tax preparation and quality-review capacity within your firm's software, workpapers and review process.",
  },

  intro:
    "Our professionals provide flexible tax preparation and quality-review capacity for CPA and accounting firms. They prepare assigned individual, business, trust and estate, tax-exempt organization and approved international individual returns within the client firm's software, workpapers and review process.",

  workflow: {
    heading: "Built for CPA-Firm Tax Workflows",
    pills: ["Client-Firm Software", "Assigned Workpapers", "Preparation & Quality Review"],
  },

  prepares: {
    heading: "Tax Work VSCPA Can Prepare",
    items: [
      {
        title: "Individual Tax Returns",
        body: "Form 1040 and approved federal and state filings",
        icon: "User",
      },
      {
        title: "Business Tax Returns",
        body: "Forms 1065, 1120-S and 1120 plus approved state returns",
        icon: "Briefcase",
      },
      {
        title: "Trust & Estate Tax Returns",
        body: "Form 1041 and approved related state filings",
        icon: "Landmark",
      },
      {
        title: "Form 990 & Tax-Exempt Returns",
        body: "Approved Form 990-series returns, schedules and extensions",
        icon: "Users",
      },
      {
        title: "U.S. Expat & International Individual Tax",
        body: "Foreign income, foreign taxes, foreign accounts and approved information reporting",
        icon: "Globe",
      },
      {
        title: "Additional Tax Return Quality Review",
        body: "A separate preparation-quality checkpoint before the client firm's final review",
        icon: "ClipboardCheck",
      },
    ],
  },

  how: {
    heading: "How Tax Preparation Works",
    points: [
      {
        label: "Preparation delivery:",
        /* Mockup reads "thee agreed returns"; corrected to "the agreed returns". */
        body: "Our professionals complete the agreed returns and workpapers within the client firm's software, follow approved templates and instructions, track diagnostics and open items, and return the work for client-firm review.",
      },
      {
        label: "Scope confirmation:",
        body: "Scope is confirmed by return type, jurisdiction, filing requirements, source records, timing, software and reviewer capacity.",
      },
    ],
  },

  sidebar: {
    heading: "Discuss Your Tax Capacity",
    body: "Tell us the return types, expected volume, timing, software and the work your firm wants to retain. We will help define a practical starting scope.",
    button: "Discuss Tax Capacity",
  },

  /* Sidebar index. These are capability labels, not separate pages, so they
     render as a plain list rather than links. */
  servicesListHeading: "Tax Services",
  servicesList: [
    "Tax Return Preparation",
    "Individual Tax Returns",
    "Business Tax Returns",
    "Trust & Estate Tax Returns",
    "Form 990 & Tax-Exempt Returns",
    "U.S. Expat & International Individual Tax",
    "Tax Return Quality Review",
  ],

  /** Bullets for the Tax card on /services. */
  cardBullets: [
    "Individual Tax Returns",
    "Business Tax Returns",
    "Trust & Estate Tax Returns",
    "Form 990 & Tax-Exempt Returns",
  ],
};
