import * as React from 'react';
import { useState, useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
export const Box = () => {
  const theme = useContext(ThemeContext);
  const [isDark, setIsDark] = useState(false);
  return (
    <div
      style={{
        backgroundColor: !isDark ? theme.light.main : theme.dark.main,
        width: '100vw',
        height: '100vh',
      }}
    >
      <span style={{ color: !isDark ? theme.light.text : theme.dark.text }}>
        Hi, Please click the button to enable dark mode.
      </span>
      <button onClick={() => setIsDark(!isDark)}>
        {!isDark ? 'Dark Mode' : 'Light Mode'}
      </button>
    </div>
  );
};
