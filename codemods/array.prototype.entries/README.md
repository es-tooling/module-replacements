# Codemod: Replace `array.prototype.entries` with Built-in Method

## Introduction

This codemod replaces the usage of the `array.prototype.entries` function with the built-in `entries` method directly on arrays. By utilizing native methods, we can reduce unnecessary dependencies, improve performance, and simplify the codebase.

### Before

```javascript
import arrayProtoEntries from 'array.prototype.entries';

const arr = [1, 2, 3];
const entries = arrayProtoEntries(arr);
```

### After

```javascript
const arr = [1, 2, 3];
const entries = arr.entries();
```