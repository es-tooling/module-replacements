---
description: Native Node.js alternatives to the read-pkg package for reading package.json files
---

# Replacements for `read-pkg`

## `pkg-types`

[`pkg-types`](https://github.com/unjs/pkg-types) provides a similar API and strong types.

For example:

```ts
import { readPackageJSON } from 'pkg-types' // [!code ++]
import { readPackage } from 'read-pkg' // [!code --]

const packageJson = await readPackage() // [!code --]
const packageJson = await readPackageJSON() // [!code ++]
```

You may also specify a `cwd`:

```ts
import { readPackageJSON } from 'pkg-types'

const packageJson = await readPackageJson({ cwd })
```

## Native `node:fs`

You can use `node:fs` to read a known `package.json`:

```ts
import fs from 'node:fs/promises' // [!code ++]
import { readPackage } from 'read-pkg' // [!code --]

const packageJson = await readPackageUp() // [!code --]
const packageJson = JSON.parse(await readFile('./package.json', 'utf8')) // [!code ++]
```

> [!NOTE]
> Using this approach, you will have to handle errors yourself (e.g. failure to read the file).
