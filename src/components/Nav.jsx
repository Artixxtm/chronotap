"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLenis } from "lenis/react";
import ChronoLogo from "@/components/icons/ChronoLogo";
import HamburgerIcon from "@/components/icons/HamburgerIcon";
import MenuPanel from "@/components/MenuPanel";
import { cn } from "@/lib/cn";
import useOverlayScrollLock from "@/hooks/useOverlayScrollLock";
import { useNavTheme } from "@/hooks/useNavTheme";
import { BUTTON_RADIUS, NAV_EDGE_CLASSES, NAV_SURFACE } from "@/constants/styles";
import { useI18n } from "@/i18n/I18nProvider";

const EASE = [0.76, 0, 0.24, 1];

function useViewportSize() {
  const [state, setState] = useState({ width: 0, height: 0, ready: false });

  useEffect(() => {
    const update = () =>
      setState({
        width: window.innerWidth,
        height: window.innerHeight,
        ready: true,
      });
    update();
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, []);

  return state;
}

function getNavEdge(vw) {
  return vw >= 768 ? 40 : 24;
}

function getClosedSize(vw, vh) {
  if (vw >= 768 && vh <= 700) return { width: 148, height: 54 };
  if (vw >= 1536) return { width: 168.56, height: 88 };
  if (vw >= 1024) return { width: 157.81, height: 76 };
  if (vw >= 768) return { width: 152.42, height: 54 };
  return { width: 64, height: 42 };
}

function getRadius(vw, vh) {
  if (vw >= 768 && vh <= 700) return { closed: 24, open: 32 };
  if (vw >= 1024) return { closed: 32, open: 40 };
  if (vw >= 768) return { closed: 24, open: 32 };
  return { closed: 16, open: 24 };
}

const Nav = () => {
  const { messages } = useI18n();
  const lenis = useLenis();
  const [isOpen, setIsOpen] = useState(false);
  const sectionTheme = useNavTheme("light");
  const surface = NAV_SURFACE[sectionTheme];
  const { width: vw, height: vh, ready } = useViewportSize();

  const hasRevealedRef = useRef(false);
  useEffect(() => {
    if (ready) hasRevealedRef.current = true;
  });
  const isFirstReveal = ready && !hasRevealedRef.current;

  useOverlayScrollLock(isOpen);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const toggle = () => setIsOpen((prev) => !prev);

  const handleLogoClick = () => {
    setIsOpen(false);
    lenis?.start();
    lenis?.scrollTo(0, { force: true });
  };

  const navEdge = getNavEdge(vw);
  const closedSize = getClosedSize(vw, vh);
  const radius = getRadius(vw, vh);
  const isDark = sectionTheme === "dark";
  const shadowAlphaOpen = isDark ? 0.45 : 0.25;

  const openWidth = Math.max(vw - navEdge, 0);
  const openHeight = Math.max(vh - navEdge, 0);

  const panelTarget = isOpen
    ? {
        width: openWidth,
        height: openHeight,
        top: navEdge / 2,
        right: navEdge / 2,
        borderRadius: radius.open,
        boxShadow: `0px 15px 25px rgba(0,0,0,${shadowAlphaOpen})`,
        opacity: ready ? 1 : 0,
      }
    : {
        width: closedSize.width,
        height: closedSize.height,
        top: navEdge,
        right: navEdge,
        borderRadius: radius.closed,
        boxShadow: `0px 15px 25px rgba(0,0,0,0)`,
        opacity: ready ? 1 : 0,
      };

  const sizeDuration = isFirstReveal ? 0 : isOpen ? 0.9 : 0.6;

  const buttonBg = isOpen ? surface.contrast : surface.base;
  const buttonFg = isOpen ? surface.base : surface.contrast;
  const logoColor = isOpen ? surface.contrast : surface.base;

  return (
    <nav
      aria-label={messages.nav.ariaLabel}
      className={cn(
        "fixed w-full left-0 h-auto z-10 flex items-center justify-between overflow-visible",
        NAV_EDGE_CLASSES,
        "top-(--nav-edge) px-(--nav-edge)",
      )}
    >
      <button
        type="button"
        aria-label={messages.nav.links.home}
        onClick={handleLogoClick}
        className="relative z-50 cursor-pointer"
      >
        <ChronoLogo isOpen={isOpen} color={logoColor} />
      </button>

      <motion.div
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
        initial={false}
        animate={panelTarget}
        transition={{
          default: { duration: sizeDuration, ease: EASE },
          opacity: { duration: 0.4, ease: "easeOut" },
        }}
        className={cn(
          "fixed z-0 backdrop-blur-xl overflow-hidden will-change-[width,height,top,right]",
          isDark ? "bg-black/94" : "bg-white/94",
        )}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        <div
          className="absolute top-0 right-0"
          style={{ width: openWidth, height: openHeight }}
        >
          <MenuPanel
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            theme={sectionTheme}
          />
        </div>
      </motion.div>

      <motion.button
        type="button"
        aria-label={isOpen ? messages.nav.closeMenu : messages.nav.openMenu}
        aria-expanded={isOpen}
        onClick={toggle}
        className={cn(
          "nav-trigger fixed z-50 uppercase font-main font-medium flex items-center gap-3",
          "top-(--nav-edge) right-(--nav-edge)",
          "text-lg py-3.25 px-5 md:px-8.5",
          "lg:text-xl lg:py-6",
          "2xl:text-2xl 2xl:py-7",
          "cursor-pointer",
          BUTTON_RADIUS,
        )}
        initial={false}
        animate={{ backgroundColor: buttonBg, color: buttonFg }}
        transition={{ duration: 0.45, ease: EASE }}
      >
        <span className="md:block hidden relative">
          <motion.span
            className="block"
            initial={false}
            animate={{ opacity: isOpen ? 0 : 1, y: isOpen ? -8 : 0 }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            {messages.nav.menu}
          </motion.span>
          <motion.span
            className="block absolute inset-0"
            initial={false}
            animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 8 }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            {messages.nav.close}
          </motion.span>
        </span>
        <HamburgerIcon isOpen={isOpen} />
      </motion.button>
    </nav>
  );
};

export default Nav;
