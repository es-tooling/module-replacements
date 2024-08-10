# typedarray.prototype.slice Codemod

## Introduction

This codemod removes the dependency on the `typedarray.prototype.slice` package and replaces its usage with the built-in `slice` method available on TypedArray objects. This change helps reduce unnecessary dependencies and improves the performance of the codebase by utilizing native features.

### Before

```javascript
import slice from 'typedarray.prototype.slice';

const typedArray = new Uint8Array([1, 2, 3]);
const newArray = slice(typedArray, 0, 2);
```

### After

```javascript
const typedArray = new Uint8Array([1, 2, 3]);
const newArray = typedArray.slice(0, 2);
```