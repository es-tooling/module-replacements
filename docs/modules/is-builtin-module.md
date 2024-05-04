# is-builtin-module

`is-builtin-module` has equivalent functionality built in to node itself.

You may not need an alternative if your runtime does not have access to the
built-in node module.

# Alternatives

## NodeJS (since 16.x)

For determining if a module is built-in or not, you can use
[isBuiltIn](https://nodejs.org/api/module.html#moduleisbuiltinmodulename):

```ts
import {isBuiltin} from 'node:module';

isBuiltin('fs'); // true
```

For a full list of built-in modules, you can use
[builtinModules](https://nodejs.org/api/module.html#modulebuiltinmodules):

```ts
import {builtinModules} from 'node:module';

for (const name of builtinModules) {
  console.log(name);
}
```
