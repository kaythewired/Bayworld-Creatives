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
