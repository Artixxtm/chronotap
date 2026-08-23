"use client";

import { useEffect } from "react";
import { useLenis } from "lenis/react";
import { getScrollNormalizer } from "@/lib/scrollNormalizer";
import useIsPhone from "@/hooks/useIsPhone";

export default function useOverlayScrollLock(isOpen) {
  const lenis = useLenis();
  const isPhone = useIsPhone();

  useEffect(() => {
    if (!isOpen) return;

    const html = document.documentElement;
    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = document.body.style.overflow;

    html.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    if (!isPhone) {
      lenis?.stop();
      getScrollNormalizer()?.disable();
    }

    return () => {
      html.style.overflow = prevHtmlOverflow;
      document.body.style.overflow = prevBodyOverflow;
      if (!isPhone) {
        lenis?.start();
        getScrollNormalizer()?.enable();
      }
    };
  }, [isOpen, isPhone, lenis]);
}
