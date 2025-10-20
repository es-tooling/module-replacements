<!--
---
description: Modern alternatives to the sort-object package for sorting object keys
---
-->

# Replacements for `sort-object`

## JavaScript APIs (`Object.keys` + `Array.sort`)

For simple cases:

```diff
- import sortObj from 'sort-object'

- const sorted = sortObj(object)

+ const sorted = Object.fromEntries(
+  Object.entries(object).sort((a, b) => a[0].localeCompare(b[0]))
+ )
```

Replicating `sortBy` (function returns an ordered key list):

```diff
- import sortObj from 'sort-object'

- const sorted = sortObj(object, { sortBy: (obj) => {
-  const arr = []
-  Object.keys(obj).forEach((k) => {
-    if (obj[k].startsWith('a'))
-      arr.push(k)
-  })
-  return arr.reverse()
- } })

+ const sortBy = obj => Object.keys(obj).filter(k => obj[k].startsWith('a')).reverse()
+ const sorted = Object.fromEntries(
+  sortBy(object).map(k => [k, object[k]])
+ )
```

## `sort-object-keys`

[`sort-object-keys`](https://www.npmjs.com/package/sort-object-keys) is zero‑dependency and matches common `sort-object` use cases (custom order array or comparator).

```diff
- import sortObj from 'sort-object'
+ import sortObjectKeys from 'sort-object-keys'

- const sorted = sortObj(object)
+ const sorted = sortObjectKeys(object)

- const sortedByCmp = sortObj(object, { sort: (a, b) => a.localeCompare(b) })
+ const sortedByCmp = sortObjectKeys(object, (a, b) => a.localeCompare(b))
```

## `sortobject`

[`sortobject`](https://www.npmjs.com/package/sortobject) is zero‑dependency and deeply sorts nested objects.

```diff
- import sortObj from 'sort-object'
+ import sortobject from 'sortobject'

- const sorted = sortObj(object)
+ const sorted = sortobject(object)
```
