# String.prototype.trim Codemod

## Introduction

This codemod replaces uses of the `String.prototype.trim` method from a polyfill or external library with the built-in ES feature. By utilizing the native implementation, it helps reduce unnecessary dependencies and improves both the performance and maintainability of the codebase.

### Before

```javascript
import trim from 'string.prototype.trim';

const cleanString = trim(someString);
```

### After

```javascript
const cleanString = someString.trim();
```