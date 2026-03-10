---
description: Native Node.js alternatives to the buffer-equal-constant-time package for safe buffer equality checks
---

# Replacements for `buffer-equal-constant-time`

## `crypto.timingSafeEqual` (native)

You can use the [`timingSafeEqual`](https://nodejs.org/api/crypto.html#cryptotimingsafeequala-b) function from the `node:crypto` module.

Example:

```ts
import { Buffer } from 'node:buffer'
import bufferEqual from 'buffer-equal-constant-time' // [!code --]
import * as crypto from 'node:crypto' // [!code ++]

const bufUser = Buffer.from('303')
const bufSecret = Buffer.from('303')

bufferEqual(bufUser, bufSecret) // [!code --]
bufUser.length === bufSecret.length // [!code ++]
  ? crypto.timingSafeEqual(bufUser, bufSecret) // [!code ++]
  : !crypto.timingSafeEqual(bufUser, bufUser) // [!code ++]
```
