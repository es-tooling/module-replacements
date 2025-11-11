---
description: Modern alternatives to the eslint-plugin-eslint-comments package for ESLint comment linting
---

# Replacements for `eslint-plugin-eslint-comments`

## `@eslint-community/eslint-plugin-eslint-comments`

[`@eslint-community/eslint-plugin-eslint-comments`](https://github.com/eslint-community/eslint-plugin-eslint-comments) is the actively maintained successor with updated dependencies, flat config support, and continued development.

```ts
import eslintComments from 'eslint-plugin-eslint-comments' // [!code --]
import commentsCommunity from '@eslint-community/eslint-plugin-eslint-comments/configs' // [!code ++]

export default [
  commentsCommunity.recommended, // [!code ++]
  {
    plugins: {
      'eslint-comments': eslintComments, // [!code --]
    },
    rules: {
      'eslint-comments/no-unused-disable': 'error', // [!code --]
      '@eslint-community/eslint-comments/no-unused-disable': 'error', // [!code ++]
    }
  }
]
```

If you're using a legacy config format:

```ts
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:eslint-comments/recommended', // [!code --]
    'plugin:@eslint-community/eslint-comments/recommended' // [!code ++]
  ],
  rules: {
    'eslint-comments/no-unused-disable': 'error', // [!code --]
    '@eslint-community/eslint-comments/no-unused-disable': 'error' // [!code ++]
  }
}
```
