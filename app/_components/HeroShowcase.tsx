"use client";

import { useEffect, useState } from "react";

type HeroSlide = {
  src: string;
  alt: string;
  title: string;
  message: string;
  headline: string;
  lead: string;
};

export function HeroShowcase({ slides }: { slides: HeroSlide[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % slides.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, [isPaused, slides.length]);

  const activeSlide = slides[activeIndex];

  return (
    <>
      <div className="simple-hero-copy" key={activeSlide.src}>
        <p className="simple-kicker">Creative studio · Lagos, Nigeria</p>
        <h1>{activeSlide.headline}</h1>
        <p className="simple-lead">{activeSlide.lead}</p>
        <div className="simple-actions">
          <a className="simple-button simple-button-primary" href="/contact">Start a project</a>
          <a className="simple-button simple-button-secondary" href="/work">View our work</a>
        </div>
      </div>

      <div className="simple-showcase" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
        <div className="simple-showcase-stage">
          {slides.map((slide, index) => (
            <img
              className={index === activeIndex ? "is-active" : ""}
              src={slide.src}
              alt={index === activeIndex ? slide.alt : ""}
              aria-hidden={index !== activeIndex}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
              key={slide.src}
            />
          ))}
        </div>
        <div className="simple-showcase-copy">
          <div className="simple-showcase-caption">
            <span>Featured project</span>
            <strong>{activeSlide.title}</strong>
            <p>{activeSlide.message}</p>
          </div>
          <div className="simple-showcase-controls" aria-label="Choose a featured project">
            {slides.map((slide, index) => (
              <button
                className={index === activeIndex ? "is-active" : ""}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show ${slide.title}`}
                aria-current={index === activeIndex ? "true" : undefined}
                key={slide.src}
              >
                {String(index + 1).padStart(2, "0")}
              </button>
            ))}
            <button className="simple-showcase-pause" type="button" onClick={() => setIsPaused((paused) => !paused)}>{isPaused ? "Play" : "Pause"}</button>
          </div>
        </div>
      </div>
    </>
  );
}
