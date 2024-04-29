import { useEffect, useState, useRef } from "react";

function useOnScreen(options) {
  const ref = useRef();
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Update our state when observer callback fires
      setIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []); // Empty array ensures effect is only run on mount and unmount

  return [ref, isIntersecting];
}

export { useOnScreen };
