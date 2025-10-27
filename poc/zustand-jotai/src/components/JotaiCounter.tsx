import {useAtomValue, useSetAtom} from "jotai";
import React from 'react';
import {
  counterState, mergePersistedCounterStateAtom,
  persistedCounterStateAtom, resetPersistedCounterStateAtom, updateCountAtom,
} from "../store/useJotaiCounterStore";

const JotaiCounter: React.FC = () => {
  const {count} = useAtomValue(counterState);
  const update = useSetAtom(updateCountAtom);

  const {count: persistedCount} = useAtomValue(persistedCounterStateAtom);
  const mergePersisted = useSetAtom(mergePersistedCounterStateAtom);
  const resetPersisted = useSetAtom(resetPersistedCounterStateAtom);

  return (
    <div style={{ textAlign: 'center' }}>
      <div>
        <h2>Count: {count}</h2>
        <button onClick={() => update(count + 1)}>+1</button>
        <button onClick={() => update(count * 2)}>Double</button>
        <button onClick={() => update(count * 3)}>Triple</button>
        <button onClick={() => update(0)}>Reset</button>
        <button onClick={() => update(count + 5)}>+5</button>
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