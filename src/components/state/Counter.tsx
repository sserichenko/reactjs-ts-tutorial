import React, { useReducer } from 'react';

type CounterState = {
    count: number
}

type ApdateAction = {
    type: 'increment' | 'decrement';
    payload: number;
}

type ResetAction = {
    type: 'reset';
}

type CounterAction = ApdateAction | ResetAction;

const initialState = { count: 0 };

function reducer(state: CounterState, action:CounterAction) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload };
    case 'decrement':
      return { count: state.count - action.payload };
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'decrement', payload: 5 })}>Decrement to 5</button>
      <button onClick={() => dispatch({ type: 'increment', payload: 5 })}>Increment to 5</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset to zero</button>
    </>
  );
};

export default Counter;
