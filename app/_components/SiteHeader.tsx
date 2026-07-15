export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-shell header-inner">
        <a className="brand-link" href="/" aria-label="Bayworld Creatives home"><img className="brand-logo" src="/bayworld-mark-cropped.png" alt="Bayworld Creatives" /></a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="/about">About</a><a href="/services">Services</a><a href="/work">Work</a><a href="/contact">Contact</a>
        </nav>
        <a className="header-cta" href="/contact">Let&apos;s talk <span aria-hidden="true">&rarr;</span></a>
      </div>
    </header>
  );
}
