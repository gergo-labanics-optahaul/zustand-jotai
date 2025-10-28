# Zustand vs Jotai

## Comparison

| Feature / Aspect             | Jotai                                                                 | Zustand                                      |
|------------------------------|-----------------------------------------------------------------------|----------------------------------------------|
| Learning Curve               | easy to pickup, moderate for advanced patterns                        | very easy                                    |
| State Model                  | atoms (bottom-up)                                                     | stores (top-down)                            |
| Async                        | utility                                                               | not supported                                |
| Re-rendering                 | automatic                                                             | automatic or manual with selectors / shallow |
| Cache                        | extension                                                             | not supported                                |
| Memory / Lifetime Management | automatic cleanup possible with Bunja or Provider                     | not supported                                |
| Boilerplate                  | very low for simple apps, medium for scoped stores/families           | low                                          |
| Ideal Use Case               | complex state, performance is critical, fine-grained control required | global state, straightforward app            |
| Developer Experience         | ehh                                                                   | smooth, simple                               |