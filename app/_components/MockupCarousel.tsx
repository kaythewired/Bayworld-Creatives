"use client";

import { useCallback, useEffect, useState } from "react";

type CarouselImage = { src: string; alt: string; company: string; logo?: string };

export function MockupCarousel({ images }: { images: CarouselImage[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = images.length;

  const moveTo = useCallback(
    (index: number) => setActiveIndex((index + total) % total),
    [total],
  );

  useEffect(() => {
    if (isPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => moveTo(activeIndex + 1), 4200);
    return () => window.clearInterval(timer);
  }, [activeIndex, isPaused, moveTo]);

  return (
    <section className="mockup-carousel site-shell" aria-roledescription="carousel" aria-label="Bayworld creative mockups" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} onFocus={() => setIsPaused(true)} onBlur={() => setIsPaused(false)}>
      <div className="mockup-carousel-stage">
        {images.map((image, index) => (
          <figure className={`mockup-carousel-slide${index === activeIndex ? " is-active" : ""}`} key={image.src} aria-hidden={index !== activeIndex}>
            <img src={image.src} alt={index === activeIndex ? image.alt : ""} />
            {image.logo && <img className="mockup-carousel-logo" src={image.logo} alt="" aria-hidden="true" />}
            <figcaption>{image.company}</figcaption>
          </figure>
        ))}
      </div>
      <div className="mockup-carousel-controls">
        <p><span>Bayworld mockups</span> <b>{String(activeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</b></p>
        <div className="mockup-carousel-actions">
          <button type="button" onClick={() => moveTo(activeIndex - 1)} aria-label="Show previous mockup">&larr;</button>
          <div className="mockup-carousel-dots" aria-label="Choose a mockup">
            {images.map((image, index) => <button className={index === activeIndex ? "is-active" : ""} type="button" key={image.src} onClick={() => moveTo(index)} aria-label={`Show mockup ${index + 1}`} aria-current={index === activeIndex ? "true" : undefined} />)}
          </div>
          <button type="button" onClick={() => moveTo(activeIndex + 1)} aria-label="Show next mockup">&rarr;</button>
        </div>
      </div>
    </section>
  );
}
