---
description: Native Node.js alternatives to the split package for splitting stream by lines
---

# Replacements for `split`

## `readline.createInterface` (native, since Node.js v6.6.0)

Example:

<!-- prettier-ignore -->
```js
import split from 'split' // [!code --]
import { createInterface } from 'node:readline' // [!code ++]

const input = fs.createReadStream('file.txt')

const stream = input.pipe(split()) // [!code --]
stream.on('data', (line) => { // [!code --]
  fn(line) // [!code --]
}) // [!code --]

const lines = createInterface({ input, crlfDelay: Infinity }) // [!code ++]

for await (const line of lines) { // [!code ++]
  fn(line) // [!code ++]
} // [!code ++]
```
