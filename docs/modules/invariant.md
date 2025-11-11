---
description: Modern alternatives to the invariant package for runtime assertions
---

# Replacements for `invariant`

## `tiny-invariant`

[`tiny-invariant`](https://github.com/alexreardon/tiny-invariant) provides a similar API with zero dependencies.

For example:

```ts
import invariant from 'invariant' // [!code --]
import invariant from 'tiny-invariant' // [!code ++]

invariant(ok, 'Hello %s, code %d', name, code) // [!code --]
invariant(ok, `Hello ${name}, code ${code}`) // [!code ++]
```

Similarly, you can lazily compute messages to avoid unnecessary work:

```ts
import invariant from 'invariant' // [!code --]
import invariant from 'tiny-invariant' // [!code ++]

invariant(value, getExpensiveMessage()) // [!code --]
invariant(value, () => getExpensiveMessage()) // [!code ++]
```
