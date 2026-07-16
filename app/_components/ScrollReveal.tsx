"use client";

import { useEffect } from "react";

const revealSelector = [
  "main > section > .site-shell",
  ".site-footer > .site-shell",
].join(",");

export function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));
    targets.forEach((target, index) => {
      target.classList.add("scroll-reveal");
      target.style.setProperty("--reveal-delay", `${Math.min(index * 45, 180)}ms`);
    });

    if (!("IntersectionObserver" in window)) {
      targets.forEach((target) => target.classList.add("is-revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            window.requestAnimationFrame(() => target.classList.add("is-revealed"));
            return;
          }

          // Reset only after the content is completely out of view. This makes
          // the animation replay reliably when the visitor returns to it.
          if (
            entry.boundingClientRect.bottom < 0 ||
            entry.boundingClientRect.top > window.innerHeight
          ) {
            target.classList.remove("is-revealed");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -5%" },
    );

    const frame = window.requestAnimationFrame(() => targets.forEach((target) => observer.observe(target)));
    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  return null;
}
