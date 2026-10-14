import siteConfig from "@/config/siteConfig";
import BrandLogo from "@/components/BrandLogo";
import { VineDivider } from "@/components/Ornament";
import { WhatsAppLogo, InstagramLogo } from "@/components/Icons";
import { mailHref, waLink, generalWaMessage } from "@/lib/contact";
import { NAV_LINKS, activePolicies } from "@/lib/nav";

export default function Footer() {
  const { contact, instagram, socials, name } = siteConfig;
  const policies = activePolicies();

  return (
    <footer className="bg-mehndi-deep pb-24 text-ivory md:pb-0">
      <div className="container-x px-5 pt-20 md:px-10">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <BrandLogo variant="badge" className="h-40 w-40 rounded-2xl md:h-44 md:w-44" />
            <p className="mt-6 max-w-sm font-serif text-2xl italic leading-snug text-ivory/80">{siteConfig.tagline}</p>
            <VineDivider className="mt-8 text-gold-light/70" />
          </div>

          <nav aria-label="Footer" className="md:col-span-3">
            <p className="eyebrow !text-gold-light">Explore</p>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} className="link-underline text-sm text-ivory/80 hover:text-ivory">{label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <p className="eyebrow !text-gold-light">Get in touch</p>
            <ul className="mt-5 flex items-center gap-4">
              <li>
                <a
                  href={waLink(generalWaMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with Naksha Mehndi on WhatsApp"
                  title="WhatsApp"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-ivory/30 text-ivory transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-light hover:bg-gold-light hover:text-mehndi-deep"
                >
                  <WhatsAppLogo className="h-5 w-5" />
                </a>
              </li>
              <li>
                <a
                  href={instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Naksha Mehndi on Instagram, @${instagram.handle}`}
                  title="Instagram"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-ivory/30 text-ivory transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-light hover:bg-gold-light hover:text-mehndi-deep"
                >
                  <InstagramLogo className="h-5 w-5" />
                </a>
              </li>
              {socials.facebook ? (
                <li>
                  <a href={socials.facebook} target="_blank" rel="noopener noreferrer" className="link-underline text-sm text-ivory/80 hover:text-ivory">
                    Facebook
                  </a>
                </li>
              ) : null}
            </ul>
            <ul className="mt-6 space-y-2 text-sm text-ivory/80">
              <li>
                <a href={mailHref} className="link-underline break-all hover:text-ivory">{contact.email}</a>
              </li>
              <li>{contact.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-ivory/15 py-8 text-xs text-ivory/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {name}. All rights reserved.</p>
          {policies.length > 0 ? (
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {policies.map(({ title, path }) => (
                <li key={path}><a href={path} className="hover:text-ivory">{title}</a></li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
