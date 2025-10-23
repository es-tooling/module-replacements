---
description: Modern alternatives to the emoji-regex package for emoji detection and matching
---
# Replacements for `emoji-regex`

## `emoji-regex-xs`

[`emoji-regex-xs`](https://github.com/slevithan/emoji-regex-xs) offers the same API and features whilst being 98% smaller.

```diff
- import emojiRegex from 'emoji-regex'
+ import emojiRegex from 'emoji-regex-xs'

const text = `
\u{231A}: ⌚ default emoji presentation character (Emoji_Presentation)
\u{2194}\u{FE0F}: ↔️ default text presentation character rendered as emoji
\u{1F469}: 👩 emoji modifier base (Emoji_Modifier_Base)
\u{1F469}\u{1F3FF}: 👩🏿 emoji modifier base followed by a modifier
`

const regex = emojiRegex()
for (const match of text.matchAll(regex)) {
  const emoji = match[0]
  console.log(`Matched sequence ${emoji} — code points: ${[...emoji].length}`)
}
```

## Unicode RegExp (native)

If your target runtime supports ES2024 Unicode property sets, you can use the native [`\p{RGI_Emoji}`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape) property in a regular expression. This relies on the engine's built‑in Unicode handling.

```diff
- import emojiRegex from 'emoji-regex'

- const regex = emojiRegex()
+ const regex = /\p{RGI_Emoji}/gv

for (const match of text.matchAll(regex)) {
  const emoji = match[0]
  console.log(`Matched sequence ${emoji} — code points: ${[...emoji].length}`)
}
```
