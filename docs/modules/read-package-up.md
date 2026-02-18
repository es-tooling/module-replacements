---
description: Modern alternatives to the read-package-up package for reading package.json files up the directory tree
---

# Replacements for `read-package-up`

## `pkg-types`

[`pkg-types`](https://github.com/unjs/pkg-types) provides a similar API and strong types.

For example:

```ts
import { readPackageJSON } from 'pkg-types' // [!code ++]
import { readPackageUp } from 'read-package-up' // [!code --]

const packageJson = await readPackageUp() // [!code --]
const packageJson = await readPackageJSON() // [!code ++]
```

Similarly, you can get hold of the path via `resolvePackageJSON`:

```ts
import { resolvePackageJSON } from 'pkg-types'

const packageJsonPath = await resolvePackageJSON()
```

## `empathic`

[`empathic`](https://github.com/lukeed/empathic) provides a more generic way to find files and directories upwards.

It can be combined with `node:fs` to read `package.json` files:

```ts
import fs from 'node:fs/promises' // [!code ++]
import * as pkg from 'empathic' // [!code ++]
import { readPackageUp } from 'read-package-up' // [!code --]

const packageJson = await readPackageUp() // [!code --]
const packageJsonPath = pkg.up() // [!code ++]
const packageJson = packageJsonPath // [!code ++]
  ? JSON.parse(await readFile(packageJsonPath, 'utf8')) // [!code ++]
  : undefined // [!code ++]
```

> [!NOTE]
> This is of course a more manual way to read the `package.json` file, so one of the other options may be more attractive.
