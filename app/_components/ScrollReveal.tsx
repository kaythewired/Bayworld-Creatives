"use client";

import { useEffect } from "react";

const revealSelector = [
  ".site-header",
  "main > section",
  ".site-footer",
  ".reference-feature-card",
  ".reference-service-card",
  ".reference-dark-card",
  ".process-card",
  ".service-detail",
  ".work-item",
  ".value-grid > li",
  ".reference-stats > div",
  ".contact-detail-grid > div",
  ".story-media-stack",
  ".story-copy",
  ".reference-intro-copy",
  ".reference-belief-copy",
  ".reference-belief-visual",
  ".reference-work-grid > div",
  ".reference-cta-inner > div",
].join(",");

export function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));
    targets.forEach((target, index) => {
      target.classList.add("scroll-reveal");
      target.style.setProperty("--reveal-delay", `${(index % 4) * 70}ms`);
    });

    if (!("IntersectionObserver" in window)) {
      targets.forEach((target) => target.classList.add("is-revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -7%" },
    );

    const frame = window.requestAnimationFrame(() => targets.forEach((target) => observer.observe(target)));
    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  return null;
}
