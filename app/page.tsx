import { SiteFooter } from "./_components/SiteFooter";
import { SiteHeader } from "./_components/SiteHeader";
import { DispersingHeadline } from "./_components/DispersingHeadline";
import { PortfolioGallery } from "./_components/PortfolioGallery";
import { creativeImages, featuredClients, portfolioGallery, services } from "./_components/site-data";

const featureCards = [
  { title: "Build a standout brand", text: "Clear identity systems, memorable graphic design and campaign assets that help your business look established.", image: creativeImages[3] },
  { title: "Make every print count", text: "Practical, high-quality production for the materials your audience can see, hold and keep.", image: creativeImages[1] },
];

const clientRows = [featuredClients.slice(0, 6), featuredClients.slice(6)];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <section className="reference-hero">
          <div className="reference-hero-grid" aria-hidden="true" />
          <div className="site-shell reference-hero-inner">
            <p className="reference-kicker">Lagos creative studio <span>BC / 01</span></p>
            <div className="reference-hero-copy">
              <span className="green-orb orb-left" aria-hidden="true" />
              <span className="green-orb orb-right" aria-hidden="true" />
              <span className="hero-sticker hero-sticker-one" aria-hidden="true">DESIGN<br />WITH ZING</span>
              <span className="hero-sticker hero-sticker-two" aria-hidden="true">✦</span>
              <DispersingHeadline />
              <p>Built on innovation, expertise and a passion for design, Bayworld turns ambitious ideas into compelling visual experiences that help businesses grow with confidence.</p>
              <a className="reference-button" href="/contact">Get a Quote <span aria-hidden="true">&rarr;</span></a>
            </div>
          </div>
        </section>

        <PortfolioGallery items={portfolioGallery} />

        <section className="client-showcase section" aria-labelledby="clients-heading">
          <div className="site-shell client-showcase-heading">
            <div>
              <p className="reference-eyebrow">Trusted partnerships</p>
              <h2 id="clients-heading">Good work travels<br />with <em>good company.</em></h2>
            </div>
            <p>From high-impact campaigns to production that performs in the real world, we are proud to support brands and organisations across a wide range of sectors.</p>
          </div>
          <div className="client-rails" aria-label="Selected Bayworld Creatives clients">
            {clientRows.map((row, rowIndex) => (
              <div className={`client-rail ${rowIndex === 1 ? "client-rail-reverse" : ""}`} key={`client-row-${rowIndex}`}>
                <div className="client-track">
                  {[...row, ...row].map((client, index) => (
                    <div className="client-chip" key={`${client}-${index}`}>
                      <span aria-hidden="true" />
                      <strong>{client}</strong>
                      <small>Bayworld client</small>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="site-shell client-showcase-footer">
            <p>Selected from the Bayworld company profile and portfolio.</p>
            <a className="reference-text-link light-link" href="/work">See the work <span aria-hidden="true">&rarr;</span></a>
          </div>
        </section>

        <section className="reference-intro section">
          <div className="site-shell reference-intro-grid">
            <div className="reference-intro-copy">
              <p className="reference-eyebrow">What we make</p>
              <h2>Make your business<br />look as good as<br /><em>it really is.</em></h2>
              <p>From graphic design and printing to flexible creative support, we bring ideas to life with the detail, quality and care they deserve.</p>
              <a className="reference-text-link" href="/about">More about Bayworld <span aria-hidden="true">&rarr;</span></a>
            </div>
            <div className="reference-feature-grid">
              {featureCards.map((card) => <article className="reference-feature-card" key={card.title}>
                <img src={card.image.src} alt={card.image.alt} />
                <div><h3>{card.title}</h3><p>{card.text}</p><a href="/services" aria-label={`Explore ${card.title}`}>Explore <span aria-hidden="true">&rarr;</span></a></div>
              </article>)}
            </div>
          </div>
        </section>

        <section className="reference-launch section">
          <div className="site-shell">
            <div className="reference-section-title"><span className="green-orb" aria-hidden="true" /><h2>Everything you need<br />to launch your <em>next move.</em></h2></div>
            <div className="reference-service-grid">
              {services.map((service, index) => <a href="/services" className={`reference-service-card service-tone-${index + 1}`} key={service.number}>
                <div className="service-card-image"><img src={creativeImages[index % creativeImages.length].src} alt="" /></div>
                <div><p>{service.number}</p><h3>{service.title}</h3><span aria-hidden="true">&rarr;</span></div>
              </a>)}
            </div>
          </div>
        </section>

        <section className="reference-belief section">
          <div className="site-shell reference-belief-grid">
            <div className="reference-belief-copy">
              <p className="reference-eyebrow">How we work</p>
              <h2>We listen closely, create with purpose and make sure your brand feels right <em>where it matters.</em></h2>
              <p>Our work is shaped around your goals, your audience and the everyday places people meet your business — online, in print and in person.</p>
              <a className="reference-text-link" href="/about">Our process <span aria-hidden="true">&rarr;</span></a>
            </div>
            <div className="reference-belief-visual"><span className="visual-frame" aria-hidden="true" /><img src={creativeImages[2].src} alt="Responsive website experience mockup" /></div>
          </div>
          <div className="site-shell reference-stats">
            <div><strong>01</strong><span>creative partner for your brand</span></div>
            <div><strong>06</strong><span>connected service areas</span></div>
            <div><strong>360°</strong><span>support from idea to delivery</span></div>
          </div>
        </section>

        <section className="reference-dark-services section">
          <div className="site-shell">
            <div className="reference-section-title light"><span className="green-orb" aria-hidden="true" /><h2>Practical creative<br />support for your <em>business.</em></h2></div>
            <div className="reference-dark-grid">
              {services.slice(0, 3).map((service, index) => <article className={`reference-dark-card dark-card-${index + 1}`} key={service.number}>
                <div><p>{service.number} / BAYWORLD SERVICE</p><h3>{service.title}</h3><p>{service.description}</p><a className="reference-button" href="/contact">Get a Quote <span aria-hidden="true">&rarr;</span></a></div>
                <img src={creativeImages[(index + 1) % creativeImages.length].src} alt="" />
              </article>)}
            </div>
          </div>
        </section>

        <section className="reference-work section">
          <div className="site-shell reference-work-grid">
            <div><p className="reference-eyebrow">Creative work that delivers</p><h2>A stronger presence<br />starts with a clear <em>direction.</em></h2><p>Explore the branding, print and digital work we shape for businesses that are ready to be seen.</p><a className="reference-text-link" href="/work">View Our Work <span aria-hidden="true">&rarr;</span></a></div>
            <div className="reference-work-stack"><figure><img src={creativeImages[0].src} alt="Brand identity stationery mockup" /></figure><figure><img src={creativeImages[4].src} alt="Signage and branded merchandise mockup" /></figure></div>
          </div>
        </section>

        <section className="reference-cta">
          <div className="site-shell reference-cta-inner">
            <div><p className="reference-eyebrow">Start a project</p><h2>Share your idea.<br /><em>Let&apos;s build it.</em></h2><p>Tell us what you are working toward and we will help you turn it into a brand experience that works.</p></div>
            <div className="reference-contact-panel"><p>Branding, printing, websites or ongoing support — it starts with a conversation.</p><a className="reference-button reference-button-dark" href="/contact">Start Your Project <span aria-hidden="true">&rarr;</span></a></div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
