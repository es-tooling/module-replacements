# array.prototype.slice Codemod

## Introduction

This codemod replaces instances of the `array.prototype.slice` module with the native `Array.prototype.slice` method. By doing this, it eliminates the need for an additional dependency, thus helping to reduce bundle size and improve performance by using built-in JavaScript functionality.

### Before

```javascript
import arraySlice from 'array.prototype.slice';

const slicedArray = arraySlice(array, 1, 3);
```

### After

```javascript
const slicedArray = array.slice(1, 3);
```