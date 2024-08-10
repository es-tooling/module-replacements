# is-regexp Codemod

## Introduction

This codemod removes the dependency on the `is-regexp` package by replacing its function calls with a native JavaScript expression that checks if a value is an instance of `RegExp`. This change ultimately reduces the bundle size and improves the performance of the codebase by eliminating unnecessary imports.

### Before

```javascript
import isRegexp from 'is-regexp';

const result = isRegexp(value);
```

### After

```javascript
const result = (value instanceof RegExp);
```