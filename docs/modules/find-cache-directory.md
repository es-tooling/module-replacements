---
description: Modern alternatives to the find-cache-directory package for locating cache directories
---

# Replacements for `find-cache-directory`

## `empathic`

[`empathic`](https://github.com/lukeed/empathic) provides a more generic way to find files and directories upwards.

Example:

```diff
- import findCacheDirectory from 'find-cache-directory'
+ import * as pkg from 'empathic'

- findCacheDirectory({ name: 'foo' })
+ pkg.cache('foo')
```
