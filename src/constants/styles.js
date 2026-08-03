export const BUTTON_BASE =
  "font-main font-medium cursor-pointer transition-opacity";

export const BUTTON_SIZES = "text-lg 2xl:text-2xl lg:text-xl";

export const BUTTON_SPAN_SIZES =
  "py-4 px-8 lg:py-6 lg:px-10 2xl:py-7 2xl:px-12";

export const BUTTON_RADIUS = "rounded-2xl md:rounded-3xl lg:rounded-4xl";
export const BUTTON_RADIUS_S = "rounded-xl md:rounded-2xl lg:rounded-3xl";

export const BUTTON_PRIMARY = "text-white inGlow";
export const BUTTON_SECONDARY = `text-black bg-white font-normal secondaryBtn hover:opacity-90 ${BUTTON_SPAN_SIZES}`;
export const BUTTON_SUBMIT = "w-full text-white mt-2 inGlow disabled:opacity-40 transition-all! duration-400 active:scale-[.985] relative disabled:cursor-not-allowed"

export const INPUT_SIZES =
  "text-lg py-4 px-8 lg:py-6 lg:px-10 2xl:py-7 2xl:px-12 2xl:text-2xl lg:text-xl xl:min-w-[360px]";

export const INPUT_BASE =
  "font-main outline-none transition-all duration-200 placeholder:font-normal disabled:opacity-60 disabled:cursor-not-allowed";

export const INPUT_SECONDARY =
  "text-black bg-white placeholder-black/70 font-normal focus:ring-2 focus:ring-black/15";

export const PANEL_RADIUS_CLOSED = [
  { minWidth: 1024, value: 32 }, // lg:rounded-4xl
  { minWidth: 768, value: 24 },  // md:rounded-3xl
  { minWidth: 0, value: 16 },    // rounded-2xl
];

export const PANEL_RADIUS_OPEN_DELTA = 8;

export const NAV_EDGE_CLASSES = "[--nav-edge:24px] md:[--nav-edge:40px]";

export const NAV_SURFACE = {
  light: { base: "#ffffff", contrast: "#000000" },
  dark: { base: "#000000", contrast: "#ffffff" },
};