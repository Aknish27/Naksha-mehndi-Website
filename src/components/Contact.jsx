import siteConfig from "@/config/siteConfig";
import Reveal from "@/components/Reveal";
import EnquiryForm from "@/components/EnquiryForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import { VineDivider } from "@/components/Ornament";
import { telHref, mailHref } from "@/lib/contact";

export default function Contact() {
  const { contact, location } = siteConfig;

  return (
    <section id="contact" className="section-pad bg-cream">
      <div className="container-x grid gap-16 lg:grid-cols-12">
        {/* contact options */}
        <Reveal className="lg:col-span-5">
          <p className="eyebrow">Book your Mehendi</p>
          <h2 className="mt-4 text-4xl leading-[1.05] text-ink md:text-6xl">
            Let’s plan your <em className="italic text-gold">design.</em>
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ink-soft">
            The quickest way to reach us is WhatsApp. Share your date and ideas and we’ll get back to you.
          </p>

          <WhatsAppButton label="WhatsApp Naksha Mehndi" className="mt-8 w-full sm:w-auto" />

          <VineDivider className="mt-12 text-gold" />

          <dl className="mt-10 space-y-7">
            <div>
              <dt className="eyebrow">Call</dt>
              <dd className="mt-2">
                <a href={telHref} className="link-underline font-serif text-3xl text-ink">
                  {contact.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Email</dt>
              <dd className="mt-2 break-all">
                <a href={mailHref} className="link-underline font-serif text-2xl text-ink md:text-3xl">
                  {contact.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Hours</dt>
              <dd className="mt-2 font-serif text-2xl text-ink md:text-3xl">{contact.hours}</dd>
            </div>
            {location.displayName ? (
              <div>
                <dt className="eyebrow">Location</dt>
                <dd className="mt-2 font-serif text-2xl text-ink md:text-3xl">{location.displayName}</dd>
                {location.mapsUrl ? (
                  <a href={location.mapsUrl} target="_blank" rel="noopener noreferrer" className="link-underline mt-2 inline-block text-sm text-gold">
                    Open in Google Maps →
                  </a>
                ) : null}
              </div>
            ) : null}
          </dl>
        </Reveal>

        {/* form */}
        <Reveal delay={0.1} className="lg:col-span-7">
          <div className="bg-ivory p-6 shadow-xl shadow-ink/5 md:p-12">
            <h3 className="font-serif text-3xl text-ink md:text-4xl">Send an enquiry</h3>
            <p className="mb-8 mt-2 text-sm text-ink-soft">Fields marked * are required.</p>
            <EnquiryForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
