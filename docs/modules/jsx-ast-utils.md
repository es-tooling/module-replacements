---
description: Modern alternatives to the jsx-ast-utils package for statically analyzing JSX ASTs
---

# Replacements for `jsx-ast-utils`

## `jsx-ast-utils-x`

[`jsx-ast-utils-x`](https://github.com/eslinter/jsx-ast-utils-x) is a zero‑dependency alternative to [`jsx-ast-utils`](https://github.com/jsx-eslint/jsx-ast-utils) that aims to maintain API compatibility while reducing package size.

```ts
import { hasProp } from 'jsx-ast-utils' // [!code --]
import { hasProp } from 'jsx-ast-utils-x' // [!code ++]

import hasProp from 'jsx-ast-utils/hasProp' // [!code --]
import hasProp from 'jsx-ast-utils-x/hasProp' // [!code ++]

module.exports = context => ({
  JSXOpeningElement: (node) => {
    const onChange = hasProp(node.attributes, 'onChange')
    if (onChange) {
      context.report({ node, message: 'No onChange!' })
    }
  },
})
```
