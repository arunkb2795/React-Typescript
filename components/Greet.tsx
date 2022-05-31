import * as React from 'react';
import { PersonProps } from './Person.types';

const Greet = (props: PersonProps) => {
  const { name, age, isMarried, addressDetails, familyMembers } = props;
  return (
    <div>
      <p>
        Hello my name is {name} and age is {age}
      </p>
      <span> {isMarried ? <p>I'm married</p> : <p>I'm single</p>}</span>
      <p>{addressDetails.city}</p>
      <p>{addressDetails.district}</p>
      {familyMembers.map((member, index) => {
        return (
          <div key={index}>
            <p>{member.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Greet;
