import { SiteFooter } from "./_components/SiteFooter";
import { SiteHeader } from "./_components/SiteHeader";
import { projects, services } from "./_components/site-data";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <section className="hero">
          <div className="site-shell hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><span /> Lagos-based creative agency</p>
              <h1>Crafting dreams.<br /><em>Amplifying brands.</em></h1>
              <p className="hero-intro">We bring together creative branding, professional design, quality printing and practical digital solutions so businesses can stand out with confidence.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="/contact">Get a Quote <span aria-hidden="true">&rarr;</span></a>
                <a className="text-link" href="/work">View Our Work <span aria-hidden="true">&rarr;</span></a>
              </div>
            </div>
            <div className="hero-art" aria-label="Bayworld Creatives logo and creative composition">
              <div className="hero-art-topline"><span>EST. LAGOS</span><span>BC / 01</span></div>
              <div className="hero-circle hero-circle-one" />
              <div className="hero-circle hero-circle-two" />
              <div className="hero-paper hero-paper-back" />
              <div className="hero-paper hero-paper-front"><p>Ideas, made visible.</p><img src="/bayworld-logo.png" alt="" /></div>
              <p className="hero-art-caption">Branding<br />Print<br />Digital</p>
            </div>
          </div>
          <div className="hero-scroll">Explore Bayworld <span aria-hidden="true">&darr;</span></div>
        </section>

        <section className="about section">
          <div className="site-shell about-grid">
            <div><p className="eyebrow"><span /> About Bayworld</p><p className="section-number">01 / WHO WE ARE</p></div>
            <div className="about-copy">
              <h2>Thoughtful creativity for businesses ready to be remembered.</h2>
              <p>Bayworld Creatives is a Lagos-based creative agency delivering branding, printing, web development and digital marketing solutions.</p>
              <p>We combine creativity, strategy and technical expertise to help businesses build strong identities, connect with their audiences and achieve meaningful growth.</p>
              <a className="text-link" href="/about">Meet Bayworld <span aria-hidden="true">&rarr;</span></a>
            </div>
          </div>
        </section>

        <section className="services section">
          <div className="site-shell">
            <div className="section-heading">
              <div><p className="eyebrow eyebrow-light"><span /> What we do</p><h2>One creative partner.<br /><em>Many ways to grow.</em></h2></div>
              <p>From first impression to final delivery, our services work together to make your brand feel clear, capable and consistent.</p>
            </div>
            <div className="services-list">
              {services.map((service) => (
                <a className="service-card" href="/services" key={service.number}>
                  <span className="service-number">{service.number}</span>
                  <div><h3>{service.title}</h3><p>{service.description}</p></div>
                  <span className="service-arrow" aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="work section">
          <div className="site-shell">
            <div className="work-heading">
              <div><p className="eyebrow eyebrow-light"><span /> Selected work</p><h2>Creative work that<br /><em>makes an impact.</em></h2></div>
              <p>Explore the ways we help businesses communicate better, show up professionally and stand out in the right places.</p>
            </div>
            <div className="project-grid">
              {projects.map((project, index) => (
                <a className={`project-card ${project.className}`} href="/work" key={project.type}>
                  <div className="project-visual" aria-hidden="true"><span>{String(index + 1).padStart(2, "0")}</span><i /><b>{project.type.split(" ")[0]}</b></div>
                  <div className="project-details"><div><p>{project.label}</p><h3>{project.type}</h3></div><span aria-hidden="true">&rarr;</span></div>
                </a>
              ))}
            </div>
            <a className="button button-cream" href="/work">View Our Portfolio <span aria-hidden="true">&rarr;</span></a>
          </div>
        </section>

        <section className="cta">
          <div className="site-shell cta-inner">
            <p className="eyebrow"><span /> Let&apos;s make it happen</p>
            <h2>Ready to amplify<br /><em>your brand?</em></h2>
            <p>Whether you need a new identity, professional printing, a modern website or ongoing digital support, Bayworld Creatives is ready to bring your vision to life.</p>
            <a className="button button-primary" href="/contact">Start Your Project <span aria-hidden="true">&rarr;</span></a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
