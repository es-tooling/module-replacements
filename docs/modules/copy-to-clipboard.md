---
description: Modern alternatives to the clipboard, clipboard-copy, copy-text-to-clipboard and copy-to-clipboard packages for copy/pasting in the browser
---

# Replacements

Learn more about the [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API).

## `clipboard`

```js
new ClipboardJS('.btn') // [!code --]

document.querySelectorAll('.btn').forEach((element) => { // [!code ++]
    element.addEventListener('click', async (e) => { // [!code ++]
        await navigator.clipboard.writeText(e.innerText) // [!code ++]
    }) // [!code ++]
}) // [!code ++]
```

## `clipboard-copy`

```js
const copy = require('clipboard-copy') // [!code --]

button.addEventListener('click', async () => {
    copy('hello world') // [!code --]
    await navigator.clipboard.writeText('hello world') // [!code ++]
})
```

## `copy-text-to-clipboard`

```js
import copy from 'copy-text-to-clipboard' // [!code --]

button.addEventListener('click', async () => {
    copy('hello world') // [!code --]
    await navigator.clipboard.writeText('hello world') // [!code ++]
})
```

## `copy-to-clipboard`

```js
import copy from 'copy-to-clipboard' // [!code --]

copy('hello world') // [!code --]

button.addEventListener('click', async () => { // [!code ++]
    await navigator.clipboard.writeText('hello world') // [!code ++]
}) // [!code ++]
```