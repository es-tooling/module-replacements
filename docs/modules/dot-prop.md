---
description: Modern alternatives to the dot-prop package for getting, setting, and deleting nested object properties using dot notation
---

# Replacements for `dot-prop`

## `dlv` + `dset`

[`dlv`](https://github.com/developit/dlv) gets nested values with default fallbacks and [`dset`](https://github.com/lukeed/dset) sets nested values with automatic intermediate object creation.

```ts
import { getProperty, setProperty } from 'dot-prop' // [!code --]
import delve from 'dlv' // [!code ++]
import { dset } from 'dset' // [!code ++]

const value = getProperty(obj, 'foo.bar.baz') // [!code --]
const value = delve(obj, 'foo.bar.baz') // [!code ++]

setProperty(obj, 'foo.bar.baz', 'value') // [!code --]
dset(obj, 'foo.bar.baz', 'value') // [!code ++]
```

## `object-path`

[`object-path`](https://github.com/mariocasciaro/object-path) provides get/set/has/delete operations plus array methods like push, insert, and empty.

```ts
import { deleteProperty, getProperty, hasProperty, setProperty } from 'dot-prop' // [!code --]
import objectPath from 'object-path' // [!code ++]

const value = getProperty(obj, 'foo.bar.baz') // [!code --]
const value = objectPath.get(obj, 'foo.bar.baz') // [!code ++]

setProperty(obj, 'foo.bar.baz', 'value') // [!code --]
objectPath.set(obj, 'foo.bar.baz', 'value') // [!code ++]

const exists = hasProperty(obj, 'foo.bar.baz') // [!code --]
const exists = objectPath.has(obj, 'foo.bar.baz') // [!code ++]

deleteProperty(obj, 'foo.bar.baz') // [!code --]
objectPath.del(obj, 'foo.bar.baz') // [!code ++]
```
