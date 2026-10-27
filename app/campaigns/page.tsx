import type { Metadata } from "next";
import { PortfolioGallery } from "../_components/PortfolioGallery";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";
import { nurveitCampaign } from "../_components/site-data";

export const metadata: Metadata = {
  title: "Campaigns | NURVFIT Brand Identity",
  description: "Discover Bayworld Creatives' NURVFIT premium sportswear identity and campaign direction, built for motion and designed for impact.",
  alternates: { canonical: "/campaigns" },
};

const applications = [
  "Performance kits", "Training layers", "Teamwear", "Footwear", "Accessories",
  "Packaging", "Retail spaces", "Digital campaign", "Athlete storytelling",
];

export default function CampaignsPage() {
  return (
    <><SiteHeader /><main id="top">
      <section className="nurvfit-hero">
        <div className="nurvfit-gridlines" aria-hidden="true" />
        <div className="site-shell nurvfit-hero-shell">
          <div className="nurvfit-hero-topline"><span>Campaign 01</span><span>NURVFIT / Premium Sportswear</span><span>Bayworld Creatives</span></div>
          <div className="nurvfit-hero-grid">
            <div className="nurvfit-hero-copy">
              <p className="reference-eyebrow">A performance identity</p>
              <h1>Built for<br /><em>motion.</em></h1>
              <p>NURVFIT is a high-performance sportswear brand created for people who move with discipline, confidence and purpose.</p>
              <a className="nurvfit-hero-link" href="#story">Explore the campaign <span aria-hidden="true">&darr;</span></a>
            </div>
            <div className="nurvfit-hero-art">
              <figure className="nurvfit-hero-main"><img src="/gallery/nurvfit-built-for-motion.png" alt="NURVFIT athlete in the black and red premium sportswear collection" /></figure>
              <figure className="nurvfit-hero-side"><img src="/gallery/nurvfit-own-the-court.png" alt="NURVFIT basketball athlete in the Own the Court campaign" /></figure>
              <span className="nurvfit-orbit nurvfit-orbit-one" aria-hidden="true" />
              <span className="nurvfit-orbit nurvfit-orbit-two" aria-hidden="true" />
            </div>
          </div>
          <div className="nurvfit-hero-footer"><span>Strength begins within.</span><span>Performance makes it visible.</span><span>Scroll to accelerate <b aria-hidden="true">&darr;</b></span></div>
        </div>
      </section>

      <section id="story" className="nurvfit-statement page-section">
        <div className="site-shell nurvfit-statement-grid">
          <p className="reference-eyebrow">The challenge</p>
          <div><h2>Make performance<br /><em>feel magnetic.</em></h2><p>Bayworld Creatives shaped NURVFIT from the inside out: the name, symbol, art direction and campaign world work as one sharp expression of forward movement.</p></div>
          <aside><span>01</span><strong>Bold</strong><strong>Disciplined</strong><strong>Energetic</strong><strong>Modern</strong></aside>
        </div>
      </section>

      <section className="nurvfit-motion-band" aria-label="NURVFIT campaign principles">
        <div className="nurvfit-motion-track"><span>COURAGE</span><i>+</i><span>ENDURANCE</span><i>+</i><span>FORWARD MOTION</span><i>+</i><span>COURAGE</span><i>+</i><span>ENDURANCE</span><i>+</i><span>FORWARD MOTION</span><i>+</i></div>
      </section>

      <PortfolioGallery items={nurveitCampaign} eyebrow="NURVFIT campaign system" title="One identity." accent="Every expression." description="From the pitch to the retail floor, every NURVFIT touchpoint carries the same precision, movement and confidence." />

      <section className="nurvfit-lab page-section">
        <div className="site-shell">
          <div className="nurvfit-lab-heading"><div><p className="reference-eyebrow">Designed as a whole</p><h2>Not just gear.<br /><em>A world in motion.</em></h2></div><p>The campaign treats every surface as an opportunity to perform. Deep red gives it energy. Black gives it force. White brings clarity to the system.</p></div>
          <div className="nurvfit-lab-grid">
            <figure className="nurvfit-lab-a"><img src="/gallery/nurvfit-retail-experience.png" alt="NURVFIT premium sportswear retail environment" loading="lazy" decoding="async" /><figcaption>Retail energy</figcaption></figure>
            <figure className="nurvfit-lab-b"><img src="/gallery/nurveit-brand-red.png" alt="NURVFIT red brand pattern" loading="lazy" decoding="async" /><figcaption>Signature pattern</figcaption></figure>
            <figure className="nurvfit-lab-c"><img src="/gallery/nurvfit-street-style.png" alt="NURVFIT athletes in black, red and white activewear" loading="lazy" decoding="async" /><figcaption>Performance, together</figcaption></figure>
            <figure className="nurvfit-lab-d"><img src="/gallery/nurvfit-own-the-court.png" alt="NURVFIT basketball athlete in the Own the Court campaign" loading="lazy" decoding="async" /><figcaption>Own the court</figcaption></figure>
          </div>
        </div>
      </section>

      <section className="nurvfit-system page-section">
        <div className="site-shell nurvfit-system-grid"><div><p className="reference-eyebrow">The visual identity</p><h2>Precision with<br /><em>momentum.</em></h2><p>A sharp geometric symbol references speed, connectivity and rhythm. It becomes a confident performance badge wherever the brand shows up.</p></div><div className="nurvfit-colours" aria-label="NURVFIT colour palette"><div><span className="nurvfit-swatch nurvfit-red" /><strong>Deep red</strong><p>Energy, ambition and power.</p></div><div><span className="nurvfit-swatch nurvfit-black" /><strong>Black</strong><p>Strength, confidence and sophistication.</p></div><div><span className="nurvfit-swatch nurvfit-white" /><strong>White</strong><p>Balance, clarity and a premium finish.</p></div></div></div>
      </section>

      <section className="nurvfit-applications page-section"><div className="site-shell"><p className="reference-eyebrow">The complete system</p><div className="nurvfit-application-heading"><h2>Built to live<br /><em>everywhere.</em></h2><p>One flexible identity, designed to make an impact on physical products, retail moments and digital campaigns.</p></div><div className="nurvfit-application-grid">{applications.map((application, index) => <span key={application}><small>{String(index + 1).padStart(2, "0")}</small>{application}</span>)}</div></div></section>

      <section className="nurvfit-positioning page-section"><div className="site-shell nurvfit-positioning-grid"><div><p className="reference-eyebrow">The NURVFIT mindset</p><h2>Strength begins<br /><em>within.</em></h2><p>For athletes, fitness enthusiasts and ambitious people who value performance, quality and confident design.</p></div><blockquote><span>Core message</span><p>&ldquo;Strength begins within. Performance makes it visible.&rdquo;</p><footer>Brand descriptor / Premium Sportswear</footer></blockquote></div></section>

      <section className="reference-cta page-reference-cta"><div className="site-shell reference-cta-inner"><div><p className="reference-eyebrow">The result</p><h2>Ready to<br /><em>perform.</em></h2><p>A cohesive sportswear identity built to move from first impression to everyday action.</p></div><div className="reference-contact-panel"><p>Have a brand that needs a full world of its own? Let&apos;s turn it into something people can feel.</p><a className="reference-button reference-button-dark" href="/contact">Start Your Campaign <span aria-hidden="true">&rarr;</span></a></div></div></section>
    </main><SiteFooter /></>
  );
}
