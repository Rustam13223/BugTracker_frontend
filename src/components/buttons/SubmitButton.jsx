import React from "react";
import { BarLoader } from "react-spinners";

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
}) => {
  const styles = {
    width: width || "100%",
    height: height || "auto",
    padding: padding || "0.75rem 1rem",
    fontSize: fontSize || "1rem",
    background:
      background ||
      "linear-gradient(45deg,var(--color-primary-100),var(--color-primary-200),var(--color-primary-300))",
    color: "white",
    borderRadius: borderRadius || "0.25rem",
    border: border || "none",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <button type="submit" disabled={disabled} style={styles}>
      {disabled ? <BarLoader color="white" /> : <>{children}</>}
    </button>
  );
};

export default SubmitButton;
