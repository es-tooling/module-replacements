<!--
---
description: Modern alternatives to the dot-prop package for getting, setting, and deleting nested object properties using dot notation
---
-->

# Replacements for `dot-prop`

## `dlv` + `dset`

[`dlv`](https://github.com/developit/dlv) gets nested values with default fallbacks and [`dset`](https://github.com/lukeed/dset) sets nested values with automatic intermediate object creation.

```diff
- import { getProperty, setProperty } from 'dot-prop'
+ import delve from 'dlv'
+ import { dset } from 'dset'

- const value = getProperty(obj, 'foo.bar.baz')
+ const value = delve(obj, 'foo.bar.baz')

- setProperty(obj, 'foo.bar.baz', 'value')
+ dset(obj, 'foo.bar.baz', 'value')
```

## `object-path`

[`object-path`](https://github.com/mariocasciaro/object-path) provides get/set/has/delete operations plus array methods like push, insert, and empty.

```diff
- import { deleteProperty, getProperty, hasProperty, setProperty } from 'dot-prop'
+ import objectPath from 'object-path'

- const value = getProperty(obj, 'foo.bar.baz')
+ const value = objectPath.get(obj, 'foo.bar.baz')

- setProperty(obj, 'foo.bar.baz', 'value')
+ objectPath.set(obj, 'foo.bar.baz', 'value')

- const exists = hasProperty(obj, 'foo.bar.baz')
+ const exists = objectPath.has(obj, 'foo.bar.baz')

- deleteProperty(obj, 'foo.bar.baz')
+ objectPath.del(obj, 'foo.bar.baz')
```
