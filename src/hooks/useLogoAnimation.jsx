"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "@/utils/gsap";

const CONFIG = {
  scrollEnd: "+=60%",
  scrub: 1,
  dropY: "20%",
  blurPx: 8,

  desktop: { tOverlapRatio: 0.606, tmOverlapRatio: 0.667 },
  mobile: { tOverlapRatio: 0.614, tmOverlapRatio: 0.714 },
};

function buildTimeline(refs, onReady) {
  const {
    cRef,
    hronoWrapRef,
    hronoRef,
    tSvgRef,
    apWrapRef,
    apRef,
    tmRef,
  } = refs;

  const isMd = window.matchMedia("(min-width: 768px)").matches;
  const cfg = isMd ? CONFIG.desktop : CONFIG.mobile;
  const tContainer = tSvgRef.current.parentElement;

  gsap.set([hronoWrapRef.current, apWrapRef.current, tContainer], {
    clearProps: "width",
  });

  requestAnimationFrame(() => {
    const hronoNaturalW = hronoWrapRef.current.getBoundingClientRect().width;
    const apNaturalW = apWrapRef.current.getBoundingClientRect().width;

    const tWidthStart = tContainer.getBoundingClientRect().width;
    const tWidthEnd = cRef.current.getBoundingClientRect().width;

    const tOverlapPx = tWidthStart * cfg.tOverlapRatio;
    const tmOverlapPx = tOverlapPx * cfg.tmOverlapRatio;

    const boxHeightPx = tContainer.getBoundingClientRect().height;

    const tYStart = -(boxHeightPx - tWidthStart) / 2;
    const tFinalGlyphH = 3213 * (tWidthEnd / 2936);
    const tYEnd = (tFinalGlyphH - boxHeightPx) / 2;

    gsap.set([hronoWrapRef.current, apWrapRef.current], {
      overflow: "hidden",
      display: "inline-flex",
      alignItems: "center",
      flexShrink: 0,
    });

    gsap.set([hronoRef.current, apRef.current], {
      opacity: 1,
      filter: "blur(0px)",
      y: "0%",
      display: "inline-block",
    });

    gsap.set(tSvgRef.current, {
      width: tWidthStart,
      height: "100%",
      rotate: -90,
      x: 0,
      y: tYStart,
      transformOrigin: "center center",
    });
    gsap.set(tContainer, { width: tWidthStart, overflow: "visible" });

    gsap.set(tmRef.current, { x: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: CONFIG.scrollEnd,
        scrub: CONFIG.scrub,
      },
    });

    tl.fromTo(
      hronoRef.current,
      { opacity: 1, filter: "blur(0px)", y: "0%" },
      {
        opacity: 0,
        filter: `blur(${CONFIG.blurPx}px)`,
        y: CONFIG.dropY,
        ease: "power2.in",
        duration: 0.32,
      },
      0,
    );
    tl.fromTo(
      apRef.current,
      { opacity: 1, filter: "blur(0px)", y: "0%" },
      {
        opacity: 0,
        filter: `blur(${CONFIG.blurPx}px)`,
        y: CONFIG.dropY,
        ease: "power2.in",
        duration: 0.32,
      },
      0,
    );

    tl.fromTo(
      hronoWrapRef.current,
      { width: hronoNaturalW },
      { width: 0, ease: "power3.inOut", duration: 0.5 },
      0.28,
    );
    tl.fromTo(
      apWrapRef.current,
      { width: apNaturalW },
      { width: 0, ease: "power3.inOut", duration: 0.5 },
      0.28,
    );

    tl.fromTo(
      tSvgRef.current,
      { rotate: -90, width: tWidthStart, x: 0, y: tYStart },
      {
        rotate: 0,
        width: tWidthEnd,
        x: -tOverlapPx,
        y: tYEnd,
        ease: "power3.inOut",
        duration: 0.78,
      },
      0.22,
    );

    tl.fromTo(
      tContainer,
      { width: tWidthStart },
      { width: tWidthEnd, ease: "power3.inOut", duration: 0.78 },
      0.22,
    );

    tl.fromTo(
      tmRef.current,
      { x: 0 },
      { x: -tmOverlapPx, ease: "power3.inOut", duration: 0.78 },
      0.22,
    );

    onReady(tl);
  });
}

export function useLogoAnimation({
  wrapperRef,
  cRef,
  hronoWrapRef,
  hronoRef,
  tSvgRef,
  apWrapRef,
  apRef,
  tmRef,
}) {
  const tlRef = useRef(null);

  useLayoutEffect(() => {
    if (
      !wrapperRef.current ||
      !cRef.current ||
      !hronoWrapRef.current ||
      !hronoRef.current ||
      !tSvgRef.current ||
      !apWrapRef.current ||
      !apRef.current ||
      !tmRef.current
    )
      return;

    const refs = {
      wrapperRef,
      cRef,
      hronoWrapRef,
      hronoRef,
      tSvgRef,
      apWrapRef,
      apRef,
      tmRef,
    };

    let cancelled = false;
    let lastWidth = window.innerWidth;
    let resizeTimer;

    gsap.fromTo(
      wrapperRef.current,
      { opacity: 0 },
      { opacity: 1, ease: "power3.inOut", duration: 0.2 },
    );

    const handleReady = (newTl) => {
      if (cancelled) {
        newTl.scrollTrigger?.kill();
        newTl.kill();
        return;
      }
      tlRef.current = newTl;
    };

    const init = () => {
      if (cancelled) return;
      buildTimeline(refs, handleReady);
    };

    if (typeof document !== "undefined" && document.fonts?.ready) {
      document.fonts.ready.then(init);
    } else {
      init();
    }

    const handleResize = () => {
      if (window.innerWidth === lastWidth) return;
      lastWidth = window.innerWidth;

      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (!tlRef.current) return;
        tlRef.current.scrollTrigger?.kill();
        tlRef.current.kill();
        buildTimeline(refs, (newTl) => {
          handleReady(newTl);
          ScrollTrigger.refresh();
        });
      }, 150);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelled = true;
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
      tlRef.current?.scrollTrigger?.kill();
      tlRef.current?.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}