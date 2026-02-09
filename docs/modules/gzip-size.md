---
description: Native Node.js alternatives to the gzip-size for calculating gzipped size of a string or buffer
---

# Replacements for `gzip-size`

## Node.js (since 9.4.0)

To calculate the gzipped size of a string or an `ArrayBuffer`, you can use [gzipSync](https://nodejs.org/api/zlib.html#zlibgzipsync) which exist inside the `zlib` module:

### Synchronous

```ts
import { gzipSync } from 'node:zlib'; // [!code ++]
import { gzipSizeSync } from 'gzip-size'; // [!code --]

const text = 'Lorem ipsum dolor sil amet';

console.log(gzipSync(text).length); // [!code ++]
console.log(gzipSizeSync(text)); // [!code --]
```

### Asynchronous

```ts
import { gzipSync } from 'node:zlib'; // [!code ++]
import { gzipSize } from 'gzip-size'; // [!code --]

import { promisify } from 'node:util'; // [!code ++]

const gzipAsync = promisify(gzip); // [!code ++]

const text = 'Lorem ipsum dolor sil amet';

console.log((await gzipAsync(text)).length); // [!code ++]
console.log(await gzipSize(text)); // [!code --]
```

### Calculating from a file

```ts
import { gzipSync } from 'node:zlib'; // [!code ++]
import { readFileSync } from 'node:fs'; // [!code ++]
import { gzipSizeFromFileSync } from 'gzip-size'; // [!code --]

const path = '/path/to/file';

console.log(gzipSync(readFileSync(path)).length); // [!code ++]
console.log(gzipSizeFromFileSync(path)); // [!code --]
```
