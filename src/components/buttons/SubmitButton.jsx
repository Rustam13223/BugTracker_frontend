import React, { useState } from "react";
import { BarLoader } from "react-spinners";
import classNames from "./SubmitButton.module.css";

const SubmitButton = ({
  children,
  width,
  height,
  padding,
  fontSize,
  background,
  borderRadius,
  border,
  disabled,
  style,
}) => {
  const [hover, setHover] = useState(false);

  const styles = {
    width: width || "100%",
    height: height || "auto",
    padding: padding || "0.75rem 1rem",
    fontSize: fontSize || "1rem",
    background:
      background ||
      "linear-gradient(45deg, var(--color-primary-100), var(--color-primary-200), var(--color-primary-300))",
    color: "white",
    borderRadius: borderRadius || "0.25rem",
    border: border || "none",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundSize: "200% 200%", // Required for the gradient animation
    ...style,
  };

  return (
    <button
      type="submit"
      disabled={disabled}
      style={styles}
      className={hover ? `${classNames.buttonGradient}` : ""}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {disabled ? <BarLoader color="white" /> : children}
    </button>
  );
};

export default SubmitButton;
