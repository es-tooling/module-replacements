---
description: Native Node.js alternatives to the md5 package for MD5 hash generation
---

# Replacements for `md5`

## `crypto` (native)

If you're using the [`md5`](https://github.com/pvorb/node-md5) package, consider using a stronger algorithm where possible. If you must keep MD5 for compatibility, Node.js provides a native alternative via the `crypto` module.

```ts
import crypto from 'node:crypto' // [!code ++]
import md5 from 'md5' // [!code --]

md5('message') // [!code --]
crypto.createHash('md5').update('message').digest('hex') // [!code ++]
```
