import React from "react";
import { useTheme } from "@/context/themeContext";
import { FaSun, FaMoon } from "react-icons/fa";
import FadeIn from "@/components/animations/FadeIn";
import { IconContext } from "react-icons";

const ToggleThemeButton = ({
  position,
  top,
  left,
  right,
  bottom,
  size,
  color = "var(--color-primary-100)",
}) => {
  const styles = {
    position: position || "absolute",
    top: top || "auto",
    left: left || "auto",
    right: right || "auto",
    bottom: bottom || "auto",
    cursor: "pointer",
    fontSize: size || "2rem",
    zIndex: "1000",
    background: "transparent",
  };
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <IconContext.Provider value={{ color: color }}>
        <FadeIn key={theme}>
          <button style={styles} onClick={toggleTheme}>
            {theme === "light" ? <FaSun /> : <FaMoon />}
          </button>
        </FadeIn>
      </IconContext.Provider>
    </>
  );
};

export default ToggleThemeButton;
