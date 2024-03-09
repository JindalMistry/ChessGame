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
                --bg: ${isDarkTheme ? "white" : "#424040"};
                --sbg: ${isDarkTheme ? "#424040" : "#D8D8D8"};
                --pr: ${isDarkTheme ? "#2ecc71" : "#2ecc71"};
                --reg: ${isDarkTheme ? "white" : "#f0f3ff"};
                --sec: ${isDarkTheme ? "#95bfff" : "#95bfff"};
                --txt: ${isDarkTheme ? "white" : "black"};
                --tbg: ${isDarkTheme ? "#D8D8D8" : "#424040"}
            }
          `}
        </style>
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
