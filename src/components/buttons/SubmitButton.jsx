import React from "react";

const SubmitButton = ({
  children,
  width,
  height,
  padding,
  fontSize,
  background,
  borderRadius,
  border,
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
  };

  return <button style={styles}>{children}</button>;
};

export default SubmitButton;
