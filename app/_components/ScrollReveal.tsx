"use client";

import { useEffect } from "react";

const revealSelector = [
  ".site-header",
  "main > section",
  ".site-footer",
].join(",");

export function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));
    targets.forEach((target) => {
      target.classList.add("scroll-reveal");
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
      { threshold: 0.01, rootMargin: "0px 0px 8%" },
    );

    const frame = window.requestAnimationFrame(() => targets.forEach((target) => observer.observe(target)));
    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  return null;
}
