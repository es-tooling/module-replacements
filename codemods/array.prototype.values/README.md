# Codemod: Replace `Array.prototype.values` Usage

## Introduction

This codemod transforms instances of `Array.prototype.values` in the codebase to use the built-in `values` method directly, thereby reducing dependency on unnecessary polyfills or alternatives. This change helps in optimizing the code by leveraging native JavaScript features, which can improve performance and reduce bundle size.

### Before

```javascript
const arr = [1, 2, 3];
const iterator = Array.prototype.values.call(arr);
```

### After

```javascript
const arr = [1, 2, 3];
const iterator = arr.values();
```