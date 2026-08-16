"use client";

import { useEffect, useState } from "react";
import { ScrollTrigger } from "@/utils/gsap";

const NAV_TRIGGER_OFFSET = 140;

export function useNavTheme(defaultTheme = "light") {
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("[data-nav-theme]"));
    if (!sections.length) return;

    const onThemeOverride = (event) => {
      const next = event.detail?.theme;
      if (next === "light" || next === "dark") {
        setTheme((prev) => (prev === next ? prev : next));
      }
    };

    window.addEventListener("chronotap:nav-theme", onThemeOverride);

    const setFor = (section) => {
      const next = section.dataset.navTheme;
      setTheme((prev) => (prev === next ? prev : next));
    };

    const triggers = sections.map((section) =>
      ScrollTrigger.create({
        trigger: section,
        start: `top top+=${NAV_TRIGGER_OFFSET}`,
        end: `bottom top+=${NAV_TRIGGER_OFFSET}`,
        onEnter: () => setFor(section),
        onEnterBack: () => setFor(section),
      }),
    );

    const initial = sections.find((section) => {
      const { top, bottom } = section.getBoundingClientRect();
      return top <= NAV_TRIGGER_OFFSET && bottom >= NAV_TRIGGER_OFFSET;
    });
    if (initial) setFor(initial);

    return () => {
      window.removeEventListener("chronotap:nav-theme", onThemeOverride);
      triggers.forEach((t) => t.kill());
    };
  }, []);

  return theme;
}
