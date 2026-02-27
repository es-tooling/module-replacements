---
description: Modern alternatives to the resolve package
---

# Replacements for `resolve`

## `import.meta.resolve` (native)

[`import.meta.resolve`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import.meta/resolve) is built into browsers and Node.js (>= 20).

Example:

```ts
const path = import.meta.resolve('my-module')
```

## `exsolve`

[`exsolve`](https://www.npmjs.com/package/exsolve)

```ts
import { resolveModulePath } from 'exsolve'

const path = resolveModulePath('my-module')
```

## `oxc-resolver`

[`oxc-resolver`](https://www.npmjs.com/package/oxc-resolver)

```ts
import { ResolverFactory } from 'oxc-resolver'

const resolver = new ResolverFactory()
const { path } = resolver.sync(process.cwd(), 'my-module')
```
