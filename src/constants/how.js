export const HOW_STEPS = [
  {
    id: "tap",
    index: null,
    dockPhone: true,
  },
  {
    id: "fill",
    index: 1,
    dockPhone: false,
  },
  {
    id: "choose",
    index: 2,
    dockPhone: false,
  },
  {
    id: "leave",
    index: 3,
    dockPhone: false,
  },
  {
    id: "relive",
    index: 4,
    dockPhone: false,
  },
];

 
export const HOW_INDEXED_TOTAL = HOW_STEPS.filter(
  (step) => step.index != null,
).length;
 
export const HOW_ANIMATION = {
  segmentScrollVh: {
    hold: 8,
    settle: 45,
    dock: 45,
    step: 65,
    release: 32,
  },

  mobileScrollScale: 0.78,
 
  ease: {
    settle: "power2.out",
    dock: "power3.inOut",
    step: "power2.inOut",
    release: "power1.in",
  },
 
  overlap: {
    settleReveal: 0.1,
    stepCrossfade: 0.1,
  },
 
  text: {
    fadeDistance: 14,
    blurAmount: 10,
  },
 
  phone: {
    startOffsetVh: 60,
    dockOffsetPx: 40,
    tiltFromDeg: 8,
  },
 
  pulse: {
    cardScale: 1.015,
    ringScale: 1.8,
    durationFraction: 0.35,
  },
 
  scrub: true,
  pinStart: "top top",
};
 

const CROSSFADE_COUNT = HOW_STEPS.length - 1;
 
export const HOW_TOTAL_SCROLL_VH =
  HOW_ANIMATION.segmentScrollVh.hold +
  HOW_ANIMATION.segmentScrollVh.settle +
  HOW_ANIMATION.segmentScrollVh.dock +
  CROSSFADE_COUNT * HOW_ANIMATION.segmentScrollVh.step +
  HOW_ANIMATION.segmentScrollVh.release;
 
export const HOW_TAP_START_FRACTION =
  (HOW_ANIMATION.segmentScrollVh.hold + HOW_ANIMATION.segmentScrollVh.settle) /
  HOW_TOTAL_SCROLL_VH;
