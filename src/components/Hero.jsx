import Image from "next/image";
import siteConfig from "@/config/siteConfig";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Hero() {
  const { images, tagline, experienceYears, heroStats, services } = siteConfig;

  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-br from-ivory via-ivory to-cream pb-20 pt-28 md:pb-28 md:pt-36">
      <div className="container-x relative grid items-center gap-14 px-5 md:grid-cols-12 md:gap-8 md:px-10">
        <div className="md:col-span-6">
          <p className="eyebrow animate-fadeIn">Naksha Mehndi · Bridal &amp; Wedding Mehendi Artist</p>

          <h1 className="mt-6 text-[3.4rem] leading-[0.98] text-ink sm:text-7xl lg:text-[6.5rem]">
            <span className="sr-only">Naksha Mehndi — </span>
            {tagline.split(" ").slice(0, -1).join(" ")}{" "}
            <em className="font-medium italic text-gold">{tagline.split(" ").slice(-1)[0]}</em>
          </h1>

          <p className="mt-8 max-w-md text-[15px] leading-relaxed text-ink-soft md:text-base">
            Bridal, engagement, party and custom Mehendi — Arabic, traditional and minimal styles — drawn by hand with {experienceYears} years of
            experience. At your home or your event.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton label="Chat on WhatsApp" />
            <a href="#portfolio" className="btn btn-outline">
              View Portfolio
            </a>
          </div>

          <dl className="mt-14 grid max-w-xl grid-cols-1 gap-6 border-t border-ink/15 pt-6 sm:grid-cols-[auto_1.4fr_auto] sm:gap-8">
            <div>
              <dt className="eyebrow !tracking-[0.2em]">{heroStats.experienceLabel}</dt>
              <dd className="mt-2 font-serif text-3xl text-ink">{experienceYears} years</dd>
            </div>
            <div>
              <dt className="eyebrow !tracking-[0.2em]">{heroStats.servicesLabel}</dt>
              <dd className="mt-2 font-serif text-3xl text-ink">{services.length} Services</dd>
              <dd className="mt-1 text-xs leading-relaxed text-ink-soft">{heroStats.servicesNote}</dd>
            </div>
            <div>
              <dt className="eyebrow !tracking-[0.2em]">{heroStats.serviceAreaLabel}</dt>
              <dd className="mt-2 font-serif text-3xl leading-[1.05] text-ink">{heroStats.serviceAreaValue}</dd>
            </div>
          </dl>
        </div>

        <div className="relative md:col-span-6">
          <div className="relative ml-auto aspect-[4/5] w-full max-w-[520px]">
            {/* offset gold outline arch */}
            <div className="absolute -right-3 -top-3 h-full w-full rounded-t-[999px] border border-gold/60 md:-right-5 md:-top-5" aria-hidden="true" />
            <div className="relative h-full w-full overflow-hidden rounded-t-[999px] bg-cream">
              <Image
                src={images.hero.src}
                alt={images.hero.alt}
                fill
                priority
                sizes="(min-width: 768px) 520px, 90vw"
                className="object-cover"
              />
            </div>

            {/* secondary image */}
            <div className="absolute -bottom-8 -left-4 hidden w-36 border-[6px] border-ivory shadow-xl shadow-ink/10 sm:block md:-left-12 md:w-48">
              <div className="relative aspect-[3/4] bg-cream">
                <Image src={images.bridal1.src} alt={images.bridal1.alt} fill sizes="200px" className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
