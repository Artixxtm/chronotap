"use client";

import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { IoMdArrowDown } from "react-icons/io";
import { gsap } from "@/utils/gsap";
import { WAYS_SCENES } from "@/constants/ways";
import { useI18n } from "@/i18n/I18nProvider";
import { getWaysCopy } from "@/i18n/ways";

const BLUR_OUT = "blur(16px)";
const BLUR_CLEAR = "blur(0px)";

function setNavTheme(theme) {
  window.dispatchEvent(
    new CustomEvent("chronotap:nav-theme", { detail: { theme } }),
  );
}

function SceneCopy({ scene, comingSoon, copyRef, staticMode = false }) {
  return (
    <div
      ref={copyRef}
      className={
        staticMode
          ? "absolute inset-x-0 bottom-[7%] z-10 px-6 text-white md:bottom-[7%] md:px-10"
          : "ways-scene-copy pointer-events-none absolute inset-x-0 bottom-[7.5%] z-20 px-6 text-white md:bottom-[10%] md:px-10"
      }
    >
      <div className="flex w-full flex-col gap-2 md:gap-4">
        <div className="flex items-center gap-5 font-second text-xs tracking-wide text-white/72 md:text-base">
          <p className="">[ {scene.eyebrow} ]</p>
        </div>

        <div className="grid items-end gap-5 md:grid-cols-[minmax(0,1fr)_minmax(16rem,0.48fr)] md:gap-12 lg:gap-20">
          <h3 className="max-w-220 text-balance font-main text-[clamp(1.5rem,3.65vw,4rem)] font-medium leading-[1.03] tracking-[-0.035em] text-white">
            {scene.heading}
          </h3>

          <div className="pointer-events-auto flex max-w-md flex-col items-start gap-4 md:gap-5">
            <p className="max-w-md font-second text-sm leading-[1.45] tracking-[0.035em] text-white/78 md:text-base lg:text-lg">
              {scene.description}
            </p>
            <span
              aria-disabled="true"
              className="inline-flex cursor-default items-center font-main text-sm text-white/42 md:text-base"
            >
              <span className="border-b border-white/15 pb-1">
                {comingSoon}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ReducedMotionWays({ copy, scenes }) {
  return (
    <section id="ways" className="relative w-full bg-white text-black">
      <div
        data-nav-theme="dark"
        className="flex min-h-[82svh] items-center justify-center px-6 py-24 md:px-10"
      >
        <div className="mx-auto flex max-w-220 flex-col items-center text-center">
          <p className="font-second text-sm tracking-[0.12em] text-black/60 md:text-lg">
            {copy.intro.eyebrow}
          </p>
          <h2 className="mt-5 text-balance font-main text-[clamp(2rem,6vw,5.5rem)] font-medium leading-[1.03] tracking-[-0.04em]">
            {copy.intro.heading}
          </h2>
          <div className="mt-10 flex items-center gap-2 font-second text-sm tracking-[0.12em] text-black/45 md:text-base">
            <span>{copy.scrollDown}</span>
            <IoMdArrowDown aria-hidden="true" className="ways-scroll-arrow" />
          </div>
        </div>
      </div>

      <div className="bg-[#050505] py-[8svh]">
        {scenes.map((scene) => (
          <article
            key={scene.id}
            data-nav-theme="light"
            className="relative mx-auto min-h-[92svh] w-full max-w-450 overflow-hidden"
          >
            <div className="ways-media-vignette absolute inset-x-0 top-1/2 h-[82svh] -translate-y-1/2 overflow-hidden">
              <Image
                src={scene.image}
                alt={scene.alt}
                fill
                sizes="100vw"
                className="ways-scene-image object-cover"
                style={{
                  "--ways-object-position": scene.objectPosition,
                  "--ways-mobile-object-position": scene.mobileObjectPosition,
                }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/5 to-black/20" />
            </div>
            <SceneCopy
              scene={scene}
              comingSoon={copy.comingSoon}
              staticMode
            />
          </article>
        ))}
      </div>
    </section>
  );
}

export default function Ways() {
  const { locale } = useI18n();
  const copy = getWaysCopy(locale);
  const scenes = WAYS_SCENES.map((scene) => ({
    ...scene,
    ...copy.scenes[scene.id],
  }));
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  const sectionRef = useRef(null);
  const introRef = useRef(null);
  const introEyebrowRef = useRef(null);
  const introTitleRef = useRef(null);
  const introHintRef = useRef(null);
  const stageRef = useRef(null);
  const mediaRef = useRef(null);
  const layerRefs = useRef([]);
  const imageRefs = useRef([]);
  const copyRefs = useRef([]);

  useLayoutEffect(() => setMounted(true), []);

  const enableTimeline = mounted && !shouldReduceMotion;

  useLayoutEffect(() => {
    if (!enableTimeline) return;

    const section = sectionRef.current;
    const intro = introRef.current;
    const introParts = [
      introEyebrowRef.current,
      introTitleRef.current,
      introHintRef.current,
    ];
    const stage = stageRef.current;
    const media = mediaRef.current;
    const layers = layerRefs.current;
    const images = imageRefs.current;
    const copies = copyRefs.current;
    if (!section || !stage || layers.length !== WAYS_SCENES.length) return;

    let lastNavTheme = "dark";
    const syncNav = (timeline) => {
      const progress = timeline.progress();
      const nextTheme = progress > 0.045 && progress < 0.945 ? "light" : "dark";
      if (nextTheme !== lastNavTheme) {
        lastNavTheme = nextTheme;
        setNavTheme(nextTheme);
      }
    };

    const ctx = gsap.context(() => {
      gsap.set(section, { backgroundColor: "#ffffff" });
      gsap.set(introParts, { opacity: 1, filter: BLUR_CLEAR });
      gsap.set(stage, { autoAlpha: 0 });
      gsap.set(media, { opacity: 1, filter: BLUR_CLEAR, scale: 1 });
      gsap.set(layers, { autoAlpha: 0, "--reveal": "-14%" });
      gsap.set(layers[0], { autoAlpha: 1, "--reveal": "114%" });
      gsap.set(images, { yPercent: 3.5, scale: 1.075 });
      gsap.set(copies, { autoAlpha: 0, filter: BLUR_OUT, scale: 0.992 });

      const scrollVh = window.matchMedia("(max-width: 767px)").matches ? 720 : 830;
      const viewportHeight = () => document.documentElement.clientHeight;

      const tl = gsap.timeline({
        scrollTrigger: {
          id: "ways",
          trigger: section,
          start: "top top",
          end: () => `+=${(scrollVh / 100) * viewportHeight()}`,
          pin: section,
          scrub: 0.9,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onEnter: () => syncNav(tl),
          onEnterBack: () => syncNav(tl),
          onLeave: () => setNavTheme("dark"),
          onLeaveBack: () => setNavTheme("dark"),
        },
        defaults: { ease: "none" },
        onUpdate: () => syncNav(tl),
      });

      tl.to({}, { duration: 0.62 })
        .to(
          introParts,
          {
            opacity: 0,
            filter: "blur(18px)",
            stagger: 0.055,
            duration: 0.58,
            ease: "power2.inOut",
          },
          ">",
        )
        .to(
          section,
          { backgroundColor: "#050505", duration: 0.72, ease: "power2.inOut" },
          "<-0.42",
        )
        .set(intro, { autoAlpha: 0 })
        .to(stage, { autoAlpha: 1, duration: 0.62, ease: "power2.out" }, "<-0.12")
        .to(
          images[0],
          { yPercent: -2.5, scale: 1.035, duration: 1.8, ease: "sine.inOut" },
          "<-0.5",
        )
        .to(
          copies[0],
          {
            autoAlpha: 1,
            filter: BLUR_CLEAR,
            scale: 1,
            duration: 0.62,
            ease: "power2.out",
          },
          1.46,
        )
        .to({}, { duration: 0.74 });

      for (let index = 1; index < WAYS_SCENES.length; index += 1) {
        const previousCopy = copies[index - 1];
        const nextCopy = copies[index];
        const previousImage = images[index - 1];
        const nextImage = images[index];
        const nextLayer = layers[index];
        const transition = `scene-${index}`;

        tl.addLabel(transition)
          .to(
            previousCopy,
            {
              autoAlpha: 0,
              filter: BLUR_OUT,
              scale: 0.993,
              duration: 0.36,
              ease: "power2.in",
            },
            transition,
          )
          .set(nextLayer, { autoAlpha: 1 }, transition)
          .fromTo(
            nextLayer,
            { "--reveal": "-14%" },
            {
              "--reveal": "114%",
              duration: 1.28,
              ease: "power2.inOut",
            },
            transition,
          )
          .fromTo(
            nextImage,
            { yPercent: 4.5, scale: 1.085, filter: "blur(7px)" },
            {
              yPercent: -2.2,
              scale: 1.035,
              filter: BLUR_CLEAR,
              duration: 1.48,
              ease: "sine.inOut",
            },
            transition,
          )
          .to(
            previousImage,
            { yPercent: -5, scale: 1.025, duration: 1.1, ease: "sine.inOut" },
            transition,
          )
          .to(
            nextCopy,
            {
              autoAlpha: 1,
              filter: BLUR_CLEAR,
              scale: 1,
              duration: 0.58,
              ease: "power2.out",
            },
            `${transition}+=0.77`,
          )
          .to({}, { duration: 0.72 });
      }

      tl.to(
        copies.at(-1),
        {
          autoAlpha: 0,
          filter: "blur(18px)",
          scale: 0.992,
          duration: 0.48,
          ease: "power2.in",
        },
        ">",
      )
        .to(
          media,
          {
            opacity: 0,
            filter: "blur(16px)",
            scale: 0.985,
            duration: 0.76,
            ease: "power2.inOut",
          },
          "<-0.2",
        )
        .to(stage, { autoAlpha: 0, duration: 0.35 }, ">-0.1")
        .to(
          section,
          { backgroundColor: "#ffffff", duration: 0.68, ease: "power2.inOut" },
          "<-0.2",
        )
        .to({}, { duration: 0.35 });
    }, section);

    return () => {
      ctx.revert();
      setNavTheme("dark");
    };
  }, [enableTimeline]);

  if (shouldReduceMotion) {
    return <ReducedMotionWays copy={copy} scenes={scenes} />;
  }

  return (
    <section
      ref={sectionRef}
      id="ways"
      data-nav-theme="dark"
      className="relative isolate h-dvh w-full overflow-hidden bg-white text-black"
    >
      <div
        ref={introRef}
        className="absolute inset-0 z-20 flex items-center justify-center px-6 py-24 md:px-10"
      >
        <div className="mx-auto flex max-w-240 flex-col items-center text-center">
          <p
            ref={introEyebrowRef}
            className="font-second text-sm tracking-wide text-black/80 md:text-lg"
          >
            {copy.intro.eyebrow}
          </p>
          <h2
            ref={introTitleRef}
            className="mt-5 text-balance font-main text-[clamp(2rem,6vw,5.5rem)] font-medium leading-[1.03] tracking-[-0.04em]"
          >
            {copy.intro.heading}
          </h2>
          <div
            ref={introHintRef}
            className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap font-second text-sm tracking-wide text-black/45 md:bottom-10 md:text-base"
          >
            <span>
              ( {copy.scrollDown} <span className="ways-scroll-arrow">↓</span> )
            </span>
          </div>
        </div>
      </div>

      <div ref={stageRef} className="invisible absolute inset-0 z-10 bg-[#050505]">
        <div
          ref={mediaRef}
          className="ways-media-vignette absolute inset-x-0 top-1/2 h-[82dvh] -translate-y-1/2 overflow-hidden md:h-[84dvh]"
        >
          {scenes.map((scene, index) => (
            <div
              key={scene.id}
              ref={(node) => {
                layerRefs.current[index] = node;
              }}
              className="ways-scene-layer invisible absolute inset-0"
              style={{ zIndex: index + 1 }}
            >
              <Image
                ref={(node) => {
                  imageRefs.current[index] = node;
                }}
                src={scene.image}
                alt={scene.alt}
                fill
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
                sizes="100vw"
                className="ways-scene-image object-cover will-change-transform"
                style={{
                  "--ways-object-position": scene.objectPosition,
                  "--ways-mobile-object-position": scene.mobileObjectPosition,
                }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/78 via-black/5 to-black/18" />
              <div className="ways-film-grain absolute inset-0 opacity-[0.08] mix-blend-soft-light" />
            </div>
          ))}
        </div>

        {scenes.map((scene, index) => (
          <SceneCopy
            key={scene.id}
            scene={scene}
            comingSoon={copy.comingSoon}
            copyRef={(node) => {
              copyRefs.current[index] = node;
            }}
          />
        ))}
      </div>
    </section>
  );
}
