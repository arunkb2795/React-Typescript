import * as React from 'react';

type InputProps = {
  type: string;
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export default function Input(props: InputProps) {
  const { type, value, handleChange } = props;
  return (
    <input
      type={type}
      value={value}
      onChange={(event) => handleChange(event)}
    ></input>
  );
}
