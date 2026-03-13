---
description: Modern alternatives to the clean-webpack-plugin package
---

# Replacements for `clean-webpack-plugin`

## `output.clean` (built-in, since webpack 5)

Example:

```js
const { CleanWebpackPlugin } = require('clean-webpack-plugin') // [!code --]

module.exports = {
  plugins: [new CleanWebpackPlugin()], // [!code --]
  output: { clean: true } // [!code ++]
}
```
