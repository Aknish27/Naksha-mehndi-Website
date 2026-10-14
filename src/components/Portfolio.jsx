"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import siteConfig from "@/config/siteConfig";
import { SectionHeading } from "@/components/Ornament";

export default function Portfolio() {
  const { gallery, portfolioCategories } = siteConfig;
  const [active, setActive] = useState("All");
  const [openIndex, setOpenIndex] = useState(null);

  // Only show categories that actually have photos
  const tabs = useMemo(() => ["All", ...portfolioCategories.filter((c) => gallery.some((g) => g.category === c))], [gallery, portfolioCategories]);
  const items = useMemo(() => (active === "All" ? gallery : gallery.filter((g) => g.category === active)), [active, gallery]);

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback((d) => setOpenIndex((i) => (i === null ? i : (i + d + items.length) % items.length)), [items.length]);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [openIndex, close, step]);

  const current = openIndex !== null ? items[openIndex] : null;

  return (
    <section id="portfolio" className="section-pad bg-ivory">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading eyebrow="Portfolio" title={<>A gallery of <em className="italic text-gold">fine lines.</em></>}>
            Browse by style. Tap any image to view it larger.
          </SectionHeading>
        </div>

        {/* category filter */}
        <div role="tablist" aria-label="Portfolio categories" className="mt-12 flex gap-x-8 gap-y-3 overflow-x-auto border-b border-ink/15 pb-4 md:flex-wrap md:overflow-visible">
          {tabs.map((t) => (
            <button
              key={t}
              role="tab"
              aria-selected={active === t}
              onClick={() => setActive(t)}
              className={`link-underline shrink-0 text-[12px] font-medium uppercase tracking-[0.2em] transition-colors ${
                active === t ? "text-gold after:scale-x-100" : "text-ink/60 hover:text-ink"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* masonry */}
        <div key={active} className="mt-10 animate-fadeIn columns-2 gap-3 md:gap-5 lg:columns-3 [&>*]:mb-3 md:[&>*]:mb-5">
          {items.map((g, i) => (
            <button
              key={g.src}
              type="button"
              onClick={() => setOpenIndex(i)}
              className="group relative block w-full break-inside-avoid overflow-hidden bg-cream text-left"
              aria-label={`Open: ${g.alt}`}
            >
              <Image
                src={g.src}
                alt={g.alt}
                width={g.width}
                height={g.height}
                sizes="(min-width: 1024px) 33vw, 50vw"
                className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-ink/70 to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">
                <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-ivory">{g.category}</span>
                <span className="text-ivory" aria-hidden="true">+</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* lightbox */}
      {current && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4 md:p-10" role="dialog" aria-modal="true" aria-label={current.alt} onClick={close}>
          <button type="button" onClick={close} className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center text-3xl text-ivory/80 hover:text-gold-light md:right-8 md:top-6" aria-label="Close">
            ×
          </button>
          {items.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); step(-1); }}
                className="absolute left-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-3xl text-ivory/80 hover:text-gold-light md:left-6"
                aria-label="Previous image"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); step(1); }}
                className="absolute right-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-3xl text-ivory/80 hover:text-gold-light md:right-6"
                aria-label="Next image"
              >
                ›
              </button>
            </>
          )}
          <figure className="flex max-h-full flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <Image src={current.src} alt={current.alt} width={current.width} height={current.height} sizes="90vw" className="max-h-[80vh] w-auto object-contain" />
            <figcaption className="mt-4 text-center text-[11px] uppercase tracking-[0.25em] text-ivory/70">
              {current.category} · {openIndex + 1} / {items.length}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
