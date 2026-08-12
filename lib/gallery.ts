/* ---------------------------------------------------------------------------
 *  GALLERY / LIFE AT VSCPA.
 *
 *  Heading structure per the approved reference image
 *  ("ChatGPT Image Aug 11, 2026, 08_48_12 PM.png", docs/change-req-11-08).
 *  Photos are the firm's own, downscaled to 1600px / quality 82 for the web.
 *
 *  COUNT MATTERS: the grid runs 2 / 3 / 4 columns, so the photo count is kept
 *  divisible by all three (24) to leave no empty blocks on the last row. Per
 *  the 13-08 instruction, photos may be added or removed to keep that true.
 *  If you add photos, go to 30 or 36 rather than stopping at an awkward number.
 * ------------------------------------------------------------------------- */

export const gallery = {
  eyebrow: "Our Culture",
  h1: "Life at VSCPA",
  subtitle: "A look at our team moments, celebrations and time together.",

  sectionEyebrow: "Team Moments",
  sectionHeading: "Inside Our Culture",

  /* Generic alt text: these are informal team photographs and we have no named
     identifications or event labels for them. */
  altPrefix: "Virti Shah CPA team",

  photos: Array.from(
    { length: 24 },
    (_, i) => `/assets/gallery/gallery-${String(i + 1).padStart(2, "0")}.jpg`
  ),
};
