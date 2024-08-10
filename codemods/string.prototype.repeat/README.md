# Replace `for-each` with `Array.prototype.forEach`

## Introduction

This codemod replaces the usage of the `for-each` npm package with the built-in `Array.prototype.forEach` method. The goal is to minimize dependencies and utilize native JavaScript functions, ultimately improving performance and reducing bundle size.

### Before

```javascript
import forEach from 'for-each';

forEach(array, (item) => {
    console.log(item);
});
```

### After

```javascript
array.forEach((item) => {
    console.log(item);
});
```