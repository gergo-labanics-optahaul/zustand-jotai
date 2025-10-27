import {useAtom, useAtomValue, useSetAtom} from "jotai";
import React from 'react';
import {
  addFiveToCountAtom,
  countAtom,
  doubleCountAtom,
  increaseCountAtom, mergePersistedCountAtom, persistedCountAtom,
  resetCountAtom, resetPersistedCountAtom,
  tripleCountAtom
} from "../store/useJotaiCounterStore";

const JotaiCounter: React.FC = () => {
  const count = useAtomValue(countAtom);
  const increase = useSetAtom(increaseCountAtom);
  const double = useSetAtom(doubleCountAtom);
  const triple = useSetAtom(tripleCountAtom);
  const reset = useSetAtom(resetCountAtom);
  const addFive = useSetAtom(addFiveToCountAtom);

  const [ persistedCount] = useAtom(persistedCountAtom);
  const mergePersisted = useSetAtom(mergePersistedCountAtom);
  const resetPersisted = useSetAtom(resetPersistedCountAtom);

  return (
    <div style={{ textAlign: 'center' }}>
      <div>
        <h2>Count: {typeof count === 'object' ? JSON.stringify(count) : count}</h2>
        <button onClick={increase}>+1</button>
        <button onClick={double}>Double</button>
        <button onClick={triple}>Triple</button>
        <button onClick={reset}>Reset</button>
        <button onClick={addFive}>+5</button>
      </div>

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h2>Persisted Count: {persistedCount}</h2>
        <button onClick={mergePersisted}>Merge</button>
        <button onClick={resetPersisted}>Reset</button>
      </div>
    </div>
  );
};

export default JotaiCounter;