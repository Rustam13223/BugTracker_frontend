import { useState } from "react";
import { BarLoader } from "react-spinners";
import classNames from "./SubmitButton.module.css";

/**
 * SubmitButton component represents a button used for submitting forms.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The content of the button.
 * @param {string} props.width - The width of the button.
 * @param {string} props.height - The height of the button.
 * @param {string} props.padding - The padding of the button.
 * @param {string} props.fontSize - The font size of the button.
 * @param {string} props.background - The background color or gradient of the button.
 * @param {string} props.borderRadius - The border radius of the button.
 * @param {string} props.border - The border style of the button.
 * @param {boolean} props.disabled - Whether the button is disabled or not.
 * @param {Object} props.style - Additional inline styles for the button.
 * @returns {JSX.Element} The rendered SubmitButton component.
 */
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
    borderRadius: borderRadius || "var(--border-radius)",
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
