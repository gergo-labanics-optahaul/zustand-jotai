# Zustand vs Jotai

## Comparison

Feature / Aspect| Jotai                             | Zustand
--- |-----------------------------------| ---
Learning Curve | easy                              | very easy
State Model | atoms (bottom-up)                 | stores (top-down)
Async | utility                           | manual
Re-rendering | automatic                         | automatic or manual with selectors / shallow
Cache | extension                         | not supported
Ideal Use Case | global state, straightforward app | complex state, performance is critical, fine-grained control required
Developer Experience | ehh | nice