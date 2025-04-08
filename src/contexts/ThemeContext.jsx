import {createContext, useEffect, useState} from "react";

export const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  useEffect(() => {
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
    console.log(theme);
    localStorage.setItem("theme", theme);
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    console.log(theme);
  }

  return (
      <ThemeContext.Provider value={{ theme:theme, toggleTheme:toggleTheme }}>
            {children}
      </ThemeContext.Provider>
  )
}