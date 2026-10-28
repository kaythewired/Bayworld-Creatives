export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-shell simple-footer-intro">
        <p>Have a project in mind?</p>
        <a href="/contact">Let&apos;s work together <span aria-hidden="true">↗</span></a>
      </div>
      <div className="site-shell footer-grid">
        <div className="footer-brand">
          <img className="footer-logo" src="/bayworld-logo-night.png" alt="Bayworld Creatives" />
        </div>
        <div><p className="footer-label">Explore</p><a href="/about">About us</a><a href="/services">Our services</a><a href="/work">Selected work</a><a href="/campaigns">Campaigns</a></div>
        <div><p className="footer-label">Contact</p><a href="mailto:info@bayworldcreatives.com">info@bayworldcreatives.com</a><a href="tel:+2349064428166">09064428166</a><a href="tel:+2349066794843">09066794843</a></div>
        <div><p className="footer-label">Company</p><p>Bayworld Creatives</p><p>RC 9388644</p></div>
      </div>
      <div className="site-shell footer-bottom"><span>&copy; 2026 Bayworld Creatives</span><span>Crafting dreams. Amplifying brands.</span></div>
    </footer>
  );
}
