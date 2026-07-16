"use client";

import { useEffect, useState, type CSSProperties } from "react";

type Spark = { id: number; x: number; y: number; color: string };

const colors = ["#67c878", "#d8f2d8", "#ffffff", "#a5d8a8"];

export function PlayfulInteractions() {
  const [sparks, setSparks] = useState<Spark[]>([]);

  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animationFrame = 0;
    let pointerX = 0;
    let pointerY = 0;
    let lastScrollY = window.scrollY;
    let lastScatterAt = 0;
    let headlineTimer = 0;

    const paintPointer = () => {
      root.style.setProperty("--playful-pointer-x", `${pointerX}px`);
      root.style.setProperty("--playful-pointer-y", `${pointerY}px`);
      animationFrame = 0;
    };

    const onMove = (event: PointerEvent) => {
      if (reducedMotion.matches || event.pointerType === "touch") return;
      pointerX = event.clientX;
      pointerY = event.clientY;
      if (!animationFrame) animationFrame = window.requestAnimationFrame(paintPointer);
    };

    const onDown = (event: PointerEvent) => {
      if (reducedMotion.matches || event.pointerType === "touch") return;
      const id = Date.now();
      const spark = { id, x: event.clientX, y: event.clientY, color: colors[id % colors.length] };
      setSparks((current) => [...current.slice(-7), spark]);
      window.setTimeout(() => setSparks((current) => current.filter((item) => item.id !== id)), 760);
    };

    const onScroll = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight;
      const progress = available > 0 ? window.scrollY / available : 0;
      root.style.setProperty("--scroll-progress", String(progress));

      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY + 10;
      const scrollingUp = currentScrollY < lastScrollY - 10;
      if (scrollingUp) root.classList.add("scrolling-up");
      if (scrollingDown) root.classList.remove("scrolling-up");
      const now = Date.now();
      if (!reducedMotion.matches && scrollingDown && now - lastScatterAt > 1100) {
        lastScatterAt = now;
        root.classList.remove("headline-scatter-active");
        void root.offsetWidth;
        root.classList.add("headline-scatter-active");
        window.clearTimeout(headlineTimer);
        headlineTimer = window.setTimeout(() => root.classList.remove("headline-scatter-active"), 1500);
      }
      lastScrollY = currentScrollY;
    };

    onScroll();
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("scroll", onScroll);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      window.clearTimeout(headlineTimer);
      root.classList.remove("headline-scatter-active");
      root.classList.remove("scrolling-up");
    };
  }, []);

  return (
    <div className="playful-interactions" aria-hidden="true">
      <span className="playful-pointer-glow" />
      <span className="playful-scroll-meter" />
      {sparks.map((spark) => (
        <span
          className="playful-spark"
          key={spark.id}
          style={{ "--spark-x": `${spark.x}px`, "--spark-y": `${spark.y}px`, "--spark-color": spark.color } as CSSProperties}
        />
      ))}
    </div>
  );
}
