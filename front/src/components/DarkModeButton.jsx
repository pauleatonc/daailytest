import React, { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import '../assets/styles/main.css'; 

const DarkModeButton = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div className="afd-site-selector__country-name">
      <button className="afd-site-selector__country-name" onClick={toggleDarkMode}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>

  );
};

export default DarkModeButton;