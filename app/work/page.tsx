import type { Metadata } from "next";
import { PageHero } from "../_components/PageHero";
import { SiteFooter } from "../_components/SiteFooter";
import { SiteHeader } from "../_components/SiteHeader";
import { companyProfileGallery } from "../_components/site-data";

export const metadata: Metadata = {
  title: "Creative Portfolio & Selected Work",
  description: "See selected Bayworld Creatives work across brand identity, print production, campaigns and visual communication.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <PageHero
          eyebrow="Selected work"
          index="04"
          title="Made to be seen."
          accent="Made to be remembered."
          lead="A living collection of identity, campaign, print and production work created for real businesses and real moments."
          image={companyProfileGallery[2]}
        />

        <section className="profile-gallery-section" aria-labelledby="portfolio-gallery-heading">
          <div className="site-shell">
            <div className="profile-gallery-heading">
              <div>
                <p className="reference-eyebrow">From the Bayworld portfolio</p>
                <h2 id="portfolio-gallery-heading">
                  Work that moves
                  <br />
                  <em>from idea to impact.</em>
                </h2>
              </div>
              <p>
                Explore a selection of brand identities, packaging, campaigns, editorial pieces and on-the-ground applications developed by Bayworld Creatives.
              </p>
            </div>

            <div className="profile-gallery-notes" aria-label="Portfolio categories">
              <span>Identity</span>
              <span>Print</span>
              <span>Campaign</span>
              <span>Production</span>
              <span>Digital</span>
            </div>

            <div className="profile-gallery-grid">
              {companyProfileGallery.map((item, index) => (
                <figure className={`profile-gallery-card ${item.size}`} key={item.src}>
                  <img src={item.src} alt={item.alt} />
                  <figcaption>
                    <span>{String(index + 1).padStart(2, "0")} / {item.category}</span>
                    <strong>{item.title}</strong>
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="profile-gallery-bottom">
              <p>Every piece is shaped to work in the places people will actually see, use and remember it.</p>
              <a className="reference-text-link" href="/contact">
                Start your own project <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </section>

        <section className="reference-cta page-reference-cta">
          <div className="site-shell reference-cta-inner">
            <div>
              <p className="reference-eyebrow">Make an impact</p>
              <h2>Bring your idea.<br /><em>We&apos;ll bring it to life.</em></h2>
              <p>From a single visual piece to a full brand rollout, we are ready to help you make the right impression.</p>
            </div>
            <div className="reference-contact-panel">
              <p>Get in touch to discuss a practical, memorable solution for your business.</p>
              <a className="reference-button reference-button-dark" href="/contact">
                Start Your Project <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
