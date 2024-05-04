import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TypingText = ({ text, speed = 200 }) => {
  const [state, setState] = useState({ visibleText: "", index: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      if (state.index < text.length) {
        setState((prev) => ({
          visibleText: prev.visibleText + text.charAt(prev.index),
          index: prev.index + 1,
        }));
      } else {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed, state.index]); // Be cautious with dependencies to avoid excessive renders

  return (
    <div style={{ display: "inline-block" }}>
      {state.visibleText.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1 }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

export default TypingText;
