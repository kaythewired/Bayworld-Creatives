import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { featuredClients, portfolioGallery, process, services } from "./site-data";

const featuredWork = [portfolioGallery[21], portfolioGallery[8], portfolioGallery[0], portfolioGallery[5]];
const coreServices = [services[0], services[1], services[2], services[4]];

export function SimpleHome() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="simple-home">
        <section className="simple-hero">
          <div className="site-shell simple-hero-grid">
            <div className="simple-hero-copy">
              <p className="simple-kicker">Creative studio · Lagos, Nigeria</p>
              <h1>Clear ideas.<br />Strong brands.</h1>
              <p className="simple-lead">We bring branding, print and digital design together to help businesses look professional and communicate with confidence.</p>
              <div className="simple-actions">
                <a className="simple-button simple-button-primary" href="/contact">Start a project</a>
                <a className="simple-button simple-button-secondary" href="/work">View our work</a>
              </div>
            </div>
            <figure className="simple-hero-image">
              <img src={portfolioGallery[21].src} alt={portfolioGallery[21].alt} />
              <figcaption><span>Featured project</span><strong>{portfolioGallery[21].title}</strong></figcaption>
            </figure>
          </div>
        </section>

        <section className="simple-statement">
          <div className="site-shell simple-statement-grid">
            <p className="simple-label">What we do</p>
            <h2>One creative partner for every place your brand needs to show up.</h2>
            <p>From a new identity to the final printed piece or website, we keep the thinking, design and delivery connected.</p>
          </div>
        </section>

        <section className="simple-services">
          <div className="site-shell">
            <div className="simple-section-head">
              <div><p className="simple-label">Services</p><h2>Practical creative support.</h2></div>
              <a href="/services">See all services <span aria-hidden="true">↗</span></a>
            </div>
            <div className="simple-service-list">
              {coreServices.map((service, index) => (
                <article key={service.number}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="simple-work">
          <div className="site-shell">
            <div className="simple-section-head">
              <div><p className="simple-label">Selected work</p><h2>Made to be useful. Designed to be remembered.</h2></div>
              <a href="/work">View full portfolio <span aria-hidden="true">↗</span></a>
            </div>
            <div className="simple-work-grid">
              {featuredWork.map((item) => (
                <a href="/work" className="simple-work-card" key={item.title}>
                  <img src={item.src} alt={item.alt} loading="lazy" decoding="async" />
                  <div><span>{item.category}</span><strong>{item.title}</strong></div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="simple-process">
          <div className="site-shell simple-process-grid">
            <div><p className="simple-label">Our process</p><h2>Simple from start to finish.</h2></div>
            <div className="simple-process-list">
              {process.map((item) => (
                <article key={item.step}><span>{item.step}</span><div><h3>{item.title}</h3><p>{item.description}</p></div></article>
              ))}
            </div>
          </div>
        </section>

        <section className="simple-clients">
          <div className="site-shell">
            <p className="simple-label">Selected clients</p>
            <div>{featuredClients.slice(0, 8).map((client) => <span key={client.name}>{client.name}</span>)}</div>
          </div>
        </section>

        <section className="simple-cta">
          <div className="site-shell simple-cta-grid">
            <h2>Ready to make your brand clearer?</h2>
            <div><p>Tell us what you are building and where you need support.</p><a href="/contact">Let&apos;s talk <span aria-hidden="true">↗</span></a></div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
