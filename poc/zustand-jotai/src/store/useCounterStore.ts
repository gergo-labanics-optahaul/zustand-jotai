import { create } from 'zustand';
import { persist } from "zustand/middleware";

interface CounterState {
  count: number;
  increase: () => void;
  double: () => void
  triple: () => void;
  reset: () => void;
}

const tripleCount = (get: () => CounterState, set: (state: Partial<CounterState>) => void) => {
  set({ count: get().count * 3 })
};

export const counterStore = create<CounterState>((set, get) => ({
  count: 0,
  increase: () => set((state) => ({count: state.count + 1})),
  double: () => {
    const value = get().count;
    set({count: value * 2});
  },
  triple: () => tripleCount(get, set),
  reset: () => set({count: 0}),
}));




























interface PersistedCounterState {
  count: number;
  merge: () => void;
  reset: () => void;
}

export const persistedCounterStore = create<PersistedCounterState>()(
  persist<PersistedCounterState>(
    (set) => ({
      count: 0,
      merge: () => set({ count: counterStore.getState().count }),
      reset: () => set({ count: 0 }),
    }),
    {
      name: 'counter-storage',
    }
  )
);
