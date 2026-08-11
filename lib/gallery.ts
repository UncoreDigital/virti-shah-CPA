/* ---------------------------------------------------------------------------
 *  GALLERY / LIFE AT VSCPA.
 *
 *  Heading structure per the approved reference image
 *  ("ChatGPT Image Aug 11, 2026, 08_48_12 PM.png", docs/change-req-11-08).
 *  Photos are the firm's own, supplied in
 *  drive-download-20260811T185441Z-1-001.zip and downscaled to 1600px /
 *  quality 82 for the web (originals were ~4K, ~30MB in total).
 * ------------------------------------------------------------------------- */

export type GalleryPhoto = {
  src: string;
  /** Orientation drives the masonry span, so tall shots are not letterboxed. */
  orientation: "landscape" | "portrait";
};

export const gallery = {
  eyebrow: "Our Culture",
  h1: "Life at VSCPA",
  subtitle: "A look at our team moments, celebrations and time together.",

  sectionEyebrow: "Team Moments",
  sectionHeading: "Inside Our Culture",

  /* Generic alt text: these are informal team photographs, and we have no
     named identifications for the people in them. */
  altPrefix: "Virti Shah CPA team",

  photos: [
    { src: "/assets/gallery/gallery-01.jpg", orientation: "landscape" },
    { src: "/assets/gallery/gallery-02.jpg", orientation: "landscape" },
    { src: "/assets/gallery/gallery-03.jpg", orientation: "landscape" },
    { src: "/assets/gallery/gallery-04.jpg", orientation: "landscape" },
    { src: "/assets/gallery/gallery-05.jpg", orientation: "landscape" },
    { src: "/assets/gallery/gallery-06.jpg", orientation: "landscape" },
    { src: "/assets/gallery/gallery-07.jpg", orientation: "portrait" },
    { src: "/assets/gallery/gallery-08.jpg", orientation: "landscape" },
    { src: "/assets/gallery/gallery-09.jpg", orientation: "landscape" },
    { src: "/assets/gallery/gallery-10.jpg", orientation: "landscape" },
    { src: "/assets/gallery/gallery-11.jpg", orientation: "landscape" },
    { src: "/assets/gallery/gallery-12.jpg", orientation: "portrait" },
    { src: "/assets/gallery/gallery-13.jpg", orientation: "landscape" },
    { src: "/assets/gallery/gallery-14.jpg", orientation: "landscape" },
    { src: "/assets/gallery/gallery-15.jpg", orientation: "landscape" },
    { src: "/assets/gallery/gallery-16.jpg", orientation: "landscape" },
    { src: "/assets/gallery/gallery-17.jpg", orientation: "landscape" },
    { src: "/assets/gallery/gallery-18.jpg", orientation: "landscape" },
    { src: "/assets/gallery/gallery-19.jpg", orientation: "portrait" },
    { src: "/assets/gallery/gallery-20.jpg", orientation: "landscape" },
  ] as GalleryPhoto[],
};
