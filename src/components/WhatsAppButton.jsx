import { waLink, generalWaMessage } from "@/lib/contact";
import { WhatsAppLogo } from "@/components/Icons";

export function WhatsAppIcon({ className = "h-4 w-4" }) {
  return <WhatsAppLogo className={className} />;
}

/**
 * "Chat on WhatsApp" button. variant: solid | outline | light | outline-light
 * `message` overrides the pre-filled text.
 */
// Full class names written out so Tailwind's content scan always keeps them.
const VARIANTS = {
  solid: "btn btn-solid",
  outline: "btn btn-outline",
  light: "btn btn-light",
  "outline-light": "btn btn-outline-light",
};

export default function WhatsAppButton({ label = "Chat on WhatsApp", variant = "solid", message, className = "" }) {
  return (
    <a
      href={waLink(message ?? generalWaMessage)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${VARIANTS[variant] ?? VARIANTS.solid} ${className}`}
    >
      <WhatsAppIcon />
      {label}
    </a>
  );
}
