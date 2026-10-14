import { siteConfig } from "@/config/siteConfig";

const { contact, name } = siteConfig;

/** wa.me link, optionally with a pre-filled message. */
export function waLink(text) {
  const base = `https://wa.me/${contact.whatsappNumber}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export const telHref = `tel:${contact.phoneTel}`;
export const mailHref = `mailto:${contact.email}`;

export const generalWaMessage = `Hi ${name},\n\nI would like to enquire about your Mehendi services.`;

export function serviceWaMessage(serviceName) {
  return `Hi ${name},\n\nI would like to enquire about ${serviceName}.`;
}

function prettyDate(value) {
  if (!value) return "";
  const [y, m, d] = value.split("-").map(Number);
  if (!y || !m || !d) return value;
  return new Date(y, m - 1, d).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}

/** Builds the pre-filled WhatsApp text from the enquiry form values. */
export function buildEnquiryMessage(v) {
  const line = (label, val) => `${label}: ${val && String(val).trim() ? String(val).trim() : "—"}`;
  return [
    `Hi ${name},`,
    "",
    "I would like to enquire about your Mehendi services.",
    "",
    line("Name", v.name),
    line("Phone", v.phone),
    line("Event Type", v.eventType),
    line("Event Date", prettyDate(v.eventDate)),
    line("Location", v.location),
    line("Service", v.service),
    line("Number of People", v.people),
    line("Message", v.message),
    "",
    "Thank you.",
  ].join("\n");
}
