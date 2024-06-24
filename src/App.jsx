import React, { useState } from 'react';
import AppRoutes from './routes';
import './styles/main.scss';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'App dark-mode' : 'App'}>
      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle Dark Mode
      </button>
      <AppRoutes />
    </div>
  );
};

export default App;
