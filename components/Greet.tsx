import * as React from 'react';

type GreetProps = {
  children: string;
};

const Greet = (props: GreetProps) => {
  const { children } = props;
  return (
    <div>
      <p>{children}</p>
    </div>
  );
};

export default Greet;
