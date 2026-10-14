import siteConfig from "@/config/siteConfig";

// Menu links used by the navbar and footer. Pricing and Reviews only appear once
// real content has been added in siteConfig.js.
const { pricing, testimonials } = siteConfig;

export const NAV_LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#portfolio", label: "Portfolio" },
  ...(pricing.items.length > 0 ? [{ href: "/#pricing", label: "Pricing" }] : []),
  ...(testimonials.length > 0 ? [{ href: "/#reviews", label: "Reviews" }] : []),
  { href: "/#contact", label: "Contact" },
];

/** Policies that have real text, as [{ title, path }]. */
export function activePolicies() {
  return Object.values(siteConfig.policies)
    .filter((p) => p.content && p.content.trim())
    .map(({ title, path }) => ({ title, path }));
}
