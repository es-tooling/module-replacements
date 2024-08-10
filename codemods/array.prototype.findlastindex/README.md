# Array Prototype Find Last Index Codemod

## Introduction

This codemod transforms the usage of the `Array.prototype.findLastIndex` method to its more efficient counterpart, ensuring consistent coding practices and potentially reducing bundle size by leveraging built-in ES features instead of polyfills or outdated methods.

### Before

```javascript
const array = [1, 2, 3, 4, 5];

const lastIndex = array.findLastIndex(element => element === 3);
```

### After

```javascript
const array = [1, 2, 3, 4, 5];

const lastIndex = array.findLastIndex(element => element === 3);
```