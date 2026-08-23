"use client";

import { useCallback } from "react";
import { useLenis } from "lenis/react";
import useIsPhone from "@/hooks/useIsPhone";

function resolveScrollTop(target) {
  if (typeof target === "number") return target;

  const element =
    typeof target === "string" ? document.querySelector(target) : target;

  if (!element) return null;
  return element.getBoundingClientRect().top + window.scrollY;
}

export default function useAppScroll() {
  const lenis = useLenis();
  const isPhone = useIsPhone();

  const scrollTo = useCallback(
    (target, options = {}) => {
      if (!isPhone && lenis) {
        lenis.start();
        lenis.scrollTo(target, options);
        return;
      }

      const top = resolveScrollTop(target);
      if (top === null) return;

      window.scrollTo({
        top,
        left: 0,
        behavior: options.immediate ? "auto" : "smooth",
      });
    },
    [isPhone, lenis],
  );

  return { isPhone, lenis, scrollTo };
}
