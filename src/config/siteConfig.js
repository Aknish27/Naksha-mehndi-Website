// =============================================================================
// NAKSHA MEHNDI — CENTRAL SITE CONFIGURATION
// =============================================================================
// Everything that changes per client lives in THIS file.
//
// RULE: anything left empty ("" or []) is simply HIDDEN on the website. Nothing
// placeholder is ever shown. When you have the real information, fill it in below
// and the matching section / link appears automatically.
//
//   Still to be filled in:   PRICING · POLICIES · FACEBOOK (optional)
//   Then, on launch day:     PUBLISHING.allowIndexing = true
// =============================================================================

// -----------------------------------------------------------------------------
// BUSINESS DETAILS
// -----------------------------------------------------------------------------
export const CONFIRMED = {
  businessName: "Naksha Mehndi", // exact spelling — used everywhere on the site
  // The same number is used for calls AND WhatsApp. If WhatsApp is on a different
  // number, change only `whatsappDigits`.
  phoneDisplay: "87547 91309",
  phoneDigits: "8754791309",
  whatsappDigits: "8754791309",
  // wa.me links need the country code. 91 = India.
  countryCode: "91",
  email: "Nakshu.Mehndi@gmail.com",
  hours: "10:00 AM – 7:00 PM",
  experienceYears: 10,
};

// Hero stats row. The services count is automatic (counts SERVICES below).
export const HERO_STATS = {
  experienceLabel: "Experience",
  servicesLabel: "Services",
  servicesNote: "Bridal · Arabic · Traditional · Minimal · Custom",
  serviceAreaLabel: "Service",
  serviceAreaValue: "Home & event",
};

// The services offered. Names are confirmed; the short descriptions are editable.
export const SERVICES = [
  { id: "bridal", name: "Bridal Mehendi", featured: true, desc: "Detailed designs for the bride’s hands and feet, created for your wedding day." },
  { id: "engagement", name: "Engagement Mehendi", desc: "Graceful designs to celebrate your engagement." },
  { id: "baby-shower", name: "Baby Shower Mehendi", desc: "Soft, joyful designs for the mother-to-be and her guests." },
  { id: "party", name: "Party Mehendi", desc: "Beautiful designs for parties, festivals and get-togethers." },
  { id: "arabic", name: "Arabic Mehendi", desc: "Bold, flowing vines and florals with open, airy spacing." },
  { id: "traditional", name: "Traditional Mehendi", desc: "Classic Indian motifs — paisleys, mandalas and fine detail." },
  { id: "minimal", name: "Minimal Mehendi", desc: "Fine, understated designs for a delicate, modern look." },
  { id: "custom", name: "Custom Mehendi Designs", desc: "A design created around your idea, outfit or theme." },
  { id: "home", name: "Home Service", desc: "Mehendi in the comfort of your own home." },
  { id: "event", name: "Event Mehendi Services", desc: "Mehendi for weddings, celebrations and group events." },
];

// Tagline, description and search-engine text. Edit freely.
export const COPY = {
  tagline: "Stories told in henna.",
  // Other options: "Every line, a love letter." / "Drawn by hand. Kept in memory."
  description:
    "Naksha Mehndi is a Mehendi studio with 10 years of experience creating bridal, engagement, baby shower, party and custom henna designs — in Arabic, traditional and minimal styles. Home and event services available.",
  seoTitle: "Naksha Mehndi | Bridal & Wedding Mehendi Artist",
  seoDescription:
    "Naksha Mehndi — bridal, engagement, baby shower, party and custom Mehendi designs in Arabic, traditional and minimal styles. 10 years of experience. Home and event service. Enquire on WhatsApp.",
};

// -----------------------------------------------------------------------------
// SOCIAL LINKS (leave a value "" to hide it)
// -----------------------------------------------------------------------------
export const INSTAGRAM = {
  handle: "nakshu_mehandhi",
  url: "https://www.instagram.com/nakshu_mehandhi",
};

export const OTHER_SOCIALS = {
  facebook: "", // e.g. "https://www.facebook.com/yourpage"
};

// -----------------------------------------------------------------------------
// LOCATION. If displayName is emptied, the Location line is hidden.
// -----------------------------------------------------------------------------
// displayName  → what visitors see, e.g. "Anna Nagar, Chennai"  (area / city is enough)
// mapsUrl      → your Google Maps link (optional; shows an "Open in Google Maps" link)
// streetAddress + locality → fill BOTH to switch on Google "LocalBusiness" data
//                (only do this if you want the full address public)
export const LOCATION = {
  displayName: "Find us on Google Maps",
  mapsUrl: "https://maps.app.goo.gl/5SU2fgsPWgJ2ad3fA?g_st=iw",
  streetAddress: "",
  locality: "",
  region: "",
  postalCode: "",
  country: "IN",
};

// -----------------------------------------------------------------------------
// PRICING — TO BE FILLED IN. While `items` is empty, the Pricing section and its
// menu links are hidden.
// -----------------------------------------------------------------------------
// Add one block per line, separated by commas:
//
//   { service: "Bridal Mehendi", price: "₹5,000", featured: true },     // featured = shown larger
//   { service: "Engagement Mehendi", price: "₹3,000" },
//   { service: "Party Mehendi", price: "₹500" },
//   { service: "Custom Mehendi", price: null, label: "Contact for pricing" },   // no number
//
// `price` is shown exactly as written. With price: null, `label` is shown instead.
export const PRICING = {
  prefix: "Starting from",
  note: "Final pricing depends on the design, coverage and location. Message us for a personal quote.",
  items: [],
};

// -----------------------------------------------------------------------------
// CUSTOMER REVIEWS. If this list is emptied, the Reviews section and its
// menu links are hidden. Add ONLY genuine reviews that customers have agreed to share.
// -----------------------------------------------------------------------------
//   {
//     quote: "The customer's own words, exactly as they wrote them.",
//     name: "Customer name",
//     event: "Bridal Mehendi",          // e.g. Bridal, Engagement, Baby Shower, Party
//     photo: "",                        // optional: "/images/review-1.jpg" (file goes in public/images/)
//   },
export const TESTIMONIALS = [
  {
    name: "Nandhu",
    quote: "The mehndi design was beautiful and very neat. I loved the detailing, and the final result looked even better than I expected. Really happy with the work!",
    event: "",
    photo: "/images/testimonial-nandhu.jpg",
  },
  {
    name: "ThoubikaBanu",
    quote: "Loved the overall design and finishing! The patterns were so detailed and elegant. The mehndi turned out really beautiful, and I would definitely recommend this work to others.",
    event: "",
    photo: "/images/testimonial-thoubika.jpg",
  },
  {
    name: "Kavitha",
    quote: "Beautiful mehndi work with excellent detailing. The design looked lovely, and I really liked the overall finish. Great work by Naksha Mehndi!",
    event: "",
    photo: "",
  },
];

// -----------------------------------------------------------------------------
// POLICIES — TO BE FILLED IN. A policy page and its footer link only appear once its
// `content` has text. Paste the client's approved wording between the backticks.
// Blank line = new paragraph. A line starting with "## " becomes a heading.
// -----------------------------------------------------------------------------
export const POLICIES = {
  privacy: { title: "Privacy Policy", path: "/privacy", content: `` },
  terms: { title: "Terms & Conditions", path: "/terms", content: `` },
  cancellation: { title: "Cancellation Policy", path: "/cancellation", content: `` },
  booking: { title: "Booking Policy", path: "/booking-policy", content: `` },
};

// -----------------------------------------------------------------------------
// IMAGES — the client's real work photos
// To swap a photo: replace the file in /public/images/ (same name). If its shape
// changes, update width/height here so the gallery doesn't jump while loading.
// -----------------------------------------------------------------------------
export const IMAGES = {
  hero: { src: "/images/hero.jpg", width: 1024, height: 1280, alt: "Bridal Mehendi on both hands with a large mandala on each palm" },
  about: { src: "/images/about.jpg", width: 959, height: 1280, alt: "Full-arm Mehendi with elephants, lotus bands and a palm mandala" },
  about2: { src: "/images/about-2.jpg", width: 960, height: 1280, alt: "Mehendi with a little Krishna figure on each palm" },
  bridal1: { src: "/images/bridal-1.jpg", width: 960, height: 1280, alt: "Bridal Mehendi with peacocks, lotus and fine lattice work" },
  bridal2: { src: "/images/bridal-2.jpg", width: 960, height: 1280, alt: "Mehendi with a palace, peacock and Ganesha motif" },
  og: { src: "/images/og-image.jpg", width: 1200, height: 630, alt: "Naksha Mehndi — Bridal & Wedding Mehendi Artist" },
};

// Logo. To change it: replace public/logo/nakshu-logo.jpg, then run
// `npm run generate:brand` (rebuilds the other logo files, favicon and link preview).
export const LOGO = {
  original: "/logo/nakshu-logo.jpg", // square logo on a cream background
  clear: "/logo/logo-full.png", // same logo, background removed (made by generate:brand)
  emblem: "/logo/emblem.png", // square crop of the illustration (made by generate:brand)
  size: 900, // pixel size of the square files, used to avoid layout shift
  alt: "Naksha Mehndi logo",
};

// Portfolio filter tabs. A category with no photos is hidden automatically.
export const PORTFOLIO_CATEGORIES = ["Bridal", "Engagement", "Arabic", "Traditional", "Minimal", "Party", "Custom", "Baby Shower"];

export const GALLERY = [
  { src: "/images/gallery-1.jpg", width: 960, height: 1280, category: "Bridal", alt: "Bridal Mehendi with peacocks, lotus and fine lattice work" },
  { src: "/images/gallery-10.jpg", width: 1024, height: 1280, category: "Traditional", alt: "Traditional full-arm Mehendi with mandala palms" },
  { src: "/images/gallery-6.jpg", width: 960, height: 1280, category: "Baby Shower", alt: "Baby shower Mehendi with Mom to Be, Dad to Be and a pram design" },
  { src: "/images/gallery-3.jpg", width: 960, height: 1280, category: "Custom", alt: "Custom Mehendi with a palace, peacock, lotus and Ganesha motifs" },
  { src: "/images/gallery-7.jpg", width: 1024, height: 1279, category: "Bridal", alt: "Bridal Mehendi on hands and feet with a Finally Forever message" },
  { src: "/images/gallery-4.jpg", width: 960, height: 1280, category: "Arabic", alt: "Arabic-style Mehendi with flowing paisley and floral lines" },
  { src: "/images/gallery-2.jpg", width: 959, height: 1280, category: "Traditional", alt: "Traditional Mehendi with elephant bands and a palm mandala" },
  { src: "/images/gallery-8.jpg", width: 960, height: 1280, category: "Bridal", alt: "Bridal Mehendi with peacocks and a personalised message on the palms" },
  { src: "/images/gallery-5.jpg", width: 960, height: 1280, category: "Custom", alt: "Custom Mehendi with a little Krishna on each palm and elephants under an umbrella" },
  { src: "/images/gallery-9.jpg", width: 1024, height: 1280, category: "Bridal", alt: "Bridal Mehendi with peacocks, roses and personalised names on the palms" },
];

// Square crops used in the Instagram strip.
export const INSTAGRAM_IMAGES = [
  { src: "/images/instagram-1.jpg", alt: "Baby shower Mehendi design" },
  { src: "/images/instagram-2.jpg", alt: "Mehendi with Krishna figures on the palms" },
  { src: "/images/instagram-3.jpg", alt: "Custom Mehendi with palace and lotus motifs" },
  { src: "/images/instagram-4.jpg", alt: "Arabic-style Mehendi design" },
  { src: "/images/instagram-5.jpg", alt: "Bridal Mehendi with palm mandalas" },
  { src: "/images/instagram-6.jpg", alt: "Mehendi with peacocks and personalised names" },
];

// -----------------------------------------------------------------------------
// ENQUIRY FORM OPTIONS
// -----------------------------------------------------------------------------
export const ENQUIRY = {
  eventTypes: ["Wedding (Bride)", "Wedding (Guest / Bridesmaid)", "Engagement", "Baby Shower", "Party", "Other event"],
  // Services dropdown is built from SERVICES, plus this extra option:
  extraServiceOption: "Not sure yet",
};

// -----------------------------------------------------------------------------
// PUBLISHING
// -----------------------------------------------------------------------------
// While allowIndexing is false, Google and other search engines are told NOT to list
// the site. Set it to true on launch day, once everything above is filled in.
export const PUBLISHING = {
  allowIndexing: false,
};

// -----------------------------------------------------------------------------
// DERIVED VALUES — you should not need to edit anything below this line
// -----------------------------------------------------------------------------
const whatsappNumber = `${CONFIRMED.countryCode}${CONFIRMED.whatsappDigits}`;

export const siteConfig = {
  name: CONFIRMED.businessName,
  tagline: COPY.tagline,
  description: COPY.description,
  seoTitle: COPY.seoTitle,
  seoDescription: COPY.seoDescription,
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000"),
  contact: {
    phoneDisplay: CONFIRMED.phoneDisplay,
    phoneTel: `+${CONFIRMED.countryCode}${CONFIRMED.phoneDigits}`,
    whatsappNumber,
    email: CONFIRMED.email,
    hours: CONFIRMED.hours,
  },
  experienceYears: CONFIRMED.experienceYears,
  heroStats: HERO_STATS,
  services: SERVICES,
  instagram: INSTAGRAM,
  socials: OTHER_SOCIALS,
  location: LOCATION,
  pricing: PRICING,
  testimonials: TESTIMONIALS,
  policies: POLICIES,
  images: IMAGES,
  logo: LOGO,
  gallery: GALLERY,
  portfolioCategories: PORTFOLIO_CATEGORIES,
  instagramImages: INSTAGRAM_IMAGES,
  enquiry: ENQUIRY,
  publishing: PUBLISHING,
};

export default siteConfig;
