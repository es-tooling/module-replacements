---
description: Modern alternatives to the clipboardy package for copy/pasting on Node.js and in the browser
---

# Replacements for `clipboardy`

## `tinyclip`

If you need clipboard functionality in Node.js, use [`tinyclip`](https://github.com/tinylibs/tinyclip):

```js
import clipboard from 'clipboardy' // [!code --]
import * as clipboard from 'tinyclip' // [!code ++]

await clipboard.write('hello world') // [!code --]
await clipboard.writeText('hello world') // [!code ++]
await clipboard.read() // [!code --]
await clipboard.readText() // [!code ++]
```

> [!NOTE]
> `writeSync()` and `readSync()` do not have any equivalent in `tinyclip`, we recommend you migrate to their async versions.

## Clipboard API (native, browser)

Learn more about the [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API).

```js
import clipboard from 'clipboardy' // [!code --]

await clipboard.write('hello world') // [!code --]
await navigator.clipboard.writeText('hello world') // [!code ++]
await clipboard.read() // [!code --]
await navigator.clipboard.readText() // [!code ++]
```

> [!NOTE]
> `writeSync()` and `readSync()` do not have an equivalent in browsers.
