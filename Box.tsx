import * as React from 'react';
import { useState, useContext } from 'react';
import { UserContext } from './context/UserContext';
export const Box = () => {
  const theme = useContext(UserContext);
  return <div>Hello</div>;
};
