import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { HeroShowcase } from "./HeroShowcase";
import { featuredClients, portfolioGallery, process, services } from "./site-data";

const featuredWork = [portfolioGallery[21], portfolioGallery[8], portfolioGallery[0], portfolioGallery[5]];
const coreServices = [services[0], services[1], services[2], services[4]];
const simpleClientLogoWidth = 170;
const simpleClientLogoHeight = 66;

function SimpleClientLogo({ client }: { client: (typeof featuredClients)[number] }) {
  const { canvasWidth, canvasHeight, left, top, width, height } = client.crop;
  const scale = Math.min(simpleClientLogoWidth / width, simpleClientLogoHeight / height);
  const visibleWidth = width * scale;
  const visibleHeight = height * scale;

  return (
    <span className="simple-client-logo" style={{ width: simpleClientLogoWidth, height: simpleClientLogoHeight }}>
      <img
        src={client.logo}
        alt={`${client.name} logo`}
        loading="lazy"
        decoding="async"
        style={{
          width: Math.round(canvasWidth * scale),
          height: Math.round(canvasHeight * scale),
          left: Math.round((simpleClientLogoWidth - visibleWidth) / 2 - left * scale),
          top: Math.round((simpleClientLogoHeight - visibleHeight) / 2 - top * scale),
        }}
      />
    </span>
  );
}

const heroSlides = [
  { ...portfolioGallery[21], headline: "Take your brand further.", lead: "Vehicle branding that turns every journey into a clear, moving advert.", message: "A mobile brand presence built to work clearly on the road." },
  { ...portfolioGallery[8], headline: "Make every touchpoint count.", lead: "Campaign design that helps brands show up with confidence in everyday moments.", message: "Campaign branding that turns an everyday touchpoint into a memorable moment." },
  { ...portfolioGallery[0], headline: "Campaigns built to move.", lead: "Clear promotional design made for fast-moving businesses and audiences.", message: "Clear promotional design made for a fast-moving business." },
  { ...portfolioGallery[5], headline: "Complex ideas, made clear.", lead: "Thoughtful print design that makes important information easy to understand and use.", message: "Thoughtful print communication, structured to make information easy to use." },
];

export function SimpleHome() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="simple-home">
        <section className="simple-hero">
          <div className="site-shell simple-hero-grid">
            <HeroShowcase slides={heroSlides} />
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
            <div className="simple-client-grid">
              {featuredClients.slice(0, 8).map((client) => (
                <figure key={client.name}><SimpleClientLogo client={client} /></figure>
              ))}
            </div>
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
