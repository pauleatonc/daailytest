import React, { useEffect } from 'react';
import { DarkModeProvider, useDarkMode } from './context/DarkModeContext';
import Home from './views/Home';

function AppContainer() {
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('darkmode');
    } else {
      document.body.classList.remove('darkmode');
    }
  }, [isDarkMode]);

  return (
    <div>
      <Home />
    </div>
  );
}

function App() {
  return (
    <DarkModeProvider>
      <AppContainer />
    </DarkModeProvider>
  );
}

export default App;