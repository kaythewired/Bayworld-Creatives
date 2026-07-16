"use client";

import { useEffect, useState } from "react";

export function SiteHeader() {
  const [isNight, setIsNight] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("bayworld-theme");
    const night = savedTheme === "night";
    setIsNight(night);
    document.documentElement.dataset.theme = night ? "night" : "day";

    const updateHeader = () => setIsScrolled(window.scrollY > 18);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  const toggleTheme = () => {
    const nextTheme = !isNight;
    setIsNight(nextTheme);
    document.documentElement.dataset.theme = nextTheme ? "night" : "day";
    window.localStorage.setItem("bayworld-theme", nextTheme ? "night" : "day");
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`site-header${isScrolled ? " is-scrolled" : ""}`}>
      <div className="site-shell header-inner">
        <a className="brand-link" href="/" aria-label="Bayworld Creatives home">
          <img className="brand-logo brand-logo-white" src="/bayworld-logo-night.png" alt="Bayworld Creatives" />
          <img className="brand-logo brand-logo-green" src="/bayworld-logo-day.png" alt="Bayworld Creatives" />
        </a>
        <nav id="site-menu" className={`nav-links${isMenuOpen ? " is-open" : ""}`} aria-label="Primary navigation">
          <a href="/about" onClick={closeMenu}>About</a><a href="/services" onClick={closeMenu}>Services</a><a href="/work" onClick={closeMenu}>Work</a><a href="/contact" onClick={closeMenu}>Contact</a>
          <a className="mobile-menu-cta" href="/contact" onClick={closeMenu}>Start a project <span aria-hidden="true">&rarr;</span></a>
          <button className="mobile-theme-toggle" type="button" onClick={toggleTheme}>{isNight ? "Switch to day mode" : "Switch to night mode"}</button>
        </nav>
        <button className="theme-toggle" type="button" onClick={toggleTheme} aria-pressed={isNight} aria-label={`Switch to ${isNight ? "day" : "night"} mode`}>
          <span className="theme-toggle-sun" aria-hidden="true">&#9728;</span>
          <span className="theme-toggle-moon" aria-hidden="true">&#9790;</span>
          <span className="theme-toggle-thumb" aria-hidden="true" />
        </button>
        <button className={`menu-toggle${isMenuOpen ? " is-open" : ""}`} type="button" onClick={() => setIsMenuOpen((open) => !open)} aria-controls="site-menu" aria-expanded={isMenuOpen} aria-label={`${isMenuOpen ? "Close" : "Open"} menu`}>
          <span /><span /><span />
        </button>
        <a className="header-cta" href="/contact"><i aria-hidden="true" /> Let&apos;s talk <span aria-hidden="true">&rarr;</span></a>
      </div>
      <div className="playful-ribbon" aria-hidden="true"><div>Big ideas <b>✦</b> Bold print <b>✦</b> Digital spark <b>✦</b> Branding with personality <b>✦</b> Big ideas <b>✦</b> Bold print <b>✦</b> Digital spark <b>✦</b> Branding with personality <b>✦</b></div></div>
    </header>
  );
}
