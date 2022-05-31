import * as React from 'react';

type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

export default function Button(props: ButtonProps) {
  const { handleClick } = props;
  return <button onClick={(event) => handleClick(event, 1)}>Click</button>;
}
