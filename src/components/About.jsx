import Image from "next/image";
import siteConfig from "@/config/siteConfig";
import Reveal from "@/components/Reveal";
import { VineDivider } from "@/components/Ornament";

export default function About() {
  const { images, description, experienceYears } = siteConfig;

  return (
    <section id="about" className="section-pad bg-ivory">
      <div className="container-x grid items-center gap-16 md:grid-cols-12 md:gap-10">
        {/* image composition */}
        <Reveal className="relative md:col-span-6">
          <div className="relative w-[78%] bg-cream">
            <div className="relative aspect-[4/5]">
              <Image src={images.about.src} alt={images.about.alt} fill sizes="(min-width: 768px) 40vw, 80vw" className="object-cover" />
            </div>
          </div>
          <div className="absolute -bottom-10 right-0 w-[46%] border-[6px] border-ivory shadow-xl shadow-ink/10">
            <div className="relative aspect-[4/5] bg-cream">
              <Image src={images.about2.src} alt={images.about2.alt} fill sizes="25vw" className="object-cover" />
            </div>
          </div>
          <div className="absolute -top-6 right-[14%] flex h-28 w-28 flex-col items-center justify-center rounded-full bg-mehndi text-center text-ivory shadow-lg md:h-32 md:w-32">
            <span className="font-serif text-4xl leading-none text-gold-light">{experienceYears}</span>
            <span className="mt-1 text-[9px] uppercase tracking-[0.25em]">Years of<br />Mehendi</span>
          </div>
        </Reveal>

        {/* copy */}
        <Reveal delay={0.1} className="md:col-span-5 md:col-start-8">
          <p className="eyebrow">About Naksha Mehndi</p>
          <h2 className="mt-4 text-4xl leading-[1.05] text-ink md:text-6xl">
            Ten years of drawing <em className="italic text-gold">celebration</em> onto hands.
          </h2>
          <VineDivider className="mt-8 text-gold" />
          <p className="mt-8 text-[15px] leading-relaxed text-ink-soft md:text-base">{description}</p>

          <ul className="mt-10 space-y-5 border-t border-ink/15 pt-8">
            {[
              ["Every occasion", "Bridal, engagement, baby shower, party and custom designs."],
              ["Every style", "Arabic, traditional and minimal Mehendi."],
              ["Wherever you are", "Home service and event Mehendi."],
            ].map(([t, d]) => (
              <li key={t} className="flex gap-5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-ink-soft">
                  <span className="font-serif text-xl text-ink">{t}.</span> {d}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
