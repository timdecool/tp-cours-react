import {createContext, useEffect, useState} from "react";

export const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
      <ThemeContext.Provider value={{ theme:theme, toggleTheme:toggleTheme }}>
            {children}
      </ThemeContext.Provider>
  )
}