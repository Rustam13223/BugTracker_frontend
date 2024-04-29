import React from "react";
import { animated, useSpring } from "@react-spring/web";

const SlideIn = ({
  children,
  duration,
  delay = 0,
  from,
  offset = 100,
  style,
}) => {
  const getFromStyle = () => {
    switch (from) {
      case "top":
        return { transform: `translate3d(0,${-offset}px,0)`, opacity: 0 };
      case "bottom":
        return { transform: `translate3d(0,${offset}px,0)`, opacity: 0 };
      case "left":
        return { transform: `translate3d(${-offset}px,0,0)`, opacity: 0 };
      case "right":
        return { transform: `translate3d(${offset}px,0,0)`, opacity: 0 };
      default:
        return { transform: `translate3d(0,${-offset}px,0)`, opacity: 0 };
    }
  };
  const styles = useSpring({
    to: { transform: "translate3d(0,0,0)", opacity: 1 },
    from: getFromStyle(),
    delay: delay,
    config: { duration: duration, mass: 1, tension: 210, friction: 20 },
  });
  return (
    <animated.div style={{ ...styles, ...style }}>{children}</animated.div>
  );
};

export default SlideIn;
