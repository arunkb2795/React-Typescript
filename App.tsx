import * as React from 'react';
import { useReducer } from 'react';

type counterState = {
  count: number;
};

type counterAction = {
  type: 'INCREMENT' | 'DECREMENT' | 'RESET';
  payload?: number;
};
const initialState = { count: 0 };

const reducer = (state: counterState, action: counterAction) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + action.payload };
    case 'DECREMENT':
      return { count: state.count - action.payload };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      count is {state.count}
      <button onClick={() => dispatch({ type: 'INCREMENT', payload: 10 })}>
        Increment by 10
      </button>
      <button onClick={() => dispatch({ type: 'DECREMENT', payload: 10 })}>
        Increment by 10
      </button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
}
