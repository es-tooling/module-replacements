# Array Includes Codemod

## Introduction

This codemod replaces instances of the `array-includes` library with the built-in `Array.prototype.includes` method. This transformation reduces unnecessary dependencies by leveraging native JavaScript features, thereby optimizing the codebase and potentially improving performance.

### Before

```javascript
import arrayIncludes from 'array-includes';

const exists = arrayIncludes([1, 2, 3], 2);
```

### After

```javascript
const exists = [1, 2, 3].includes(2);
```