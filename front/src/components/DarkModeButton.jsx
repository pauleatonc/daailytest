import React, { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import '../assets/styles/main.css'; 

const DarkModeButton = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <button className="dark-mode-button" onClick={toggleDarkMode}>
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkModeButton;