"use client";

import {
  forwardRef,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useRef,
} from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FADE_UP_CONTAINER, FADE_UP_ITEM } from "@/constants/animations";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useI18n } from "@/i18n/I18nProvider";

const ORBIT_DURATION_MS = 110000;
const ORBIT_SQUEEZE_Y = 0.84;

const ANGLE_JITTER = 0.08;
const RADIUS_JITTER = 0.05;

const PILL_CLASSES =
  "whitespace-nowrap rounded-full bg-white px-3.5 font-second tracking-wide text-black md:px-4 text-black/60 max-[360px]:text-xs text-sm md:text-lg";

function usePillJitter(count) {
  return useMemo(
    () =>
      Array.from({ length: count }, () => ({
        angle: Math.random() * 2 - 1,
        radius: Math.random() * 2 - 1,
      })),
    [count],
  );
}

function useOrbit(containerRef, itemRefs, count, jitter, disabled) {
  useLayoutEffect(() => {
    if (disabled) return;
    const container = containerRef.current;
    if (!container) return;

    let radiusX = 0;
    let radiusY = 0;
    let raf = 0;
    let lastTime = performance.now();
    let elapsed = 0;
    let paused = false;

    const measure = () => {
      radiusX = container.offsetWidth * 0.55;
      radiusY = radiusX * ORBIT_SQUEEZE_Y;
    };
    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(container);

    const angleStep = 360 / count;

    const tick = (now) => {
      const delta = now - lastTime;
      lastTime = now;

      if (!paused) {
        elapsed = (elapsed + delta) % ORBIT_DURATION_MS;
        const baseAngle = (elapsed / ORBIT_DURATION_MS) * 360;

        itemRefs.current.forEach((el, i) => {
          if (!el) return;
          const j = jitter[i];
          const angle =
            baseAngle + angleStep * i + j.angle * ANGLE_JITTER * angleStep - 90;
          const radiusScale = 1 + j.radius * RADIUS_JITTER;
          const rad = (angle * Math.PI) / 180;
          const x = radiusX * radiusScale * Math.cos(rad);
          const y = radiusY * radiusScale * Math.sin(rad);
          el.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
        });
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [containerRef, itemRefs, count, jitter, disabled]);
}

const What = forwardRef(function What({ children }, ref) {
  const { messages } = useI18n();
  const bullets = messages.what.bullets;
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const headingTopRef = useRef(null);
  const headingBottomRef = useRef(null);
  const subtitleRef = useRef(null);
  const pillsWrapRef = useRef(null);
  const pillsMobileWrapRef = useRef(null);
  const phoneRef = useRef(null);
  const orbitRef = useRef(null);
  const capsuleDesktopRef = useRef(null);
  const capsuleMobileRef = useRef(null);
  const pillRefs = useRef([]);
  pillRefs.current = [];

  const jitter = usePillJitter(bullets.length);
  useOrbit(orbitRef, pillRefs, bullets.length, jitter, shouldReduceMotion);

  useImperativeHandle(
    ref,
    () => ({
      section: sectionRef.current,
      card: cardRef.current,
      headingTop: headingTopRef.current,
      headingBottom: headingBottomRef.current,
      subtitle: subtitleRef.current,
      pillsDesktop: pillsWrapRef.current,
      pillsMobile: pillsMobileWrapRef.current,
      phone: phoneRef.current,
      capsuleDesktop: capsuleDesktopRef.current,
      capsuleMobile: capsuleMobileRef.current,
    }),
    [],
  );

  return (
    <section
      ref={sectionRef}
      data-nav-theme="dark"
      id="what"
      className="relative w-full h-dvh overflow-hidden flex justify-center flex-col p-6 md:p-10"
    >
      <div
        ref={cardRef}
        className="w-full min-h-full md:h-full bg-neutral-200 relative flex lg:flex-row flex-col lg:items-center justify-between flex-1 gap-4 md:gap-0 rounded-2xl md:rounded-3xl lg:rounded-[2.5rem] lg:p-10 lg:py-0 md:py-14 py-8 p-6"
      >
        <h2
          ref={headingTopRef}
          className={`order-1 md:order-0 font-main font-medium relative md:-top-8 text-black text-left ${pathname.includes("/ua") ? "max-[360px]:text-[clamp(1rem,5.2vw,2.25rem)] text-[clamp(1.5rem,5.45vw,2.25rem)]" : pathname.includes("/ru") || pathname.includes("/pl") ? "max-[360px]:text-[clamp(1rem,5.3vw,2.25rem)] text-[clamp(1.3rem,5.4vw,2.25rem)]" : "max-[360px]:text-[clamp(1.35rem,5.6vw,2.25rem)] text-[clamp(1.8rem,5.6vw,2.25rem)]"} leading-[135%] md:text-3xl lg:text-[clamp(1.75rem,6dvh,2.25rem)] 2xl:text-5xl md:leading-[130%]`}
        >
          {messages.what.headingTop[0]}
          <br />
          {messages.what.headingTop[1]}
        </h2>

        <div className="order-3 md:order-0 md:absolute md:left-1/2 md:top-1/2 md:-translate-1/2 w-full md:w-fit flex items-center justify-center">
          {/* Desktop / tablet */}
          <div className="hidden md:flex md:items-center md:justify-center">
            {shouldReduceMotion ? (
              <div className="flex flex-col items-center gap-5">
                <Image
                  src="/capsule.webp"
                  alt={messages.what.capsuleAlt}
                  width={0}
                  height={0}
                  sizes="(min-width: 768px) 280px, 224px"
                  draggable={false}
                  loading="lazy"
                  className="h-auto w-40 select-none object-contain"
                />
                <div className="flex max-w-85 flex-wrap items-center justify-center gap-2">
                  {bullets.map((bullet) => (
                    <div key={bullet} className={PILL_CLASSES}>
                      <span className="relative top-px select-none">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div
                ref={orbitRef}
                className="relative flex items-center justify-center"
                style={{
                  width: "clamp(260px, min(32vw, 58dvh), 460px)",
                  height: "clamp(260px, min(32vw, 58dvh), 460px)",
                }}
              >
                <Image
                  src="/capsule.webp"
                  alt={messages.what.capsuleAlt}
                  width={0}
                  ref={capsuleDesktopRef}
                  height={0}
                  sizes="(min-width: 768px) 280px, 224px"
                  draggable={false}
                  loading="lazy"
                  className="relative z-10 h-auto select-none object-contain"
                  style={{
                    width: "clamp(150px, min(23vw, 38dvh), 280px)",
                  }}
                />

                <div ref={pillsWrapRef} className="absolute inset-0">
                  {bullets.map((bullet, i) => (
                    <span
                      key={bullet}
                      ref={(el) => (pillRefs.current[i] = el)}
                      className={`absolute left-1/2 top-1/2 will-change-transform ${PILL_CLASSES}`}
                    >
                      <span className="relative top-px select-none">
                        {bullet}
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="flex w-full max-w-70 flex-col items-center gap-5 md:hidden">
            <Image
              src="/capsule.webp"
              alt={messages.what.capsuleAlt}
              width={0}
              ref={capsuleMobileRef}
              height={0}
              sizes="(min-width: 768px) 280px, 224px"
              draggable={false}
              loading="lazy"
              className="h-auto w-[clamp(8rem,min(45vw,34dvh),14rem)] select-none object-contain"
            />
            <motion.div
              ref={pillsMobileWrapRef}
              initial={shouldReduceMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={FADE_UP_CONTAINER}
              className="flex w-full max-w-70 flex-wrap items-center justify-center gap-2 sm:gap-2.5"
            >
              {bullets.map((bullet) => (
                <motion.span
                  key={bullet}
                  variants={FADE_UP_ITEM}
                  className={PILL_CLASSES}
                >
                  <span className="relative top-px select-none">{bullet}</span>
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>

        <p
          ref={subtitleRef}
          className="order-2 md:order-0 h-fit w-full md:w-fit text-center font-second md:absolute md:left-1/2 md:bottom-[18.5%] lg:bottom-[12.5%] md:-translate-x-1/2 text-black/60 md:text-base text-sm tracking-wide"
        >
          {messages.what.subtitle}
        </p>

        <h2
          ref={headingBottomRef}
          className={`order-4 md:order-0 font-main font-medium text-black relative md:-bottom-8 text-right ${pathname.includes("/ua") ? "max-[360px]:text-[clamp(1rem,5.2vw,2.25rem)] text-[clamp(1.5rem,5.45vw,2.25rem)]" : pathname.includes("/ru") || pathname.includes("/pl") ? "max-[360px]:text-[clamp(1rem,5.3vw,2.25rem)] text-[clamp(1.3rem,5.4vw,2.25rem)]" : "max-[360px]:text-[clamp(1.35rem,5.6vw,2.25rem)] text-[clamp(1.8rem,5.6vw,2.25rem)]"} leading-[135%] md:text-3xl lg:text-[clamp(1.75rem,6dvh,2.25rem)] 2xl:text-5xl md:leading-[130%]`}
        >
          {messages.what.headingBottom[0]}
          <br />
          {messages.what.headingBottom[1]}
        </h2>

        {children}
      </div>

      <Image
        ref={phoneRef}
        src="/phone.webp"
        alt={messages.what.phoneAlt}
        width={0}
        height={0}
        sizes="100vw"
        draggable={false}
        className="absolute -bottom-[27%] left-1/2 h-auto w-[min(62vw,300px)] -translate-x-1/2 select-none object-contain md:w-[clamp(140px,min(25vw,42dvh),350px)] customDropShadow"
      />

      <div className="absolute w-full md:h-12 h-8 bg-linear-0 from-white from-15% z-4 to-transparent bottom-0 left-0 pointer-events-none" />
    </section>
  );
});

export default What;
