import React from 'react';
import { DarkModeProvider, useDarkMode } from './context/DarkModeContext';
import Home from './views/Home';

function AppContainer() {
  const { isDarkMode } = useDarkMode();
  return (
    <div style={{ backgroundColor: isDarkMode ? '#2e2e2e' : '#ffffff', minHeight: '100vh' }}>
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