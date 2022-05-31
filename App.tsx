import * as React from 'react';
import Greet from './components/Greet';
import Home from './components/Home';
import Card from './components/Card';
import Heading from './components/Heading';
import Status from './components/Status';

export default function App() {
  return (
    <div>
      {/* passing data as a react child */}
      <Greet>Hi Arun welcome back.</Greet>
      {/* passing Component as a react child */}
      <Home>
        <Card>
          <Heading>Home page heading</Heading>
        </Card>
      </Home>
      <Status status="loading" />
    </div>
  );
}
