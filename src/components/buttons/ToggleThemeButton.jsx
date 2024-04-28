import React from "react";
import { useTheme } from "@/context/themeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const ToggleThemeButton = ({ position, top, left, right, bottom, size }) => {
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
      <button style={styles} onClick={toggleTheme}>
        {theme === "light" ? <FaSun /> : <FaMoon />}
      </button>
    </>
  );
};

export default ToggleThemeButton;
