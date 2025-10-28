# Client-Side Statemanagement

## Zustand

### Introduction
A small, fast, and scalable bearbones state management solution. Zustand has a comfy API based on hooks. It isn't boilerplatey or opinionated, but has enough convention to be explicit and flux-like.
- Hook based stores
- Supports primitives, objects, and functions

### Hooks
- useStore
- useShallow (re-render only when the actual keys of the state changed)
- useStoreWithEqualityFn (define when to re-render)

### Middlewares
- subscribeWithSelector (subscribe to specific data based on current state)
- combine (create a cohesive state by merging an initial state with a state creator function)
- redux (update a store through actions and reducers just like redux)
- devTools (Redux DevTools Extension without Redux)
- immer (perform immutable updates)
- persist (persist store state in storage)
