"use client";

import { useCallback, useEffect } from "react";
import useOverlayScrollLock from "@/hooks/useOverlayScrollLock";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import WaitlistForm from "@/components/WaitlistForm";
import Link from "next/link";
import { useI18n } from "@/i18n/I18nProvider";
import { localizedPath } from "@/i18n/config";

const BACKDROP_TRANSITION = { duration: 0.4, ease: [0.23, 1, 0.32, 1] };
const PANEL_TRANSITION = { duration: 0.4, ease: [0.23, 1, 0.32, 1] };

const Modal = ({ modalState, setModalState }) => {
  const { locale, messages } = useI18n();
  const { isOpen } = modalState;

  const close = useCallback(() => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  }, [setModalState]);

  useOverlayScrollLock(isOpen);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, close]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={BACKDROP_TRANSITION}
          onClick={close}
          className="fixed inset-0 z-1000 flex items-center justify-center bg-black/35 backdrop-blur-md p-6 md:p-10"
        >
          <motion.div
            key="modal-panel"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={PANEL_TRANSITION}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="waitlist-title"
            className="relative w-full max-w-120 rounded-[28px] bg-white/94 backdrop-blur-xl text-black shadow-[0_20px_80px_rgba(0,0,0,.18)] border border-black/5 p-9 md:p-10"
          >
            <div className="w-full h-fit absolute top-5 left-0 pr-5 pl-9 md:pl-10 flex justify-between items-center">
              <p className="tracking-widest text-[13px] font-second text-black/60 font-medium select-none">
                {messages.modal.eyebrow}
              </p>
              <button
                type="button"
                onClick={close}
                aria-label={messages.modal.close}
                className="relative text-black/50 hover:text-black transition-colors cursor-pointer"
              >
                <IoMdClose className="text-xl" />
              </button>
            </div>

            <h2
              id="waitlist-title"
              className="font-main text-2xl md:text-3xl font-medium text-black mb-6 leading-[125%] mt-4"
            >
              {messages.modal.heading}
              <br />
              <span className="font-second text-black/70 tracking-wide">
                {messages.modal.emphasis}
              </span>
              .
            </h2>
            <div className="w-full flex-col gap-6 flex justify-center relative">
              <WaitlistForm autoFocus={false} />

              <div className="w-full h-auto flex flex-row md:px-4 px-2 justify-between items-center gap-4">
                <span className="font-main md:text-[10px] text-[9px] opacity-60 select-none">
                  {messages.common.copyright}
                </span>
                <Link
                  href={localizedPath(locale, "/privacy")}
                  className="font-main md:text-[10px] text-[9px] underline hover:no-underline hover:opacity-80 opacity-60"
                >
                  {messages.common.privacyPolicy}
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
