import { forwardRef } from "react";
import { cn } from "@/lib/cn";
import {
  BUTTON_BASE,
  BUTTON_SIZES,
  BUTTON_RADIUS,
  BUTTON_PRIMARY,
  BUTTON_SECONDARY,
} from "@/constants/styles";

const variantMap = {
  primary: BUTTON_PRIMARY,
  secondary: BUTTON_SECONDARY,
};

const Button = forwardRef(
  (
    { variant = "primary", fullWidthOnMobile = false, className, children, ...props },
    ref
  ) => (
    <button
      ref={ref}
      type="button"
      className={cn(
        BUTTON_BASE,
        BUTTON_SIZES,
        BUTTON_RADIUS,
        variantMap[variant],
        fullWidthOnMobile ? "w-full md:w-fit" : "w-fit",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
);

Button.displayName = "Button";
export default Button;