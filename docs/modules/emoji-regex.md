# emoji-regex

There are alternative packages to `emoji-regex` whilst being smaller in package size.

# Alternatives

## emoji-regex-xs

`emoji-regex-xs` offers the same API and features whilst being 98% smaller.

[Project Page](https://github.com/slevithan/emoji-regex-xs)

[npm](https://npmjs.com/package/emoji-regex-xs)

## Unicode RegExp (native)

If your target runtime supports ES2024 Unicode property sets, you can use the native [`\p{RGI_Emoji}`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) property in a regular expression. This relies on the engine's built‑in Unicode handling.

```ts
import emojiRegex from 'emoji-regex'

const regex = emojiRegex()
const regex = /\p{RGI_Emoji}/gv

for (const match of text.matchAll(regex)) {
  const emoji = match[0]
  console.log(`Matched sequence ${emoji} — code points: ${[...emoji].length}`)
}
```
