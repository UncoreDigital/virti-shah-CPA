# Virti Shah CPA — Website (Next.js)

Revamped marketing site for **Virti Shah CPA (VSCPA)** — outsourced accounting,
tax and audit services for US-based CPA / EA / advisory firms.

Built in **Next.js 14 (App Router)** with the design language adapted from the
Anchor Business Valuations site (Navy + Gold + White, Playfair Display + Inter,
framer-motion). Content was migrated from the legacy `virtishahcpa.com` WordPress
site (see `extracted-content/CONTENT.md`), with all Avantage theme demo filler
removed.

## Tech stack

- Next.js 14 (App Router, static export-friendly)
- TypeScript
- Tailwind CSS (HSL design tokens in `app/globals.css`)
- framer-motion (scroll reveals, nav animations)
- lucide-react (icons)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve production build
```

## Pages

| Route                          | Description                                   |
| ------------------------------ | --------------------------------------------- |
| `/`                            | Home — hero, services, about, why-us, workflow, security, software, CTA |
| `/about`                       | Founder bio, mission, why-us, workflow, security |
| `/services`                    | Services overview                             |
| `/services/bookkeeping`        | Bookkeeping detail                            |
| `/services/tax-preparation`    | Tax preparation detail                        |
| `/services/audit`              | Audit detail (HUD / CIRA / NFP / EBP)         |
| `/contact`                     | Contact form + details + map                  |
| `/privacy-policy`              | Placeholder privacy policy                    |

## Structure

```
app/                 # routes (App Router)
components/           # Header, Footer, PageBanner, ServiceDetail, ContactForm…
  sections/          # Home/page sections (Hero, CoreServices, WhyUs, …)
lib/
  site.ts            # nav, contact info, services, why-us, workflow, security
  services-data.ts   # per-service detail content
  utils.ts           # cn() helper
public/assets/       # logo, founder photo, software logos, service icons
extracted-content/   # source content + downloaded images from the old site
```

## Content / business notes

- All site copy lives in `lib/site.ts` and `lib/services-data.ts` — edit there.
- Contact details: Ahmedabad office, **+1 (646) 236-6829**, **info@virtishahcpa.com**.
- The legacy site's London/Ontario/Tokyo offices, fake team members,
  testimonials, blog posts and `$149/$199/$299` pricing were **Avantage theme
  demo content and were intentionally dropped**. Add real versions when available.
- The contact form currently composes a `mailto:` (no backend). Wire it to a form
  service (e.g. Formspree, Resend, or an API route) before launch.
- `/privacy-policy` is placeholder text — replace with finalised legal copy.

## TODO before launch

- [ ] Replace contact form `mailto` with a real backend/email service
- [ ] Confirm `proconnect-or-advancedflow.png` logo label (ProConnect vs Advanced Flow)
- [ ] Add real team section / testimonials if desired
- [ ] Finalise privacy policy text
- [ ] Add favicon / OG images
```
