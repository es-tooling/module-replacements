<!--
---
description: Modern alternatives to the glob package for file pattern matching and globbing
---
-->

# Replacements for `glob`

## `tinyglobby`

[`tinyglobby`](https://github.com/SuperchupuDev/tinyglobby) provides a similar API.

Example:

```diff
- import { glob } from 'glob'
+ import { glob } from 'tinyglobby'

const files = await glob('**/*.ts')
```

Most options available to `glob` are available in `tinyglobby`, read more at the [tinyglobby documentation](https://superchupu.dev/tinyglobby/documentation).

## `fs.glob` (native, since Node 22.x)

[`fs.glob`](https://nodejs.org/api/fs.html#fspromisesglobpattern-options) is built into modern versions of Node.

Example:

```diff
- import { glob } from 'glob'
+ import { glob } from 'node:fs/promises'

- const files = await glob('src/**/*.ts', {
+ const files = await Array.fromAsync(glob('src/**/*.ts', {
  cwd,
- })
+ }))
```

You can also iterate over the results asynchronously:

```ts
for await (const result of glob('src/**/*.ts', { cwd })) {
  // result is an individual path
  console.log(result)
}
```

## `fdir`

[`fdir`](https://github.com/thecodrr/fdir/) offers similar functionality but through a different API (and `tinyglobby` is actually built on top of it).

Example:

```diff
+ import { fdir } from 'fdir'
- import { glob } from 'glob'

+ const files = new fdir()
+  .withBasePath()
+  .glob('src/**/*.ts')
+  .crawl(cwd)
+  .withPromise()
- const files = await glob('src/**/*.ts', {
-   cwd,
-   maxDepth: 6
- })
```
