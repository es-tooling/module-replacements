---
description: Modern alternatives to the path-exists package for checking if a path exists
---

# Replacements for `path-exists`

## Node.js (async)

Use [`fs/promises.access`](https://nodejs.org/docs/latest/api/fs.html#fspromisesaccesspath-mode) and return a boolean.

```ts
import pathExists from 'path-exists' // [!code --]
import { access } from 'node:fs/promises' // [!code ++]

const exists = await pathExists('/etc/passwd') // [!code --]
const exists = await access('/etc/passwd').then(() => true, () => false) // [!code ++]
```

## Node.js (sync)

Added in v0.1.21: synchronous path/file existence check via [`fs.existsSync`](https://nodejs.org/docs/latest/api/fs.html#fsexistssyncpath).

```ts
import pathExists from 'path-exists' // [!code --]
import { existsSync } from 'node:fs' // [!code ++]

if (await pathExists('/etc/passwd')) // [!code --]
if (existsSync('/etc/passwd')) // [!code ++]
  console.log('The path exists.')
```

## Bun

[`Bun.file()`](https://bun.sh/reference/bun/BunFile) returns a BunFile with an `.exists()` method.

```ts
import pathExists from 'path-exists' // [!code --]

const path = '/path/to/package.json'
const exists = await pathExists(path) // [!code --]
const file = Bun.file(path) // [!code ++]
const exists = await file.exists() // boolean [!code ++]
```
