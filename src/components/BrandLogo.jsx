import Image from "next/image";
import siteConfig from "@/config/siteConfig";

/**
 * The client's logo. Files and alt text come from LOGO in siteConfig.js.
 *
 * variant="clear"  → background removed; use on LIGHT backgrounds (navbar)
 * variant="badge"  → original image on its own cream background; use anywhere,
 *                    including dark sections (footer)
 *
 * Size it with className, e.g. "h-16 w-16".
 */
export default function BrandLogo({ variant = "clear", className = "", priority = false }) {
  const { logo, name } = siteConfig;
  const src = variant === "badge" ? logo.original : logo.clear;
  return (
    <Image
      src={src}
      alt={logo.alt || `${name} logo`}
      width={logo.size}
      height={logo.size}
      priority={priority}
      sizes="(min-width: 768px) 160px, 64px"
      className={`object-contain ${className}`}
    />
  );
}
