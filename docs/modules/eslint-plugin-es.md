---
description: Modern alternatives to the eslint-plugin-es package for ECMAScript feature linting
---

# Replacements for `eslint-plugin-es`

## `eslint-plugin-es-x`

[eslint-plugin-es-x](https://github.com/eslint-community/eslint-plugin-es-x) is a direct fork which is actively maintained. It has new features, bugfixes and updated dependencies.

```js
import { FlatCompat } from '@eslint/eslintrc' // [!code --]
import pluginES from 'eslint-plugin-es' // [!code --]
import pluginESx from 'eslint-plugin-es-x' // [!code ++]

const compat = new FlatCompat() // [!code --]

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2020,
    },
    plugins: {
      'es': pluginES, // [!code --]
      'es-x': pluginESx, // [!code ++]
    },
    rules: {
      'es/no-regexp-lookbehind-assertions': 'error', // [!code --]
      'es-x/no-regexp-lookbehind-assertions': 'error' // [!code ++]
    },
  },

  ...compat.extends('plugin:es/restrict-to-es2018'), // [!code --]
  pluginESx.configs['flat/restrict-to-es2018'], // [!code ++]
]
```

If you're using a legacy config format:

```js
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:es/restrict-to-es2018', // [!code --]
    'plugin:es-x/restrict-to-es2018', // [!code ++]
  ],
  plugins: [
    'es', // [!code --]
    'es-x' // [!code ++]
  ],
  rules: {
    'es/no-regexp-lookbehind-assertions': 'error', // [!code --]
    'es-x/no-regexp-lookbehind-assertions': 'error', // [!code ++]
  }
}
```
