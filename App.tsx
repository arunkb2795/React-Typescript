import * as React from 'react';
import { UserContextProvider } from './context/UserContext';
import { Box } from './Box';
export default function App() {
  return (
    <div>
      <UserContextProvider>
        <Box />
      </UserContextProvider>
    </div>
  );
}
