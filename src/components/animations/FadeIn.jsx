import { useRef } from "react";
import { motion, useInView } from "framer-motion";

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
