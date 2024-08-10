# is-array-buffer Codemod

## Introduction

This codemod removes the dependency on the `is-array-buffer` package by replacing its usage with the built-in `instanceof` operator. This change reduces unnecessary dependencies, simplifying the codebase and potentially improving performance.

### Before

```javascript
import isArrayBuffer from 'is-array-buffer';

const checkBuffer = (data) => {
  return isArrayBuffer(data);
};
```

### After

```javascript
const checkBuffer = (data) => {
  return (data instanceof ArrayBuffer);
};
```