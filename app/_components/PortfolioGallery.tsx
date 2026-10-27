"use client";

import { useEffect, useState } from "react";

type GalleryItem = {
  src: string;
  alt: string;
  title: string;
  category: string;
};

type PortfolioGalleryProps = {
  items: GalleryItem[];
  eyebrow?: string;
  title?: string;
  accent?: string;
  description?: string;
};

export function PortfolioGallery({
  items,
  eyebrow = "Selected work",
  title = "Work made to",
  accent = "be noticed.",
  description = "A rotating gallery of brand identity, print production, campaigns and environmental design created by Bayworld Creatives.",
}: PortfolioGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = items.length;
  const activeItem = items[activeIndex];

  const moveTo = (index: number) => setActiveIndex((index + total) % total);

  useEffect(() => {
    if (isPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setActiveIndex((index) => (index + 1) % total), 5200);
    return () => window.clearInterval(timer);
  }, [isPaused, total]);

  return (
    <section className="portfolio-gallery" aria-roledescription="carousel" aria-label="Bayworld portfolio gallery" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
      <div className="site-shell">
        <div className="portfolio-gallery-heading">
          <div>
            <p className="reference-eyebrow">{eyebrow}</p>
            <h2>{title}<br /><em>{accent}</em></h2>
          </div>
          <p>{description}</p>
        </div>

        <div className="portfolio-gallery-stage">
          {items.map((item, index) => (
            <figure className={`portfolio-gallery-slide${index === activeIndex ? " is-active" : ""}`} key={item.src} aria-hidden={index !== activeIndex}>
              <img src={item.src} alt={index === activeIndex ? item.alt : ""} loading={index === 0 ? "eager" : "lazy"} decoding="async" />
              <figcaption><span>{item.category}</span><strong>{item.title}</strong></figcaption>
            </figure>
          ))}
          <div className="portfolio-gallery-controls">
            <button type="button" onClick={() => moveTo(activeIndex - 1)} aria-label="Show previous project">Previous</button>
            <p><b>{String(activeIndex + 1).padStart(2, "0")}</b> / {String(total).padStart(2, "0")}</p>
            <button type="button" onClick={() => moveTo(activeIndex + 1)} aria-label="Show next project">Next</button>
          </div>
        </div>

        <div className="portfolio-gallery-footer">
          <p><span>Now showing</span>{activeItem.title}</p>
          <div className="portfolio-gallery-thumbnails" aria-label="Choose a portfolio project">
            {items.map((item, index) => (
              <button className={index === activeIndex ? "is-active" : ""} type="button" key={item.src} onClick={() => moveTo(index)} aria-label={`Show ${item.title}`} aria-current={index === activeIndex ? "true" : undefined}>
                <img src={item.src} alt="" loading="lazy" decoding="async" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
