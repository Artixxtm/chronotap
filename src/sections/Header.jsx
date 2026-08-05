"use client";

import { useRef } from "react";
import { useLenis } from "lenis/react";
import { IoMdTime, IoMdArrowDown } from "react-icons/io";
import BackgroundPicture from "@/components/ui/BackgroundPicture";
import Button from "@/components/ui/Button";
import useScrollRoundedBottom from "@/hooks/useScrollRoundedBottom";
import CalloutTag from "@/components/ui/CalloutTag";
import { BUTTON_RADIUS, BUTTON_SPAN_SIZES } from "@/constants/styles";
import useConsent from "@/hooks/useConsent";
import { trackEvent } from "@/lib/analytics";
import { useI18n } from "@/i18n/I18nProvider";
import { usePathname } from "next/navigation";

const Header = ({ setModalState }) => {
  const { messages } = useI18n();
  const lenis = useLenis();
  const pathname = usePathname();
  const sectionRef = useRef(null);

  const { consent } = useConsent();

  useScrollRoundedBottom(sectionRef, {
    from: "0rem",
    to: "3rem",
    end: "+=250",
  });

  const handleWaitlistClick = () => {
    trackEvent("waitlist_opened", consent);
    setModalState({ isOpen: true });
  };

  return (
    <section
      ref={sectionRef}
      data-nav-theme="light"
      className="relative w-full h-[calc(100dvh+2px)] rounded-b-none overflow-hidden @container"
    >
      <BackgroundPicture mobileSrc="/bg-mobile.jpg" desktopSrc="/bg.jpg">
        <CalloutTag
          text={messages.header.paris}
          dots={2}
          tailDirection="right"
          className="top-[44%] left-[48%] -rotate-5 md:top-[54.5%] md:left-[53%] mix-blend-overlay"
        />
        <CalloutTag
          text={messages.header.seeYouLater}
          dots={1}
          tailDirection="left"
          className="top-[42%] left-[75%] rotate-3 md:top-[51%] md:left-[67.5%] md:mix-blend-soft-light mix-blend-overlay"
        />
      </BackgroundPicture>

      {/* Vignette */}
      <div className="vignette" aria-hidden="true" />
      <div className="idk" aria-hidden="true" />

      {/* Content layer */}
      <div className="w-full h-full relative z-auto md:p-10 p-6 flex flex-col justify-end items-center">
        <div className="w-full h-fit flex md:flex-row flex-col md:items-end justify-between gap-6 md:mb-4 mb-6">
          <h1 className={`font-main 2xl:text-5xl lg:text-4xl md:text-2xl ${pathname.includes("/ua") ? "text-2xl-fluid-ua" : pathname.includes("/ru") || pathname.includes("/pl") ? "text-2xl-fluid-plru" : "text-2xl-fluid"} font-medium leading-[125%] select-none`}>
            {messages.header.heading}
            <br />
            {messages.header.headingJoiner}{" "}
            <span className="font-second tracking-wider mix-blend-overlay">
              {messages.header.emphasis}
            </span>
          </h1>

          <div className="md:w-fit w-full flex items-center md:flex-row flex-col 2xl:gap-8.5 lg:gap-6 gap-2 relative lg:mb-2">
            <Button
              variant="primary"
              onClick={handleWaitlistClick}
              fullWidthOnMobile
              className="relative"
            >
              <div
                className={`${BUTTON_SPAN_SIZES} ${BUTTON_RADIUS} span-container after:rounded-2xl after:md:rounded-3xl after:lg:rounded-4xl`}
              >
                <span>{messages.header.joinWaitlist}</span>
              </div>
              <div
                aria-hidden="true"
                className="absolute w-fit h-fit -right-1.25 -top-1.25 bg-white text-black lg:p-1.25 p-0.75 rounded-lg z-2"
              >
                <IoMdTime className="lg:text-lg text-base" />
              </div>
            </Button>

            <Button
              variant="secondary"
              onClick={() => lenis?.scrollTo("#why")}
              fullWidthOnMobile
              className="relative"
            >
              <span>{messages.header.discoverMore}</span>
              <div
                aria-hidden="true"
                className="absolute -right-1.25 -top-1.25 bg-black text-white z-1 lg:p-1.25 p-0.75 rounded-lg"
              >
                <IoMdArrowDown className="lg:text-lg text-base" />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
