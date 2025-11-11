---
description: Modern alternatives to the eslint-plugin-node package for Node.js-specific linting rules
---

# Replacements for `eslint-plugin-node`

## `eslint-plugin-n`

[`eslint-plugin-n`](https://github.com/eslint-community/eslint-plugin-n) is a direct fork which is actively maintained. It has new features, bugfixes and updated dependencies.

```ts
import nPlugin from 'eslint-plugin-n' // [!code ++]
import nodePlugin from 'eslint-plugin-node' // [!code --]

export default [
  {
    files: ['**/*.js'], // or any other pattern
    plugins: {
      node: nodePlugin, // [!code --]
      n: nPlugin, // [!code ++]
    },
    rules: {
      ...nodePlugin.configs['recommended-script'].rules, // [!code --]
      ...nPlugin.configs['recommended-script'].rules, // [!code ++]
      'node/exports-style': ['error', 'module.exports'], // [!code --]
      'n/exports-style': ['error', 'module.exports'], // [!code ++]
    },
  },
]
```

If you're using a legacy config format:

```ts
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:node/recommended', // [!code --]
    'plugin:n/recommended', // [!code ++]
  ],
}
```
