# Array.prototype.flatmap Codemod

## Introduction

This codemod updates any usage of the `Array.prototype.flatmap` method to the more efficient built-in `Array.prototype.flatMap` method. This change helps to reduce dependency on polyfills or external libraries, ultimately improving performance and reducing bundle size.

### Before

```javascript
const result = array.prototype.flatmap(arr, callback);
```

### After

```javascript
const result = arr.flatMap(callback);
```