# String.raw Codemod

## Introduction

This codemod replaces the usage of the `string.raw` package with the built-in `String.raw` method. By transforming tagged template expressions that utilize `string.raw`, this codemod helps reduce the number of external dependencies in the codebase and improves performance by leveraging native JavaScript features.

### Before

```js
import string from 'string.raw';

const result = string.raw`Hello, ${name}!`;
```

### After

```js
const result = String.raw`Hello, ${name}!`;
```