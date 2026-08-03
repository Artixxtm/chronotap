"use client";

import { motion } from "framer-motion";

const EASE = [0.76, 0, 0.24, 1];

const HamburgerIcon = ({ isOpen, className, barClassName }) => (
  <div
    aria-hidden="true"
    className={`relative w-6 h-4 shrink-0 -top-px ${className ?? ""}`}
  >
    {[0, 1, 2].map((i) => {
      const closedY = i === 0 ? -6 : i === 1 ? 0 : 6;
      const openState =
        i === 0
          ? { rotate: 45, y: 0, opacity: 1 }
          : i === 1
          ? { rotate: 0, y: 0, opacity: 0 }
          : { rotate: -45, y: 0, opacity: 1 };
      const closedState = { rotate: 0, y: closedY, opacity: 1 };

      return (
        <motion.div
          key={i}
          className={`absolute left-0 top-1/2 w-full h-0.5 -mt-px rounded-full ${barClassName ?? ""}`}
          style={{ backgroundColor: "currentColor" }}
          initial={false}
          animate={isOpen ? openState : closedState}
          transition={{ duration: 0.35, ease: EASE }}
        />
      );
    })}
  </div>
);

export default HamburgerIcon;