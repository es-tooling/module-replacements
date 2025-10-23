---
description: Modern alternatives to the deep-equal package for deep object comparison
---

# Replacements for `deep-equal`

## `dequal`

[`dequal`](https://www.npmjs.com/package/dequal) has the same simple API as deep equal.

Example:

```ts
import equal from 'deep-equal' // [!code --]
import dequal from 'dequal' // [!code ++]

const a = { foo: 'bar' }
const b = { foo: 'bar' }

equal(a, b) // true [!code --]
dequal(a, b) // true [!code ++]
```

## `fast-deep-equal`

[`fast-deep-equal`](https://www.npmjs.com/package/fast-deep-equal) again has the same API shape.

Example:

```ts
import deepEqual from 'deep-equal' // [!code --]
import fastDeepEqual from 'fast-deep-equal' // [!code ++]

const a = { foo: 'bar' }
const b = { foo: 'bar' }

deepEqual(a, b) // true [!code --]
fastDeepEqual(a, b) // true [!code ++]
```

> [!NOTE]
> This library has a separate entrypoint for supporting Maps, Sets, etc. You can use `fast-deep-equal/es6` to support those types.
