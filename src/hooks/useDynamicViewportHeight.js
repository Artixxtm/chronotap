"use client";

import { useEffect } from "react";

// Держит --app-vh синхронизированным с реальной высотой visual viewport.
// В отличие от CSS `dvh`, VisualViewport API на Android обновляется
// сразу при сворачивании/разворачивании адресной строки, без задержки
// на пересчёт layout — поэтому это единственный источник правды
// как для CSS-высоты панели, так и для getBoundingClientRect() в JS.
export default function useDynamicViewportHeight() {
  useEffect(() => {
    const root = document.documentElement;
    const vv = window.visualViewport;

    const update = () => {
      const h = vv?.height ?? window.innerHeight;
      root.style.setProperty("--app-vh", `${h}px`);
    };

    update();

    vv?.addEventListener("resize", update);
    vv?.addEventListener("scroll", update);
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);

    return () => {
      vv?.removeEventListener("resize", update);
      vv?.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, []);
}