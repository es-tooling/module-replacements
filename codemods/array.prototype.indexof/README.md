# Array.prototype.indexOf Codemod

## Introduction

This codemod transforms calls to `array.prototype.indexof` (with a lowercase "o") to the built-in `indexOf` method of arrays. This replacement reduces reliance on error-prone custom implementations and leverages the native functionality, improving code performance and readability.

### Before

```javascript
const index = array.prototype.indexof(array, value);
```

### After

```javascript
const index = array.indexOf(value);
```