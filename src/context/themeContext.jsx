import React from "react";
import { createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children, value }) => {
  const [theme, setTheme] = useState("");
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    localStorage.setItem("theme", theme);
  };
  useEffect(() => {
    setTheme(localStorage.getItem("theme") || "dark");
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
