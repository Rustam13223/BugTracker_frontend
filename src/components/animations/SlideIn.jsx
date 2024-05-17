import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

/**
 * SlideIn component animates the children by sliding them into view from a specified direction.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The content to be animated.
 * @param {string} props.from - The direction from which the content should slide in. Possible values: "left", "right", "top", "bottom".
 * @param {number} [props.duration=0.5] - The duration of the animation in seconds.
 * @param {number} [props.delay=0] - The delay before the animation starts in seconds.
 * @param {Object} [props.styles] - Additional styles to be applied to the animated element.
 * @param {boolean} [props.once=false] - If true, the animation will only occur once when the element enters the viewport.
 * @returns {JSX.Element} The animated component.
 */
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
