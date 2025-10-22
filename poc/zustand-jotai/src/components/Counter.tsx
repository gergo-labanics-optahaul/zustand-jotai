import React from 'react';
import {useStore} from "zustand/react";
import {counterStore, persistedCounterStore} from "../store/useCounterStore";

const Counter: React.FC = () => {
  const { count, increase, double, triple, reset } = counterStore();
  const { count: persistedCount, merge: persistedMerge, reset: persistedReset} = useStore(persistedCounterStore);

  return (
    <div style={{textAlign: 'center'}}>
      <div>
        <h2>Count: {count}</h2>
        <button onClick={increase}>+1</button>
        <button onClick={double}>Double</button>
        <button onClick={triple}>Triple</button>
        <button onClick={reset}>Reset</button>
      </div>

      <div style={{textAlign: 'center'}}>
        <h2>Count: {persistedCount}</h2>
        <button onClick={persistedMerge}>Merge</button>
        <button onClick={persistedReset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;