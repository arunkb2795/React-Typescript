import * as React from 'react';

type HomeProps = {
  children: React.ReactNode;
};

const Home = (props: HomeProps) => {
  const { children } = props;
  return <div>{children}</div>;
};

export default Home;
