/* ---------------------------------------------------------------------------
 *  GALLERY / LIFE AT VSCPA.
 *
 *  Heading structure per the approved reference image
 *  ("ChatGPT Image Aug 11, 2026, 08_48_12 PM.png").
 *  Photos are the firm's own, downscaled to 1600px / quality 82 for the web.
 *
 *  When adding a batch, de-duplicate by image content rather than filename:
 *  the supplied folders overlap and re-export the same shots under different
 *  names. The photo flagged for removal on 13-08 also appears in the
 *  "additional images" folder, so it must be excluded on any future merge.
 *
 *  The grid is a justified (flex) layout: rows share a fixed height and the
 *  final row's tiles grow to fill the width. That means ANY number of photos
 *  leaves no empty blocks, so photos can be added or removed freely without
 *  having to land on a count divisible by the column count.
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
    { length: 55 },
    (_, i) => `/assets/gallery/gallery-${String(i + 1).padStart(2, "0")}.jpg`
  ),
};
