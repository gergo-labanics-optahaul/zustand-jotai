import React from 'react';
import {useStore} from "zustand/react";
import {addFiveToCounter, counterState, persistedCounterState} from "../store/useZustandCounterStore";

const ZustandCounter: React.FC = () => {
  const { count, increase, double, triple, reset } = counterState();
  // const { count, increase, double, triple, reset } = counterState.getState();
  const { count: persistedCount, merge: persistedMerge, reset: persistedReset} = useStore(persistedCounterState);

  return (
    <div style={{textAlign: 'center'}}>
      <div>
        <h2>Count: {count}</h2>
        <button onClick={increase}>+1</button>
        <button onClick={double}>Double</button>
        <button onClick={triple}>Triple</button>
        <button onClick={reset}>Reset</button>
        <button onClick={addFiveToCounter}>+5</button>
      </div>

      <div style={{textAlign: 'center'}}>
        <h2>Persisted Count: {persistedCount}</h2>
        <button onClick={persistedMerge}>Merge</button>
        <button onClick={persistedReset}>Reset</button>
      </div>
    </div>
  );
};

export default ZustandCounter;