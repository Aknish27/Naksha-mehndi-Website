import Image from "next/image";
import siteConfig from "@/config/siteConfig";
import Reveal from "@/components/Reveal";
import WhatsAppButton from "@/components/WhatsAppButton";
import { waLink, serviceWaMessage } from "@/lib/contact";

export default function Services() {
  const { services, images } = siteConfig;

  return (
    <section id="services" className="section-pad bg-cream">
      <div className="container-x grid gap-16 lg:grid-cols-12">
        {/* sticky intro + bridal feature */}
        <div className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
          <Reveal>
            <p className="eyebrow">Services</p>
            <h2 className="mt-4 text-4xl leading-[1.05] text-ink md:text-6xl">
              Every occasion, <em className="italic text-gold">drawn by hand.</em>
            </h2>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-ink-soft">
              From the bride’s hands to a birthday get-together — choose a service below, or tell us your idea and we’ll design it with you.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-10 hidden lg:block">
            <div className="relative aspect-[4/5] w-3/4 overflow-hidden rounded-t-[999px] bg-sand">
              <Image src={images.bridal2.src} alt={images.bridal2.alt} fill sizes="25vw" className="object-cover" />
            </div>
          </Reveal>

          <WhatsAppButton className="mt-10 w-full sm:w-auto" />
        </div>

        {/* editorial service list */}
        <ol className="border-t border-ink/20 lg:col-span-8">
          {services.map((s, i) => (
            <li key={s.id} className="border-b border-ink/20">
              <a
                href={waLink(serviceWaMessage(s.name))}
                target="_blank"
                rel="noopener noreferrer"
                className={`group grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-x-4 transition-all duration-500 hover:bg-ivory/60 md:grid-cols-[4rem_1fr_auto] md:gap-x-8 ${
                  s.featured ? "py-10 md:py-14" : "py-6 md:py-8"
                } md:px-4`}
              >
                <span className="font-serif text-lg text-gold md:text-xl">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3
                    className={`font-serif leading-tight text-ink transition-transform duration-500 group-hover:translate-x-1 ${
                      s.featured ? "text-4xl italic md:text-6xl" : "text-2xl md:text-4xl"
                    }`}
                  >
                    {s.name}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-soft">{s.desc}</p>
                </div>
                <span className="hidden items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-ink/50 transition-colors group-hover:text-gold sm:inline-flex">
                  Enquire
                  <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
