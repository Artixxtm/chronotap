"use client";

import {
  BUTTON_RADIUS,
  BUTTON_RADIUS_S,
  NAV_SURFACE,
} from "@/constants/styles";
import { motion } from "framer-motion";
import useAppScroll from "@/hooks/useAppScroll";
import { ScrollTrigger } from "@/utils/gsap";
import { HOW_TAP_START_FRACTION } from "@/constants/how";
import Link from "next/link";
import Image from "next/image";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useI18n } from "@/i18n/I18nProvider";
import { localizedPath } from "@/i18n/config";

const CLink = motion.create(Link, { forwardMotionProps: true });
const CImage = motion.create(Image, { forwardMotionProps: true });

const NAV_LINKS = [
  { key: "why", href: "#why" },
  { key: "what", href: "#what" },
  { key: "how", href: "#how" },
  { key: "ways", href: "#ways" },
  { key: "faq", href: "#faq" },
  { key: "waitlist", href: "#waitlist" },
  { key: "shop", href: "/shop" },
];

const containerVariants = {
  hidden: {
    transition: { staggerChildren: 0.03, staggerDirection: -1, delayChildren: 0 },
  },
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.7 } },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 12,
    transition: { duration: 0.25, ease: [0.4, 0, 1, 1] },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

function getHowScrollTarget() {
  const st = ScrollTrigger.getById("how");

  if (!st) return "#what";

  return st.start + HOW_TAP_START_FRACTION * (st.end - st.start);
}

const MenuPanel = ({ isOpen, onClose, theme = "light" }) => {
  const { locale, messages } = useI18n();
  const { isPhone, scrollTo } = useAppScroll();
  const surface = NAV_SURFACE[theme];
  const isDark = theme === "dark";

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={isOpen ? "visible" : "hidden"}
      id="modalScroll"
      className="menu-panel w-full h-full flex flex-col justify-end text-black md:pb-9 pb-4.5 pt-[calc(var(--nav-edge)*0.5)] px-[calc(var(--nav-edge)*0.5)]"
      style={{ color: surface.contrast }}
    >
      <div className="w-full h-auto relative flex md:flex-row flex-col md:justify-between md:items-end">
        <nav className="menu-panel-links flex flex-col gap-2 md:gap-4 md:mb-0 sm:mb-8 mb-4">
          {NAV_LINKS.map((link) => {
            const isFeatured = link.href.startsWith("/");
            const label = messages.nav.links[link.key];
            if (isFeatured)
              return (
                <CLink
                  key={link.href}
                  href={localizedPath(locale, link.href)}
                  variants={itemVariants}
                  onClick={() => onClose()}
                  className={`menu-panel-link menu-panel-featured font-main w-fit cursor-pointer uppercase max-[360px]:text-[clamp(1.2rem,5vw,3rem)] text-[clamp(1.35rem,7vw,3rem)] md:text-5xl 2xl:text-5xl font-medium leading-none hover:opacity-60! hover:transition-opacity hover:duration-500 ${BUTTON_RADIUS_S} px-2.5 py-2 md:mt-6 sm:mt-4 mt-2`}
                  style={{
                    backgroundColor: surface.contrast,
                    color: surface.base,
                  }}
                >
                  <span>/</span>{" "}
                  <span className={"max-[360px]:px-1 px-2.5 max-[360px]:pr-2 pr-5"}>{label}</span>
                </CLink>
              );
            else
              return (
                <motion.button
                  key={link.href}
                  variants={itemVariants}
                  onClick={() => {
                    const target =
                      link.href === "#how"
                        ? getHowScrollTarget()
                        : link.href === "#"
                          ? 0
                          : link.href;

                    onClose();

                    if (isPhone) {
                      requestAnimationFrame(() => {
                        requestAnimationFrame(() => scrollTo(target));
                      });
                    } else {
                      scrollTo(target, { force: true });
                    }
                  }}
                  className="menu-panel-link font-main w-fit cursor-pointer uppercase max-[360px]:text-[clamp(1.2rem,5vw,3rem)] text-[clamp(1.35rem,7vw,3rem)] md:text-5xl 2xl:text-5xl font-medium leading-none hover:opacity-60! hover:transition-opacity hover:duration-500"
                >
                  <span className={"opacity-30"}>#</span>{" "}
                  <span>{label}</span>
                </motion.button>
              );
          })}
        </nav>

        <div className="w-full max-w-110 h-fit flex flex-col md:items-end items-start relative gap-2.5">
          <motion.div variants={itemVariants}>
            <LanguageSwitcher onSelect={onClose} />
          </motion.div>
          <motion.q
            key={"q-key"}
            variants={itemVariants}
            className="menu-panel-copy font-second md:text-lg max-[360px]:text-xs text-base md:mr-2 ml-0.5 opacity-75 tracking-wide"
          >
            {messages.nav.quote}
          </motion.q>
          <motion.div
            key={"img-key"}
            variants={itemVariants}
            className={`menu-panel-media w-full md:h-80 sm:h-60 h-50 ${isDark ? "bg-white/10" : "bg-black/5"} ${BUTTON_RADIUS} flex justify-center items-center relative overflow-hidden p-2`}
          >
            <div
              className={`w-full h-full relative overflow-hidden ${BUTTON_RADIUS_S}`}
            >
              <CImage
                src="/menu-img.jpg"
                alt={messages.nav.imageAlt}
                draggable={false}
                width={0}
                height={0}
                sizes="100vw"
                loading="lazy"
                animate={
                  isOpen
                    ? {
                        scale: [1, 1.025, 1],
                        rotate: [-0.25, 0.25, -0.25],
                        filter: [
                          "brightness(1)",
                          "brightness(1.05)",
                          "brightness(1)",
                        ],
                      }
                    : { scale: 1, rotate: 0, filter: "brightness(1)" }
                }
                transition={{
                  duration: 10,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
                className="w-full h-full object-cover pointer-events-none will-change-transform"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuPanel;
