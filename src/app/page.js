import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import InstagramStrip from "@/components/InstagramStrip";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StickyWhatsApp from "@/components/StickyWhatsApp";
import { buildLocalBusinessSchema } from "@/lib/schema";

export default function Home() {
  const schema = buildLocalBusinessSchema(); // null until a street address and town are added

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <InstagramStrip />
        <Contact />
      </main>
      <Footer />
      <StickyWhatsApp />
      {schema ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ) : null}
    </>
  );
}
