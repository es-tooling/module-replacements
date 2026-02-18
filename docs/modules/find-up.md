---
description: Modern alternatives to the find-up package for finding files by walking up parent directories
---

# Replacements for `find-up`

## `empathic`

[`empathic`](https://github.com/lukeed/empathic) provides a more generic way to find files and directories upwards.

The main difference is that `empathic` is _synchronous_, so you should no longer `await` the result.

Example:

```ts
import * as find from 'empathic/find' // [!code ++]
import { findUp } from 'find-up' // [!code --]

await findUp('package.json') // [!code --]
find.up('package.json') // [!code ++]
```

### `findUpMultiple`

When finding multiple files, you can use `find.any`:

```ts
import * as find from 'empathic/find' // [!code ++]
import { findUpMultiple } from 'find-up' // [!code --]

const files = await findUpMultiple(['package.json', 'tsconfig.json']) // [!code --]
const files = find.any(['package.json', 'tsconfig.json']) // [!code ++]
```

### Options

#### `type`

The `type` option can be replaced by using the equivalent function.

For example, finding a file:

```ts
import * as find from 'empathic/find' // [!code ++]
import { findUp } from 'find-up' // [!code --]

await findUp('package.json', { type: 'file' }) // [!code --]
find.file('package.json') // [!code ++]
```

#### `cwd`

This option is supported just the same:

```ts
find.file('package.json', { cwd })
```

#### `stopAt`

This option is replaced by `last`:

<!-- eslint-skip -->

```ts
import { findUp } from 'find-up' // [!code --]
import * as find from 'empathic/find' // [!code ++]

await findUp( // [!code --]
find.file( // [!code ++]
  'package.json',
  { stopAt: '/some/dir' }, // [!code --]
  { last: '/some/dir' }, // [!code ++]
)
```

## `pkg-types`

[`pkg-types`](https://github.com/unjs/pkg-types) provides utilities for reading and writing package.json, tsconfig.json, and other configuration files with TypeScript support.

```ts
import { findUp } from 'find-up' // [!code --]
import { readPackageJSON } from 'pkg-types' // [!code ++]

const packagePath = await findUp('package.json') // [!code --]
const packageJson = await readPackageJSON() // [!code ++]
```
