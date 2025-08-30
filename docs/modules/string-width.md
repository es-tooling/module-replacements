# string-width

`string-width` can be replaced with more modern alternatives which also come with performance and size improvements.

# Alternatives

## fast-string-width

Originally a fork of `string-width`, but much faster and smaller.

[Project Page](https://github.com/fabiospampinato/fast-string-width)
[npm](https://www.npmjs.com/package/fast-string-width)

## Bun API

Since Bun v1.0.29, `stringWidth` is available as a built‑in API:

```js
import { stringWidth } from "bun";

console.log(stringWidth("abc")); // 3
console.log(stringWidth("👩‍👩‍👧‍👦")); // 1
console.log(stringWidth("\u001b[31mhello\u001b[39m")); // 5
console.log(
  stringWidth("\u001b[31mhello\u001b[39m", { countAnsiEscapeCodes: false })
); // 5
```

[Bun blog announcement](https://bun.com/blog/bun-v1.0.29#bun-stringwidth-6-756x-faster-string-width-replacement)
[Docs](https://bun.com/reference/bun/stringWidth)
