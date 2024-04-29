import React from "react";
import { animated, useSpring } from "@react-spring/web";
const SlideIn = ({ children, duration = 500 }) => {
  const styles = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: duration },
  });
  return <animated.div style={styles}>{children}</animated.div>;
};

export default SlideIn;
