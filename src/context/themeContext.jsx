import { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext();
const useTheme = () => useContext(ThemeContext);

/**
 * Provides a theme context for the application.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The child components.
 * @returns {JSX.Element} The rendered component.
 */
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("");
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme); // Save after state update
      return newTheme;
    });
  };
  useEffect(() => {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

    setTheme(
      localStorage.getItem("theme") ||
        (prefersDarkScheme.matches ? "dark" : "light")
    );
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, useTheme };
