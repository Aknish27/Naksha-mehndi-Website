import siteConfig from "@/config/siteConfig";
import { activePolicies } from "@/lib/nav";

export default function sitemap() {
  const { siteUrl } = siteConfig;
  const now = new Date();

  const pages = [{ url: siteUrl, lastModified: now, changeFrequency: "monthly", priority: 1 }];

  // Policy pages are listed only once they have real text
  for (const p of activePolicies()) {
    pages.push({ url: `${siteUrl}${p.path}`, lastModified: now, changeFrequency: "yearly", priority: 0.3 });
  }
  return pages;
}
