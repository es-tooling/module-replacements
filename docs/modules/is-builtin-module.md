# is-builtin-module

`is-builtin-module` has equivalent functionality built in to node itself.

You may not need an alternative if your runtime does not have access to the
built-in node module.

# Alternatives

## Node.js (since 16.x)

For determining if a module is built-in or not, you can use
[isBuiltIn](https://nodejs.org/api/module.html#moduleisbuiltinmodulename):

```ts
import {isBuiltin} from 'node:module';

isBuiltin('fs'); // true
```

## Node.js (6.x to 15.x)

Before Node.js 16.x, `isBuiltin` was not available, so you need to implement your own check using [builtinModules](https://nodejs.org/api/module.html#modulebuiltinmodules):

```ts
import {builtinModules} from 'node:module';

function isBuiltin(moduleName) {
  const name = moduleName.startsWith('node:')
    ? moduleName.slice(5)
    : moduleName;

  return builtinModules.includes(name);
}

isBuiltin('fs'); // true
```

## Getting all built-in modules

For a full list of built-in modules (available since Node.js 6.x), you can use
[builtinModules](https://nodejs.org/api/module.html#modulebuiltinmodules):

```ts
import {builtinModules} from 'node:module';

for (const name of builtinModules) {
  console.log(name);
}
```
