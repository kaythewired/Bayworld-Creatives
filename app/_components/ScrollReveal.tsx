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
    let lastScrollY = window.scrollY;
    let scrollDirection: "up" | "down" = "down";
    targets.forEach((target) => {
      target.classList.add("scroll-reveal");
    });

    if (!("IntersectionObserver" in window)) {
      targets.forEach((target) => target.classList.add("is-revealed"));
      return;
    }

    const trackDirection = () => {
      const currentScrollY = window.scrollY;
      if (Math.abs(currentScrollY - lastScrollY) > 4) {
        scrollDirection = currentScrollY < lastScrollY ? "up" : "down";
      }
      lastScrollY = currentScrollY;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            target.classList.toggle("reveal-up", scrollDirection === "up");
            window.requestAnimationFrame(() => target.classList.add("is-revealed"));
            return;
          }

          // Reset only after the content is completely out of view. This makes
          // the animation replay reliably when the visitor returns to it.
          if (
            entry.boundingClientRect.bottom < 0 ||
            entry.boundingClientRect.top > window.innerHeight
          ) {
            target.classList.remove("is-revealed", "reveal-up");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -8%" },
    );

    window.addEventListener("scroll", trackDirection, { passive: true });
    const frame = window.requestAnimationFrame(() => targets.forEach((target) => observer.observe(target)));
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", trackDirection);
      observer.disconnect();
    };
  }, []);

  return null;
}
