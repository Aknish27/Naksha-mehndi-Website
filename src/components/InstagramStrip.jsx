import Image from "next/image";
import siteConfig from "@/config/siteConfig";
import Reveal from "@/components/Reveal";

export default function InstagramStrip() {
  const { instagram, instagramImages } = siteConfig;

  return (
    <section id="instagram" className="bg-ivory px-5 pb-24 md:px-10 md:pb-32">
      <div className="container-x">
        <Reveal className="flex flex-col items-start justify-between gap-6 border-t border-ink/15 pt-16 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Instagram</p>
            <h2 className="mt-4 text-4xl leading-[1.05] text-ink md:text-5xl">
              Follow along{" "}
              <a href={instagram.url} target="_blank" rel="noopener noreferrer" className="link-underline italic text-gold">
                @{instagram.handle}
              </a>
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <a href={instagram.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              Visit Instagram
            </a>
          </div>
        </Reveal>

        <ul className="mt-10 grid grid-cols-3 gap-2 md:grid-cols-6 md:gap-3">
          {instagramImages.map((img, idx) => (
            <li key={img.src} className={idx > 2 ? "hidden md:block" : ""}>
              <a href={instagram.url} target="_blank" rel="noopener noreferrer" className="group relative block aspect-square overflow-hidden bg-cream" aria-label={`Open Instagram @${instagram.handle}`}>
                <Image src={img.src} alt={img.alt} fill sizes="(min-width: 768px) 16vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute inset-0 bg-mehndi/0 transition-colors duration-500 group-hover:bg-mehndi/25" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
