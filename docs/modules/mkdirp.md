---
description: Modern alternatives to the mkdirp and make-dir packages for recursively creating directories in Node.js
---

# Replacements for `mkdirp` / `make-dir`

## Node.js (since v10.12.0)

Node.js v10.12.0 and up supports the `recursive` option in the [`fs.mkdir`](https://nodejs.org/api/fs.html#fsmkdirpath-options-callback) function, which allows parent directories to be created automatically.

Example migration from [`mkdirp`](https://github.com/isaacs/node-mkdirp):

```ts
import { mkdirp } from 'mkdirp' // [!code --]
import { mkdir, mkdirSync } from 'node:fs' // [!code ++]
import { mkdir as mkdirAsync } from 'node:fs/promises' // [!code ++]

// Async
await mkdirp('/tmp/foo/bar/baz') // [!code --]
await mkdirAsync('/tmp/foo/bar/baz', { recursive: true }) // [!code ++]

// Sync
mkdirp.sync('/tmp/foo/bar/baz') // [!code --]
mkdirSync('/tmp/foo/bar/baz', { recursive: true }) // [!code ++]
```

Example migration from [`make-dir`](https://github.com/sindresorhus/make-dir):

```ts
import { makeDirectory, makeDirectorySync } from 'make-dir' // [!code --]
import { mkdir, mkdirSync } from 'node:fs' // [!code ++]
import { mkdir as mkdirAsync } from 'node:fs/promises' // [!code ++]

// Async
await makeDirectory('/tmp/foo/bar/baz') // [!code --]
await mkdirAsync('/tmp/foo/bar/baz', { recursive: true }) // [!code ++]

// Sync
makeDirectorySync('/tmp/foo/bar/baz') // [!code --]
mkdirSync('/tmp/foo/bar/baz', { recursive: true }) // [!code ++]
```
