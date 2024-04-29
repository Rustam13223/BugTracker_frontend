import React from "react";
import { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext();
const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children, value }) => {
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
