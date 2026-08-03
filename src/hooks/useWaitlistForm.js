'use client'

import { useForm } from "react-hook-form";
import { EMAIL_PATTERN } from "@/constants/validation";

export default function useWaitlistForm(errorMessages) {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({ mode: "onSubmit", defaultValues: { email: "", website: "" } });

  const onSubmit = handleSubmit(async ({ email, website }) => {
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website }),
      });

      if (!res.ok) throw new Error("Request failed");
      reset();
    } catch {
      setError("email", {
        type: "server",
        message: errorMessages.server,
      });
    }
  });

  return {
    inputProps: register("email", {
      required: errorMessages.required,
      pattern: { value: EMAIL_PATTERN, message: errorMessages.invalid },
    }),
    honeypotProps: register("website"),
    onSubmit,
    error: errors.email?.message,
    isSubmitting,
    isSubmitSuccessful,
  };
}
