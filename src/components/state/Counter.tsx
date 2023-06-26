import React from 'react';
import { useReducer } from 'react';

type CounterState = {
  count: number;
};

type UpdateAction = {
  type: 'INCREMENT' | 'DECREMENT';
  payload: number;
};
type CounterAction = UpdateAction | ResetAction;

type ResetAction = {
  type: 'RESET';
};
const initialState = { count: 0 };

function /* `reducer(state, action)` is a function that takes in the current state and an action
object, and returns a new state based on the action type and payload. In this specific
example, the reducer is used to update the count value in the state object based on whether
the action type is 'INCREMENT' or 'DECREMENT', and by how much the payload value is. */
reducer(state: CounterState, action: CounterAction) {
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
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'INCREMENT', payload: 10 })}>
        {' '}
        Increment 10
      </button>
      <button onClick={() => dispatch({ type: 'DECREMENT', payload: 10 })}>
        {' '}
        Decrement 10
      </button>
      <button onClick={() => dispatch({ type: 'RESET' })}> Reset</button>
    </>
  );
};

export default Counter;
