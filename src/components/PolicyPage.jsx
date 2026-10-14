import { notFound } from "next/navigation";
import siteConfig from "@/config/siteConfig";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { VineDivider } from "@/components/Ornament";

/** Page title for a policy, taken from POLICIES in siteConfig.js */
export function policyMetadata(key) {
  return { title: siteConfig.policies[key].title };
}

/**
 * Shows a policy page using the text in POLICIES (siteConfig.js).
 * If no text has been added for it, the page does not exist (404).
 * Blank line = new paragraph; a line starting with "## " = heading.
 */
export default function PolicyPage({ policyKey }) {
  const policy = siteConfig.policies[policyKey];
  if (!policy || !policy.content.trim()) notFound();

  const blocks = policy.content.trim().split(/\n\s*\n/);

  return (
    <>
      <Navbar />
      <main className="section-pad min-h-[70vh] bg-ivory pt-40">
        <div className="container-x max-w-2xl">
          <p className="eyebrow">{siteConfig.name}</p>
          <h1 className="mt-4 text-5xl text-ink md:text-6xl">{policy.title}</h1>
          <VineDivider className="mt-8 text-gold" />
          <div className="mt-10 space-y-5 text-[15px] leading-relaxed text-ink-soft md:text-base">
            {blocks.map((b, i) =>
              b.startsWith("## ") ? (
                <h2 key={i} className="pt-4 font-serif text-3xl text-ink">{b.slice(3)}</h2>
              ) : (
                <p key={i} className="whitespace-pre-line">{b}</p>
              ),
            )}
          </div>
          <a href="/" className="btn btn-outline mt-12">
            ← Back to home
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
