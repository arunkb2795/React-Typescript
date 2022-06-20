import * as React from 'react';
import { ThemeContextProvider } from './context/ThemeContext';
import { Box } from './Box';
export default function App() {
  return (
    <div>
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
    </div>
  );
}
