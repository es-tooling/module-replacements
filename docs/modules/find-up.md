<!--
---
description: Modern alternatives to the find-up package for finding files by walking up parent directories
---
-->

# Replacements for `find-up`

## `empathic`

[`empathic`](https://github.com/lukeed/empathic) provides a more generic way to find files and directories upwards.

The main difference is that `empathic` is _synchronous_, so you should no longer `await` the result.

Example:

```diff
- import { findUp } from 'find-up'
+ import * as find from 'empathic/find'

- await findUp('package.json')
+ find.up('package.json')
```

### `findUpMultiple`

When finding multiple files, you can use `find.any`:

```diff
- import { findUpMultiple } from 'find-up'
+ import * as find from 'empathic/find'

- const files = await findUpMultiple(['package.json', 'tsconfig.json'])
+ const files = find.any(['package.json', 'tsconfig.json'])
```

### Options

#### `type`

The `type` option can be replaced by using the equivalent function.

For example, finding a file:

```diff
- import { findUp } from 'find-up'
+ import * as find from 'empathic/find'

- await findUp('package.json', { type: 'file' })
+ find.file('package.json')
```

#### `cwd`

This option is supported just the same:

```ts
find.file('package.json', { cwd })
```

#### `stopAt`

This option is replaced by `last`:

```diff
- import { findUp } from 'find-up'
+ import * as find from 'empathic/find'

- await findUp(
+ find.file(
  'package.json',
-   { stopAt: '/some/dir' },
+  { last: '/some/dir' },
)
```
