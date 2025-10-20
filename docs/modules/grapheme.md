<!--
---
description: Modern alternatives to the grapheme package for Unicode text segmentation
---
-->

# Replacements for `grapheme`

## Intl API

[`Intl.Segmenter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter) is provided by following modern JavaScript runtimes

- Node.js v16 / Bun / Deno
- Chrome v87
- Safari v14.1
- Firefox v132

```ts
const segmenter = new Intl.Segmenter();

const segments = [...segmenter.segment(text)];
```

## unicode-segmenter

[`unicode-segmenter`](https://github.com/cometkim/unicode-segmenter) is a lighter and faster alternative that implement Unicode text segmentation standard with zero dependencies.

```ts
import { graphemeSegments } from 'unicode-segmenter/grapheme';

const segments = [...graphemeSegments(text)];
```

The API is almost same with the `Intl.Segmenter`, so you can also use it as polyfill.

```ts
import { Segmenter } from 'unicode-segmenter/intl-adapter';
// or
import 'unicode-segmenter/intl-polyfill';
```
