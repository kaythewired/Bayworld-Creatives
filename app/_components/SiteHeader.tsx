"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/campaigns", label: "Campaigns" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 18);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <a className="skip-link" href="#top">Skip to main content</a>
      <header className={`site-header${isScrolled ? " is-scrolled" : ""}`}>
        <div className="site-shell header-inner">
        <Link className="brand-link" href="/" aria-label="Bayworld Creatives home">
          <img className="brand-logo" src="/bayworld-logo-day.png" alt="Bayworld Creatives" />
        </Link>
        <nav id="site-menu" className={`nav-links${isMenuOpen ? " is-open" : ""}`} aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link
              className={pathname === item.href ? "is-current" : undefined}
              href={item.href}
              key={item.href}
              onClick={closeMenu}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <Link className="mobile-menu-cta" href="/contact" onClick={closeMenu}>Start a project <span aria-hidden="true">&rarr;</span></Link>
        </nav>
        <button className={`menu-toggle${isMenuOpen ? " is-open" : ""}`} type="button" onClick={() => setIsMenuOpen((open) => !open)} aria-controls="site-menu" aria-expanded={isMenuOpen} aria-label={`${isMenuOpen ? "Close" : "Open"} menu`}>
          <span /><span /><span />
        </button>
        <Link className="header-cta" href="/contact"><i aria-hidden="true" /> Let&apos;s talk <span aria-hidden="true">&rarr;</span></Link>
        </div>
      </header>
    </>
  );
}
