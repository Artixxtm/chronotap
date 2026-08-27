"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { useReducedMotion } from "framer-motion";
import { gsap, ScrollTrigger } from "@/utils/gsap";
import { setScrollNormalizer } from "@/lib/scrollNormalizer";
import useIsPhone from "@/hooks/useIsPhone";
import { usePathname } from "next/navigation";
import Nav from "@/components/Nav";

import "lenis/dist/lenis.css";

function ScrollTriggerSync() {
  useLenis(ScrollTrigger.update);
  return null;
}

export default function LayoutWrapper({ children }) {
  const lenisRef = useRef(null);
  const isPhone = useIsPhone();
  const shouldReduceMotion = useReducedMotion();
  const pathname = usePathname();
  const hideMenu = /^\/(?:(?:ua|ru|pl)\/)?(?:privacy|shop|faq|press)$/.test(pathname);

  useEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    return () => {
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  useLayoutEffect(() => {
    let secondFrame = 0;

    const resetScroll = () => {
      const lenis = lenisRef.current?.lenis;
      lenis?.resize();
      if (!isPhone) {
        lenis?.scrollTo(0, { immediate: true, force: true });
      }
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    resetScroll();

    const firstFrame = requestAnimationFrame(() => {
      resetScroll();
      secondFrame = requestAnimationFrame(() => {
        resetScroll();
        ScrollTrigger.refresh();
      });
    });

    return () => {
      cancelAnimationFrame(firstFrame);
      cancelAnimationFrame(secondFrame);
    };
  }, [pathname]); // isPhone intentionally excluded: resizing must not reset the page.

  useEffect(() => {
    setScrollNormalizer(null);

    if (isPhone || shouldReduceMotion) {
      ScrollTrigger.refresh();
      return;
    }

    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      setScrollNormalizer(null);
    };
  }, [isPhone, shouldReduceMotion]);

  const content = (
    <>
      {!hideMenu && <Nav />}
      {children}
    </>
  );

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        duration: shouldReduceMotion ? 0 : 1.05,
        easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
        lerp: shouldReduceMotion ? 1 : 0.18,
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: !isPhone && !shouldReduceMotion,
        syncTouch: false,
        touchMultiplier: 1,
        autoRaf: false,
        prevent: (node) => node.id === "modalScroll",
      }}
    >
      <ScrollTriggerSync />
      {content}
    </ReactLenis>
  );
}
