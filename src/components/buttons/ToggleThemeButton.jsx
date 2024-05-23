import { useTheme } from "@/context/themeContext";
import { FaSun, FaMoon } from "react-icons/fa";
import FadeIn from "@/components/animations/FadeIn";
import { IconContext } from "react-icons";

/**
 * A button component that toggles the theme of the application.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} [props.position="absolute"] - The position of the button.
 * @param {string} [props.top="auto"] - The top position of the button.
 * @param {string} [props.left="auto"] - The left position of the button.
 * @param {string} [props.right="auto"] - The right position of the button.
 * @param {string} [props.bottom="auto"] - The bottom position of the button.
 * @param {string} [props.size="2rem"] - The font size of the button.
 * @param {string} [props.color="var(--color-primary-100)"] - The color of the button.
 * @returns {JSX.Element} The rendered ToggleThemeButton component.
 */
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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
