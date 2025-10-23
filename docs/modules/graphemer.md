---
description: Modern alternatives to the grapheme-splitter and graphemer packages for splitting strings into Unicode grapheme clusters
---

# Replacements for `grapheme-splitter` / `graphemer`

## `Intl.Segmenter` (native)

[`Intl.Segmenter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter) is the modern native JavaScript API for text segmentation, available in Node.js 16+, Chrome 87+, Safari 14.1+, and Firefox 132+.

```ts
import GraphemeSplitter from 'grapheme-splitter' // [!code --]

const splitter = new GraphemeSplitter() // [!code --]
const segmenter = new Intl.Segmenter() // [!code ++]

const graphemes = splitter.splitGraphemes(text) // [!code --]
const graphemes = [...segmenter.segment(text)].map(s => s.segment) // [!code ++]

const count = splitter.countGraphemes(text) // [!code --]
const count = [...segmenter.segment(text)].length // [!code ++]
```

## `unicode-segmenter`

[`unicode-segmenter`](https://github.com/cometkim/unicode-segmenter) is a lightweight, fast alternative with zero dependencies and excellent browser compatibility.

```ts
import GraphemeSplitter from 'grapheme-splitter' // [!code --]
import { countGraphemes, splitGraphemes } from 'unicode-segmenter/grapheme' // [!code ++]

const splitter = new GraphemeSplitter() // [!code --]

const graphemes = splitter.splitGraphemes(text) // [!code --]
const graphemes = [...splitGraphemes(text)] // [!code ++]

const count = splitter.countGraphemes(text) // [!code --]
const count = countGraphemes(text) // [!code ++]
```

You can also use it as an `Intl.Segmenter` polyfill:

```ts
import 'unicode-segmenter/intl-polyfill'

const segmenter = new Intl.Segmenter()
const graphemes = [...segmenter.segment(text)].map(s => s.segment)
```
