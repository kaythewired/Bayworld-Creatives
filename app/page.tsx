import { SiteFooter } from "./_components/SiteFooter";
import { SiteHeader } from "./_components/SiteHeader";
import { SimpleHome } from "./_components/SimpleHome";
import { featuredClients, portfolioGallery, process, services } from "./_components/site-data";

const work = [portfolioGallery[8], portfolioGallery[21], portfolioGallery[0], portfolioGallery[10], portfolioGallery[5]];
const selectedServices = [services[0], services[1], services[2], services[4]];
const clientLogoWidth = 230;
const clientLogoHeight = 88;

function ClientLogo({ client }: { client: (typeof featuredClients)[number] }) {
  const { canvasWidth, canvasHeight, left, top, width, height } = client.crop;
  const scale = Math.min(clientLogoWidth / width, clientLogoHeight / height);
  const visibleWidth = width * scale;
  const visibleHeight = height * scale;

  return (
    <span className="landing-client-logo" style={{ width: clientLogoWidth, height: clientLogoHeight }}>
      <img
        src={client.logo}
        alt={`${client.name} logo`}
        loading="lazy"
        decoding="async"
        style={{
          width: Math.round(canvasWidth * scale),
          height: Math.round(canvasHeight * scale),
          left: Math.round((clientLogoWidth - visibleWidth) / 2 - left * scale),
          top: Math.round((clientLogoHeight - visibleHeight) / 2 - top * scale),
        }}
      />
    </span>
  );
}

export default function Home() {
  return <SimpleHome />;
}

function LegacyHome() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="bayworld-home">
        <section className="bw-hero">
          <div className="bw-hero-grid" aria-hidden="true" />
          <div className="site-shell bw-hero-shell">
            <p className="bw-index"><span>Bayworld Creatives</span><span> Lagos, Nigeria / 01</span></p>
            <div className="bw-hero-layout">
              <div className="bw-hero-copy">
                <p className="bw-eyebrow">Creative agency for brands on the move</p>
                <h1>Make your<br /><em>next move</em><br />matter.</h1>
                <p className="bw-hero-intro">Bayworld brings brand identity, print production and digital thinking together to create a presence people can recognise and remember.</p>
                <div className="bw-hero-actions"><a href="/contact">Start a project <span aria-hidden="true">↗</span></a><a className="bw-ghost-link" href="/work">See our work <span aria-hidden="true">↓</span></a></div>
              </div>
              <div className="bw-hero-collage" aria-label="A selection of Bayworld creative work">
                <figure className="bw-hero-feature"><img src={portfolioGallery[8].src} alt={portfolioGallery[8].alt} /><figcaption><span>Campaign + activation</span><b>Heroes of inDrive</b></figcaption></figure>
                <figure className="bw-hero-card bw-hero-card-a"><img src={portfolioGallery[1].src} alt={portfolioGallery[1].alt} /></figure>
                <figure className="bw-hero-card bw-hero-card-b"><img src={portfolioGallery[20].src} alt={portfolioGallery[20].alt} /></figure>
                <span className="bw-shape bw-shape-a" aria-hidden="true" />
                <span className="bw-shape bw-shape-b" aria-hidden="true" />
              </div>
            </div>
            <div className="bw-hero-footer"><span>Built to be seen.</span><span>Designed to connect.</span><a href="/services">Explore our capabilities <b aria-hidden="true">→</b></a></div>
          </div>
        </section>

        <section className="bw-intro section">
          <div className="site-shell bw-intro-grid">
            <p className="bw-index dark"><span>01</span><span>Our point of view</span></p>
            <div><h2>Ideas deserve more than a good <em>first impression.</em></h2></div>
            <div className="bw-intro-note"><p>We help ambitious businesses look sharper, communicate clearly and show up consistently across every place their audience finds them.</p><a className="bw-text-link" href="/about">Meet Bayworld <span aria-hidden="true">→</span></a></div>
          </div>
        </section>

        <section className="bw-work section" id="featured-work">
          <div className="site-shell">
            <div className="bw-section-heading"><div><p className="bw-eyebrow">Selected work</p><h2>Work that earns<br />a <em>second look.</em></h2></div><a className="bw-text-link" href="/work">View the full gallery <span aria-hidden="true">→</span></a></div>
            <div className="bw-work-grid">
              {work.map((item, index) => <a className={`bw-work-card bw-work-card-${index + 1}`} href="/work" key={item.title}><img src={item.src} alt={item.alt} loading="lazy" decoding="async" /><span>{item.category}</span><strong>{item.title}</strong><i aria-hidden="true">↗</i></a>)}
            </div>
          </div>
        </section>

        <section className="bw-services section">
          <div className="site-shell">
            <div className="bw-section-heading bw-light-heading"><div><p className="bw-eyebrow">How we help</p><h2>One studio.<br /><em>Many ways</em> forward.</h2></div><p>From the first spark to the finished product, our connected services give your brand one clear direction.</p></div>
            <div className="bw-service-list">
              {selectedServices.map((service, index) => <a href="/services" className="bw-service-row" key={service.number}><span>{String(index + 1).padStart(2, "0")}</span><h3>{service.title}</h3><p>{service.description}</p><b aria-hidden="true">↗</b></a>)}
            </div>
          </div>
        </section>

        <section className="bw-spotlight">
          <figure><img src={portfolioGallery[21].src} alt={portfolioGallery[21].alt} loading="lazy" decoding="async" /></figure>
          <div className="site-shell bw-spotlight-copy"><p className="bw-eyebrow">Brand systems in motion</p><h2>Identity should work<br />everywhere <em>you do.</em></h2><p>From a business card in a hand to a branded vehicle on the road, we build connected creative systems that hold their own in the real world.</p><a href="/campaigns">Explore campaigns <span aria-hidden="true">↗</span></a></div>
        </section>

        <section className="bw-process section">
          <div className="site-shell"><div className="bw-process-heading"><p className="bw-eyebrow">A clear way forward</p><h2>Good creative<br />starts with <em>listening.</em></h2></div><div className="bw-process-list">{process.map((item) => <article key={item.step}><span>{item.step}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div></div>
        </section>

        <section className="bw-clients section">
          <div className="site-shell"><div className="bw-client-heading"><div><p className="bw-eyebrow">Good company</p><h2>Trusted by people<br />building <em>what&apos;s next.</em></h2></div><p>We are proud to support an eclectic mix of businesses and organisations with ideas worth taking further.</p></div><div className="bw-client-grid">{featuredClients.map((client) => <div className="bw-client-slot" key={client.name}><ClientLogo client={client} /></div>)}</div></div>
        </section>

        <section className="bw-close"><div className="site-shell bw-close-inner"><p className="bw-eyebrow">Let&apos;s make it happen</p><h2>Bring us the<br /><em>big idea.</em></h2><p>Tell us what you are building. We&apos;ll help you make it impossible to ignore.</p><a href="/contact">Start your project <span aria-hidden="true">↗</span></a></div></section>
      </main>
      <SiteFooter />
    </>
  );
}
