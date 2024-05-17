import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/**
 * FadeIn component that animates its children with a fade-in effect.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The children elements to be animated.
 * @param {number} [props.duration=0.5] - The duration of the fade-in animation in seconds.
 * @param {number} [props.delay=0] - The delay before the fade-in animation starts in seconds.
 * @param {Object} [props.styles] - Additional styles to be applied to the component.
 * @returns {JSX.Element} The rendered FadeIn component.
 */
const FadeIn = ({ children, duration = 0.5, delay = 0, styles }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { x: 0, y: 0, opacity: 1 } : {}}
      transition={{ duration, delay }} // Added delay to the transition
      style={{ ...styles, overflow: "visible" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
