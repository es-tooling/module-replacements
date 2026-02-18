---
description: Modern alternatives to the fast-glob package for fast file system pattern matching
---

# Replacements for `fast-glob`

## `tinyglobby`

[`tinyglobby`](https://github.com/SuperchupuDev/tinyglobby) is a modern, lightweight alternative that provides similar functionality with better performance.

Example:

<!-- eslint-skip -->

```ts
import fg from 'fast-glob' // [!code --]
import { glob } from 'tinyglobby' // [!code ++]

const files = await fg('**/*.ts', { // [!code --]
const files = await glob('**/*.ts', { // [!code ++]
  cwd: process.cwd(),
  ignore: ['**/node_modules/**'],
  expandDirectories: false // [!code ++]
})
```

Most options from `fast-glob` have direct equivalents in `tinyglobby`. Check the [tinyglobby documentation](https://superchupu.dev/tinyglobby/migration) for the complete list of supported options.
