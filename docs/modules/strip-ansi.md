# `strip-ansi`

[`strip-ansi`](https://www.npmjs.com/package/strip-ansi) is a simple utility function that can be replaced with native APIs.

# Alternatives

## Node.js

Added in v16.11.0, `util.stripVTControlCharacters` can be used to strip ANSI escape codes from a string.

```js
import { stripVTControlCharacters } from 'node:util';

console.log(stripVTControlCharacters('\u001B[4me18e\u001B[0m')); // returns 'e18e'
```

[Documentation](https://nodejs.org/api/util.html#utilstripvtcontrolcharactersstr)

## Deno

Deno implements the Node `util` API, and also provides [`util.stripVTControlCharacters`](https://docs.deno.com/api/node/util/~/stripVTControlCharacters). The usage is identical:

```js
import { stripVTControlCharacters } from 'node:util';

console.log(stripVTControlCharacters('\u001B[4me18e\u001B[0m')); // returns 'e18e'
```

## Bun

Bun provides two options:

1. [`util.stripVTControlCharacters`](https://bun.sh/reference/node/util/stripVTControlCharacters) is supported through Bun’s Node API layer.
2. [Since Bun v1.2.21, `Bun.stripANSI`](https://bun.com/blog/release-notes/bun-v1.2.21#bun-stripansi-simd-accelerated-ansi-escape-removal) offers a high‑performance, SIMD‑accelerated alternative, often 6×–57× faster than strip-ansi.

```js
// Node-compatible API
import { stripVTControlCharacters } from 'node:util';
console.log(stripVTControlCharacters('\u001b[1mHello\u001b[0m')); // 'Hello'

// Bun’s native API (>=1.2.21)
const plain = Bun.stripANSI('\u001b[31mHello World\u001b[0m');
console.log(plain); // 'Hello World'
```
