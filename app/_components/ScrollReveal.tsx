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
            target.classList.add("is-revealed");
            return;
          }
          if (scrollDirection === "down" && entry.boundingClientRect.top < 0) {
            target.classList.remove("is-revealed", "reveal-up");
          }
        });
      },
      { threshold: 0.01, rootMargin: "0px 0px 8%" },
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
