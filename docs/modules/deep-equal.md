<!--
---
description: Modern alternatives to the deep-equal package for deep object comparison
---
-->

# Replacements for `deep-equal`

## `dequal`

[`dequal`](https://www.npmjs.com/package/dequal) has the same simple API as deep equal.

Example:

```diff
- import equal from 'deep-equal'
+ import dequal from 'dequal'

const a = { foo: 'bar' }
const b = { foo: 'bar' }

- equal(a, b)
+ dequal(a, b)
```

## `fast-deep-equal`

[`fast-deep-equal`](https://www.npmjs.com/package/fast-deep-equal) again has the same API shape.

Example:

```diff
- import deepEqual from 'deep-equal'
+ import fastDeepEqual from 'fast-deep-equal'

const a = { foo: 'bar' }
const b = { foo: 'bar' }

- deepEqual(a, b)
+ fastDeepEqual(a, b)
```

> [!NOTE]
> This library has a separate entrypoint for supporting Maps, Sets, etc. You can use `fast-deep-equal/es6` to support those types.
