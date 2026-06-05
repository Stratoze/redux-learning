import React from 'react';
import { Counter } from '@redux-learning/counter-feature';
import { useAppSelector, useAppDispatch } from './hooks';
import { decrement, incrementAsyncStart, incrementByAmount } from '@redux-learning/counter-state';

function App() {
  const status = useAppSelector((state) => state.counter.status);
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <Counter
      status={status}
      count={count}
      onDecrement={() => dispatch(decrement())}
      onIncrementAsync={() => dispatch(incrementAsyncStart())}
      onIncrementByAmount={(amount: number) => dispatch(incrementByAmount(amount))}
    />
  );
}

export default App;