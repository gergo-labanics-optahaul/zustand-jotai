import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

// Main counter atom
export const countAtom = atom(0);

// Counter actions
export const increaseCountAtom = atom(
  null,
  (get, set) => set(countAtom, get(countAtom) + 1)
);

export const doubleCountAtom = atom(
  null,
  (get, set) => set(countAtom, get(countAtom) * 2)
);

export const tripleCountAtom = atom(
  null,
  (get, set) => set(countAtom, get(countAtom) * 3)
);

export const resetCountAtom = atom(
  null,
  (get, set) => set(countAtom, 0)
);

export const addFiveToCountAtom = atom(
  null,
  (get, set) => set(countAtom, get(countAtom) + 5)
);

// Persisted
export const persistedCountAtom = atomWithStorage('persistedCount', 0);

export const mergePersistedCountAtom = atom(
  null,
  (get, set) => set(persistedCountAtom, get(countAtom))
);
export const resetPersistedCountAtom = atom(
  null,
  (get, set) => set(persistedCountAtom, 0)
);
