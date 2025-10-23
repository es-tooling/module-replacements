---
description: Native Node.js alternatives to the is-builtin-module package for checking built-in modules
---
# Replacements for `is-builtin-module`

## Node.js (since 16.x)

For determining if a module is built-in or not, you can use [isBuiltin](https://nodejs.org/api/module.html#moduleisbuiltinmodulename):

```diff
+ import { isBuiltin } from 'node:module'
- import isBuiltinModule from 'is-builtin-module'

+ isBuiltin('fs')
- isBuiltinModule('fs')
```

## Node.js 6.x to 15.x

Before Node.js 16.x, `isBuiltin` was not available, so you need to implement your own check using [builtinModules](https://nodejs.org/api/module.html#modulebuiltinmodules):

```diff
+ import { builtinModules } from 'node:module'
- import isBuiltinModule from 'is-builtin-module'

+ function isBuiltin(moduleName) {
+  const name = moduleName.startsWith('node:')
+    ? moduleName.slice(5)
+    : moduleName

+  return builtinModules.includes(name)
+ }

+ isBuiltin('fs')
- isBuiltinModule('fs')
```
