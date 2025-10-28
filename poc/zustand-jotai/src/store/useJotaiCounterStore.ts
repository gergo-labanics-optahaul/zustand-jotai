import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

// Primitive
export const countAtom = atom<number>(0);

export const increaseCountNumberAtom = atom(
  null, (get, set) => set(countAtom, get(countAtom) + 1 )
);

// Interface
interface CounterState {
  count: number,
}

export const counterState = atom<CounterState>({
  count: 0,
})

export const updateCountAtom = atom(
  null,
  (get, set, newCount: number) => {
    const state = get(counterState);
    set(counterState, { ...state, count: newCount });
  }
);

// Persisted
export const persistedCounterStateAtom = atomWithStorage<CounterState>('persistedCount', { count: 0});

export const mergePersistedCounterStateAtom = atom(
  null,
  (get, set) => set(persistedCounterStateAtom, get(counterState))
);

export const resetPersistedCounterStateAtom = atom(
  null,
  (_, set) => set(persistedCounterStateAtom, { count: 0 })
);