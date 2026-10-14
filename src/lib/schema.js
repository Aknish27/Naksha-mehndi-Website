import siteConfig from "@/config/siteConfig";

/**
 * LocalBusiness JSON-LD (helps Google show the business).
 *
 * Returns `null` (nothing is output) until BOTH a street address and a town are
 * filled in LOCATION in siteConfig.js. So no location data is published unless you
 * add it on purpose.
 *
 * Opening-hours schema is intentionally left out because only the times (9 AM – 7 PM)
 * are known, not the opening days. Add `openingHoursSpecification` once they are.
 */
export function buildLocalBusinessSchema() {
  const { location, contact, name, siteUrl, seoDescription, instagram, socials, images } = siteConfig;

  if (!location.streetAddress || !location.locality) return null;

  const sameAs = [instagram.url, socials.facebook || null].filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name,
    description: seoDescription,
    url: siteUrl,
    image: `${siteUrl}${images.og.src}`,
    telephone: contact.phoneTel,
    email: contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: location.streetAddress,
      addressLocality: location.locality,
      addressRegion: location.region || undefined,
      postalCode: location.postalCode || undefined,
      addressCountry: location.country,
    },
    ...(location.mapsUrl ? { hasMap: location.mapsUrl } : {}),
    ...(sameAs.length ? { sameAs } : {}),
  };
}
