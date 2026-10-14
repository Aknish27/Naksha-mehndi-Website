"use client";

import { useEffect, useState } from "react";
import BrandLogo from "@/components/BrandLogo";
import WhatsAppButton from "@/components/WhatsAppButton";
import { NAV_LINKS as LINKS } from "@/lib/nav";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open ? "border-b border-ink/10 bg-ivory/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="container-x flex h-[88px] items-center justify-between px-5 md:px-10" aria-label="Main">
        <a href="/#top" aria-label="Naksha Mehndi — home" onClick={() => setOpen(false)}>
          <BrandLogo priority className="h-[72px] w-[72px] md:h-20 md:w-20" />
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="link-underline text-[12px] font-medium uppercase tracking-[0.18em] text-ink/80 transition-colors hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <WhatsAppButton label="WhatsApp" className="hidden !py-2.5 sm:inline-flex lg:hidden" />
          <WhatsAppButton label="Chat on WhatsApp" className="hidden !py-2.5 lg:inline-flex" />
          <button
            type="button"
            className="relative flex h-10 w-10 items-center justify-center lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`absolute h-px w-6 bg-ink transition-all duration-300 ${open ? "rotate-45" : "-translate-y-1.5"}`} />
            <span className={`absolute h-px w-6 bg-ink transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`absolute h-px w-6 bg-ink transition-all duration-300 ${open ? "-rotate-45" : "translate-y-1.5"}`} />
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-[88px] bottom-0 overflow-y-auto bg-ivory px-5 pb-10 pt-8 transition-all duration-500 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <ul className="space-y-1">
          {LINKS.map((l) => (
            <li key={l.href} className="border-b border-ink/10">
              <a href={l.href} onClick={() => setOpen(false)} className="block py-4 font-serif text-3xl text-ink">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <WhatsAppButton className="mt-8 w-full" />
      </div>
    </header>
  );
}
