import * as React from 'react';
import { createContext } from 'react';

type User = {
  name: string;
  email: string;
};

type UserContextProviderProps = {
  children: React.ReactNode;
};

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  return <UserContext.Provider value={null}>{children}</UserContext.Provider>;
};
