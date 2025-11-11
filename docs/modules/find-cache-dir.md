---
description: Modern alternatives to the find-cache-dir package for locating cache directories
---

# Replacements for `find-cache-dir`

## `empathic`

[`empathic`](https://github.com/lukeed/empathic) provides a more generic way to find files and directories upwards.

Example:

```ts
import * as pkg from 'empathic' // [!code ++]
import findCacheDirectory from 'find-cache-dir' // [!code --]

findCacheDirectory({ name: 'foo' }) // [!code --]
pkg.cache('foo') // [!code ++]
```
