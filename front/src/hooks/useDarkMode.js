import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';

const useDarkMode = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
  return { isDarkMode, toggleDarkMode };
};

export default useDarkMode;
