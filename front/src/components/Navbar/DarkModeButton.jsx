import React, { useContext } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';
import '../../assets/styles/main.css'; 

const DarkModeButton = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div className="afd-site-selector__country-name">
      <div className="afd-site-selector__country-name" onClick={toggleDarkMode} style={{ cursor: 'pointer' }}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </div>
    </div>

  );
};

export default DarkModeButton;