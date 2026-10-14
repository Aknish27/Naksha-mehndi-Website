"use client";

import { useState } from "react";
import siteConfig from "@/config/siteConfig";
import { buildEnquiryMessage, waLink } from "@/lib/contact";
import { WhatsAppIcon } from "@/components/WhatsAppButton";

const EMPTY = { name: "", phone: "", eventType: "", eventDate: "", location: "", people: "", service: "", message: "" };

function Field({ id, label, required, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="field-label">
        {label}
        {required ? <span className="text-gold"> *</span> : null}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-1 text-xs text-[#9b3d2e]" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export default function EnquiryForm() {
  const { enquiry, services } = siteConfig;
  const [v, setV] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [sentUrl, setSentUrl] = useState("");

  const set = (k) => (e) => setV((s) => ({ ...s, [k]: e.target.value }));
  const a11y = (k) => ({ "aria-invalid": errors[k] ? true : undefined, "aria-describedby": errors[k] ? `${k}-error` : undefined });

  function onSubmit(e) {
    e.preventDefault();
    const err = {};
    if (!v.name.trim()) err.name = "Please enter your name.";
    if (v.phone.replace(/\D/g, "").length < 10) err.phone = "Please enter a valid phone number.";
    if (!v.eventType) err.eventType = "Please choose an event type.";
    setErrors(err);
    if (Object.keys(err).length) return;

    const url = waLink(buildEnquiryMessage(v));
    setSentUrl(url);
    // Opens WhatsApp (app on mobile, WhatsApp Web on desktop) with the message pre-filled.
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
      <Field id="name" label="Name" required error={errors.name}>
        <input id="name" name="name" autoComplete="name" className="field" value={v.name} onChange={set("name")} placeholder="Your name" {...a11y("name")} />
      </Field>
      <Field id="phone" label="Phone Number" required error={errors.phone}>
        <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" className="field" value={v.phone} onChange={set("phone")} placeholder="Your phone number" {...a11y("phone")} />
      </Field>

      <Field id="eventType" label="Event Type" required error={errors.eventType}>
        <select id="eventType" name="eventType" className="field" value={v.eventType} onChange={set("eventType")} {...a11y("eventType")}>
          <option value="">Select event type</option>
          {enquiry.eventTypes.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      </Field>
      <Field id="eventDate" label="Event Date">
        <input id="eventDate" name="eventDate" type="date" className="field" value={v.eventDate} onChange={set("eventDate")} />
      </Field>

      <Field id="location" label="Location">
        <input id="location" name="location" className="field" value={v.location} onChange={set("location")} placeholder="City / venue" />
      </Field>
      <Field id="people" label="Number of People (optional)">
        <input id="people" name="people" type="number" min="1" inputMode="numeric" className="field" value={v.people} onChange={set("people")} placeholder="e.g. 1" />
      </Field>

      <div className="sm:col-span-2">
        <Field id="service" label="Preferred Service">
          <select id="service" name="service" className="field" value={v.service} onChange={set("service")}>
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.id} value={s.name}>{s.name}</option>
            ))}
            <option value={enquiry.extraServiceOption}>{enquiry.extraServiceOption}</option>
          </select>
        </Field>
      </div>

      <div className="sm:col-span-2">
        <Field id="message" label="Message">
          <textarea id="message" name="message" rows={3} className="field resize-none" value={v.message} onChange={set("message")} placeholder="Tell us about your design ideas, outfit or timing" />
        </Field>
      </div>

      <div className="sm:col-span-2">
        <button type="submit" className="btn btn-solid w-full sm:w-auto">
          <WhatsAppIcon />
          Send Enquiry
        </button>
        <p className="mt-4 text-xs leading-relaxed text-ink-soft">
          Sending opens WhatsApp with your details pre-filled — just press send there. Nothing is stored on this website.
        </p>
        {sentUrl ? (
          <p className="mt-3 text-sm text-ink" role="status">
            WhatsApp should open in a moment. If it didn’t,{" "}
            <a href={sentUrl} target="_blank" rel="noopener noreferrer" className="text-gold underline underline-offset-4">
              tap here to open it
            </a>
            .
          </p>
        ) : null}
      </div>
    </form>
  );
}
