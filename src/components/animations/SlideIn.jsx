import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SlideIn = ({
  children,
  from,
  duration = 0.5,
  delay = 0,
  styles,
  once = false,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: once });

  const getPosition = () => {
    switch (from) {
      case "left":
        return { x: -100, opacity: 0 };
      case "right":
        return { x: 100, opacity: 0 };
      case "top":
        return { y: -50, opacity: 0 };
      case "bottom":
        return { y: 100, opacity: 0 };
      default:
        return { x: 0, y: 0, opacity: 1 }; // No movement if direction is not specified
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getPosition()}
      animate={isInView ? { x: 0, y: 0, opacity: 1 } : {}}
      transition={{ duration, delay }} // Added delay to the transition
      style={{ ...styles, overflow: "hidden" }}
    >
      {children}
    </motion.div>
  );
};

export default SlideIn;
