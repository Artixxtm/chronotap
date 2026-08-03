import { gsap, ScrollTrigger } from "@/utils/gsap";
import { HOW_ANIMATION, HOW_STEPS, HOW_TOTAL_SCROLL_VH } from "@/constants/how";

ScrollTrigger.config({ ignoreMobileResize: true });

export function buildHowTimeline({ whatHandle, overlayHandle, onStepChange }) {
  const {
    section,
    card,
    headingTop,
    headingBottom,
    subtitle,
    pillsDesktop,
    pillsMobile,
    phone,
  } = whatHandle;
  const { scrollDown, ring, counter, steps } = overlayHandle;
  const cfg = HOW_ANIMATION;
  const seg = cfg.segmentScrollVh;
  const pills = [pillsDesktop, pillsMobile];
  const blurIn = `blur(${cfg.text.blurAmount}px)`;
  const blurOut = "blur(0px)";

  if (!section || !card || !steps?.length) return null;

  const vh = (value) => (value / 100) * document.documentElement.clientHeight;

  gsap.set([headingTop, headingBottom, subtitle], {
    opacity: 1,
    y: 0,
    filter: blurOut,
  });
  gsap.set(subtitle, { xPercent: -50, x: 0 });
  gsap.set(pills, { opacity: 1 });
  gsap.set(scrollDown, { opacity: 0, y: -10, filter: blurIn });
  gsap.set(steps, { opacity: 0, y: cfg.text.fadeDistance, filter: blurIn });
  gsap.set(counter, { opacity: 0 });
  gsap.set(ring, { opacity: 0, scale: 0.8, xPercent: -50, yPercent: -50 });

  gsap.set(phone, {
    top: "50%",
    left: "50%",
    bottom: "auto",
    xPercent: -50,
    x: 0,
    yPercent: 0,
    opacity: 1,
    y: () => vh(cfg.phone.startOffsetVh),
    rotate: cfg.phone.tiltFromDeg,
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      id: "how",
      trigger: section,
      start: cfg.pinStart,
      end: () => "+=" + vh(HOW_TOTAL_SCROLL_VH),
      pin: section,
      scrub: cfg.scrub,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      snap: {
        snapTo: (value) => {
          const labels = tl.labels;
          const duration = tl.duration();
          const currentTime = value * duration;

          const phoneStart = labels.settled;
          const phoneEnd = labels.tap;
          if (
            phoneStart != null &&
            phoneEnd != null &&
            currentTime > phoneStart &&
            currentTime < phoneEnd
          )
            return value;

          const lastSnapTime = labels.relive;
          if (lastSnapTime == null) return value;

          if (currentTime > lastSnapTime) return value;

          const times = Object.keys(labels)
            .map((name) => labels[name])
            .filter((t) => t <= lastSnapTime);

          const nearest = times.reduce((closest, t) =>
            Math.abs(t - currentTime) < Math.abs(closest - currentTime)
              ? t
              : closest,
          );

          return nearest / duration;
        },
        duration: { min: 0.25, max: 0.6 },
        ease: "power2.inOut",
        delay: 0.05,
      },
    },
    defaults: { ease: "none" },
  });

  tl.addLabel("how-start");

  const settleStart = seg.hold;

  const settleRevealDuration = seg.settle * cfg.overlap.settleReveal;

  tl.to(
    [headingTop, headingBottom, subtitle],
    {
      opacity: 0,
      y: -20,
      filter: blurIn,
      duration: seg.settle,
      ease: cfg.ease.settle,
    },
    settleStart,
  )
    .to(
      pills,
      { opacity: 0, duration: seg.settle, ease: cfg.ease.settle },
      settleStart,
    )
    .to(
      scrollDown,
      {
        opacity: 1,
        y: 0,
        filter: blurOut,
        duration: seg.settle,
        ease: cfg.ease.settle,
      },
      settleStart,
    )
    .to(
      steps[0],
      {
        opacity: 1,
        y: 0,
        filter: blurOut,
        duration: settleRevealDuration,
        ease: cfg.ease.settle,
      },
      settleStart + seg.settle - settleRevealDuration,
    );

  tl.addLabel("settled");

  const pulseDuration = seg.dock * cfg.pulse.durationFraction;

  tl.to(phone, {
    y: cfg.phone.dockOffsetPx,
    rotate: 0,
    duration: seg.dock,
    ease: cfg.ease.dock,
  })
    .to(
      ring,
      {
        opacity: 1,
        scale: cfg.pulse.ringScale,
        duration: pulseDuration,
        ease: "power1.out",
      },
      `>-${pulseDuration}`,
    )
    .to(ring, { opacity: 0, duration: pulseDuration, ease: "power1.in" }, ">")
    .to(
      card,
      {
        scale: cfg.pulse.cardScale,
        duration: pulseDuration / 2,
        yoyo: true,
        repeat: 1,
        ease: "power1.inOut",
      },
      "<",
    );

  tl.addLabel("tap");

  const stepBoundaries = [];
  const stepOverlap = seg.step * cfg.overlap.stepCrossfade;

  steps.slice(1).forEach((toEl, i) => {
    const fromEl = steps[i];
    const stepData = HOW_STEPS[i + 1];

    tl.to(fromEl, {
      opacity: 0,
      y: -cfg.text.fadeDistance,
      filter: blurIn,
      duration: seg.step / 2,
      ease: cfg.ease.step,
    }).to(
      toEl,
      {
        opacity: 1,
        y: 0,
        filter: blurOut,
        duration: seg.step / 2,
        ease: cfg.ease.step,
      },
      `>-${stepOverlap}`,
    );

    const toTween = tl.recent();

    if (i === 0) {
      tl.to(
        counter,
        { opacity: 1, duration: seg.step / 4, ease: cfg.ease.step },
        "<",
      );
    }

    stepBoundaries.push({ time: toTween.startTime(), index: stepData.index });

    tl.addLabel(stepData.id);
  });

  tl.to(
    phone,
    {
      y: () => vh(cfg.phone.startOffsetVh),
      rotate: cfg.phone.tiltFromDeg,
      duration: seg.release,
      ease: cfg.ease.dock,
    },
    ">",
  ).to(
    scrollDown,
    {
      opacity: 0,
      y: -cfg.text.fadeDistance,
      filter: blurIn,
      duration: seg.release,
      ease: cfg.ease.release,
    },
    "<",
  );

  if (onStepChange && stepBoundaries.length) {
    let lastIndex = null;
    const syncStepNumber = () => {
      const t = tl.time();
      let current = stepBoundaries[0].index;
      for (const boundary of stepBoundaries) {
        if (t >= boundary.time) current = boundary.index;
      }
      if (current !== lastIndex) {
        lastIndex = current;
        onStepChange(current);
      }
    };
    tl.eventCallback("onUpdate", syncStepNumber);
    syncStepNumber();
  }

  return tl;
}