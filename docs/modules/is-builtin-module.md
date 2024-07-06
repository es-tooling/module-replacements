# is-builtin-module / builtin-modules / is-core-module

[`is-builtin-module`](https://www.npmjs.com/package/is-builtin-module), [`builtin-modules`](https://www.npmjs.com/package/builtin-modules), and [`is-core-module`](https://www.npmjs.com/package/is-core-module) has equivalent functionality built in to Node itself for Node versions above `8.10.0`.

For cases where you are operating in non-Node runtimes (like the browser) you may still need to use these packages.

# Alternatives

## NodeJS

For determining if a module is built-in or not, you can use
[isBuiltIn](https://nodejs.org/api/module.html#moduleisbuiltinmodulename). This requires
Node.js `16.17.0` / `18.6.0` or higher.

```ts
import {isBuiltin} from 'node:module';

isBuiltin('fs'); // true
```

For a full list of built-in modules, you can use
[builtinModules](https://nodejs.org/api/module.html#modulebuiltinmodules). This can be used
with Node.js `8.10.0` / `6.13.0` or higher.

```ts
import {builtinModules} from 'node:module';

for (const name of builtinModules) {
  console.log(name);
}
```

If you can't use `isBuiltin`, you can replicate it's functionality with `builtinModules`:

```js
import {builtinModules} from 'node:module';

function isBuiltin(name) {
  return builtinModules.includes(name);
}
```
