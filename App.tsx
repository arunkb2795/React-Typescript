import * as React from 'react';
import Greet from './components/Greet';
export default function App() {
  let addressDetails = {
    city: 'Edappally',
    district: 'Ernakulam',
  };
  let familyMembers = [
    {
      name: 'Babu',
      relationShip: 'father',
    },
    {
      name: 'Anitha Babu',
      relationShip: 'mother',
    },
    {
      name: 'Divya',
      relationShip: 'sister',
    },
  ];
  return (
    <div>
      <Greet
        name={'Arun'}
        age={10}
        isMarried
        addressDetails={addressDetails}
        familyMembers={familyMembers}
      />
    </div>
  );
}
