"use client";

import { useEffect, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdCheckmark, IoMdAlert } from "react-icons/io";
import useWaitlistForm from "@/hooks/useWaitlistForm";
import { BUTTON_BASE, BUTTON_RADIUS, BUTTON_SUBMIT } from "@/constants/styles";
import useConsent from "@/hooks/useConsent";
import { trackEvent } from "@/lib/analytics";
import { useI18n } from "@/i18n/I18nProvider";

const WaitlistForm = ({ autoFocus }) => {
  const { messages } = useI18n();
  const inputId = useId();
  const errorId = `${inputId}-error`;
  const {
    inputProps,
    honeypotProps,
    onSubmit,
    error,
    isSubmitting,
    isSubmitSuccessful,
  } = useWaitlistForm(messages.form.errors);

  const { consent } = useConsent();

  useEffect(() => {
    if (isSubmitSuccessful) {
      trackEvent("waitlist_joined", consent);
    }
  }, [isSubmitSuccessful]);

  if (isSubmitSuccessful) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
        className="flex items-center gap-3 border border-black/8 rounded-2xl py-4 px-4 bg-black/3"
      >
        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-black shrink-0">
          <IoMdCheckmark className="text-sm text-green-300" />
        </span>
        <p className="font-main text-xs tracking-wide text-black/80">
          {messages.form.success}
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-3">
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-2499.75 w-px h-px opacity-0"
        {...honeypotProps}
      />

      <div className="relative">
        <input
          id={inputId}
          type="email"
          inputMode="email"
          autoComplete="email"
          autoFocus={autoFocus}
          placeholder={messages.form.emailPlaceholder}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className="h-14 w-full rounded-2xl border font-main border-black/15 bg-white px-5 text-[15px] placeholder:text-black/30 outline-none transition focus:border-black"
          {...inputProps}
        />
      </div>

      <AnimatePresence mode="wait">
        {error && (
          <motion.p
            key={error}
            id={errorId}
            role="alert"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-1.5 font-main text-xs text-red-500"
          >
            <IoMdAlert className="shrink-0" />
            {error}
          </motion.p>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`${BUTTON_BASE} ${BUTTON_RADIUS} ${BUTTON_SUBMIT}`}
      >
        <div
          className={`py-4 ${BUTTON_RADIUS} span-container after:rounded-2xl after:md:rounded-3xl after:lg:rounded-4xl`}
        >
          <span>
            {isSubmitting ? messages.form.submitting : messages.form.submit}
          </span>
        </div>
      </button>
    </form>
  );
};

export default WaitlistForm;
