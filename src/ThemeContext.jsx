import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // Load saved theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    // DaisyUI uses data-theme; Tailwind dark: utilities use the 'dark' class.
    // Keep both in sync so both DaisyUI and Tailwind dark: styles work.
    document.documentElement.setAttribute("data-theme", savedTheme);
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    // DaisyUI reads data-theme; Tailwind dark: utilities read the 'dark' class.
    document.documentElement.setAttribute("data-theme", newTheme); // DaisyUI reads this
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem("theme", newTheme); // persist user choice
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};