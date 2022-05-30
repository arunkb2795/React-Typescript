import * as React from 'react';

type HeadingProps = {
  children: string;
};

const Heading = (props: HeadingProps) => {
  const { children } = props;
  return <p>{children}</p>;
};

export default Heading;
