---
description: Modern alternatives to the pkg-dir package for finding package root directories
---

# Replacements for `pkg-dir`

## `empathic`

[`empathic`](https://github.com/lukeed/empathic) provides a more generic way to find files and directories upwards.

The main difference is that `empathic` is _synchronous_, so you should no longer `await` the result.

Example:

```ts
import { dirname } from 'node:path' // [!code ++]
import * as pkg from 'empathic/package' // [!code ++]
import { packageDirectory } from 'pkg-dir' // [!code --]

const dir = await packageDirectory() // [!code --]
const dir = dirname(pkg.up()) // [!code ++]
```
