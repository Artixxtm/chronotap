"use client";

import React, { useRef, useEffect } from "react";
import { useLenis } from "lenis/react";
import useResponsive from "@/hooks/useResponsive";
import useIsPhone from "@/hooks/useIsPhone";

const lerp = (start, end, factor) => start + (end - start) * factor;

function roundNumber(num, decimals) {
  const factor = Math.pow(10, decimals);
  return Math.round(num * factor) / factor;
}

const getStaticDocumentTop = (el) => {
  let top = 0;
  while (el) {
    top += el.offsetTop;
    el = el.offsetParent;
  }
  return top;
};

const ParallaxImage = ({ children, className, parallaxEnabled = true }) => {
  const wrapperRef = useRef(null);
  const bounds = useRef(null);
  const currentTranslateY = useRef(0);
  const targetTranslateY = useRef(0);
  const rafId = useRef(null);
  const { isMobile } = useResponsive();
  const isPhone = useIsPhone();

  const updateTarget = (scroll) => {
    if (!bounds.current || !parallaxEnabled) return;
    const relativeScroll = scroll - bounds.current.top;
    const parallaxFactor = isMobile ? 0.15 : 0.2;
    targetTranslateY.current = relativeScroll * parallaxFactor;
  };

  useEffect(() => {
    const updateBounds = () => {
      if (wrapperRef.current) {
        bounds.current = { top: getStaticDocumentTop(wrapperRef.current) };
      }
    };

    updateBounds();
    window.addEventListener("resize", updateBounds);

    const animate = () => {
      if (wrapperRef.current && parallaxEnabled) {
        currentTranslateY.current = lerp(
          roundNumber(currentTranslateY.current, 6),
          roundNumber(targetTranslateY.current, 6),
          0.1
        );
        wrapperRef.current.style.transform = `translateY(${currentTranslateY.current}px)`;
      }
      rafId.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", updateBounds);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [parallaxEnabled]);

  useLenis(({ scroll }) => {
    if (!isPhone) updateTarget(scroll);
  });

  useEffect(() => {
    if (!isPhone) return;

    const onScroll = () => updateTarget(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isPhone, isMobile, parallaxEnabled]);

  return (
    <div
      ref={wrapperRef}
      className={className}
      style={{ willChange: "transform", transform: "translateY(0)" }}
    >
      {children}
    </div>
  );
};

export default ParallaxImage;
