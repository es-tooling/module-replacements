---
description: Native Node.js alternatives to the buffer-equal-constant-time package for safe buffer equality checks
---

# Replacements for `buffer-equal-constant-time`

## `crypto.timingSafeEqual` (native)

You can use the [`timingSafeEqual`](https://nodejs.org/api/crypto.html#cryptotimingsafeequala-b) function from the `node:crypto` module.

If it is known that `buf1` and `buf2` have same size:

```ts
import { Buffer } from 'node:buffer'
import bufferEqual from 'buffer-equal-constant-time' // [!code --]
import * as crypto from 'node:crypto' // [!code ++]

const buf1 = Buffer.from('303')
const buf2 = Buffer.from('303')

bufferEqual(buf1, buf2) // [!code --]
crypto.timingSafeEqual(buf1, buf2) // [!code ++]
```

If size of `bufSecret` is publicly known:

```ts
import { Buffer } from 'node:buffer'
import bufferEqual from 'buffer-equal-constant-time' // [!code --]
import * as crypto from 'node:crypto' // [!code ++]

const bufUser = Buffer.from('303')
const bufSecret = Buffer.from('303')

bufferEqual(bufUser, bufSecret) // [!code --]
bufUser.length === bufSecret.length && // [!code ++]
  crypto.timingSafeEqual(bufUser, bufSecret) // [!code ++]
```

If size of `bufSecret` is not publicly known:

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
