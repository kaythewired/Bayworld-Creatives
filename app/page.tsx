import { SiteFooter } from "./_components/SiteFooter";
import { SiteHeader } from "./_components/SiteHeader";
import { DispersingHeadline } from "./_components/DispersingHeadline";
import { creativeImages, services } from "./_components/site-data";

const featureCards = [
  { title: "Build a standout brand", text: "Clear identity systems, memorable graphic design and campaign assets that help your business look established.", image: creativeImages[3] },
  { title: "Make every print count", text: "Practical, high-quality production for the materials your audience can see, hold and keep.", image: creativeImages[1] },
];

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
              <p>Bayworld Creatives brings together branding, professional design, quality printing and effective digital support for businesses ready to grow with confidence.</p>
              <a className="reference-button" href="/contact">Get a Quote <span aria-hidden="true">&rarr;</span></a>
            </div>
          </div>
          <div className="site-shell reference-image-strip">
            {creativeImages.slice(0, 5).map((photo, index) => <figure className={`hero-photo hero-photo-${index + 1}`} key={photo.src}><img src={photo.src} alt={photo.alt} /></figure>)}
          </div>
        </section>

        <section className="reference-intro section">
          <div className="site-shell reference-intro-grid">
            <div className="reference-intro-copy">
              <p className="reference-eyebrow">What we make</p>
              <h2>Make your business<br />look as good as<br /><em>it really is.</em></h2>
              <p>From first ideas through to final production, we create brand experiences that feel thoughtful, professional and ready for the real world.</p>
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
