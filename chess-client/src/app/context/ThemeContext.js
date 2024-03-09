// ThemeContext.js
import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  const theme = {
    isDarkTheme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`${isDarkTheme ? "dark-theme" : "light-theme"}`}>
        {children}
        <style>
          {`
            :root {
                --bg: ${isDarkTheme ? "white" : "white"};
                --sbg: ${isDarkTheme ? "#424040" : "aliceblue"};
                --pr: ${isDarkTheme ? "#2ecc71" : "#2ecc71"};
                --reg: ${isDarkTheme ? "white" : "#f0f3ff"};
                --sec: ${isDarkTheme ? "#95bfff" : "#95bfff"};
                --txt: ${isDarkTheme ? "white" : "black"};
            }
          `}
        </style>
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
