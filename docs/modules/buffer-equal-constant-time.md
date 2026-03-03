---
description: Native Node.js alternatives to the buffer-equal-constant-time package for safe buffer equality checks
---

# Replacements for `buffer-equal-constant-time`

## `crypto.timingSafeEqual` (native)

Example:

```ts
import { Buffer } from 'node:buffer'
import bufferEqual from 'buffer-equal-constant-time' // [!code --]
import * as crypto from 'crypto' // [!code ++]

const buf1 = Buffer.from('303')
const buf2 = Buffer.from('303')

bufferEqual(buf1, buf2) // [!code --]
crypto.timingSafeEqual(buf1, buf2) // [!code ++]
```
