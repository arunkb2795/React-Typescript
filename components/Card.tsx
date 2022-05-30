import * as React from 'react';
type CardProps = {
  children: React.ReactNode;
};

const Card = (props: CardProps) => {
  const { children } = props;
  return <div>{children}</div>;
};

export default Card;
