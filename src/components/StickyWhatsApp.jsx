"use client";

import { useEffect, useState } from "react";
import { waLink, generalWaMessage } from "@/lib/contact";
import { WhatsAppIcon } from "@/components/WhatsAppButton";

/** Slim bottom WhatsApp bar, mobile only. Appears once the visitor scrolls past the hero. */
export default function StickyWhatsApp() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-gold/40 bg-ivory/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-md transition-transform duration-500 md:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!show}
    >
      <a
        href={waLink(generalWaMessage)}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={show ? 0 : -1}
        className="btn btn-solid w-full"
      >
        <WhatsAppIcon />
        WhatsApp Naksha Mehndi
      </a>
    </div>
  );
}
