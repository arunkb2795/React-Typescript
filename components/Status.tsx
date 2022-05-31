import * as React from 'react';

type StatusProps = {
  status: 'loading' | 'success' | 'error';
};

export default function Status(props: StatusProps) {
  const { status } = props;
  return <div>{status}</div>;
}
