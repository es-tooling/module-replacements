# Typed Array Buffer Codemod

## Introduction

This codemod replaces instances of the `typed-array-buffer` npm module with built-in JavaScript functionalities. Specifically, it transforms calls to `typed-array-buffer` into the corresponding `buffer` property of typed arrays, thereby reducing the number of dependencies and enhancing the performance of the codebase.

### Before

```javascript
import getBuffer from 'typed-array-buffer';

const buffer = getBuffer(myTypedArray);
```

### After

```javascript
const buffer = myTypedArray.buffer;
```