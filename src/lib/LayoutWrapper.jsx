"use client";

import { useEffect, useRef } from "react";
import { ReactLenis } from "lenis/react";
import { gsap, ScrollTrigger } from "@/utils/gsap";
import { setScrollNormalizer } from "@/lib/scrollNormalizer";
import { usePathname } from "next/navigation";
import Nav from "@/components/Nav";

import "lenis/dist/lenis.css";

export default function LayoutWrapper({ children }) {
  const lenisRef = useRef(null);
  const pathname = usePathname();
  const hideMenu = /^\/(?:(?:ua|ru|pl)\/)?(?:privacy|shop)$/.test(pathname);

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    const normalizer = ScrollTrigger.normalizeScroll({
      type: "touch",
      allowNestedScroll: true,
    });
    setScrollNormalizer(normalizer);

    return () => {
      gsap.ticker.remove(update);
      normalizer?.kill?.();
      setScrollNormalizer(null);
    };
  }, []);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      onScroll={ScrollTrigger.update}
      options={{
        duration: 2,
        easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
        lerp: 0.1,
        direction: "vertical",
        gestureDirection: "vertical",
        smooth: true,
        smoothTouch: false,
        touchMultiplier: 2,
        autoRaf: false,
        prevent: (node) => node.id === "modalScroll",
      }}
    >
      {!hideMenu && <Nav />}
      {children}
    </ReactLenis>
  );
}
