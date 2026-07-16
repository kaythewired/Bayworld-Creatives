"use client";

import { useEffect, useState } from "react";

export function SiteHeader() {
  const [isNight, setIsNight] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <header className={`site-header${isScrolled ? " is-scrolled" : ""}`}>
      <div className="site-shell header-inner">
        <a className="brand-link" href="/" aria-label="Bayworld Creatives home">
          <img className="brand-logo brand-logo-day" src="/bayworld-logo-day.png" alt="Bayworld Creatives" />
          <img className="brand-logo brand-logo-night" src="/bayworld-logo-night.png" alt="Bayworld Creatives" />
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="/about">About</a><a href="/services">Services</a><a href="/work">Work</a><a href="/contact">Contact</a>
        </nav>
        <button className="theme-toggle" type="button" onClick={toggleTheme} aria-pressed={isNight} aria-label={`Switch to ${isNight ? "day" : "night"} mode`}>
          <span className="theme-toggle-sun" aria-hidden="true">&#9728;</span>
          <span className="theme-toggle-moon" aria-hidden="true">&#9790;</span>
          <span className="theme-toggle-thumb" aria-hidden="true" />
        </button>
        <a className="header-cta" href="/contact"><i aria-hidden="true" /> Let&apos;s talk <span aria-hidden="true">&rarr;</span></a>
      </div>
      <div className="playful-ribbon" aria-hidden="true"><div>Big ideas <b>✦</b> Bold print <b>✦</b> Digital spark <b>✦</b> Branding with personality <b>✦</b> Big ideas <b>✦</b> Bold print <b>✦</b> Digital spark <b>✦</b> Branding with personality <b>✦</b></div></div>
    </header>
  );
}
