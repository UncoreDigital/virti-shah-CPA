/* ---------------------------------------------------------------------------
 *  AI IMPLEMENTATION — page copy.
 *
 *  Source: "VSCPA_AI_Enabled_Delivery (1).html" (docs/change-req-11-08).
 *  Content and section order are taken from that sample; the presentation is
 *  rebuilt in this site's own design system rather than copied, and the
 *  sample's header/footer are deliberately ignored — ours stay as they are.
 *
 *  ⚠️  One sentence from the sample is intentionally OMITTED, per the
 *      instruction in "Additional changes.docx" ("remove below sentence from
 *      that AI page"):
 *        "These practices are designed with reference to recognized security
 *         and information-handling principles. They do not represent
 *         certification or independent audit."
 *      Do not reinstate it without written confirmation.
 * ------------------------------------------------------------------------- */

export const aiImplementation = {
  slug: "ai-implementation",
  seoTitle: "AI Implementation",
  metaDescription:
    "AI-enabled delivery for CPA firms, under human review, firm control and strict data security. We help firms adopt AI across audit, tax and accounting without compromising confidentiality or judgment.",

  hero: {
    eyebrow: "AI Enablement for CPA Firms",
    /* Split so the closing phrase can carry the accent, as in the sample. */
    h1Lead: "Bring AI Into Your Firm's Workflow,",
    h1Highlight: "Securely and Under Control",
    lead: "We help CPA and accounting firms adopt AI across audit, tax and accounting work, faster delivery on the repetitive work, with your data protected, your judgment intact and your firm always in control.",
    strip: [
      { title: "Secure by Design", body: "Within your approved data controls" },
      { title: "Human-Reviewed", body: "No AI output delivered without review" },
      { title: "Firm-Controlled", body: "You decide where AI fits" },
      { title: "On-Site Delivery", body: "Access-restricted environment" },
    ],
  },

  whatWeDo: {
    eyebrow: "What We Do",
    heading: "AI Enablement, End to End",
    intro:
      "From finding where AI helps to putting it safely into practice, we meet your firm where you are.",
    pillars: [
      {
        title: "Assess",
        body: "We find where AI adds value in your workflow, and where it shouldn't be used.",
        icon: "Search",
      },
      {
        title: "Integrate",
        body: "We fit approved tools into your existing process, systems and review structure.",
        icon: "Blocks",
      },
      {
        title: "Train & Deliver",
        body: "We train your team and use approved AI on the work you outsource to us.",
        icon: "GraduationCap",
      },
      {
        title: "Govern",
        body: "We set the guardrails so adoption strengthens your controls, not weakens them.",
        icon: "ShieldCheck",
      },
    ],
  },

  security: {
    eyebrow: "Security First",
    heading: "AI, Without Compromising Confidentiality",
    intro:
      "Data protection isn't an add-on to how we use AI. It's the starting point. Client information stays inside approved, controlled environments at every step.",
    cards: [
      {
        title: "Your Approved Tools",
        body: "AI-assisted work runs only with your firm's agreement and within your approved data-handling requirements, never on public or unauthorized tools.",
        icon: "Lock",
      },
      {
        title: "Controlled Environment",
        body: "Work is performed on our 100% on-site, access-restricted operation, so client data stays within a controlled, permission-based environment.",
        icon: "Building2",
      },
      {
        title: "Documented Handling",
        body: "Our use of AI follows documented internal procedures for access, confidentiality and information handling, consistent with your requirements.",
        icon: "FileText",
      },
    ],
  },

  human: {
    eyebrow: "Human-Led",
    heading: "AI Supports the Work. People Remain Responsible.",
    body: "AI speeds up the repetitive work; it does not perform the engagement. Professional judgment, conclusions and every deliverable remain the responsibility of qualified professionals under credentialed leadership, and your firm retains final review and sign-off. No AI output is delivered without human review.",
    optOutLead: "Your call, either way.",
    optOut:
      "If your firm wants to adopt AI-assisted tools, we help you do it in a structured, secure way. If your firm prefers no AI-assisted tools on its engagements, we deliver entirely through manual professional work.",
  },

  process: {
    eyebrow: "How It Works",
    heading: "A Structured, Low-Risk Path",
    steps: [
      { step: "1", title: "Discovery", body: "Understand your workflows and goals." },
      { step: "2", title: "Opportunity Map", body: "Identify where AI fits, and where it doesn't." },
      { step: "3", title: "Pilot", body: "Prove value on a defined, low-risk scope." },
      { step: "4", title: "Integrate", body: "Embed tools and train your team." },
      { step: "5", title: "Scale", body: "Expand use cases with ongoing support." },
    ],
  },

  cta: {
    heading: "Ready to Explore AI for Your Firm?",
    body: "Tell us where your firm wants more efficiency. We'll map where AI could fit, securely and under your control.",
    button: "Discuss AI Enablement",
  },
};
