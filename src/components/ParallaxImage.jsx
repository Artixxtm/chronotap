"use client";

import React, { useRef, useEffect } from "react";
import { useLenis } from "lenis/react";
import { useReducedMotion } from "framer-motion";
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
  const shouldReduceMotion = useReducedMotion();
  const disableParallax = !parallaxEnabled || isPhone || shouldReduceMotion;

  const updateTarget = (scroll) => {
    if (!bounds.current || disableParallax) return;
    const relativeScroll = scroll - bounds.current.top;
    const parallaxFactor = isMobile ? 0.15 : 0.2;
    targetTranslateY.current = relativeScroll * parallaxFactor;
  };

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    if (disableParallax) {
      wrapper.style.transform = "translateY(0)";
      return;
    }

    const updateBounds = () => {
      bounds.current = { top: getStaticDocumentTop(wrapper) };
    };

    updateBounds();
    window.addEventListener("resize", updateBounds);

    let isIntersecting = false;
    let isDocumentVisible = !document.hidden;

    const animate = () => {
      if (!isIntersecting || !isDocumentVisible) {
        rafId.current = null;
        return;
      }

      currentTranslateY.current = lerp(
        roundNumber(currentTranslateY.current, 6),
        roundNumber(targetTranslateY.current, 6),
        0.1,
      );
      wrapper.style.transform = `translateY(${currentTranslateY.current}px)`;
      rafId.current = requestAnimationFrame(animate);
    };

    const stop = () => {
      if (rafId.current === null) return;
      cancelAnimationFrame(rafId.current);
      rafId.current = null;
    };

    const start = () => {
      if (
        rafId.current !== null ||
        !isIntersecting ||
        !isDocumentVisible
      )
        return;
      rafId.current = requestAnimationFrame(animate);
    };

    const syncPlayback = () => {
      if (isIntersecting && isDocumentVisible) start();
      else stop();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isIntersecting = entry.isIntersecting;
        syncPlayback();
      },
      { rootMargin: "160px 0px", threshold: 0.01 },
    );
    observer.observe(wrapper);

    const handleVisibilityChange = () => {
      isDocumentVisible = !document.hidden;
      syncPlayback();
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("resize", updateBounds);
      stop();
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [disableParallax]);

  useLenis(({ scroll }) => {
    if (!disableParallax) updateTarget(scroll);
  });

  return (
    <div
      ref={wrapperRef}
      className={className}
      style={{
        willChange: disableParallax ? "auto" : "transform",
        transform: "translateY(0)",
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxImage;
