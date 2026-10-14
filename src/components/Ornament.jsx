/** Fine henna-style divider: line, diamond, dots, line. Inherits colour via currentColor. */
export function VineDivider({ className = "" }) {
  return (
    <svg
      viewBox="0 0 240 24"
      className={`h-5 w-48 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M0 12H98" />
      <path d="M142 12H240" />
      <path d="M120 3L129 12L120 21L111 12Z" />
      <path d="M120 8C122 10 122 14 120 16" />
      <circle cx="104" cy="12" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="136" cy="12" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Reusable section heading block. */
export function SectionHeading({ eyebrow, title, children, align = "left", light = false, as: Tag = "h2" }) {
  const center = align === "center";
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className={`eyebrow ${light ? "!text-gold-light" : ""}`}>{eyebrow}</p>
      <Tag className={`mt-4 text-4xl leading-[1.05] md:text-6xl ${light ? "text-ivory" : "text-ink"}`}>{title}</Tag>
      {children ? (
        <p className={`mt-6 text-[15px] leading-relaxed md:text-base ${light ? "text-ivory/75" : "text-ink-soft"}`}>{children}</p>
      ) : null}
    </div>
  );
}
