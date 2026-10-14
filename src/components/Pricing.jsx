import siteConfig from "@/config/siteConfig";
import Reveal from "@/components/Reveal";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SectionHeading } from "@/components/Ornament";
import { serviceWaMessage } from "@/lib/contact";

export default function Pricing() {
  const { pricing } = siteConfig;

  // No prices added yet: show nothing (see PRICING in siteConfig.js)
  if (!pricing.items.length) return null;

  return (
    <section id="pricing" className="section-pad bg-ivory">
      <div className="container-x grid gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <SectionHeading eyebrow="Pricing" title={<>Simple, <em className="italic text-gold">transparent</em> starting points.</>}>
            {pricing.note}
          </SectionHeading>
        </Reveal>

        {/* editorial price list */}
        <Reveal delay={0.1} className="lg:col-span-7">
          <ul className="border-t border-ink/20">
            {pricing.items.map((p) => (
              <li key={p.service} className="flex flex-col gap-4 border-b border-ink/20 py-8 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h3 className={`font-serif leading-tight text-ink ${p.featured ? "text-4xl italic md:text-5xl" : "text-3xl md:text-4xl"}`}>{p.service}</h3>
                  <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
                    {p.price ? pricing.prefix : p.label}
                  </p>
                </div>
                <div className="flex items-center gap-6 sm:flex-col sm:items-end sm:gap-3">
                  {p.price && <span className="font-serif text-4xl text-ink md:text-5xl">{p.price}</span>}
                  <WhatsAppButton
                    label="Ask for a quote"
                    variant="outline"
                    message={serviceWaMessage(p.service)}
                    className="!px-4 !py-2.5"
                  />
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
