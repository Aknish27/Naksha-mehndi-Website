import siteConfig from "@/config/siteConfig";

export default function robots() {
  const { siteUrl, publishing } = siteConfig;

  // Until PUBLISHING.allowIndexing is true, tell every crawler to stay out.
  if (!publishing.allowIndexing) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
