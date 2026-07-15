const services = [
  {
    number: "01",
    title: "Branding & Graphic Design",
    description:
      "Memorable identities, logos, campaigns and visual systems that make your business unmistakably yours.",
  },
  {
    number: "02",
    title: "Printing & Production",
    description:
      "Business cards, brochures, signage, branded merchandise and production you can count on.",
  },
  {
    number: "03",
    title: "Website Design & Development",
    description:
      "Modern, responsive websites that explain your value clearly and help turn attention into action.",
  },
  {
    number: "04",
    title: "Social Media Management",
    description:
      "Engaging content and consistent social presence that keeps your brand close to its audience.",
  },
  {
    number: "05",
    title: "Digital Marketing & SEO",
    description:
      "Targeted campaigns and search strategy designed to grow visibility, leads and momentum.",
  },
  {
    number: "06",
    title: "Creative & Business Support",
    description:
      "Flexible content, sourcing and brand-support solutions shaped around what your business needs next.",
  },
];

const reasons = [
  "Creative solutions tailored to your goals",
  "Professional, consistent delivery",
  "Thoughtful attention to every detail",
  "Quality design and dependable production",
  "Digital and print expertise under one roof",
  "Support from first idea to final delivery",
];

const process = [
  {
    step: "01",
    title: "Discover",
    description: "We learn about your business, audience and objectives.",
  },
  {
    step: "02",
    title: "Create",
    description: "We turn strategy into purposeful, visually compelling work.",
  },
  {
    step: "03",
    title: "Deliver",
    description: "We refine, produce and deliver work to a professional standard.",
  },
];

const projects = [
  { type: "Brand Identity", label: "Identity / Strategy", className: "project-identity" },
  { type: "Print & Production", label: "Print / Production", className: "project-print" },
  { type: "Digital Experience", label: "Web / Digital", className: "project-digital" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="site-shell header-inner">
          <a className="brand-link" href="#top" aria-label="Bayworld Creatives home">
            <img className="brand-logo" src="/bayworld-logo.png" alt="Bayworld Creatives" />
          </a>
          <nav className="nav-links" aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="header-cta" href="#contact">Let&apos;s talk <span aria-hidden="true">↗</span></a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="site-shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Lagos-based creative agency</p>
            <h1>Crafting dreams.<br /><em>Amplifying brands.</em></h1>
            <p className="hero-intro">
              We bring together creative branding, professional design, quality printing and practical digital solutions so businesses can stand out with confidence.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">Get a Quote <span aria-hidden="true">↗</span></a>
              <a className="text-link" href="#work">View Our Work <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <div className="hero-art" aria-label="Bayworld Creatives logo and creative composition">
            <div className="hero-art-topline"><span>EST. LAGOS</span><span>BC / 01</span></div>
            <div className="hero-circle hero-circle-one" />
            <div className="hero-circle hero-circle-two" />
            <div className="hero-paper hero-paper-back" />
            <div className="hero-paper hero-paper-front">
              <p>Ideas, made visible.</p>
              <img src="/bayworld-logo.png" alt="" />
            </div>
            <p className="hero-art-caption">Branding<br />Print<br />Digital</p>
          </div>
        </div>
        <div className="hero-scroll">Scroll to explore <span aria-hidden="true">↓</span></div>
      </section>

      <section className="about section" id="about">
        <div className="site-shell about-grid">
          <div>
            <p className="eyebrow"><span /> About Bayworld</p>
            <p className="section-number">01 / WHO WE ARE</p>
          </div>
          <div className="about-copy">
            <h2>Thoughtful creativity for businesses ready to be remembered.</h2>
            <p>
              Bayworld Creatives is a Lagos-based creative agency delivering branding, printing, web development and digital marketing solutions.
            </p>
            <p>
              We combine creativity, strategy and technical expertise to help businesses build strong identities, connect with their audiences and achieve meaningful growth.
            </p>
            <a className="text-link" href="#services">How we can help <span aria-hidden="true">↓</span></a>
          </div>
        </div>
      </section>

      <section className="services section" id="services">
        <div className="site-shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow eyebrow-light"><span /> What we do</p>
              <h2>One creative partner.<br /><em>Many ways to grow.</em></h2>
            </div>
            <p>From first impression to final delivery, our services work together to make your brand feel clear, capable and consistent.</p>
          </div>
          <div className="services-list">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <span className="service-number">{service.number}</span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <span className="service-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="proof section">
        <div className="site-shell proof-grid">
          <div className="proof-art" aria-hidden="true">
            <div className="proof-block proof-block-one">B</div>
            <div className="proof-block proof-block-two">C</div>
            <div className="proof-stamp">YOUR<br />VISION<br />VISIBLE</div>
          </div>
          <div className="proof-copy">
            <p className="eyebrow"><span /> Why Bayworld</p>
            <h2>Good work should feel <em>as reliable</em> as it looks.</h2>
            <ul className="reasons-list">
              {reasons.map((reason, index) => (
                <li key={reason}><span>{String(index + 1).padStart(2, "0")}</span>{reason}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="process section">
        <div className="site-shell">
          <div className="section-heading process-heading">
            <div>
              <p className="eyebrow"><span /> Our process</p>
              <h2>Clear steps.<br /><em>Beautiful outcomes.</em></h2>
            </div>
            <p>A collaborative approach that keeps every project focused, considered and moving forward.</p>
          </div>
          <div className="process-grid">
            {process.map((item) => (
              <article className="process-card" key={item.step}>
                <p>{item.step}</p>
                <h3>{item.title}</h3>
                <span className="process-line" />
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="work section" id="work">
        <div className="site-shell">
          <div className="work-heading">
            <div>
              <p className="eyebrow eyebrow-light"><span /> Selected work</p>
              <h2>Creative work that<br /><em>makes an impact.</em></h2>
            </div>
            <p>Explore the ways we help businesses communicate better, show up professionally and stand out in the right places.</p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className={`project-card ${project.className}`} key={project.type}>
                <div className="project-visual" aria-hidden="true">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <i />
                  <b>{project.type.split(" ")[0]}</b>
                </div>
                <div className="project-details">
                  <div><p>{project.label}</p><h3>{project.type}</h3></div>
                  <span aria-hidden="true">↗</span>
                </div>
              </article>
            ))}
          </div>
          <a className="button button-cream" href="#contact">View Our Portfolio <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="cta" id="contact">
        <div className="site-shell cta-inner">
          <p className="eyebrow"><span /> Let&apos;s make it happen</p>
          <h2>Ready to amplify<br /><em>your brand?</em></h2>
          <p>
            Whether you need a new identity, professional printing, a modern website or ongoing digital support, Bayworld Creatives is ready to bring your vision to life.
          </p>
          <a className="button button-primary" href="tel:+2349064428166">Start Your Project <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="site-shell footer-grid">
          <div className="footer-brand">
            <img src="/bayworld-logo.png" alt="Bayworld Creatives" />
            <p>Crafting dreams. Amplifying brands.</p>
          </div>
          <div>
            <p className="footer-label">Contact</p>
            <a href="tel:+2349064428166">09064428166</a>
            <a href="tel:+2349066794843">09066794843</a>
          </div>
          <div>
            <p className="footer-label">Location</p>
            <p>Lagos, Nigeria</p>
            <p>RC 9388644</p>
          </div>
          <div>
            <p className="footer-label">Online</p>
            <a href="https://www.bayworldcreatives.com">bayworldcreatives.com</a>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
        <div className="site-shell footer-bottom"><span>© 2026 Bayworld Creatives</span><span>Crafting dreams. Amplifying brands.</span></div>
      </footer>
    </main>
  );
}
