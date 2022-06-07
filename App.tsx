import * as React from 'react';
import { useState } from 'react';

type AuthUser = {
  name: string;
  email: string;
};

export default function App() {
  const [user, setUser] = useState<AuthUser | null>(null);

  const handleLogin = () => {
    setUser({
      name: 'Arun',
      email: 'arunkb27@gmail.com',
    });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <p>User name is {user?.name} </p>
      <p>User email is {user?.email} </p>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
