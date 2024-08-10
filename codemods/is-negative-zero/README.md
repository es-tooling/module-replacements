# is-negative-zero Codemod

## Introduction

This codemod replaces the usage of the `is-negative-zero` npm module with the native `Object.is` method. It optimizes the code by eliminating unnecessary dependencies, thereby reducing bundle size and improving performance. The transformation handles both logical expressions and direct calls to the `is-negative-zero` function.

### Before

```javascript
import isNegativeZero from 'is-negative-zero';

const value = someValue || Object.is(value, -0) || isNegativeZero(value);
if (isNegativeZero(value)) {
    // handle negative zero case
}
```

### After

```javascript
const value = someValue || Object.is(value, -0);
if (Object.is(value, -0)) {
    // handle negative zero case
}
```