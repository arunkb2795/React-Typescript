import * as React from 'react';

type GreetProps = {
  name: string;
  age: number;
  isMarried: boolean;
  addressDetails: {
    city: string;
    district: string;
  };
  familyMembers: {
    name: string;
    relationShip: string;
  }[];
};

const Greet = (props: GreetProps) => {
  const { name, age, isMarried, addressDetails, familyMembers } = props;
  return (
    <div>
      <p>
        Hello my name is {name} and age is {age}
      </p>
      <span> {isMarried ? <p>I'm married</p> : <p>I'm single</p>}</span>
      <p>{addressDetails.city}</p>
      <p>{addressDetails.district}</p>
      {familyMembers.map((member) => {
        return (
          <div>
            <p>{member.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Greet;
