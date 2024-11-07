import React, { createContext, useState, useContext } from 'react';

// Create Context
const DarkModeContext = createContext();

// Creat context provider
export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Context function
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export { DarkModeContext };

// Context Hook 
export const useDarkMode = () => {
  return useContext(DarkModeContext);
};
