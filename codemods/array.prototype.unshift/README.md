# array.prototype.unshift Codemod

## Introduction

This codemod replaces occurrences of the `array.prototype.unshift` function from an npm package with the built-in `Array.prototype.unshift` method. This change reduces unnecessary dependencies, thus optimizing the codebase's size and performance.

### Before

```javascript
import unshift from 'array.prototype.unshift';

const arr = [1, 2];
unshift(arr, 0);
```

### After

```javascript
const arr = [1, 2];
arr.unshift(0);
```