"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import siteConfig from "@/config/siteConfig";

export default function Testimonials() {
  const { testimonials = [], logo } = siteConfig;
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();
  if (!testimonials.length) return null;
  const t = testimonials[i];
  const go = (d) => setI((n) => (n + d + testimonials.length) % testimonials.length);

  return (
    <section id="reviews" className="section-pad relative overflow-hidden bg-mehndi text-ivory">
      <div className="container-x relative">
        <div className="flex flex-wrap items-center gap-4">
          
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-12">
          <span className="select-none font-serif text-[9rem] leading-[0.7] text-gold-light/40 md:col-span-2 md:text-[14rem]" aria-hidden="true">
            “
          </span>

          <div className="md:col-span-9">
            <AnimatePresence mode="wait">
              <motion.figure
                key={i}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <blockquote className="font-serif text-3xl italic leading-snug text-ivory md:text-5xl md:leading-[1.2]">{t.quote}</blockquote>
                <figcaption className="mt-10 flex items-center gap-5">
                  <span className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full border border-gold-light/60 bg-mehndi-deep">
                    {t.photo ? (
                      <Image src={t.photo} alt={`Photo of ${t.name}`} fill sizes="64px" className="object-cover" />
                    ) : (
                      <Image src={logo.emblem} alt="" fill sizes="64px" className="object-cover" />
                    )}
                  </span>
                  <span>
                    <span className="block font-serif text-2xl text-ivory">{t.name}</span>
                    {t.event ? (
                      <span className="mt-1 block text-[11px] uppercase tracking-[0.25em] text-gold-light">{t.event}</span>
                    ) : null}
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>

            {testimonials.length > 1 && (
              <div className="mt-12 flex items-center gap-6">
                <button type="button" onClick={() => go(-1)} aria-label="Previous review" className="flex h-12 w-12 items-center justify-center border border-ivory/30 text-xl transition-colors hover:border-gold-light hover:text-gold-light">
                  ←
                </button>
                <button type="button" onClick={() => go(1)} aria-label="Next review" className="flex h-12 w-12 items-center justify-center border border-ivory/30 text-xl transition-colors hover:border-gold-light hover:text-gold-light">
                  →
                </button>
                <span className="text-[11px] tracking-[0.25em] text-ivory/60">
                  {String(i + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
