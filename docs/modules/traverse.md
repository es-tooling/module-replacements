# traverse

Traverse and transform objects by visiting every node on a recursive walk.

```js
var traverse = require('traverse');
var obj = [ 5, 6, -3, [ 7, 8, -2, 1 ], { f : 10, g : -13 } ];

traverse(obj).forEach(function (x) {
    if (x < 0) this.update(x + 128);
});

console.dir(obj);
```

# Alternatives

## neotraverse

Traverse and transform objects by visiting every node on a recursive walk. This is a fork and TypeScript rewrite of [traverse](https://github.com/ljharb/js-traverse) with 0 dependencies and major improvements:

- 🤌 1.38KB min+brotli
- 🚥 Zero dependencies
- 🎹 TypeScript. Throw away the `@types/traverse` package
- ❎ No polyfills
- 🛸 ESM-first
- 📜 Legacy mode supporting ES5

| Build   | ESM       | CJS | Browser | Node | Polyfills | Size              |
| ------- | --------- | --- | ------- | ---- | --------- | ----------------- |
| default | ✅ ES2022 |     | ✅      | ✅   | ❌        | 1.54KB min+brotli |
| modern  | ✅ ES2022 |     | ✅      | ✅   | ❌        | 1.38KB min+brotli |
| legacy  | ✅ ES5    | ✅  | ✅      | ✅   | ❌        | 2.73KB min+brotli |

```ts
import traverse from 'neotraverse';

const obj = { a: 1, b: 2, c: [3, 4] };

traverse(obj).forEach(function (x) {
  if (x < 0) this.update(x + 128);
});
```

[Project Page](https://github.com/puruvj/neotraverse)

[NPM](https://npmjs.com/package/neotraverse)
