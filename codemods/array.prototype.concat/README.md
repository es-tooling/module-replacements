# Array.prototype.concat Codemod

## Introduction

This codemod optimizes the usage of the `Array.prototype.concat` method by transforming its usage into a more efficient syntax. This helps to reduce redundancy and improve performance within the codebase.

### Before

```javascript
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combined = array1.concat(array2);
```

### After

```javascript
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combined = [...array1, ...array2];
```