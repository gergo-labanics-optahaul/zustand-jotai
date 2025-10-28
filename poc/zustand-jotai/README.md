# Zustand vs Jotai

## Comparison

| Feature / Aspect             | Jotai                                                                 | Zustand                                                       |
|------------------------------|-----------------------------------------------------------------------|---------------------------------------------------------------|
| State Model                  | atoms (bottom-up)                                                     | stores (top-down)                                             |
| Async                        | utility                                                               | not supported                                                 |
| Re-rendering                 | automatic                                                             | automatic or manual with selectors / shallow                  |
| Cache                        | extension                                                             | not supported                                                 |
| Memory / Lifetime Management | automatic cleanup possible with Bunja (third-party) or Provider       | not supported                                                 |
| Derived State handling       | third-party                                                           | middleware                                                    |
| Boilerplate                  | very low for simple apps, medium for scoped stores/families           | low                                                           |
| Type Safety                  | excellent                                                             | good, types mostly inferred, but middleware may require hints |
| React Context                | strongly relies on it                                                 | framework-agnostic                                            |
| DevTools                     | Jotai DevTools                                                        | middleware + Redux DevTools Extension                         |
| Ideal Use Case               | complex state, performance is critical, fine-grained control required | global state, straightforward app                             |
| Learning Curve               | slightly more complex, more concepts to understand                    | very easy                                                     |
| Developer Experience         | conceptual                                                            | smooth, simple                                                |